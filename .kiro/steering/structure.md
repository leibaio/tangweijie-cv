# Project Structure

## Root Organization

```
├── content/              # Markdown content
│   └── blog/            # Blog posts with frontmatter (showcase/ is reserved but empty)
├── docs/                 # Project documentation (overview, optimization notes)
├── public/               # Static assets (robots.txt, svg icons)
├── src/                  # Source code
└── .kiro/                # Kiro steering docs
```

## Source Directory (`src/`)

### `src/app/` — Next.js App Router

Key routes:

| Route | File | Type | Locale source |
|---|---|---|---|
| `/` | `page.tsx` | Client | `useLocale()` Context |
| `/resume` | `resume/page.tsx` | Client | `useLocale()` Context |
| `/blog` | `blog/page.tsx` | Server (async) | `await cookies()` |
| `/blog/[slug]` | `blog/[slug]/page.tsx` | Server (async) | `await cookies()` |
| `/showcase` | `showcase/page.tsx` | Client | `useLocale()` Context |

Convention files: `layout.tsx` (ThemeProvider → LocaleProvider), `error.tsx`, `loading.tsx`, `not-found.tsx`, `sitemap.ts`, `opengraph-image.tsx`, `globals.css`.

**There is no `src/app/api/` directory** — the site has no API routes.

### `src/components/`

- `home/` — 13 home page style components + `index.ts` barrel. All consume `data/home-shared.ts`.
- `resume/` — resume sections (header, education, skills, work-experience, projects, self-comment) plus primitives (section-header, tag, timeline, project-card, print-button)
- `ui/` — shadcn/ui primitives (button, card, dropdown-menu)
- Root level — cross-cutting toggles and providers: `theme-provider`, `locale-toggle`, `mode-toggle`, `theme-color-toggle`, `home-style-toggle`, `resume-style-wrapper`, `resume-toolbar`, `blog-header`

### `src/config/`

- `site.ts` — site metadata, SEO fields, resume PDF URL
- `personal.ts` — personal information
- `i18n.ts` — all UI strings (zh/en)
- `theme.ts` — 6 oklch accent color palettes
- `home-style.ts` — `HomeStyle` union type, style metadata, `defaultHomeStyle`
- `index.ts` — barrel export

### `src/data/`

Static resume content as typed constants, each with `zh` / `en` variants:

- `education.ts`, `skills.ts`, `work-experience.ts`, `projects.ts`
- `home-shared.ts` — `getFeatures()` and `techStack` shared by every home style
- `index.ts` — barrel export

### `src/lib/`

- `blog.ts` — reads `content/blog/*.md`, parses frontmatter, computes reading time
- `utils.ts` — `cn()` classname helper

### `src/types/`

- `resume.ts` — resume domain types; `index.ts` — barrel export

## Content Structure

### Blog Posts (`content/blog/`)

- Markdown files with frontmatter
- Fields: `title`, `date`, `description`, `tags` — optional bilingual variants use the `En` suffix (`titleEn`, `descriptionEn`, `tagsEn`)
- Parsed with gray-matter; file name (minus `.md`) becomes the slug

## Conventions

- `"use client"` for components that need state, effects, or the locale Context
- Barrel exports (`index.ts`) for cleaner imports
- Bilingual data: Chinese primary, English fields suffixed with `En`
- Client components accept `locale?: Locale` props and default to `zh`
- User preferences persist in `localStorage` (`locale`, `theme-color`, `home-style`)
- Client pages expose a `mounted` flag and render a skeleton before mount to avoid hydration mismatch
- Resume print styling uses Tailwind `print:` variants