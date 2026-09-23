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
- **next-themes** for dark/light mode (`attribute="class"`)
- Utility libraries: `clsx`, `tailwind-merge`, `class-variance-authority`, `tailwindcss-animate`

## Feature Systems

| System | Where | How it works |
|---|---|---|
| Home styles (13) | `config/home-style.ts` + `components/home/*` | One independent component per style; `VALID_STYLES` whitelist guards the value read back from `localStorage` |
| Accent colors (6) | `config/theme.ts` + `components/theme-color-toggle.tsx` | oklch palettes override `--primary` / `--primary-foreground`; persisted in `localStorage: theme-color` |
| i18n (zh/en) | `config/i18n.ts` + `contexts/locale-context.tsx` | Client: React Context; Server: `cookies()`. The setter writes `localStorage` + `document.cookie`, then calls `router.refresh()` |
| Resume reskin | `components/resume-style-wrapper.tsx` | Maps the active `HomeStyle` to wrapper classes / CSS variables so the resume matches the home page |

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
