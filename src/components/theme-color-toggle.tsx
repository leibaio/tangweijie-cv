"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeColor, defaultThemeColor, themeColors } from "@/config";
import { Palette } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeColorToggle() {
  const [color, setColor] = useState<ThemeColor>(defaultThemeColor);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme-color") as ThemeColor | null;
    if (saved && themeColors[saved]) {
      setColor(saved);
      applyThemeColor(saved);
    }
  }, []);

  const applyThemeColor = (colorKey: ThemeColor) => {
    const config = themeColors[colorKey];
    const root = document.documentElement;

    // 设置 CSS 变量
    root.style.setProperty("--primary", config.primary);
    root.style.setProperty("--primary-foreground", config.primaryForeground);
    // 同时设置 ring 颜色（用于 focus 状态）
    root.style.setProperty("--ring", config.primary);
  };

  const handleColorChange = (colorKey: ThemeColor) => {
    setColor(colorKey);
    applyThemeColor(colorKey);
    localStorage.setItem("theme-color", colorKey);
  };

  if (!mounted) {
    return (
      <Button variant="outline" size="icon">
        <Palette className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Palette
            className="h-[1.2rem] w-[1.2rem]"
            style={{ color: themeColors[color].primary }}
          />
          <span className="sr-only">切换主题色</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(themeColors).map(([key, config]) => (
          <DropdownMenuItem
            key={key}
            onClick={() => handleColorChange(key as ThemeColor)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span
              className="w-4 h-4 rounded-full border"
              style={{ backgroundColor: config.primary }}
            />
            <span>{config.name}</span>
            {color === key && <span className="ml-auto">✓</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
