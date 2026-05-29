import { i18n, Locale } from "@/config";
import { skillsData } from "@/data";
import { Wrench } from "lucide-react";
import { SectionHeader } from "./section-header";

interface SkillsProps {
  locale?: Locale;
}

const categoryColors = ["bg-primary"];

function parseSkill(skill: string) {
  const colonIndex = skill.indexOf(":");
  if (colonIndex === -1) return { category: null, content: skill };
  return {
    category: skill.slice(0, colonIndex).replace(/^[⭐\s]+/, "").trim(),
    content: skill.slice(colonIndex + 1).trim(),
  };
}

export default function Skills({ locale = "zh" }: SkillsProps) {
  const t = i18n[locale].resume;
  const skills = skillsData[locale];

  return (
    <section className="flex flex-col gap-3 print:gap-1 print:break-inside-avoid">
      <SectionHeader icon={Wrench} title={t.skills} />
      <div className="flex flex-col gap-3 print:gap-1">
        {skills.map((skill, index) => {
          const { category, content } = parseSkill(skill);
          const dotColor = categoryColors[index % categoryColors.length];
          return (
            <div
              key={index}
              className="group flex items-start gap-3 p-3 rounded-lg border border-transparent hover:border-primary/10 hover:bg-primary/[0.02] transition-all print:p-0 print:border-0 print:hover:bg-transparent"
            >
              {/* 分类色点 */}
              <div className={`mt-1.5 w-2 h-2 rounded-full ${dotColor} shrink-0 print:hidden`} />
              <div className="flex-1 min-w-0">
                {category && (
                  <span className="text-sm font-semibold text-foreground/80 font-mono print:text-xs">
                    {category}：
                  </span>
                )}
                <span className="text-sm text-muted-foreground print:text-xs">
                  {content}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
