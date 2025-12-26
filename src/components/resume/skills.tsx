import { i18n, Locale } from "@/config";
import { skillsData } from "@/data";
import { Wrench } from "lucide-react";
import { SectionHeader } from "./section-header";

interface SkillsProps {
  locale?: Locale;
}

export default function Skills({ locale = "zh" }: SkillsProps) {
  const t = i18n[locale].resume;
  const skills = skillsData[locale];

  return (
    <section className="flex flex-col gap-2 print:gap-1 print:break-inside-avoid">
      <SectionHeader icon={Wrench} title={t.skills} />
      <ul className="flex flex-col list-disc list-inside space-y-2 print:space-y-0 print:text-sm">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
