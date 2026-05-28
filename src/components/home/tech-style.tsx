"use client";

import { siteConfig } from "@/config";
import { Locale, i18n } from "@/config/i18n";
import { getFeatures, techStack } from "@/data/home-shared";
import {
  ArrowRight,
  Github,
  Mail,
} from "lucide-react";
import Link from "next/link";

interface TechStyleProps {
  locale: Locale;
  header: React.ReactNode;
}

export function TechStyle({ locale, header }: TechStyleProps) {
  const t = i18n[locale];
  const features = getFeatures(locale);
  const FeatureIcon0 = features[0].icon;

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* === 背景层 === */}
      <div className="absolute inset-0 -z-10">
        {/* 基础网格 */}
        <div className="absolute inset-0 bg-background bg-[linear-gradient(to_right,hsl(var(--primary)/0.04)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.04)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        {/* 顶部大光晕 */}
        <div className="absolute top-0 h-[700px] w-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--primary)/0.14),transparent)]" />
        {/* 底部辅助光晕 */}
        <div className="absolute bottom-0 right-0 h-[500px] w-[600px] bg-[radial-gradient(circle_at_100%_100%,hsl(var(--primary)/0.06),transparent_70%)]" />
        {/* 左侧装饰光 */}
        <div className="absolute top-1/3 -left-32 h-[400px] w-[400px] bg-[radial-gradient(circle,hsl(var(--primary)/0.04),transparent_70%)]" />
      </div>
      {/* 噪点纹理 */}
      <div className="noise-overlay" />

      {/* 浮动装饰元素 */}
      <div className="absolute top-36 right-12 hidden lg:flex flex-col items-end gap-1 text-primary/[0.07] font-mono text-xs select-none animate-fade-in animation-delay-500">
        <span>{"const developer = {"}</span>
        <span className="pl-4">{"name: 'Tang Weijie',"}</span>
        <span className="pl-4">{"role: 'Full Stack',"}</span>
        <span className="pl-4">{"passion: Infinity"}</span>
        <span>{"};"}</span>
      </div>
      <div className="absolute top-72 left-8 hidden xl:flex flex-col gap-1 text-primary/[0.05] font-mono text-xs select-none animate-fade-in animation-delay-700">
        <span>{"// TODO: build amazing things"}</span>
        <span>{"// DONE: ✓"}</span>
      </div>

      {header}

      {/* === 主内容 === */}
      <main className="flex-1 relative z-10">
        {/* Hero 区域 */}
        <section className="container mx-auto px-4 pt-20 pb-24">
          <div className="max-w-3xl mx-auto text-center">
            {/* 状态徽章 */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm text-primary mb-10 font-mono animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              {t.hero.badge}
            </div>

            {/* 大标题 */}
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-fade-in-up animation-delay-100">
              <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/60 bg-clip-text text-transparent">
                {t.hero.subtitle}
              </span>
            </h2>

            {/* 副标题描述 */}
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              {t.hero.description}
            </p>

            {/* CTA 按钮 */}
            <div className="flex items-center justify-center gap-4 flex-wrap animate-fade-in-up animation-delay-300">
              <Link
                href="/resume"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:gap-3"
              >
                {t.hero.viewResume}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="mailto:leibaio@foxmail.com"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 font-mono text-sm"
              >
                <Mail className="w-4 h-4" />
                {t.hero.contactMe}
              </Link>
            </div>
          </div>
        </section>

        {/* Feature 卡片区域 */}
        <section className="container mx-auto px-4 pb-24">
          <div className="max-w-4xl mx-auto">
            {/* 第一张大卡片 */}
            <Link
              href={features[0].href}
              className="group relative block p-8 md:p-10 rounded-2xl border border-primary/10 bg-card/40 backdrop-blur-sm hover:border-primary/30 hover:bg-card/60 transition-all duration-300 mb-4 animate-fade-in-up animation-delay-400"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b from-primary/60 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-start gap-6">
                <span className="text-5xl font-bold text-primary/10 font-mono leading-none select-none group-hover:text-primary/20 transition-colors">01</span>
                <div className="flex-1">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors border border-primary/10">
                    <FeatureIcon0 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors font-mono">
                    {features[0].title}
                  </h3>
                  <p className="text-muted-foreground max-w-lg">
                    {features[0].description}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary opacity-0 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1 font-mono">
                    {"=>"} <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </Link>

            {/* 第 2-3 张并排卡片 */}
            <div className="grid md:grid-cols-2 gap-4">
              {features.slice(1).map((feature, index) => (
                <Link
                  key={feature.href}
                  href={feature.href}
                  className="group relative block p-6 md:p-8 rounded-2xl border border-primary/10 bg-card/40 backdrop-blur-sm hover:border-primary/30 hover:bg-card/60 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b from-primary/60 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="text-4xl font-bold text-primary/10 font-mono leading-none select-none group-hover:text-primary/20 transition-colors">
                    {String(index + 2).padStart(2, "0")}
                  </span>
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center my-4 group-hover:bg-primary/15 transition-colors border border-primary/10">
                    <feature.icon className="w-5 h-5 text-primary" />
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
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Marquee */}
        <section className="pb-24 animate-fade-in-up animation-delay-700">
          <div className="container mx-auto px-4">
            <p className="text-sm text-muted-foreground mb-8 font-mono text-center">
              {"// "}
              {t.techStack}
            </p>
          </div>
          <div className="relative overflow-hidden">
            {/* 左右渐隐遮罩 */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
            {/* 第一行 */}
            <div className="flex animate-marquee mb-3">
              {[...techStack, ...techStack].map((tech, i) => (
                <span
                  key={`row1-${i}`}
                  className="shrink-0 mx-2 px-5 py-2.5 rounded-xl text-sm font-mono border border-primary/10 bg-card/50 backdrop-blur-sm text-muted-foreground hover:border-primary/30 hover:text-primary hover:bg-primary/5 transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
            {/* 第二行（反向） */}
            <div className="flex animate-marquee-reverse">
              {[...techStack.slice().reverse(), ...techStack.slice().reverse()].map((tech, i) => (
                <span
                  key={`row2-${i}`}
                  className="shrink-0 mx-2 px-5 py-2.5 rounded-xl text-sm font-mono border border-primary/10 bg-card/50 backdrop-blur-sm text-muted-foreground hover:border-primary/30 hover:text-primary hover:bg-primary/5 transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-primary/10 bg-background/60 backdrop-blur-md py-8 relative z-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground font-mono">
            © {siteConfig.year} {siteConfig.author}. {t.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.github}
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
