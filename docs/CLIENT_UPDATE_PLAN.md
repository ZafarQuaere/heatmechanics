# QZ Engineers — minimal-change update plan

Prepared 13 November 2026. Status: implemented locally on 13 November 2026. See PROJECT_OVERVIEW.md for current behaviour and verification.

## Source and confirmed direction

Client source: [shared conversation, “Rewrite Website Content”](https://chatgpt.com/share/6af4bd96-3564-83e8-a525-ceb7eb1a846e). Both the client's original message and the expanded ChatGPT response were reviewed, including the displayed image groups.

The user confirmed: **“Rebrand to QZ Engineers with supplied details but keep the logo as it is.”**

Treat the client's original facts as the baseline. The ChatGPT response supplies copy ideas, imagery, and optional SEO recommendations; its additions are not automatically new business commitments. This document supersedes the older overview's restrictions where the client has now supplied service coverage, contact details, credentials, or additional services. The overview still describes the currently implemented site.

## Recommended scope

Keep the existing React/Vite/TypeScript stack, router, static prerendering, layout, typography, seasonal themes, motion, and responsive behaviour. Reuse all seven service URLs and their template. Add one service entry/page for underfloor heating, thermostats, and power flushing. Use the existing approach section for About Us and the safety section for credentials. Add one compact coverage section rather than building many location pages.

Result: **eight service pages and eleven prerendered pages total**, with no new runtime dependencies, CMS, database, or backend.

Keep `public/heatmechanics-logo.png` and its appearance unchanged, including the lettering inside the bitmap. Display QZ Engineers as adjacent live text in the header/footer so the new business identity is explicit. Keep alt text accurate to the retained graphic; the home link's accessible name should identify QZ Engineers. Retain the existing favicon and logo configuration path. Do not recolour, redraw, or replace the logo.

## Requirements mapped to existing implementation

| Requirement | Current implementation | Smallest useful update |
|---|---|---|
| QZ Engineers identity | HeatMechanics copy across shell, pages, form, metadata | Centralise business details; update visible copy, labels, copyright and SEO. Preserve logo asset |
| WARM WINTERS, COOL SUMMERS | Already central to hero and seasonal control | Retain wording; add London-focused supporting copy |
| Premium plumbing, heating and AC for homes/businesses | Existing hero and seven cards | Rewrite concise introduction and service summaries; keep the layout |
| Gas Safe Registered / REFCOM Certified F-Gas Installer | Generic safety messaging | Show supplied credential wording in hero footnotes and existing safety band; do not invent registration numbers |
| South London base, all London boroughs | No stated coverage | Add grouped coverage section and contact address |
| About Us / why choose us | Existing approach feature and points | Rewrite these in place with company background, credentials, mobile team and domestic/commercial scope |
| Air conditioning | Existing installation/servicing route | Add London and REFCOM/F-Gas wording; retain route and template |
| Boiler installation, servicing, repairs | Two existing routes | Update copy and metadata without merging URLs |
| Gas safety, CP12, leak detection | Existing gas-safety route focuses on CP12 | Broaden its visible title/copy to gas services and safety, retaining the slug |
| Underfloor heating, thermostats, power flushing | Missing | Add one service to the existing data array; reuse card, page, enquiry dropdown and prerendering |
| Vented/unvented cylinders, radiators, 1st/2nd fix plumbing | Plumbing repairs and unvented installation only | Expand plumbing and cylinder content in place, removing conflicting old limitations |
| Telephone, WhatsApp, email, registered office | WhatsApp only, different number; placeholder form | Replace contact destination, add call/email links, and use explicit enquiry handoff |
| Conversation images except excluded portrait | Two existing equipment/interior photos | Select a small equipment-only subset; add optional image support to the shared service template |
| SEO | Unique metadata and ten prerendered pages already exist | Update titles/descriptions, manifest and new route; preserve static rendering |

Keep commercial gas/catering as an existing service in this minimal update. The new brief does not explicitly withdraw it; avoid deleting the route or adding new commercial inspection/contract offerings.

## Business details to centralise

Place a small `business` object alongside existing services in `src/content/site.ts`. Reuse it wherever contact or identity information appears.

| Field | Supplied value / implementation |
|---|---|
| Name | QZ Engineers |
| Tagline | WARM WINTERS, COOL SUMMERS |
| Credentials | Gas Safe Registered; REFCOM Certified F-Gas Installer |
| Registered office | 80 Kingston Road, SW19 1LA |
| Telephone | 020 8036 1007; `tel:+442080361007` |
| WhatsApp | Same supplied number; `https://wa.me/442080361007` |
| Email | `info@qzengineers.co.uk`; `mailto:info@qzengineers.co.uk` |
| Website | `qzengineers.co.uk` |
| Coverage | South London base; all London boroughs |

Remove the old WhatsApp destination `447424082283` from application content. A supplied WhatsApp number can be used in the plan, but account availability must be tested before release; do not silently substitute a different number.

## Copy and page changes

### Homepage

1. Keep the split hero and seasonal tagline. Use a concise London-focused H1, such as “Plumbing, heating & air conditioning across London”, with the tagline nearby. Add two short sentences on homes/businesses and the South London base.
2. Make “Request a quote” and “Call our engineers” the primary contact actions. Keep service browsing available through the existing navigation and cards. Do not add “free” without confirmation.
3. Retain the service grid, adding the eighth card. Group the copy conceptually around cooling, heating, gas safety, advanced comfort and water without introducing a second competing service list.
4. Rewrite `#approach` as About QZ Engineers. Reuse its image, feature points and layout. A separate `/about` page is optional later, not needed for this scope.
5. Reuse the safety band for the two supplied credentials and London-wide coverage. Use text credentials initially; add official logos or verification links only when corresponding assets/details are supplied.
6. Add a compact `#coverage` section before contact, using four groups below. Include an “Areas we cover” footer link; avoid crowding the mobile header.
7. Keep the existing steps and rewrite branded labels to QZ. Update the decorative HM monogram and form index to QZ, while preserving the actual logo image.

Coverage groups, transcribed from the client message:

- **South & South West:** Wimbledon, South Wimbledon, Wimbledon Chase, Kingston, Merton, Wandsworth, Richmond, Clapham, Croydon, Battersea, Putney.
- **West & Central / Heathrow hubs:** Hounslow, Southall, Chelsea, Kensington, Knightsbridge, Mayfair, Westminster, Fulham, Chiswick, Ealing, Hammersmith.
- **North & North West:** Hampstead, Highgate, Camden, Islington, Finchley, Barnet, Harrow, Wembley.
- **East & South East:** Greenwich, Canary Wharf, Docklands, Hackney, Stratford, Lewisham, Bromley.

These are example areas within the stated London coverage, not a complete list of boroughs. Do not add “surrounding areas” or unrestricted nationwide coverage from the expanded response.

### Service content and routes

| Existing/new path | Planned content |
|---|---|
| `/services/boiler-repair-servicing` | Boiler servicing, diagnosis, repairs, heating repairs; London focus |
| `/services/boiler-installation-replacement` | Boiler installation/replacement; remove contradictory blanket exclusions around heating work |
| `/services/gas-safety-checks` | Gas safety inspections, landlord CP12 and client-supplied gas leak detection |
| `/services/general-plumbing` | General plumbing, first/second fix, radiators; link to cylinder and advanced comfort services |
| `/services/air-conditioning` | Bespoke residential/commercial AC installation and servicing; supplied REFCOM/F-Gas credential |
| `/services/unvented-cylinder-installation` | Broaden display title to hot-water cylinders, covering vented and unvented systems; retain established URL |
| `/services/commercial-gas-catering` | Retain existing offering and URL, rebrand and update contact details |
| `/services/underfloor-heating` — new | Underfloor heating installation, thermostats and system power flushing |

Revise related-service links, enquiry prompts and guides together with the service entries. Remove old statements that newly supplied services are unavailable. Do not automatically add every expansion in the ChatGPT response: wet/electric underfloor variants, gas pipework alterations, gas appliance installations, whole central-heating installations, AC system variants and maintenance contracts need explicit scope confirmation before being advertised as separate capabilities. “Emergency plumber” appears in the keyword list, but does not establish emergency or 24/7 availability.

### Enquiries: recommended minimal implementation

Use the supplied destinations without introducing a backend. Add call, WhatsApp and email links to the shared contact section and footer. Keep the current fields and service preselection, but change the form action to **“Continue in WhatsApp”**: validate fields, build a URL-encoded message containing the chosen service and entered details, and open the supplied WhatsApp destination after the visitor clicks. Provide an email alternative.

Explain that the visitor must review and send the message in WhatsApp; opening the app is not delivery. Update form notice, contact-page introduction and guide answer consistently. No fake sent/success state, background transmission, or persistence of enquiry fields. If WhatsApp availability cannot be confirmed, direct email/call links still provide working contact options. A server-delivered email form is a separate enhancement requiring a provider and delivery verification.

## Image selection and use

The conversation shows third-party search/reference photographs, not an uploaded QZ photo library. Several thumbnails contain engineers. Use the equipment/interior subset below to respect both the current no-people direction and the user's explicit exclusion. Do not crop or edit the excluded portrait into another asset.

| Exact conversation image caption | Visual reviewed | Planned placement / future local asset |
|---|---|---|
| Apartment Air Conditioning Installation London \| Wall-Mount, HomeKube, InvisiGrille | Living room with wall-mounted AC, no person visible | Existing approach photo replacement and AC page; `public/images/qz-air-conditioning.webp` |
| Radiators for Heating \| Hydronic & Hot Water Heating Radiators | Wall radiator in interior, no person visible | Heating/plumbing supporting image; `public/images/qz-radiator.webp` |
| Quanto costa installare riscaldamento pavimento radiante? | Exposed underfloor heating loops; full-resolution inspection found workers in the background — excluded | Excluded; thermostat reference used on this page instead |
| Premium Home Automation \| by Digihome \| ArchiPro NZ | Wall-mounted heating control | Optional secondary image for advanced comfort; `public/images/qz-thermostat.webp` |
| Lancashire Heating & Plumbing: Blackburn, Burnley, Clitheroe & Beyond | Cylinder and pipework, no person visible | Hot-water cylinder page; `public/images/qz-hot-water-cylinder.webp` |

Exclude the person-containing boiler and gas-safety photographs, the AC installer shot, the manifold installer, and plumbing worker shots. Equipment-only choices make identifying a particular person's ethnicity unnecessary. Keep the existing hero equipment photograph unless a selected reference offers a clear improvement. Do not add a gallery of every search result.

During implementation, retrieve the selected full-resolution references from the conversation, record source URLs and reuse permission, optimise to WebP/AVIF, and serve local assets with descriptive alt text, explicit dimensions and lazy loading below the fold. Do not imply stock/reference images show QZ's own completed projects. Preserve existing images as fallback if a reference is unavailable or unsuitable for reuse. Implementation update: four reference images were retrieved, inspected and added locally. The underfloor photo was excluded after full-resolution inspection revealed people. Image provenance is recorded in `docs/IMAGE_SOURCES.json`; no QZ project ownership or reuse licence is asserted.

Add optional `image` data (`src`, `alt`, dimensions) to `Service` and render one reusable image block in `ServicePage.tsx`. Keep homepage cards lightweight rather than rebuilding them as photo cards. The London map image in the response is not essential; the text coverage groups meet the requirement with less layout and asset work.

## SEO and deployment

- Update `homeSeo`, service SEO, contact/guides/not-found metadata and the fallback document metadata in `index.html` to QZ Engineers and relevant London searches.
- Keep one H1 per page and natural service/location copy. Do not add visible keyword lists or a meta-keywords tag.
- Add the new route to `public/manus-routes.json`; `prerenderPaths` already derives service paths from the data array.
- Add a small `LocalBusiness` JSON-LD block with the supplied name, office, telephone, email and area served. Do not invent reviews, ratings, opening hours or certification identifiers. Do not present the registered office as a walk-in branch.
- Treat `qzengineers.co.uk` as the client's intended website. Confirm the deployment's final HTTPS hostname before generating self-referencing canonicals, sitemap URLs, or social URLs. Add those in one small follow-up once the host is settled.
- Preserve existing Vercel linkage during implementation. Rebranding does not itself authorise a production deployment, project transfer or domain change.
- Defer individual borough pages, Google Business Profile work, new review integrations and a full visual redesign. They add scope without being necessary for this update.

## Implementation order and files

| Order | Files | Changes |
|---|---|---|
| 1 | `src/content/site.ts` | Business object, contacts, eight services, guides, coverage data and metadata |
| 2 | `src/App.tsx`, `src/pages/HomePage.tsx`, `src/pages/ContactPage.tsx`, `src/pages/NotFoundPage.tsx` | QZ shell, retained logo with adjacent identity, homepage copy, About/credentials/coverage and contact text |
| 3 | `src/components/ContactSection.tsx`, `src/components/EnquiryForm.tsx` | Contact links and explicit WhatsApp handoff; preserve existing validation/preselection |
| 4 | `src/pages/ServicePage.tsx`, `src/styles.css`, `public/images/` | Optional shared service image, selected local references, modest styles for coverage/contact/brand text |
| 5 | `index.html`, `public/manus-routes.json`, small SEO helper if needed | Metadata, new route and business structured data; retain current prerender pipeline |
| 6 | `docs/PROJECT_OVERVIEW.md`, `docs/features/SEO_FEATURE.md`, `docs/TASK_LOG.md` | Bring documentation into line with the implemented QZ site |

Do not rename the repository, package, Vercel project, retained logo file, or `heatmechanics-season` storage key solely for branding. These are internal identifiers, and changing them adds avoidable migration work. Do not edit built `dist/` files directly.

## Acceptance checks

- `npm run build` (or `pnpm build`) passes TypeScript, client/server bundles and prerendering; eleven HTML pages contain the expected QZ titles, descriptions and body text.
- All seven old service URLs, `/guides`, `/contact`, anchors and not-found behaviour still work; the new service appears in cards, related links and the form dropdown.
- QZ Engineers appears consistently in page text and accessible labels. The existing logo file is byte-for-byte unchanged and visibly retained. Old brand references remain only where intentionally retained: image lettering/accurate alt text, internal asset/storage identifiers and historical documentation.
- No old WhatsApp destination remains in active content. Call/email/WhatsApp links use the supplied details. Manually check the WhatsApp destination, message encoding, required-field validation and service preselection without sending a real enquiry.
- Winter/summer selection persists after refresh; desktop/mobile navigation and reduced-motion behaviour still work. Review desktop and a narrow mobile viewport for the added brand text, eighth card, coverage list and contact links.
- Selected images load locally, contain no excluded portrait or other people, have appropriate alt text/dimensions, and do not cause overflow. Retain image provenance.
- No placeholder claim of delivered enquiries, invented emergency/24-hour/free-quote promise, fabricated accreditation number or review appears.

## Remaining inputs, limited to dependent work

The business name/contact decision is resolved by the user's reply. Remaining inputs do not prevent the content/template update: certification identifiers or verification links (only for verified badge details), final production hostname (only for canonical/sitemap/domain work), and reusable full-resolution reference assets/permissions (only for shipping those photographs). Core credential wording is supplied by the client; no further numbers should be invented.
