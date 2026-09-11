# milsonuix.com

Personal brand and studio site for **Milson** — multidisciplinary graphic designer, focused on UI/UX.

Static site built with [Astro](https://astro.build) (the only dependency). Hand-written CSS and a single vanilla script; no UI library, no runtime, no database.

```bash
nvm use            # Node 24 (.nvmrc)
npm install
npm run dev        # http://localhost:4321
npm run build      # → dist/
```

## Where things live

| What | Where |
| --- | --- |
| Copy, links, socials, practice areas | `src/data/site.ts` |
| Projects / case studies | `src/data/projects.ts` |
| Journal posts | `src/data/posts.ts` |
| About timeline | `src/data/story.ts` |
| Design tokens (palette, grid, type) | `src/styles/global.css` |
| Client behaviour (menu, reveal, hero, tabs, filter, forms) | `src/scripts/site.ts` |
| Pages | `src/pages/*.astro` (`work/[slug]`, `journal/[slug]` are generated from data) |

## Images

Every image is a placeholder from `picsum.photos` via the `img()` helper in `src/data/site.ts`.
To go live: drop real assets in `public/images/` and replace the `img(...)` calls with paths (`/images/portrait.jpg`). The hero and page titles expect a **grayscale portrait** for the blue duotone treatment.

## Design system

- **Display**: Anton (stand-in for F37 Judge) — uppercase, `line-height: .84`
- **Body**: Inter (stand-in for PP Neue Montreal)
- **Palette**: Electric Blue `#0070FF` · Obsidian `#070707` · Deep Navy `#1A2C46` · Slate `#212935` · Frost Blue `#E8EAFA`
- **Grid**: 12 cols / 24 margin / 16 gutter at 1440 · 6 / 16 / 8 on mobile (`.container` + `.grid`)

## Forms

No backend yet. The contact form composes a `mailto:`; the newsletter form only shows a confirmation.
Wire either to an endpoint (Formspree, Supabase Edge Function, etc.) in `src/scripts/site.ts` — the forms are marked `data-contact` and `data-subscribe`.
