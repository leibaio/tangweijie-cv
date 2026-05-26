"use client";

import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { i18n } from "@/config";
import { useLocale } from "@/contexts/locale-context";
import { projectsData } from "@/data";

export default function ShowcasePage() {
  const { locale, mounted } = useLocale();
  const t = i18n[locale];
  const projects = projectsData[locale];

  if (!mounted) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="h-4 bg-muted rounded w-24 mb-8" />
        <div className="h-8 bg-muted rounded w-1/3 mb-8" />
        <div className="space-y-8">
          {[1, 2].map((i) => (
            <div key={i} className="rounded-xl border p-6 animate-pulse">
              <div className="h-48 bg-muted rounded-lg mb-4" />
              <div className="h-6 bg-muted rounded w-1/2 mb-2" />
              <div className="h-4 bg-muted rounded w-full mb-1" />
              <div className="h-4 bg-muted rounded w-3/4" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>

      <header className="border-b border-primary/10 bg-background/60 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.common.backToHome}
          </Link>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-2 text-primary font-mono">{t.features.showcase.title}</h1>
          <p className="text-muted-foreground">
            {locale === "zh"
              ? "展示实际项目的技术方案和成果"
              : "Technical solutions and results from real projects"}
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group rounded-xl border border-primary/10 bg-card/30 backdrop-blur-sm overflow-hidden hover:border-primary/30 transition-all"
            >
              {/* 截图占位区域 */}
              <div className="relative h-48 md:h-64 bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center border-b border-primary/10">
                <div className="text-center text-muted-foreground">
                  <p className="text-sm font-mono">
                    {locale === "zh" ? "项目截图（待添加）" : "Project Screenshot (TBD)"}
                  </p>
                  <p className="text-xs mt-1 opacity-50">{project.title}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h2 className="text-xl font-semibold mb-1">{project.title}</h2>
                    <span className="text-sm text-muted-foreground font-mono">{project.time}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{project.description}</p>

                <ul className="space-y-2 mb-4">
                  {(project.bulletPoints ?? []).slice(0, 4).map((point, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1 shrink-0">·</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.text}
                      className={`px-3 py-1 rounded-full text-xs border ${
                        tag.color === "blue"
                          ? "border-blue-500/30 text-blue-400 bg-blue-500/10"
                          : tag.color === "green"
                          ? "border-green-500/30 text-green-400 bg-green-500/10"
                          : "border-purple-500/30 text-purple-400 bg-purple-500/10"
                      }`}
                    >
                      {tag.text}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
