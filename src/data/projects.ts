import { Project } from "@/types";

export const projectsData: Record<"zh" | "en", Project[]> = {
  zh: [
    {
      title: "天天爱掼蛋运营中台",
      time: "2025.07-至今",
      description:
        "游戏运营管理全栈系统（前端 + 后端 + AI BFF），支撑渠道配置、活动运营、比赛管理、客服系统、财务对账、AI 数据分析等核心业务，服务日活 40 万+ 用户",
      bulletPoints: [
        "前端（Vue3 + TS + TDesign）：封装 useTable/usePagination Hooks 和 CommonTable 配置化组件，大幅减少重复代码；RBAC 动态路由权限，路由懒加载和代码分割优化首屏；弹窗配置系统支持多场景触发规则和优先级控制",
        "后端（Spring Boot + MyBatis Plus + Redis）：责任链模式 + Redis 发布订阅实现多渠道配置热更新；Shiro + Redis 分布式会话支持水平扩展；EasyExcel 配置表导入解析、AOP 切面统一版本管理；CompletableFuture 并发处理多渠道 OSS 上传，发布接口耗时 30~60s → 1~3s（OSS 建连 100 次 → 2 次、消除 20 次冗余读取、渠道级并发限流 10，各阶段耗时日志可验证）",
        "AI BFF（Node.js + Hono + TS）：以 OpenAI 兼容协议代理大模型调用，baseURL / model 环境变量实现供应商零代码切换（Kimi / NVIDIA NIM / DeepSeek），API Key 只留在 BFF 侧；聚合后端日志与数仓数据组装分层 prompt，SSE 流式响应支撑自动归因分析、多轮追问与划选批注",
        "AI 辅助研发：用 Claude Code 承接重复度高的模块骨架生成（单个配置模块 = 后端 7 个文件 + 2 条 SQL、前端 4 个文件），并沉淀 AI 代码生成规范约束命名、接口路径与发布逻辑；配合文档先行流程（开发前查规范、落地后在 docs/ 产出设计文档）保证 AI 产出可维护",
        "MongoDB 配置对比工具（861行 Service）：多环境可视化对比，百万级牌库表采用 ObjectId 时间戳插值取中间样本（$gte O(log N) 替代 skip 的 O(N)），按 _id 排序确保主从副本一致；前端自研递归 diff 引擎，红绿橙三色高亮 + 变动优先排序，替代人工逐条检查",
        "财务结算与审计系统：CPS 多渠道分成结算（安卓/iOS 分开统计），自定义 @Log AOP 注解自动记录 9 种财务操作全链路审计，后端按用户角色的数据权限隔离（查询层过滤），EasyExcel 批量导入导出",
        "配置发布与游戏调试系统：状态机管理配置生命周期（新增→审核→发布→撤销），Redis Pub/Sub 秒级热更新（40+ Channel 覆盖全部运营模块），AOP 统一版本号管理；比赛管理系统支撑大规模多赛制运营，19 种操作类型全量审计",
      ],
      tags: [
        { text: "Vue3", color: "blue" },
        { text: "TypeScript", color: "blue" },
        { text: "Spring Boot", color: "green" },
        { text: "Node.js", color: "green" },
        { text: "Redis", color: "green" },
        { text: "MongoDB", color: "green" },
        { text: "EasyExcel", color: "green" },
        { text: "AOP", color: "green" },
        { text: "AI", color: "purple" },
        { text: "Claude Code", color: "purple" },
      ],
    },
    {
      title: "CyanbirdMedia 海外小说作者平台",
      time: "2024.05-2025.06",
      description:
        "海外小说作者平台，面向多国作者的 B 端创作与结算系统。负责小说管理、数据分析、收入结算、签约管理等核心模块，从需求评估到上线的全流程开发",
      bulletPoints: [
        "官网模块化开发：媒体查询响应式布局 + 语义化标签优化 SEO，图片懒加载与 requestAnimationFrame 动画减少主线程阻塞",
        "html2canvas + cropperjs 实现封面生成与图片裁剪：先用 performance.now() 分段埋点定位到渲染瓶颈，再通过收窄渲染区域 + 复用渲染上下文 + 拆分长任务（避免主线程长时间阻塞）优化，单次生成 3000ms → 500ms，埋点可复现",
        "海外税表 PDF 处理：pdf-lib 加载模板 + 动态字段填充（drawText），signature_pad 手写签名 toDataURL → embedPng → drawImage 叠加到指定坐标，全流程在浏览器端完成（敏感税务数据不出端），支持多国税表模板",
        "ECharts 数据可视化看板，实时展示作者收入趋势、阅读量分析；Lottie-web 等级升级动画提升用户参与度",
        "封装富文本编辑（Quill）、日期选择器、批量上传队列（p-queue 并发限制 10，避免打爆后端上传接口）等公共业务组件",
      ],
      tags: [
        { text: "Vue2", color: "blue" },
        { text: "Element UI", color: "blue" },
        { text: "ECharts", color: "blue" },
        { text: "html2canvas", color: "blue" },
        { text: "Lottie", color: "purple" },
      ],
    },
    {
      title: "Joylit Novel 海外小说官网",
      time: "2025.01-2025.04",
      description:
        "海外小说阅读平台官网，基于 Nuxt3 SSR 构建，主要流量来自 Google 自然搜索，兼顾跨设备响应式体验",
      bulletPoints: [
        "Nuxt3 + Tailwind CSS/Nitro 实现 SSR 服务端渲染 + nuxt build --prerender 预渲染，首屏直出 HTML，解决 SPA 内容不被搜索引擎索引的问题",
        "结构化数据（JSON-LD）：站点级注入 WebSite，书籍详情页注入 Book + aggregateRating（争取搜索结果富摘要），并通过 Google 富媒体测试工具校验；配合语义化标签与动态 sitemap 提升索引质量",
        "响应式设计支持桌面/平板/移动端（postcss-pxtorem rootValue 75 + flexible 等比适配），IntersectionObserver 实现图片懒加载和无限滚动",
        "书籍页 /book/[id] 与阅读器 /reader/[id]/[chapterid] 做 SSR + 预渲染，保证书籍内容直出且可被完整收录",
      ],
      tags: [
        { text: "Nuxt3", color: "blue" },
        { text: "Tailwind CSS", color: "blue" },
        { text: "SSR", color: "green" },
        { text: "SEO", color: "green" },
      ],
    },
    {
      title: "Hey Beauty 三消换装游戏试玩",
      time: "2024.08-2024.10",
      description:
        "协助游戏团队开发的三消换装小游戏试玩版本，用于市场投放和用户引流，支持多平台投放（Facebook/Google/TikTok）",
      bulletPoints: [
        "Cocos Creator + TypeScript 开发，动态棋盘生成算法支持自适应布局和关卡配置化；资源异步加载与分包策略降低加载耗时，预制体与 Tween 缓动动画提升操作反馈",
      ],
      tags: [
        { text: "Cocos Creator", color: "purple" },
        { text: "TypeScript", color: "blue" },
        { text: "游戏开发", color: "purple" },
      ],
    },
    {
      title: "其他项目经验",
      time: "2022-2024",
      description:
        "学生时期和实习期间的项目经验，涵盖深度学习、知识图谱、金融系统等领域",
      bulletPoints: [
        "保险审核多模态文本视觉问答系统（研究生毕业设计）：DBNet + CRNN + RoBERTa-wwm 融合模型，Vue3 + Flask 前后端",
        "军事领域知识图谱问答系统（服创大赛全国三等奖）：RoBERTa-wwm + Bi-LSTM + CRF，Vue3 + Neo4j",
        "同程借钱（金融业务）：React + Ant Design，授信/借款/还款模块开发",
        "AI 无人水果售货系统（研电赛上海市一等奖）：YOLOv5 + OpenCV，微信小程序 + Vue3",
      ],
      tags: [
        { text: "深度学习", color: "purple" },
        { text: "知识图谱", color: "purple" },
        { text: "React", color: "blue" },
        { text: "Flask", color: "green" },
      ],
    },
  ],
  en: [
    {
      title: "Guandan Game Full-Stack Operation Platform",
      time: "2025.07-Present",
      description:
        "Full-stack game operation system (Frontend + Backend + AI BFF) for channel config, events, tournaments, customer service, finance, and AI analytics. Serving 100K+ DAU.",
      bulletPoints: [
        "Frontend (Vue3 + TS + TDesign): useTable/usePagination Hooks and CommonTable config-driven components, significantly reducing code duplication; RBAC dynamic routing, lazy loading and code splitting for first-screen optimization; popup config system with multi-scenario triggers and priority control",
        "Backend (Spring Boot + MyBatis Plus + Redis): Chain of Responsibility + Redis pub/sub for multi-channel config hot updates; Shiro + Redis distributed session for horizontal scaling; EasyExcel config import, AOP-based version management; CompletableFuture-based concurrent multi-channel OSS upload, cutting publish latency from 30-60s to 1-3s (OSS connections 100 → 2, 20 redundant reads eliminated, per-channel concurrency capped at 10, verified by per-stage timing logs)",
        "AI BFF (Node.js + Hono + TS): proxies LLM calls over the OpenAI-compatible protocol with zero-code provider switching (Kimi / NVIDIA NIM / DeepSeek) via baseURL / model env vars, keeping API keys server-side only; assembles layered prompts from backend logs and warehouse data, with SSE streaming powering automated analysis, multi-turn Q&A, and text-selection annotations",
        "AI-Assisted Development: Used Claude Code to scaffold repetitive modules (each config module = 7 backend files + 2 SQL changes + 4 frontend files) and established AI code-generation conventions governing naming, API paths, and publish logic, backed by a docs-first workflow (check conventions before coding, write design docs under docs/ after shipping) so AI output stays maintainable",
        "MongoDB Config Compare (861-line Service): Multi-environment visual diff; million-row poker tables sampled via ObjectId timestamp interpolation ($gte O(log N) replacing skip's O(N)); _id-sorted queries ensure primary/replica consistency; self-built recursive diff engine with tri-color highlighting and diff-first sorting, replacing manual inspection",
        "Finance Settlement & Audit System: CPS multi-channel revenue split (Android/iOS separate), custom @Log AOP annotation for 9-type full-chain financial audit logging, backend role-based data isolation (query-layer filtering), EasyExcel batch import/export",
        "Config Publish & Game Debug System: State machine for config lifecycle (create→review→publish→revoke), Redis Pub/Sub second-level hot updates (40+ Channels covering all modules), AOP-based version management; tournament system supporting large-scale multi-format competitions, 19-type full audit logging",
      ],
      tags: [
        { text: "Vue3", color: "blue" },
        { text: "TypeScript", color: "blue" },
        { text: "Spring Boot", color: "green" },
        { text: "Node.js", color: "green" },
        { text: "Redis", color: "green" },
        { text: "MongoDB", color: "green" },
        { text: "EasyExcel", color: "green" },
        { text: "AOP", color: "green" },
        { text: "AI", color: "purple" },
        { text: "Claude Code", color: "purple" },
      ],
    },
    {
      title: "CyanbirdMedia Overseas Author Platform",
      time: "2024.05-2025.06",
      description:
        "Overseas novel author platform — a B2B author creation and settlement system for multiple countries. Owned full lifecycle from requirements to launch. Core modules: novel management, analytics, revenue, contracts.",
      bulletPoints: [
        "Modular website development: media-query responsive layout, semantic markup for SEO, image lazy loading and requestAnimationFrame animations to reduce main-thread blocking",
        "Cover generation and image cropping with html2canvas + cropperjs: used performance.now() instrumentation to locate the rendering bottleneck, then narrowed the render area, reused the rendering context, and split long tasks to avoid blocking the main thread — reducing generation time from 3000ms to 500ms (reproducible via the instrumentation)",
        "Overseas tax form PDF handling: pdf-lib for template loading and dynamic field filling (drawText); signature_pad handwriting converted via toDataURL → embedPng → drawImage onto precise coordinates — all client-side, so sensitive tax data never leaves the browser. Supports multi-country tax form templates",
        "ECharts dashboards for real-time revenue trends and reading analytics; Lottie-web level-up animations boosting engagement",
        "Reusable components: Quill rich-text editor, date picker, batch upload queue (p-queue with concurrency capped at 10 to avoid overwhelming the upload API)",
      ],
      tags: [
        { text: "Vue2", color: "blue" },
        { text: "Element UI", color: "blue" },
        { text: "ECharts", color: "blue" },
        { text: "html2canvas", color: "blue" },
        { text: "Lottie", color: "purple" },
      ],
    },
    {
      title: "Joylit Novel Overseas Reading Platform",
      time: "2025.01-2025.04",
      description:
        "Overseas novel reading platform official website built with Nuxt3 SSR, where organic Google search is the primary traffic source, with cross-device responsive experience.",
      bulletPoints: [
        "Nuxt3 + Tailwind CSS/Nitro with SSR and nuxt build --prerender, so the first screen ships real HTML — solving the problem of SPA content not being indexed by search engines",
        "Structured data (JSON-LD): WebSite at the site level, and Book + aggregateRating on book detail pages to earn rich results, validated with Google's Rich Results Test; paired with semantic markup and a dynamic sitemap for better indexing",
        "Responsive design for desktop/tablet/mobile (postcss-pxtorem at rootValue 75 + flexible scaling); IntersectionObserver for image lazy loading and infinite scroll",
        "Book page /book/[id] and reader /reader/[id]/[chapterid] rendered with SSR + prerendering so book content is fully crawlable",
      ],
      tags: [
        { text: "Nuxt3", color: "blue" },
        { text: "Tailwind CSS", color: "blue" },
        { text: "SSR", color: "green" },
        { text: "SEO", color: "green" },
      ],
    },
    {
      title: "Hey Beauty Match-3 Game Playable",
      time: "2024.08-2024.10",
      description:
        "Match-3 dress-up playable built in support of the game team, used for marketing campaigns and user acquisition across Facebook/Google/TikTok.",
      bulletPoints: [
        "Built with Cocos Creator + TypeScript; dynamic board generation algorithm for adaptive layout and configurable levels; async resource loading and subpackaging to cut load time, with prefabs and Tween animations for responsive feedback",
      ],
      tags: [
        { text: "Cocos Creator", color: "purple" },
        { text: "TypeScript", color: "blue" },
        { text: "Game Dev", color: "purple" },
      ],
    },
    {
      title: "Other Project Experience",
      time: "2022-2024",
      description:
        "Academic and internship projects covering deep learning, knowledge graphs, and fintech.",
      bulletPoints: [
        "Insurance Review VQA System (Master's Thesis): DBNet + CRNN + RoBERTa-wwm, Vue3 + Flask",
        "Military Knowledge Graph QA (National 3rd Prize): RoBERTa-wwm + Bi-LSTM + CRF, Vue3 + Neo4j",
        "Tongcheng Loan Service (Fintech): React + Ant Design, credit/borrowing/repayment modules",
        "AI Fruit Vending System (Shanghai 1st Prize): YOLOv5 + OpenCV, WeChat Mini Program + Vue3",
      ],
      tags: [
        { text: "Deep Learning", color: "purple" },
        { text: "Knowledge Graph", color: "purple" },
        { text: "React", color: "blue" },
        { text: "Flask", color: "green" },
      ],
    },
  ],
};
