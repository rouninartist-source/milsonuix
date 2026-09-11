# Handoff — milsonuix.com

Created 2026-09-11. Sibling of `../quota-smart-pay` (same owner, same Hostinger account).

## Status
- All pages built and screenshot-verified at 1440 and 393 px: Home, About, Work (+6 case studies), Journal (+4 posts), Contact, 404 — in EN (`/`) and PT (`/pt/…`), 31 pages.
- Language switcher in the nav and in the menu; `hreflang` alternates on every page.
- Zero console errors, no horizontal overflow.
- On GitHub: `rouninartist-source/milsonuix`, branch `main`. Not yet deployed.
- 2026-09-11: a one-page "Mushin Designer" variant (from `mushin-designer-website-content.md`) was built and then reverted at the owner's request — the content doc is being reworked. That version is commit `88f47ea` if any of it is wanted back.

## Deploy plan (Hostinger)
The apex `milsonuix.com` currently runs the **Quota** Web App by mistake (it should live at `quota.milsonuix.com`).
Order of operations:
1. Finish moving Quota to `quota.milsonuix.com` (new Web App on the subdomain — in progress in hPanel).
2. Delete the Web App bound to `milsonuix.com`.
3. Websites → Add website → Web App → domain `milsonuix.com` → GitHub repo `milsonuix`, branch `main`.
   Framework: Astro (static). Build `npm run build`, output `dist`. No env vars needed.
   Alternative if Web Apps refuses a static framework: add as a plain website and upload `dist/` (or use Git deploy pointing at `dist`).
4. `public/.htaccess` already maps 404s to `/404.html`.

## Open items
- Real photography + copy (all mock, see README → Images).
- Contact / newsletter endpoints (currently mailto / no-op).
- Portuguese version if the audience is mostly local — all copy is in `src/data/*`, so a `pt` variant is a data swap.
- Font licensing: Anton/Inter are free stand-ins; buying F37 Judge + PP Neue Montreal would close the gap with the reference.
