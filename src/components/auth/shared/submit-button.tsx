import { TSubmitButtonProps } from "@/types/auth.type";
import { Loader2 } from "lucide-react";

export const SubmitButton: React.FC<TSubmitButtonProps> = ({
  isSubmitting,
  text,
  className = "",
}) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`from-primary to-secondary flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-gradient-to-r px-4 py-2 text-white focus:ring-2 focus:outline-none disabled:opacity-50 ${className}`}
    >
      {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : text}
    </button>
  );
};
