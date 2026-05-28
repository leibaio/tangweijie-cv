import { TagColor } from "@/types";
import React from "react";

export interface TagProps {
  children: React.ReactNode;
  color?: TagColor;
}

const colorClasses: Record<TagColor, string> = {
  blue: "bg-blue-50 text-blue-700 border-blue-200/60 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800/40",
  red: "bg-red-50 text-red-700 border-red-200/60 dark:bg-red-950/40 dark:text-red-300 dark:border-red-800/40",
  green: "bg-green-50 text-green-700 border-green-200/60 dark:bg-green-950/40 dark:text-green-300 dark:border-green-800/40",
  yellow: "bg-amber-50 text-amber-700 border-amber-200/60 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/40",
  purple: "bg-purple-50 text-purple-700 border-purple-200/60 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800/40",
  gray: "bg-gray-50 text-gray-600 border-gray-200/60 dark:bg-gray-900/40 dark:text-gray-400 dark:border-gray-700/40",
};

const accentColors: Record<TagColor, string> = {
  blue: "border-l-blue-400",
  red: "border-l-red-400",
  green: "border-l-green-400",
  yellow: "border-l-amber-400",
  purple: "border-l-purple-400",
  gray: "border-l-gray-400",
};

export const Tag: React.FC<TagProps> = ({ children, color = "blue" }) => {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium border transition-colors hover:brightness-95 ${colorClasses[color]}`}
    >
      {children}
    </span>
  );
};

export function getAccentColor(color?: TagColor): string {
  return accentColors[color || "blue"];
}
