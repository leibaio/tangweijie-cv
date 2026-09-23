export const skillsData = {
  zh: [
    // AI 能力（重点突出）
    "⭐ AI 应用开发：独立设计并落地 AI 数据分析助手（Vue3 + Node.js/Hono BFF + Java + 大模型 + ThinkingData 数仓），打通「发布操作日志 → 自动归因分析 → 多轮追问 → 划选批注」完整闭环；BFF 不直连数据库，作为纯中间层编排 Java 接口、数仓 SQL 与大模型调用",
    "大模型工程：以 OpenAI 兼容协议接入大模型，通过 baseURL / model / apiKey 环境变量实现供应商零代码切换（DeepSeek / Kimi / NVIDIA NIM）；双调用编排（chatOnce 生成 ≤300 字摘要 + streamChat 流式输出完整报告）；Prompt 分层组装（系统提示 + 日志快照 + 统计分布 + 数仓数据表 + 用户补充）；用 [ACTION:{...}] 文本协议让模型驱动前端表格的显隐与按需查询，规避 function calling 的多供应商适配成本",
    "流式链路与稳定性：手写 SSE 全链路——服务端 ReadableStream + TextEncoder 分帧、置 X-Accel-Buffering: no 绕过 Nginx 缓冲，前端 fetch + getReader + TextDecoder 增量解析并支持 AbortController 主动中断；按 IP 分路由限流（analyze 10 次/分钟，chat / comment 20 次/分钟）与报表级并发互斥；数仓查询侧实现熔断（连续 5 次失败熔断 30s）+ 请求串行化 + 600ms 冷却，避免第三方数仓限流",
    "AI 辅助研发：深度使用 Claude Code，熟练运用 Skills 工作流（tdd 测试驱动、diagnose 系统化调试、grill-me 设计审问、to-prd / to-issues 需求拆解）；主导沉淀 AI 代码生成规范（约定新模块的后端文件清单与 SQL 变更清单）与文档先行流程，由 AI 生成骨架、人工负责校验与取舍",
    "前端工程化：熟练掌握 Vue 2/3 全家桶、React（Hooks），TypeScript/ES6+；熟悉 Vite/Webpack 构建优化（Tree Shaking、代码分割、懒加载），具备 Webpack → Vite 迁移实践（@vitejs/plugin-vue2、vite-plugin-commonjs、rollup-plugin-require-context），ESLint + Prettier + Husky 工程化规范",
    "全栈开发：熟悉 Node.js BFF（Express/Hono）和 Spring Boot 后端开发，熟悉 MySQL/MongoDB 数据库设计、Redis 缓存及 RESTful API 开发，能够独立完成中小型项目开发",
    "SSR 与 SEO：熟悉 Nuxt3/Next.js 服务端渲染与预渲染，SEO 优化（JSON-LD 结构化数据、语义化标签、动态 sitemap），Core Web Vitals（LCP/INP/CLS）首屏性能优化",
    "性能调优：深入理解浏览器渲染原理、事件循环、异步编程；熟悉常见前端性能优化方案（懒加载/缓存/CDN）",
    "UI 框架：熟练使用 Element UI、TDesign、Ant Design、Tailwind 等，具备组件封装和主题定制经验"
  ],
  en: [
  // AI Capabilities
  "⭐ AI Application Development: Independently designed and shipped an AI data-analysis assistant (Vue3 + Node.js/Hono BFF + Java + LLM + ThinkingData warehouse), covering the full loop from publish-operation logs to automated root-cause analysis, follow-up Q&A, and text-selection annotations; the BFF holds no database and acts purely as a middle layer orchestrating Java APIs, warehouse SQL, and LLM calls",

  // LLM Engineering
  "LLM Engineering: Integrated LLMs over the OpenAI-compatible protocol with zero-code provider switching (DeepSeek / Kimi / NVIDIA NIM) via baseURL / model / apiKey environment variables; dual-call orchestration (chatOnce for a ≤300-character summary plus streamChat for the full streamed report); layered prompt assembly (system prompt + log snapshots + statistics + warehouse tables + user notes); a text-based [ACTION:{...}] protocol that lets the model drive table visibility and on-demand queries, avoiding the multi-vendor cost of function calling",

  // Streaming Pipeline & Resilience
  "Streaming Pipeline & Resilience: Hand-written SSE on both ends — server-side ReadableStream + TextEncoder framing with X-Accel-Buffering: no to bypass Nginx buffering, and client-side fetch + getReader + TextDecoder incremental parsing with AbortController cancellation; per-IP, per-route rate limiting (analyze 10/min; chat and comment 20/min) and per-report concurrency locking; circuit breaking around warehouse queries (opens for 30s after 5 consecutive failures) with request serialization and a 600ms cooldown to stay within third-party limits",

  // AI-Assisted Engineering
  "AI-Assisted Engineering: Heavy Claude Code user with working command of its Skills workflows (TDD, systematic diagnosis, design grilling, breaking requirements into PRDs and vertical slices); led the creation of AI code-generation conventions defining the per-module file and SQL checklist plus a docs-first workflow, letting AI scaffold while humans review and decide trade-offs",

  // Frontend Engineering
  "Frontend Engineering: Proficient in Vue 2/3 ecosystem and React (Hooks), with solid TypeScript/ES6+ skills. Familiar with Vite/Webpack optimization including Tree Shaking, code splitting, and lazy loading, with hands-on Webpack-to-Vite migration experience (@vitejs/plugin-vue2, vite-plugin-commonjs, rollup-plugin-require-context), along with ESLint + Prettier + Husky engineering practices",

  // Full Stack
  "Full-Stack Development: Familiar with Node.js BFF architecture (Express/Hono) and Spring Boot backend development, including MySQL/MongoDB database design, Redis caching, and RESTful API development; capable of independently completing small-to-medium projects",

  // SSR & SEO
  "SSR & SEO: Familiar with Nuxt3 and Next.js server-side rendering and prerendering, SEO optimization (JSON-LD structured data, semantic markup, dynamic sitemap), and Core Web Vitals (LCP/INP/CLS) optimization",

  // Performance
  "Performance Optimization: Good understanding of browser rendering, event loop, and asynchronous programming. Familiar with common frontend optimization strategies such as lazy loading, caching, and CDN usage",

  // UI Frameworks
  "UI Frameworks: Proficient in Element UI, TDesign, Ant Design, and Tailwind CSS, with experience in component encapsulation and theme customization"
]
};
