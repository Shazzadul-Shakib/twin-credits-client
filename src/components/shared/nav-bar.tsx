"use client";

import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/useAuthStore";
import { ProfileDropdown } from "../navbar/profile-dropdown";
import { LoginButton } from "../navbar/login-button";

export const NavBar = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <nav
      className={cn(
        "bg-background flex w-full items-center justify-between px-4 py-2 shadow",
      )}
    >
      <div className="mx-auto flex w-[68rem] items-center justify-between">
        <div className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent">
          TwinCredits
        </div>

        {user ? <ProfileDropdown user={user} /> : <LoginButton />}
      </div>
    </nav>
  );
};
