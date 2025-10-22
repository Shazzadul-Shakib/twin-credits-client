import { StatusFilter } from "@/types/referral-type";
import { XCircle } from "lucide-react";

interface EmptyStateProps {
  statusFilter: StatusFilter;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ statusFilter }) => (
  <div className="py-12 text-center">
    <XCircle className="mx-auto mb-3 h-12 w-12 text-gray-400" />
    <p className="font-medium text-gray-600">No referrals found</p>
    <p className="mt-1 text-sm text-gray-500">
      {statusFilter !== "all"
        ? `No ${statusFilter} referrals available`
        : "Start referring friends to see them here"}
    </p>
  </div>
);
