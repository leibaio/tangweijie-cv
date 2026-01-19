import { WorkExperience } from "@/types";

export const workExperienceData: Record<"zh" | "en", WorkExperience[]> = {
  zh: [
    {
      company: "姚记科技",
      position: "同花工作室-全栈开发工程师",
      duration: "2025.07 - 至今",
      responsibilities: [
        "负责天天爱掼蛋游戏运营后台管理系统的前后端架构设计与核心功能开发，系统包含运营配置、比赛管理、渠道管理、玩家管理等 11 个核心模块，支撑日活 10 万+ 的游戏运营",
        "前端采用 Vue 3 + TypeScript + Vite + Pinia + TDesign 技术栈，封装 useTable、usePagination 等通用 Hooks 和 CommonTable 等业务组件，减少 70% 重复代码",
        "后端采用 Spring Boot + MyBatis-Plus + Shiro + Redis 技术栈，设计多模块分层架构（web/service/dal/model），实现业务解耦",
        "设计并实现基于 RBAC 的动态路由权限系统和多渠道配置发布系统，采用责任链模式处理配置发布，支持 Redis 发布订阅实现配置热更新",
      ],
    },
    {
      company: "上海触宝信息技术有限公司",
      position: "商业与技术中台 前端开发工程师",
      duration: "2024.05 - 2025.06",
      responsibilities: [
        "负责疯读小说、海外小说作家平台、内部小说管理后台、增长平台等项目的从需求评估到上线的全流程",
        "负责小说品牌 CyanbirdMedia、Joylit Novel 等产品官网开发，研究性能优化、SEO 和减少首屏加载时间等",
        "负责推动与优化已有前端项目的基础架构与组件抽象，封装多个公共业务组件，提升团队开发效率",
        "主动学习新技术，协助游戏团队开发游戏试玩产品设计与开发等",
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
  ],
  en: [
    {
      company: "Yaoji Technology",
      position: "Full Stack Developer",
      duration: "2025.07 - Present",
      responsibilities: [
        "Led the architecture design and core development of game operation management system, covering 11 modules including operations, tournaments, channels, and player management, supporting 100K+ DAU",
        "Frontend: Vue 3 + TypeScript + Vite + Pinia + TDesign, created reusable Hooks (useTable, usePagination) and business components, reducing 70% duplicate code",
        "Backend: Spring Boot + MyBatis-Plus + Shiro + Redis, designed multi-module layered architecture (web/service/dal/model) for business decoupling",
        "Implemented RBAC-based dynamic routing permission system and multi-channel config publishing with Redis pub/sub for hot updates",
      ],
    },
    {
      company: "Shanghai Chubao Information Technology",
      position: "Frontend Developer",
      duration: "2024.05 - 2025.06",
      responsibilities: [
        "Owned full lifecycle of multiple projects including novel platforms, author portals, and internal management systems",
        "Developed brand websites (CyanbirdMedia, Joylit Novel) with focus on performance optimization, SEO, and FCP improvements",
        "Led frontend architecture optimization and component abstraction, creating reusable business components to boost team efficiency",
        "Proactively learned new technologies, assisted game team with playable ad development",
      ],
    },
    {
      company: "Tongcheng Group",
      position: "Frontend Developer (Intern)",
      duration: "2023.12 - 2024.04",
      responsibilities: [
        "Developed Web/Hybrid frontend for finance and hotel B2B/B2C products",
        "Contributed to frontend engineering and company-wide component library",
      ],
    },
    {
      company: "Shanghai Zhijia Automotive Technology",
      position: "Frontend Developer (Intern)",
      duration: "2022.08 - 2023.06",
      responsibilities: [
        "Developed data cloud platform frontend",
        "Optimized performance using HTTP/2, file chunking, and virtual list techniques",
      ],
    },
  ],
};
