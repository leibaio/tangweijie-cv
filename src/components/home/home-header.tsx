"use client";

import { HomeStyleToggle } from "@/components/home-style-toggle";
import { LocaleToggle } from "@/components/locale-toggle";
import { ModeToggle } from "@/components/mode-toggle";
import { i18n } from "@/config";
import type { HomeStyle } from "@/config/home-style";
import type { Locale } from "@/config/i18n";
import { homeStyleThemes } from "./theme";

interface HomeHeaderProps {
  locale: Locale;
  style: HomeStyle;
}

export function HomeHeader({ locale, style }: HomeHeaderProps) {
  const theme = homeStyleThemes[style];
  const t = i18n[locale];
  const SiteIcon = theme.icon;

  return (
    <header
      className={`border-b ${theme.headerClass} sticky top-0 z-50`}
      style={theme.headerBorderStyle}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <SiteIcon className={`w-5 h-5 ${theme.iconColor}`} />
          <h1 className={`text-lg font-bold font-mono ${theme.titleColor}`}>
            {t.nav.siteName}
          </h1>
        </div>
        <div
          className="flex items-center gap-2 rounded-full px-1.5 py-1 backdrop-blur-sm"
          style={theme.controlsStyle}
        >
          <HomeStyleToggle locale={locale} />
          <LocaleToggle />
          {theme.supportsDarkMode && <ModeToggle />}
        </div>
      </div>
    </header>
  );
}