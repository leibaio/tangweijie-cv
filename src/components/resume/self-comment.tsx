import { i18n, Locale } from "@/config";
import { User } from "lucide-react";
import { SectionHeader } from "./section-header";

interface SelfCommentProps {
  locale?: Locale;
}

const comments = {
  zh: [
    "AI 驱动开发：深度使用 Claude Code，熟练运用 Skills 体系（brainstorming 方案设计、tdd 测试驱动、diagnose 调试、grill-me 需求审问、code-review 代码审查）和 MCP 集成，开发效率提升 3 倍+；持续关注 LLM 应用、RAG、Agent 等前沿技术，并在项目中落地",
    "全栈工程化：具备从前端到后端的全链路开发能力，注重代码质量和工程化实践，熟悉性能优化（懒加载/缓存/分批处理）和架构设计（前后端分离/BFF/微服务），追求高可维护性和可扩展性",
    "快速学习与落地：对新技术保持敏锐度，善于从技术社区（Hacker News/Stack Overflow）和实践中学习，具备独立调研、选型、落地新技术的能力，曾主导 Nuxt3 SSR、AI BFF 等新技术的快速应用",
    "团队协作与沟通：具备良好的技术文档和沟通能力，能够清晰表达技术方案和决策理由，有跨部门协作（产品/运营/财务）经验，善于在技术与业务之间找到平衡点",
  ],
  en: [
    "AI-Driven Development: Deep proficiency with Claude Code, leveraging its Skills ecosystem (brainstorming, TDD, systematic debugging, requirements grilling, code review) and MCP integration for 3x+ efficiency gains; staying current on LLM apps, RAG, and Agent technologies with production implementations",
    "Full-Stack Engineering: End-to-end development from frontend to backend, emphasizing code quality and engineering practices; experienced in performance optimization (lazy loading/caching/batch processing) and architecture design (FE-BE separation/BFF/microservices), pursuing high maintainability and scalability",
    "Fast Learner & Implementer: Strong technology sensitivity from tech communities (HN/Stack Overflow) and hands-on practice; capable of independently researching, selecting, and implementing new tech — e.g., led rapid adoption of Nuxt3 SSR and AI BFF",
    "Team Collaboration & Communication: Strong technical documentation and communication skills to articulate designs and decisions; experienced in cross-functional collaboration (Product/Ops/Finance), balancing technical solutions with business needs",
  ],
};

const accentColors = [
  "border-l-primary",
  "border-l-primary/60",
];

export default function SelfComment({ locale = "zh" }: SelfCommentProps) {
  const t = i18n[locale].resume;
  const items = comments[locale];

  return (
    <section className="flex flex-col gap-3 print:gap-1 print:break-inside-avoid">
      <SectionHeader icon={User} title={t.selfComment} />
      <div className="grid gap-2.5 print:gap-1">
        {items.map((item, index) => {
          const colonIndex = item.indexOf("：");
          const hasLabel = colonIndex !== -1;
          const label = hasLabel ? item.slice(0, colonIndex) : null;
          const content = hasLabel ? item.slice(colonIndex + 1) : item;
          const accent = accentColors[index % accentColors.length];

          return (
            <div
              key={index}
              className={`flex items-start gap-3 p-3 rounded-lg border-l-[3px] ${accent} border-y border-r border-border/40 print:p-1 print:border-l-2 hover:bg-primary/[0.02] transition-colors`}
            >
              <span className="text-xs text-muted-foreground/50 font-mono mt-0.5 shrink-0 print:text-[10px] select-none">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed print:text-xs">
                {label && (
                  <span className="font-semibold text-foreground/80">{label}：</span>
                )}
                {content}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
