export type HomeStyle = "tech" | "minimal" | "terminal" | "chinese";

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
};

export const defaultHomeStyle: HomeStyle = "tech";
