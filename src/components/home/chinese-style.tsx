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

// 祥云 SVG — 增强版
function Xiangyun({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" className={className} style={style}>
      <path
        d="M20 60 C20 60, 5 55, 8 42 C11 29, 25 30, 28 38 C28 38, 30 22, 45 22 C60 22, 58 38, 58 38 C58 38, 72 28, 85 35 C98 42, 88 55, 78 52 C78 52, 95 58, 90 70 C85 82, 68 75, 68 75 C68 75, 55 85, 40 78 C25 71, 30 60, 30 60 C30 60, 12 68, 20 60Z"
        stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6"
      />
      <path
        d="M50 40 C50 40, 42 36, 45 28 C48 20, 58 22, 58 22"
        stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4"
      />
    </svg>
  );
}

// 小祥云
function SmallCloud({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 60 40" fill="none" className={className} style={style}>
      <path
        d="M10 30 C10 30, 3 28, 5 20 C7 12, 18 14, 20 19 C20 19, 22 10, 32 12 C42 14, 40 22, 40 22 C40 22, 48 18, 52 24 C56 30, 48 34, 44 32 C44 32, 50 36, 46 38 C42 40, 34 36, 34 36 C34 36, 26 40, 18 36 C10 32, 14 28, 14 28"
        stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5"
      />
    </svg>
  );
}

// 印章组件
function SealStamp({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 80 80" className={className} style={style}>
      {/* 外框 */}
      <rect x="4" y="4" width="72" height="72" rx="2" fill="none" stroke="#C23A2B" strokeWidth="3" opacity="0.9" />
      {/* 内框 */}
      <rect x="10" y="10" width="60" height="60" rx="1" fill="none" stroke="#C23A2B" strokeWidth="1.5" opacity="0.7" />
      {/* 文字 - Hi */}
      <text
        x="40" y="48"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="'Noto Serif SC', 'SimSun', serif"
        fontSize="32"
        fontWeight="900"
        fill="#C23A2B"
        opacity="0.85"
      >
        Hi
      </text>
    </svg>
  );
}

// 毛笔笔触 SVG
function BrushStroke({ className, style, flip }: { className?: string; style?: React.CSSProperties; flip?: boolean }) {
  return (
    <svg viewBox="0 0 300 20" fill="none" className={className} style={{ ...style, transform: flip ? "scaleX(-1)" : undefined }}>
      <path
        d="M0 10 C20 8, 40 12, 80 9 C120 6, 160 13, 200 10 C240 7, 270 11, 300 10"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.3"
      />
      <path
        d="M10 10 C30 9, 50 11, 90 8 C130 5, 170 12, 210 9 C250 6, 280 10, 295 10"
        stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.15"
      />
    </svg>
  );
}

// 回纹边框装饰
function HuiwenBorder({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 200 12" fill="none" className={className} style={style}>
      <path
        d="M0 6 L6 6 L6 0 L12 0 L12 6 L18 6 L18 12 L12 12 L12 6 M18 6 L24 6 L24 0 L30 0 L30 6 L36 6 L36 12 L30 12 L30 6 M36 6 L42 6 L42 0 L48 0 L48 6 L54 6 L54 12 L48 12 L48 6 M54 6 L60 6 L60 0 L66 0 L66 6 L72 6 L72 12 L66 12 L66 6 M72 6 L78 6 L78 0 L84 0 L84 6 L90 6 L90 12 L84 12 L84 6 M90 6 L96 6 L96 0 L102 0 L102 6 L108 6 L108 12 L102 12 L102 6"
        stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2"
      />
    </svg>
  );
}

// 飘落花瓣粒子
function FloatingPetals() {
  const petals = [
    { left: "8%", delay: "0s", duration: "12s", size: 6, rotate: "15deg" },
    { left: "22%", delay: "2s", duration: "15s", size: 5, rotate: "-20deg" },
    { left: "38%", delay: "4s", duration: "11s", size: 7, rotate: "30deg" },
    { left: "55%", delay: "1s", duration: "14s", size: 4, rotate: "-10deg" },
    { left: "70%", delay: "3s", duration: "13s", size: 6, rotate: "25deg" },
    { left: "85%", delay: "5s", duration: "16s", size: 5, rotate: "-15deg" },
    { left: "45%", delay: "6s", duration: "10s", size: 3, rotate: "40deg" },
    { left: "15%", delay: "7s", duration: "14s", size: 5, rotate: "-35deg" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {petals.map((p, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: p.left,
            top: "-10px",
            width: p.size,
            height: p.size * 1.4,
            backgroundColor: i % 3 === 0 ? "#C5A33A" : i % 3 === 1 ? "#D4A574" : "#C23A2B",
            borderRadius: "50% 0 50% 0",
            opacity: 0.15,
            transform: `rotate(${p.rotate})`,
            animation: `petalFall ${p.duration} ${p.delay} linear infinite`,
          }}
        />
      ))}
    </div>
  );
}

