"use client";

import { LocaleToggle } from "@/components/locale-toggle";
import { ModeToggle } from "@/components/mode-toggle";
import { PrintButton } from "@/components/resume";
import { ThemeColorToggle } from "@/components/theme-color-toggle";
import { i18n } from "@/config";
import { useLocale } from "@/contexts/locale-context";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function ResumeToolbar() {
  const { locale, mounted } = useLocale();
  const t = i18n[locale];

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

  return (
    <div className="container mx-auto px-4 py-4 flex justify-between items-center print:hidden">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="w-4 h-4" />
        {t.resume.backToHome}
      </Link>
      <div className="flex items-center gap-2">
        <PrintButton locale={locale} />
        <LocaleToggle />
        <ThemeColorToggle locale={locale} />
        <ModeToggle />
      </div>
    </div>
  );
}
