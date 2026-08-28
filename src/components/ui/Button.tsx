import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/cn";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center border font-mono text-sm uppercase tracking-wider transition-colors disabled:opacity-50",
          variant === "primary" &&
            "border-ink bg-ink text-paper hover:bg-transparent hover:text-ink",
          variant === "outline" &&
            "border-border bg-transparent text-ink hover:border-ink",
          variant === "ghost" &&
            "border-transparent bg-transparent text-ink hover:underline",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
