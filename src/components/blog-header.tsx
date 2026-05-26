"use client";

import { LocaleToggle } from "@/components/locale-toggle";
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeColorToggle } from "@/components/theme-color-toggle";
import { useLocale } from "@/contexts/locale-context";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface BlogHeaderProps {
  backHref: string;
  backText: string;
}

export function BlogHeader({ backHref, backText }: BlogHeaderProps) {
  const { locale } = useLocale();

  return (
    <header className="border-b border-primary/10 bg-background/60 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4" />
          {backText}
        </Link>
        <div className="flex items-center gap-2">
          <LocaleToggle />
          <ThemeColorToggle locale={locale} />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
