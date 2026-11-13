# QZ Engineers — project overview

Updated 13 November 2026 after implementing the [client update plan](CLIENT_UPDATE_PLAN.md). The project was previously branded HeatMechanics. The user requested QZ Engineers branding and contact details, then supplied a symbol-only replacement logo.

## Product

Responsive marketing site for a South London plumbing, heating, gas and air-conditioning business serving homes and businesses across all London boroughs. Tagline: **WARM WINTERS, COOL SUMMERS**. Client-supplied credentials: Gas Safe Registered and REFCOM Certified F-Gas Installer. No registration numbers, reviews, opening hours or response-time promises have been invented.

The supplied flame/snowflake emblem in `public/qz-engineers-logo.png` is used by the header, footer, app logo configuration and favicon. The header and footer display the emblem with QZ Engineers beside it, without the old Heat Mechanic wordmark or subtext. QZ Engineers remains in page copy, copyright, metadata and the accessible home-link name. Internal package, repository, storage and hosting identifiers remain unchanged.

## Stack and setup

Vite 8, React 19, TypeScript, React Router 7, one global stylesheet and inline SVG icons. Runtime dependencies remain React, React DOM and React Router. No backend, database, CMS, accounts or additional runtime packages.

```bash
pnpm install --frozen-lockfile
pnpm dev
pnpm build
pnpm preview
```

`package.json` declares pnpm 11.25.0. Dependencies were already installed in the review environment. The pnpm version command did not complete promptly, so npm was used to run the same scripts without reinstalling or changing the lockfile:

```bash
npm run dev -- --host 127.0.0.1
npm run build
```

Local preview: `http://127.0.0.1:3000/`. Node v25.2.1 was observed; this is not a declared minimum. No application environment variables are required by current source. Do not commit local `.env.local` or `.vercel/` data.

## Build and routing

`build` runs TypeScript checking, Vite client bundling, a server bundle of `src/entry-server.tsx`, and `scripts/prerender.mjs`. The script writes HTML for every route and deletes the temporary server bundle. The result is a static `dist/` directory with eleven HTML pages and route-specific titles/descriptions. Browser entry hydrates built HTML; development uses client rendering.

| Path | Content |
|---|---|
| `/` | Hero, eight service cards, About Us, process, credentials, coverage, contact |
| `/services/boiler-repair-servicing` | Boiler repair, servicing and heating repairs |
| `/services/boiler-installation-replacement` | Boiler installation/replacement |
| `/services/gas-safety-checks` | Gas safety, CP12 and gas leak detection |
| `/services/general-plumbing` | Plumbing installations/repairs, radiators, first/second fix |
| `/services/air-conditioning` | AC installation and servicing |
| `/services/unvented-cylinder-installation` | Vented and unvented hot-water cylinder installation; original URL retained |
| `/services/commercial-gas-catering` | Existing commercial gas/catering offering retained |
| `/services/underfloor-heating` | Underfloor heating, thermostats and power flushing; new route |
| `/guides` | Service FAQs and enquiry handoff explanation |
| `/contact` | Contact details and enquiry form |

Unknown paths/slugs render the existing not-found page. Header links target services, About Us, guides and contact. Footer adds `/#coverage`. Coverage lists four groups of example areas within the stated London-wide service; it is not a full borough directory. No individual location pages were added.

## Business details and enquiries

Business details live in `src/content/site.ts`:

- Telephone and WhatsApp: **020 8036 1007**, `tel:+442080361007`, `https://wa.me/442080361007`.
- Email: **info@qzengineers.co.uk**.
- Registered office: **80 Kingston Road, SW19 1LA**. This is not described as a walk-in branch.
- Client's intended website: **qzengineers.co.uk**. Production domain configuration was not changed.

The shared enquiry form asks for name, email, postcode, service and details. All except details are required. Service pages preselect their service; `/contact?service=<known-slug>` also preselects it.

**Continue in WhatsApp** validates the form and opens a URL-encoded prepared message containing the entered details. The visitor must review and send it in WhatsApp. Opening the app is not delivery. A fallback link is shown if a new tab does not open. Direct call and email alternatives appear in every contact section. The site does not persist enquiry data or send email in the background. Only the seasonal preference is stored locally.

A WhatsApp share page opened successfully with dummy data during QA; no message was sent. This confirms the handoff URL, not account availability, inbox delivery or a response guarantee.

## Design and assets

The editorial layout, Google Fonts (Manrope/DM Sans), CSS tokens, breakpoints, intersection reveals and reduced-motion treatment are retained. Winter is orange/stone; summer uses teal/green neutrals. `heatmechanics-season` remains the localStorage key to preserve existing preferences. The first render is always winter; the saved choice is applied after mount to preserve hydration consistency.

The original equipment hero stays in place. Four reference images from the client conversation are served locally as optimised WebP assets: AC interior, radiator, hot-water cylinder and thermostat. The thermostat is used for the underfloor/control page because the underfloor reference contains workers. No people-containing reference was added. Source captions/URLs and exclusions are recorded in [IMAGE_SOURCES.json](IMAGE_SOURCES.json). Reference imagery is not represented as QZ's completed work.

## Key files

| File | Role |
|---|---|
| `src/content/site.ts` | Business, credentials, coverage, services, guides, metadata, image data and prerender paths |
| `src/App.tsx` | Routing, shell, seasonal state, LocalBusiness JSON-LD |
| `src/components/Brand.tsx` | Supplied symbol-only logo in header/footer |
| `src/components/ContactLinks.tsx` | Call, WhatsApp, email and registered office |
| `src/components/ContactSection.tsx` | Shared contact section |
| `src/components/EnquiryForm.tsx` | Validation and WhatsApp handoff |
| `src/pages/HomePage.tsx` | Homepage including About Us and coverage |
| `src/pages/ServicePage.tsx` | Shared service template, optional reference photo, FAQ and related cards |
| `src/styles.css` | Existing themes/layout plus small brand, coverage and contact additions |
| `src/main.tsx`, `src/entry-server.tsx` | Browser hydration and prerender entry points |
| `scripts/prerender.mjs` | Eleven static route pages |
| `public/manus-routes.json` | Route manifest with updated titles and underfloor route |
| `index.html` | British English shell and fallback homepage metadata |
| `vercel.json` | Existing pnpm/build/static output/fallback configuration |

## SEO and hosting

Titles and descriptions now use QZ Engineers and London service intent. LocalBusiness JSON-LD contains only supplied name, phone, email, office and London coverage; no fabricated ratings, hours or credential identifiers. Canonicals, sitemap and social URLs remain deferred until the final production hostname is settled. `robots.txt` allows crawl.

Repository context: GitHub `ZafarQuaere/heatmechanics`, Vercel project `heatmechanics`, previously documented host `heatmechanics.vercel.app`. These identifiers are retained. Remote deployment state and Git auto-deploy configuration were not checked. No production deployment, domain reassignment or project migration was performed for this update.

## Verification

- Production build passes TypeScript, client/server bundling and eleven-page prerendering.
- Desktop/mobile browser review covers header, hero, service page, coverage and contact layouts.
- Summer preference persists after reload; mobile navigation opens and closes on link selection.
- New service and query-string preselection work; required fields block an empty submission.
- WhatsApp message preparation was checked with dummy data including punctuation, ampersands and a newline, without sending a message.
- The symbol-only logo is copied directly from the user attachment without redrawing or retouching it.

No dedicated test/lint scripts exist. Automated output checks and browser checks are used for this bounded update. Historical `plan.md`, `TODO.md` and older task-log entries describe the earlier delivery; the client update plan and this overview define the current scope.
