# Handoff — milsonuix.com (Mushin Designer)

Created 2026-09-11. Sibling of `../quota-smart-pay` (same owner, same Hostinger account).

## Status
- Content from `mushin-designer-website-content.md` fully implemented, EN at `/`, PT at `/pt`.
- Sections: Hero · 01 About (8+ yrs / 50+ projects, resume) · 02 Experience · 03 Skills · 04 Selected work (Coming soon + portfolio book open/download) · 05 Services I–VI · 06 Process (6-step timeline) · Manifesto · 07 Voices + Trusted-by marquee · 08 Visual Lab (Coming soon) · 09 Contact · Footer ("Crafted in silence.").
- Screenshot-verified at 1440 and 393 px, zero console errors, no horizontal overflow.
- On GitHub: `rouninartist-source/milsonuix`, branch `main`. Not yet deployed.

## Deploy plan (Hostinger)
The apex `milsonuix.com` currently runs the **Quota** Web App by mistake (it belongs on `quota.milsonuix.com`).
1. Finish moving Quota to `quota.milsonuix.com` (new Web App on the subdomain — in progress in hPanel).
2. Delete the Web App bound to `milsonuix.com`.
3. Websites → Add website → Web App → domain `milsonuix.com` → GitHub `milsonuix` / `main`.
   Framework Astro (static), build `npm run build`, output `dist`, no env vars.
   Fallback: add as a plain website and upload `dist/`.
4. `public/.htaccess` maps 404s to `/404.html`.

## Open items
- Real photography (hero, about, bleed, book cover) — see README → Images.
- Real `public/downloads/*.pdf` (resume; the 29 MB portfolio book). Current files are one-page placeholders.
- Real email address in `src/data/site.ts` (`hello@milsonuix.com` is a guess) and real social URLs.
- Contact form endpoint (currently mailto).
- Case studies and Visual Lab content when ready — both sections have a "Coming soon" state.
- Fonts: Anton/Inter are free stand-ins; F37 Judge + PP Neue Montreal would close the gap with the reference.
