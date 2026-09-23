# Product Overview

This is a personal portfolio website and online CV for Tang Weijie (汤伟杰). It is a pure static, data-driven Next.js site — no backend, no database, all content resolved at build time.

## Core Features

- **Online resume/CV** — print-optimized, reskinned to match the selected home style
- **13 home page styles** — tech, minimal, terminal, chinese, magazine, bauhaus, retro, glass, f1, brutalist, synthwave, japanese, newspaper. Each is a fully independent component (layout, palette, animations), switchable at runtime and remembered in `localStorage`.
- **Technical blog** — markdown files in `content/blog/` parsed with gray-matter + reading-time, rendered with react-markdown (GFM + syntax highlighting)
- **Project showcase** — reuses the same project data as the resume so the two never drift apart
- **Bilingual support (Chinese/English)** — full UI copy in `config/i18n.ts`; client components use a React Context, server components read a cookie
- **Three-layer theme system** — light/dark mode (next-themes) × 6 oklch accent colors × 13 home styles, each layer persisted independently
- **SEO** — metadata/OpenGraph/Twitter in the root layout, a dynamic `sitemap.ts` that scans blog posts, and a dynamically generated OG image via `ImageResponse`

## Audience

Primarily recruiters and interviewers (the resume page is the main entry), secondarily readers of the technical blog.

## Non-Goals

- No CMS or admin UI — content lives in `src/data/*.ts` and `content/blog/*.md`
- No API routes — the site is statically rendered; there is nothing to query at runtime
- No analytics or comment system yet

## Deployment

Deployed on Vercel: https://tangweijie-cv.vercel.app