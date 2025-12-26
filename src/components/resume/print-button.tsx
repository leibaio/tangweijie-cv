"use client";

import { Button } from "@/components/ui/button";
import { Locale } from "@/config";
import { Printer } from "lucide-react";

interface PrintButtonProps {
  locale?: Locale;
}

export default function PrintButton({ locale = "zh" }: PrintButtonProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handlePrint}
      className="print:hidden"
    >
      <Printer className="w-4 h-4 mr-2" />
      {locale === "zh" ? "打印简历" : "Print"}
    </Button>
  );
}
