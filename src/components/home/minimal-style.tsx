"use client";

import { siteConfig } from "@/config";
import { Locale, i18n } from "@/config/i18n";
import { ArrowRight, BookOpen, Component, FileText, Github, Mail } from "lucide-react";
import Link from "next/link";

const techStack = [
  "Vue", "React", "TypeScript", "Next.js", "Tailwind CSS", "Spring Boot", "MySQL",
];

interface MinimalStyleProps {
  locale: Locale;
  header: React.ReactNode;
}

export function MinimalStyle({ locale, header }: MinimalStyleProps) {
  const t = i18n[locale];

  const features = [
    { title: t.features.resume.title, description: t.features.resume.description, href: "/resume", icon: FileText },
    { title: t.features.blog.title, description: t.features.blog.description, href: "/blog", icon: BookOpen },
    { title: t.features.showcase.title, description: t.features.showcase.description, href: "/showcase", icon: Component },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {header}

      <main className="flex-1 container mx-auto px-4 py-24 max-w-2xl">
        <div className="mb-20 animate-fade-in-up">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-8 border border-primary/10">
            <span className="text-3xl font-bold text-primary">T</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">
            {t.hero.subtitle.replace("我是", "").replace("I'm ", "")}
          </h1>
          <p className="text-xl text-muted-foreground mb-2">{t.hero.badge.split("·")[0].trim()}</p>
          <p className="text-muted-foreground/70 mb-8 max-w-md">{t.hero.description}</p>

          <div className="flex items-center gap-4">
            <Link href="/resume" className="group inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
              {t.hero.viewResume}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="text-muted-foreground/30">|</span>
            <Link href="mailto:leibaio@foxmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.hero.contactMe}
            </Link>
          </div>
        </div>

        <div className="space-y-1 mb-16">
          {features.map((feature, index) => (
            <Link
              key={feature.href}
              href={feature.href}
              className="group flex items-center justify-between py-4 border-b border-border/50 hover:border-primary/30 transition-all animate-fade-in-up"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <div className="flex items-center gap-4">
                <feature.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <div>
                  <h3 className="font-medium group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground/70">{feature.description}</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>

        <div className="animate-fade-in-up animation-delay-500">
          <p className="text-xs text-muted-foreground/50 uppercase tracking-wider mb-4">{t.techStack}</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span key={tech} className="text-sm text-muted-foreground/70 hover:text-foreground transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-border/30 py-8">
        <div className="container mx-auto px-4 max-w-2xl flex justify-between items-center">
          <p className="text-sm text-muted-foreground/50">© {siteConfig.year} {siteConfig.author}</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/50 hover:text-foreground transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="mailto:leibaio@foxmail.com" className="text-muted-foreground/50 hover:text-foreground transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
