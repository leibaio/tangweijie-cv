import { i18n, Locale } from "@/config";
import { workExperienceData } from "@/data";
import { BriefcaseBusiness } from "lucide-react";
import { SectionHeader } from "./section-header";
import Timeline from "./timeline";

interface WorkExperienceProps {
  locale?: Locale;
}

export default function WorkExperience({ locale = "zh" }: WorkExperienceProps) {
  const t = i18n[locale].resume;
  const data = workExperienceData[locale];

  return (
    <section className="flex flex-col gap-2">
      <SectionHeader icon={BriefcaseBusiness} title={t.workExperience} />
      <Timeline items={data} />
    </section>
  );
}
