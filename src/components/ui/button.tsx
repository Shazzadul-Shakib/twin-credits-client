"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick, loading }) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors",
        "disabled:pointer-events-none disabled:opacity-50",
        "from-primary/70 to-secondary/70 text-background bg-gradient-to-br",
        "cursor-pointer px-4 py-2",
        className,
      )}
      onClick={onClick}
      disabled={loading}
    >
      {loading ? (
        <Loader2 className="animate-spin h-4 w-4 mr-2" />
      ) : null}
      {children}
    </button>
  );
};

export { Button };
