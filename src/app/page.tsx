import { ModeToggle } from "@/components/mode-toggle";
import { siteConfig } from "@/config";
import { Component, FileText } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "个人简历",
    description: "在线简历展示，支持响应式布局和打印",
    href: "/resume",
    icon: FileText,
  },
  {
    title: "组件展示",
    description: "项目中使用的各种组件展示",
    href: "/showcase",
    icon: Component,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">{siteConfig.name}</h1>
          <ModeToggle />
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">欢迎访问</h2>
          <p className="text-muted-foreground">
            这里是我的个人站点，你可以查看我的简历或浏览组件展示
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {features.map((feature) => (
            <Link
              key={feature.href}
              href={feature.href}
              className="group block p-6 rounded-lg border hover:border-primary hover:shadow-md transition-all"
            >
              <feature.icon className="w-8 h-8 mb-4 text-muted-foreground group-hover:text-primary transition-colors" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </Link>
          ))}
        </div>
      </main>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        © {siteConfig.year} {siteConfig.author}
      </footer>
    </div>
  );
}
