# HeatMechanics landing page — implementation plan

## Product scope
Build a responsive, single-page website for HeatMechanics that presents: Boiler Repair & Servicing; Boiler Installation & Replacement; Gas Safety Checks / CP12 Certificates; General Plumbing; Air Conditioning Installation & Servicing; Unvented Cylinder Installation (Part G); Commercial Gas & Catering Equipment. The experience uses the provided HeatMechanics split flame/snowflake logo, lets visitors switch between summer and winter themes, uses tasteful motion, and avoids human imagery. Include trust/qualification messaging and a quote/service CTA without inventing a phone number, email address, service area, or certification claims not supplied by the user.

## Implementation approach
- Build a light-weight client-only website in the new flexible Web project using Vite + React + TypeScript, CSS modules/global styles, and lucide-react icons if available (otherwise use simple inline SVG icons). No server or database is needed for this presentational site.
- Keep the application in `src/` (`App.tsx`, `main.tsx`, and `styles.css`) with static brand/media assets under `public/`. Add `public/manus-routes.json` for the sole route `/` before the first development server start. The page will use semantic sections and anchor navigation rather than introducing unnecessary routing.
- Use the supplied logo as the authority for the flame/cooling split. Use the two generated equipment/interior photographs in the hero and cooling-service supporting panel, referenced with their reserved `/manus-storage/...` URLs exactly as returned. Use simple icons for remaining service cards.
- The quote CTA opens a small validated enquiry form. Because the business has not provided an email/phone or booking system, the form will not pretend to transmit an enquiry: it will explain clearly that a contact destination must be connected before submissions can be delivered.
- Serve the dev preview on the project's configured port 3000, listening on `0.0.0.0`. Keep the current runtime settings and publication state unchanged unless the project requires otherwise. Do not publish without a request.

## Design direction
- **Design movement:** restrained editorial service design, borrowing the clear Swiss-inspired hierarchy and atmospheric photography common to contemporary craft and architecture sites; use the reference `hae.works` as inspiration, not as a template.
- **Core principles:** calm technical confidence; clear service discovery; warmth balanced with cooling precision; accessible readability and purposeful motion.
- **Color philosophy:** a sober, cool blue/stone foundation conveys reliability and clarity. Winter adds deep ink, frost, and a soft flame-orange accent; summer shifts toward airy ice-blue, muted sage, and sun-warmed amber. The seasonal palettes stay low-saturation and high-contrast rather than becoming gimmicky.
- **Layout paradigm:** editorial, asymmetric composition: a spacious split hero with copy alongside the equipment photograph; a horizontal service index / staggered card field; a full-width trust ribbon; then a contrasting service/contact band. On small screens, sections reflow into a single readable column with persistent-accessible navigation.
- **Signature elements:** a flame-to-snowflake seasonal toggle; thin technical linework and round calibration marks; restrained orange/cyan micro-accents in badges and service icons.
- **Interaction philosophy:** theme changes update the entire palette immediately and remain saved in local storage; anchor links and quote CTA have clear affordances; the mobile navigation is keyboard-accessible and closes on link selection.
- **Animation:** gentle entrance reveals, short hover lifts, a quiet line-draw/ambient drift in decorative details, and smooth theme transitions. Respect `prefers-reduced-motion`; no essential content depends on animation.
- **Typography system:** use a modern grotesk UI family such as Manrope for headings and body, with a compact uppercase utility label style and strong display scale. Keep headings expressive but clean, body copy highly legible, and line lengths controlled.
- **Brand essence:** seasonal comfort and dependable mechanical care for homes and businesses; precise, reassuring, practical.
- **Brand voice:** direct and calm, never alarmist. Example lines: “Warm winters. Cool summers. Sorted all year.” and “The right fix, with the details taken care of.”
- **Wordmark & logo:** place the user's supplied flame/snowflake emblem and HeatMechanics wordmark as a single high-clarity lockup; pair with a small seasonal chip rather than recreating or distorting its type.
- **Signature brand color:** vivid flame orange, echoing the provided emblem, used sparingly against cool ink and mineral neutrals.

## Project structure
- `public/` — supplied/cropped logo, route manifest, and any public icon assets.
- `src/` — React entry point, single-page section components, theme state, interactions, and responsive CSS.
- `index.html`, `package.json`, and Vite configuration — app metadata, dependencies, development and static-build commands.
- `plan.md` — this implementation and design brief; `TODO.md` — requested feature outcomes and criteria.

## Constraints and assumptions
- No user-provided contact destination, telephone, exact geographic coverage, review/award data, or named accreditations are present. Do not fabricate them; keep copy factual and make the missing enquiry destination explicit in the form.
- The only initial route is `/`; no backend, analytics, login, or stored customer enquiry data is requested.
- Use supplied logo and generated equipment-only imagery; do not use imagery depicting people, especially men.
