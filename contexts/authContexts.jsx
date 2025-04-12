import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (user_email, user_password) => {
        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/login`, {
            method: "POST",
            body: JSON.stringify({ user_email, user_password }),
        });

        if (!response.ok) return;

        const { data } = await response.json();
        const token = data.token;

        localStorage.setItem("auth_token", token);
    };

    const verify = async () => {
        const token = localStorage.getItem("auth_token");
        if (!token) return setUser(null);

        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/login`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            method: "GET",
        });

        if (!response.ok) return setUser(null);

        const { data } = await response.json();
        setUser(data);
    };

    const logout = () => {
        localStorage.removeItem("auth_token");
        setUser(null);
    };

    useEffect(() => {
        verify();
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
