"use client";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { defaultHomeStyle, HomeStyle, homeStyles } from "@/config/home-style";
import { Locale } from "@/config/i18n";
import { Cpu, Minus, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

const iconMap = {
  cpu: Cpu,
  minus: Minus,
  terminal: Terminal,
};

interface HomeStyleToggleProps {
  locale: Locale;
  onStyleChange?: (style: HomeStyle) => void;
}

export function HomeStyleToggle({ locale, onStyleChange }: HomeStyleToggleProps) {
  const [style, setStyle] = useState<HomeStyle>(defaultHomeStyle);

  useEffect(() => {
    const saved = localStorage.getItem("home-style") as HomeStyle | null;
    if (saved && Object.keys(homeStyles).includes(saved)) {
      setStyle(saved);
      onStyleChange?.(saved);
    }
  }, [onStyleChange]);

  const handleStyleChange = (newStyle: HomeStyle) => {
    setStyle(newStyle);
    localStorage.setItem("home-style", newStyle);
    onStyleChange?.(newStyle);
  };

  const CurrentIcon = iconMap[homeStyles[style].icon as keyof typeof iconMap];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="h-9 w-9">
          <CurrentIcon className="h-4 w-4" />
          <span className="sr-only">Toggle home style</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {(Object.keys(homeStyles) as HomeStyle[]).map((key) => {
          const config = homeStyles[key];
          const Icon = iconMap[config.icon as keyof typeof iconMap];
          return (
            <DropdownMenuItem
              key={key}
              onClick={() => handleStyleChange(key)}
              className={style === key ? "bg-accent" : ""}
            >
              <Icon className="mr-2 h-4 w-4" />
              {locale === "en" ? config.nameEn : config.name}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
