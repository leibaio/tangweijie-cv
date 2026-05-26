"use client";

import { LocaleToggle } from "@/components/locale-toggle";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Education,
  Header,
  PrintButton,
  Projects,
  SelfComment,
  Skills,
  WorkExperience,
} from "@/components/resume";
import { ThemeColorToggle } from "@/components/theme-color-toggle";
import { i18n } from "@/config";
import { useLocale } from "@/contexts/locale-context";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  const { locale, mounted } = useLocale();
  const t = i18n[locale];

  if (!mounted) {
    return (
      <div className="print:p-0 print:m-0">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center print:hidden">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <ArrowLeft className="w-4 h-4" />
            {i18n.zh.resume.backToHome}
          </div>
        </div>
        <div className="resume-content container mx-auto px-4 py-4 w-full md:max-w-4xl lg:max-w-4xl print:max-w-none print:px-8 print:py-0">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-1/3" />
            <div className="h-4 bg-muted rounded w-2/3" />
            <div className="h-4 bg-muted rounded w-1/2" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="print:p-0 print:m-0">
      {/* 顶部操作栏 - 打印时隐藏 */}
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

      {/* 简历内容 */}
      <div className="resume-content container mx-auto px-4 py-4 w-full md:max-w-4xl lg:max-w-4xl print:max-w-none print:px-8 print:py-0">
        <Header locale={locale} />
        <div className="my-4 print:my-2 flex flex-col lg:flex-row lg:justify-between gap-4">
          <Education locale={locale} />
        </div>
        <div className="my-4 print:my-2">
          <Skills locale={locale} />
        </div>
        <div className="my-4 print:my-2">
          <WorkExperience locale={locale} />
        </div>
        <div className="my-4 print:my-2">
          <Projects locale={locale} />
        </div>
        <div className="my-4 print:my-2">
          <SelfComment locale={locale} />
        </div>
      </div>
    </div>
  );
}
