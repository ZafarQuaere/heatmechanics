# HeatMechanics — project overview

Context document for the HeatMechanics marketing site. Read this before changing layout, copy, theme, hosting, or the enquiry form.

## Product

Marketing site for **HeatMechanics**, a gas engineering, heating, plumbing, and air-conditioning business. The promise is seasonal comfort: warm winters and cool summers, for homes and businesses.

The homepage keeps the original editorial sections. Each of the seven services has its own page, with a guides page and a contact page alongside. All service names, page titles, descriptions, and guide answers live in `src/content/site.ts`.

Copy stays inside the services the business already lists. The supplied WhatsApp number is +44 7424 082283 (`https://wa.me/447424082283`), used only by the fixed chat button. Do not add towns, “near me” pages, reviews, another phone number, an email address, insurance, a registration number, a response time, or emergency call-out until those facts are supplied. Do not add gas-leak repair, radiator installation, commercial boiler servicing, maintenance contracts, or a separate commercial gas inspection as services.

## Repository and hosting

This folder is its own git repository. It is not part of the QZ Engineers repository.

| | |
|---|---|
| GitHub | [ZafarQuaere/heatmechanics](https://github.com/ZafarQuaere/heatmechanics) |
| Branch | `main` |
| Vercel project | `heatmechanics` on the team `zafarquaeres-projects` |
| Production | [heatmechanics.vercel.app](https://heatmechanics.vercel.app) |
| Dashboard | [Vercel project](https://vercel.com/zafarquaeres-projects/heatmechanics) |

Production was published with the Vercel CLI. The GitHub repository is not connected for automatic deploys yet. A push to `main` does not update the live site until that connection is made, or until `vercel deploy --prod` is run again from this directory.

An earlier host, [heatmech-wsp7n2px.manus.space](https://heatmech-wsp7n2px.manus.space/), injects a “Made with Manus” badge and analytics. Those are not part of this source, and that subdomain is not the permanent address. Local development does not show them.

`vercel.json` tells Vercel to install with pnpm, run `pnpm build`, and publish `dist`. Existing HTML files are served first. A request that does not match a built file is rewritten to `/index.html`, and the client router takes over. There is no sitemap and no canonical URL, because the permanent domain is not chosen. `public/robots.txt` allows crawl.

## Stack

| | |
|---|---|
| App | Vite 8, React 19, TypeScript, React Router 7 |
| Styles | One global stylesheet, CSS variables |
| Icons | Inline SVG in `src/icons.tsx` |
| Package manager | pnpm 11 |
| Locale / copy | British English (`enquiry`, `servicing`), `lang="en-GB"` |
| Hosting | Vercel, static output from `dist` |

No backend, database, or form destination. Runtime dependencies are React, React DOM, and React Router.

## Commands

```bash
pnpm dev       # Vite on port 3000, host 0.0.0.0
pnpm build     # typecheck, client build, server bundle, then prerender each route into dist/
pnpm preview   # preview the production build on port 3000
```

If port 3000 is taken, start Vite on another port (for example `pnpm exec vite --host 127.0.0.1 --port 3001`).

`pnpm build` runs, in order:

1. `tsc --noEmit`
2. Client bundle into `dist/`
3. Server bundle of `src/entry-server.tsx` into `dist/server`
4. `scripts/prerender.mjs`, which writes one `index.html` per route and then deletes `dist/server`

Publish the current directory with:

```bash
vercel deploy --prod --scope zafarquaeres-projects
```

The directory must stay linked to project `heatmechanics`. `.vercel/` is local link data and is gitignored.

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
| Any other path | “We can’t find that page.”, rendered by the client router |

Header links: Services (`/#services`), Our approach (`/#approach`), Guides (`/guides`), Contact (`/contact`). The quote button goes to `/contact`. Service cards link to their own pages. On a service page the enquiry form is already set to that service.

## Page structure

The shell (announcement bar, header, footer, seasonal theme, WhatsApp button) lives in `src/App.tsx`. Page bodies live in `src/pages/`. The chat button is fixed at the bottom-right on every page and opens WhatsApp for +44 7424 082283.

Homepage sections, in order:

| Section | Anchor | Role |
|---|---|---|
| Announcement bar | — | “Gas engineering · heating · air conditioning” |
| Header | — | Logo, nav, Winter/Summer switch, “Request a quote” |
| Hero | `#top` | “Warm winters. Cool summers. All sorted.” plus heating photo |
| Marquee | — | Heating, gas safety, plumbing, air conditioning, commercial gas |
| Services | `#services` | Seven service cards, each linking to its page |
| Approach | `#approach` | “Comfort is in the details.” plus cooling photo |
| Steps | — | Tell us what’s up → Get a clear plan → Feel the difference |
| Safety | — | Gas safety and CP12 messaging, linking to the gas safety page |
| Contact | `#contact` | Enquiry form. Submissions are not sent |
| Footer | — | Logo, links, year |

A service page has one `h1`, a short explanation, what to include in an enquiry, common questions, related services, and the same enquiry form. Guides answer questions about CP12, boiler servicing, repair versus replacement, Part G, commercial gas, and the fact that the form does not send. Contact is the enquiry section on its own URL, with the same disclaimer.

## Services

`src/content/site.ts` is the only source for cards, service pages, guide links, and the form’s service dropdown.

1. Boiler repair & servicing — Heating. Gas boiler repair, boiler servicing, heating repairs.
2. Boiler installation & replacement — Heating. The boiler itself, planned around the property. Not a whole new heating system.
3. Gas safety checks / CP12 — Gas safety. Landlord gas safety certificates and checks for landlords, homes, and properties. Separate from a boiler service.
4. General plumbing — Plumbing. Everyday water repairs. Not a gas repair, and not radiator installation as its own service.
5. Air conditioning installation & servicing — Cooling.
6. Unvented cylinder installation (Part G) — Hot water. Part G requirements are kept in view. No qualification number is stated.
7. Commercial gas & catering equipment — Commercial. Commercial gas and professional catering equipment. Not a maintenance contract or a separate commercial inspection.

## Seasonal theme

Two palettes, switched in the header and stored in `localStorage` under `heatmechanics-season`.

- Default is **winter**: cool stone page, ink text, flame-orange accent (`#ed5a34`).
- **Summer**: greener neutrals, teal accent (`#1383a0`).

The first render is always winter, including prerendered HTML, so the saved choice cannot disagree with the server markup. After load, a stored summer choice is applied and written to `document.documentElement.dataset.season`. Tokens live in `:root` and `:root[data-season='summer']` in `src/styles.css`. `index.html` starts with `data-season="winter"`.

Hero caption copy changes with the season (heating/gas/hot water vs air conditioning/ventilation).

## Enquiry form

The form is `src/components/EnquiryForm.tsx`, shown from `src/components/ContactSection.tsx` on the homepage, every service page, and `/contact`.

Fields: name, email, postcode, service, details. Name, email, and postcode are required. The service value is the slug from `src/content/site.ts`.

Submit is prevented in the browser. It shows:

> Your details have not been sent. Connect HeatMechanics’ preferred inbox or booking system to receive enquiries from this form.

The visible disclaimer says no enquiry is sent until a contact destination is connected. Do not pretend the form delivers mail, and do not add an email, postcode area, review, award, or accreditation that is not supplied for the business. WhatsApp (+44 7424 082283) is the supplied chat contact; do not add a separate phone line.

## Design

Direction is a calm editorial service site (inspired by hae.works, not copied). No photographs of people. Photography is equipment and interior only.

- Type: Manrope for headings, DM Sans for body (Google Fonts import in `styles.css`).
- Layout breakpoints: 1050px, 760px, 390px.
- Motion: intersection reveals on `[data-reveal]`. The `has-reveal` class is added in the browser, so the text is visible in prerendered HTML before JavaScript runs. `prefers-reduced-motion: reduce` disables the motion.
- Mobile nav is a button that toggles the menu and closes when a link is chosen.
- Inner pages reuse the same header, type, cards, and enquiry panel. They are not a separate visual system.

## Assets

| File | Use |
|---|---|
| `public/heatmechanics-logo.png` | Header and footer lockup. Also `logoUrl` in `app.config.ts` |
| `public/images/heating.webp` | Hero photograph |
| `public/images/cooling.webp` | Approach / air-conditioning photograph |
| `public/favicon.svg` | Fav icon |
| `public/manus-routes.json` | Route manifest for the pages above |
| `public/robots.txt` | Allows crawl. No sitemap URL yet |

## Key files

```
index.html                         Document shell. Default title and description match the homepage
vercel.json                        Vercel install, build, dist output, and fallback rewrite
package.json                       pnpm scripts and dependencies
src/main.tsx                       Browser entry. Hydrates prerendered HTML
src/entry-server.tsx               Renders one route to HTML for the prerender step
src/content/site.ts                Services, guides, titles, descriptions, prerender paths
src/App.tsx                        Shell, seasonal theme, routes
src/icons.tsx                      Inline icons
src/pages/HomePage.tsx             Homepage
src/pages/ServicePage.tsx          One service, chosen by slug
src/pages/GuidesPage.tsx           Common questions
src/pages/ContactPage.tsx          Enquiry page
src/pages/NotFoundPage.tsx         Unknown address
src/components/ServiceCard.tsx     Service card used on the homepage and related services
src/components/ContactSection.tsx  Enquiry band
src/components/EnquiryForm.tsx     Form that does not send
src/styles.css                     Tokens, layout, motion
scripts/prerender.mjs              Writes dist/<route>/index.html for every route
app.config.ts                      Logo path
vite.config.ts                     Client build output: dist/
docs/PROJECT_OVERVIEW.md           This document
docs/features/SEO_FEATURE.md       SEO pages and prerender notes
docs/TASK_LOG.md                   Daily log
plan.md                            Original design brief (some asset paths are outdated)
TODO.md                            Original delivery checklist (complete)
```

Homepage metadata:

- Title: `HeatMechanics | Gas engineering, heating and air conditioning`
- Description: gas and heating engineer for homes and businesses, naming the services above.

Every other built route sets its own title and description from `getPageMeta` in `src/content/site.ts`, both in the prerendered HTML and after a client navigation.

## Constraints

- Keep copy factual. Do not invent contact details, a service area, or trust claims. WhatsApp (+44 7424 082283) is already supplied.
- Do not add a backend unless that is requested.
- New page copy belongs in `src/content/site.ts`, not in a second list.
- Do not treat the manus.space host as the lasting address, and do not publish a sitemap or canonical URLs until the permanent domain is chosen.
- `plan.md` still mentions `/manus-storage/...` image URLs. The live paths are the files under `public/images/`.
