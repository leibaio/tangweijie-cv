# 简历工作经历与项目经历优化建议

## 问题诊断

当前简历存在**工作经历**和**项目经历**内容高度重叠的问题，导致：
- 简历篇幅冗长（同样内容读两遍）
- 无法区分个人贡献 vs 团队协作
- 个人技术亮点被淹没在重复信息中

---

## 核心原则：两个板块的定位差异

| 板块 | 核心定位 | 回答的问题 | 侧重点 |
|------|---------|-----------|--------|
| **工作经历** | 你负责的范围和角色 | 你在这家公司做什么？做了哪些架构/协调决策？带来了什么影响？ | **战略层面** — 职责范围、架构设计、团队协作、影响力 |
| **项目经历** | 具体技术实现 | 这个项目用什么技术？怎么实现的？解决了什么难题？ | **战术层面** — 技术选型、实现细节、问题解决、具体成果 |

---

## 写法指导

### 工作经历写法

**模板结构：**
```
公司名 | 职位
时间

- 你负责什么业务场景（1句话）
- 你做了哪些架构/协调决策（2-3条，每条说明背景→决策→结果）
- 你对团队/业务的影响（1条）
```

**要点：**
- 用「主导」「设计」「搭建」等动词开头，体现决策者角色
- 每条以「背景→行动→结果」描述，突出因果关系
- 量化指标放在最后，用「提升X%」「支撑X用户」等格式
- 避免列出具体技术栈（如 Vue3/Spring Boot），那是项目经历的事

---

### 项目经历写法

**模板结构：**
```
项目名
时间 | 项目简介（1句话）

- 技术选型理由（为什么用这个技术）
- 核心实现细节（怎么做的，重点说难点）
- 关键成果（解决了什么问题，量化结果）
```

**要点：**
- 突出「我」做了什么，不是团队做了什么
- 具体技术栈放在这里（工作经历不要写）
- 描述实现难点和创新点，不是功能清单
- 数据要具体（「3000ms→500ms」比「性能提升」有力）

---

## 具体修改示例

### 姚记科技 — 工作经历 vs 项目经历对比

#### 工作经历（修改后）

```markdown
## 姚记科技 | 全栈开发工程师
2025.07 - 至今

- 作为天天爱掼蛋运营系统核心开发，全栈主导前端架构设计、后端业务实现、AI BFF 集成，支撑日活 40 万+ 用户的游戏运营
- 设计多渠道配置发布架构（责任链 + Redis 热更新），支撑 11 个业务模块的灵活配置，渠道发布从 10 分钟降至 30 秒
- 搭建 RBAC 动态权限体系（菜单+按钮+API 三级控制），统一管理 5000+ QPS 场景下的访问控制
- 主导 AI 能力集成，设计流式响应架构，对接多模型（Kimi/NVIDIA/OpenAI）并通过环境变量零代码切换，提升运营决策效率 50%+
- 建立 AI 辅助开发规范（Claude Code + MCP），团队开发效率提升 3 倍+
```

#### 项目经历（修改后）

```markdown
## 天天爱掼蛋运营中台
2025.07-至今 | 游戏运营管理全栈系统，支撑日活 40 万+ 用户

- 封装 useTable/usePagination Hooks 和 CommonTable 配置化组件，减少 70% 重复代码，团队开发效率提升 30%+
- 实现 Redis 发布订阅 + OSS 双通道配置热更新，渠道发布从 10min 降至 30s，支持 10000+ 配置项单次发布
- 设计分批处理策略解决大批量发布 OOM 问题，单次最大处理 5000+ 配置并行发布
- AI BFF（Node.js + Hono + SSE）实现多模型流式对话，实时生成运营分析报告，支持对话追问和智能报告自动生成
- 路由懒加载 + 代码分割优化首屏加载 40%，系统支持 5000+ QPS，缓存命中率 95%+
```

**对比说明：**

| 方面 | 工作经历 | 项目经历 |
|------|---------|---------|
| 权限系统 | 搭建 RBAC 体系统一管理（三级控制） | Hooks + 动态路由 + 懒加载实现 |
| 配置发布 | 设计多渠道热更新架构（10min→30s） | Redis pub/sub + 责任链模式 |
| AI 集成 | 对接多模型、零代码切换 | SSE 流式响应、prompt 组装 |

---

### 触宝科技 — 工作经历 vs 项目经历对比

#### 工作经历（修改后）

