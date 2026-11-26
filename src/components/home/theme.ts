import type { HomeStyle } from "@/config/home-style";
import {
  Blocks,
  Flag,
  Flower2,
  Newspaper,
  Scroll,
  Terminal,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { CSSProperties } from "react";

export interface HomeStyleTheme {
  /** 头部背景 / 边框的 Tailwind 类 */
  headerClass: string;
  iconColor: string;
  titleColor: string;
  /** 头部左上角站点图标 */
  icon: LucideIcon;
  /** 部分风格用内联样式覆盖边框颜色 */
  headerBorderStyle?: CSSProperties;
  /** 右上角控件容器背景 */
  controlsStyle: CSSProperties;
  /** 是否显示明暗模式切换（固定配色的风格为 false） */
  supportsDarkMode: boolean;
}

const defaultControlsStyle: CSSProperties = {
  backgroundColor: "rgba(128,128,128,0.05)",
  border: "1px solid transparent",
};

export const homeStyleThemes: Record<HomeStyle, HomeStyleTheme> = {
  tech: {
    headerClass: "border-primary/10 bg-background/60 backdrop-blur-md",
    iconColor: "text-primary",
    titleColor: "text-primary",
    icon: Terminal,
    controlsStyle: defaultControlsStyle,
    supportsDarkMode: true,
  },
  minimal: {
    headerClass: "border-primary/10 bg-background/60 backdrop-blur-md",
    iconColor: "text-primary",
    titleColor: "text-primary",
    icon: Terminal,
    controlsStyle: defaultControlsStyle,
    supportsDarkMode: true,
  },
  terminal: {
    headerClass: "border-[#30363d] bg-[#161b22]",
    iconColor: "text-[#7ee787]",
    titleColor: "text-[#c9d1d9]",
    icon: Terminal,
    controlsStyle: defaultControlsStyle,
    supportsDarkMode: false,
  },
  chinese: {
    headerClass: "bg-[#F5F0E8]/80 backdrop-blur-md",
    iconColor: "text-[#C5A33A]",
    titleColor: "text-[#3D2B1F]",
    icon: Scroll,
    headerBorderStyle: { borderColor: "#D4C5A0" },
    controlsStyle: defaultControlsStyle,
    supportsDarkMode: false,
  },
  magazine: {
    headerClass: "border-[#1A1A1A]/10 bg-[#FAF8F5]/80 backdrop-blur-md",
    iconColor: "text-[#1A1A1A]",
    titleColor: "text-[#1A1A1A]",
    icon: Terminal,
    headerBorderStyle: { borderColor: "rgba(26,26,26,0.1)" },
    controlsStyle: defaultControlsStyle,
    supportsDarkMode: false,
  },
  bauhaus: {
    headerClass: "border-[#1A1A1A]/20 bg-[#F5F2EB]/80 backdrop-blur-md",
    iconColor: "text-[#1A1A1A]",
    titleColor: "text-[#1A1A1A]",
    icon: Terminal,
    headerBorderStyle: { borderColor: "rgba(26,26,26,0.2)" },
    controlsStyle: defaultControlsStyle,
    supportsDarkMode: false,
  },
  retro: {
    headerClass: "border-[#FF00FF22] bg-[#0A0A1A]/90 backdrop-blur-md",
    iconColor: "text-[#00FFFF]",
    titleColor: "text-[#FF00FF]",
    icon: Terminal,
    headerBorderStyle: { borderColor: "#FF00FF22" },
    controlsStyle: {
      backgroundColor: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,0,255,0.1)",
    },
    supportsDarkMode: false,
  },
  glass: {
    headerClass: "border-white/[0.06] bg-white/[0.04] backdrop-blur-xl",
    iconColor: "text-white/70",
    titleColor: "text-white/80",
    icon: Terminal,
    headerBorderStyle: { borderColor: "rgba(255,255,255,0.06)" },
    controlsStyle: {
      backgroundColor: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.06)",
    },
    supportsDarkMode: false,
  },
  f1: {
    headerClass: "border-[#E10600]/20 bg-[#0A0A0A]/95 backdrop-blur-md",
    iconColor: "text-[#E10600]",
    titleColor: "text-white",
    icon: Flag,
    headerBorderStyle: { borderColor: "rgba(225,6,0,0.2)" },
    controlsStyle: {
      backgroundColor: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(225,6,0,0.12)",
    },
    supportsDarkMode: false,
  },
  brutalist: {
    headerClass: "border-black bg-white",
    iconColor: "text-black",
    titleColor: "text-black",
    icon: Blocks,
    headerBorderStyle: { borderColor: "#000" },
    controlsStyle: {
      backgroundColor: "rgba(255,255,255,0.8)",
      border: "2px solid rgba(0,0,0,0.1)",
    },
    supportsDarkMode: false,
  },
  synthwave: {
    headerClass: "border-[#FF00FF15] bg-[#0D0221]/95 backdrop-blur-md",
    iconColor: "text-[#FF00FF]",
    titleColor: "text-white",
    icon: Zap,
    headerBorderStyle: { borderColor: "rgba(255,0,255,0.15)" },
    controlsStyle: {
      backgroundColor: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,0,255,0.12)",
    },
    supportsDarkMode: false,
  },
  japanese: {
    headerClass: "border-[#1A1A1A]/5 bg-[#F8F6F0]/80 backdrop-blur-md",
    iconColor: "text-[#B53733]",
    titleColor: "text-[#1A1A1A]",
    icon: Flower2,
    headerBorderStyle: { borderColor: "rgba(26,26,26,0.05)" },
    controlsStyle: {
      backgroundColor: "rgba(128,128,128,0.05)",
      border: "1px solid rgba(26,26,26,0.05)",
    },
    supportsDarkMode: false,
  },
  newspaper: {
    headerClass: "border-[#111]/10 bg-[#F5F0E1]/80 backdrop-blur-md",
    iconColor: "text-[#8B0000]",
    titleColor: "text-[#111]",
    icon: Newspaper,
    headerBorderStyle: { borderColor: "rgba(17,17,17,0.1)" },
    controlsStyle: {
      backgroundColor: "rgba(128,128,128,0.05)",
      border: "1px solid rgba(17,17,17,0.06)",
    },
    supportsDarkMode: false,
  },
};