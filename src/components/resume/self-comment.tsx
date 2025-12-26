import { User } from "lucide-react";
import { SectionHeader } from "./section-header";

export default function SelfComment() {
  return (
    <section className="flex flex-col gap-2 print:gap-1 print:break-inside-avoid">
      <SectionHeader icon={User} title="自我评价" />
      <ul className="list-disc list-inside space-y-2 print:space-y-0 print:text-sm">
        <li>
          对 AI 辅助开发保持高度敏感，熟练使用 Kiro、Cursor、Windsurf 等 AI IDE 工具提升开发效率，善于利用 AI 进行代码生成、重构和问题排查
        </li>
        <li>
          持续关注 Hacker News、Stack Overflow 等技术社区，保持对前沿技术和行业动态的敏锐度，具备快速学习和落地新技术的能力
        </li>
        <li>
          具备全栈开发能力，能够独立完成从需求分析、架构设计到前后端开发的全流程工作
        </li>
        <li>
          注重代码质量和工程化实践，善于抽象封装通用组件和工具，提升团队开发效率
        </li>
      </ul>
    </section>
  );
}
