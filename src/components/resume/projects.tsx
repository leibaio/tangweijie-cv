import { i18n, Locale } from "@/config";
import { projectsData } from "@/data";
import { SquareChartGantt } from "lucide-react";
import ProjectCard from "./project-card";
import { SectionHeader } from "./section-header";

interface ProjectsProps {
  locale?: Locale;
}

export default function Projects({ locale = "zh" }: ProjectsProps) {
  const t = i18n[locale].resume;
  const data = projectsData[locale];

  return (
    <section className="flex flex-col gap-2">
      <SectionHeader icon={SquareChartGantt} title={t.projects} />
      <div className="grid grid-cols-1 gap-2">
        {data.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
