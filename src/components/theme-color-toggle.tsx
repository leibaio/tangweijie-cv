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

interface ThemeColorToggleProps {
  locale?: "zh" | "en";
}

export function ThemeColorToggle({ locale = "zh" }: ThemeColorToggleProps) {
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

    root.style.setProperty("--primary", config.primary);
    root.style.setProperty("--primary-foreground", config.primaryForeground);
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
          <span className="sr-only">{locale === "zh" ? "切换主题色" : "Toggle theme color"}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="grid grid-cols-3 gap-1 w-56 p-2">
        {Object.entries(themeColors).map(([key, config]) => (
          <DropdownMenuItem
            key={key}
            onClick={() => handleColorChange(key as ThemeColor)}
            className="flex items-center gap-1.5 cursor-pointer px-2 py-1.5"
          >
            <span
              className="w-3 h-3 rounded-full border shrink-0"
              style={{ backgroundColor: config.primary }}
            />
            <span className="text-xs truncate">{locale === "zh" ? config.name : config.nameEn}</span>
            {color === key && <span className="ml-auto text-xs">✓</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
