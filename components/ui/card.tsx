import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  interactive?: boolean;
};

export function Card({ children, className, interactive, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card/90 p-6 shadow-[0_20px_70px_rgb(0_0_0_/_0.28)] backdrop-blur-xl",
        interactive &&
          "transition duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-[0_24px_90px_var(--shadow)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
