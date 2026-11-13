# SEO content

Updated 13 November 2026 for QZ Engineers. Eight service pages, homepage, guides and contact are prerendered into eleven static HTML pages. Existing service URLs remain stable, including the cylinder URL whose content now includes vented systems.

- Service-specific QZ Engineers/London titles and descriptions live in `src/content/site.ts`.
- `index.html` has matching homepage fallback metadata and British English language.
- `src/App.tsx` renders LocalBusiness JSON-LD with supplied name, telephone, email, office and London coverage.
- `public/manus-routes.json` includes the new `/services/underfloor-heating` route.
- Homepage About Us, credentials and four coverage groups reuse the existing design. No duplicate town pages or visible keyword lists.
- Locally served conversation reference images include accurate alt text, dimensions and lazy loading below the fold. They are not claimed as completed QZ projects.
- No invented registration numbers, ratings, hours, emergency availability or free-quote guarantees.
- Canonicals, sitemap and social URLs are deferred until the final production hostname is settled. No domain/deployment change was made.

Build: `npm run build` or `pnpm build`. Rendering pipeline: TypeScript → Vite client → Vite SSR bundle → `scripts/prerender.mjs`. Contact is a visitor-controlled WhatsApp message handoff, with call/email alternatives; no backend API or email delivery service.
