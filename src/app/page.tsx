"use client";

import { ChineseStyle, MinimalStyle, TechStyle, TerminalStyle } from "@/components/home";
import { HomeStyleToggle } from "@/components/home-style-toggle";
import { LocaleToggle } from "@/components/locale-toggle";
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeColorToggle } from "@/components/theme-color-toggle";
import { i18n } from "@/config";
import { defaultHomeStyle, HomeStyle } from "@/config/home-style";
import { useLocale } from "@/contexts/locale-context";
import { Scroll, Terminal } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const VALID_STYLES = ["tech", "minimal", "terminal", "chinese"];

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

  const headerStyle = isTerminal
    ? "border-[#30363d] bg-[#161b22]"
    : isChinese
    ? "bg-[#F5F0E8]/80 backdrop-blur-md"
    : "border-primary/10 bg-background/60 backdrop-blur-md";

  const iconColor = isTerminal
    ? "text-[#7ee787]"
    : isChinese
    ? "text-[#C5A33A]"
    : "text-primary";

  const titleColor = isTerminal
    ? "text-[#c9d1d9]"
    : isChinese
    ? "text-[#3D2B1F]"
    : "text-primary";

  const SiteIcon = isChinese ? Scroll : Terminal;

  const header = (
    <header className={`border-b ${headerStyle} sticky top-0 z-50`} style={isChinese ? { borderColor: "#D4C5A0" } : undefined}>
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
          <ModeToggle />
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

  return <TechStyle locale={locale} header={header} />;
}
