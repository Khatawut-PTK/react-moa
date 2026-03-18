// src/features/user/user.hook.js
import { useState, useEffect } from "react";
import userApi from "./user.api";

const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const response = await userApi.getAll();
            setUsers(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return { users, loading, error };
};

export default useUsers;
