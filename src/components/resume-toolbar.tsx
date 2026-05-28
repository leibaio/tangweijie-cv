"use client";

import { LocaleToggle } from "@/components/locale-toggle";
import { ModeToggle } from "@/components/mode-toggle";
import { PrintButton } from "@/components/resume";
import { ThemeColorToggle } from "@/components/theme-color-toggle";
import { i18n } from "@/config";
import { HomeStyle } from "@/config/home-style";
import { useLocale } from "@/contexts/locale-context";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const toolbarStyles: Record<string, {
  bg: string;
  border: string;
  text: string;
  hoverText: string;
  hideDarkMode: boolean;
}> = {
  terminal: {
    bg: "bg-[#161b22]",
    border: "border-[#30363d]",
    text: "text-[#8b949e]",
    hoverText: "hover:text-[#c9d1d9]",
    hideDarkMode: true,
  },
  chinese: {
    bg: "bg-[#F5F0E8]/80",
    border: "border-[#D4C5A0]",
    text: "text-[#8B7355]",
    hoverText: "hover:text-[#3D2B1F]",
    hideDarkMode: true,
  },
  retro: {
    bg: "bg-[#0A0A1A]/90",
    border: "border-[#FF00FF22]",
    text: "text-[#8888AA]",
    hoverText: "hover:text-[#00FFFF]",
    hideDarkMode: true,
  },
  glass: {
    bg: "bg-white/[0.03]",
    border: "border-white/[0.06]",
    text: "text-white/40",
    hoverText: "hover:text-white/80",
    hideDarkMode: true,
  },
  magazine: {
    bg: "bg-[#FAF8F5]/80",
    border: "border-[#DDD]",
    text: "text-[#999]",
    hoverText: "hover:text-[#1A1A1A]",
    hideDarkMode: false,
  },
  bauhaus: {
    bg: "bg-[#F5F2EB]/80",
    border: "border-[#1A1A1A22]",
    text: "text-[#888]",
    hoverText: "hover:text-[#1A1A1A]",
    hideDarkMode: false,
  },
};

export function ResumeToolbar() {
  const { locale, mounted } = useLocale();
  const [homeStyle, setHomeStyle] = useState<string>("tech");
  const t = i18n[locale];

  useEffect(() => {
    const saved = localStorage.getItem("home-style");
    if (saved) setHomeStyle(saved);

    const handleChange = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (detail) setHomeStyle(detail);
    };
    window.addEventListener("home-style-change", handleChange);
    return () => window.removeEventListener("home-style-change", handleChange);
  }, []);

  const styleConfig = toolbarStyles[homeStyle] || {};

  if (!mounted) {
    return (
      <div className="container mx-auto px-4 py-4 flex justify-between items-center print:hidden">
        <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <ArrowLeft className="w-4 h-4" />
          {i18n.zh.resume.backToHome}
        </div>
      </div>
    );
  }

  const bgClass = styleConfig.bg || "bg-background/60";
  const borderClass = styleConfig.border || "border-primary/10";
  const textClass = styleConfig.text || "text-muted-foreground";
  const hoverClass = styleConfig.hoverText || "hover:text-foreground";

  return (
    <div
      className={`sticky top-0 z-50 border-b ${borderClass} ${bgClass} backdrop-blur-md print:hidden`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className={`inline-flex items-center gap-2 text-sm ${textClass} ${hoverClass} transition-colors`}
        >
          <ArrowLeft className="w-4 h-4" />
          {t.resume.backToHome}
        </Link>
        <div className="flex items-center gap-2">
          <PrintButton locale={locale} />
          <LocaleToggle />
          <ThemeColorToggle locale={locale} />
          {!styleConfig.hideDarkMode && <ModeToggle />}
        </div>
      </div>
    </div>
  );
}
