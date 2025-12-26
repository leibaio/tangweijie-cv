import { SectionHeaderProps } from "@/types";
import React from "react";

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  icon: Icon,
  title,
}) => {
  return (
    <div className="flex items-center gap-2 print:gap-1">
      <Icon className="w-6 h-6 print:w-4 print:h-4" />
      <h2 className="text-lg font-semibold print:text-base">{title}</h2>
    </div>
  );
};
