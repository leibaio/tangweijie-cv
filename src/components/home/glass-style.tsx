"use client";

import { siteConfig } from "@/config";
import { Locale, i18n } from "@/config/i18n";
import { getFeatures, techStack } from "@/data/home-shared";
import { ArrowRight, Github, Mail } from "lucide-react";
import Link from "next/link";

interface GlassStyleProps {
  locale: Locale;
  header: React.ReactNode;
}

export function GlassStyle({ locale, header }: GlassStyleProps) {
  const t = i18n[locale];
  const features = getFeatures(locale);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ backgroundColor: "#0C0E1A" }}>
      {/* Gradient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Purple-blue blob */}
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(99,102,241,0.4), rgba(139,92,246,0.2), transparent 70%)",
            top: "-15%",
            left: "-10%",
          }}
        />
        {/* Cyan-teal blob */}
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: 500,
            height: 500,
            background: "radial-gradient(circle, rgba(6,182,212,0.35), rgba(20,184,166,0.15), transparent 70%)",
            top: "30%",
            right: "-10%",
          }}
        />
        {/* Pink-rose blob */}
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: 400,
            height: 400,
            background: "radial-gradient(circle, rgba(236,72,153,0.3), rgba(244,63,94,0.15), transparent 70%)",
            bottom: "10%",
            left: "20%",
          }}
        />
        {/* Small amber accent */}
        <div
          className="absolute rounded-full blur-2xl"
          style={{
            width: 200,
            height: 200,
            background: "radial-gradient(circle, rgba(245,158,11,0.25), transparent 70%)",
            bottom: "30%",
            right: "25%",
          }}
        />
      </div>

      {/* Mesh grid for depth */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {header}

      <main className="flex-1 relative z-10">
        {/* Hero */}
        <section className="container mx-auto px-4 pt-20 pb-24">
          <div className="max-w-3xl mx-auto text-center">
            {/* Status badge — glass pill */}
            <div
              className="inline-flex items-center gap-2 px-5 py-2 mb-10 animate-fade-in"
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 999,
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span
                className="text-sm"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                {t.hero.badge}
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-fade-in-up animation-delay-100"
              style={{
                color: "#fff",
                textShadow: "0 0 60px rgba(99,102,241,0.3)",
              }}
            >
              {t.hero.subtitle}
            </h1>

            {/* Description */}
            <p
              className="text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              {t.hero.description}
            </p>

            {/* CTA — glass buttons */}
            <div className="flex items-center justify-center gap-4 flex-wrap animate-fade-in-up animation-delay-300">
              <Link
                href="/resume"
                className="group inline-flex items-center gap-2 px-7 py-3.5 font-medium transition-all duration-300 hover:gap-3 hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, rgba(99,102,241,0.8), rgba(139,92,246,0.8))",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 12,
                  color: "#fff",
                  boxShadow: "0 4px 24px rgba(99,102,241,0.3)",
                }}
              >
                {t.hero.viewResume}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="mailto:leibaio@foxmail.com"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-medium transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 12,
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                <Mail className="w-4 h-4" />
                {t.hero.contactMe}
              </Link>
            </div>
          </div>
        </section>

        {/* Features — frosted glass cards */}
        <section className="container mx-auto px-4 pb-24">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-5">
              {features.map((feature, index) => {
                const glows = [
                  "rgba(99,102,241,0.15)",
                  "rgba(6,182,212,0.15)",
                  "rgba(236,72,153,0.15)",
                ];
                const accents = [
                  "rgba(99,102,241,0.6)",
                  "rgba(6,182,212,0.6)",
                  "rgba(236,72,153,0.6)",
                ];
                return (
                  <Link
                    key={feature.href}
                    href={feature.href}
                    className="group relative block p-7 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      backdropFilter: "blur(24px)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 16,
                      boxShadow: `0 0 40px ${glows[index]}`,
                      animationDelay: `${400 + index * 100}ms`,
                    }}
                  >
                    {/* Glow accent on hover */}
                    <div
                      className="absolute inset-0 rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at 30% 0%, ${accents[index]}, transparent 60%)`,
                      }}
                    />
                    <div className="relative z-10">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                        style={{
                          background: "rgba(255,255,255,0.08)",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        <feature.icon className="w-5 h-5" style={{ color: accents[index] }} />
                      </div>
                      <h3
                        className="text-lg font-semibold mb-2 transition-colors"
                        style={{ color: "#fff" }}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed mb-4"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                      >
                        {feature.description}
                      </p>
                      <div
                        className="inline-flex items-center gap-1 text-sm opacity-0 group-hover:opacity-100 transition-all"
                        style={{ color: accents[index] }}
                      >
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tech Stack — glass chips */}
        <section className="container mx-auto px-4 pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <p
              className="text-sm mb-8"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              {t.techStack}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, i) => (
                <span
                  key={tech}
                  className="px-5 py-2.5 text-sm cursor-default transition-all duration-300 hover:-translate-y-0.5 animate-fade-in-up"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 999,
                    color: "rgba(255,255,255,0.6)",
                    animationDelay: `${600 + i * 40}ms`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer — glass */}
      <footer
        className="py-8 relative z-10"
        style={{
          background: "rgba(255,255,255,0.03)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
              &copy; {siteConfig.year} {siteConfig.author}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.3)" }}
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
