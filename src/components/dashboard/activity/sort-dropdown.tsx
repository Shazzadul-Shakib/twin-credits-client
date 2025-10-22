import { SortBy, SortOrder } from "@/types/referral-type";
import { ArrowUpDown } from "lucide-react";

interface SortDropdownProps {
  sortBy: SortBy;
  sortOrder: SortOrder;
  onSortChange: (sortBy: SortBy, sortOrder: SortOrder) => void;
}

export const SortDropdown: React.FC<SortDropdownProps> = ({
  sortBy,
  sortOrder,
  onSortChange,
}) => {
  const handleChange = (value: string) => {
    const [field, order] = value.split("-");
    onSortChange(field as SortBy, order as SortOrder);
  };

  return (
    <div className="flex items-center gap-2">
      <ArrowUpDown className="h-4 w-4 text-gray-500" />
      <span className="text-sm font-medium text-gray-700">Sort by:</span>
      <select
        value={`${sortBy}-${sortOrder}`}
        onChange={(e) => handleChange(e.target.value)}
        className="rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
      >
        <option value="createdAt-desc">Newest First</option>
        <option value="createdAt-asc">Oldest First</option>
      </select>
    </div>
  );
};
