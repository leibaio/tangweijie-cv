import { BriefcaseBusiness } from "lucide-react";
import { SectionHeader } from "./components/section-header";
import Timeline, { TimelineItemProps } from "./components/time-line";

const workExperienceData: TimelineItemProps[] = [
  {
    company: "上海触宝信息技术有限公司",
    position: "商业与技术中台 前端开发工程师",
    duration: "2024.05 - 至今",
    responsibilities: [
      "疯读小说、海外小说作家平台、内部小说管理后台等项目，前端需求对接和业务开发",
      "独立完成新品牌 CyanbirdMedia 的官网开发",
      "协助游戏团队开发游戏试玩等",
    ],
  },
  {
    company: "同程集团",
    position: "大前端组 前端开发工程师（实习）",
    duration: "2023.12 - 2024.04",
    responsibilities: [
      "参与同程借钱、酒店之家商城等项目的模块开发与维护",
      "封装如支付密码弹窗、银行卡封面等可复用组件",
    ],
  },
  {
    company: "上海智驾汽车科技有限公司",
    position: "感知算法组 前端开发工程师（实习）",
    duration: "2022.08 - 2023.06",
    responsibilities: [
      "熟悉开发流程, 参与需求分析, 协助团队完成数据云平台的前端开发工作",
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
