# 项目优化建议

## 1. 性能优化

### 1.1 字体优化
**问题**：项目使用 Geist 字体，但未见明确的字体优化配置。

**建议**：
- 在 `layout.tsx` 中明确配置字体预加载
- 使用 `font-display: swap` 避免字体加载阻塞
- 考虑字体子集化（仅加载所需字符）

```typescript
// app/layout.tsx
import { GeistSans, GeistMono } from 'geist/font/sans'

export default function RootLayout({ children }) {
  return (
    <html className={`${GeistSans.variable} ${GeistMono.variable}`}>
      {children}
    </html>
  )
}
```

### 1.2 图片优化
**问题**：未见图片资源，如果添加项目截图等，需要优化。

**建议**：
- 使用 Next.js Image 组件
- 启用图片懒加载
- 使用 WebP/AVIF 格式
- 合理设置图片尺寸和质量

### 1.3 代码分割优化
**问题**：三种首页风格都在 `page.tsx` 中导入，即使只使用一种。

**建议**：
```typescript
// 使用动态导入
const MinimalStyle = dynamic(() => import('@/components/home/minimal-style'))
const TechStyle = dynamic(() => import('@/components/home/tech-style'))
const TerminalStyle = dynamic(() => import('@/components/home/terminal-style'))
```

### 1.4 移除未使用的依赖
**建议**：
- 检查 `@tailwindcss/typography` 是否实际使用（博客功能未启用）
- 定期运行 `npx depcheck` 检查未使用的依赖

## 2. SEO 优化

### 2.1 添加结构化数据
**问题**：缺少 JSON-LD 结构化数据。

**建议**：添加 Person 和 WebSite schema
```typescript
// app/layout.tsx
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: '汤伟杰',
  jobTitle: '全栈开发',
  url: 'https://tangweijie-cv.vercel.app',
  email: 'leibaio@foxmail.com',
  // ...更多字段
}

// 在 head 中添加
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
```

### 2.2 完善 robots.txt
**建议**：添加 `public/robots.txt`
```
User-agent: *
Allow: /
Sitemap: https://tangweijie-cv.vercel.app/sitemap.xml
```

### 2.3 添加 Open Graph 和 Twitter Card
**建议**：在 `layout.tsx` 中完善 metadata
```typescript
export const metadata: Metadata = {
  title: '汤伟杰的个人站点',
  description: '...',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://tangweijie-cv.vercel.app',
    title: '汤伟杰的个人站点',
    description: '...',
    images: [{ url: '/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '汤伟杰的个人站点',
    description: '...',
    images: ['/twitter-image.jpg'],
  },
}
```

## 3. 代码质量优化

### 3.1 TypeScript 严格模式
**建议**：启用更严格的 TypeScript 检查
```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true
  }
}
```

### 3.2 ESLint 配置增强
**建议**：添加更多 lint 规则
```bash
npm install -D eslint-plugin-jsx-a11y eslint-plugin-react-hooks
```

### 3.3 添加代码格式化工具
**建议**：集成 Prettier
```bash
npm install -D prettier prettier-plugin-tailwindcss
```

