# Project Structure

## Root Organization

```
├── content/              # Markdown content files
│   ├── blog/            # Blog posts with frontmatter
│   └── showcase/        # Project showcase content
├── public/              # Static assets
├── src/                 # Source code
└── .kiro/               # Kiro configuration
```

## Source Directory (`src/`)

### `src/app/` - Next.js App Router

- File-based routing with App Router conventions
- `page.tsx` for route pages
- `layout.tsx` for shared layouts
- `route.ts` for API routes
- Nested folders for dynamic routes: `[slug]/`

Key routes:

- `/` - Home page with style variants
- `/blog/` - Blog listing and posts
- `/resume/` - Resume/CV page
- `/showcase/` - Project showcase
- `/api/posts/` - Blog API endpoints

### `src/components/`

- Organized by feature/domain
- `home/` - Home page style variants (minimal, tech, terminal)
- `resume/` - Resume components (header, timeline, projects, etc.)
- `ui/` - Reusable UI primitives (shadcn/ui pattern)
- Root-level components for global features (toggles, theme provider)

### `src/config/`

- Centralized configuration files
- `site.ts` - Site metadata and SEO
- `personal.ts` - Personal information
- `i18n.ts` - Internationalization strings
- `theme.ts` - Theme configuration
- `home-style.ts` - Home page style options
- `index.ts` - Barrel export

### `src/data/`

- Static data for resume content
- `education.ts`, `work-experience.ts`, `projects.ts`, `skills.ts`
- Exported through `index.ts`

### `src/lib/`

- Utility functions and helpers
- `blog.ts` - Blog post reading and parsing
- `utils.ts` - General utilities (likely cn() for classnames)

### `src/types/`

- TypeScript type definitions
- `resume.ts` - Resume-related types
- `index.ts` - Barrel export

## Content Structure

### Blog Posts (`content/blog/`)

- Markdown files with frontmatter
- Required fields: `title`, `date`, `description`, `tags`
- Optional bilingual fields: `titleEn`, `descriptionEn`, `tagsEn`
- Content parsed with gray-matter

## Conventions

- Use `"use client"` directive for client components
- Barrel exports (`index.ts`) for cleaner imports
- Bilingual support: Chinese primary, English with `En` suffix
- Component props include `locale?: Locale` for i18n
- State persistence in localStorage for user preferences
- Mounted checks before rendering client-only content
