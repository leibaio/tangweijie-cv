"use client";

import { MinimalStyle, TechStyle, TerminalStyle } from "@/components/home";
import { HomeStyleToggle } from "@/components/home-style-toggle";
import { LocaleToggle } from "@/components/locale-toggle";
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeColorToggle } from "@/components/theme-color-toggle";
import { defaultLocale, i18n, Locale } from "@/config";
import { defaultHomeStyle, HomeStyle } from "@/config/home-style";
import { Terminal } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const [homeStyle, setHomeStyle] = useState<HomeStyle>(defaultHomeStyle);
  const [mounted, setMounted] = useState(false);
  const t = i18n[locale];

  useEffect(() => {
    setMounted(true);
    const savedLocale = localStorage.getItem("locale") as Locale | null;
    if (savedLocale && (savedLocale === "zh" || savedLocale === "en")) {
      setLocale(savedLocale);
    }
    const savedStyle = localStorage.getItem("home-style") as HomeStyle | null;
    if (savedStyle && ["tech", "minimal", "terminal"].includes(savedStyle)) {
      setHomeStyle(savedStyle);
    }
  }, []);

  const handleStyleChange = useCallback((style: HomeStyle) => {
    setHomeStyle(style);
  }, []);

  if (!mounted) return null;

  const header = (
    <header className={`border-b ${homeStyle === "terminal" ? "border-[#30363d] bg-[#161b22]" : "border-primary/10 bg-background/60 backdrop-blur-md"} sticky top-0 z-50`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Terminal className={`w-5 h-5 ${homeStyle === "terminal" ? "text-[#7ee787]" : "text-primary"}`} />
          <h1 className={`text-lg font-bold font-mono ${homeStyle === "terminal" ? "text-[#c9d1d9]" : "text-primary"}`}>
            {t.nav.siteName}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <HomeStyleToggle locale={locale} onStyleChange={handleStyleChange} />
          <LocaleToggle onLocaleChange={setLocale} />
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

  return <TechStyle locale={locale} header={header} />;
}
