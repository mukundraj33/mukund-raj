import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionTitleProps = HTMLAttributes<HTMLDivElement> & {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionTitle({
  align = "center",
  className,
  description,
  eyebrow,
  title,
  ...props
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
        className,
      )}
      {...props}
    >
      {eyebrow ? (
        <p className="font-display text-sm font-semibold uppercase text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-8 text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
