import { StatusFilter } from "@/types/referral-type";
import { Filter } from "lucide-react";

interface FilterButtonsProps {
  activeFilter: StatusFilter;
  onFilterChange: (filter: StatusFilter) => void;
}

export const FilterButtons: React.FC<FilterButtonsProps> = ({
  activeFilter,
  onFilterChange,
}) => {
  const filters: { value: StatusFilter; label: string; activeColor: string }[] =
    [
      { value: "all", label: "All", activeColor: "bg-indigo-600" },
      { value: "pending", label: "Pending", activeColor: "bg-amber-600" },
      { value: "completed", label: "Completed", activeColor: "bg-green-600" },
    ];

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Filter className="h-4 w-4 text-gray-500" />
      <span className="text-sm font-medium text-gray-700">Filter:</span>
      <div className="flex gap-2">
        {filters.map(({ value, label, activeColor }) => (
          <button
            key={value}
            onClick={() => onFilterChange(value)}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              activeFilter === value
                ? `${activeColor} text-white`
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};
