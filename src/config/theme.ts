export type ThemeColor = "neutral" | "red" | "orange" | "amber" | "green" | "teal" | "cyan" | "blue" | "violet" | "pink" | "rose";

export interface ThemeColorConfig {
  name: string;
  nameEn: string;
  primary: string;
  primaryForeground: string;
}

export const themeColors: Record<ThemeColor, ThemeColorConfig> = {
  // 中性色
  neutral: {
    name: "黑色",
    nameEn: "Neutral",
    primary: "oklch(0.269 0 0)",
    primaryForeground: "oklch(0.985 0 0)",
  },
  // 暖色
  red: {
    name: "红色",
    nameEn: "Red",
    primary: "oklch(0.577 0.245 27.325)",
    primaryForeground: "oklch(0.985 0 0)",
  },
  orange: {
    name: "橙色",
    nameEn: "Orange",
    primary: "oklch(0.705 0.213 47.604)",
    primaryForeground: "oklch(0.985 0 0)",
  },
  amber: {
    name: "琥珀",
    nameEn: "Amber",
    primary: "oklch(0.769 0.188 70.08)",
    primaryForeground: "oklch(0.1 0 0)",
  },
  // 绿色系
  green: {
    name: "绿色",
    nameEn: "Green",
    primary: "oklch(0.627 0.194 149.214)",
    primaryForeground: "oklch(0.985 0 0)",
  },
  teal: {
    name: "蓝绿",
    nameEn: "Teal",
    primary: "oklch(0.627 0.134 175.001)",
    primaryForeground: "oklch(0.985 0 0)",
  },
  // 蓝色系
  cyan: {
    name: "青色",
    nameEn: "Cyan",
    primary: "oklch(0.715 0.143 215.221)",
    primaryForeground: "oklch(0.985 0 0)",
  },
  blue: {
    name: "蓝色",
    nameEn: "Blue",
    primary: "oklch(0.546 0.245 262.881)",
    primaryForeground: "oklch(0.985 0 0)",
  },
  // 紫色系
  violet: {
    name: "紫色",
    nameEn: "Violet",
    primary: "oklch(0.606 0.25 292.717)",
    primaryForeground: "oklch(0.985 0 0)",
  },
  // 粉色系
  pink: {
    name: "粉色",
    nameEn: "Pink",
    primary: "oklch(0.656 0.241 354.308)",
    primaryForeground: "oklch(0.985 0 0)",
  },
  rose: {
    name: "玫红",
    nameEn: "Rose",
    primary: "oklch(0.645 0.246 16.439)",
    primaryForeground: "oklch(0.985 0 0)",
  },
};

export const defaultThemeColor: ThemeColor = "blue";
