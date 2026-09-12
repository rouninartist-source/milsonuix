# milsonuix.com

Personal brand and studio site for **Milson** — multidisciplinary graphic designer, focused on UI/UX.
Bilingual: English at `/`, Portuguese under `/pt/…` (same pages, the switcher keeps you on the current page).

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
| UI strings, EN + PT (nav, buttons, section labels, page intros) | `src/data/i18n.ts` |
| Brand constants, socials, practice areas (`{ en, pt }` fields) | `src/data/site.ts` |
| Projects / case studies | `src/data/projects.ts` |
| Journal posts | `src/data/posts.ts` |
| About timeline | `src/data/story.ts` |
| Design tokens (palette, grid, type) | `src/styles/global.css` |
| Client behaviour (menu, reveal, hero, tabs, filter, forms) | `src/scripts/site.ts` |
| Page bodies | `src/views/*View.astro` — take a `lang` prop |
| Routes | `src/pages/*` (EN) and `src/pages/pt/*` (PT) are one-line wrappers around the views |

Localised text is a `{ en: "…", pt: "…" }` object read with `pick(value, lang)`; plain strings pass through unchanged, so a field can be localised later without touching the template.

## Images

Every image is a placeholder from `picsum.photos` via the `img()` helper in `src/data/site.ts`.
To go live: drop real assets in `public/images/` and replace the `img(...)` calls with paths (`/images/portrait.jpg`). The hero and page titles expect a **grayscale portrait** for the blue duotone treatment.

## Themes

Dark is the default; light uses Frost Blue as the ground with Obsidian ink. The toggle (sun/moon, next to the language switcher) stores the choice in `localStorage`; with no choice the site follows the OS. All colours are tokens in `src/styles/global.css` — `:root` is the dark set, `[data-theme="light"]` overrides it, and `.on-dark` (the hero) keeps the dark set in both themes because it sits on a photograph.

## Design system

- **Display**: Anton (stand-in for F37 Judge) — uppercase, `line-height: .84`
- **Body**: Inter (stand-in for PP Neue Montreal)
- **Palette**: Electric Blue `#0070FF` · Obsidian `#070707` · Deep Navy `#1A2C46` · Slate `#212935` · Frost Blue `#E8EAFA`
- **Grid**: 12 cols / 24 margin / 16 gutter at 1440 · 6 / 16 / 8 on mobile (`.container` + `.grid`)

## Forms

No backend yet. The contact form composes a `mailto:`; the newsletter form only shows a confirmation.
Wire either to an endpoint (Formspree, Supabase Edge Function, etc.) in `src/scripts/site.ts` — the forms are marked `data-contact` and `data-subscribe`.

## Deploy

`./deploy.sh` builds and rsyncs `dist/` to `domains/milsonuix.com/public_html` on Hostinger over SSH (port 65002, key auth), then checks the main routes. `./deploy.sh --dry-run` previews. The domain must be a plain website in hPanel (not a Web App) — Web Apps own `public_html` via Passenger.
