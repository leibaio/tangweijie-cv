"use client";

import { siteConfig } from "@/config";
import { Locale, i18n } from "@/config/i18n";
import { getFeatures, techStack } from "@/data/home-shared";
import { ArrowRight, Github, Mail } from "lucide-react";
import Link from "next/link";

interface BrutalistStyleProps {
  locale: Locale;
  header: React.ReactNode;
}

export function BrutalistStyle({ locale, header }: BrutalistStyleProps) {
  const t = i18n[locale];
  const features = getFeatures(locale);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ backgroundColor: "#FFF", cursor: "crosshair" }}>
      {/* Background decorations — raw, unapologetic */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2" style={{ backgroundColor: "#000" }} />
        <div
          className="absolute hidden md:block"
          style={{
            width: 300, height: 300,
            border: "4px solid #000",
            top: -60, right: -60,
            transform: "rotate(12deg)",
            opacity: 0.08,
          }}
        />
        <div
          className="absolute hidden md:block"
          style={{
            width: 150, height: 150,
            backgroundColor: "#CCFF00",
            bottom: 200, left: -40,
            transform: "rotate(-15deg)",
            opacity: 0.15,
          }}
        />
        <div
          className="absolute hidden lg:block"
          style={{
            width: "40%", height: 3,
            backgroundColor: "#000",
            top: "45%", right: 0,
            opacity: 0.06,
          }}
        />
      </div>

      {header}

      <main className="flex-1 relative z-10">
        {/* Hero */}
        <section className="container mx-auto px-4 pt-16 pb-20">
          <div className="max-w-4xl mx-auto">
            {/* Marquee-like tagline strip */}
            <div className="overflow-hidden border-y-[3px] border-black py-3 mb-10 animate-fade-in">
              <div className="flex animate-marquee whitespace-nowrap">
                {[...Array(6)].map((_, i) => (
                  <span key={i} className="mx-6 text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "#000" }}>
                    FULL STACK DEVELOPER &mdash; SHANGHAI &mdash; AVAILABLE FOR HIRE &mdash;&nbsp;
                  </span>
                ))}
              </div>
            </div>

            {/* Big title — intentionally raw */}
            <h1
              className="uppercase leading-[0.85] mb-8 animate-fade-in-up animation-delay-100"
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "clamp(3.5rem, 12vw, 10rem)",
                fontWeight: 900,
                color: "#000",
                letterSpacing: "-0.04em",
                WebkitTextStroke: "2px #000",
              }}
            >
              {t.hero.subtitle.replace("我是", "").replace("I'm ", "")}
            </h1>

            {/* Role — harsh highlight */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8 animate-fade-in-up animation-delay-200">
              <span
                className="inline-block px-4 py-2 text-sm font-black uppercase tracking-[0.15em]"
                style={{ backgroundColor: "#CCFF00", color: "#000", transform: "rotate(-1deg)" }}
              >
                {t.hero.badge.split("·")[0].trim()}
              </span>
              <span className="text-sm font-bold" style={{ color: "#666" }}>
                {t.hero.badge.includes("·") ? t.hero.badge.split("·")[1].trim() : ""}
              </span>
            </div>

            <p
              className="text-lg mb-10 max-w-lg leading-relaxed animate-fade-in-up animation-delay-300"
              style={{ color: "#333", fontFamily: "system-ui, sans-serif" }}
            >
              {t.hero.description}
            </p>

            {/* CTA — brutal buttons */}
            <div className="flex items-center gap-4 animate-fade-in-up animation-delay-400">
              <Link
                href="/resume"
                className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-black uppercase tracking-[0.15em] transition-all hover:gap-3 hover:translate-y-[-2px]"
                style={{
                  backgroundColor: "#000",
                  color: "#CCFF00",
                  border: "3px solid #000",
                  boxShadow: "6px 6px 0px #CCFF00",
                }}
              >
                {t.hero.viewResume}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="mailto:leibaio@foxmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-black uppercase tracking-[0.15em] transition-all hover:translate-y-[-2px]"
                style={{
                  backgroundColor: "#FFF",
                  color: "#000",
                  border: "3px solid #000",
                  boxShadow: "6px 6px 0px #000",
                }}
              >
                <Mail className="w-4 h-4" />
                {t.hero.contactMe}
              </Link>
            </div>
          </div>
        </section>

        {/* Features — brutal cards */}
        <section className="container mx-auto px-4 pb-20">
          <div className="max-w-4xl mx-auto">
            {/* Section label */}
            <div className="flex items-center gap-4 mb-10">
              <div className="h-[3px] w-12" style={{ backgroundColor: "#000" }} />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]" style={{ color: "#000" }}>
                Navigate
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-0">
              {features.map((feature, index) => {
                const accents = ["#CCFF00", "#FF3366", "#00CCFF"];
                return (
                  <Link
                    key={feature.href}
                    href={feature.href}
                    className="group relative block p-8 transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px] animate-fade-in-up cursor-crosshair"
                    style={{
                      backgroundColor: "#FFF",
                      border: "3px solid #000",
                      borderRight: index < 2 ? "none" : "3px solid #000",
                      animationDelay: `${500 + index * 100}ms`,
                    }}
                  >
                    <span
                      className="text-6xl font-black block mb-4 leading-none"
                      style={{ color: accents[index], fontFamily: "system-ui" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className="text-lg font-black uppercase tracking-wider mb-3"
                      style={{ color: "#000" }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "#555" }}>
                      {feature.description}
                    </p>
                    <div
                      className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all"
                      style={{ color: accents[index] }}
                    >
                      GO <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tech Stack — raw tags */}
        <section className="container mx-auto px-4 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[3px] w-12" style={{ backgroundColor: "#000" }} />
              <p className="text-[10px] font-black uppercase tracking-[0.4em]" style={{ color: "#000" }}>
                {t.techStack}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, i) => (
                <span
                  key={tech}
                  className="px-5 py-2.5 text-sm font-black uppercase tracking-wider cursor-crosshair transition-all hover:translate-y-[-2px] animate-fade-in-up"
                  style={{
                    backgroundColor: i % 2 === 0 ? "#000" : "#FFF",
                    color: i % 2 === 0 ? "#CCFF00" : "#000",
                    border: "2px solid #000",
                    animationDelay: `${700 + i * 40}ms`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-[4px] border-black py-8 relative z-10" style={{ backgroundColor: "#000" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs font-black uppercase tracking-[0.2em]" style={{ color: "#CCFF00" }}>
              &copy; {siteConfig.year} {siteConfig.author}
            </p>
            <div className="flex items-center gap-6">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:scale-110"
                style={{ color: "#CCFF00" }}
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors hover:scale-110"
                style={{ color: "#CCFF00" }}
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
