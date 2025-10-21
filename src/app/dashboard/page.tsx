import { ReferraHistoryCard } from "@/components/dashboard/activity-card";
import { ReferralLinkCard } from "@/components/dashboard/referral-link-card";
import { ReferreStatsCard } from "@/components/dashboard/referred-user-card";

export default function RegisterPage() {
  return (
    <div>
      <h2 className="mb-6 text-xl font-bold">Your Referral Dashboard</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ReferreStatsCard title="Referred Users" count={1} />
        <ReferreStatsCard title="Converted Users" count={1} />
        <ReferreStatsCard title="Total Credits" count={1} />
      </div>
      <ReferralLinkCard referralLink="abc" />
      <ReferraHistoryCard />
    </div>
  );
}
