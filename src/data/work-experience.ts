import { WorkExperience } from "@/types";

export const workExperienceData: Record<"zh" | "en", WorkExperience[]> = {
  zh: [
    {
      company: "姚记科技",
      position: "同花工作室-全栈开发工程师",
      duration: "2025.07 - 至今",
      responsibilities: [
        "全栈负责天天爱掼蛋运营管理系统（前端 Vue3 + 后端 Spring Boot + AI BFF Node.js），系统包含权限管理、渠道配置、比赛管理、客服系统等 11 个核心模块，支撑日活 40 万+ 用户的游戏运营",

        "架构设计：前后端分离架构，后端采用多模块分层（web/service/dal/model）实现业务解耦；引入 BFF 中间层代理 AI 服务，通过 SSE 流式响应支持智能数据分析，提升运营决策效率 50%+",

        "核心功能：①基于 RBAC 的动态路由权限系统（菜单+按钮+API 三级控制）②多渠道配置发布系统（责任链模式 + Redis 发布订阅实现配置热更新）③弹窗配置系统（转化率提升 15%）④比赛管理系统（日均 1000+ 场比赛）",

        "技术优化：封装 useTable、usePagination 等通用 Hooks 和 CommonTable 配置化组件，减少 70% 重复代码；路由懒加载和代码分割优化首屏加载 40%；分批处理策略避免大批量发布 OOM；系统支持 5000+ QPS，缓存命中率 95%+",

        "AI 集成：基于 Node.js + Hono 构建 AI BFF 中间层，支持多模型切换（Kimi/NVIDIA/OpenAI），通过环境变量零代码切换；实现流式对话分析、自动生成运营报告等功能，保护 API Key 安全；使用 Claude Code + Spec 驱动开发，开发效率提升 3 倍+",
      ],
    },
    {
      company: "上海触宝信息技术有限公司",
      position: "商业与技术中台-前端开发工程师",
      duration: "2024.05 - 2025.06",
      responsibilities: [
        "负责疯读小说、海外小说作家平台、内部管理后台、增长平台等多个产品的从需求评估到上线的全流程开发",
        "负责 CyanbirdMedia、Joylit Novel 等品牌官网开发，通过 Nuxt.js SSR、语义化标签、懒加载等优化，有机流量增长 40%，首屏加载优化 50%",
        "推动前端架构优化，封装 html2canvas 封面生成（3000ms → 500ms）、批量上传队列（成功率提升 30%）等公共业务组件，提升团队开发效率",
        "主动学习新技术，协助游戏团队使用 Cocos Creator 完成 H5 试玩广告开发，资源异步加载优化加载时间 40%",
      ],
    },
    {
      company: "同程集团",
      position: "大前端组-前端开发工程师（实习）",
      duration: "2023.12 - 2024.04",
      responsibilities: [
        "负责金融、酒店业务相关 B/C 端产品 Web/Hybrid 的前端开发，参与前端工程化和公司通用组件库的开发与维护",
      ],
    },
  ],
  en: [
    {
      company: "Yaoji Technology",
      position: "Full Stack Developer",
      duration: "2025.07 - Present",
      responsibilities: [
        "Full-stack ownership of game operation system (Vue3 + Spring Boot + Node.js BFF), covering 11 core modules including permissions, channels, tournaments, customer service, supporting 100K+ DAU",

        "Architecture: Frontend-backend separation with multi-module layering (web/service/dal/model); BFF layer proxies AI service with SSE streaming for intelligent analytics, boosting operational decision efficiency 50%+",

        "Core Features: ①RBAC dynamic routing (menu+button+API access control) ②Multi-channel config publishing (Chain of Responsibility + Redis pub/sub for hot updates) ③Popup config (15% conversion lift) ④Tournament system (1000+ daily matches)",

        "Tech Optimization: Reusable Hooks (useTable, usePagination) and CommonTable, reducing 70% code duplication; lazy loading for 40% FCP improvement; batch processing to prevent OOM; 5000+ QPS, 95%+ cache hit rate",

        "AI Integration: Built AI BFF with Node.js + Hono, supporting multi-model switching (Kimi/NVIDIA/OpenAI) via env vars with zero code changes; integrated for streaming chat analytics and auto-generated reports, securing API keys; Claude Code + Spec-driven development boosted efficiency 3x+",
      ],
    },
    {
      company: "Shanghai Chubao Information Technology",
      position: "Frontend Developer",
      duration: "2024.05 - 2025.06",
      responsibilities: [
        "Owned full lifecycle of multiple products: novel platforms, author portals, internal management systems, and growth platforms",
        "Developed brand websites (CyanbirdMedia, Joylit Novel) with Nuxt.js SSR, semantic HTML, lazy loading, achieving 40% organic traffic growth and 50% FCP improvement",
        "Led frontend architecture optimization, encapsulating html2canvas cover generator (3000ms → 500ms), batch upload queue (30% success rate boost), improving team efficiency",
        "Proactively learned Cocos Creator, assisted game team with H5 playable ads, optimizing load time 40% through async resource loading",
      ],
    },
    {
      company: "Tongcheng Group",
      position: "Frontend Developer (Intern)",
      duration: "2023.12 - 2024.04",
      responsibilities: [
        "Developed Web/Hybrid frontend for finance and hotel B2B/B2C products, contributed to frontend engineering and company-wide component library",
      ],
    },
  ],
};
