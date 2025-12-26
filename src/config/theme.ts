export type ThemeColor = "blue" | "green" | "purple" | "orange" | "rose";

export interface ThemeColorConfig {
  name: string;
  primary: string;
  primaryForeground: string;
}

export const themeColors: Record<ThemeColor, ThemeColorConfig> = {
  blue: {
    name: "蓝色",
    primary: "oklch(0.546 0.245 262.881)",
    primaryForeground: "oklch(0.985 0 0)",
  },
  green: {
    name: "绿色",
    primary: "oklch(0.627 0.194 149.214)",
    primaryForeground: "oklch(0.985 0 0)",
  },
  purple: {
    name: "紫色",
    primary: "oklch(0.627 0.265 303.9)",
    primaryForeground: "oklch(0.985 0 0)",
  },
  orange: {
    name: "橙色",
    primary: "oklch(0.705 0.213 47.604)",
    primaryForeground: "oklch(0.985 0 0)",
  },
  rose: {
    name: "玫红",
    primary: "oklch(0.645 0.246 16.439)",
    primaryForeground: "oklch(0.985 0 0)",
  },
};

export const defaultThemeColor: ThemeColor = "blue";
