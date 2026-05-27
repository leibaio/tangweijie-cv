import { WorkExperience } from "@/types";

export const workExperienceData: Record<"zh" | "en", WorkExperience[]> = {
  zh: [
    {
      company: "姚记科技",
      position: "同花工作室-全栈开发工程师",
      duration: "2025.07 - 至今",
      responsibilities: [
        "全栈负责天天爱掼蛋运营管理系统（前端 Vue3 + 后端 Spring Boot + AI BFF Node.js），系统包含权限管理、渠道配置、比赛管理、客服系统等 11 个核心模块，支撑日活 40 万+ 用户的游戏运营",

        "架构设计：前后端分离架构，后端采用多模块分层（web/service/dal/model）实现业务解耦；引入 BFF 中间层代理 AI 服务，通过 SSE 流式响应支持智能数据分析，显著提升运营决策效率",

        "核心功能：①基于 RBAC 的动态路由权限系统（菜单+按钮+API 三级控制）②多渠道配置发布系统（责任链模式 + Redis 发布订阅实现配置热更新）③弹窗配置系统（多场景触发规则和优先级控制）④比赛管理系统（支撑大规模多赛制运营）",

        "技术优化：封装 useTable、usePagination 等通用 Hooks 和 CommonTable 配置化组件，大幅减少重复代码；路由懒加载和代码分割优化首屏加载；分批处理策略避免大批量发布 OOM",

        "AI 集成：基于 Node.js + Hono 构建 AI BFF 中间层，支持多模型切换（Kimi/NVIDIA/OpenAI），通过环境变量零代码切换；实现流式对话分析、自动生成运营报告等功能，保护 API Key 安全；使用 Claude Code + Spec 驱动开发，开发效率显著提升",
      ],
    },
    {
      company: "上海触宝信息技术有限公司",
      position: "商业与技术中台-前端开发工程师",
      duration: "2024.05 - 2025.06",
      responsibilities: [
        "负责多个海外业务项目（cyanbird、hugo_admin、joylit_official、readictnovel）前端从需求评估到上线的全流程，服务 10000+ 作者和 50000+ 月活用户",
        "Cyanbird 作者平台：html2canvas 封面生成（3000ms→500ms）、PDF 解析、电子签名、RichEdit 编辑器、ECharts 可视化，收入转化提升 40%",
        "Joylit 官网：Nuxt3 SSR + Tailwind CSS + JSON-LD SEO 优化，有机流量增长 40%，PageSpeed 90+，首月 50000+ 活跃用户",
        "Hugo Admin 内部平台：Quill 富文本、批量上传队列（p-queue 成功率 30%+）、ECharts 数据看板，多部门协作（产品/编辑/法务/财务）",
        "主导前端架构优化，封装 html2canvas、批量上传队列等公共业务组件，提升团队开发效率 30%+；协助游戏团队 Cocos Creator 开发",
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

        "Architecture: Frontend-backend separation with multi-module layering (web/service/dal/model); BFF layer proxies AI service with SSE streaming for intelligent analytics, significantly boosting operational decision efficiency",

        "Core Features: ①RBAC dynamic routing (menu+button+API access control) ②Multi-channel config publishing (Chain of Responsibility + Redis pub/sub for hot updates) ③Popup config (multi-scenario triggers with priority control) ④Tournament system (large-scale multi-format competition management)",

        "Tech Optimization: Reusable Hooks (useTable, usePagination) and CommonTable, significantly reducing code duplication; lazy loading and code splitting for first-screen optimization; batch processing to prevent OOM",

        "AI Integration: Built AI BFF with Node.js + Hono, supporting multi-model switching (Kimi/NVIDIA/OpenAI) via env vars with zero code changes; integrated for streaming chat analytics and auto-generated reports, securing API keys; Claude Code + Spec-driven development significantly boosting efficiency",
      ],
    },
    {
      company: "Shanghai Chubao Information Technology",
      position: "Frontend Developer",
      duration: "2024.05 - 2025.06",
      responsibilities: [
        "Full-stack ownership of multiple overseas business projects (cyanbird, hugo_admin, joylit_official, readictnovel) from requirements to launch, serving 10,000+ authors and 50,000+ MAU",
        "Cyanbird Author Platform: html2canvas cover generation (3000ms→500ms), PDF parsing, e-signature, RichEdit editor, ECharts visualization, 40% revenue conversion improvement",
        "Joylit Official Website: Nuxt3 SSR + Tailwind CSS + JSON-LD SEO, 40% organic traffic growth, PageSpeed 90+, 50,000+ MAU in first month",
        "Hugo Admin Internal Platform: Quill RichEdit, batch upload queue (p-queue 30%+ success rate), ECharts dashboard, multi-department collaboration (Product/Editorial/Legal/Finance)",
        "Led frontend architecture optimization, encapsulating html2canvas, batch upload queue and other reusable components, boosting team efficiency 30%+; assisted game team with Cocos Creator",
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
