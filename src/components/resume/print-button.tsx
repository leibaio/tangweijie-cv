"use client";

import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";

export default function PrintButton() {
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
      打印简历
    </Button>
  );
}
