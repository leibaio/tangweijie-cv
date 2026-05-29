"use client";

import { siteConfig } from "@/config";
import { Locale, i18n } from "@/config/i18n";
import { getFeatures, techStack } from "@/data/home-shared";
import { ArrowRight, Github, Mail } from "lucide-react";
import Link from "next/link";

interface F1StyleProps {
  locale: Locale;
  header: React.ReactNode;
}

// Carbon fiber SVG pattern
const carbonFiber = `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h30v30H0zM30 30h30v30H30z' fill='%23111'/%3E%3Cpath d='M15 0h30v15H15zM0 15h15v30H0zM30 30h30v15H30zM15 45h15v15H15z' fill='%23161616'/%3E%3C/svg%3E")`;

// Checkered flag SVG pattern
const checkeredPattern = `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='10' height='10' fill='%23E10600'/%3E%3Crect x='10' y='10' width='10' height='10' fill='%23E10600'/%3E%3C/svg%3E")`;

export function F1Style({ locale, header }: F1StyleProps) {
  const t = i18n[locale];
  const features = getFeatures(locale);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ backgroundColor: "#0A0A0A" }}>
      {/* Carbon fiber background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: carbonFiber, opacity: 0.6 }}
      />

      {/* Speed lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-fade-in"
            style={{
              left: `${15 + i * 14}%`,
              top: 0,
              width: 1,
              height: "100%",
              background: `linear-gradient(180deg, transparent 0%, rgba(225,6,0,0.08) 30%, rgba(225,6,0,0.15) 50%, rgba(225,6,0,0.08) 70%, transparent 100%)`,
              animationDelay: `${i * 150}ms`,
            }}
          />
        ))}
      </div>

      {/* Diagonal red stripe top-right */}
      <div
        className="absolute pointer-events-none animate-fade-in"
        style={{
          top: 0,
          right: 0,
          width: 400,
          height: 6,
          background: "linear-gradient(90deg, transparent, #E10600)",
          transform: "rotate(-30deg) translate(80px, -10px)",
          transformOrigin: "top right",
        }}
      />

      {header}

      <main className="flex-1 relative z-10">
        {/* Hero — Pit board / racing number style */}
        <section className="container mx-auto px-4 pt-16 pb-20">
          <div className="max-w-4xl mx-auto">
            {/* Telemetry bar */}
            <div
              className="flex items-center gap-6 mb-8 px-4 py-2.5 animate-fade-in"
              style={{
                backgroundColor: "rgba(225,6,0,0.08)",
                border: "1px solid rgba(225,6,0,0.2)",
                fontFamily: "'Geist Mono', monospace",
                fontSize: 11,
                letterSpacing: "0.15em",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              <span>
                <span style={{ color: "#E10600" }}>SECTOR</span>{" "}
                <span style={{ color: "#fff" }}>01</span>
              </span>
              <span style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
              <span>
                <span style={{ color: "#E10600" }}>STATUS</span>{" "}
                <span style={{ color: "#22C55E" }}>ACTIVE</span>
              </span>
              <span style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
              <span>
                <span style={{ color: "#E10600" }}>CLASS</span>{" "}
                <span style={{ color: "#fff" }}>FULL STACK</span>
              </span>
            </div>

            {/* Name — racing number style */}
            <div className="relative mb-2 animate-fade-in-up animation-delay-100">
              {/* Giant number watermark */}
              <span
                className="absolute -left-2 -top-6 select-none pointer-events-none"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: "clamp(6rem, 15vw, 12rem)",
                  fontWeight: 900,
                  color: "rgba(225,6,0,0.06)",
                  lineHeight: 1,
                  letterSpacing: "-0.05em",
                }}
              >
                44
              </span>
              <h1
                className="relative uppercase leading-[0.95]"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
                  fontWeight: 900,
                  color: "#FFFFFF",
                  letterSpacing: "0.02em",
                }}
              >
                {t.hero.subtitle.replace("我是", "").replace("I'm ", "")}
              </h1>
            </div>

            {/* Red speed accent line */}
            <div
              className="mb-6 animate-fade-in-up animation-delay-200"
              style={{
                width: 120,
                height: 4,
                background: "linear-gradient(90deg, #E10600, #E10600 60%, transparent)",
              }}
            />

            {/* Role — telemetry pill */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6 animate-fade-in-up animation-delay-200">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-[0.25em] font-bold"
                style={{
                  backgroundColor: "#E10600",
                  color: "#FFFFFF",
                  fontFamily: "'Orbitron', sans-serif",
                }}
              >
                {t.hero.badge.split("·")[0].trim()}
              </span>
              <span
                className="text-xs uppercase tracking-[0.2em]"
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontFamily: "'Geist Mono', monospace",
                }}
              >
                {t.hero.badge.includes("·") ? t.hero.badge.split("·")[1].trim() : ""}
              </span>
            </div>

            {/* Description */}
            <p
              className="text-base mb-10 max-w-lg leading-relaxed animate-fade-in-up animation-delay-300"
              style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Geist Mono', monospace", fontSize: 14 }}
            >
              {t.hero.description}
            </p>

            {/* CTA — angular buttons */}
            <div className="flex items-center gap-4 animate-fade-in-up animation-delay-400">
              <Link
                href="/resume"
                className="group inline-flex items-center gap-2 px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-bold transition-all hover:gap-3"
                style={{
                  backgroundColor: "#E10600",
                  color: "#FFFFFF",
                  clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
                  fontFamily: "'Orbitron', sans-serif",
                }}
              >
                {t.hero.viewResume}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="mailto:leibaio@foxmail.com"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-bold transition-all"
                style={{
                  border: "1px solid rgba(225,6,0,0.4)",
                  color: "#E10600",
                  clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
                  fontFamily: "'Orbitron', sans-serif",
                }}
              >
                <Mail className="w-4 h-4" />
                {t.hero.contactMe}
              </Link>
            </div>
          </div>
        </section>

        {/* Features — DRS Zone / racing cards */}
        <section className="container mx-auto px-4 pb-20">
          <div className="max-w-4xl mx-auto">
            {/* Section header — DRS zone style */}
            <div className="flex items-center gap-3 mb-10">
              <div
                className="px-3 py-1 text-[10px] uppercase tracking-[0.3em] font-bold"
                style={{
                  backgroundColor: "#E10600",
                  color: "#fff",
                  fontFamily: "'Orbitron', sans-serif",
                }}
              >
                DRS
              </div>
              <div className="h-px flex-1" style={{ backgroundColor: "rgba(225,6,0,0.3)" }} />
              <span
                className="text-[10px] uppercase tracking-[0.4em]"
                style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Geist Mono', monospace" }}
              >
                NAVIGATION
              </span>
              <div className="h-px flex-1" style={{ backgroundColor: "rgba(225,6,0,0.3)" }} />
            </div>

            <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(225,6,0,0.15)" }}>
              {features.map((feature, index) => {
                const timings = ["1:24.319", "1:18.723", "1:31.056"];
                return (
                  <Link
                    key={feature.href}
                    href={feature.href}
                    className="group relative block p-8 transition-all duration-300 animate-fade-in-up"
                    style={{
                      backgroundColor: "#111",
                      animationDelay: `${500 + index * 100}ms`,
                    }}
                  >
                    {/* Position number */}
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className="text-3xl font-black"
                        style={{
                          fontFamily: "'Orbitron', sans-serif",
                          color: index === 0 ? "#E10600" : "rgba(255,255,255,0.12)",
                        }}
                      >
                        P{index + 1}
                      </span>
                      {/* Timing */}
                      <span
                        className="text-xs tabular-nums"
                        style={{
                          fontFamily: "'Geist Mono', monospace",
                          color: "rgba(255,255,255,0.25)",
                        }}
                      >
                        {timings[index]}
                      </span>
                    </div>

                    <h3
                      className="text-base font-bold uppercase tracking-wider mb-3"
                      style={{
                        color: "#FFFFFF",
                        fontFamily: "'Orbitron', sans-serif",
                        fontSize: 14,
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Geist Mono', monospace", fontSize: 12 }}
                    >
                      {feature.description}
                    </p>

                    {/* Hover indicator — speed bar */}
                    <div
                      className="h-0.5 w-0 group-hover:w-full transition-all duration-500"
                      style={{ backgroundColor: "#E10600" }}
                    />

                    <div
                      className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] font-bold mt-3 opacity-0 group-hover:opacity-100 transition-all"
                      style={{ color: "#E10600", fontFamily: "'Orbitron', sans-serif" }}
                    >
                      ENTER <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tech Stack — Timing Tower */}
        <section className="container mx-auto px-4 pb-20">
          <div className="max-w-4xl mx-auto">
            {/* Section header */}
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-2 h-2"
                style={{ backgroundColor: "#E10600" }}
              />
              <p
                className="text-[10px] uppercase tracking-[0.4em] font-bold"
                style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Orbitron', sans-serif" }}
              >
                {t.techStack}
              </p>
              <div className="h-px flex-1" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />
            </div>

            {/* Timing tower layout */}
            <div
              className="border"
              style={{
                borderColor: "rgba(225,6,0,0.2)",
                fontFamily: "'Geist Mono', monospace",
              }}
            >
              {/* Header row */}
              <div
                className="flex items-center px-4 py-2 text-[10px] uppercase tracking-[0.2em]"
                style={{
                  backgroundColor: "rgba(225,6,0,0.1)",
                  color: "rgba(255,255,255,0.4)",
                  borderBottom: "1px solid rgba(225,6,0,0.15)",
                }}
              >
                <span className="w-8">POS</span>
                <span className="flex-1">TECHNOLOGY</span>
                <span className="w-16 text-right">STATUS</span>
              </div>
              {/* Rows */}
              {techStack.map((tech, i) => (
                <div
                  key={tech}
                  className="flex items-center px-4 py-2.5 transition-colors hover:bg-white/[0.03] animate-fade-in"
                  style={{
                    borderBottom: i < techStack.length - 1 ? "1px solid rgba(255,255,255,0.04)" : undefined,
                    animationDelay: `${700 + i * 50}ms`,
                  }}
                >
                  <span
                    className="w-8 text-xs font-bold"
                    style={{
                      color: i < 3 ? "#E10600" : "rgba(255,255,255,0.15)",
                      fontFamily: "'Orbitron', sans-serif",
                      fontSize: 11,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="flex-1 text-sm"
                    style={{ color: "rgba(255,255,255,0.7)", fontSize: 13 }}
                  >
                    {tech}
                  </span>
                  <span
                    className="w-16 text-right text-[10px] uppercase tracking-wider"
                    style={{ color: "#22C55E" }}
                  >
                    ACTIVE
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Checkered flag divider */}
        <div
          className="h-2"
          style={{
            backgroundImage: checkeredPattern,
            backgroundSize: "20px 20px",
            opacity: 0.3,
          }}
        />
      </main>

      {/* Footer — pit lane style */}
      <footer
        className="py-8 relative z-10"
        style={{ borderTop: "1px solid rgba(225,6,0,0.2)" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div
                className="w-6 h-1"
                style={{ backgroundColor: "#E10600" }}
              />
              <p
                className="text-[10px] uppercase tracking-[0.25em]"
                style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Geist Mono', monospace" }}
              >
                &copy; {siteConfig.year} {siteConfig.author}
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
