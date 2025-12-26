import { projectsData } from "@/data";
import { SquareChartGantt } from "lucide-react";
import ProjectCard from "./project-card";
import { SectionHeader } from "./section-header";

export default function Projects() {
  return (
    <section className="flex flex-col gap-2">
      <SectionHeader icon={SquareChartGantt} title="项目经历" />
      <div className="grid grid-cols-1 gap-2">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
