"use client";

import { ArrowLeft, CreditCard, GitBranch, Tag } from "lucide-react";
import Link from "next/link";
import { defaultLocale, i18n, Locale } from "@/config";
import { useEffect, useState } from "react";

const showcaseItems = [
  {
    title: "项目卡片",
    description: "展示项目信息的卡片组件",
    href: "/showcase/project-card",
    icon: CreditCard,
  },
  {
    title: "时间线",
    description: "用于展示工作经历的时间线组件",
    href: "/showcase/timeline",
    icon: GitBranch,
  },
  {
    title: "标签",
    description: "技术栈标签组件",
    href: "/showcase/tag",
    icon: Tag,
  },
  {
    title: "JavaScript 筛选值",
    description: "如何根据某一个值，筛选出对象数组中的某一项",
    href: "/showcase/findValInObjArr",
    icon: Tag,
  },
];

export default function ShowcasePage() {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const [mounted, setMounted] = useState(false);
  const t = i18n[locale];

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved && (saved === "zh" || saved === "en")) {
      setLocale(saved);
    }
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        {t.common.backToHome}
      </Link>

      <h1 className="text-2xl font-bold mb-8">{t.features.showcase.title}</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {showcaseItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group block p-5 rounded-lg border hover:border-primary hover:shadow-md transition-all"
          >
            <item.icon className="w-6 h-6 mb-3 text-muted-foreground group-hover:text-primary transition-colors" />
            <h3 className="font-semibold mb-1">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
