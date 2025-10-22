import { CheckCircle, Clock } from "lucide-react";

interface StatusBadgeProps {
  status: "pending" | "completed";
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const isCompleted = status === "completed";

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        isCompleted
          ? "bg-green-100 text-green-700"
          : "bg-amber-100 text-amber-700"
      }`}
    >
      <span className="flex items-center gap-1">
        {isCompleted ? (
          <>
            <CheckCircle className="h-3 w-3" />
            Completed
          </>
        ) : (
          <>
            <Clock className="h-3 w-3" />
            Pending
          </>
        )}
      </span>
    </span>
  );
};
