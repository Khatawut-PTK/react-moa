import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,

      setAuth: (data) =>
        set({
          user: data.user,
          token: data.token,
        }),

      logout: () =>
        set({
          user: null,
          token: null,
        }),
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useAuthStore;