import { SectionHeaderProps } from "@/types";
import React from "react";

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  icon: Icon,
  title,
}) => {
  return (
    <div className="flex items-center gap-2">
      <Icon className="w-6 h-6" />
      <h2 className="text-lg font-semibold">{title}</h2>
    </div>
  );
};
