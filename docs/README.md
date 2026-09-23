# 项目文档

欢迎查看汤伟杰个人作品集网站的项目文档。

## 文档列表

### 📖 [项目概览](./PROJECT_OVERVIEW.md)
完整的项目介绍，包括：
- 项目简介和核心特性
- 技术栈详解
- 项目结构说明
- 核心架构（Server/Client 边界、i18n 双轨制、三层主题系统、13 种首页风格、博客系统、SEO）
- 自定义配置方法
- 开发和部署指南

### 💡 [优化建议](./OPTIMIZATION_SUGGESTIONS.md)
详细的项目优化建议，涵盖 10 大方面：
1. 性能优化（代码分割、字体、图片）
2. SEO 优化（结构化数据、meta 标签）
3. 代码质量优化（TypeScript、ESLint、Prettier）
4. 功能完善（博客、RSS、评论、分析）
5. 用户体验优化（加载状态、错误处理、无障碍）
6. 安全性优化（CSP、环境变量）
7. 开发体验优化（Git Hooks、测试、文档）
8. 部署优化（CI/CD、监控）
9. 文档完善
10. 数据管理优化（CMS、i18n）

### 📝 [简历优化建议](./RESUME_OPTIMIZATION.md)
简历内容组织建议：工作经历与项目经历的定位差异、写法模板、篇幅控制，以及自我评价与专业技能的组织方式。

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 访问 http://localhost:3000
```

## 项目亮点

✨ **现代技术栈**：Next.js 15 (App Router) + React 19 + TypeScript 5 + Tailwind CSS v4
🎨 **13 种首页风格**：科技风 / 极简风 / 终端风 / 国风 / 杂志风 / 包豪斯 / 像素复古 / 玻璃拟态 / F1 赛车 / 粗野主义 / 合成波 / 日式侘寂 / 报纸风，一键切换并本地记忆
🌍 **国际化**：中英文双语，客户端 Context 与 Server Component cookie 双轨同步
🎭 **主题系统**：深色/浅色模式 + 6 套 oklch 主题色，与首页风格三层解耦
📄 **简历换皮**：简历页跟随首页风格自动套壳，所有元素带 `print:` 变体，可直接打印导出
📚 **技术博客**：Markdown 文件系统驱动（gray-matter + reading-time + 代码高亮）
🔍 **SEO 基建**：动态 sitemap、动态 OG 图、完整的 OpenGraph / Twitter Card 元信息

## 联系方式

- **作者**：汤伟杰 (Tang Weijie)
- **邮箱**：leibaio@foxmail.com
- **GitHub**：https://github.com/leibaio
- **网站**：https://tangweijie-cv.vercel.app

## 许可证

MIT License