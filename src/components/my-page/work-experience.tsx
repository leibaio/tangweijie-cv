import { BriefcaseBusiness } from "lucide-react";
import Timeline, { TimelineItemProps } from "../timeline/time-line";

const workExperienceData: TimelineItemProps[] = [
  {
    company: "ABC科技有限公司",
    position: "前端开发工程师",
    duration: "2024.05 - 至今",
    responsibilities: [
      "负责核心业务系统的前端架构设计和开发",
      "主导完成项目从Vue2到Vue3的技术迁移",
      "使用TypeScript重构核心模块提升代码质量",
    ],
  },
  {
    company: "XYZ互联网公司",
    position: "前端开发工程师",
    duration: "2023.12 - 2024.04",
    responsibilities: [
      "使用React+Node.js开发电商管理系统",
      "实现前后端分离架构并优化首屏加载速度",
      "负责项目 X 的开发与维护",
    ],
  },
  {
    company: "qwe互联网公司",
    position: "前端开发工程师",
    duration: "2022.08 - 2024.06",
    responsibilities: [
      "使用Vue开发保险管理系统",
      "实现前后端分离架构并优化首屏加载速度",
      "负责项目 X 的开发与维护",
    ],
  },
];

export default function WorkExperience() {
  return (
    <section className="flex flex-col gap-2">
      <div className="flex gap-4">
        <BriefcaseBusiness className="hidden sm:block" />
        <h2 className="text-xl font-bold">Work Experience</h2>
      </div>
      <Timeline
        items={workExperienceData}
        nodeColor="bg-gradient-to-r from-cyan-500 to-blue-500"
        lineColor="border-gray-200 dark:border-gray-700"
      />
    </section>
  );
}
