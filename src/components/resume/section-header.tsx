import { SectionHeaderProps } from "@/types";
import React from "react";

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  icon: Icon,
  title,
}) => {
  return (
    <div className="flex items-center gap-3 print:gap-1.5">
      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/8 print:bg-transparent print:w-auto print:h-auto">
        <Icon className="w-4.5 h-4.5 print:w-4 print:h-4 text-primary" />
      </div>
      <h2 className="text-lg font-bold print:text-base text-foreground tracking-tight">
        {title}
      </h2>
      <div className="flex-1 h-px bg-primary/10 print:bg-primary/15 ml-1" />
    </div>
  );
};
