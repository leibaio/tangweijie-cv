export type HomeStyle = "tech" | "minimal" | "terminal" | "chinese" | "magazine" | "bauhaus" | "retro" | "glass" | "f1" | "brutalist" | "synthwave" | "japanese" | "newspaper";

export interface HomeStyleConfig {
  name: string;
  nameEn: string;
}

export const homeStyles: Record<HomeStyle, HomeStyleConfig> = {
  tech: {
    name: "科技风",
    nameEn: "Tech",
  },
  minimal: {
    name: "极简风",
    nameEn: "Minimal",
  },
  terminal: {
    name: "终端风",
    nameEn: "Terminal",
  },
  chinese: {
    name: "国风",
    nameEn: "Chinese",
  },
  magazine: {
    name: "杂志风",
    nameEn: "Magazine",
  },
  bauhaus: {
    name: "包豪斯",
    nameEn: "Bauhaus",
  },
  retro: {
    name: "像素复古",
    nameEn: "Retro",
  },
  glass: {
    name: "玻璃拟态",
    nameEn: "Glass",
  },
  f1: {
    name: "F1 赛车",
    nameEn: "F1 Racing",
  },
  brutalist: {
    name: "粗野主义",
    nameEn: "Brutalist",
  },
  synthwave: {
    name: "合成波",
    nameEn: "Synthwave",
  },
  japanese: {
    name: "日式侘寂",
    nameEn: "Japanese",
  },
  newspaper: {
    name: "报纸风",
    nameEn: "Newspaper",
  },
};

export const defaultHomeStyle: HomeStyle = "tech";