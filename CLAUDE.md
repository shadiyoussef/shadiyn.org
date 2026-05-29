# shadiyn.org

## Purpose
Personal public website for Shadi Youssef Nassar. Serves as a professional landing page with contact details and relevant experience.

## Domain
- **URL:** shadiyn.org

## Stack
- **Framework:** React + Vite (TypeScript, SPA)
- **Component library:** Kumo (`@cloudflare/kumo`) with Tailwind CSS v4
- **Hosting:** Cloudflare Workers + Static Assets
- **Icons:** @phosphor-icons/react (Kumo peer dependency)

## Design
- Component library: Kumo
- Clean, professional, minimal design
- Semantic Kumo tokens only (no raw Tailwind colors, no `dark:` variant)

## Scripts
- `npm run dev` — Vite dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — test with Wrangler locally
- `npm run deploy` — build + deploy to Cloudflare

## File Structure
- `src/app/` — React application (App.tsx, components/, main.tsx, App.css)
- `src/worker/` — Cloudflare Worker entry (index.ts)
- `index.html` — Vite HTML entry (project root)
- `dist/` — build output (served by Worker)

## Constraints
- No sensitive personal data beyond what's intentionally public
- Must be mobile-responsive
- Fast load times — keep it lightweight
