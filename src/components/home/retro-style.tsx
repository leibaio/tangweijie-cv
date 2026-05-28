"use client";

import { siteConfig } from "@/config";
import { Locale, i18n } from "@/config/i18n";
import { getFeatures, techStack } from "@/data/home-shared";
import { ArrowRight, Github, Mail } from "lucide-react";
import Link from "next/link";

interface RetroStyleProps {
  locale: Locale;
  header: React.ReactNode;
}

export function RetroStyle({ locale, header }: RetroStyleProps) {
  const t = i18n[locale];
  const features = getFeatures(locale);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ backgroundColor: "#0A0A1A" }}>
      {/* CRT scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-50"
        style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
          mixBlendMode: "multiply",
        }}
      />
      {/* CRT vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-40"
        style={{
          background: "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* Floating pixel stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { top: "10%", left: "15%", delay: "0s", size: 4 },
          { top: "25%", left: "80%", delay: "0.5s", size: 3 },
          { top: "50%", left: "10%", delay: "1s", size: 4 },
          { top: "70%", left: "90%", delay: "1.5s", size: 3 },
          { top: "15%", left: "60%", delay: "0.3s", size: 5 },
          { top: "80%", left: "30%", delay: "0.8s", size: 4 },
          { top: "40%", left: "45%", delay: "1.2s", size: 3 },
          { top: "60%", left: "75%", delay: "0.6s", size: 4 },
        ].map((star, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              backgroundColor: i % 3 === 0 ? "#FF00FF" : i % 3 === 1 ? "#00FFFF" : "#FFFF00",
              animationDelay: star.delay,
              boxShadow: `0 0 ${star.size * 2}px ${i % 3 === 0 ? "#FF00FF" : i % 3 === 1 ? "#00FFFF" : "#FFFF00"}`,
            }}
          />
        ))}
      </div>

      {header}

      <main className="flex-1 relative z-10">
        {/* Hero */}
        <section className="container mx-auto px-4 pt-16 pb-20">
          <div className="max-w-3xl mx-auto text-center">
            {/* Pixel art divider */}
            <div className="flex items-center justify-center gap-2 mb-8 animate-fade-in">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: i === 3 ? 12 : 6,
                    height: i === 3 ? 12 : 6,
                    backgroundColor: i === 3 ? "#FF00FF" : i % 2 === 0 ? "#00FFFF" : "#FFFF00",
                    boxShadow: `0 0 8px ${i === 3 ? "#FF00FF" : i % 2 === 0 ? "#00FFFF" : "#FFFF00"}`,
                  }}
                />
              ))}
            </div>

            {/* Blinking "PRESS START" style badge */}
            <div
              className="inline-block px-6 py-2 mb-8 animate-fade-in"
              style={{
                border: "2px solid #FF00FF",
                boxShadow: "0 0 15px rgba(255,0,255,0.3), inset 0 0 15px rgba(255,0,255,0.1)",
              }}
            >
              <span
                className="text-xs uppercase tracking-[0.3em] animate-pulse"
                style={{
                  fontFamily: "'Press Start 2P', monospace",
                  color: "#FF00FF",
                  fontSize: "0.65rem",
                }}
              >
                {t.hero.badge}
              </span>
            </div>

            {/* Main title — pixel font */}
            <h1
              className="mb-6 animate-fade-in-up animation-delay-100"
              style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: "clamp(1.5rem, 5vw, 3rem)",
                lineHeight: 1.6,
                color: "#00FFFF",
                textShadow: "0 0 20px rgba(0,255,255,0.5), 0 0 40px rgba(0,255,255,0.2)",
              }}
            >
              {t.hero.subtitle.replace("我是", "").replace("I'm ", "")}
            </h1>

            {/* Description */}
            <p
              className="mb-10 max-w-md mx-auto leading-relaxed animate-fade-in-up animation-delay-200"
              style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: "0.65rem",
                lineHeight: 2,
                color: "#AAAACC",
              }}
            >
              {t.hero.description}
            </p>

            {/* CTA — pixel button style */}
            <div className="flex items-center justify-center gap-4 flex-wrap animate-fade-in-up animation-delay-300">
              <Link
                href="/resume"
                className="group inline-flex items-center gap-2 px-6 py-3 transition-all hover:scale-105"
                style={{
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: "0.6rem",
                  backgroundColor: "#FF00FF",
                  color: "#0A0A1A",
                  border: "3px solid #FF66FF",
                  boxShadow: "4px 4px 0px #00FFFF, 0 0 20px rgba(255,0,255,0.3)",
                }}
              >
                {t.hero.viewResume}
                <ArrowRight className="w-3 h-3" />
              </Link>
              <Link
                href="mailto:leibaio@foxmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 transition-all hover:scale-105"
                style={{
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: "0.6rem",
                  backgroundColor: "transparent",
                  color: "#00FFFF",
                  border: "3px solid #00FFFF",
                  boxShadow: "4px 4px 0px #FF00FF, 0 0 20px rgba(0,255,255,0.2)",
                }}
              >
                <Mail className="w-3 h-3" />
                {t.hero.contactMe}
              </Link>
            </div>
          </div>
        </section>

        {/* Features — pixel game level cards */}
        <section className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            {/* Section title */}
            <div className="flex items-center justify-center gap-3 mb-12">
              <div className="h-px flex-1 max-w-[80px]" style={{ backgroundColor: "#FF00FF", opacity: 0.4 }} />
              <span
                style={{
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: "0.6rem",
                  color: "#FFFF00",
                  textShadow: "0 0 10px rgba(255,255,0,0.5)",
                }}
              >
                SELECT LEVEL
              </span>
              <div className="h-px flex-1 max-w-[80px]" style={{ backgroundColor: "#FF00FF", opacity: 0.4 }} />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const colors = ["#FF00FF", "#00FFFF", "#FFFF00"];
                const color = colors[index];
                return (
                  <Link
                    key={feature.href}
                    href={feature.href}
                    className="group relative block p-6 transition-all duration-200 hover:scale-[1.02] animate-fade-in-up"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.03)",
                      border: `2px solid ${color}`,
                      boxShadow: `0 0 15px ${color}22, 4px 4px 0px ${color}44`,
                      animationDelay: `${400 + index * 100}ms`,
                    }}
                  >
                    {/* Level number */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        style={{
                          fontFamily: "'Press Start 2P', monospace",
                          fontSize: "1.5rem",
                          color: color,
                          textShadow: `0 0 15px ${color}88`,
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {/* Pixel heart/life indicator */}
                      <div className="flex gap-1">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            style={{
                              width: 8,
                              height: 8,
                              backgroundColor: color,
                              opacity: i < 3 ? 1 : 0.2,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    <h3
                      className="mb-3 uppercase"
                      style={{
                        fontFamily: "'Press Start 2P', monospace",
                        fontSize: "0.7rem",
                        lineHeight: 1.8,
                        color: "#EEE",
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="leading-relaxed mb-4"
                      style={{
                        fontFamily: "'Press Start 2P', monospace",
                        fontSize: "0.5rem",
                        lineHeight: 2,
                        color: "#8888AA",
                      }}
                    >
                      {feature.description}
                    </p>
                    <div
                      className="inline-flex items-center gap-1 text-xs uppercase opacity-0 group-hover:opacity-100 transition-all animate-pulse"
                      style={{
                        fontFamily: "'Press Start 2P', monospace",
                        fontSize: "0.5rem",
                        color: color,
                      }}
                    >
                      START <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tech Stack — scrolling like game credits */}
        <section className="container mx-auto px-4 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <p
              className="mb-6"
              style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: "0.5rem",
                color: "#FF00FF",
                textShadow: "0 0 10px rgba(255,0,255,0.3)",
              }}
            >
              POWER-UPS
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, i) => (
                <span
                  key={tech}
                  className="px-4 py-2 cursor-default transition-all hover:scale-110 animate-fade-in-up"
                  style={{
                    fontFamily: "'Press Start 2P', monospace",
                    fontSize: "0.5rem",
                    border: `1px solid ${i % 3 === 0 ? "#FF00FF" : i % 3 === 1 ? "#00FFFF" : "#FFFF00"}`,
                    color: i % 3 === 0 ? "#FF00FF" : i % 3 === 1 ? "#00FFFF" : "#FFFF00",
                    backgroundColor: "rgba(255,255,255,0.02)",
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

      {/* Footer — pixel bar */}
      <footer
        className="py-6 relative z-10"
        style={{ borderTop: "2px solid #FF00FF33" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: "0.5rem",
                color: "#555577",
              }}
            >
              &copy; {siteConfig.year} {siteConfig.author}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:scale-110"
                style={{ color: "#00FFFF" }}
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-all hover:scale-110"
                style={{ color: "#FF00FF" }}
              >
                <Mail className="w-4 h-4" />
              </a>
              <span
                style={{
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: "0.4rem",
                  color: "#555577",
                }}
              >
                GAME OVER?
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
