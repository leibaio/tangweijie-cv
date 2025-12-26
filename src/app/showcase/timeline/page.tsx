import { Timeline } from "@/components/resume";
import { WorkExperience } from "@/types";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const demoData: WorkExperience[] = [
  {
    company: "示例公司 A",
    position: "高级前端工程师",
    duration: "2023.01 - 至今",
    responsibilities: [
      "负责核心产品的前端架构设计",
      "带领团队完成多个重要项目",
    ],
  },
  {
    company: "示例公司 B",
    position: "前端工程师",
    duration: "2021.06 - 2022.12",
    responsibilities: [
      "参与公司主要产品的开发",
      "优化前端性能，提升用户体验",
    ],
  },
];

export default function TimelineShowcase() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link
        href="/showcase"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        返回展示列表
      </Link>

      <h1 className="text-2xl font-bold mb-8">时间线组件</h1>

      <Timeline items={demoData} />
    </div>
  );
}
