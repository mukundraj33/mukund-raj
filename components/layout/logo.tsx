import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <a
      aria-label="Mukund Raj home"
      className={cn(
        "font-display text-xl font-extrabold text-gradient outline-none focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
        className,
      )}
      href="#home"
    >
      mukund_ {/* Edit logo text here. */}
    </a>
  );
}
