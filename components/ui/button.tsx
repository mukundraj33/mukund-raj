import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  icon?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-transparent bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] text-[var(--button-text)] shadow-[0_0_28px_var(--shadow)] hover:shadow-[0_0_40px_var(--shadow)]",
  secondary:
    "border-[var(--border-strong)] bg-[var(--accent-soft)] text-foreground hover:border-[var(--accent)] hover:bg-[var(--card-strong)]",
  ghost:
    "border-transparent bg-transparent text-muted hover:bg-[var(--accent-soft)] hover:text-foreground",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-10 gap-2 px-4 text-sm",
  md: "h-12 gap-2.5 px-5 text-sm",
  lg: "h-14 gap-3 px-7 text-base",
};

export function buttonClasses({
  className,
  size = "md",
  variant = "primary",
}: {
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
} = {}) {
  return cn(
    "inline-flex items-center justify-center rounded-full border font-display font-semibold outline-none transition duration-200 focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );
}

export function Button({
  children,
  className,
  icon,
  size = "md",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonClasses({ className, size, variant })}
      type={type}
      {...props}
    >
      <span>{children}</span>
      {icon ? <span className="text-icon">{icon}</span> : null}
    </button>
  );
}
