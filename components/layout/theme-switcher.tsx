"use client";

import { Palette } from "lucide-react";
import { useEffect, useState } from "react";
import { themes, type ThemeName } from "@/lib/themes";

const storageKey = "portfolio-theme";
const defaultTheme: ThemeName = "dark-purple";

export function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState<ThemeName>(defaultTheme);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(storageKey) as ThemeName | null;
    const nextTheme =
      savedTheme && themes.some((item) => item.value === savedTheme)
        ? savedTheme
        : defaultTheme;

    setActiveTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  function handleThemeChange() {
    const currentIndex = themes.findIndex((item) => item.value === activeTheme);
    const nextTheme = themes[(currentIndex + 1) % themes.length].value as ThemeName;
    setActiveTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(storageKey, nextTheme);
  }

  return (
    <button
      aria-label={`Switch theme (current: ${activeTheme})`}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/80 text-foreground shadow-[0_0_18px_var(--shadow)] outline-none backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:shadow-[0_0_24px_var(--shadow)] focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
      onClick={handleThemeChange}
      type="button"
    >
      <Palette aria-hidden="true" className="h-4 w-4 text-icon" />
    </button>
  );
}