export function ChineseStyle({ locale, header }: ChineseStyleProps) {
  const t = i18n[locale];
  const features = getFeatures(locale);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ backgroundColor: "#F5F0E8" }}>
      {/* 宣纸纹理背景 - 增强版 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E"),
            radial-gradient(ellipse at 20% 50%, rgba(197,163,58,0.04) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 30%, rgba(194,58,43,0.02) 0%, transparent 40%)
          `,
          opacity: 0.9,
        }}
      />

      {/* 飘落花瓣 */}
      <FloatingPetals />

      {/* 祥云装饰 - 带漂浮动画 */}
      <Xiangyun
        className="absolute pointer-events-none animate-cloud-float"
        style={{ width: 180, top: 80, left: -30, transform: "rotate(-15deg)", color: "#C5A33A", opacity: 0.15 }}
      />
      <Xiangyun
        className="absolute pointer-events-none animate-cloud-float-reverse"
        style={{ width: 140, top: 160, right: 20, transform: "rotate(10deg) scaleX(-1)", color: "#C5A33A", opacity: 0.12 }}
      />
      <SmallCloud
        className="absolute pointer-events-none animate-cloud-float-slow"
        style={{ width: 80, top: 320, left: 60, color: "#D4C5A0", opacity: 0.2 }}
      />
      <SmallCloud
        className="absolute pointer-events-none animate-cloud-float"
        style={{ width: 100, top: 450, right: 80, transform: "scaleX(-1)", color: "#D4C5A0", opacity: 0.15 }}
      />
      <Xiangyun
        className="absolute pointer-events-none animate-cloud-float-slow"
        style={{ width: 120, bottom: 200, left: 40, transform: "rotate(20deg)", color: "#C5A33A", opacity: 0.1 }}
      />
      <SmallCloud
        className="absolute pointer-events-none animate-cloud-float-reverse"
        style={{ width: 70, bottom: 120, right: 120, color: "#D4C5A0", opacity: 0.18 }}
      />

      {/* 水墨山水 - 多层远山 */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        {/* 远山 - 淡 */}
        <svg viewBox="0 0 1200 250" fill="none" className="w-full absolute bottom-0" style={{ opacity: 0.025 }}>
          <path
            d="M0 250 L0 120 C80 70, 180 50, 280 90 C380 130, 430 40, 530 70 C630 100, 680 30, 780 60 C880 90, 940 45, 1040 75 C1100 90, 1150 65, 1200 95 L1200 250Z"
            fill="#3D2B1F"
          />
        </svg>
        {/* 中山 */}
        <svg viewBox="0 0 1200 200" fill="none" className="w-full absolute bottom-0" style={{ opacity: 0.035 }}>
          <path
            d="M0 200 L0 150 C100 100, 200 80, 300 110 C400 140, 450 60, 550 90 C650 120, 700 50, 800 80 C900 110, 950 70, 1050 100 C1100 115, 1150 90, 1200 120 L1200 200Z"
            fill="#3D2B1F"
          />
        </svg>
        {/* 近山 - 浓 */}
        <svg viewBox="0 0 1200 150" fill="none" className="w-full absolute bottom-0" style={{ opacity: 0.05 }}>
          <path
            d="M0 150 L0 130 C120 90, 200 100, 350 120 C450 135, 520 85, 650 105 C750 120, 850 90, 1000 110 C1080 118, 1140 105, 1200 115 L1200 150Z"
            fill="#3D2B1F"
          />
        </svg>
        {/* 雾气层 */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24"
          style={{
            background: "linear-gradient(to top, #F5F0E8 0%, transparent 100%)",
          }}
        />
      </div>

      {header}

      <main className="flex-1 container mx-auto px-4 py-16 relative z-10">
        {/* Hero — 卷轴式布局 */}
        <div className="max-w-3xl mx-auto text-center mb-20 relative">
          {/* 传统回纹装饰框 - 顶部 */}
          <div className="flex justify-center mb-6 animate-fade-in">
            <HuiwenBorder style={{ width: 200, color: "#C5A33A" }} />
          </div>

          {/* Top decorative line */}
          <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in">
            <BrushStroke style={{ width: 100, color: "#C5A33A" }} />
            <span className="text-xs tracking-[0.5em]" style={{ color: "#B8963E" }}>
              {t.hero.badge}
            </span>
            <BrushStroke style={{ width: 100, color: "#C5A33A" }} flip />
          </div>

          {/* Name — 楷体风格 */}
          <h1
            className="text-5xl md:text-7xl font-bold mb-4 tracking-[0.15em] animate-fade-in-up"
            style={{
              fontFamily: "'Noto Serif SC', 'SimSun', 'STSong', serif",
              fontWeight: 900,
              color: "#3D2B1F",
            }}
          >
            {t.hero.subtitle.replace("我是", "").replace("I'm ", "")}
          </h1>

          {/* 印章 */}
          <div className="absolute top-12 right-0 md:right-[-60px] animate-fade-in-scale animation-delay-300">
            <SealStamp style={{ width: 56, height: 56, transform: "rotate(-8deg)", opacity: 0.7 }} />
          </div>

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

          {/* CTA buttons — 增加水墨风格 */}
          <div className="flex items-center justify-center gap-4 flex-wrap animate-fade-in-up animation-delay-400">
            <Link
              href="/resume"
              className="group inline-flex items-center gap-2 px-8 py-3 text-sm tracking-widest transition-all duration-500 hover:gap-3 relative overflow-hidden"
              style={{
                backgroundColor: "#C5A33A",
                color: "#F5F0E8",
                borderRadius: 2,
              }}
            >
              {/* 悬停时的水墨扩散效果 */}
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: "radial-gradient(circle at center, #3D2B1F 0%, transparent 70%)",
                  mixBlendMode: "multiply",
                }}
              />
              <span className="relative z-10 flex items-center gap-2">
                {t.hero.viewResume}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              href="mailto:leibaio@foxmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 text-sm tracking-widest transition-all duration-300 hover:tracking-[0.3em]"
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

          {/* 传统回纹装饰框 - 底部 */}
          <div className="flex justify-center mt-8 animate-fade-in animation-delay-500">
            <HuiwenBorder style={{ width: 120, color: "#D4C5A0" }} />
          </div>
        </div>

        {/* Features — 水墨卡片 */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {features.map((feature, index) => (
            <Link
              key={feature.href}
              href={feature.href}
              className="group relative block p-6 transition-all duration-500 animate-fade-in-up overflow-hidden"
              style={{
                border: "1px solid #D4C5A0",
                borderRadius: 2,
                backgroundColor: "rgba(245, 240, 232, 0.6)",
                backdropFilter: "blur(4px)",
                animationDelay: `${300 + index * 100}ms`,
              }}
            >
              {/* 水墨扩散悬停效果 */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: `radial-gradient(circle at ${50 + index * 15}% 50%, rgba(197,163,58,0.08) 0%, transparent 60%)`,
                }}
              />
              {/* 悬停时的毛笔笔触装饰 */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
                style={{ backgroundColor: "#C5A33A", opacity: 0.4 }}
              />
              <div className="relative z-10">
                <div
                  className="w-10 h-10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ border: "1px solid #C5A33A", borderRadius: 2 }}
                >
                  <feature.icon className="w-5 h-5 transition-colors duration-300" style={{ color: "#C5A33A" }} />
                </div>
                <h3 className="text-base font-semibold mb-2 tracking-wider" style={{ color: "#3D2B1F" }}>
                  {feature.title}
                </h3>
                <p className="text-sm" style={{ color: "#8B7355" }}>
                  {feature.description}
                </p>
                <div
                  className="mt-4 inline-flex items-center gap-1 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"
                  style={{ color: "#C5A33A" }}
                >
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <BrushStroke style={{ width: 80, color: "#D4C5A0" }} />
            <p className="text-xs tracking-[0.3em]" style={{ color: "#8B7355" }}>
              {t.techStack}
            </p>
            <BrushStroke style={{ width: 80, color: "#D4C5A0" }} flip />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm tracking-wider cursor-default transition-all duration-300 hover:tracking-[0.25em] animate-fade-in-up"
                style={{
                  border: "1px solid #D4C5A0",
                  borderRadius: 2,
                  color: "#6B5B4F",
                  backgroundColor: "rgba(245, 240, 232, 0.5)",
                  animationDelay: `${600 + i * 50}ms`,
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
              className="transition-colors duration-300 hover:opacity-70"
              style={{ color: "#B8A88A" }}
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="transition-colors duration-300 hover:opacity-70"
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
