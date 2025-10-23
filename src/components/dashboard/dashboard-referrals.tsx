"use client";
import { ReferralHistoryCard } from "@/components/dashboard/activity-card";
import { ReferralLinkCard } from "@/components/dashboard/referral-link-card";
import { ReferralStats } from "@/components/dashboard/referral-stats";
import { referralApi } from "@/tanstack/api-services/referral-api";
import { useQuery } from "@tanstack/react-query";

export const DashboardReferrals = () => {
  const { isPending, data: response } = useQuery({
    queryKey: ["Referral"],
    queryFn: () =>
      referralApi.getReferredUsers({
        limit: 5,
        status: "all",
      }),
    refetchInterval: 1 * 1000,
    refetchIntervalInBackground: true,
  });

  return (
    <>
      <ReferralStats metadata={response?.metadata} isLoading={isPending} />
      <ReferralLinkCard />
      <ReferralHistoryCard />
    </>
  );
};
