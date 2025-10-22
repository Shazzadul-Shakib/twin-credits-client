"use client";
import React from "react";
import { ReferreStatsCard } from "@/components/dashboard/referred-user-card";
import { useAuthStore } from "@/store/useAuthStore";
import { TReferralMetadata } from "@/types/referral-type";
import { StatsSkeletonCard } from "./skeleton/stats-skeleton";

export const ReferralStats = ({
  metadata,
  isLoading,
}: {
  metadata?: TReferralMetadata;
  isLoading: boolean;
}) => {
  const { user } = useAuthStore();

  if (isLoading || !metadata) {
    return <StatsSkeletonCard />;
  }

  const { totalCount, completedCount, pendingCount } = metadata;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <ReferreStatsCard title="Referred Users" count={totalCount ?? 0} />
      <ReferreStatsCard title="Converted Users" count={completedCount ?? 0} />
      <ReferreStatsCard title="Pending Users" count={pendingCount ?? 0} />
      <ReferreStatsCard title="Total Credits" count={user?.credits ?? 0} />
    </div>
  );
};
