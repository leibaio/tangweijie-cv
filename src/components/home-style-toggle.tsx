"use client";

import { homeStyleThemes } from "@/components/home/theme";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HomeStyle, homeStyles } from "@/config/home-style";
import { Locale } from "@/config/i18n";
import { useHomeStyle } from "@/contexts/home-style-context";

interface HomeStyleToggleProps {
  locale: Locale;
}

export function HomeStyleToggle({ locale }: HomeStyleToggleProps) {
  const { style, setStyle } = useHomeStyle();
  const CurrentIcon = homeStyleThemes[style].icon;

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
          const Icon = homeStyleThemes[key].icon;
          return (
            <DropdownMenuItem
              key={key}
              onClick={() => setStyle(key)}
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