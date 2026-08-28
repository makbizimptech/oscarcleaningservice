import { cn } from "@/lib/utils";
import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
          {
            "bg-brand-accent text-white hover:bg-brand-accent/90": variant === "primary",
            "bg-brand-navy text-white hover:bg-brand-navy/90": variant === "secondary",
            "border border-input hover:bg-accent hover:text-accent-foreground border-gray-300 text-brand-navy hover:bg-gray-50": variant === "outline",
            "hover:bg-brand-soft text-brand-navy": variant === "ghost",
            "h-9 px-3 text-sm": size === "sm",
            "h-11 px-6 py-2": size === "md",
            "h-14 px-8 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
