import { educationData, educationHighlights } from "@/data";
import { GraduationCap } from "lucide-react";
import { SectionHeader } from "./section-header";

export default function Education() {
  return (
    <section className="flex flex-col gap-2">
      <SectionHeader icon={GraduationCap} title="教育背景" />
      <div className="lg:whitespace-nowrap">
        <ul className="space-y-2">
          {educationData.map((edu, index) => (
            <li key={index}>
              {edu.school}，{edu.major}，{edu.degree}，{edu.duration}
            </li>
          ))}
          <li>{educationHighlights.join("、")}</li>
        </ul>
      </div>
    </section>
  );
}
