export type HomeStyle = "tech" | "minimal" | "terminal" | "chinese" | "magazine" | "bauhaus" | "retro" | "glass";

export interface HomeStyleConfig {
  name: string;
  nameEn: string;
  icon: string;
}

export const homeStyles: Record<HomeStyle, HomeStyleConfig> = {
  tech: {
    name: "科技风",
    nameEn: "Tech",
    icon: "cpu",
  },
  minimal: {
    name: "极简风",
    nameEn: "Minimal",
    icon: "minus",
  },
  terminal: {
    name: "终端风",
    nameEn: "Terminal",
    icon: "terminal",
  },
  chinese: {
    name: "国风",
    nameEn: "Chinese",
    icon: "scroll",
  },
  magazine: {
    name: "杂志风",
    nameEn: "Magazine",
    icon: "book-open",
  },
  bauhaus: {
    name: "包豪斯",
    nameEn: "Bauhaus",
    icon: "triangle",
  },
  retro: {
    name: "像素复古",
    nameEn: "Retro",
    icon: "gamepad-2",
  },
  glass: {
    name: "玻璃拟态",
    nameEn: "Glass",
    icon: "sparkles",
  },
};

export const defaultHomeStyle: HomeStyle = "tech";
