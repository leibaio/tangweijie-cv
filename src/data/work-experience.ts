import { WorkExperience } from "@/types";

export const workExperienceData: Record<"zh" | "en", WorkExperience[]> = {
  zh: [
    {
      company: "姚记科技",
      position: "同花工作室-全栈开发工程师",
      duration: "2025.07 - 至今",
      responsibilities: [
        "全栈负责天天爱掼蛋运营管理系统（前端 Vue3 + 后端 Spring Boot + AI BFF Node.js），系统包含权限管理、渠道配置、比赛管理、客服系统等 11 个核心模块，支撑日活 40 万+ 用户的游戏运营",

        "架构设计：前后端分离架构，后端采用多模块分层（web/service/dal/model）实现业务解耦；引入 BFF 中间层代理 AI 服务，通过 SSE 流式响应支撑智能数据分析（自动归因、多轮追问、划选批注）",

        "核心功能：①基于 RBAC 的动态路由权限系统（菜单+按钮+API 三级控制）②多渠道配置发布系统（责任链模式 + Redis 发布订阅实现配置热更新）③弹窗配置系统（多场景触发规则和优先级控制）④比赛管理系统（支撑大规模多赛制运营）",

        "技术优化：封装 useTable、usePagination 等通用 Hooks 和 CommonTable 配置化组件，大幅减少重复代码；路由懒加载和代码分割优化首屏加载；分批处理策略避免大批量发布 OOM",

        "AI 能力落地：主导 AI 数据分析助手的 BFF 中间层设计（Node.js + Hono + TypeScript），用 OpenAI 兼容协议统一接入大模型，baseURL / model 环境变量实现供应商零代码切换（Kimi / NVIDIA NIM / DeepSeek）；API Key 只存在于 BFF 侧，前端不接触模型凭证；流式链路覆盖自动报告、多轮追问、划选批注三类场景（SSE 流式输出 + 按 IP 限流 + 数仓查询熔断）；同步沉淀 AI 代码生成规范，把重复的模块骨架交给 AI 生成后人工校验",
      ],
    },
    {
      company: "上海触宝信息技术有限公司",
      position: "商业与技术中台-前端开发工程师",
      duration: "2024.05 - 2025.06",
      responsibilities: [
        "负责多个海外业务项目（cyanbird、hugo_admin、joylit_official、readictnovel）前端从需求评估到上线的全流程，C 端（官网 / 作者平台）与 B 端（运营后台）均覆盖",
        "Cyanbird 作者平台：html2canvas 封面生成性能优化（performance.now() 分段埋点定位渲染瓶颈，3000ms→500ms）、税表 PDF 处理与电子签名（pdf-lib + signature_pad，全流程浏览器端完成）、Quill 富文本编辑器、ECharts 数据看板",
        "Joylit 官网：Nuxt3 SSR + 预渲染 + Tailwind CSS，首屏直出 HTML 解决 SPA 索引问题；JSON-LD 结构化数据（WebSite / Book + aggregateRating）+ 动态 sitemap 优化 Google 索引质量",
        "Hugo Admin 内部平台：主导构建体系从 vue-cli/Webpack 迁移到 Vite（@vitejs/plugin-vue2 + vite-plugin-commonjs + rollup-plugin-require-context + vite-plugin-svg-icons）；Quill 富文本、批量上传队列（p-queue 并发 10）、ECharts 数据看板；多部门协作（产品/编辑/法务/财务）",
        "封装 html2canvas 封面生成、批量上传队列等公共业务组件供各业务模块复用；协助游戏团队以 Cocos Creator + TypeScript 开发休闲游戏",
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

        "Architecture: Frontend-backend separation with multi-module layering (web/service/dal/model); a BFF layer proxies the AI service over SSE streaming to power intelligent analytics (automated analysis, multi-turn Q&A, text-selection annotations)",

        "Core Features: ①RBAC dynamic routing (menu+button+API access control) ②Multi-channel config publishing (Chain of Responsibility + Redis pub/sub for hot updates) ③Popup config (multi-scenario triggers with priority control) ④Tournament system (large-scale multi-format competition management)",

        "Tech Optimization: Reusable Hooks (useTable, usePagination) and CommonTable, significantly reducing code duplication; lazy loading and code splitting for first-screen optimization; batch processing to prevent OOM",

        "AI Delivery: Owned the BFF middle-layer design (Node.js + Hono + TypeScript) for the AI data-analysis assistant, unifying LLM access over the OpenAI-compatible protocol with zero-code provider switching (Kimi / NVIDIA NIM / DeepSeek) via baseURL / model env vars; API keys live only on the BFF side so the frontend never touches model credentials; the streaming pipeline covers auto-generated reports, multi-turn Q&A, and text-selection annotations (SSE streaming + per-IP rate limiting + circuit breaking around warehouse queries); also established AI code-generation conventions so repetitive module scaffolding is AI-generated and human-reviewed",
      ],
    },
    {
      company: "Shanghai Chubao Information Technology",
      position: "Frontend Developer",
      duration: "2024.05 - 2025.06",
      responsibilities: [
        "Owned multiple overseas projects (cyanbird, hugo_admin, joylit_official, readictnovel) end to end, from requirement assessment to launch, covering both consumer-facing and internal apps",
        "Cyanbird Author Platform: html2canvas cover generation optimized via performance.now() instrumentation to locate the rendering bottleneck (3000ms → 500ms); tax form PDF handling and e-signature (pdf-lib + signature_pad, entirely client-side); Quill rich-text editor; ECharts dashboards",
        "Joylit Official Website: Nuxt3 SSR + prerendering + Tailwind CSS, shipping real HTML on the first screen to fix SPA indexing; JSON-LD structured data (WebSite / Book + aggregateRating) and a dynamic sitemap to improve Google indexing quality",
        "Hugo Admin Internal Platform: led the build-system migration from vue-cli/Webpack to Vite (@vitejs/plugin-vue2 + vite-plugin-commonjs + rollup-plugin-require-context + vite-plugin-svg-icons); Quill rich-text, batch upload queue (p-queue, concurrency 10), ECharts dashboards; cross-department collaboration (Product/Editorial/Legal/Finance)",
        "Encapsulated reusable components (html2canvas cover generation, batch upload queue) shared across business modules; assisted the game team with casual game development in Cocos Creator + TypeScript",
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
