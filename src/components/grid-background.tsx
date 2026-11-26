import type { ReactNode } from "react";

interface GridBackgroundProps {
  children?: ReactNode;
}

/** 博客 / 展示页共用的网格背景，可叠加页面各自的光晕装饰 */
export function GridBackground({ children }: GridBackgroundProps) {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-background bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      {children}
    </div>
  );
}