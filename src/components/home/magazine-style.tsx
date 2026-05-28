"use client";

import { siteConfig } from "@/config";
import { Locale, i18n } from "@/config/i18n";
import { getFeatures, techStack } from "@/data/home-shared";
import { ArrowRight, Github, Mail } from "lucide-react";
import Link from "next/link";

interface MagazineStyleProps {
  locale: Locale;
  header: React.ReactNode;
}

export function MagazineStyle({ locale, header }: MagazineStyleProps) {
  const t = i18n[locale];
  const features = getFeatures(locale);

  return (
    <div className="min-h-screen flex flex-col relative" style={{ backgroundColor: "#FAF8F5" }}>
      {/* Subtle paper grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Large decorative issue number */}
      <div
        className="absolute top-4 right-6 pointer-events-none select-none hidden md:block animate-fade-in"
        style={{
          fontFamily: "'Playfair Display', 'Georgia', serif",
          fontSize: "12rem",
          fontWeight: 900,
          lineHeight: 1,
          color: "#1A1A1A",
          opacity: 0.03,
        }}
      >
        01
      </div>

      {header}

      <main className="flex-1 relative z-10">
        {/* Hero — editorial magazine cover */}
        <section className="container mx-auto px-4 pt-12 pb-16">
          {/* Masthead line */}
          <div className="flex items-center gap-3 mb-10 animate-fade-in">
            <div className="h-px flex-1" style={{ backgroundColor: "#1A1A1A" }} />
            <span
              className="text-[10px] uppercase tracking-[0.4em] font-medium"
              style={{ color: "#1A1A1A" }}
            >
              Portfolio Edition
            </span>
            <div className="h-px flex-1" style={{ backgroundColor: "#1A1A1A" }} />
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Main headline — oversized serif */}
            <div className="animate-fade-in-up animation-delay-100">
              <h1
                className="leading-[0.88] mb-2"
                style={{
                  fontFamily: "'Playfair Display', 'Georgia', serif",
                  fontSize: "clamp(3.5rem, 10vw, 8rem)",
                  fontWeight: 900,
                  color: "#1A1A1A",
                  fontStyle: "italic",
                }}
              >
                {t.hero.subtitle.replace("我是", "").replace("I'm ", "")}
              </h1>
            </div>

            {/* Subtitle — contrasting sans-serif uppercase */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-4 mb-10 animate-fade-in-up animation-delay-200">
              <div>
                <p
                  className="text-xs uppercase tracking-[0.35em] mb-2 font-medium"
                  style={{ color: "#C44536" }}
                >
                  {t.hero.badge}
                </p>
                <p
                  className="text-base max-w-md leading-relaxed"
                  style={{
                    fontFamily: "'Georgia', serif",
                    color: "#666",
                  }}
                >
                  {t.hero.description}
                </p>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <Link
                  href="/resume"
                  className="group inline-flex items-center gap-2 px-6 py-3 text-sm uppercase tracking-[0.2em] font-medium transition-all"
                  style={{
                    backgroundColor: "#1A1A1A",
                    color: "#FAF8F5",
                    borderRadius: 0,
                  }}
                >
                  {t.hero.viewResume}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="mailto:leibaio@foxmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm uppercase tracking-[0.2em] font-medium transition-all"
                  style={{
                    border: "2px solid #1A1A1A",
                    color: "#1A1A1A",
                    borderRadius: 0,
                  }}
                >
                  <Mail className="w-4 h-4" />
                  {t.hero.contactMe}
                </Link>
              </div>
            </div>

            {/* Horizontal rule with accent dot */}
            <div className="flex items-center gap-3 mb-12 animate-fade-in-up animation-delay-300">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#C44536" }} />
              <div className="h-px flex-1" style={{ backgroundColor: "#1A1A1A" }} />
            </div>
          </div>
        </section>

        {/* Feature cards — editorial grid */}
        <section className="container mx-auto px-4 pb-20">
          <div className="max-w-5xl mx-auto">
            {/* Section label */}
            <p
              className="text-[10px] uppercase tracking-[0.4em] font-medium mb-8"
              style={{ color: "#999" }}
            >
              Explore
            </p>

            <div className="grid md:grid-cols-12 gap-6">
              {/* First feature — large, spans 7 cols */}
              <Link
                href={features[0].href}
                className="group md:col-span-7 block animate-fade-in-up animation-delay-400"
              >
                <div
                  className="relative overflow-hidden p-8 md:p-10 transition-all duration-300"
                  style={{
                    backgroundColor: "#1A1A1A",
                    borderRadius: 0,
                  }}
                >
                  <div className="relative z-10">
                    <span
                      className="text-[10px] uppercase tracking-[0.3em] font-medium block mb-6"
                      style={{ color: "#C44536" }}
                    >
                      01
                    </span>
                    <h3
                      className="text-3xl md:text-4xl font-bold mb-3 group-hover:text-[#C44536] transition-colors"
                      style={{
                        fontFamily: "'Playfair Display', 'Georgia', serif",
                        color: "#FAF8F5",
                      }}
                    >
                      {features[0].title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-6 max-w-sm"
                      style={{ color: "#999" }}
                    >
                      {features[0].description}
                    </p>
                    <div
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium transition-all group-hover:gap-3"
                      style={{ color: "#C44536" }}
                    >
                      Read <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Second feature — spans 5 cols, offset */}
              <Link
                href={features[1].href}
                className="group md:col-span-5 md:mt-16 block animate-fade-in-up animation-delay-500"
              >
                <div
                  className="p-8 transition-all duration-300"
                  style={{
                    border: "2px solid #1A1A1A",
                    borderRadius: 0,
                    backgroundColor: "transparent",
                  }}
                >
                  <span
                    className="text-[10px] uppercase tracking-[0.3em] font-medium block mb-6"
                    style={{ color: "#C44536" }}
                  >
                    02
                  </span>
                  <h3
                    className="text-2xl font-bold mb-3 group-hover:text-[#C44536] transition-colors"
                    style={{
                      fontFamily: "'Playfair Display', 'Georgia', serif",
                      color: "#1A1A1A",
                    }}
                  >
                    {features[1].title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#888" }}>
                    {features[1].description}
                  </p>
                </div>
              </Link>

              {/* Third feature — full width, horizontal */}
              <Link
                href={features[2].href}
                className="group md:col-span-12 block animate-fade-in-up animation-delay-600"
              >
                <div
                  className="flex items-center justify-between p-8 transition-all duration-300 group-hover:pl-12"
                  style={{
                    borderTop: "1px solid #DDD",
                    borderBottom: "1px solid #DDD",
                  }}
                >
                  <div className="flex items-center gap-6">
                    <span
                      className="text-[10px] uppercase tracking-[0.3em] font-medium"
                      style={{ color: "#C44536" }}
                    >
                      03
                    </span>
                    <h3
                      className="text-xl font-bold group-hover:text-[#C44536] transition-colors"
                      style={{
                        fontFamily: "'Playfair Display', 'Georgia', serif",
                        color: "#1A1A1A",
                      }}
                    >
                      {features[2].title}
                    </h3>
                  </div>
                  <p className="text-sm hidden md:block" style={{ color: "#999" }}>
                    {features[2].description}
                  </p>
                  <ArrowRight
                    className="w-5 h-5 transition-transform group-hover:translate-x-2"
                    style={{ color: "#1A1A1A" }}
                  />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Tech Stack — editorial column layout */}
        <section className="container mx-auto px-4 pb-20">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#C44536" }} />
              <p
                className="text-[10px] uppercase tracking-[0.4em] font-medium"
                style={{ color: "#999" }}
              >
                {t.techStack}
              </p>
            </div>
            <div
              className="columns-2 md:columns-3 lg:columns-4 gap-6"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              {techStack.map((tech, i) => (
                <div
                  key={tech}
                  className="break-inside-avoid mb-4 cursor-default animate-fade-in-up"
                  style={{
                    animationDelay: `${700 + i * 50}ms`,
                    borderBottom: "1px solid #EEE",
                    paddingBottom: "0.75rem",
                  }}
                >
                  <span
                    className="text-sm"
                    style={{ color: "#1A1A1A" }}
                  >
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer — minimal editorial */}
      <footer
        className="py-10 relative z-10"
        style={{ borderTop: "2px solid #1A1A1A" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <p
                className="text-[10px] uppercase tracking-[0.3em] font-medium"
                style={{ color: "#999" }}
              >
                &copy; {siteConfig.year} {siteConfig.author}
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-[0.2em] font-medium transition-colors hover:text-[#C44536]"
                style={{ color: "#1A1A1A" }}
              >
                Github
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-[10px] uppercase tracking-[0.2em] font-medium transition-colors hover:text-[#C44536]"
                style={{ color: "#1A1A1A" }}
              >
                Email
              </a>
              <Github className="w-4 h-4" style={{ color: "#CCC" }} />
              <Mail className="w-4 h-4" style={{ color: "#CCC" }} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
