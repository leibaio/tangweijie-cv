"use client";

import { Button } from "@/components/ui/button";
import { defaultLocale, Locale } from "@/config/i18n";
import { Languages } from "lucide-react";
import { useEffect, useState } from "react";

interface LocaleToggleProps {
  onLocaleChange?: (locale: Locale) => void;
}

export function LocaleToggle({ onLocaleChange }: LocaleToggleProps) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved && (saved === "zh" || saved === "en")) {
      setLocale(saved);
      onLocaleChange?.(saved);
    }
  }, [onLocaleChange]);

  const toggleLocale = () => {
    const newLocale = locale === "zh" ? "en" : "zh";
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
    onLocaleChange?.(newLocale);
  };

  if (!mounted) {
    return (
      <Button variant="outline" size="icon">
        <Languages className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    );
  }

  return (
    <Button variant="outline" size="icon" onClick={toggleLocale} title={locale === "zh" ? "Switch to English" : "切换到中文"}>
      <span className="text-xs font-bold">{locale === "zh" ? "EN" : "中"}</span>
    </Button>
  );
}
