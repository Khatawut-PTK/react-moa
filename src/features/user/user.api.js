import api from "../../services/axios";

const userApi = {
  getAll: () => api.get("/users"),
  getById: (id) => api.get(`/users/${id}`),
  create: (data) => api.post("/users", data),
  update: (id, data) => api.put(`/users/${id}`, data),
  resetPassword: (id, password) => api.patch(`/users/${id}`, { password }),
  updateStatus: (id, status) => api.patch(`/users/${id}`, { status }),
  delete: (id) => api.delete(`/users/${id}`),
};

export default userApi;