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

  return (
    <section className="flex flex-col gap-3 print:gap-1 print:break-inside-avoid flex-1">
      <SectionHeader icon={GraduationCap} title={t.education} />
      <div className="space-y-2.5 print:space-y-1">
        {data.items.map((edu, index) => (
          <div key={index} className="text-sm text-muted-foreground print:text-xs">
            <span className="font-medium text-foreground/90">{edu.school}</span>
            <span className="text-primary/30 mx-1.5">·</span>
            <span>{edu.major}</span>
            <span className="text-primary/30 mx-1.5">·</span>
            <span>{edu.degree}</span>
            <span className="text-primary/30 mx-1.5">·</span>
            <span className="font-mono text-xs">{edu.duration}</span>
          </div>
        ))}
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground/80 print:text-[10px]">
          {data.highlights.map((item, index) => (
            <span key={index} className="inline-flex items-center">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
