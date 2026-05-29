export type ThemeColor = "neutral" | "blue" | "green" | "red" | "violet" | "amber";

export interface ThemeColorConfig {
  name: string;
  nameEn: string;
  primary: string;
  primaryForeground: string;
}

export const themeColors: Record<ThemeColor, ThemeColorConfig> = {
  neutral: {
    name: "黑色",
    nameEn: "Neutral",
    primary: "oklch(0.269 0 0)",
    primaryForeground: "oklch(0.985 0 0)",
  },
  blue: {
    name: "蓝色",
    nameEn: "Blue",
    primary: "oklch(0.546 0.245 262.881)",
    primaryForeground: "oklch(0.985 0 0)",
  },
  green: {
    name: "绿色",
    nameEn: "Green",
    primary: "oklch(0.627 0.194 149.214)",
    primaryForeground: "oklch(0.985 0 0)",
  },
  red: {
    name: "红色",
    nameEn: "Red",
    primary: "oklch(0.577 0.245 27.325)",
    primaryForeground: "oklch(0.985 0 0)",
  },
  violet: {
    name: "紫色",
    nameEn: "Violet",
    primary: "oklch(0.606 0.25 292.717)",
    primaryForeground: "oklch(0.985 0 0)",
  },
  amber: {
    name: "琥珀",
    nameEn: "Amber",
    primary: "oklch(0.769 0.188 70.08)",
    primaryForeground: "oklch(0.1 0 0)",
  },
};

export const defaultThemeColor: ThemeColor = "blue";
