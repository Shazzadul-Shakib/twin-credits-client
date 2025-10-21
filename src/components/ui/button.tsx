"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors",
        "disabled:pointer-events-none disabled:opacity-50",
        "from-primary to-secondary text-background bg-gradient-to-br",
        "cursor-pointer px-4 py-2",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };
