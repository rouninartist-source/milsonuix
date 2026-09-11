# Mushin Designer — milsonuix.com

Personal brand site for **Mushin Designer** — Creative Director & Digital Product Designer, Maputo.
One page, two languages (`/` EN, `/pt` PT), plus a 404.

Static site built with [Astro](https://astro.build) (the only dependency). Hand-written CSS and one vanilla script; no UI library, no runtime, no database.

```bash
nvm use            # Node 24 (.nvmrc)
npm install
npm run dev        # http://localhost:4321
npm run build      # → dist/
```

## Where things live

| What | Where |
| --- | --- |
| **All copy, EN + PT** (sections, menu, form labels) | `src/data/content.ts` |
| Brand constants: email, socials, file paths, experience, skills, trusted-by list | `src/data/site.ts` |
| Design tokens (palette, grid, type) | `src/styles/global.css` |
| Page sections | `src/components/Home.astro` (hero in `Hero.astro`) |
| Client behaviour (menu, reveal, hero strip, process tabs, scroll-spy, contact form) | `src/scripts/site.ts` |
| Downloads (resume, portfolio book) | `public/downloads/` — **placeholders**, replace with the real PDFs (same file names) |

## Images

Every image is a placeholder from `picsum.photos` via the `img()` helper in `src/data/site.ts`.
To go live: drop real assets in `public/images/` and replace the `img(...)` calls with paths (`/images/portrait.jpg`).
The hero and About expect a **grayscale portrait** — the CSS applies the blue duotone / low-key grade.

## Design system

- **Display**: Anton (stand-in for F37 Judge) — uppercase, `line-height: .84`
- **Body**: Inter (stand-in for PP Neue Montreal)
- **Palette**: Electric Blue `#0070FF` · Obsidian `#070707` · Deep Navy `#1A2C46` · Slate `#212935` · Frost Blue `#E8EAFA`
- **Grid**: 12 cols / 24 margin / 16 gutter at 1440 · 6 / 16 / 8 on mobile (`.container` + `.grid`)

## Forms

No backend yet: the contact form composes a `mailto:` to `site.email`. Wire it to an endpoint (Formspree, Supabase Edge Function…) in `src/scripts/site.ts` — the form is marked `data-contact`.
