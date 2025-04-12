import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = async (user_email, user_password) => {
        setLoading(true);
        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/login`, {
            method: "POST",
            body: JSON.stringify({ user_email, user_password }),
        });

        if (!response.ok) {
            setLoading(false);
            return;
        }

        const { data } = await response.json();
        const token = data.token;

        localStorage.setItem("auth_token", token);
        setLoading(false);
    };

    const verify = async () => {
        setLoading(true);
        const token = localStorage.getItem("auth_token");
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

    const logout = () => {
        localStorage.removeItem("auth_token");
        setUser(null);
        setLoading(false);
    };

    const reload = () => {
        verify();
    };

    useEffect(() => {
        verify();
    }, []);

    return (
        <AuthContext.Provider value={{ data: user, login, logout, reload, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
