"use client";

import { siteConfig } from "@/config";
import { Locale, i18n } from "@/config/i18n";
import { getFeatures, techStack } from "@/data/home-shared";
import { ArrowRight, Github, Mail } from "lucide-react";
import Link from "next/link";

interface BauhausStyleProps {
  locale: Locale;
  header: React.ReactNode;
}

export function BauhausStyle({ locale, header }: BauhausStyleProps) {
  const t = i18n[locale];
  const features = getFeatures(locale);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ backgroundColor: "#F5F2EB" }}>
      {/* Geometric background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large red circle */}
        <div
          className="absolute rounded-full animate-fade-in"
          style={{
            width: 320,
            height: 320,
            backgroundColor: "#D0342D",
            top: -60,
            right: -80,
            opacity: 0.9,
          }}
        />
        {/* Yellow rectangle */}
        <div
          className="absolute animate-fade-in animation-delay-200"
          style={{
            width: 180,
            height: 260,
            backgroundColor: "#F2C12E",
            bottom: 120,
            left: -40,
            transform: "rotate(-8deg)",
            opacity: 0.85,
          }}
        />
        {/* Blue triangle */}
        <svg
          className="absolute animate-fade-in animation-delay-300"
          style={{ width: 200, height: 200, bottom: 40, right: 60, opacity: 0.8 }}
          viewBox="0 0 200 200"
        >
          <polygon points="100,10 190,190 10,190" fill="#2D5DA1" />
        </svg>
        {/* Small black circle */}
        <div
          className="absolute rounded-full animate-fade-in animation-delay-400"
          style={{
            width: 80,
            height: 80,
            backgroundColor: "#1A1A1A",
            top: "45%",
            right: "15%",
            opacity: 0.7,
          }}
        />
        {/* Thin horizontal line */}
        <div
          className="absolute animate-fade-in animation-delay-500"
          style={{
            width: "60%",
            height: 3,
            backgroundColor: "#1A1A1A",
            top: "38%",
            left: 0,
            opacity: 0.15,
          }}
        />
        {/* Small red square */}
        <div
          className="absolute animate-fade-in animation-delay-600"
          style={{
            width: 40,
            height: 40,
            backgroundColor: "#D0342D",
            top: "65%",
            left: "20%",
            opacity: 0.6,
          }}
        />
      </div>

      {header}

      <main className="flex-1 relative z-10">
        {/* Hero */}
        <section className="container mx-auto px-4 pt-16 pb-20">
          <div className="max-w-4xl mx-auto">
            {/* Geometric divider */}
            <div className="flex items-center gap-3 mb-8 animate-fade-in">
              <div className="w-8 h-8 rounded-full" style={{ backgroundColor: "#1A1A1A" }} />
              <div className="w-8 h-8" style={{ backgroundColor: "#D0342D" }} />
              <svg className="w-8 h-8" viewBox="0 0 32 32">
                <polygon points="16,2 30,30 2,30" fill="#2D5DA1" />
              </svg>
            </div>

            {/* Name — bold, geometric, uppercase */}
            <h1
              className="uppercase leading-[0.9] mb-6 animate-fade-in-up animation-delay-100"
              style={{
                fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
                fontSize: "clamp(3rem, 9vw, 7.5rem)",
                fontWeight: 900,
                color: "#1A1A1A",
                letterSpacing: "-0.03em",
              }}
            >
              {t.hero.subtitle.replace("我是", "").replace("I'm ", "")}
            </h1>

            {/* Role — with color accent */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6 animate-fade-in-up animation-delay-200">
              <span
                className="inline-block px-4 py-2 text-sm uppercase tracking-[0.2em] font-bold"
                style={{
                  backgroundColor: "#D0342D",
                  color: "#F5F2EB",
                }}
              >
                {t.hero.badge.split("·")[0].trim()}
              </span>
              <span
                className="text-sm uppercase tracking-[0.15em] font-medium"
                style={{ color: "#1A1A1A" }}
              >
                {t.hero.badge.includes("·") ? t.hero.badge.split("·")[1].trim() : ""}
              </span>
            </div>

            {/* Description */}
            <p
              className="text-lg mb-10 max-w-lg leading-relaxed animate-fade-in-up animation-delay-300"
              style={{ color: "#555", fontFamily: "'DM Sans', sans-serif" }}
            >
              {t.hero.description}
            </p>

            {/* CTA */}
            <div className="flex items-center gap-4 animate-fade-in-up animation-delay-400">
              <Link
                href="/resume"
                className="group inline-flex items-center gap-2 px-8 py-4 text-sm uppercase tracking-[0.2em] font-bold transition-all hover:gap-3"
                style={{
                  backgroundColor: "#1A1A1A",
                  color: "#F5F2EB",
                  borderRadius: 0,
                }}
              >
                {t.hero.viewResume}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="mailto:leibaio@foxmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm uppercase tracking-[0.2em] font-bold transition-all"
                style={{
                  border: "3px solid #1A1A1A",
                  color: "#1A1A1A",
                  borderRadius: 0,
                }}
              >
                <Mail className="w-4 h-4" />
                {t.hero.contactMe}
              </Link>
            </div>
          </div>
        </section>

        {/* Features — Bauhaus geometric cards */}
        <section className="container mx-auto px-4 pb-20">
          <div className="max-w-4xl mx-auto">
            {/* Section label */}
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px flex-1" style={{ backgroundColor: "#1A1A1A" }} />
              <span
                className="text-[10px] uppercase tracking-[0.4em] font-bold"
                style={{ color: "#1A1A1A" }}
              >
                Sections
              </span>
              <div className="h-px flex-1" style={{ backgroundColor: "#1A1A1A" }} />
            </div>

            <div className="grid md:grid-cols-3 gap-0">
              {features.map((feature, index) => {
                const colors = ["#D0342D", "#2D5DA1", "#F2C12E"];
                const bgColors = ["#1A1A1A", "#D0342D", "#2D5DA1"];
                return (
                  <Link
                    key={feature.href}
                    href={feature.href}
                    className="group relative block p-8 transition-all duration-300 animate-fade-in-up"
                    style={{
                      backgroundColor: bgColors[index],
                      borderRight: index < 2 ? "4px solid #F5F2EB" : undefined,
                      animationDelay: `${500 + index * 100}ms`,
                    }}
                  >
                    {/* Geometric accent */}
                    <div className="mb-6">
                      {index === 0 && (
                        <div
                          className="w-12 h-12 rounded-full transition-transform group-hover:scale-110"
                          style={{ backgroundColor: colors[index] }}
                        />
                      )}
                      {index === 1 && (
                        <svg className="w-12 h-12 transition-transform group-hover:scale-110" viewBox="0 0 48 48">
                          <polygon points="24,4 44,44 4,44" fill={colors[index]} />
                        </svg>
                      )}
                      {index === 2 && (
                        <div
                          className="w-12 h-12 transition-transform group-hover:scale-110"
                          style={{ backgroundColor: colors[index] }}
                        />
                      )}
                    </div>
                    <span
                      className="text-4xl font-black block mb-4"
                      style={{ color: colors[index], fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className="text-xl font-bold uppercase tracking-wider mb-3"
                      style={{ color: "#F5F2EB", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: "rgba(245,242,235,0.6)" }}
                    >
                      {feature.description}
                    </p>
                    <div
                      className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] font-bold opacity-0 group-hover:opacity-100 transition-all"
                      style={{ color: colors[index] }}
                    >
                      Go <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tech Stack — geometric tags */}
        <section className="container mx-auto px-4 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: "#D0342D" }} />
              <p
                className="text-[10px] uppercase tracking-[0.4em] font-bold"
                style={{ color: "#1A1A1A" }}
              >
                {t.techStack}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, i) => (
                <span
                  key={tech}
                  className="px-5 py-2.5 text-sm font-bold uppercase tracking-wider cursor-default transition-all hover:scale-105 animate-fade-in-up"
                  style={{
                    backgroundColor: i % 3 === 0 ? "#1A1A1A" : i % 3 === 1 ? "#D0342D" : "#2D5DA1",
                    color: "#F5F2EB",
                    borderRadius: 0,
                    animationDelay: `${700 + i * 50}ms`,
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
      <footer
        className="py-8 relative z-10"
        style={{ borderTop: "4px solid #1A1A1A" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: "#D0342D" }} />
              <div className="w-4 h-4" style={{ backgroundColor: "#2D5DA1" }} />
              <div className="w-4 h-4" style={{ backgroundColor: "#F2C12E" }} />
              <p
                className="text-xs uppercase tracking-[0.2em] font-bold ml-2"
                style={{ color: "#1A1A1A" }}
              >
                &copy; {siteConfig.year} {siteConfig.author}
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: "#1A1A1A" }}
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors"
                style={{ color: "#1A1A1A" }}
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
