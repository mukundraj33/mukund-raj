import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type GlowProps = HTMLAttributes<HTMLDivElement> & {
  size?: "sm" | "md" | "lg";
  tone?: "primary" | "secondary";
};

const sizes = {
  sm: "h-32 w-32",
  md: "h-56 w-56",
  lg: "h-80 w-80",
};

const tones = {
  primary: "bg-[var(--glow)]",
  secondary: "bg-[var(--glow-secondary)]",
};

export function Glow({
  className,
  size = "md",
  tone = "primary",
  ...props
}: GlowProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full opacity-35 blur-3xl",
        sizes[size],
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
