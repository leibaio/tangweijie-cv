"use client";

import { siteConfig } from "@/config";
import { Locale, i18n } from "@/config/i18n";
import { getFeatures, techStack } from "@/data/home-shared";
import { ArrowRight, Github, Mail } from "lucide-react";
import Link from "next/link";

interface JapaneseStyleProps {
  locale: Locale;
  header: React.ReactNode;
}

export function JapaneseStyle({ locale, header }: JapaneseStyleProps) {
  const t = i18n[locale];
  const features = getFeatures(locale);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ backgroundColor: "#F8F6F0" }}>
      {/* Subtle ink wash texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E")`,
          opacity: 0.8,
        }}
      />

      {/* Vertical decorative text — right side */}
      <div
        className="absolute right-8 top-24 hidden lg:block select-none animate-fade-in animation-delay-600"
        style={{
          writingMode: "vertical-rl",
          fontFamily: "'Noto Serif SC', serif",
          fontSize: "0.7rem",
          letterSpacing: "0.6em",
          color: "rgba(26,26,26,0.06)",
          lineHeight: 2,
        }}
      >
        全栈开发工程师・上海
      </div>

      {/* Vertical decorative text — left side */}
      <div
        className="absolute left-8 bottom-32 hidden lg:block select-none animate-fade-in animation-delay-800"
        style={{
          writingMode: "vertical-rl",
          fontFamily: "'Noto Serif SC', serif",
          fontSize: "0.65rem",
          letterSpacing: "0.5em",
          color: "rgba(181,55,51,0.08)",
          lineHeight: 2,
        }}
      >
        静かなる力
      </div>

      {/* Thin horizontal rule — ink brush inspired */}
      <div
        className="absolute hidden md:block animate-fade-in animation-delay-500"
        style={{
          width: "30%",
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(26,26,26,0.08) 30%, rgba(26,26,26,0.12) 50%, rgba(26,26,26,0.08) 70%, transparent)",
          top: "40%",
          left: "10%",
        }}
      />

      {header}

      <main className="flex-1 relative z-10">
        {/* Hero — vast emptiness, centered presence */}
        <section className="container mx-auto px-4" style={{ minHeight: "75vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div className="text-center max-w-2xl mx-auto">
            {/* Enso-inspired circle */}
            <div
              className="mx-auto mb-12 animate-fade-in"
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                border: "1.5px solid rgba(181,55,51,0.3)",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -2,
                  right: -2,
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "#B53733",
                  opacity: 0.6,
                }}
              />
            </div>

            {/* Name — light weight, spacious */}
            <h1
              className="animate-fade-in-up animation-delay-100"
              style={{
                fontFamily: "'Noto Serif SC', serif",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 400,
                color: "#1A1A1A",
                letterSpacing: "0.12em",
                lineHeight: 1.3,
              }}
            >
              {locale === "zh" ? "湯偉傑" : "Tang Weijie"}
            </h1>

            {/* Accent line */}
            <div
              className="mx-auto my-8 animate-fade-in animation-delay-200"
              style={{ width: 40, height: 1, backgroundColor: "#B53733", opacity: 0.6 }}
            />

            {/* Subtitle */}
            <p
              className="animate-fade-in-up animation-delay-300"
              style={{
                fontFamily: "'Noto Serif SC', serif",
                fontSize: "0.85rem",
                letterSpacing: "0.25em",
                color: "rgba(26,26,26,0.45)",
                lineHeight: 2,
              }}
            >
              {t.hero.badge}
            </p>

            <p
              className="mt-4 mx-auto leading-relaxed animate-fade-in-up animation-delay-400"
              style={{
                fontFamily: "'Noto Serif SC', serif",
                fontSize: "0.9rem",
                color: "rgba(26,26,26,0.5)",
                maxWidth: 400,
                lineHeight: 2,
              }}
            >
              {t.hero.description}
            </p>

            {/* CTA — minimal, text-based */}
            <div className="flex items-center justify-center gap-8 mt-12 animate-fade-in-up animation-delay-500">
              <Link
                href="/resume"
                className="group inline-flex items-center gap-2 transition-all duration-500"
                style={{
                  fontFamily: "'Noto Serif SC', serif",
                  fontSize: "0.8rem",
                  letterSpacing: "0.15em",
                  color: "#1A1A1A",
                  borderBottom: "1px solid rgba(26,26,26,0.2)",
                  paddingBottom: 4,
                }}
              >
                {t.hero.viewResume}
                <ArrowRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
              <Link
                href="mailto:leibaio@foxmail.com"
                className="inline-flex items-center gap-2 transition-all duration-500"
                style={{
                  fontFamily: "'Noto Serif SC', serif",
                  fontSize: "0.8rem",
                  letterSpacing: "0.15em",
                  color: "rgba(26,26,26,0.4)",
                }}
              >
                <Mail className="w-3.5 h-3.5 opacity-40" />
                {t.hero.contactMe}
              </Link>
            </div>
          </div>
        </section>

        {/* Features — horizontal list, like a scroll unrolling */}
        <section className="container mx-auto px-4 pb-24">
          <div className="max-w-3xl mx-auto">
            {/* Section divider — ink dot */}
            <div className="flex items-center gap-4 mb-12">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#B53733", opacity: 0.4 }} />
              <div className="h-px flex-1" style={{ backgroundColor: "rgba(26,26,26,0.08)" }} />
            </div>

            <div className="flex flex-col gap-0">
              {features.map((feature, index) => (
                <Link
                  key={feature.href}
                  href={feature.href}
                  className="group flex items-start gap-8 py-8 transition-all duration-500 hover:pl-4 animate-fade-in-up"
                  style={{
                    borderBottom: "1px solid rgba(26,26,26,0.06)",
                    animationDelay: `${600 + index * 150}ms`,
                  }}
                >
                  {/* Number — thin serif */}
                  <span
                    className="shrink-0 mt-1"
                    style={{
                      fontFamily: "'Noto Serif SC', serif",
                      fontSize: "0.75rem",
                      letterSpacing: "0.1em",
                      color: "rgba(26,26,26,0.15)",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h3
                      className="mb-2 transition-colors duration-500 group-hover:text-[#B53733]"
                      style={{
                        fontFamily: "'Noto Serif SC', serif",
                        fontSize: "1.05rem",
                        fontWeight: 600,
                        color: "#1A1A1A",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Noto Serif SC', serif",
                        fontSize: "0.8rem",
                        color: "rgba(26,26,26,0.4)",
                        lineHeight: 1.9,
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                  <ArrowRight
                    className="w-4 h-4 shrink-0 mt-1 opacity-0 group-hover:opacity-30 transition-all duration-500 group-hover:translate-x-1"
                    style={{ color: "#1A1A1A" }}
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack — inline flow, like furigana annotations */}
        <section className="container mx-auto px-4 pb-24">
          <div className="max-w-3xl mx-auto">
            <p
              className="text-center mb-8"
              style={{
                fontFamily: "'Noto Serif SC', serif",
                fontSize: "0.7rem",
                letterSpacing: "0.3em",
                color: "rgba(26,26,26,0.2)",
              }}
            >
              {t.techStack}
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              {techStack.map((tech, i) => (
                <span
                  key={tech}
                  className="cursor-default transition-colors duration-500 hover:text-[#B53733] animate-fade-in-up"
                  style={{
                    fontFamily: "'Noto Serif SC', serif",
                    fontSize: "0.8rem",
                    color: "rgba(26,26,26,0.45)",
                    letterSpacing: "0.05em",
                    animationDelay: `${800 + i * 50}ms`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer — a closing seal */}
      <footer className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div
              className="mx-auto mb-6"
              style={{ width: 20, height: 1, backgroundColor: "rgba(26,26,26,0.1)" }}
            />
            <div className="flex items-center justify-center gap-6 mb-4">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-500"
                style={{ color: "rgba(26,26,26,0.25)" }}
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors duration-500"
                style={{ color: "rgba(26,26,26,0.25)" }}
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p
              style={{
                fontFamily: "'Noto Serif SC', serif",
                fontSize: "0.65rem",
                color: "rgba(26,26,26,0.2)",
                letterSpacing: "0.15em",
              }}
            >
              &copy; {siteConfig.year} {siteConfig.author}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
