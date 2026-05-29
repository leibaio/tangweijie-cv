"use client";

import { siteConfig } from "@/config";
import { Locale, i18n } from "@/config/i18n";
import { getFeatures, techStack } from "@/data/home-shared";
import { ArrowRight, Github, Mail } from "lucide-react";
import Link from "next/link";

interface SynthwaveStyleProps {
  locale: Locale;
  header: React.ReactNode;
}

export function SynthwaveStyle({ locale, header }: SynthwaveStyleProps) {
  const t = i18n[locale];
  const features = getFeatures(locale);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ backgroundColor: "#0D0221" }}>
      {/* Gradient sky */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, #0D0221 0%, #150734 30%, #261447 50%, #2B1845 60%, transparent 100%)",
        }}
      />
      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              top: `${(i * 37 + 13) % 60}%`,
              left: `${(i * 53 + 7) % 100}%`,
              width: (i % 3) + 2,
              height: (i % 3) + 2,
              backgroundColor: i % 4 === 0 ? "#FF00FF" : i % 4 === 1 ? "#00FFFF" : "#FFF",
              opacity: 0.4 + (i % 5) * 0.1,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>
      {/* Sunset circle */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none hidden md:block"
        style={{
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: "linear-gradient(180deg, #FF6B35 0%, #FF00FF 60%, #2B1845 100%)",
          top: "55%",
          maskImage: "repeating-linear-gradient(0deg, #000 0px, #000 3px, transparent 3px, transparent 7px)",
          WebkitMaskImage: "repeating-linear-gradient(0deg, #000 0px, #000 3px, transparent 3px, transparent 7px)",
          opacity: 0.7,
        }}
      />
      {/* Perspective grid floor */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "40vh",
          background: [
            "linear-gradient(transparent 0%, rgba(13,2,33,0.9) 100%)",
            "repeating-linear-gradient(90deg, rgba(255,0,255,0.15) 0px, transparent 1px, transparent 80px)",
            "repeating-linear-gradient(0deg, rgba(255,0,255,0.15) 0px, transparent 1px, transparent 80px)",
          ].join(", "),
          transform: "perspective(400px) rotateX(55deg)",
          transformOrigin: "center top",
        }}
      />
      {/* Horizontal neon lines */}
      <div
        className="absolute pointer-events-none hidden md:block"
        style={{
          width: "100%",
          height: 2,
          background: "linear-gradient(90deg, transparent 0%, #FF00FF 20%, #00FFFF 50%, #FF00FF 80%, transparent 100%)",
          top: "52%",
          opacity: 0.25,
          boxShadow: "0 0 20px #FF00FF",
        }}
      />

      {header}

      <main className="flex-1 relative z-10">
        {/* Hero */}
        <section className="container mx-auto px-4 pt-20 pb-24">
          <div className="max-w-3xl mx-auto text-center">
            {/* Neon badge */}
            <div
              className="inline-flex items-center gap-2 px-6 py-2 mb-10 animate-fade-in"
              style={{
                border: "1px solid #FF00FF",
                boxShadow: "0 0 15px rgba(255,0,255,0.3), inset 0 0 15px rgba(255,0,255,0.1)",
                borderRadius: 999,
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500" />
              </span>
              <span className="text-sm" style={{ color: "#FF88FF" }}>
                {t.hero.badge}
              </span>
            </div>

            {/* Main title — Orbitron neon glow */}
            <h1
              className="mb-6 animate-fade-in-up animation-delay-100"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: "clamp(2.5rem, 8vw, 6rem)",
                fontWeight: 800,
                color: "#FFF",
                textShadow: "0 0 10px #FF00FF, 0 0 40px #FF00FF, 0 0 80px rgba(255,0,255,0.5)",
                letterSpacing: "0.02em",
              }}
            >
              {t.hero.subtitle.replace("我是", "").replace("I'm ", "")}
            </h1>

            {/* Subtitle with gradient */}
            <p
              className="text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: "0.9rem",
                color: "#00FFFF",
                textShadow: "0 0 10px rgba(0,255,255,0.5)",
                letterSpacing: "0.05em",
              }}
            >
              {t.hero.description}
            </p>

            {/* CTA — neon buttons */}
            <div className="flex items-center justify-center gap-4 flex-wrap animate-fade-in-up animation-delay-300">
              <Link
                href="/resume"
                className="group inline-flex items-center gap-2 px-8 py-3.5 font-medium transition-all duration-300 hover:gap-3"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  background: "linear-gradient(135deg, #FF00FF, #8B00FF)",
                  color: "#FFF",
                  border: "1px solid rgba(255,0,255,0.5)",
                  borderRadius: 4,
                  boxShadow: "0 0 20px rgba(255,0,255,0.4), 0 4px 20px rgba(255,0,255,0.2)",
                  textTransform: "uppercase",
                }}
              >
                {t.hero.viewResume}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="mailto:leibaio@foxmail.com"
                className="inline-flex items-center gap-2 px-8 py-3.5 font-medium transition-all duration-300"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  background: "transparent",
                  color: "#00FFFF",
                  border: "1px solid #00FFFF",
                  borderRadius: 4,
                  boxShadow: "0 0 15px rgba(0,255,255,0.2)",
                  textTransform: "uppercase",
                }}
              >
                <Mail className="w-4 h-4" />
                {t.hero.contactMe}
              </Link>
            </div>
          </div>
        </section>

        {/* Features — neon cards */}
        <section className="container mx-auto px-4 pb-24">
          <div className="max-w-4xl mx-auto">
            <p
              className="text-center text-xs mb-10 animate-fade-in"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                color: "#FF00FF",
                textShadow: "0 0 10px rgba(255,0,255,0.4)",
                letterSpacing: "0.3em",
              }}
            >
              SELECT DESTINATION
            </p>

            <div className="grid md:grid-cols-3 gap-5">
              {features.map((feature, index) => {
                const neons = ["#FF00FF", "#00FFFF", "#FF6B35"];
                const neon = neons[index];
                return (
                  <Link
                    key={feature.href}
                    href={feature.href}
                    className="group relative block p-7 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: `1px solid ${neon}33`,
                      borderRadius: 8,
                      boxShadow: `0 0 30px ${neon}11, inset 0 0 30px ${neon}05`,
                      animationDelay: `${400 + index * 100}ms`,
                    }}
                  >
                    {/* Top neon line */}
                    <div
                      className="absolute top-0 left-4 right-4 h-px"
                      style={{ backgroundColor: neon, boxShadow: `0 0 10px ${neon}` }}
                    />
                    <span
                      className="text-5xl font-black block mb-4 leading-none"
                      style={{
                        fontFamily: "'Orbitron', sans-serif",
                        color: neon,
                        textShadow: `0 0 20px ${neon}66`,
                        opacity: 0.3,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className="text-lg font-bold mb-2 transition-colors"
                      style={{
                        fontFamily: "'Orbitron', sans-serif",
                        color: "#FFF",
                        fontSize: "0.85rem",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
                      {feature.description}
                    </p>
                    <div
                      className="inline-flex items-center gap-1 text-xs opacity-0 group-hover:opacity-100 transition-all"
                      style={{
                        fontFamily: "'Orbitron', sans-serif",
                        color: neon,
                        textShadow: `0 0 10px ${neon}`,
                        letterSpacing: "0.1em",
                      }}
                    >
                      ENTER <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tech Stack — scrolling neon pills */}
        <section className="container mx-auto px-4 pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <p
              className="text-xs mb-8"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                color: "rgba(255,255,255,0.3)",
                letterSpacing: "0.3em",
              }}
            >
              {t.techStack}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, i) => {
                const colors = ["#FF00FF", "#00FFFF", "#FF6B35"];
                const c = colors[i % 3];
                return (
                  <span
                    key={tech}
                    className="px-5 py-2.5 text-sm cursor-default transition-all duration-300 hover:-translate-y-0.5 animate-fade-in-up"
                    style={{
                      fontFamily: "'Orbitron', sans-serif",
                      fontSize: "0.7rem",
                      border: `1px solid ${c}44`,
                      borderRadius: 4,
                      color: c,
                      textShadow: `0 0 8px ${c}66`,
                      background: `${c}08`,
                      letterSpacing: "0.05em",
                      animationDelay: `${600 + i * 40}ms`,
                    }}
                  >
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="py-8 relative z-10"
        style={{
          borderTop: "1px solid rgba(255,0,255,0.15)",
          background: "rgba(0,0,0,0.3)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className="text-xs"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                color: "rgba(255,255,255,0.3)",
                letterSpacing: "0.1em",
              }}
            >
              &copy; {siteConfig.year} {siteConfig.author}
            </p>
            <div className="flex items-center gap-6">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: "#FF00FF" }}
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors"
                style={{ color: "#00FFFF" }}
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
