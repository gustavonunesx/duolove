import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "light" | "rose";
  glow?: boolean;
}

export function GlassCard({
  className,
  variant = "default",
  glow = false,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 transition-all duration-300",
        variant === "default" && "glass",
        variant === "light" && "glass-light",
        variant === "rose" &&
          "glass border border-rose/20 bg-rose/5",
        glow && "glow-rose-sm",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
