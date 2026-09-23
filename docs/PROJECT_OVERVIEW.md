# 项目概览

## 项目简介

基于 Next.js 15 构建的个人站点，集成在线简历、技术博客和项目展示。纯静态数据驱动，无后端、无数据库，所有内容在编译期确定。已部署到 Vercel：<https://tangweijie-cv.vercel.app>

**代码规模**：`src/` 66 个文件 / 约 8,000 行。

## 技术栈

| 层面 | 技术 |
|------|------|
| 框架 | Next.js 15.3.6 (App Router) + React 19 |
| 语言 | TypeScript 5（strict） |
| 样式 | Tailwind CSS v4 + shadcn/ui (new-york) + Radix UI |
| 主题 | next-themes (dark/light) + 6 套 oklch 主题色 + 13 种首页风格 |
| Markdown | react-markdown + remark-gfm + rehype-highlight + @tailwindcss/typography |
| 内容解析 | gray-matter（frontmatter）+ reading-time（阅读时长） |
| 图标 / 字体 | lucide-react；Geist Sans / Geist Mono + 各风格自定义 Web 字体 |
| 构建 | Turbopack (dev) |
| 部署 | Vercel |

## 目录结构

```
src/
├── app/                        # 路由层 (Next.js App Router)
│   ├── layout.tsx              # 根布局：ThemeProvider → LocaleProvider → children
│   ├── page.tsx                # 首页：13 种风格切换 (Client Component)
│   ├── resume/page.tsx         # 简历页 (Client Component，按风格换皮)
│   ├── blog/
│   │   ├── page.tsx            # 博客列表 (Server Component，读 cookie)
│   │   └── [slug]/page.tsx     # 文章详情 (Server Component，动态路由)
│   ├── showcase/page.tsx       # 项目展示 (Client Component，复用简历项目数据)
│   ├── error.tsx               # 错误边界
│   ├── loading.tsx             # 全局 loading
│   ├── not-found.tsx           # 404
│   ├── opengraph-image.tsx     # 动态 OG 图 (ImageResponse)
│   ├── sitemap.ts              # 站点地图 (含动态博客路由)
│   └── globals.css             # Tailwind v4 主题变量
│
├── components/
│   ├── home/                   # 首页 13 种风格（每个风格一个独立组件）
│   │   ├── tech-style.tsx      # 科技风 (默认)
│   │   ├── minimal-style.tsx   # 极简风
│   │   ├── terminal-style.tsx  # 终端风
│   │   ├── chinese-style.tsx   # 国风
│   │   ├── magazine-style.tsx  # 杂志风
│   │   ├── bauhaus-style.tsx   # 包豪斯
│   │   ├── retro-style.tsx     # 像素复古
│   │   ├── glass-style.tsx     # 玻璃拟态
│   │   ├── f1-style.tsx        # F1 赛车
│   │   ├── brutalist-style.tsx # 粗野主义
│   │   ├── synthwave-style.tsx # 合成波
│   │   ├── japanese-style.tsx  # 日式侘寂
│   │   ├── newspaper-style.tsx # 报纸风
│   │   └── index.ts
│   ├── resume/                 # 简历组件
│   │   ├── header.tsx, education.tsx, skills.tsx
│   │   ├── work-experience.tsx, projects.tsx
│   │   ├── self-comment.tsx, project-card.tsx
│   │   ├── section-header.tsx, tag.tsx, timeline.tsx
│   │   ├── print-button.tsx
│   │   └── index.ts
│   ├── ui/                     # shadcn/ui 基础组件
│   │   └── button.tsx, card.tsx, dropdown-menu.tsx
│   ├── resume-style-wrapper.tsx # 简历页按首页风格套壳（注入 CSS 变量）
│   ├── resume-toolbar.tsx      # 简历工具栏 (Client Component)
│   ├── theme-provider.tsx      # next-themes 封装
│   ├── locale-toggle.tsx       # 中/英切换
│   ├── mode-toggle.tsx         # dark/light 切换
│   ├── theme-color-toggle.tsx  # 6 套主题色切换
│   ├── home-style-toggle.tsx   # 13 种首页风格切换
│   └── blog-header.tsx         # 博客页头
│
├── config/                     # 配置层
│   ├── site.ts                 # 站点元信息 / SEO / 简历 PDF 外链
│   ├── personal.ts             # 个人信息
│   ├── i18n.ts                 # 国际化文案 (zh/en)
│   ├── theme.ts                # 6 套 oklch 主题色
│   ├── home-style.ts           # 13 种首页风格定义与默认值
│   └── index.ts
│
├── data/                       # 简历数据层 (纯常量，zh/en 双版本)
│   ├── education.ts            # 教育经历
│   ├── skills.ts               # 技能
│   ├── work-experience.ts      # 工作经历
│   ├── projects.ts             # 项目经历（简历页与展示页共用）
│   ├── home-shared.ts          # 首页共享数据（features / techStack）
│   └── index.ts
│
├── contexts/
│   └── locale-context.tsx      # 语言 Context（localStorage + cookie 双写）
│
├── lib/
│   ├── blog.ts                 # 博客文件系统读取（gray-matter + reading-time）
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
| `blog/page.tsx` | Server Component | `await cookies()` |
| `blog/[slug]/page.tsx` | Server Component | `await cookies()` |
| `page.tsx`（首页） | Client Component | `useLocale()` Context |
| `resume/page.tsx` | Client Component | `useLocale()` Context |
| `showcase/page.tsx` | Client Component | `useLocale()` Context |

博客页是 Server Component：内容来自文件系统，只能在服务端读，因此语言通过 cookie 传递。首页 / 简历 / 展示页需要客户端交互（风格切换、主题切换），走 Context；为规避水合不一致，这些页面都提供 `mounted` 标志，未挂载时先渲染骨架屏。

### i18n 双轨制

```
Client 组件                          Server 组件
  ↓                                    ↓
