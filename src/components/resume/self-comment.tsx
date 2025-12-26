import { i18n, Locale } from "@/config";
import { User } from "lucide-react";
import { SectionHeader } from "./section-header";

interface SelfCommentProps {
  locale?: Locale;
}

const comments = {
  zh: [
    "对 AI 辅助开发保持高度敏感，熟练使用 Kiro、Cursor、Windsurf 等 AI IDE 工具提升开发效率，善于利用 AI 进行代码生成、重构和问题排查",
    "持续关注 Hacker News、Stack Overflow 等技术社区，保持对前沿技术和行业动态的敏锐度，具备快速学习和落地新技术的能力",
    "具备全栈开发能力，能够独立完成从需求分析、架构设计到前后端开发的全流程工作",
    "注重代码质量和工程化实践，善于抽象封装通用组件和工具，提升团队开发效率",
  ],
  en: [
    "Highly sensitive to AI-assisted development, proficient in AI IDE tools like Kiro, Cursor, Windsurf to boost productivity through code generation, refactoring, and debugging",
    "Actively follow Hacker News, Stack Overflow and tech communities, staying sharp on cutting-edge technologies with strong learning and implementation abilities",
    "Full-stack capable, independently handling complete workflows from requirements analysis, architecture design to frontend/backend development",
    "Focus on code quality and engineering practices, skilled at abstracting reusable components and utilities to improve team efficiency",
  ],
};

export default function SelfComment({ locale = "zh" }: SelfCommentProps) {
  const t = i18n[locale].resume;
  const items = comments[locale];

  return (
    <section className="flex flex-col gap-2 print:gap-1 print:break-inside-avoid">
      <SectionHeader icon={User} title={t.selfComment} />
      <ul className="list-disc list-inside space-y-2 print:space-y-0 print:text-sm">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
