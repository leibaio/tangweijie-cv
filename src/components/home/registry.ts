import type { HomeStyle } from "@/config/home-style";
import type { Locale } from "@/config/i18n";
import type { ComponentType, ReactNode } from "react";
import { BauhausStyle } from "./bauhaus-style";
import { BrutalistStyle } from "./brutalist-style";
import { ChineseStyle } from "./chinese-style";
import { F1Style } from "./f1-style";
import { GlassStyle } from "./glass-style";
import { JapaneseStyle } from "./japanese-style";
import { MagazineStyle } from "./magazine-style";
import { MinimalStyle } from "./minimal-style";
import { NewspaperStyle } from "./newspaper-style";
import { RetroStyle } from "./retro-style";
import { SynthwaveStyle } from "./synthwave-style";
import { TechStyle } from "./tech-style";
import { TerminalStyle } from "./terminal-style";

export interface HomeStyleProps {
  locale: Locale;
  header: ReactNode;
}

export const HOME_STYLE_COMPONENTS: Record<HomeStyle, ComponentType<HomeStyleProps>> = {
  tech: TechStyle,
  minimal: MinimalStyle,
  terminal: TerminalStyle,
  chinese: ChineseStyle,
  magazine: MagazineStyle,
  bauhaus: BauhausStyle,
  retro: RetroStyle,
  glass: GlassStyle,
  f1: F1Style,
  brutalist: BrutalistStyle,
  synthwave: SynthwaveStyle,
  japanese: JapaneseStyle,
  newspaper: NewspaperStyle,
};