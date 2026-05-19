# 项目概览

## 项目简介

这是一个基于 Next.js 15 构建的现代化个人作品集网站，集成了在线简历、技术博客和项目展示功能。项目采用 TypeScript 开发，支持多语言切换、多主题风格，提供了极致的用户体验和视觉效果。

## 核心特性

### 1. 多语言支持
- 支持中文/英文双语切换
- 语言偏好本地存储持久化
- 所有内容完整国际化

### 2. 多风格首页
- **科技风（Tech）**：现代科技感设计，粒子动画效果
- **极简风（Minimal）**：简洁优雅的卡片式布局
- **终端风（Terminal）**：仿终端命令行界面，独特的 Geek 风格

### 3. 主题系统
- 深色/浅色模式切换
- 多种主题色彩方案（默认/蓝色/紫色/橙色等）
- 基于 next-themes 的主题管理

### 4. 主要页面
- **首页**：三种可切换风格的个人介绍页
- **简历页**：在线简历，支持打印导出
- **博客**：Markdown 文章系统（待添加内容）
- **展示页**：组件和功能演示

## 技术栈

### 前端框架
- **Next.js 15.3.6**：React 框架，支持 SSR/SSG
- **React 19**：最新版本 React
- **TypeScript 5**：类型安全

### UI/样式
- **Tailwind CSS 4**：实用优先的 CSS 框架
- **Radix UI**：无障碍的 UI 组件库
- **next-themes**：主题切换方案
- **lucide-react**：图标库
- **class-variance-authority**：组件变体管理
- **tailwindcss-animate**：动画效果

### 内容处理
- **gray-matter**：Markdown 前置元数据解析
- **react-markdown**：Markdown 渲染
- **rehype-highlight**：代码高亮
- **remark-gfm**：GitHub 风格 Markdown
- **highlight.js**：代码语法高亮
- **reading-time**：阅读时间估算

## 项目结构

```
tangweijie-cv/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API 路由
│   │   │   └── posts/        # 博客文章 API
│   │   ├── blog/             # 博客页面
│   │   ├── resume/           # 简历页面
│   │   ├── showcase/         # 展示页面
│   │   ├── layout.tsx        # 根布局
│   │   ├── page.tsx          # 首页
│   │   └── sitemap.ts        # 网站地图
│   ├── components/            # React 组件
│   │   ├── home/             # 首页风格组件
│   │   ├── resume/           # 简历相关组件
│   │   └── ui/               # UI 基础组件
│   ├── config/               # 配置文件
│   │   ├── home-style.ts    # 首页风格配置
│   │   ├── i18n.ts          # 国际化配置
│   │   ├── personal.ts      # 个人信息配置
│   │   ├── site.ts          # 网站配置
│   │   └── theme.ts         # 主题配置
│   ├── data/                 # 数据文件
│   │   ├── education.ts     # 教育经历
│   │   ├── projects.ts      # 项目经历
│   │   ├── skills.ts        # 技能数据
│   │   └── work-experience.ts # 工作经历
│   ├── lib/                  # 工具库
│   │   ├── blog.ts          # 博客处理
│   │   └── utils.ts         # 通用工具
│   └── types/               # TypeScript 类型定义
│       ├── index.ts
│       └── resume.ts
├── public/                   # 静态资源
├── docs/                     # 项目文档
├── package.json             # 依赖配置
├── tsconfig.json            # TypeScript 配置
├── next.config.ts           # Next.js 配置
└── README.md                # 项目说明
```

## 数据配置

项目采用配置化设计，所有个人信息通过配置文件管理：

- `src/config/personal.ts` - 个人基本信息
- `src/data/education.ts` - 教育经历
- `src/data/work-experience.ts` - 工作经历
- `src/data/projects.ts` - 项目经历
- `src/data/skills.ts` - 技能列表

修改这些配置文件即可更新网站内容，无需修改组件代码。

## 功能亮点

### 1. 首页风格切换
用户可以在三种风格之间自由切换，每种风格都有独特的设计和交互效果。选择会被保存到 localStorage，下次访问自动恢复。

### 2. 响应式设计
所有页面完全响应式，适配桌面、平板和移动设备。

### 3. 简历打印优化
简历页面专门优化了打印样式，可直接打印为专业的纸质简历。

### 4. SEO 优化
- 语义化 HTML 结构
- 完整的 meta 标签
- sitemap 生成
- 适合搜索引擎索引

### 5. 性能优化
- Next.js 15 App Router 架构
- Turbopack 开发构建（通过 --turbopack 标志）
- 代码分割和懒加载
- 图片优化（Next.js Image 组件）

## 开发指南

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 启动生产服务器
```bash
npm start
```

### 代码检查
```bash
npm run lint
```

## 部署

项目已部署到 Vercel：https://tangweijie-cv.vercel.app

推荐使用 Vercel 部署，支持：
- 自动 CI/CD
- 边缘网络加速
- 自动 HTTPS
- 环境变量管理

## 自定义配置

### 修改个人信息
编辑 `src/config/personal.ts` 和 `src/data/` 目录下的数据文件。

### 添加新主题色
编辑 `src/config/theme.ts`，添加新的颜色配置。

### 修改网站配置
编辑 `src/config/site.ts`，包括网站标题、描述、关键词等。

### 添加博客文章
在项目根目录创建 `posts/` 文件夹，添加 Markdown 文件（`.md`），文件需包含 frontmatter：

```markdown
---
title: 文章标题
date: 2025-05-19
description: 文章描述
tags: [标签1, 标签2]
---

文章内容...
```

## 浏览器支持

- Chrome/Edge (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- 移动端浏览器

## 许可证

MIT License

## 作者

汤伟杰 (Tang Weijie)
- Email: leibaio@foxmail.com
- GitHub: https://github.com/leibaio
