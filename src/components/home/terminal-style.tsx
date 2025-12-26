"use client";

import { siteConfig } from "@/config";
import { Locale, i18n } from "@/config/i18n";
import { Circle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface TerminalStyleProps {
  locale: Locale;
  header: React.ReactNode;
}

const commands = [
  { cmd: "whoami", delay: 0 },
  { cmd: "cat skills.txt", delay: 1500 },
  { cmd: "ls ./projects", delay: 3000 },
];

export function TerminalStyle({ locale, header }: TerminalStyleProps) {
  const t = i18n[locale];
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const [currentTyped, setCurrentTyped] = useState("");

  const lines = [
    { type: "prompt", content: "whoami" },
    { type: "output", content: locale === "zh" ? "汤伟杰 - 全栈开发工程师" : "Tang Weijie - Full Stack Developer" },
    { type: "output", content: "📍 Shanghai | 📧 leibaio@foxmail.com" },
    { type: "empty" },
    { type: "prompt", content: "cat skills.txt" },
    { type: "output", content: "Frontend: Vue 2/3, React, TypeScript, Next.js, Nuxt.js" },
    { type: "output", content: "Backend:  Spring Boot, MyBatis-Plus, Node.js" },
    { type: "output", content: "Database: MySQL, Redis, MongoDB" },
    { type: "output", content: "DevOps:   Docker, Git, Linux" },
    { type: "empty" },
    { type: "prompt", content: "ls ./projects" },
    { type: "link", content: "resume/", href: "/resume", desc: t.features.resume.title },
    { type: "link", content: "blog/", href: "/blog", desc: t.features.blog.title },
    { type: "link", content: "showcase/", href: "/showcase", desc: t.features.showcase.title },
    { type: "empty" },
    { type: "prompt", content: "_", cursor: true },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev < lines.length) return prev + 1;
        clearInterval(timer);
        return prev;
      });
    }, 150);
    return () => clearInterval(timer);
  }, [lines.length]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0d1117]">
      {header}

      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <div className="rounded-lg border border-[#30363d] bg-[#161b22] overflow-hidden shadow-2xl animate-fade-in">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#21262d] border-b border-[#30363d]">
            <Circle className="w-3 h-3 fill-[#ff5f56] text-[#ff5f56]" />
            <Circle className="w-3 h-3 fill-[#ffbd2e] text-[#ffbd2e]" />
            <Circle className="w-3 h-3 fill-[#27ca40] text-[#27ca40]" />
            <span className="ml-4 text-sm text-[#8b949e] font-mono">tang@portfolio ~ </span>
          </div>

          {/* Terminal content */}
          <div className="p-6 font-mono text-sm leading-relaxed min-h-[500px]">
            {lines.slice(0, visibleLines).map((line, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                {line.type === "prompt" && (
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[#7ee787]">➜</span>
                    <span className="text-[#79c0ff]">~</span>
                    <span className="text-white">
                      {line.cursor ? (
                        <span className="animate-pulse">▊</span>
                      ) : (
                        line.content
                      )}
                    </span>
                  </div>
                )}
                {line.type === "output" && (
                  <div className="text-[#c9d1d9] ml-6 mb-1">{line.content}</div>
                )}
                {line.type === "link" && (
                  <Link
                    href={line.href!}
                    className="flex items-center gap-4 ml-6 mb-1 group"
                  >
                    <span className="text-[#79c0ff] group-hover:text-[#58a6ff] transition-colors">
                      {line.content}
                    </span>
                    <span className="text-[#484f58] group-hover:text-[#8b949e] transition-colors">
                      # {line.desc}
                    </span>
                  </Link>
                )}
                {line.type === "empty" && <div className="h-4" />}
              </div>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className="mt-8 flex items-center justify-center gap-6 text-sm font-mono animate-fade-in-up animation-delay-500">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8b949e] hover:text-[#c9d1d9] transition-colors"
          >
            [github]
          </a>
          <a
            href="mailto:leibaio@foxmail.com"
            className="text-[#8b949e] hover:text-[#c9d1d9] transition-colors"
          >
            [email]
          </a>
          <Link href="/resume" className="text-[#8b949e] hover:text-[#c9d1d9] transition-colors">
            [resume]
          </Link>
        </div>
      </main>

      <footer className="py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-[#484f58] font-mono">
            © {siteConfig.year} {siteConfig.author} | {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
}
