import { BriefcaseBusiness } from "lucide-react";
import { SectionHeader } from "./components/section-header";
import Timeline, { TimelineItemProps } from "./components/time-line";

const workExperienceData: TimelineItemProps[] = [
  {
    company: "上海触宝信息技术有限公司",
    position: "商业与技术中台 前端开发工程师",
    duration: "2024.05 - 至今",
    responsibilities: [
      "负责疯读小说、海外小说作家平台、内部小说管理后台、增长平台等项目的前端开发",
      "负责小说品牌 CyanbirdMedia、 Joylit Novel 等产品官网开发",
      "负责推动与优化已有前端项目的基础架构与组件抽象",
      "协助游戏团队开发游戏试玩产品设计与开发等",
    ],
  },
  {
    company: "同程集团",
    position: "大前端组 前端开发工程师（实习）",
    duration: "2023.12 - 2024.04",
    responsibilities: [
      "负责金融、酒店业务相关B/C端产品Web/Hybrid的前端开发工作",
      "参与前端工程化，公司通用组件库的开发与维护",
    ],
  },
  {
    company: "上海智驾汽车科技有限公司",
    position: "感知算法组 前端开发工程师（实习）",
    duration: "2022.08 - 2023.06",
    responsibilities: [
      "协助团队完成数据云平台的前端开发工作",
      "持续挖掘性能瓶颈并优化，研究 Http2、文件切片、虚拟列表等性能优化技术",
    ],
  },
];

export default function WorkExperience() {
  return (
    <section className="flex flex-col gap-2">
      <SectionHeader icon={BriefcaseBusiness} title={"工作经历"} />
      <Timeline
        items={workExperienceData}
        nodeColor="bg-gray-700 dark:bg-gray-50"
        // nodeColor="bg-primary"
        // nodeColor="bg-gradient-to-r from-cyan-500 to-blue-500"
        lineColor="border-gray-200 dark:border-gray-700"
      />
    </section>
  );
}
