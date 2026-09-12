# Handoff — milsonuix.com

Created 2026-09-11. Sibling of `../quota-smart-pay` (same owner, same Hostinger account).

## Status
- All pages built and screenshot-verified at 1440 and 393 px: Home, About, Work (+6 case studies), Journal (+4 posts), Contact, 404 — in EN (`/`) and PT (`/pt/…`), 31 pages.
- Language switcher in the nav and in the menu; `hreflang` alternates on every page.
- Light/dark theme: system default, sun/moon toggle, remembered per browser, no flash on load.
- Zero console errors, no horizontal overflow.
- On GitHub: `rouninartist-source/milsonuix`, branch `main`. Not yet deployed.
- 2026-09-11: a one-page "Mushin Designer" variant (from `mushin-designer-website-content.md`) was built and then reverted at the owner's request — the content doc is being reworked. That version is commit `88f47ea` if any of it is wanted back.

## Deployed — 2026-09-12
- **https://milsonuix.com** serves this site (EN `/`, PT `/pt/`), 404 mapped, all routes 200.
- Deploy = `./deploy.sh` (build + rsync `dist/` → `domains/milsonuix.com/public_html` over SSH :65002). Repeat on every change.
- **Quota** is live on **https://quota.milsonuix.com** (Hostinger Web App from `quota-smart-pay`, branch `main`).
- Housekeeping still to do in hPanel: the apex `milsonuix.com` is still registered as a *Web App* (its Passenger `.htaccess` was replaced by ours). Delete that Web App in hPanel (Websites → milsonuix.com → ⋮ → Delete) so a future hPanel redeploy can't put Quota back on the apex. If deleting wipes `public_html`, run `./deploy.sh` again.

## Open items
- Real photography + copy (all mock, see README → Images).
- Contact / newsletter endpoints (currently mailto / no-op).
- Portuguese version if the audience is mostly local — all copy is in `src/data/*`, so a `pt` variant is a data swap.
- Font licensing: Anton/Inter are free stand-ins; buying F37 Judge + PP Neue Montreal would close the gap with the reference.
