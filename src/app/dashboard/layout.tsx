"use client";

import { AnimateLogo } from "@/components/dashboard/skeleton/animate-logo-skeleton";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuthStore();
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Wait until Zustand store initializes (user !== undefined)
    if (user === undefined) return;

    if (!user) {
      router.replace("/login");
    } else {
      setIsChecking(false);
    }
  }, [user, router]);

  if (isChecking) {
    return <AnimateLogo />;
  }

  return <>{children}</>;
}
