import { i18n, Locale } from "@/config";
import { educationData } from "@/data";
import { GraduationCap } from "lucide-react";
import { SectionHeader } from "./section-header";

interface EducationProps {
  locale?: Locale;
}

export default function Education({ locale = "zh" }: EducationProps) {
  const t = i18n[locale].resume;
  const data = educationData[locale];
  const separator = locale === "zh" ? "、" : " | ";

  return (
    <section className="flex flex-col gap-2 print:gap-1 print:break-inside-avoid">
      <SectionHeader icon={GraduationCap} title={t.education} />
      <ul className="space-y-2 print:space-y-0 print:text-sm">
        {data.items.map((edu, index) => (
          <li key={index}>
            {edu.school}，{edu.major}，{edu.degree}，{edu.duration}
          </li>
        ))}
        <li className="flex flex-wrap gap-x-2 gap-y-1">
          {data.highlights.map((item, index) => (
            <span key={index} className="inline-flex items-center">
              {item}
              {index < data.highlights.length - 1 && (
                <span className="ml-2 text-muted-foreground">
                  {separator.trim()}
                </span>
              )}
            </span>
          ))}
        </li>
      </ul>
    </section>
  );
}
