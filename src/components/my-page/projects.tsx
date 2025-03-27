import { SquareChartGantt } from "lucide-react";
import { SectionHeader } from "./components/section-header";
import { Tag } from "./components/tag";
import ProjectCard, { ProjectProps } from "./components/project-card";

const projectsData: ProjectProps[] = [
  {
    title: "Project xxxx Project xxxx Project xxxx",
    description:
      "Description xxxxx Description xxxxx Description xxxxx Description xxxxx ",
    bulletPoints: ["1.xxxx", "2.xxx"],
    tags: [
      { text: "Vue2", color: "green" },
      { text: "Element ui", color: "blue" },
      { text: "Vuex", color: "red" },
      { text: "Vue-router", color: "yellow" },
      { text: "quill", color: "gray" },
    ],
  },
  {
    title: "Project xxxx Project xxxx Project xxxx",
    description:
      "Description xxxxx Description xxxxx Description xxxxx Description xxxxx Description xxxxx Description xxxxx Description xxxxx Description xxxxx",
    bulletPoints: ["1.xxxx", "2.xxx"],
    tags: [
      { text: "Vue2", color: "green" },
      { text: "Element ui", color: "blue" },
      { text: "Vuex", color: "red" },
      { text: "Vue-router", color: "yellow" },
      { text: "quill", color: "gray" },
    ],
  },
  {
    title: "Project xxxx Project xxxx Project xxxx",
    description:
      "Description xxxxx Description xxxxx Description xxxxx Description xxxxx Description xxxxx Description xxxxx Description xxxxx Description xxxxx",
    tags: [
      { text: "React", color: "blue" },
      { text: "Antd", color: "red" },
      { text: "Flatjs", color: "yellow" },
      { text: "Cropperjs", color: "gray" },
      { text: "html2canvas", color: "gray" },
      { text: "响应式", color: "gray" },
    ],
  },
  {
    title: "Project xxxx Project xxxx Project xxxx",
    description:
      "Description xxxxx Description xxxxx Description xxxxx Description xxxxx Description xxxxx Description xxxxx Description xxxxx Description xxxxx",
    bulletPoints: ["1.xxxx", "2.xxx"],
    tags: [
      { text: "React", color: "blue" },
      { text: "Nextjs", color: "purple" },
      { text: "Tailwind", color: "green" },
      { text: "Shadcn ui", color: "gray" },
    ],
  },
  {
    title: "Project xxxx Project xxxx Project xxxx",
    description:
      "Description xxxxx Description xxxxx Description xxxxx Description xxxxx Description xxxxx Description xxxxx Description xxxxx Description xxxxx",
    tags: [
      { text: "Cocos", color: "red" },
      { text: "Typescript", color: "purple" },
    ],
  },
];

export default function Projects() {
  return (
    <section className="flex flex-col gap-2">
      <SectionHeader icon={SquareChartGantt} title={"Projects"} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
