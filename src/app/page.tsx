"use client";

import { BauhausStyle, ChineseStyle, F1Style, GlassStyle, MagazineStyle, MinimalStyle, RetroStyle, TechStyle, TerminalStyle } from "@/components/home";
import { HomeStyleToggle } from "@/components/home-style-toggle";
import { LocaleToggle } from "@/components/locale-toggle";
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeColorToggle } from "@/components/theme-color-toggle";
import { i18n } from "@/config";
import { defaultHomeStyle, HomeStyle } from "@/config/home-style";
import { useLocale } from "@/contexts/locale-context";
import { Flag, Scroll, Terminal } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const VALID_STYLES = ["tech", "minimal", "terminal", "chinese", "magazine", "bauhaus", "retro", "glass", "f1"];

export default function Home() {
  const { locale, mounted } = useLocale();
  const [homeStyle, setHomeStyle] = useState<HomeStyle>(defaultHomeStyle);
  const t = i18n[locale];

  useEffect(() => {
    const savedStyle = localStorage.getItem("home-style") as HomeStyle | null;
    if (savedStyle && VALID_STYLES.includes(savedStyle)) {
      setHomeStyle(savedStyle);
    }
  }, []);

  const handleStyleChange = useCallback((style: HomeStyle) => {
    setHomeStyle(style);
  }, []);

  const isTerminal = homeStyle === "terminal";
  const isChinese = homeStyle === "chinese";
  const isRetro = homeStyle === "retro";
  const isGlass = homeStyle === "glass";
  const isMagazine = homeStyle === "magazine";
  const isBauhaus = homeStyle === "bauhaus";
  const isF1 = homeStyle === "f1";

  const headerStyle = isTerminal
    ? "border-[#30363d] bg-[#161b22]"
    : isChinese
    ? "bg-[#F5F0E8]/80 backdrop-blur-md"
    : isRetro
    ? "border-[#FF00FF22] bg-[#0A0A1A]/90 backdrop-blur-md"
    : isGlass
    ? "border-white/[0.06] bg-white/[0.04] backdrop-blur-xl"
    : isMagazine
    ? "border-[#1A1A1A]/10 bg-[#FAF8F5]/80 backdrop-blur-md"
    : isBauhaus
    ? "border-[#1A1A1A]/20 bg-[#F5F2EB]/80 backdrop-blur-md"
    : isF1
    ? "border-[#E10600]/20 bg-[#0A0A0A]/95 backdrop-blur-md"
    : "border-primary/10 bg-background/60 backdrop-blur-md";

  const iconColor = isTerminal
    ? "text-[#7ee787]"
    : isChinese
    ? "text-[#C5A33A]"
    : isRetro
    ? "text-[#00FFFF]"
    : isGlass
    ? "text-white/70"
    : isMagazine
    ? "text-[#1A1A1A]"
    : isBauhaus
    ? "text-[#1A1A1A]"
    : isF1
    ? "text-[#E10600]"
    : "text-primary";

  const titleColor = isTerminal
    ? "text-[#c9d1d9]"
    : isChinese
    ? "text-[#3D2B1F]"
    : isRetro
    ? "text-[#FF00FF]"
    : isGlass
    ? "text-white/80"
    : isMagazine
    ? "text-[#1A1A1A]"
    : isBauhaus
    ? "text-[#1A1A1A]"
    : isF1
    ? "text-white"
    : "text-primary";

  const SiteIcon = isChinese ? Scroll : isF1 ? Flag : Terminal;

  const headerBorder = isChinese
    ? { borderColor: "#D4C5A0" }
    : isRetro
    ? { borderColor: "#FF00FF22" }
    : isGlass
    ? { borderColor: "rgba(255,255,255,0.06)" }
    : isMagazine
    ? { borderColor: "rgba(26,26,26,0.1)" }
    : isBauhaus
    ? { borderColor: "rgba(26,26,26,0.2)" }
    : isF1
    ? { borderColor: "rgba(225,6,0,0.2)" }
    : undefined;

  const header = (
    <header className={`border-b ${headerStyle} sticky top-0 z-50`} style={headerBorder}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <SiteIcon className={`w-5 h-5 ${iconColor}`} />
          <h1 className={`text-lg font-bold font-mono ${titleColor}`}>
            {t.nav.siteName}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <HomeStyleToggle locale={locale} onStyleChange={handleStyleChange} />
          <LocaleToggle />
          <ThemeColorToggle locale={locale} />
          {!isChinese && !isRetro && !isGlass && !isF1 && <ModeToggle />}
        </div>
      </div>
    </header>
  );

  if (homeStyle === "minimal") {
    return <MinimalStyle locale={locale} header={header} />;
  }

  if (homeStyle === "terminal") {
    return <TerminalStyle locale={locale} header={header} />;
  }

  if (homeStyle === "chinese") {
    return <ChineseStyle locale={locale} header={header} />;
  }

  if (homeStyle === "magazine") {
    return <MagazineStyle locale={locale} header={header} />;
  }

  if (homeStyle === "bauhaus") {
    return <BauhausStyle locale={locale} header={header} />;
  }

  if (homeStyle === "retro") {
    return <RetroStyle locale={locale} header={header} />;
  }

  if (homeStyle === "glass") {
    return <GlassStyle locale={locale} header={header} />;
  }

  if (homeStyle === "f1") {
    return <F1Style locale={locale} header={header} />;
  }

  return <TechStyle locale={locale} header={header} />;
}