```markdown
## 上海触宝信息技术有限公司 | 前端开发工程师
2024.05 - 2025.06

- 负责多个海外业务项目（Cyanbird、Hugo Admin、Joylit 官网、ReadictNovel）从需求评估到上线的全流程，服务 10000+ 作者和 50000+ 月活用户
- 主导 Cyanbird 作者平台前端架构设计，涵盖封面生成、PDF 解析、电子签名、富文本编辑等核心功能，收入转化提升 40%
- 主导 Joylit 官网 Nuxt3 SSR 架构选型，协同 SEO 策略制定，有机流量增长 40%，Google PageSpeed 90+
- 搭建 Hugo Admin 内部平台前端架构，多部门协作（产品/编辑/法务/财务），支撑财务对账、税务审核等核心业务流程
- 封装 html2canvas、批量上传队列（p-queue）等公共业务组件，提升团队开发效率 30%+；协助游戏团队 Cocos Creator 开发
```

#### 项目经历（修改后）

```markdown
## CyanbirdMedia 海外作者平台
2024.05-2025.06 | 服务 10000+ 作者，覆盖 150+ 国家

- html2canvas + cropperjs 实现封面生成和图片裁剪，优化渲染从 3000ms 降至 500ms，用户生成封面转化率提升 40%
- pdf-lib 解析海外税表 PDF，signature_pad 电子签名对接 IRS 税务系统，多国税表自动识别，审核效率提升 40%
- ECharts 数据可视化看板实时展示作者收入趋势、阅读量分析，Lottie-web 等级升级动画提升用户参与度
- 封装 Quill 富文本编辑器、批量上传队列（p-queue）等业务组件，队列成功率提升 30%，团队开发效率提升 30%+
```

---

## 篇幅控制建议

| 部分 | 建议篇幅 | 说明 |
|------|---------|------|
| 工作经历 | 每段 4-5 条，每条 1-2 行 | 控制在半页以内，突出架构决策 |
| 项目经历 | 每个项目 3-5 条，每条 1 行 | 控制在一页以内，突出技术实现 |
| 总计 | 不超过 2 页 | 面试官平均阅读时间 30 秒 |

---

## 面试官视角的自检问题

写完简历后，用这些问题自检：

1. **工作经历和项目经历是否在讲不同的事？**
   - 工作经历说「设计架构」，项目经历说「技术实现」
   - 如果两处都在写同一个东西，说明没分开

2. **能否区分「个人贡献」和「团队协作」？**
   - 工作经历可以讲团队协作（影响范围大）
   - 项目经历应该突出个人具体做了什么

3. **数据是否具体？**
   - 「性能提升」❌ → 「3000ms→500ms」✅
   - 「转化率提升」❌ → 「转化率提升 15%」✅

4. **是否避免了技术堆砌？**
   - 工作经历不写具体技术栈名称
   - 项目经历才写 Vue3/Spring Boot 等

---

## 自我评价优化建议

### 现状分析

现有 4 条评价的定位：
| 序号 | 内容 | 问题 |
|------|------|------|
| 1 | AI 工具使用（Kiro/Cursor/Windsurf） | 工具偏小众，应突出 Claude Code、MCP 等更专业的 |
| 2 | 技术社区 + 学习能力 | 比较泛，没特色 |
| 3 | 全栈开发能力 | 太泛，每个工程师都能这么写 |
| 4 | 代码质量 + 组件封装 | 偏技能堆砌，没有数据支撑 |

### 优化方向

围绕三个核心定位来写：
1. **AI 时代开发者** — 熟练使用 AI 工具 + 对 LLM 应用有认知
2. **工程化思维** — 代码质量、性能优化、架构设计
3. **快速学习能力** — 技术敏感度、落地能力

### 优化示例

#### 中文版（修改后）

```javascript
zh: [
  "AI 驱动开发：熟练使用 Claude Code + Spec 驱动开发流程，擅长 AI 辅助编程（代码生成/重构/评审）、自定义 Skills 和 MCP 集成，开发效率提升 3 倍+；持续关注 LLM 应用、RAG、Agent 等前沿技术，并在项目中落地",
  "全栈工程化：具备从前端到后端的全链路开发能力，注重代码质量和工程化实践，熟悉性能优化（懒加载/缓存/分批处理）和架构设计（前后端分离/BFF/微服务），追求高可维护性和可扩展性",
  "快速学习与落地：对新技术保持敏锐度，善于从技术社区（Hacker News/Stack Overflow）和实践中学习，具备独立调研、选型、落地新技术的能力，曾主导 Nuxt3 SSR、AI BFF 等新技术的快速应用",
  "团队协作与沟通：具备良好的技术文档和沟通能力，能够清晰表达技术方案和决策理由，有跨部门协作（产品/运营/财务）经验，善于在技术与业务之间找到平衡点",
]
```

