import { workExperienceData } from "@/data";
import { BriefcaseBusiness } from "lucide-react";
import { SectionHeader } from "./section-header";
import Timeline from "./timeline";

export default function WorkExperience() {
  return (
    <section className="flex flex-col gap-2">
      <SectionHeader icon={BriefcaseBusiness} title="工作经历" />
      <Timeline items={workExperienceData} />
    </section>
  );
}
