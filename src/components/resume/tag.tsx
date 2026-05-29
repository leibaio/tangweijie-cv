import { TagColor } from "@/types";
import React from "react";

export interface TagProps {
  children: React.ReactNode;
  color?: TagColor;
}

const colorClasses: Record<TagColor, string> = {
  blue: "bg-primary/[0.06] text-foreground/70 border-primary/15",
  green: "bg-primary/[0.06] text-foreground/70 border-primary/15",
  purple: "bg-primary/[0.06] text-foreground/70 border-primary/15",
};

export const Tag: React.FC<TagProps> = ({ children, color = "blue" }) => {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium border transition-colors ${colorClasses[color]}`}
    >
      {children}
    </span>
  );
};

export function getAccentColor(color?: TagColor): string {
  return "border-l-primary/40";
}
