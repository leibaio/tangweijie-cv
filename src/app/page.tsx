"use client";

import { HomeHeader } from "@/components/home/home-header";
import { HOME_STYLE_COMPONENTS } from "@/components/home/registry";
import { useHomeStyle } from "@/contexts/home-style-context";
import { useLocale } from "@/contexts/locale-context";

export default function Home() {
  const { locale } = useLocale();
  const { style } = useHomeStyle();

  const Style = HOME_STYLE_COMPONENTS[style];
  const header = <HomeHeader locale={locale} style={style} />;

  return <Style locale={locale} header={header} />;
}