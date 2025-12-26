import { ProjectCard } from "@/components/resume";
import { Project } from "@/types";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const demoProject: Project = {
  title: "示例项目",
  time: "2024.01-至今",
  description: "这是一个示例项目卡片，展示项目卡片组件的使用方式",
  bulletPoints: [
    "支持项目标题和时间展示",
    "支持项目描述和要点列表",
    "支持技术栈标签展示",
  ],
  tags: [
    { text: "React", color: "blue" },
    { text: "TypeScript", color: "blue" },
    { text: "Tailwind CSS", color: "blue" },
  ],
};

export default function ProjectCardShowcase() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link
        href="/showcase"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        返回展示列表
      </Link>

      <h1 className="text-2xl font-bold mb-8">项目卡片组件</h1>

      <div className="space-y-6">
        <ProjectCard {...demoProject} />
      </div>
    </div>
  );
}
