import { queryClient } from "@/tanstack/query-client";
import { authApi } from "@/tanstack/api-services/auth-api";
import { useAuthStore } from "@/store/useAuthStore";

export const refreshUser = async () => {
  const { setUser } = useAuthStore.getState();
  try {
    const res = await authApi.loggedUser();
    setUser(res.data);
    queryClient.setQueryData(["User"], res);
  } catch (err) {
    console.error("Failed to refresh user", err);
  }
};
