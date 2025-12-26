import { ArrowLeft, CreditCard, GitBranch, Tag } from "lucide-react";
import Link from "next/link";

const showcaseItems = [
  {
    title: "项目卡片",
    description: "展示项目信息的卡片组件",
    href: "/showcase/project-card",
    icon: CreditCard,
  },
  {
    title: "时间线",
    description: "用于展示工作经历的时间线组件",
    href: "/showcase/timeline",
    icon: GitBranch,
  },
  {
    title: "标签",
    description: "技术栈标签组件",
    href: "/showcase/tag",
    icon: Tag,
  },
];

export default function ShowcasePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        返回首页
      </Link>

      <h1 className="text-2xl font-bold mb-8">组件展示</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {showcaseItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group block p-5 rounded-lg border hover:border-primary hover:shadow-md transition-all"
          >
            <item.icon className="w-6 h-6 mb-3 text-muted-foreground group-hover:text-primary transition-colors" />
            <h3 className="font-semibold mb-1">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
