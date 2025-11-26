# LumiDoc Copilot Instructions

## Project Overview

LumiDoc is a VuePress 2 documentation site built with the vuepress-theme-hope theme. It's a content aggregation platform featuring:
- AI prompt repository (AI提示词)
- Tools/software/tutorials/documentation sharing
- QQ community information
- Personal portfolio of creator 悠悠狮羝LumiCornX

The site is fully authored in **Chinese Markdown** and deployed via GitHub Pages.

## Architecture & Key Files

### Core Configuration
- **`src/.vuepress/config.ts`**: VuePress configuration (language: zh-CN, hostname, author info)
- **`src/.vuepress/theme.ts`**: Hope theme settings - controls markdown plugins (katex math, plantuml, code tabs, markmap), markdown features (align, attrs, codeTabs, gfm, tasklist, etc.), and hot reload
- **`src/.vuepress/navbar.ts`**: Top navigation bar structure
- **`src/.vuepress/sidebar.ts`**: Sidebar navigation - uses "structure" auto-discovery for `AI提示词/` directory
- **`package.json`**: pnpm workspace with VuePress 2.0.0-rc.24, Hope theme 2.0.0-rc.94, and dependencies (katex, markmap, sass-embedded)

### Content Structure
```
src/
├── README.md (home page with hero image and highlights)
├── menu.md (directory page)
├── portfolio.md (portfolio template)
├── AI提示词/ (AI prompts collection - auto-indexed in sidebar)
├── 快速开始/ (Quick start guide)
├── 关于LumiDoc/ (About LumiDoc)
│   ├── 0.about.md
│   └── 投稿/ (Contribution guidelines)
│       └── 0.前言.md (contribution intro with Markdown/FrontMatter/format/submission info)
├── 关于悠悠狮羝/ (About the creator)
├── 工具与软件/ (Tools/software)
├── 教程/ (Tutorials)
└── 文档/ (Documentation)
```

**Key pattern**: Numeric prefixes (0., 1., etc.) organize content order within directories. FrontMatter frontmatter controls page metadata (title, article, home, portfolio).

## Build & Development Workflow

### Commands (via pnpm)
- `pnpm docs:dev` - Start dev server with hot reload
- `pnpm docs:clean-dev` - Start with fresh cache (use when template/config changes)
- `pnpm docs:build` - Production build to `src/.vuepress/dist/`
- `pnpm docs:update-package` - Update VuePress/theme packages

### CI/CD
GitHub Actions workflow (`.github/workflows/deploy-docs.yml`):
- Triggers on push to `main` branch
- Uses pnpm 8 and Node.js 22
- Builds with `NODE_OPTIONS: --max_old_space_size=8192` (memory constraint)
- Deploys to `gh-pages` branch via GitHub Pages

### Cache & Build Artifacts
Ignored in git:
- `src/.vuepress/.cache/`
- `src/.vuepress/.temp/`
- `src/.vuepress/dist/`
- `node_modules/`

## Content Conventions

### Markdown & FrontMatter
All content uses GitHub-flavored Markdown (gfm enabled). FrontMatter examples:
```yaml
---
title: Page Title
article: true  # Include in blog/article listings
---
```

Home pages use:
```yaml
---
home: true
icon: house
title: LumiDoc
---
```

### Supported Markdown Extensions
- **KaTeX math**: `$...$` (inline) and `$$...$$` (block) - requires `type: "katex"` in theme.ts
- **Plantuml diagrams**: Built-in via markdown.plantuml
- **Code tabs**: `::: code-tabs` syntax
- **Markmap**: Mindmaps via `<mermaid>` or markmap syntax
- **Stylized components**: Custom replacer rules in theme.ts (e.g., "Recommended" → Badge)
- **Spoilers, highlights, alignment**: Enabled via markdown.spoiler, mark, align

### Important Metadata Fields
- `title`: Page heading (required in FrontMatter)
- `article: false` - Excludes page from article listings (used for index/menu pages)
- `icon`: FontAwesome 6 icon (prefix: `fa6-solid:`, e.g., `house`, `robot`)
- `link`: Internal or external URL for navigation items

## Development Patterns

### Theme & Styling
- Primary color: `$theme-color: #bf1191;` (defined in `src/.vuepress/styles/config.scss`)
- Hope theme components available: Badge, VPCard
- Font icons use FontAwesome 6 solid style with `fa6-solid:` prefix

### Directory Navigation
Sidebar uses **auto-structure discovery** for `AI提示词/`:
```typescript
{
  text: "AI 提示词",
  icon: "robot",
  prefix: "AI提示词/",
  children: "structure",  // Auto-discovers .md files
}
```
For other directories, explicitly list structure in sidebar.ts.

### Language & Locale
- **Default language**: zh-CN (Chinese Simplified)
- All UI text and content should be in Chinese
- Build outputs multilingual SEO metadata automatically

## Common Tasks

### Adding New Documentation
1. Create `.md` file in appropriate directory under `src/`
2. Add FrontMatter with `title`, `article: true/false`, optional `icon`
3. If adding new top-level section, update `sidebar.ts` with prefix and children
4. For AI prompts, just add to `AI提示词/` - auto-indexed
5. Run `pnpm docs:dev` to verify rendering
6. Commit to `main` to trigger auto-deployment

### Modifying Theme/Navigation
1. Edit `src/.vuepress/theme.ts` for markdown plugins or Hope theme settings
2. Edit `src/.vuepress/navbar.ts` for top navigation
3. Edit `src/.vuepress/sidebar.ts` for sidebar structure
4. Run `pnpm docs:clean-dev` to reload config
5. Build memory is capped at 8GB - use `NODE_OPTIONS: --max_old_space_size=8192`

### Debugging Build Issues
- Clear cache: `rm -rf src/.vuepress/.cache src/.vuepress/.temp`
- Check for syntax errors in `.ts` config files (must be valid TypeScript)
- Verify FrontMatter YAML syntax in markdown files
- Check console output for markdown extension errors (plantuml, katex, etc.)

## Dependencies & Versions
- **VuePress**: 2.0.0-rc.24 (v2, not v1)
- **Hope Theme**: 2.0.0-rc.94 (matches VuePress rc version)
- **KaTeX**: 0.16.22 (math rendering)
- **Markmap**: 0.18.12 (mindmap visualization)
- **Sass**: sass-embedded 1.88.0 (SCSS support)
- **Node**: 22.x (from CI workflow)

## Important Constraints
- **Locale**: zh-CN only (Chinese Simplified)
- **File encoding**: UTF-8 required for Chinese characters
- **Memory limit**: 8GB for builds (set in CI)
- **Deployment**: Only `main` branch triggers auto-deployment to GitHub Pages
- **Icons**: Must use FontAwesome 6 format with `fa6-solid:` prefix
- **Article metadata**: Use `article: false` for non-article pages (home, menu, index)
