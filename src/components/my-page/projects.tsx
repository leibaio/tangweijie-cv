import { SquareChartGantt } from "lucide-react";
import { SectionHeader } from "./components/section-header";
import { Tag } from "./components/tag";
import ProjectCard, { ProjectProps } from "./components/project-card";

const projectsData: ProjectProps[] = [
  {
    title: "CyanbirdMedia/ReadictNovel",
    time: " 2024.05-至今",
    description:
      "海外小说作者平台，pc 和 h5 响应式布局。产品核心模块包括小说、大纲、书籍表现分析、收入结算、签约和个人信息等。平台作者10000+，涉及 150+ 国家地区用户。",
    bulletPoints: [
      "1. 独立完成产品官网的模块化开发，使用语义化标签，基于 IntersectionObserver 实现懒加载和动画效果，基于 requestAnimationFrame 实现轮播图效果，精准还原 Figma 设计稿样式",
      "2. 基于 ElementUI 封装可复用组件库，统一主题色管理",
      "3. 基于 html2canvas 及原生 mouse 事件和定位计算，实现作者自行制作书籍封面",
      "4. 研究解析海外税表 pdf，实现 pdf 字段自动导入和手动签名效果，有效提升编辑审核效率",
      "5. 基于 echarts 对作者书籍的浏览数据等情况可视化展示，使用 lottie-web 实现作者等级提升动画",
    ],
    tags: [
      { text: "Vue2", color: "green" },
      { text: "重构 Element ui", color: "blue" },
      { text: "jsx", color: "blue" },
      { text: "vuex", color: "red" },
      { text: "vue-router", color: "yellow" },
      { text: "html2canvas", color: "gray" },
      { text: "cropperjs", color: "gray" },
      { text: "响应式", color: "gray" },
      { text: "echarts", color: "gray" },
      { text: "pdf-lib", color: "gray" },
    ],
  },
  {
    title: "Hugo",
    time: "2024.05-至今",
    description:
      "公司内部海外小说管理平台，pc 端项目。产品核心模块包括作者信息管理、UGC 用户内容生成、书籍章节管理和审核、作者签约付款管理、税表管理、封面图库和权限管理等。主要是公司内部产品、编辑、UI、责编、法务和财务等使用。",
    bulletPoints: [
      "1. 未能找到直接可用的轮子，基于原生 Date() ，手动封装作者更新字数日历组件",
      "2. 图库管理涉及到大量图片的上传，使用 p-queue 结合 Promise 实现队列的批量上传控制",
      "3. 基于 Quill 实现富文本编辑等，编辑通知公告和邮件样式等",
      "4. 日常迭代开发、维护和优化",
    ],
    tags: [
      { text: "Vue2", color: "green" },
      { text: "vuex", color: "red" },
      { text: "v-code-diff", color: "blue" },
      { text: "p-queue", color: "gray" },
      { text: "quill", color: "yellow" },
    ],
  },
  {
    title: "Hey Beauty 游戏增长试玩",
    time: "2024.08-2025.10",
    description: "三消换装小游戏的试玩页，用于投放和引流",
    bulletPoints: [
      "1. 依据屏幕大小实现棋盘背景生成，实现自适应布局",
      "2. 制作不同等级棋子、人物表情预制体",
      "3. 基于 Promise 优化资源加载策略，实现资源的异步加载和预加载",
    ],
    tags: [
      { text: "Cocos", color: "red" },
      { text: "Typescript", color: "purple" },
    ],
  },
  {
    title: "同程借钱",
    time: " 2024.12-2024.03",
    description:
      "Hybird H5 混合开发借贷项目，涉及到授信、借款、还款、基本信息管理、借还记录等模块。",
    bulletPoints: [
      "1.负责基本信息管理、银行卡、密码、借还记录等模块开发",
      "2. React + TypeScript + Less 开发，使用公司在 AntD Mobile 基础上封装的 Flat 组件库，使用 MockJs 完成接口模拟和自测",
    ],
    tags: [
      { text: "React", color: "blue" },
      { text: "Antd", color: "red" },
      { text: "Flatjs", color: "yellow" },
    ],
  },
];

export default function Projects() {
  return (
    <section className="flex flex-col gap-2">
      <SectionHeader icon={SquareChartGantt} title={"项目经历"} />

      <div className="grid grid-cols-1 gap-2">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
