import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function Logo({ className, size = "md", showText = true }: LogoProps) {
  const iconSize = size === "sm" ? 24 : size === "md" ? 32 : 44;
  const textClass =
    size === "sm" ? "text-lg" : size === "md" ? "text-xl" : "text-3xl";

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#CF4558" />
            <stop offset="100%" stopColor="#7B2030" />
          </linearGradient>
        </defs>
        <path
          d="M16 27.5C16 27.5 4 20.5 4 11.5C4 8.46 6.46 6 9.5 6C11.74 6 13.68 7.34 14.72 9.22C15.1 9.9 15.52 9.9 15.9 9.22C16.94 7.34 18.88 6 21.12 6C23.76 6 26 8.24 26 10.88C26 19.88 16 27.5 16 27.5Z"
          fill="url(#logo-grad)"
        />
      </svg>
      {showText && (
        <span
          className={cn(
            "font-bold tracking-tight text-ivory",
            textClass,
          )}
        >
          DuoLove
        </span>
      )}
    </div>
  );
}
