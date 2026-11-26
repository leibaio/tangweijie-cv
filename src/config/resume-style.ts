import type { HomeStyle } from "@/config/home-style";
import type { CSSProperties } from "react";

export type ResumeBackgroundKey =
  | "tech"
  | "terminal"
  | "chinese"
  | "retro"
  | "glass"
  | "magazine"
  | "f1"
  | "brutalist"
  | "synthwave"
  | "japanese"
  | "newspaper";

export interface ResumeToolbarTheme {
  bg: string;
  border: string;
  text: string;
  hoverText: string;
}

export interface ResumeStyleTheme {
  wrapperStyle: CSSProperties;
  /** 注入到简历容器上的 CSS 变量 */
  cssVars: Record<string, string>;
  /** 纸张（简历内容卡片）样式 */
  paperBg: CSSProperties;
  paperPadding?: string;
  /** 背景装饰，minimal / bauhaus 无装饰 */
  background: ResumeBackgroundKey | null;
  toolbar: ResumeToolbarTheme;
}

const defaultToolbar: ResumeToolbarTheme = {
  bg: "bg-background/60",
  border: "border-primary/10",
  text: "text-muted-foreground",
  hoverText: "hover:text-foreground",
};

export const resumeStyleThemes: Record<HomeStyle, ResumeStyleTheme> = {
  tech: {
    wrapperStyle: {},
    cssVars: {},
    paperBg: {},
    background: "tech",
    toolbar: defaultToolbar,
  },
  minimal: {
    wrapperStyle: {},
    cssVars: {},
    paperBg: {},
    background: null,
    toolbar: defaultToolbar,
  },
  terminal: {
    wrapperStyle: { backgroundColor: "#0d1117" },
    cssVars: {
      "--background": "#0d1117",
      "--foreground": "#c9d1d9",
      "--card": "#161b22",
      "--card-foreground": "#c9d1d9",
      "--primary": "#7ee787",
      "--primary-foreground": "#0d1117",
      "--secondary": "#21262d",
      "--secondary-foreground": "#c9d1d9",
      "--muted": "#21262d",
      "--muted-foreground": "#8b949e",
      "--accent": "#21262d",
      "--accent-foreground": "#c9d1d9",
      "--border": "#30363d",
      "--input": "#30363d",
      "--ring": "#7ee787",
    },
    paperBg: {
      backgroundColor: "#161b22",
      border: "1px solid #30363d",
      borderRadius: 8,
    },
    background: "terminal",
    toolbar: {
      bg: "bg-[#161b22]",
      border: "border-[#30363d]",
      text: "text-[#8b949e]",
      hoverText: "hover:text-[#c9d1d9]",
    },
  },
  chinese: {
    wrapperStyle: { backgroundColor: "#F5F0E8" },
    cssVars: {
      "--background": "#F5F0E8",
      "--foreground": "#3D2B1F",
      "--card": "#FAF6EE",
      "--card-foreground": "#3D2B1F",
      "--primary": "#8B6914",
      "--primary-foreground": "#F5F0E8",
      "--secondary": "#EDE5D5",
      "--secondary-foreground": "#3D2B1F",
      "--muted": "#EDE5D5",
      "--muted-foreground": "#8B7355",
      "--accent": "#EDE5D5",
      "--accent-foreground": "#3D2B1F",
      "--border": "#D4C5A0",
      "--input": "#D4C5A0",
      "--ring": "#C5A33A",
    },
    paperBg: {},
    background: "chinese",
    toolbar: {
      bg: "bg-[#F5F0E8]/80",
      border: "border-[#D4C5A0]",
      text: "text-[#8B7355]",
      hoverText: "hover:text-[#3D2B1F]",
    },
  },
  magazine: {
    wrapperStyle: { backgroundColor: "#FAF8F5" },
    cssVars: {
      "--background": "#FAF8F5",
      "--foreground": "#1A1A1A",
      "--card": "#FFFFFF",
      "--card-foreground": "#1A1A1A",
      "--primary": "#1A1A1A",
      "--primary-foreground": "#FAF8F5",
      "--secondary": "#F0EDE8",
      "--secondary-foreground": "#1A1A1A",
      "--muted": "#F0EDE8",
      "--muted-foreground": "#777",
      "--accent": "#F0EDE8",
      "--accent-foreground": "#1A1A1A",
      "--border": "#DDD",
      "--input": "#DDD",
      "--ring": "#C44536",
    },
    paperBg: { borderLeft: "3px solid #C44536" },
    background: "magazine",
    toolbar: {
      bg: "bg-[#FAF8F5]/80",
      border: "border-[#DDD]",
      text: "text-[#999]",
      hoverText: "hover:text-[#1A1A1A]",
    },
  },
  bauhaus: {
    wrapperStyle: { backgroundColor: "#F5F2EB" },
    cssVars: {
      "--background": "#F5F2EB",
      "--foreground": "#1A1A1A",
      "--card": "#FFFFFF",
      "--card-foreground": "#1A1A1A",
      "--primary": "#1A1A1A",
      "--primary-foreground": "#F5F2EB",
      "--secondary": "#EAE7E0",
      "--secondary-foreground": "#1A1A1A",
      "--muted": "#EAE7E0",
      "--muted-foreground": "#666",
      "--accent": "#EAE7E0",
      "--accent-foreground": "#1A1A1A",
      "--border": "#1A1A1A33",
      "--input": "#1A1A1A33",
      "--ring": "#D0342D",
    },
    paperBg: { borderTop: "4px solid #1A1A1A" },
    background: null,
    toolbar: {
      bg: "bg-[#F5F2EB]/80",
      border: "border-[#1A1A1A22]",
      text: "text-[#888]",
      hoverText: "hover:text-[#1A1A1A]",
    },
  },
  retro: {
    wrapperStyle: { backgroundColor: "#0A0A1A" },
    cssVars: {
      "--background": "#0A0A1A",
      "--foreground": "#EEEEFF",
      "--card": "#12122A",
      "--card-foreground": "#EEEEFF",
      "--primary": "#00FFFF",
      "--primary-foreground": "#0A0A1A",
      "--secondary": "#1A1A3A",
      "--secondary-foreground": "#EEEEFF",
      "--muted": "#1A1A3A",
      "--muted-foreground": "#8888AA",
      "--accent": "#1A1A3A",
      "--accent-foreground": "#EEEEFF",
      "--border": "#FF00FF33",
      "--input": "#FF00FF33",
      "--ring": "#FF00FF",
    },
    paperBg: { border: "2px solid #FF00FF33" },
    background: "retro",
    toolbar: {
      bg: "bg-[#0A0A1A]/90",
      border: "border-[#FF00FF22]",
      text: "text-[#8888AA]",
      hoverText: "hover:text-[#00FFFF]",
    },
  },
  glass: {
    wrapperStyle: { backgroundColor: "#0C0E1A" },
    cssVars: {
      "--background": "#0C0E1A",
      "--foreground": "#FFFFFF",
      "--card": "rgba(255,255,255,0.04)",
      "--card-foreground": "#FFFFFF",
      "--primary": "#818CF8",
      "--primary-foreground": "#FFFFFF",
      "--secondary": "rgba(255,255,255,0.06)",
      "--secondary-foreground": "#FFFFFF",
      "--muted": "rgba(255,255,255,0.06)",
      "--muted-foreground": "rgba(255,255,255,0.5)",
      "--accent": "rgba(255,255,255,0.06)",
      "--accent-foreground": "#FFFFFF",
      "--border": "rgba(255,255,255,0.08)",
      "--input": "rgba(255,255,255,0.08)",
      "--ring": "#818CF8",
    },
    paperBg: {
      background: "rgba(255,255,255,0.04)",
      backdropFilter: "blur(24px)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: 16,
    },
    paperPadding: "2rem",
    background: "glass",
    toolbar: {
      bg: "bg-white/[0.03]",
      border: "border-white/[0.06]",
      text: "text-white/40",
      hoverText: "hover:text-white/80",
    },
  },
  f1: {
    wrapperStyle: { backgroundColor: "#0A0A0A" },
    cssVars: {
      "--background": "#0A0A0A",
      "--foreground": "#FFFFFF",
      "--card": "#111111",
      "--card-foreground": "#FFFFFF",
      "--primary": "#E10600",
      "--primary-foreground": "#FFFFFF",
      "--secondary": "#1A1A1A",
      "--secondary-foreground": "#FFFFFF",
      "--muted": "#1A1A1A",
      "--muted-foreground": "rgba(255,255,255,0.5)",
      "--accent": "#1A1A1A",
      "--accent-foreground": "#FFFFFF",
      "--border": "rgba(225,6,0,0.2)",
      "--input": "rgba(225,6,0,0.2)",
      "--ring": "#E10600",
    },
    paperBg: {
      border: "1px solid rgba(225,6,0,0.15)",
      borderTop: "3px solid #E10600",
    },
    background: "f1",
    toolbar: defaultToolbar,
  },
  brutalist: {
    wrapperStyle: { backgroundColor: "#FFF" },
    cssVars: {
      "--background": "#FFFFFF",
      "--foreground": "#000000",
      "--card": "#FFFFFF",
      "--card-foreground": "#000000",
      "--primary": "#000000",
      "--primary-foreground": "#CCFF00",
      "--secondary": "#F5F5F5",
      "--secondary-foreground": "#000000",
      "--muted": "#F5F5F5",
      "--muted-foreground": "#555555",
      "--accent": "#F5F5F5",
      "--accent-foreground": "#000000",
      "--border": "#000000",
      "--input": "#000000",
      "--ring": "#CCFF00",
    },
    paperBg: { border: "3px solid #000" },
    background: "brutalist",
    toolbar: defaultToolbar,
  },
  synthwave: {
    wrapperStyle: { backgroundColor: "#0D0221" },
    cssVars: {
      "--background": "#0D0221",
      "--foreground": "#FFFFFF",
      "--card": "rgba(255,255,255,0.03)",
      "--card-foreground": "#FFFFFF",
      "--primary": "#FF00FF",
      "--primary-foreground": "#FFFFFF",
      "--secondary": "rgba(255,0,255,0.1)",
      "--secondary-foreground": "#FFFFFF",
      "--muted": "rgba(255,0,255,0.1)",
      "--muted-foreground": "rgba(255,255,255,0.5)",
      "--accent": "rgba(0,255,255,0.1)",
      "--accent-foreground": "#00FFFF",
      "--border": "rgba(255,0,255,0.2)",
      "--input": "rgba(255,0,255,0.2)",
      "--ring": "#FF00FF",
    },
    paperBg: {
      border: "1px solid rgba(255,0,255,0.15)",
      borderTop: "2px solid #FF00FF",
    },
    background: "synthwave",
    toolbar: defaultToolbar,
  },
  japanese: {
    wrapperStyle: { backgroundColor: "#F8F6F0" },
    cssVars: {
      "--background": "#F8F6F0",
      "--foreground": "#1A1A1A",
      "--card": "#FFFFFF",
      "--card-foreground": "#1A1A1A",
      "--primary": "#B53733",
      "--primary-foreground": "#F8F6F0",
      "--secondary": "#F0EDE5",
      "--secondary-foreground": "#1A1A1A",
      "--muted": "#F0EDE5",
      "--muted-foreground": "rgba(26,26,26,0.45)",
      "--accent": "#F0EDE5",
      "--accent-foreground": "#1A1A1A",
      "--border": "rgba(26,26,26,0.08)",
      "--input": "rgba(26,26,26,0.08)",
      "--ring": "#B53733",
    },
    paperBg: { border: "1px solid rgba(26,26,26,0.06)" },
    background: "japanese",
    toolbar: defaultToolbar,
  },
  newspaper: {
    wrapperStyle: { backgroundColor: "#F5F0E1" },
    cssVars: {
      "--background": "#F5F0E1",
      "--foreground": "#111111",
      "--card": "#F5F0E1",
      "--card-foreground": "#111111",
      "--primary": "#8B0000",
      "--primary-foreground": "#F5F0E1",
      "--secondary": "#EDE8D8",
      "--secondary-foreground": "#111111",
      "--muted": "#EDE8D8",
      "--muted-foreground": "#555555",
      "--accent": "#EDE8D8",
      "--accent-foreground": "#111111",
      "--border": "rgba(17,17,17,0.12)",
      "--input": "rgba(17,17,17,0.12)",
      "--ring": "#8B0000",
    },
    paperBg: {
      borderTop: "3px solid #111",
      borderBottom: "1px solid #111",
    },
    background: "newspaper",
    toolbar: defaultToolbar,
  },
};