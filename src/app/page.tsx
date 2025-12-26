import { ModeToggle } from "@/components/mode-toggle";
import { ThemeColorToggle } from "@/components/theme-color-toggle";
import { siteConfig } from "@/config";
import { ArrowRight, Component, FileText, Github, Mail } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "个人简历",
    description: "在线简历展示，支持响应式布局、主题切换和打印导出",
    href: "/resume",
    icon: FileText,
  },
  {
    title: "组件展示",
    description: "项目中使用的各种组件展示和演示",
    href: "/showcase",
    icon: Component,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* 格子背景 */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,hsl(var(--primary)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      {/* 渐变光晕 */}
      <div className="absolute top-0 -z-10 h-[500px] w-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--primary)/0.15),transparent)]" />

      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-primary">{siteConfig.name}</h1>
          <div className="flex items-center gap-2">
            <ThemeColorToggle />
            <ModeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-16">
        {/* Hero 区域 */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-sm text-primary mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            前端开发工程师 · 求职中
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            欢迎来到我的个人站点
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            这里展示我的简历和技术作品，希望能给你留下好印象
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              查看简历
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="mailto:leibaio@foxmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/20 hover:bg-primary/5 transition-colors"
            >
              <Mail className="w-4 h-4" />
              联系我
            </Link>
          </div>
        </div>

        {/* 功能卡片 */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {features.map((feature) => (
            <Link
              key={feature.href}
              href={feature.href}
              className="group relative block p-6 rounded-xl border border-primary/10 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  了解更多 <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 技术栈展示 */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-4">技术栈</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Vue", "React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full text-sm border border-primary/10 bg-primary/5 text-muted-foreground hover:border-primary/30 hover:text-primary transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t bg-background/80 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {siteConfig.year} {siteConfig.author}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:leibaio@foxmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
