"use client";

import { LocaleToggle } from "@/components/locale-toggle";
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeColorToggle } from "@/components/theme-color-toggle";
import { defaultLocale, i18n, Locale, siteConfig } from "@/config";
import { ArrowRight, Braces, Code2, Component, FileText, Github, Mail, Terminal } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const techStack = [
  "Vue 2/3",
  "React",
  "TypeScript",
  "Next.js",
  "Nuxt.js",
  "Tailwind CSS",
  "Spring Boot",
  "MyBatis-Plus",
  "Redis",
  "MySQL",
];

export default function Home() {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const [typedText, setTypedText] = useState("");
  const [mounted, setMounted] = useState(false);
  const t = i18n[locale];

  const fullText = "console.log('Hello, World!');";

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved && (saved === "zh" || saved === "en")) {
      setLocale(saved);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    let index = 0;
    setTypedText("");
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, [mounted]);

  const features = [
    {
      title: t.features.resume.title,
      description: t.features.resume.description,
      href: "/resume",
      icon: FileText,
    },
    {
      title: t.features.showcase.title,
      description: t.features.showcase.description,
      href: "/showcase",
      icon: Component,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* 科技感背景 */}
      <div className="absolute inset-0 -z-10">
        {/* 格子背景 */}
        <div className="absolute inset-0 bg-background bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        {/* 渐变光晕 */}
        <div className="absolute top-0 h-[600px] w-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--primary)/0.12),transparent)]" />
        {/* 右下角装饰 */}
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-[radial-gradient(circle_at_100%_100%,hsl(var(--primary)/0.08),transparent_70%)]" />
      </div>

      {/* 浮动代码装饰 */}
      <div className="absolute top-32 left-10 text-primary/10 font-mono text-sm hidden lg:block select-none">
        <Code2 className="w-8 h-8 mb-2" />
        <div>{"<Developer />"}</div>
      </div>
      <div className="absolute top-48 right-16 text-primary/10 font-mono text-sm hidden lg:block select-none">
        <Braces className="w-8 h-8 mb-2" />
        <div>{"{ code: true }"}</div>
      </div>

      <header className="border-b border-primary/10 bg-background/60 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-primary" />
            <h1 className="text-lg font-bold font-mono text-primary">{t.nav.siteName}</h1>
          </div>
          <div className="flex items-center gap-2">
            <LocaleToggle onLocaleChange={setLocale} />
            <ThemeColorToggle locale={locale} />
            <ModeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-16">
        {/* Hero 区域 */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          {/* 状态徽章 */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm text-primary mb-8 font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            {t.hero.badge}
          </div>

          {/* 打字机效果 */}
          <div className="mb-6 font-mono text-sm text-muted-foreground bg-card/50 backdrop-blur border border-primary/10 rounded-lg px-4 py-3 inline-block">
            <span className="text-primary/60">{">"}</span>{" "}
            <span className="text-primary">{typedText}</span>
            <span className="animate-pulse text-primary">|</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-4 font-mono">
            <span className="text-muted-foreground">{"// "}</span>
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              {t.hero.subtitle}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            {t.hero.description}
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/resume"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all hover:gap-3"
            >
              {t.hero.viewResume}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="mailto:leibaio@foxmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all font-mono text-sm"
            >
              <Mail className="w-4 h-4" />
              {t.hero.contactMe}
            </Link>
          </div>
        </div>

        {/* 功能卡片 */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          {features.map((feature) => (
            <Link
              key={feature.href}
              href={feature.href}
              className="group relative block p-6 rounded-xl border border-primary/10 bg-card/30 backdrop-blur-sm hover:border-primary/30 hover:bg-card/50 transition-all"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors border border-primary/10">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors font-mono">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-all font-mono">
                  {"=>"} <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 技术栈展示 */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-muted-foreground mb-6 font-mono">
            {"// "}{t.techStack}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg text-sm font-mono border border-primary/10 bg-card/30 backdrop-blur-sm text-muted-foreground hover:border-primary/30 hover:text-primary hover:bg-primary/5 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-primary/10 bg-background/60 backdrop-blur-md py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground font-mono">
            © {siteConfig.year} {siteConfig.author}. {t.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:leibaio@foxmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
