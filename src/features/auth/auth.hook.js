// src/features/auth/auth.hook.js
import { useState, useEffect } from "react";
import authApi from "./auth.api";

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    setUser(null);
                    setLoading(false);
                    return;
                }

                // const response = await authApi.me();
                // setUser(response.data);
            } catch (err) {
                setError(err);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    const login = async (userName, password) => {
        try {
            const response = await authApi.login({ userName, password });
            localStorage.setItem("token", response.data.token);
            setUser(response.data.user);
            setError(null);
            return response;
        } catch (err) {
            setError(err);
            throw err;
        }
    };

    const logout = async () => {
        try {
            await authApi.logout();
            localStorage.removeItem("token");
            localStorage.removeItem("auth-storage");
            setUser(null);
            setError(null);
        } catch (err) {
            setError(err);
            throw err;
        }
    };

    const register = async (userData) => {
        try {
            const response = await authApi.register(userData);
            localStorage.setItem("token", response.data.token);
            setUser(response.data.user);
            setError(null);
        } catch (err) {
            setError(err);
            throw err;
        }
    };

    return { user, loading, error, login, logout, register };
};

export default useAuth;

