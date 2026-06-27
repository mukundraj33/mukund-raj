"use client";

import { Palette } from "lucide-react";
import { useEffect, useRef } from "react";
import { themes, type ThemeName } from "@/lib/themes";

const storageKey = "portfolio-theme";
const defaultTheme: ThemeName = "dark-purple";

export function ThemeSwitcher() {
  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(storageKey) as ThemeName | null;
    const nextTheme =
      savedTheme && themes.some((item) => item.value === savedTheme)
        ? savedTheme
        : defaultTheme;

    document.documentElement.dataset.theme = nextTheme;
    if (selectRef.current) {
      selectRef.current.value = nextTheme;
    }
  }, []);

  function handleThemeChange(nextTheme: ThemeName) {
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(storageKey, nextTheme);
  }

  return (
    <label className="relative inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-2 text-sm text-muted backdrop-blur-xl transition hover:border-[var(--border-strong)]">
      <Palette aria-hidden="true" className="h-4 w-4 text-icon" />
      <span className="sr-only">Select color theme</span>
      <select
        aria-label="Select color theme"
        className="max-w-28 appearance-none bg-transparent pr-1 font-medium text-foreground outline-none"
        defaultValue={defaultTheme}
        onChange={(event) => handleThemeChange(event.target.value as ThemeName)}
        ref={selectRef}
      >
        {themes.map((item) => (
          <option
            className="bg-background text-foreground"
            key={item.value}
            value={item.value}
          >
            {item.name}
          </option>
        ))}
      </select>
    </label>
  );
}
