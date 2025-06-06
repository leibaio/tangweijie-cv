import React from "react";

type ColorType = "blue" | "red" | "green" | "yellow" | "purple" | "gray";

export interface TagProps {
  children: React.ReactNode;
  color?: ColorType;
}

const colorClasses: Record<ColorType, string> = {
  blue: "bg-blue-100 text-blue-800",
  red: "bg-red-100 text-red-800",
  green: "bg-green-100 text-green-800",
  yellow: "bg-yellow-100 text-yellow-800",
  purple: "bg-purple-100 text-purple-800",
  gray: "bg-gray-100 text-gray-800",
};

export const Tag: React.FC<TagProps> = ({ children, color = "blue" }) => {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold ${colorClasses[color]}`}
    >
      {children}
    </span>
  );
};
