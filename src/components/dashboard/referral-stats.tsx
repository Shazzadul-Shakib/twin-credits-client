'use client'
import { ReferreStatsCard } from "@/components/dashboard/referred-user-card";
import { useAuthStore } from "@/store/useAuthStore";

export const ReferralStats = () => {
  const { user } = useAuthStore();
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <ReferreStatsCard title="Referred Users" count={1} />
      <ReferreStatsCard title="Converted Users" count={1} />
      <ReferreStatsCard title="Total Credits" count={user?.credits ?? 0} />
    </div>
  );
};
