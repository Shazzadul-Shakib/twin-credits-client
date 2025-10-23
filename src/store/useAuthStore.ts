import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { IUser } from "@/types/auth.type";

interface AuthState {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  clearUser: () => void;
  logoutCompletely: () => void; // <-- new
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
      logoutCompletely: () => {
        set({ user: null });
        // Clear persisted storage manually
        localStorage.removeItem("auth-storage");
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
