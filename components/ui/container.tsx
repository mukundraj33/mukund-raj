import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  size?: "md" | "lg" | "xl";
};

const sizes = {
  md: "max-w-4xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
};

export function Container({
  children,
  className,
  size = "lg",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full px-5 sm:px-8", sizes[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}
