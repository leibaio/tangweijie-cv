import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    title: "天天爱掼蛋后台管理系统",
    time: "2025.07-至今",
    description:
      "游戏运营后台管理系统，支撑渠道配置、活动运营、比赛管理、兑换码、公告推送、客服系统、财务对账、BI 报表等核心业务，服务于多渠道、多版本的游戏运营需求，支撑日活 10 万+ 用户",
    bulletPoints: [
      "前端：封装基于 Axios 的 HTTP 请求层，实现请求拦截、响应转换、错误处理、节流防抖等功能；基于 Composition API 封装 useTable、usePagination 等通用 Hooks，设计 CommonTable 等配置化组件，减少 70% 重复代码和 60% 页面开发工作量",
      "前端：设计并实现基于 RBAC 的动态路由权限系统，支持细粒度的菜单和按钮级权限控制；实施路由懒加载、组件按需引入、代码分割等性能优化，首屏加载时间优化 40%",
      "后端：设计多渠道配置发布系统，采用责任链模式处理不同类型配置的发布流程，支持 Redis 发布订阅 + OSS 双通道配置下发，实现配置热更新",
      "后端：基于 Shiro + Redis 实现分布式会话管理和 RBAC 权限控制，支持菜单、数据、API 多维度权限校验；优化批量发布性能，采用分批处理策略避免大数据量 OOM",
      "业务：开发精细化弹窗配置系统，支持多维度触发条件和优先级控制，提升用户转化率 15%；开发比赛管理系统，支持三种赛事类型统一配置，支撑日均 1000+ 场比赛运营",
    ],
    tags: [
      { text: "Vue3", color: "blue" },
      { text: "TypeScript", color: "blue" },
      { text: "Vite", color: "blue" },
      { text: "Pinia", color: "blue" },
      { text: "TDesign", color: "blue" },
      { text: "Spring Boot", color: "green" },
      { text: "MyBatis-Plus", color: "green" },
      { text: "Shiro", color: "green" },
      { text: "Redis", color: "green" },
      { text: "阿里云 OSS", color: "green" },
    ],
  },
  {
    title: "CyanbirdMedia/ReadictNovel",
    time: "2024.05-至今",
    description:
      "海外小说作者平台 (https://www.cyanbirdmedia.com)，平台作者10000+，涉及 150+ 国家地区用户。接手负责开发核心模块，包括小说管理、大纲编写、书籍表现分析、收入结算、签约和个人信息管理等功能",
    bulletPoints: [
      "独立完成产品官网的模块化开发，媒体查询实现响应式布局，语义化标签利于 SEO，CSS3 手动实现 UI 动画效果，采用懒加载和 RAF 等进行性能优化",
      "基于 Figma 设计稿，二次封装 ElementUI 常用组件",
      "基于 html2canvas 及原生 mouse 事件和定位计算，实现作者自定义生成书籍封面功能，解决跨域问题，优化渲染节点，生成封面平均时间从3000ms->500ms",
      "研究并实现海外税表 PDF 解析，PDF 字段填充和手动签名功能。显著提升编辑审核效率，缩短处理时间40%",
      "使用 echarts 对作者书籍的浏览数据进行可视化展示，使用 lottie-web 实现作者等级提升动画",
    ],
    tags: [
      { text: "Vue2", color: "blue" },
      { text: "二次封装 Element ui", color: "blue" },
      { text: "jsx", color: "blue" },
      { text: "vuex", color: "blue" },
      { text: "vue-router", color: "blue" },
      { text: "html2canvas", color: "blue" },
      { text: "cropperjs", color: "blue" },
      { text: "响应式", color: "blue" },
      { text: "echarts", color: "blue" },
      { text: "pdf-lib", color: "blue" },
    ],
  },
  {
    title: "Hugo",
    time: "2024.05-至今",
    description:
      "内部海外小说管理平台，用于管理作者信息、UGC内容、书籍章节、签约付款等。满足产品、编辑、UI、责编、法务和财务等多个部门角色的需求",
    bulletPoints: [
      "基于原生Date()手动封装作者更新字数日历组件。解决了特定需求无现成解决方案的问题，提高了数据可视化效果",
      "实现图库管理的批量上传控制。优化了大量图片上传的性能，有效提高上传成功率30%",
      "实现富文本编辑功能，用于编辑通知公告和邮件样式等。增强了平台的内容管理能力，提高编辑效率",
      "持续进行日常迭代开发、维护和优化，封装可复用组件如图片预览弹窗、文件上传工具等",
    ],
    tags: [
      { text: "Vue2", color: "blue" },
      { text: "vuex", color: "blue" },
      { text: "v-code-diff", color: "blue" },
      { text: "p-queue", color: "blue" },
      { text: "quill", color: "blue" },
    ],
  },
  {
    title: "Joylit Novel",
    time: "2025.01-2025.04",
    tags: [
      { text: "Nuxt.js", color: "blue" },
      { text: "Vue3", color: "blue" },
      { text: "Tailwind CSS", color: "blue" },
      { text: "SSR", color: "blue" },
      { text: "响应式设计", color: "blue" },
    ],
    description:
      "海外小说阅读平台官网(https://www.joylitnovel.com)。注重 Google 等搜索引擎的 SEO，实现响应式等",
    bulletPoints: [
      "采用 Nuxt.js 框架结合 Tailwind CSS 进行快速开发，实现服务器端渲染(SSR)。优化了首屏加载速度，网站在搜索引擎结果中的排名显著提升，有机流量增长40%",
      "开发响应式设计，确保在各种设备上的良好体验。提高了用户跨设备使用的便利性",
      "优化性能和用户界面，提供流畅的阅读体验。网站上线后一个月内吸引了超过50,000名活跃用户，远超预期目标",
    ],
  },
  {
    title: "Hey Beauty 游戏增长试玩",
    time: "2024.08-2024.10",
    description:
      "公司三消换装小游戏，需要试玩页面用于市场投放和引流。使用 Cocos 开发游戏试玩版本，确保良好的用户体验，留存和引导用户下载 APP",
    bulletPoints: [
      "实现根据屏幕大小动态生成棋盘背景，开发自适应布局，确保游戏在各种设备上都有良好的显示效果",
      "制作不同等级棋子和人物表情预制体，制作引导手势等",
      "优化资源加载策略，实现资源的异步加载和预加载。游戏加载时间减少40%，显著提升用户首次体验",
    ],
    tags: [
      { text: "Cocos", color: "blue" },
      { text: "Typescript", color: "blue" },
    ],
  },
  {
    title: "同程借钱",
    time: "2024.12-2025.03",
    description: "集成于同程旅游APP内的借贷页面服务",
    bulletPoints: [
      "负责开发授信、借款、还款、基本信息管理、借还记录等核心模块",
      "进行组件优化，将页面重复组件如支持银行卡弹框、密码、图像框组件、Pdf 阅读组件封装为公共组件",
      "使用 MockJs 完成接口模拟和自测，加快了开发进度",
    ],
    tags: [
      { text: "React", color: "blue" },
      { text: "Antd", color: "blue" },
      { text: "Less", color: "blue" },
      { text: "Flatjs", color: "blue" },
    ],
  },
  {
    title: "保险审核多模态文本视觉问答系统",
    time: "2023.05-2024.01",
    description:
      "研究生毕业设计项目，搭建 H5 端前台用户界面、Web 端后台管理界面和文本视觉问答模型 InsureTVQA，前用户上传理赔表单和图像，后台审核人员可搜索、查看、审核和文本视觉问答等",
    bulletPoints: [
      "融合 DBNet 文本检测模型、CRNN 文本识别模型和 RoBERTa-wwm 的机器阅读理解模型，研究文本重排算法，完成对图像中的文字抽取识别和理解，实现问答功能",
    ],
    tags: [
      { text: "DBNet", color: "blue" },
      { text: "CRNN", color: "blue" },
      { text: "RoBERTa-wwm", color: "blue" },
      { text: "Vue3", color: "blue" },
      { text: "Vite", color: "blue" },
      { text: "Pinia", color: "blue" },
      { text: "Flask", color: "blue" },
      { text: "MySQL", color: "blue" },
    ],
  },
  {
    title: "基于预训练模型的军事垂直领域知识图谱构建及问答",
    time: "2023.01-2023.05",
    description:
      "第十四届全国大学生服创大赛项目，获得全国三等奖。从非结构化数据 PDF 中进行 OCR 识别、图像抽取等，从文本中抽取「实体-关系-实体」三元组，构建军事垂直领域知识图谱，基于图谱搭建问答系统",
    bulletPoints: [
      "主要负责算法模型和问答系统的开发。信息抽取使用 Pipeline 方式依次进行 NER 和 RE ，基于 RoBBERTa-wwm 预训练模型，结合 Bi-LSTM、CRF 和 Attention 等深度学习技术进行文本三元组抽取。问答系统前端基于 Vue3 + Naive UI， 后端使用 Python 和 Flask 搭建接口，使用 RESTful API完成前后端传输，数据库使用了 Neo4j 图数据库存放三元组，使用 MySQL 关系型数据库存放图床图像等数据。",
    ],
    tags: [
      { text: "Pipeline", color: "blue" },
      { text: "知识图谱", color: "blue" },
      { text: "三元组抽取", color: "blue" },
      { text: "Neo4j", color: "blue" },
    ],
  },
  {
    title: "基于树莓派的 AI 无人水果售货系统",
    time: "2023.04-2022.08",
    description:
      "第十七届研究生电子设计竞赛项目，获得上海市一等奖。基于图像处理实现水果商品的快速识别，使用 OpenCV + YOLOv5 算法实现图像识别；硬件平台基于树莓派搭建；软件使用微信小程序和 Vue3 搭建管理平台。",
    bulletPoints: [
      "依据不同用户角色进行对应的需求概述和功能设计；负责前端小程序的开发，使用原生微信小程序 + Vant Weapp 开发，涉及购物车、商城、订单管理、地址信息等功能开发；负责前端 Web 管理平台开发，使用 Vue3 + ElementPlus + Echarts 开发，实现商家商品管理可视化、订单管理统计、交易金额查看等；参与进行数据库设计以及相关技术文档编写。",
    ],
    tags: [
      { text: "OpenCV", color: "blue" },
      { text: "YOLOv5", color: "blue" },
      { text: "树莓派", color: "blue" },
      { text: "小程序", color: "blue" },
      { text: "Vue3", color: "blue" },
      { text: "Echarts", color: "blue" },
    ],
  },
];
