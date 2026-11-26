"use client";

import { HomeHeader } from "@/components/home/home-header";
import { HOME_STYLE_COMPONENTS } from "@/components/home/registry";
import { defaultHomeStyle, HomeStyle, homeStyles } from "@/config/home-style";
import { useLocale } from "@/contexts/locale-context";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const { locale } = useLocale();
  const [homeStyle, setHomeStyle] = useState<HomeStyle>(defaultHomeStyle);

  useEffect(() => {
    const saved = localStorage.getItem("home-style") as HomeStyle | null;
    if (saved && saved in homeStyles) {
      setHomeStyle(saved);
    }
  }, []);

  const handleStyleChange = useCallback((style: HomeStyle) => {
    setHomeStyle(style);
  }, []);

  const Style = HOME_STYLE_COMPONENTS[homeStyle];
  const header = (
    <HomeHeader
      locale={locale}
      style={homeStyle}
      onStyleChange={handleStyleChange}
    />
  );

  return <Style locale={locale} header={header} />;
}