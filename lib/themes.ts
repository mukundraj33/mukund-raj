export const themes = [
  { name: "Dark Purple", value: "dark-purple" },
  { name: "Midnight Blue", value: "midnight-blue" },
  { name: "Emerald Neon", value: "emerald-neon" },
  { name: "Crimson Red", value: "crimson-red" },
  { name: "Cyber Cyan", value: "cyber-cyan" },
] as const;

export type ThemeName = (typeof themes)[number]["value"];