#### 英文版（修改后）

```javascript
en: [
  "AI-Driven Development: Proficient in Claude Code + Spec-driven workflow, skilled in AI-assisted coding (generation/refactoring/review), custom Skills and MCP integration, 3x+ efficiency boost; staying current on LLM apps, RAG, and Agent technologies with practical project implementation",
  "Full-Stack Engineering: End-to-end development from frontend to backend, emphasizing code quality and engineering practices; experienced in performance optimization (lazy loading/caching/batch processing) and architecture design (FE-BE separation/BFF/microservices), pursuing high maintainability and scalability",
  "Fast Learner & Implementer: Strong technology sensitivity from tech communities (HN/Stack Overflow) and hands-on practice; capable of independently researching, selecting, and implementing new tech — e.g., led rapid adoption of Nuxt3 SSR and AI BFF",
  "Team Collaboration & Communication: Strong technical documentation and communication skills to articulate designs and decisions; experienced in cross-functional collaboration (Product/Ops/Finance), balancing technical solutions with business needs",
]
```

### 优化要点

| 维度 | 原来 | 优化后 |
|------|------|--------|
| AI 工具 | Kiro/Cursor/Windsurf | Claude Code + MCP（更专业） |
| AI 认知 | 只提工具使用 | 增加 LLM/RAG/Agent 前沿技术 |
| 工程化 | 「注重质量」泛泛而谈 | 具体说性能优化/架构设计 |
| 学习能力 | 「快速学习」太泛 | 举具体例子（Nuxt3 SSR/AI BFF） |
| 团队协作 | 没体现 | 增加跨部门协作经验 |

### 面试官视角

好的自我评价应该让面试官感受到：
- 你对 AI 有实战经验，不只是「会用 ChatGPT」
- 你有工程化思维，不是只会堆功能
- 你有学习能力，不是只有经验没有成长
- 你能协作沟通，不是只会埋头写代码

---

## 专业技能优化建议

### 现状分析

当前技能清单按技术点罗列，存在以下问题：

| 问题 | 说明 |
|------|------|
| **分类不清晰** | 前端/后端/AI/工程化混在一起，面试官看不出重点 |
| **缺乏层次** | 10+ 条平铺，没有突出核心能力 vs 辅助技能 |
| **AI 权重不足** | AI 相关技能分散，AI 时代开发者定位不够突出 |
| **没有量化** | 性能优化具体优化了什么，没有数据支撑 |
| **措辞偏工具化** | 「熟悉」「熟练使用」vs 「掌握」「精通」层级不明 |

---

### 优化方向：能力模块化

按**能力维度**组织，而非按**技术点**罗列。每个维度下分层：掌握 → 熟悉。

#### 优化后的技能结构

```
一、AI 驱动开发（核心差异化能力）
   - Claude Code + Spec 驱动开发，Prompt Engineering，MCP 集成
   - 大模型接入（Kimi/OpenAI），SSE 流式对话，Agent 工作流

二、前端工程化
   - 框架：Vue 2/3 全家桶、React Hooks
   - 语言：TypeScript、ES6+、CSS3/Less
   - 构建：Vite/Webpack（Tree Shaking、代码分割、懒加载）
   - 规范：ESLint + Prettier + Husky + Commitlint

三、全栈开发能力
   - 前端：SSR（Nuxt3/Next.js），SEO 优化，Core Web Vitals
   - 后端：Spring Boot、MyBatis-Plus、MySQL/MongoDB
   - BFF：Node.js + Hono/Express，实现前后端架构解耦

四、性能优化与架构设计
   - 前端：浏览器渲染原理、事件循环、跨域、懒加载
   - 后端：Redis 缓存/发布订阅、分布式会话、分批处理

五、UI 框架与组件化
   - 主流框架：Element UI、TDesign、Ant Design、Tailwind CSS
   - 二次封装和主题定制，组件库建设
```

---

### 具体修改示例

#### 中文版（修改后）

