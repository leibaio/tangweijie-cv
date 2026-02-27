# Tech Stack

## Framework & Runtime

- **Next.js 15.3.6** with App Router (React 19)
- **TypeScript 5** with strict mode enabled
- **Turbopack** for development builds

## Styling & UI

- **Tailwind CSS 4** with PostCSS
- **Radix UI** components (dropdown-menu, slot)
- **shadcn/ui** component patterns
- **Lucide React** for icons
- **next-themes** for theme management
- Utility libraries: `clsx`, `tailwind-merge`, `class-variance-authority`, `tailwindcss-animate`

## Content & Markdown

- **gray-matter** for frontmatter parsing
- **react-markdown** with **remark-gfm** for GitHub Flavored Markdown
- **rehype-highlight** with **highlight.js** for code syntax highlighting
- **reading-time** for blog post reading estimates
- **@tailwindcss/typography** for prose styling

## Path Aliases

- `@/*` maps to `./src/*` for clean imports

## Common Commands

```bash
# Development (with Turbopack)
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Linting
pnpm lint
```

## Build Configuration

- Target: ES2017
- Module resolution: bundler
- JSX: preserve (handled by Next.js)
- Strict TypeScript enabled
- No emit (Next.js handles compilation)
