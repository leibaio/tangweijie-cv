"use client";

import { siteConfig } from "@/config";
import { Locale, i18n } from "@/config/i18n";
import { getFeatures, techStack } from "@/data/home-shared";
import { ArrowRight, Github, Mail } from "lucide-react";
import Link from "next/link";

interface NewspaperStyleProps {
  locale: Locale;
  header: React.ReactNode;
}

export function NewspaperStyle({ locale, header }: NewspaperStyleProps) {
  const t = i18n[locale];
  const features = getFeatures(locale);

  return (
    <div
      className="min-h-screen flex flex-col relative"
      style={{ backgroundColor: "#F5F0E1" }}
    >
      {/* Paper grain texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }}
      />

      {/* Large faded decorative number */}
      <div
        className="absolute top-4 left-6 pointer-events-none select-none hidden md:block animate-fade-in"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "14rem",
          fontWeight: 900,
          lineHeight: 1,
          color: "#111",
          opacity: 0.025,
        }}
      >
        {new Date().getDate()}
      </div>

      {header}

      <main className="flex-1 relative z-10">
        {/* Masthead — newspaper nameplate */}
        <section className="container mx-auto px-4 pt-8 pb-6">
          <div className="max-w-5xl mx-auto">
            {/* Top rules */}
            <div className="border-t-[3px] border-[#111] pt-4 animate-fade-in">
              <div className="border-t border-[#111] mt-1 pt-4">
                {/* Masthead */}
                <div className="text-center mb-4">
                  <h1
                    className="animate-fade-in-up animation-delay-100"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "clamp(2.5rem, 7vw, 5rem)",
                      fontWeight: 900,
                      fontStyle: "italic",
                      color: "#111",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}
                  >
                    {locale === "zh" ? "湯偉傑時報" : "The Weijie Times"}
                  </h1>
                </div>

                {/* Masthead info bar */}
                <div
                  className="flex flex-wrap items-center justify-between text-[9px] uppercase tracking-[0.25em] py-2 border-y border-[#111]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#555",
                  }}
                >
                  <span>Vol. XXVI &middot; No. 01</span>
                  <span>Shanghai, China</span>
                  <span>Since 2024</span>
                  <span className="hidden sm:inline">
                    All the Code That&rsquo;s Fit to Ship
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero — broadsheet headline area */}
        <section className="container mx-auto px-4 pb-8">
          <div className="max-w-5xl mx-auto">
            <div className="border-b-[2px] border-[#111] pb-8 animate-fade-in-up animation-delay-200">
              {/* Breaking news banner */}
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em]"
                  style={{ backgroundColor: "#8B0000", color: "#F5F0E1" }}
                >
                  {locale === "zh" ? "头条" : "Breaking"}
                </span>
                <div
                  className="h-px flex-1"
                  style={{ backgroundColor: "#111", opacity: 0.2 }}
                />
              </div>

              {/* Main headline */}
              <h2
                className="mb-4 animate-fade-in-up animation-delay-300"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: 900,
                  color: "#111",
                  lineHeight: 1.1,
                }}
              >
                {t.hero.subtitle}
              </h2>

              {/* Deck / subtitle */}
              <div className="flex flex-col md:flex-row gap-6">
                <p
                  className="flex-1 leading-relaxed animate-fade-in-up animation-delay-400"
                  style={{
                    fontFamily: "'Source Serif 4', 'Georgia', serif",
                    fontSize: "0.95rem",
                    color: "#444",
                    textAlign: "justify",
                    lineHeight: 1.8,
                  }}
                >
                  {t.hero.description}
                </p>
                <div className="flex flex-col gap-3 md:w-48 shrink-0 animate-fade-in-up animation-delay-500">
                  <Link
                    href="/resume"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 text-[10px] uppercase tracking-[0.2em] font-bold transition-all hover:bg-[#111]"
                    style={{
                      backgroundColor: "#8B0000",
                      color: "#F5F0E1",
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    {t.hero.viewResume}
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                  <Link
                    href="mailto:leibaio@foxmail.com"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 text-[10px] uppercase tracking-[0.2em] font-bold transition-all hover:bg-[#111] hover:text-[#F5F0E1]"
                    style={{
                      border: "2px solid #111",
                      color: "#111",
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    <Mail className="w-3 h-3" />
                    {t.hero.contactMe}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features — newspaper column layout */}
        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-5xl mx-auto">
            {/* Column rules */}
            <div className="grid md:grid-cols-12 gap-0">
              {/* Lead story — spans 5 cols */}
              <Link
                href={features[0].href}
                className="group md:col-span-5 block py-6 md:pr-6 md:border-r border-[#111]/10 animate-fade-in-up animation-delay-500"
              >
                <span
                  className="text-[9px] uppercase tracking-[0.3em] font-bold block mb-4"
                  style={{
                    color: "#8B0000",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  Lead Story
                </span>
                <h3
                  className="text-2xl font-bold mb-3 group-hover:text-[#8B0000] transition-colors"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#111",
                  }}
                >
                  {features[0].title}
                </h3>
                <p
                  className="text-sm leading-[1.8] mb-4"
                  style={{
                    fontFamily: "'Source Serif 4', 'Georgia', serif",
                    color: "#555",
                    textAlign: "justify",
                  }}
                >
                  {features[0].description}
                </p>
                <span
                  className="text-[10px] uppercase tracking-[0.2em] font-bold group-hover:text-[#8B0000] transition-colors"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#999",
                  }}
                >
                  Continue Reading{" "}
                  <ArrowRight className="w-3 h-3 inline ml-1" />
                </span>
              </Link>

              {/* Secondary stories — spans 4 cols */}
              <div className="md:col-span-4 flex flex-col">
                {features.slice(1).map((feature, index) => (
                  <Link
                    key={feature.href}
                    href={feature.href}
                    className="group block py-6 md:px-6 animate-fade-in-up"
                    style={{
                      borderBottom:
                        index < features.length - 2
                          ? "1px solid rgba(17,17,17,0.1)"
                          : undefined,
                      animationDelay: `${600 + index * 100}ms`,
                    }}
                  >
                    <span
                      className="text-[9px] uppercase tracking-[0.3em] font-bold block mb-2"
                      style={{
                        color: "#8B0000",
                        fontFamily: "'Playfair Display', serif",
                      }}
                    >
                      {index === 0 ? "Section B" : "Section C"}
                    </span>
                    <h3
                      className="text-lg font-bold mb-2 group-hover:text-[#8B0000] transition-colors"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: "#111",
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-sm leading-[1.7]"
                      style={{
                        fontFamily: "'Source Serif 4', 'Georgia', serif",
                        color: "#666",
                      }}
                    >
                      {feature.description}
                    </p>
                  </Link>
                ))}
              </div>

              {/* Sidebar — spans 3 cols */}
              <div className="md:col-span-3 md:pl-6 md:border-l border-[#111]/10 py-6 animate-fade-in animation-delay-700">
                <span
                  className="text-[9px] uppercase tracking-[0.3em] font-bold block mb-4"
                  style={{
                    color: "#8B0000",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {locale === "zh" ? "个人信息" : "Personal Info"}
                </span>
                <div
                  className="space-y-3 text-sm"
                  style={{
                    fontFamily: "'Source Serif 4', 'Georgia', serif",
                    color: "#555",
                  }}
                >
                  <div className="border-b border-[#111]/10 pb-2">
                    <span
                      className="text-[10px] uppercase tracking-[0.2em] font-bold block mb-1"
                      style={{ color: "#999" }}
                    >
                      {locale === "zh" ? "姓名" : "Name"}
                    </span>
                    {locale === "zh" ? "湯偉傑" : "Tang Weijie"}
                  </div>
                  <div className="border-b border-[#111]/10 pb-2">
                    <span
                      className="text-[10px] uppercase tracking-[0.2em] font-bold block mb-1"
                      style={{ color: "#999" }}
                    >
                      {locale === "zh" ? "所在地" : "Location"}
                    </span>
                    Shanghai
                  </div>
                  <div className="border-b border-[#111]/10 pb-2">
                    <span
                      className="text-[10px] uppercase tracking-[0.2em] font-bold block mb-1"
                      style={{ color: "#999" }}
                    >
                      {locale === "zh" ? "身份" : "Role"}
                    </span>
                    Full Stack Dev
                  </div>
                  <div>
                    <span
                      className="text-[10px] uppercase tracking-[0.2em] font-bold block mb-1"
                      style={{ color: "#999" }}
                    >
                      {locale === "zh" ? "学历" : "Education"}
                    </span>
                    {locale === "zh" ? "硕士 · SSPU" : "Master · SSPU"}
                  </div>
                </div>

                {/* Weather-style box */}
                <div
                  className="mt-6 p-4 border border-[#111]/10"
                  style={{ backgroundColor: "rgba(17,17,17,0.03)" }}
                >
                  <span
                    className="text-[9px] uppercase tracking-[0.3em] font-bold block mb-2"
                    style={{
                      color: "#8B0000",
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    {locale === "zh" ? "今日状态" : "Status"}
                  </span>
                  <p
                    className="text-xs"
                    style={{
                      fontFamily: "'Source Serif 4', serif",
                      color: "#555",
                    }}
                  >
                    {locale === "zh"
                      ? "积极寻找新的机会"
                      : "Actively seeking new opportunities"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack — classified ads style */}
        <section className="container mx-auto px-4 pb-16">
          <div className="max-w-5xl mx-auto">
            <div className="border-t-[2px] border-[#111] pt-6">
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="text-[9px] uppercase tracking-[0.3em] font-bold"
                  style={{
                    color: "#8B0000",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {t.techStack}
                </span>
                <div
                  className="h-px flex-1"
                  style={{ backgroundColor: "#111", opacity: 0.15 }}
                />
              </div>
              {/* Multi-column newspaper flow */}
              <div
                className="columns-2 md:columns-3 lg:columns-4 gap-6"
                style={{ fontFamily: "'Source Serif 4', 'Georgia', serif" }}
              >
                {techStack.map((tech, i) => (
                  <div
                    key={tech}
                    className="break-inside-avoid mb-3 cursor-default animate-fade-in-up"
                    style={{
                      animationDelay: `${800 + i * 40}ms`,
                      borderBottom: "1px solid rgba(17,17,17,0.08)",
                      paddingBottom: "0.5rem",
                    }}
                  >
                    <span className="text-sm" style={{ color: "#333" }}>
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer — newspaper colophon */}
      <footer className="border-t-[3px] border-[#111] py-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="border-t border-[#111] pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <p
                  className="text-[9px] uppercase tracking-[0.25em] font-bold"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#555",
                  }}
                >
                  &copy; {siteConfig.year} {siteConfig.author} &middot;{" "}
                  {locale === "zh" ? "版权所有" : "All Rights Reserved"}
                </p>
                <p
                  className="text-[8px] mt-1"
                  style={{
                    fontFamily: "'Source Serif 4', serif",
                    color: "#999",
                  }}
                >
                  {locale === "zh"
                    ? "本报由代码驱动出版"
                    : "Published with code"}
                </p>
              </div>
              <div className="flex items-center gap-6">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] uppercase tracking-[0.2em] font-bold transition-colors hover:text-[#8B0000]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#111",
                  }}
                >
                  Github
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-[10px] uppercase tracking-[0.2em] font-bold transition-colors hover:text-[#8B0000]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#111",
                  }}
                >
                  Email
                </a>
                <Github className="w-4 h-4" style={{ color: "#CCC" }} />
                <Mail className="w-4 h-4" style={{ color: "#CCC" }} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
