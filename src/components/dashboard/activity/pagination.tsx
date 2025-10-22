import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalCount: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  totalCount,
  itemsPerPage,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  return (
    <div className="rounded-b-xl border-t border-gray-200 bg-gray-50 px-6 py-4">
      <div className="flex flex-col items-center justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm text-gray-600">
            Showing{" "}
            <span className="font-medium">
              {(currentPage - 1) * itemsPerPage + 1}
            </span>{" "}
            -{" "}
            <span className="font-medium">
              {Math.min(currentPage * itemsPerPage, totalCount)}
            </span>{" "}
            of <span className="font-medium">{totalCount}</span> referrals
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="rounded-md border border-gray-300 p-2 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Previous page"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex gap-1">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => onPageChange(i + 1)}
                className={`h-8 w-8 rounded-md text-sm font-medium transition-colors ${
                  currentPage === i + 1
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                aria-label={`Page ${i + 1}`}
                aria-current={currentPage === i + 1 ? "page" : undefined}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="rounded-md border border-gray-300 p-2 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Next page"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
