"use client";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "@/store/useAuthStore";
import { authApi } from "@/tanstack/api-services/auth-api";

export const useAuthSync = () => {
  const { setUser, user, clearUser } = useAuthStore();

  const {
    isPending: isLoading,
    data: loggedUser,
    isError,
  } = useQuery({
    queryKey: ["User"],
    queryFn: authApi.loggedUser,
    enabled: !!user,
    staleTime: 10 * 1000,
    refetchInterval: 10 * 1000,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    retry: false,
  });

  useEffect(() => {
    if (loggedUser?.data) {
      const isDifferent =
        JSON.stringify(user) !== JSON.stringify(loggedUser.data);
      if (isDifferent) {
        setUser(loggedUser.data);
      }
    }
  }, [loggedUser, user, setUser]);

  useEffect(() => {
    if (isError) {
      clearUser();
    }
  }, [isError, clearUser]);

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
  };
};
