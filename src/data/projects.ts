import { Project } from "@/types";

export const projectsData: Record<"zh" | "en", Project[]> = {
  zh: [
    {
      title: "天天爱掼蛋运营中台",
      time: "2025.07-至今",
      description:
        "游戏运营管理全栈系统（前端 + 后端 + AI BFF），支撑渠道配置、活动运营、比赛管理、客服系统、财务对账、AI 数据分析等核心业务，服务日活 40 万+ 用户",
      bulletPoints: [
        "前端（Vue3 + TS + TDesign）：封装 Axios 请求层和 useTable/usePagination Hooks，CommonTable 配置化组件减少 70% 重复代码；RBAC 动态路由权限系统，路由懒加载优化首屏加载 40%",
        "后端（Spring Boot + MyBatis Plus + Redis）：责任链模式处理多渠道配置发布，Redis 发布订阅 + OSS 双通道实现配置热更新；Shiro + Redis 分布式会话，分批处理策略避免 OOM",
        "AI BFF（Node.js + Hono + TS）：代理多模型 API（Kimi/NVIDIA/OpenAI）流式调用，通过环境变量零代码切换；聚合后端数据组装 prompt，SSE 流式响应实现实时 AI 分析、对话追问、智能报告生成",
        "AI 驱动开发：使用 Claude Code + Spec 驱动开发，建立 AI 辅助开发规范（自定义 Skills、MCP 集成），开发效率提升 3 倍+，代码质量和可维护性显著提高",
        "业务亮点：弹窗配置系统提升转化率 15%；比赛管理系统支撑日均 1000+ 场比赛；AI 对话式数据分析提升运营决策效率 50%；系统支持 5000+ QPS，缓存命中率 > 95%",
      ],
      tags: [
        { text: "Vue3", color: "blue" },
        { text: "TypeScript", color: "blue" },
        { text: "Spring Boot", color: "green" },
        { text: "Node.js", color: "green" },
        { text: "Redis", color: "green" },
        { text: "AI", color: "purple" },
        { text: "Claude Code", color: "purple" },
      ],
    },
    {
      title: "CyanbirdMedia 海外小说作者平台",
      time: "2024.05-2025.06",
      description:
        "海外小说作者平台，服务 10000+ 作者，覆盖 150+ 国家。负责小说管理、数据分析、收入结算、签约管理等核心模块",
      bulletPoints: [
        "模块化开发官网，媒体查询响应式布局，语义化标签优化 SEO，懒加载和 RAF 性能优化",
        "html2canvas + 原生事件实现封面生成，优化渲染从 3000ms 降至 500ms，用户生成封面转化率提升 40%",
        "海外税表 PDF 解析和电子签名功能，对接 IRS 税务系统，提升审核效率 40%，支持多国税表自动识别",
        "ECharts 数据可视化看板，实时展示作者收入趋势、阅读量分析；Lottie-web 等级升级动画提升用户参与度",
      ],
      tags: [
        { text: "Vue2", color: "blue" },
        { text: "Element UI", color: "blue" },
        { text: "html2canvas", color: "blue" },
        { text: "ECharts", color: "blue" },
      ],
    },
    {
      title: "Joylit Novel 海外小说阅读平台",
      time: "2025.01-2025.04",
      description:
        "海外小说阅读平台官网，注重 Google SEO 优化和跨设备响应式体验，首月获得 50000+ 活跃用户",
      bulletPoints: [
        "Nuxt.js + Tailwind CSS 实现 SSR 服务端渲染，首屏加载时间 < 1.5s，Google PageSpeed 评分 90+",
        "语义化标签 + 结构化数据（JSON-LD）+ 动态 sitemap 优化 SEO，有机流量增长 40%，关键词排名前 3 页占比 60%+",
        "响应式设计支持桌面/平板/移动端，使用 IntersectionObserver 实现图片懒加载和无限滚动，内存占用降低 50%",
      ],
      tags: [
        { text: "Nuxt.js", color: "blue" },
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
        "Frontend (Vue3 + TS + TDesign): Axios layer with interceptors; useTable/usePagination Hooks and CommonTable reducing 70% code; RBAC dynamic routing, lazy loading for 40% FCP improvement",
        "Backend (Spring Boot + MyBatis Plus + Redis): Chain of Responsibility for multi-channel config; Redis pub/sub + OSS hot updates; Shiro + Redis distributed session, batch processing to prevent OOM",
        "AI BFF (Node.js + Hono + TS): Proxy multi-model APIs (Kimi/NVIDIA/OpenAI) with zero-code switching via env vars; aggregate backend data for prompt assembly; SSE streaming for real-time AI analytics, chat follow-ups, and auto-report generation",
        "AI-Driven Development: Leveraging Claude Code + Spec-driven approach, establishing AI-assisted development standards (custom Skills, MCP integration), 3x+ efficiency boost with improved code quality and maintainability",
        "Business Impact: Popup config improved conversion 15%; Tournament system supports 1000+ daily matches; AI conversational analytics boosts operational decisions 50%; 5000+ QPS, 95%+ cache hit rate",
      ],
      tags: [
        { text: "Vue3", color: "blue" },
        { text: "TypeScript", color: "blue" },
        { text: "Spring Boot", color: "green" },
        { text: "Node.js", color: "green" },
        { text: "Redis", color: "green" },
        { text: "AI", color: "purple" },
        { text: "Claude Code", color: "purple" },
      ],
    },
    {
      title: "CyanbirdMedia Overseas Author Platform",
      time: "2024.05-2025.06",
      description:
        "Overseas novel author platform serving 10,000+ authors from 150+ countries. Core modules: novel management, analytics, revenue, contracts.",
      bulletPoints: [
        "Modular website with responsive design, semantic HTML for SEO, lazy loading and RAF optimizations",
        "html2canvas cover generator optimized from 3000ms to 500ms, increasing user cover generation conversion 40%",
        "Tax form PDF parsing and e-signature integration with IRS system, 40% efficiency improvement, supporting multi-country tax forms",
        "ECharts visualization dashboard for real-time revenue trends and reading analytics; Lottie-web level-up animations boosting engagement",
      ],
      tags: [
        { text: "Vue2", color: "blue" },
        { text: "Element UI", color: "blue" },
        { text: "html2canvas", color: "blue" },
        { text: "ECharts", color: "blue" },
      ],
    },
    {
      title: "Joylit Novel Overseas Reading Platform",
      time: "2025.01-2025.04",
      description:
        "Overseas novel reading platform focused on Google SEO and responsive design, achieving 50,000+ active users in first month.",
      bulletPoints: [
        "Nuxt.js + Tailwind CSS SSR with FCP < 1.5s, Google PageSpeed score 90+",
        "Semantic HTML + structured data (JSON-LD) + dynamic sitemap for SEO, 40% organic traffic growth, 60%+ keywords ranking in top 3 pages",
        "Responsive design for desktop/tablet/mobile; IntersectionObserver for lazy loading and infinite scroll, reducing memory usage 50%",
      ],
      tags: [
        { text: "Nuxt.js", color: "blue" },
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
