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
        "后端（Spring Boot + MyBatis Plus + Redis）：责任链模式 + Redis 发布订阅实现多渠道配置热更新；Shiro + Redis 分布式会话支持水平扩展；EasyExcel 配置表导入解析、AOP 切面统一版本管理；CompletableFuture 并发处理多渠道 OSS 上传，发布耗时降低 60%+；",
        "AI BFF（Node.js + Hono + TS）：代理多模型 API（Kimi/NVIDIA/OpenAI）流式调用，环境变量零代码切换；聚合后端数据组装 prompt，SSE 流式响应实现实时分析、对话追问、智能报告生成",
        "AI 驱动开发：Claude Code + Spec 驱动开发，自定义 Skills 和 MCP 集成建立开发规范，开发效率显著提升",
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
        "海外小说作者平台，服务 10000+ 作者，覆盖 150+ 国家。负责小说管理、数据分析、收入结算、签约管理等核心模块，从需求评估到上线的全流程开发",
      bulletPoints: [
        "模块化开发官网，媒体查询响应式布局，语义化标签优化 SEO，懒加载和 RAF 动画优化，用户体验提升显著",
        "html2canvas + cropperjs 实现封面生成和图片裁剪，优化渲染从 3000ms 降至 500ms，用户生成封面转化率提升 40%",
        "海外税表 PDF 解析（pdf-lib）和电子签名（signature_pad），对接 IRS 税务系统，提升审核效率 40%，支持多国税表自动识别",
        "ECharts 数据可视化看板，实时展示作者收入趋势、阅读量分析；Lottie-web 等级升级动画提升用户参与度和留存",
        "富文本编辑（Quill）、日期选择器、批量上传队列（p-queue，成功率提升 30%）等业务组件封装，提升团队开发效率",
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
        "海外小说阅读平台官网，基于 Nuxt3 SSR 构建，注重 Google SEO 优化和跨设备响应式体验，首月获得 50000+ 活跃用户",
      bulletPoints: [
        "Nuxt3 + Tailwind CSS 实现 SSR 服务端渲染，首屏加载时间 < 1.5s，Google PageSpeed 评分 90+",
        "语义化标签 + 结构化数据（JSON-LD）+ 动态 sitemap 优化 SEO，有机流量增长 40%，关键词排名前 3 页占比 60%+",
        "响应式设计支持桌面/平板/移动端（mobile-first），使用 IntersectionObserver 实现图片懒加载和无限滚动，内存占用降低 50%",
        "作者页面 /book/[id] 和阅读器 /reader/[id]/[chapterid] 实现 SSR 优化，书籍信息完整收录，提升搜索排名",
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
        "三消换装小游戏试玩版本，用于市场投放和用户引流，支持多平台投放（Facebook/Google/TikTok）",
      bulletPoints: [
        "Cocos Creator + TypeScript 开发，动态棋盘生成算法支持自适应布局和关卡配置化",
        "预制体和引导动画制作，Tween 缓动动画提升操作反馈；资源异步加载和分包策略，加载时间从 5s 降至 3s",
        "试玩广告点击率（CTR）4.5%，转化率（CVR）12%，显著高于行业平均水平（CTR 2-3%, CVR 5-8%）",
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
        "Backend (Spring Boot + MyBatis Plus + Redis): Chain of Responsibility + Redis pub/sub for multi-channel config hot updates; Shiro + Redis distributed session for horizontal scaling; EasyExcel config import, AOP-based version management",
        "AI BFF (Node.js + Hono + TS): Proxy multi-model APIs (Kimi/NVIDIA/OpenAI) with zero-code switching via env vars; aggregate backend data for prompt assembly; SSE streaming for real-time analytics, chat follow-ups, and auto-report generation",
        "AI-Driven Development: Claude Code + Spec-driven approach, custom Skills and MCP integration for development standards, significantly boosting development efficiency",
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
        "Overseas novel author platform serving 10,000+ authors from 150+ countries. Owned full lifecycle from requirements to launch. Core modules: novel management, analytics, revenue, contracts.",
      bulletPoints: [
        "Modular website with responsive design, semantic HTML for SEO, lazy loading and RAF animations for improved UX",
        "html2canvas + cropperjs for cover generation and image cropping, optimized from 3000ms to 500ms, 40% conversion rate improvement for user cover generation",
        "Tax form PDF parsing (pdf-lib) and e-signature (signature_pad) integration with IRS system, 40% audit efficiency improvement, multi-country tax form support",
        "ECharts visualization dashboard for real-time revenue trends and reading analytics; Lottie-web level-up animations boosting engagement and retention",
        "Reusable components: Quill editor, date picker, batch upload queue (p-queue with 30% success rate improvement), improving team development efficiency",
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
        "Overseas novel reading platform official website built with Nuxt3 SSR, focused on Google SEO and responsive design, achieving 50,000+ active users in first month.",
      bulletPoints: [
        "Nuxt3 + Tailwind CSS SSR with FCP < 1.5s, Google PageSpeed score 90+",
        "Semantic HTML + structured data (JSON-LD) + dynamic sitemap for SEO, 40% organic traffic growth, 60%+ keywords ranking in top 3 pages",
        "Responsive design for desktop/tablet/mobile (mobile-first); IntersectionObserver for lazy loading and infinite scroll, reducing memory usage 50%",
        "Author page /book/[id] and reader /reader/[id]/[chapterid] with SSR optimization, full indexing of book info for improved search ranking",
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
        "Match-3 dress-up game playable for marketing campaigns, supporting multi-platform distribution (Facebook/Google/TikTok).",
      bulletPoints: [
        "Cocos Creator + TypeScript with dynamic board generation algorithm for adaptive layout and configurable levels",
        "Prefabs and tutorial animations; Tween animations for feedback; async resource loading and subpackage strategy reducing load time from 5s to 3s",
        "Playable ad CTR 4.5%, CVR 12%, significantly higher than industry average (CTR 2-3%, CVR 5-8%)",
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
