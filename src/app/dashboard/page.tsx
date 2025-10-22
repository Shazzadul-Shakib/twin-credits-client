import { ReferraHistoryCard } from "@/components/dashboard/activity-card";
import { ReferralLinkCard } from "@/components/dashboard/referral-link-card";
import { ReferralStats } from "@/components/dashboard/referral-stats";

export default function RegisterPage() {
  return (
    <div>
      <h2 className="mb-6 text-xl font-bold">Your Referral Dashboard</h2>
      <ReferralStats />
      <ReferralLinkCard />
      <ReferraHistoryCard />
    </div>
  );
}
