"use client";

import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/useAuthStore";
import { ProfileDropdown } from "../navbar/profile-dropdown";
import { LoginButton } from "../navbar/login-button";
import Link from "next/link";

export const NavBar = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <nav
      className={cn(
        "bg-background flex w-full items-center justify-between px-4 py-2 shadow",
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href={"/"}
          className="from-primary/70 to-secondary/70 bg-gradient-to-r bg-clip-text text-xl font-bold text-transparent sm:text-2xl"
        >
          TwinCredits
        </Link>

        {user != null ? <ProfileDropdown user={user} /> : <LoginButton />}
      </div>
    </nav>
  );
};
