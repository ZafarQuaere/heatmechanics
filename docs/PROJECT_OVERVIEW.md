# HeatMechanics — project overview

Context document for the HeatMechanics marketing site. Read this before changing layout, copy, theme, or the enquiry form.

## Product

Marketing site for **HeatMechanics**, a gas engineering, heating, plumbing, and air-conditioning business. The promise is seasonal comfort: warm winters and cool summers, for homes and businesses.

The homepage keeps the original sections. Each of the seven services has its own page, with guides and a contact page alongside. Copy lives in `src/content/site.ts`. Do not add towns, reviews, a phone number, insurance, or a registration claim until those facts are supplied.

Published reference: [heatmech-wsp7n2px.manus.space](https://heatmech-wsp7n2px.manus.space/). That host injects a “Made with Manus” badge and analytics. Those are not part of this source. Local development does not show them.

## Stack

| | |
|---|---|
| App | Vite 8, React 19, TypeScript, React Router 7 |
| Styles | One global stylesheet, CSS variables |
| Icons | Inline SVG in `src/icons.tsx` |
| Package manager | pnpm |
| Locale / copy | British English (`enquiry`, `servicing`), `lang="en-GB"` |

No backend, database, or form destination. Dependencies are React, React DOM, and React Router.

## Commands

```bash
pnpm dev       # Vite on port 3000, host 0.0.0.0
pnpm build     # typecheck, client build, then prerender each route into dist/
pnpm preview   # preview the production build on port 3000
```

If port 3000 is taken, start Vite on another port (for example `pnpm exec vite --host 127.0.0.1 --port 3001`).

## Routes

| Path | Page |
|---|---|
| `/` | Homepage |
| `/services/boiler-repair-servicing` | Gas boiler repair and servicing |
| `/services/boiler-installation-replacement` | Boiler installation and replacement |
| `/services/gas-safety-checks` | Landlord gas safety checks and CP12 |
| `/services/general-plumbing` | General plumbing repairs |
| `/services/air-conditioning` | Air conditioning installation and servicing |
| `/services/unvented-cylinder-installation` | Unvented cylinder installation |
| `/services/commercial-gas-catering` | Commercial gas and catering equipment |
| `/guides` | Common questions |
| `/contact` | Enquiry form |

`pnpm build` writes each route’s title, description, and body text into its own `index.html`, so the copy is present without running JavaScript. There is no sitemap and no canonical URL yet, because the permanent domain is not chosen. `public/robots.txt` allows crawl.

Header links: Services (`/#services`), Our approach (`/#approach`), Guides (`/guides`), Contact (`/contact`).

## Page structure

The shell (header, footer, theme) lives in `src/App.tsx`. Homepage sections, in order:

| Section | Anchor | Role |
|---|---|---|
| Announcement bar | — | “Gas engineering · heating · air conditioning” |
| Header | — | Logo, nav, Winter/Summer switch, “Request a quote” |
| Hero | `#top` | “Warm winters. Cool summers. All sorted.” plus heating photo |
| Marquee | — | Heating, gas safety, plumbing, air conditioning, commercial gas |
| Services | `#services` | Seven service cards |
| Approach | `#approach` | “Comfort is in the details.” plus cooling photo |
| Steps | — | Tell us what’s up → Get a clear plan → Feel the difference |
| Safety | — | Gas safety and CP12 messaging |
| Contact | `#contact` | Enquiry form. Submissions are not sent |
| Footer | — | Logo, anchor links, year |

## Services

The service list in `src/content/site.ts` is the only source for cards, service pages, and the form’s service dropdown.

1. Boiler repair & servicing — Heating
2. Boiler installation & replacement — Heating
3. Gas safety checks / CP12 — Gas safety
4. General plumbing — Plumbing
5. Air conditioning installation & servicing — Cooling
6. Unvented cylinder installation (Part G) — Hot water
7. Commercial gas & catering equipment — Commercial

## Seasonal theme

Two palettes, switched in the header and stored in `localStorage` under `heatmechanics-season`.

- Default is **winter**: cool stone page, ink text, flame-orange accent (`#ed5a34`).
- **Summer**: greener neutrals, teal accent (`#1383a0`).

The choice is written to `document.documentElement.dataset.season`. Tokens live in `:root` and `:root[data-season='summer']` in `src/styles.css`. `index.html` starts with `data-season="winter"`.

Hero caption copy changes with the season (heating/gas/hot water vs air conditioning/ventilation).

## Enquiry form

Fields: name, email, postcode, service, details. Name, email, and postcode are required. Service options come from the services list.

`handleEnquiry` prevents submit and shows:

> Your details have not been sent. Connect HeatMechanics’ preferred inbox or booking system to receive enquiries from this form.

The visible disclaimer says no enquiry is sent until a contact destination is connected. Do not pretend the form delivers mail, and do not add a phone number, email, postcode area, review, award, or accreditation that is not supplied for the business.

## Design

Direction is a calm editorial service site (inspired by hae.works, not copied). No photographs of people. Photography is equipment and interior only.

- Type: Manrope for headings, DM Sans for body (Google Fonts import in `styles.css`).
- Layout breakpoints: 1050px, 760px, 390px.
- Motion: intersection reveals on `[data-reveal]`. `prefers-reduced-motion: reduce` disables them.
- Mobile nav is a button that toggles the menu and closes when a link is chosen.

## Assets

| File | Use |
|---|---|
| `public/heatmechanics-logo.png` | Header and footer lockup. Also `logoUrl` in `app.config.ts` |
| `public/images/heating.webp` | Hero photograph |
| `public/images/cooling.webp` | Approach / air-conditioning photograph |
| `public/favicon.svg` | Fav icon |
| `public/manus-routes.json` | Host route manifest for the pages above |
| `public/robots.txt` | Allows crawl. No sitemap URL yet |

## Key files

```
index.html              Document shell. Default title and description match the homepage
src/main.tsx            Browser entry. Hydrates prerendered HTML
src/entry-server.tsx    Prerender render
src/content/site.ts     Services, guides, titles, descriptions, route list
src/App.tsx             Shell, theme, routes
src/styles.css          Tokens, layout, motion
scripts/prerender.mjs   Writes one HTML file per route
app.config.ts           Logo path
vite.config.ts          Build output: dist/
plan.md                 Original design brief (some asset paths are outdated)
TODO.md                 Original delivery checklist (complete)
```

Homepage metadata:

- Title: `HeatMechanics | Gas engineering, heating and air conditioning`
- Description: gas and heating engineer for homes and businesses, naming the services above.

Each other route sets its own title and description from `src/content/site.ts`.

## Constraints

- Keep copy factual. Do not invent contact details, a service area, or trust claims.
- Do not add a backend unless that is requested.
- New page copy belongs in `src/content/site.ts`, not hardcoded in a second list.
- `plan.md` still mentions `/manus-storage/...` image URLs. The live paths are the files under `public/images/`.
