import { Project } from "@/types";

export const projectsData: Record<"zh" | "en", Project[]> = {
  zh: [
    {
      title: "天天爱掼蛋后台管理系统",
      time: "2025.07-至今",
      description:
        "游戏运营后台管理系统，支撑渠道配置、活动运营、比赛管理、兑换码、公告推送、客服系统、财务对账、BI 报表等核心业务，支撑日活 10 万+ 用户",
      bulletPoints: [
        "前端：封装 Axios 请求层，实现拦截、转换、错误处理、节流防抖；封装 useTable、usePagination 等 Hooks 和 CommonTable 配置化组件，减少 70% 重复代码",
        "前端：实现 RBAC 动态路由权限系统，支持菜单和按钮级权限；路由懒加载、代码分割等优化，首屏加载优化 40%",
        "后端：责任链模式处理多渠道配置发布，Redis 发布订阅 + OSS 双通道实现配置热更新",
        "后端：Shiro + Redis 分布式会话和权限控制；分批处理策略优化批量发布避免 OOM",
        "业务：弹窗配置系统提升转化率 15%；比赛管理系统支撑日均 1000+ 场比赛",
      ],
      tags: [
        { text: "Vue3", color: "blue" },
        { text: "TypeScript", color: "blue" },
        { text: "TDesign", color: "blue" },
        { text: "Spring Boot", color: "green" },
        { text: "Redis", color: "green" },
      ],
    },
    {
      title: "CyanbirdMedia 海外小说作者平台",
      time: "2024.05-2025.06",
      description:
        "海外小说作者平台，服务 10000+ 作者，覆盖 150+ 国家。负责小说管理、数据分析、收入结算、签约管理等核心模块",
      bulletPoints: [
        "模块化开发官网，媒体查询响应式布局，语义化标签优化 SEO，懒加载和 RAF 性能优化",
        "html2canvas + 原生事件实现封面生成，优化渲染从 3000ms 降至 500ms",
        "海外税表 PDF 解析和电子签名，提升审核效率 40%",
        "ECharts 数据可视化，Lottie-web 等级动画",
      ],
      tags: [
        { text: "Vue2", color: "blue" },
        { text: "Element UI", color: "blue" },
        { text: "html2canvas", color: "blue" },
        { text: "ECharts", color: "blue" },
      ],
    },
    {
      title: "Hugo 内部小说管理平台",
      time: "2024.05-2025.06",
      description:
        "内部小说管理平台，管理作者信息、UGC 内容、书籍章节、签约付款，服务产品、编辑、法务、财务等多部门",
      bulletPoints: [
        "原生 Date API 封装字数日历组件；图库批量上传队列控制，成功率提升 30%",
        "Quill 富文本编辑器集成；封装图片预览、文件上传、代码差异对比等组件",
      ],
      tags: [
        { text: "Vue2", color: "blue" },
        { text: "p-queue", color: "blue" },
        { text: "Quill", color: "blue" },
      ],
    },
    {
      title: "Joylit Novel 海外小说阅读平台",
      time: "2025.01-2025.04",
      description:
        "海外小说阅读平台官网，注重 Google SEO 优化和跨设备响应式体验",
      bulletPoints: [
        "Nuxt.js + Tailwind CSS 实现 SSR，有机流量增长 40%",
        "响应式设计确保多端一致体验，首月 50000+ 活跃用户",
      ],
      tags: [
        { text: "Nuxt.js", color: "blue" },
        { text: "Tailwind CSS", color: "blue" },
        { text: "SSR", color: "green" },
      ],
    },
    {
      title: "Hey Beauty 游戏试玩",
      time: "2024.08-2024.10",
      description:
        "三消换装小游戏试玩版本，用于市场投放和用户引流",
      bulletPoints: [
        "Cocos Creator 开发，动态棋盘生成自适应布局",
        "预制体和引导动画制作；资源异步加载优化，加载时间减少 40%",
      ],
      tags: [
        { text: "Cocos Creator", color: "purple" },
        { text: "TypeScript", color: "blue" },
      ],
    },
    {
      title: "同程借钱",
      time: "2023.12-2024.03",
      description: "同程旅游 APP 内借贷服务，提供授信、借款、还款等金融功能",
      bulletPoints: [
        "开发授信、借款、还款、借还记录等核心模块",
        "封装银行卡弹框、密码输入、PDF 阅读等公共组件",
      ],
      tags: [
        { text: "React", color: "blue" },
        { text: "Ant Design", color: "blue" },
      ],
    },
    {
      title: "保险审核多模态文本视觉问答系统",
      time: "2023.05-2024.01",
      description:
        "研究生毕业设计，深度学习模型实现保险理赔表单智能审核和问答",
      bulletPoints: [
        "DBNet + CRNN + RoBERTa-wwm 融合模型，实现图像文字抽取和智能问答",
        "Vue3 + Vite + Pinia 前端，Flask + MySQL 后端",
      ],
      tags: [
        { text: "Vue3", color: "blue" },
        { text: "Flask", color: "green" },
        { text: "深度学习", color: "purple" },
      ],
    },
    {
      title: "军事领域知识图谱问答系统",
      time: "2023.01-2023.05",
      description:
        "服创大赛全国三等奖，从 PDF 抽取三元组构建知识图谱实现智能问答",
      bulletPoints: [
        "RoBERTa-wwm + Bi-LSTM + CRF + Attention 三元组抽取",
        "Vue3 + Naive UI 前端，Flask + Neo4j + MySQL 后端",
      ],
      tags: [
        { text: "Vue3", color: "blue" },
        { text: "Neo4j", color: "green" },
        { text: "知识图谱", color: "purple" },
      ],
    },
    {
      title: "AI 无人水果售货系统",
      time: "2022.08-2023.04",
      description:
        "研电赛上海市一等奖，树莓派 + 图像识别实现水果自动识别售卖",
      bulletPoints: [
        "OpenCV + YOLOv5 水果识别，树莓派硬件平台",
        "微信小程序购物端 + Vue3 Web 管理端",
      ],
      tags: [
        { text: "Vue3", color: "blue" },
        { text: "小程序", color: "blue" },
        { text: "YOLOv5", color: "purple" },
      ],
    },
  ],
  en: [
    {
      title: "Guandan Game Admin System",
      time: "2025.07-Present",
      description:
        "Game operation management system for channel config, events, tournaments, announcements, finance and BI. Serving 100K+ DAU.",
      bulletPoints: [
        "Frontend: Axios layer with interceptors; useTable/usePagination Hooks and CommonTable components, reducing 70% duplicate code",
        "Frontend: RBAC dynamic routing with menu/button permissions; lazy loading and code splitting, 40% FCP improvement",
        "Backend: Chain of Responsibility for multi-channel config; Redis pub/sub + OSS for hot updates",
        "Backend: Shiro + Redis distributed session; batch processing to prevent OOM",
        "Business: Popup config improved conversion 15%; Tournament system supports 1000+ daily matches",
      ],
      tags: [
        { text: "Vue3", color: "blue" },
        { text: "TypeScript", color: "blue" },
        { text: "TDesign", color: "blue" },
        { text: "Spring Boot", color: "green" },
        { text: "Redis", color: "green" },
      ],
    },
    {
      title: "CyanbirdMedia Author Platform",
      time: "2024.05-2025.06",
      description:
        "Overseas novel author platform serving 10,000+ authors from 150+ countries. Core modules: novel management, analytics, revenue, contracts.",
      bulletPoints: [
        "Modular website with responsive design, semantic HTML for SEO, lazy loading optimizations",
        "html2canvas cover generator optimized from 3000ms to 500ms",
        "Tax form PDF parsing and e-signature, 40% efficiency improvement",
        "ECharts visualization, Lottie-web animations",
      ],
      tags: [
        { text: "Vue2", color: "blue" },
        { text: "Element UI", color: "blue" },
        { text: "html2canvas", color: "blue" },
        { text: "ECharts", color: "blue" },
      ],
    },
    {
      title: "Hugo Internal Novel Management",
      time: "2024.05-2025.06",
      description:
        "Internal platform for author info, UGC content, chapters, contracts, serving product, editorial, legal and finance teams.",
      bulletPoints: [
        "Custom calendar component; batch upload queue with 30% success rate improvement",
        "Quill editor integration; reusable image preview, file upload, code diff components",
      ],
      tags: [
        { text: "Vue2", color: "blue" },
        { text: "p-queue", color: "blue" },
        { text: "Quill", color: "blue" },
      ],
    },
    {
      title: "Joylit Novel Reading Platform",
      time: "2025.01-2025.04",
      description:
        "Overseas novel reading platform focused on Google SEO and responsive design.",
      bulletPoints: [
        "Nuxt.js + Tailwind CSS SSR, 40% organic traffic growth",
        "Responsive design, 50,000+ active users in first month",
      ],
      tags: [
        { text: "Nuxt.js", color: "blue" },
        { text: "Tailwind CSS", color: "blue" },
        { text: "SSR", color: "green" },
      ],
    },
    {
      title: "Hey Beauty Game Playable",
      time: "2024.08-2024.10",
      description:
        "Match-3 dress-up game playable for marketing and user acquisition.",
      bulletPoints: [
        "Cocos Creator with dynamic board generation",
        "Prefabs and tutorial animations; async loading reduced load time 40%",
      ],
      tags: [
        { text: "Cocos Creator", color: "purple" },
        { text: "TypeScript", color: "blue" },
      ],
    },
    {
      title: "Tongcheng Loan Service",
      time: "2023.12-2024.03",
      description: "Loan service in Tongcheng Travel APP with credit, borrowing and repayment.",
      bulletPoints: [
        "Core modules: credit, borrowing, repayment, transaction history",
        "Reusable components: bank card modal, password input, PDF reader",
      ],
      tags: [
        { text: "React", color: "blue" },
        { text: "Ant Design", color: "blue" },
      ],
    },
    {
      title: "Insurance Review VQA System",
      time: "2023.05-2024.01",
      description:
        "Master's thesis: Deep learning for intelligent insurance claim review and Q&A.",
      bulletPoints: [
        "DBNet + CRNN + RoBERTa-wwm for image text extraction and Q&A",
        "Vue3 + Vite + Pinia frontend, Flask + MySQL backend",
      ],
      tags: [
        { text: "Vue3", color: "blue" },
        { text: "Flask", color: "green" },
        { text: "Deep Learning", color: "purple" },
      ],
    },
    {
      title: "Military Knowledge Graph QA",
      time: "2023.01-2023.05",
      description:
        "National 3rd Prize: Knowledge graph from PDFs for intelligent Q&A.",
      bulletPoints: [
        "RoBERTa-wwm + Bi-LSTM + CRF + Attention for triple extraction",
        "Vue3 + Naive UI frontend, Flask + Neo4j + MySQL backend",
      ],
      tags: [
        { text: "Vue3", color: "blue" },
        { text: "Neo4j", color: "green" },
        { text: "Knowledge Graph", color: "purple" },
      ],
    },
    {
      title: "AI Fruit Vending System",
      time: "2022.08-2023.04",
      description:
        "Shanghai 1st Prize: Raspberry Pi + image recognition for automatic fruit vending.",
      bulletPoints: [
        "OpenCV + YOLOv5 recognition on Raspberry Pi",
        "WeChat Mini Program + Vue3 Web admin panel",
      ],
      tags: [
        { text: "Vue3", color: "blue" },
        { text: "Mini Program", color: "blue" },
        { text: "YOLOv5", color: "purple" },
      ],
    },
  ],
};