```json
// .prettierrc
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### 3.4 统一状态管理
**问题**：多处使用 localStorage 和 useState 管理全局状态（locale、homeStyle、theme）。

**建议**：考虑使用：
- Context API 统一管理
- 或使用轻量级状态管理库如 zustand
- 创建自定义 Hook 封装 localStorage 逻辑

```typescript
// hooks/useLocalStorage.ts
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue)

  useEffect(() => {
    const item = window.localStorage.getItem(key)
    if (item) {
      setStoredValue(JSON.parse(item))
    }
  }, [key])

  const setValue = (value: T) => {
    setStoredValue(value)
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  return [storedValue, setValue] as const
}
```

## 4. 功能完善

### 4.1 完善博客功能
**问题**：博客 API 已实现，但缺少实际文章内容。

**建议**：
- 创建 `posts/` 目录
- 添加示例博客文章
- 完善博客列表页样式
- 添加分类和标签筛选
- 添加搜索功能

### 4.2 添加 RSS 订阅
**建议**：为博客添加 RSS feed
```typescript
// app/feed.xml/route.ts
export async function GET() {
  const posts = await getAllPosts()
  const feed = generateRSSFeed(posts)
  return new Response(feed, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
```

### 4.3 添加评论系统
**建议**：集成 giscus（基于 GitHub Discussions）
```bash
npm install @giscus/react
```

### 4.4 添加网站分析
**建议**：集成 Google Analytics 或其他分析工具
```typescript
// app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  )
}
```

### 4.5 添加简历下载功能
**建议**：
- 实现简历导出为 PDF（使用 react-to-pdf 或 jsPDF）
- 或提供预生成的 PDF 下载链接

## 5. 用户体验优化

### 5.1 添加加载状态
**建议**：
- 页面切换时显示加载指示器
- 使用 Next.js 的 loading.tsx
- 骨架屏提升感知性能

```typescript
// app/loading.tsx
export default function Loading() {
  return <div className="loading-skeleton">...</div>
}
```

### 5.2 错误边界
**建议**：添加 error.tsx 处理错误
```typescript
// app/error.tsx
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div>
      <h2>出错了！</h2>
      <button onClick={reset}>重试</button>
    </div>
  )
}
```

### 5.3 优化移动端体验
**建议**：
- 测试所有页面在移动设备上的表现
- 优化触摸交互（按钮大小、间距）
- 添加手势操作（滑动切换风格等）

### 5.4 无障碍优化
**建议**：
- 添加完整的 ARIA 标签
- 确保键盘可访问性
- 检查颜色对比度（WCAG AA 标准）
- 使用 eslint-plugin-jsx-a11y 检查

### 5.5 添加页面切换动画
**建议**：使用 Framer Motion 添加平滑过渡
```bash
npm install framer-motion
```

## 6. 安全性优化

### 6.1 添加 CSP 头
**建议**：在 `next.config.ts` 中配置 Content Security Policy
```typescript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline'",
          },
        ],
      },
    ]
  },
}
```

### 6.2 环境变量管理
**建议**：
- 创建 `.env.example` 文件
- 敏感信息使用环境变量
- 确保 `.env.local` 在 `.gitignore` 中

## 7. 开发体验优化

### 7.1 添加 Git Hooks
**建议**：使用 husky 和 lint-staged
```bash
npm install -D husky lint-staged
npx husky init
```

```json
// package.json
{
  "lint-staged": {
    "*.{ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{json,md}": ["prettier --write"]
  }
}
```

### 7.2 添加 Changelog
**建议**：使用 conventional commits 和自动生成 changelog
```bash
npm install -D @commitlint/cli @commitlint/config-conventional
```

### 7.3 添加组件文档
**建议**：使用 Storybook 展示组件
```bash
npx storybook@latest init
```

### 7.4 添加单元测试
**建议**：集成 Vitest 和 Testing Library
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

## 8. 部署优化

### 8.1 添加 CI/CD 配置
**建议**：如果不使用 Vercel 的自动部署，添加 GitHub Actions
```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [master]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm run build
      - run: npm test
```

### 8.2 添加环境配置
**建议**：区分开发、预发布、生产环境配置

### 8.3 性能监控
**建议**：
- 使用 Vercel Analytics
- 或集成 Lighthouse CI
- 监控 Core Web Vitals

## 9. 文档完善

### 9.1 添加 CONTRIBUTING.md
如果开源，添加贡献指南。

### 9.2 添加 API 文档
为博客 API 添加详细文档。

### 9.3 添加架构图
在 docs/ 中添加系统架构和组件关系图。

## 10. 数据管理优化

### 10.1 考虑 CMS 集成
**问题**：目前所有内容硬编码在代码中。

**建议**：
- 集成 Headless CMS（如 Sanity、Contentful）
- 或使用本地 CMS（如 TinaCMS）
- 方便非技术人员更新内容

### 10.2 添加多语言管理工具
**建议**：使用 i18next 或 next-intl 替代自定义 i18n
```bash
npm install next-intl
```

## 优先级建议

**高优先级**（立即实施）：
1. 代码分割优化（动态导入首页风格组件）
2. 完善博客功能（添加示例文章）
3. 添加 Prettier 和 lint-staged
4. 统一状态管理（自定义 Hook）
5. 完善 SEO（添加 Open Graph、robots.txt）

**中优先级**（近期规划）：
1. 添加单元测试
2. 优化移动端体验
3. 添加网站分析
4. 添加简历下载功能
5. 错误处理和加载状态

**低优先级**（长期优化）：
1. CMS 集成
2. Storybook 组件文档
3. 评论系统
4. RSS 订阅
5. 性能监控

## 总结

项目整体结构清晰，技术栈先进，代码质量良好。主要优化方向：
1. **性能**：代码分割、字体优化、图片优化
2. **完善功能**：博客内容、下载简历、分析统计
3. **开发体验**：代码规范、测试、文档
4. **用户体验**：加载状态、错误处理、无障碍
5. **SEO**：结构化数据、meta 标签、sitemap

建议按优先级逐步实施，持续迭代优化。
