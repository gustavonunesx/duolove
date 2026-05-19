"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ButtonHTMLAttributes } from "react";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "rose" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  glow?: boolean;
}

export function GradientButton({
  className,
  variant = "rose",
  size = "md",
  glow = false,
  children,
  disabled,
  ...props
}: GradientButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        size === "sm" && "h-9 px-4 text-sm",
        size === "md" && "h-11 px-6 text-base",
        size === "lg" && "h-14 px-8 text-lg",
        variant === "rose" && "gradient-rose text-white",
        variant === "outline" &&
          "border border-rose/50 text-rose bg-transparent hover:bg-rose/10",
        variant === "ghost" &&
          "text-muted-foreground bg-transparent hover:bg-muted hover:text-foreground",
        glow && variant === "rose" && "glow-rose",
        className,
      )}
      {...(props as object)}
    >
      {children}
    </motion.button>
  );
}
