import { Referral } from "@/types/referral-type";
import { StatusBadge } from "./status-badge";

interface ReferralCardProps {
  referral: Referral;
  formatDate: (date: string) => string;
}

export const ReferralCard: React.FC<ReferralCardProps> = ({
  referral,
  formatDate,
}) => (
  <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4 transition-shadow hover:shadow-md">
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-lg font-bold text-white shadow-md">
        {referral.referredId.name.charAt(0).toUpperCase()}
      </div>
      <div>
        <p className="font-semibold text-gray-900">
          {referral.referredId.name}
        </p>
        <p className="text-sm text-gray-500">
          Referred on {formatDate(referral.createdAt)}
        </p>
      </div>
    </div>
    <div className="flex items-center gap-3">
      <StatusBadge status={referral.status} />
    </div>
  </div>
);
