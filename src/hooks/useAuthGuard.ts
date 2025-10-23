"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";

export const useAuthGuard = () => {
  const { user } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // not logged in -> block dashboard
    if (!user && pathname === "/dashboard") {
      router.replace("/login");
    }

    // logged in -> block login/register
    if (user && (pathname === "/login" || pathname === "/register")) {
      router.replace("/");
    }
  }, [user, pathname, router]);
};
