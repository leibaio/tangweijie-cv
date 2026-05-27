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

interface ChineseStyleProps {
  locale: Locale;
  header: React.ReactNode;
}

// 祥云 SVG 组件
function Xiangyun({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 120 80"
      fill="none"
      className={className}
      style={style}
    >
      <path
        d="M20 60 C20 60, 5 55, 8 42 C11 29, 25 30, 28 38 C28 38, 30 22, 45 22 C60 22, 58 38, 58 38 C58 38, 72 28, 85 35 C98 42, 88 55, 78 52 C78 52, 95 58, 90 70 C85 82, 68 75, 68 75 C68 75, 55 85, 40 78 C25 71, 30 60, 30 60 C30 60, 12 68, 20 60Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M50 40 C50 40, 42 36, 45 28 C48 20, 58 22, 58 22"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />
    </svg>
  );
}

// 小祥云
function SmallCloud({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 60 40"
      fill="none"
      className={className}
      style={style}
    >
      <path
        d="M10 30 C10 30, 3 28, 5 20 C7 12, 18 14, 20 19 C20 19, 22 10, 32 12 C42 14, 40 22, 40 22 C40 22, 48 18, 52 24 C56 30, 48 34, 44 32 C44 32, 50 36, 46 38 C42 40, 34 36, 34 36 C34 36, 26 40, 18 36 C10 32, 14 28, 14 28"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}

export function ChineseStyle({ locale, header }: ChineseStyleProps) {
  const t = i18n[locale];
  const features = getFeatures(locale);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ backgroundColor: "#F5F0E8" }}>
      {/* 宣纸纹理背景 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
          opacity: 0.8,
        }}
      />

      {/* 祥云装饰 */}
      <Xiangyun
        className="absolute pointer-events-none text-[#C5A33A] animate-fade-in"
        style={{ width: 180, top: 80, left: -30, transform: "rotate(-15deg)", opacity: 0.15 }}
      />
      <Xiangyun
        className="absolute pointer-events-none text-[#C5A33A] animate-fade-in animation-delay-200"
        style={{ width: 140, top: 160, right: 20, transform: "rotate(10deg) scaleX(-1)", opacity: 0.12 }}
      />
      <SmallCloud
        className="absolute pointer-events-none text-[#D4C5A0] animate-fade-in animation-delay-300"
        style={{ width: 80, top: 320, left: 60, opacity: 0.2 }}
      />
      <SmallCloud
        className="absolute pointer-events-none text-[#D4C5A0] animate-fade-in animation-delay-400"
        style={{ width: 100, top: 450, right: 80, transform: "scaleX(-1)", opacity: 0.15 }}
      />
      <Xiangyun
        className="absolute pointer-events-none text-[#C5A33A] animate-fade-in animation-delay-500"
        style={{ width: 120, bottom: 200, left: 40, transform: "rotate(20deg)", opacity: 0.1 }}
      />
      <SmallCloud
        className="absolute pointer-events-none text-[#D4C5A0] animate-fade-in"
        style={{ width: 70, bottom: 120, right: 120, opacity: 0.18 }}
      />

      {/* 山水意境 - 底部远山轮廓 */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ opacity: 0.04 }}>
        <svg viewBox="0 0 1200 200" fill="none" className="w-full">
          <path
            d="M0 200 L0 150 C100 100, 200 80, 300 110 C400 140, 450 60, 550 90 C650 120, 700 50, 800 80 C900 110, 950 70, 1050 100 C1100 115, 1150 90, 1200 120 L1200 200Z"
            fill="#3D2B1F"
          />
          <path
            d="M0 200 L0 170 C150 130, 250 120, 400 150 C500 170, 600 100, 750 130 C850 150, 950 110, 1100 140 C1150 150, 1180 140, 1200 155 L1200 200Z"
            fill="#3D2B1F"
          />
        </svg>
      </div>

      {header}

      <main className="flex-1 container mx-auto px-4 py-16 relative z-10">
        {/* Hero */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          {/* Top decorative line */}
          <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in">
            <div className="w-16 h-px" style={{ background: "linear-gradient(90deg, transparent, #C5A33A)" }} />
            <span className="text-xs tracking-[0.5em]" style={{ color: "#B8963E" }}>
              {t.hero.badge}
            </span>
            <div className="w-16 h-px" style={{ background: "linear-gradient(270deg, transparent, #C5A33A)" }} />
          </div>

          {/* Name */}
          <h1
            className="text-5xl md:text-7xl font-bold mb-4 tracking-[0.15em] animate-fade-in-up"
            style={{ color: "#3D2B1F" }}
          >
            {t.hero.subtitle.replace("我是", "").replace("I'm ", "")}
          </h1>

          {/* Gold divider with diamond */}
          <div className="flex items-center justify-center gap-4 my-6 animate-fade-in-up animation-delay-100">
            <div className="w-24 h-px" style={{ background: "linear-gradient(90deg, transparent, #C5A33A)" }} />
            <div className="w-2 h-2 rotate-45" style={{ backgroundColor: "#C5A33A" }} />
            <div className="w-24 h-px" style={{ background: "linear-gradient(270deg, transparent, #C5A33A)" }} />
          </div>

          {/* Subtitle */}
          <p className="text-lg mb-2 tracking-widest animate-fade-in-up animation-delay-200" style={{ color: "#6B5B4F" }}>
            {t.hero.badge.split("·")[0].trim()}
          </p>
          <p className="text-base mb-10 animate-fade-in-up animation-delay-300" style={{ color: "#8B7355" }}>
            {t.hero.description}
          </p>

          {/* CTA buttons */}
          <div className="flex items-center justify-center gap-4 flex-wrap animate-fade-in-up animation-delay-400">
            <Link
              href="/resume"
              className="group inline-flex items-center gap-2 px-8 py-3 text-sm tracking-widest transition-all hover:gap-3"
              style={{
                backgroundColor: "#C5A33A",
                color: "#F5F0E8",
                borderRadius: 2,
              }}
            >
              {t.hero.viewResume}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="mailto:leibaio@foxmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 text-sm tracking-widest transition-all"
              style={{
                border: "1px solid #C5A33A",
                color: "#6B5B4F",
                borderRadius: 2,
              }}
            >
              <Mail className="w-4 h-4" />
              {t.hero.contactMe}
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {features.map((feature, index) => (
            <Link
              key={feature.href}
              href={feature.href}
              className="group relative block p-6 transition-all animate-fade-in-up"
              style={{
                border: "1px solid #D4C5A0",
                borderRadius: 2,
                backgroundColor: "rgba(245, 240, 232, 0.6)",
                backdropFilter: "blur(4px)",
                animationDelay: `${300 + index * 100}ms`,
              }}
            >
              <div
                className="w-10 h-10 flex items-center justify-center mb-4 transition-colors"
                style={{ border: "1px solid #C5A33A", borderRadius: 2 }}
              >
                <feature.icon className="w-5 h-5" style={{ color: "#C5A33A" }} />
              </div>
              <h3 className="text-base font-semibold mb-2 tracking-wider" style={{ color: "#3D2B1F" }}>
                {feature.title}
              </h3>
              <p className="text-sm" style={{ color: "#8B7355" }}>
                {feature.description}
              </p>
              <div
                className="mt-4 inline-flex items-center gap-1 text-sm opacity-0 group-hover:opacity-100 transition-all"
                style={{ color: "#C5A33A" }}
              >
                <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-px" style={{ background: "#D4C5A0" }} />
            <p className="text-xs tracking-[0.3em]" style={{ color: "#8B7355" }}>
              {t.techStack}
            </p>
            <div className="w-12 h-px" style={{ background: "#D4C5A0" }} />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm tracking-wider cursor-default transition-all"
                style={{
                  border: "1px solid #D4C5A0",
                  borderRadius: 2,
                  color: "#6B5B4F",
                  backgroundColor: "rgba(245, 240, 232, 0.5)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 relative z-10" style={{ borderTop: "1px solid #D4C5A0" }}>
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm tracking-wider" style={{ color: "#B8A88A" }}>
            {siteConfig.author} · {siteConfig.year}
          </p>
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: "#B8A88A" }}
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="transition-colors"
              style={{ color: "#B8A88A" }}
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
