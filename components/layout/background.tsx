import { cn } from "@/lib/utils";

type BackgroundProps = {
  className?: string;
};

export function Background({ className }: BackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,var(--glow)_0,transparent_28%),radial-gradient(circle_at_84%_18%,var(--glow-secondary)_0,transparent_30%),radial-gradient(circle_at_74%_82%,var(--glow)_0,transparent_34%)] opacity-55 blur-3xl" />
      <div className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-[var(--glow)] opacity-20 blur-3xl" />
      <div className="absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-[var(--glow-secondary)] opacity-24 blur-3xl" />
      <div className="absolute bottom-[-12rem] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[var(--glow)] opacity-16 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid)_1px,transparent_1px)] bg-[size:10rem_10rem] opacity-45 [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,transparent_34%,var(--background)_92%)]" />
    </div>
  );
}
