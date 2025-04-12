import { createContext, useContext, useState, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { storage } from "../utils/storage";
import { usePathname, useRouter } from "expo-router";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const pathname = usePathname();
    const router = useRouter();

    const verify = async () => {
        setLoading(true);

        const token = await storage.getItem("auth_token");
        if (!token) {
            setLoading(false);
            return setUser(null);
        }

        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/login`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            method: "GET",
        });

        if (!response.ok) {
            setLoading(false);
            return setUser(null);
        }

        const { data } = await response.json();
        setUser(data);
        setLoading(false);
    };

    const logout = async () => {
        await storage.deleteItem("auth_token");
        setUser(null);
        setLoading(false);
        alert("Cerrando sesión...");
        router.push("/");
    };

    const reload = () => {
        verify();
    };

    useEffect(() => {
        verify();
    }, [pathname]);

    if (loading) {
        return (
            <View className="flex-1 items-center justify-center">
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <AuthContext.Provider value={{ data: user, logout, reload, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
