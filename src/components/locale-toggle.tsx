"use client";

import { Button } from "@/components/ui/button";
import { useLocale } from "@/contexts/locale-context";
import { Languages } from "lucide-react";

export function LocaleToggle() {
  const { locale, setLocale, mounted } = useLocale();

  const toggleLocale = () => {
    setLocale(locale === "zh" ? "en" : "zh");
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
