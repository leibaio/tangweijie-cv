# 项目概览

## 项目简介

基于 Next.js 15 构建的个人站点，集成在线简历、技术博客和项目展示。纯静态数据驱动，无后端、无数据库，所有内容在编译期确定。

## 技术栈

| 层面 | 技术 |
|------|------|
| 框架 | Next.js 15 (App Router) + React 19 |
| 语言 | TypeScript 5 |
| 样式 | Tailwind CSS v4 + shadcn/ui (new-york) |
| 主题 | next-themes (dark/light) + 自定义 11 色 oklch 调色板 |
| Markdown | react-markdown + rehype-highlight + remark-gfm |
| 图标 | lucide-react |
| 字体 | Geist Sans / Geist Mono |
| 构建 | Turbopack (dev) |

## 目录结构

```
src/
├── app/                        # 路由层 (Next.js App Router)
│   ├── layout.tsx              # 根布局：ThemeProvider → LocaleProvider → children
│   ├── page.tsx                # 首页：4 种风格切换 (Client Component)
│   ├── resume/page.tsx         # 简历页 (Server Component，读 cookie)
│   ├── blog/
│   │   ├── page.tsx            # 博客列表
│   │   └── [slug]/page.tsx     # 文章详情 (动态路由)
│   ├── showcase/page.tsx       # 案例展示
│   ├── error.tsx               # 错误边界
│   ├── loading.tsx             # 全局 loading
│   ├── not-found.tsx           # 404
│   ├── opengraph-image.tsx     # OG 图片
│   ├── sitemap.ts              # 站点地图
│   └── globals.css             # Tailwind v4 主题变量
│
├── components/
│   ├── home/                   # 首页 4 种风格
│   │   ├── tech-style.tsx      # 科技风 (默认)
│   │   ├── minimal-style.tsx   # 极简风
│   │   ├── terminal-style.tsx  # 终端风
│   │   ├── chinese-style.tsx   # 中国风
│   │   └── index.ts
│   ├── resume/                 # 简历组件
│   │   ├── header.tsx, education.tsx, skills.tsx
│   │   ├── work-experience.tsx, projects.tsx
│   │   ├── self-comment.tsx, project-card.tsx
│   │   ├── section-header.tsx, tag.tsx, timeline.tsx
│   │   ├── print-button.tsx
│   │   └── index.ts
│   ├── ui/                     # shadcn/ui 基础组件
│   │   ├── button.tsx, card.tsx, dropdown-menu.tsx
│   ├── resume-toolbar.tsx      # 简历工具栏 (Client Component)
│   ├── theme-provider.tsx      # next-themes 封装
│   ├── locale-toggle.tsx       # 中/英切换
│   ├── mode-toggle.tsx         # dark/light 切换
│   ├── theme-color-toggle.tsx  # 11 色主题切换
│   ├── home-style-toggle.tsx   # 首页风格切换
│   └── blog-header.tsx         # 博客页头
│
├── config/                     # 配置层
│   ├── site.ts                 # 站点元信息
│   ├── personal.ts             # 个人信息
│   ├── i18n.ts                 # 国际化文案 (zh/en)
│   ├── theme.ts                # 11 套 oklch 主题色
│   ├── home-style.ts           # 首页风格类型
│   └── index.ts
│
├── data/                       # 简历数据层 (纯常量)
│   ├── education.ts            # 教育经历
│   ├── skills.ts               # 技能 (zh/en)
│   ├── work-experience.ts      # 工作经历 (zh/en)
│   ├── projects.ts             # 项目经历 (zh/en)
│   ├── home-shared.ts          # 首页共享数据
│   └── index.ts
│
├── contexts/
│   └── locale-context.tsx      # 语言 Context
│
├── lib/
│   ├── blog.ts                 # 博客文件系统读取
│   └── utils.ts                # cn() 工具函数
│
└── types/
    ├── resume.ts               # 简历类型定义
    └── index.ts
```

## 核心架构

### Server / Client 边界

| 页面 | 类型 | 语言获取方式 |
|------|------|-------------|
| `resume/page.tsx` | Server Component | `cookies()` |
| `blog/page.tsx` | Server Component | `cookies()` |
| `blog/[slug]/page.tsx` | Server Component | `cookies()` |
| `page.tsx` (首页) | Client Component | `useLocale()` Context |

简历页是 Server Component：数据来自 `src/data/` 的静态常量，不需要客户端状态。交互部分（打印按钮、语言切换、主题切换）提取到 `ResumeToolbar` Client Component。

### i18n 双轨制

```
Client 组件                          Server 组件
  ↓                                    ↓
useLocale() (React Context)          cookies() (next/headers)
  ↓                                    ↓
localStorage + cookie 同步写入        直接读 cookie
```

`locale-context.tsx` 同时写 `localStorage`（客户端持久化）和 `document.cookie`（让 Server Component 能读到）。切换语言时两种存储同步更新。

### 主题系统

三层叠加：

1. **明暗模式**：next-themes，`class` 策略，切换 `<html>` 的 class
2. **主题色**：11 套 oklch 调色板，通过 CSS 变量覆盖 `--primary` 等，存在 cookie
3. **首页风格**：4 种完全不同的组件，存在 localStorage，独立于主题

### 首页风格系统

4 个组件共享 `home-shared.ts` 里的 `getFeatures()` 和 `techStack` 数组，各自的 JSX 完全不同（布局、配色、动效）。首页根据 `homeStyle` state 条件渲染——本质是 Strategy 模式。

### 博客系统

```
content/blog/*.md → lib/blog.ts (gray-matter + reading-time) → blog 页面
```

文件系统驱动，frontmatter 支持 title/date/summary/tags，用 `@tailwindcss/typography` 渲染。

### 数据流

```
src/data/*.ts (纯 TypeScript 常量，zh/en 双版本)
    ↓
通过 locale prop 选择对应语言版本
    ↓
组件直接 import 使用
```

没有 API 层，没有数据库请求，所有数据编译期确定。改简历内容只动 `src/data/`，不用碰组件代码。

## 关键配置文件

| 文件 | 用途 |
|------|------|
| `config/site.ts` | 站点 URL、名称、描述、关键词 |
| `config/personal.ts` | 个人基本信息 |
| `config/i18n.ts` | 所有 UI 文案 (zh/en 完整双语) |
| `config/theme.ts` | 11 套 oklch 主题色定义 |
| `config/home-style.ts` | 首页风格类型和默认值 |

## 修改内容指南

| 想改什么 | 改哪里 |
|----------|--------|
| 简历内容（教育/技能/经历/项目） | `src/data/` 对应文件 |
| 个人信息 | `config/personal.ts` |
| 网站标题/描述/SEO | `config/site.ts` |
| UI 文案/翻译 | `config/i18n.ts` |
| 主题颜色 | `config/theme.ts` |
| 首页风格默认值 | `config/home-style.ts` |
| 博客文章 | `content/blog/*.md` |

## 开发命令

```bash
npm install        # 安装依赖
npm run dev        # 启动开发服务器 (Turbopack)
npm run build      # 构建生产版本
npm start          # 启动生产服务器
npm run lint       # 代码检查
```

## 部署

已部署到 Vercel：https://tangweijie-cv.vercel.app