```javascript
zh: [
  "AI 驱动开发：深度使用 Claude Code、Cursor 等 AI 工具，掌握 Prompt Engineering 和 MCP 集成，开发效率提升 3 倍+；熟悉大模型接入（Kimi/OpenAI）、SSE 流式对话、Agent 工作流，能构建 AI 数据分析和智能对话系统",
  "前端工程化：熟练掌握 Vue 2/3 全家桶、React（Hooks），TypeScript/ES6+；熟悉 Vite/Webpack 构建优化（Tree Shaking、代码分割、懒加载），ESLint + Prettier + Husky 工程化规范",
  "全栈开发：熟悉 Node.js BFF（Express/Hono）和 Spring Boot 后端开发，MySQL/MongoDB 数据库设计，Redis 缓存与分布式会话；能独立完成中小型全栈项目",
  "SSR 与 SEO：熟悉 Nuxt3/Next.js 服务端渲染，SEO 优化（JSON-LD、结构化数据），Core Web Vitals 首屏性能优化，PageSpeed 90+",
  "性能调优：深入理解浏览器渲染原理、事件循环、异步编程；掌握前端性能优化（懒加载/缓存/CDN）和后端性能优化（Redis/分批处理/OOM 防护）",
  "UI 框架：熟练使用 Element UI、TDesign、Ant Design、Tailwind CSS，能进行二次封装和主题定制，建立组件库",
]
```

#### 英文版（修改后）

```javascript
en: [
  "AI-Driven Development: Deep use of Claude Code, Cursor for AI-assisted coding (generation/refactoring/review), Prompt Engineering and MCP integration, 3x+ efficiency boost; familiar with LLM integration (Kimi/OpenAI), SSE streaming, Agent workflow, building AI analytics and intelligent chat systems",
  "Frontend Engineering: Proficient in Vue 2/3 ecosystem, React Hooks, TypeScript/ES6+; experienced with Vite/Webpack optimization (Tree Shaking, code splitting, lazy loading), ESLint + Prettier + Husky CI pipeline",
  "Full-Stack Development: Familiar with Node.js BFF (Express/Hono) and Spring Boot backend, MySQL/MongoDB design, Redis caching and distributed sessions; capable of independent full-stack project delivery",
  "SSR & SEO: Familiar with Nuxt3/Next.js SSR, SEO optimization (JSON-LD, structured data), Core Web Vitals optimization, PageSpeed 90+",
  "Performance Tuning: Deep understanding of browser rendering, event loop, async programming; skilled in frontend optimization (lazy loading/caching/CDN) and backend optimization (Redis/batch processing/OOM prevention)",
  "UI Frameworks: Proficient in Element UI, TDesign, Ant Design, Tailwind CSS with secondary封装 and theming, component library development",
]
```

---

### 优化要点

| 维度 | 原来 | 优化后 |
|------|------|--------|
| 结构 | 按技术点平铺罗列 | 按能力维度分层组织 |
| AI 权重 | 分散在各处 | 单独作为第一项，核心差异化能力 |
| 层次感 | 「熟悉」「熟练」混用 | 明确分层：掌握 → 熟悉 |
| 量化 | 没有数据 | 加入 PageSpeed 90+、3x+ 等具体指标 |
| 措辞 | 「了解」类偏弱 | 用「熟练」「熟悉」「掌握」区分层级 |

---

### 技能与简历其他板块的协同

专业技能是**总结性描述**，工作经历和项目经历是**具体例证**。三者的关系：

```
专业技能：熟练掌握 Vue 3 + TypeScript + Vite
    ↓ 具体证明
工作经历：主导天天爱掼蛋前端架构设计，Vue3 + TS + Vite
    ↓ 技术实现
项目经历：Vue3 + TS + Vite 实现路由懒加载，首屏加载优化 40%
```

---

### 面试官视角

好的专业技能清单应该：
- **3 秒扫完**：抓住核心关键词（AI、Vue3、TS、全栈、SSR）
- **有辨识度**：突出 AI 驱动开发能力，不是千篇一律的「熟练使用 Vue」
- **可深挖**：每个技能点都能在工作/项目经历中找到具体案例
- **分层清晰**：掌握的核心技能 vs 熟悉的辅助技能，一目了然

---

## 下一步

确认以上方案可行后，可以进行代码修改。需要确保：
1. 工作经历数据放入 `work-experience.ts`
2. 项目经历数据放入 `projects.ts`
3. 两处数据各有侧重，不重复