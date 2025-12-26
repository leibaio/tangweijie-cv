import { skillsData } from "@/data";
import { Wrench } from "lucide-react";
import { SectionHeader } from "./section-header";

export default function Skills() {
  return (
    <section className="flex flex-col gap-2 print:gap-1 print:break-inside-avoid">
      <SectionHeader icon={Wrench} title="专业技能" />
      <ul className="flex flex-col list-disc list-inside space-y-2 print:space-y-0 print:text-sm">
        {skillsData.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
