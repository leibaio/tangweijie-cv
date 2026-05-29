export type HomeStyle = "tech" | "minimal" | "terminal" | "chinese" | "magazine" | "bauhaus" | "retro" | "glass" | "f1" | "brutalist" | "synthwave" | "japanese" | "newspaper";

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
  f1: {
    name: "F1 赛车",
    nameEn: "F1 Racing",
    icon: "flag",
  },
  brutalist: {
    name: "粗野主义",
    nameEn: "Brutalist",
    icon: "blocks",
  },
  synthwave: {
    name: "合成波",
    nameEn: "Synthwave",
    icon: "zap",
  },
  japanese: {
    name: "日式侘寂",
    nameEn: "Japanese",
    icon: "flower-2",
  },
  newspaper: {
    name: "报纸风",
    nameEn: "Newspaper",
    icon: "newspaper",
  },
};

export const defaultHomeStyle: HomeStyle = "tech";
