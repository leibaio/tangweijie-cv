"use client";

import { Button } from "@/components/ui/button";
import { Locale, siteConfig } from "@/config";
import { Download } from "lucide-react";

interface PrintButtonProps {
  locale?: Locale;
}

export default function PrintButton({ locale = "zh" }: PrintButtonProps) {
  const buttonLabel = locale === "en" ? "Open Resume PDF" : "打开简历 PDF";

  return (
    <Button variant="outline" size="sm" asChild className="print:hidden">
      <a
        href={siteConfig.resumePdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={buttonLabel}
        title={buttonLabel}
      >
        <Download className="w-4 h-4" />
      </a>
    </Button>
  );
}