useLocale() (React Context)          await cookies() (next/headers)
  ↓                                    ↓
localStorage + document.cookie 双写    直接读 cookie
```

`setLocale()` 同时写 `localStorage`（客户端持久化）和 `document.cookie`（`max-age=31536000`），再调 `router.refresh()` 让 Server Component 重新渲染——这是「客户端切语言，服务端页面跟着变」的关键一环。

### 主题系统（三层叠加，互不干扰）

| 层 | 实现 | 持久化 |
|---|---|---|
| 明暗模式 | next-themes，`attribute="class"`，切换 `<html>` 的 class | next-themes 自带 |
| 主题色 | `config/theme.ts` 6 套 oklch 调色板（黑/蓝/绿/红/紫/琥珀），覆盖 `--primary` 等 CSS 变量 | `localStorage: theme-color` |
| 首页风格 | 13 个完全不同的组件，独立于主题 | `localStorage: home-style` |

### 首页风格系统

13 个风格组件共享 `data/home-shared.ts` 的 `getFeatures()` 与 `techStack`，但各自的 JSX、配色、动效完全不同——本质是 **Strategy 模式**：`config/home-style.ts` 定义 `HomeStyle` 联合类型 + `homeStyles` 元数据（名称/图标）+ `defaultHomeStyle`。

首页从 `localStorage` 读回风格时用 `VALID_STYLES` 白名单校验，避免历史脏数据导致渲染崩掉；简历页则由 `ResumeStyleWrapper` 按同一份 `HomeStyle` 注入对应的 CSS 变量与纸张样式，让简历跟随首页风格换皮并保持打印可用。

字体也是风格的一部分：根布局统一 `preconnect` 并加载 Orbitron / Playfair Display / Press Start 2P / Noto Serif SC / Source Serif 4 等风格专用字体。

### 博客系统

```
content/blog/*.md
  → lib/blog.ts (gray-matter 解析 frontmatter + reading-time 估算时长)
  → react-markdown + remark-gfm + rehype-highlight（代码高亮）
  → @tailwindcss/typography (prose) 渲染
```

frontmatter 支持 `title` / `date` / `description` / `tags` 及对应的 `*En` 双语字段；列表按日期倒序。目前 `content/blog/` 下有 1 篇文章（`2025-tech-review.md`）。

### 项目展示页

`showcase/page.tsx` 直接复用 `src/data/projects.ts`（与简历页同一份数据源），因此「简历里写的项目」与「展示页展示的项目」天然一致，不会出现两处各写一遍而对不上的问题。

> ⚠️ `content/showcase/` 目录目前为空——展示页走的是 `src/data/` 数据，不读该目录，属于预留。

### SEO

| 能力 | 实现 |
|---|---|
| 页面元信息 | `layout.tsx` 的 `metadata`：title 模板、description、keywords、OpenGraph、Twitter Card、robots、canonical |
| 站点地图 | `app/sitemap.ts` 动态生成：静态页 + 扫描 `content/blog/*.md` 得到文章页，带 `changeFrequency` / `priority` |
| 社交分享图 | `app/opengraph-image.tsx` 用 `ImageResponse` 动态生成 1200×630 OG 图 |

### 打印优化

简历页所有元素带 `print:` 变体（`print:hidden` / `print:break-inside-avoid` / `print:text-xs` 等），保证浏览器打印或导出 PDF 时版式紧凑、分页合理；工具栏的「打开简历 PDF」按钮指向 `siteConfig.resumePdfUrl` 的线上 PDF。

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
| `config/site.ts` | 站点 URL、名称、描述、关键词、简历 PDF 外链 |
| `config/personal.ts` | 个人基本信息（姓名/职位/联系方式/教育/GitHub） |
| `config/i18n.ts` | 所有 UI 文案 (zh/en 完整双语) |
| `config/theme.ts` | 6 套 oklch 主题色定义 |
| `config/home-style.ts` | 13 种首页风格类型、元数据与默认值 |

## 修改内容指南

| 想改什么 | 改哪里 |
|----------|--------|
| 简历内容（教育/技能/经历/项目） | `src/data/` 对应文件 |
| 个人信息 | `src/config/personal.ts` |
| 网站标题/描述/SEO | `src/config/site.ts` |
| UI 文案/翻译 | `src/config/i18n.ts` |
| 主题颜色 | `src/config/theme.ts` |
| 首页风格（新增/改默认值） | `src/config/home-style.ts` + `src/components/home/` |
| 博客文章 | `content/blog/*.md` |

## 开发命令

```bash
pnpm install       # 安装依赖（仓库内同时存在 pnpm-lock.yaml）
pnpm dev           # 启动开发服务器 (Turbopack)
pnpm build         # 构建生产版本
pnpm start         # 启动生产服务器
pnpm lint          # 代码检查
```

## 部署

已部署到 Vercel：<https://tangweijie-cv.vercel.app>（推送到 `master` 触发自动构建）。