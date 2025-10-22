"use client";
import { cn } from "@/lib/utils";
import { LoginButton } from "../navbar/login-button";
import { useAuthStore } from "@/store/useAuthStore";
import { useQuery } from "@tanstack/react-query";
import { authApi } from "@/tanstack/api-services/auth-api";
import { useEffect } from "react";

export const NavBar = () => {
  const { setUser, user } = useAuthStore();

  // get logged user query
  const {
    isPending: isLoggedUserLoading,
    data: loggedUser,
    // isError: IsLoggedUserError,
    // error: loggedUserError,
  } = useQuery({
    queryKey: ["User"],
    queryFn: authApi.loggedUser,
    enabled: !user,
  });

  useEffect(() => {
    if (loggedUser && !user) {
      setUser(loggedUser.data);
    }
  }, [loggedUser, user, setUser]);

  console.log(user);
  return (
    <nav
      className={cn(
        "bg-background flex w-full items-center justify-between px-4 py-2 shadow",
      )}
    >
      <div className="mx-auto flex w-[68rem] items-center justify-between">
        {/* Gradient text logo */}
        <div className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent">
          TwinCredits
        </div>

        {/* Login button */}
        <LoginButton />
      </div>
    </nav>
  );
};
