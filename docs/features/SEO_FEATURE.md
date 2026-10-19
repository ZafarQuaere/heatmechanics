# SEO content

## Overview

Indexable pages and on-page copy for the seven services HeatMechanics already offers. The production build prerenders each route so the title, description, and body text are in the HTML.

Town pages, reviews, qualifications, insurance, a phone number, and emergency cover are not included. Those wait until the business supplies them. There is no sitemap or canonical URL until the permanent domain is chosen.

## Key Files

- `src/content/site.ts` — services, guides, titles, descriptions, prerender paths
- `src/App.tsx` — shell and routes
- `src/pages/` — homepage, service page, guides, contact
- `src/entry-server.tsx` and `scripts/prerender.mjs` — static HTML per route
- `public/robots.txt` — crawl allowed
- `public/manus-routes.json` — host route list

## API (if any)

None. The enquiry form still does not send.

## Notes

Keywords in the copy are limited to the real services: boiler repair and servicing, boiler installation and replacement, landlord gas safety checks and CP12, plumbing repairs, air conditioning, unvented cylinders, and commercial gas and catering equipment.

## Changelog

| Date | Change |
|---|-----|
| 2026-10-19 | Service, guide, and contact pages, with prerendered HTML. |
