import api from "../../services/axios";

const authApi = {
    login: (data) => api.post("/auth/login", data),
    logout: () => api.post("/auth/logout"),
    register: (data) => api.post("/auth/register", data),
    me: () => api.get("/auth/me"),
};

export default authApi;