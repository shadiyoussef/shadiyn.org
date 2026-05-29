# Handoff: shadiyn.org — "Signal" redesign

## Overview
A full redesign of the personal site at **shadiyn.org** for Shadi Youssef Nassar
(Senior Territory Account Executive, Cloudflare UK&I). It replaces the current
plain Hero/Experience/Contact page with a dark, data-forward, single-page site:
a full-height hero with a typed trilingual greeting and a live "telemetry"
console, plus About, Selected Wins, Track Record (timeline), and Contact.

This package contains everything needed to ship it into the existing
**React + Vite + Cloudflare Workers** repo.

## About the design files
The files here are a **design reference** plus a **ready-to-adapt React port**:

- `signal.reference.html` — the approved, self-contained HTML mockup. This is the
  **source of truth** for look and behavior. Open it in a browser to see the final
  result (note: it includes a small "Tweaks" panel and an "← all directions" link
  used only in the design tool — **both are omitted from the production port**).
- `src_app/` — a clean React/TypeScript port of the design, structured to drop into
  this repo's `src/app/`. It is dependency-free (no Kumo, no Tailwind needed) and
  uses one plain CSS file.
- `index.head.html` — the font `<link>` tags + title/meta to add to `index.html`.

The task is to **wire this into the existing app and deploy** — not to ship the raw
HTML. The React port below is intended to do exactly that with minimal edits.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, copy, and interactions are all
settled. Recreate pixel-for-pixel. All exact values are in `src_app/signal.css`.

---

## Implementation (recommended path)

The repo currently uses Kumo + Tailwind, but this design is intentionally custom
(its own type + color system), so the port drops those for the page and uses a
single stylesheet. Steps:

1. **Copy the port into the app.** From `src_app/` into the repo's `src/app/`:
   ```
   src/app/App.tsx                      (replaces the existing App.tsx)
   src/app/signal.css
   src/app/hooks/useReveal.ts
   src/app/components/TopBar.tsx
   src/app/components/TypedGreeting.tsx
   src/app/components/Console.tsx
   src/app/components/Hero.tsx
   src/app/components/About.tsx
   src/app/components/Wins.tsx
   src/app/components/TrackRecord.tsx
   src/app/components/Contact.tsx
   src/app/components/Footer.tsx
   ```
   The old `components/Hero.tsx`, `Experience.tsx`, and `Contact.tsx` are superseded
   (the new Contact.tsx replaces the old one — confirm imports).

2. **Fonts + meta.** Add the `<link>` tags from `index.head.html` to the project-root
   `index.html`, and update `<title>`/`<meta description>` (keep existing OG/Twitter tags).

3. **CSS imports.** `App.tsx` imports `./signal.css`. You can keep `App.css`
   (Tailwind/Kumo) or remove it — the design no longer uses Kumo components or
   Tailwind utility classes, and `signal.css` is self-contained. If you keep
   Tailwind's preflight it won't conflict, but removing the unused Kumo/Tailwind
   imports keeps the bundle lean. The `@cloudflare/kumo` and `@phosphor-icons/react`
   deps can be removed from `package.json` once nothing else imports them.

4. **Verify + deploy.** `npm run dev` to check, then `npm run deploy` (build + push to
   Cloudflare Workers). No worker changes are needed — it's still a static SPA.

---

## Screens / Views

Single scrolling page. Max content width **1120px** (`.wrap`, 32px side padding).
Sticky 62px topbar. Section vertical padding **80px**. Alternating section
backgrounds: base `#0c0d10`, with **Selected Wins** on `#131519`.

### 1. Topbar (`TopBar`)
- Sticky, blurred, 1px bottom border `#262a31`.
- Left: pulsing 8px square "blip" (orange) + mono wordmark `shadiyn.org`.
- Right: mono nav `/about · /wins · /track-record · /contact` (hidden < 640px),
  hover → orange. Links target `#about`, `#wins`, `#path`, `#contact`.

### 2. Hero (`Hero` + `TypedGreeting` + `Console`)
- Full height: `min-height: calc(100svh - 62px)`, vertically centered.
- Two columns `1.22fr / 0.82fr`, gap 54px; collapses to one column < 860px.
- Background: a soft animated orange radial "glow" top-right (`breathe` 7s).
- Left column, top → bottom:
  - **Status pill** (mono, bordered): green pulsing dot + "Senior Account Executive · Cloudflare · London, UK".
  - **Typed greeting** (mono, orange): cycles "Hello, I'm Shadi." / "Hola, soy Shadi." / "مرحبا، أنا شادي." with a blinking caret. Arabic line uses the Arabic font.
  - **Name** `Shadi Youssef / Nassar.` — 700 weight, `clamp(44px,7.2vw,90px)`, the trailing period orange.
  - **Tagline** (standout one-liner): "A **frontier-tech** background, applied to enterprise sales." — "frontier-tech" orange.
  - **Lede** (muted, max 42ch): the consultative intro paragraph (see Copy).
  - **"now →" line**: orange left border + tag, current role.
  - **CTAs**: primary (solid orange) "Get in touch" → `#contact`; ghost "View track record" → `#path`.
- Right column: the **telemetry console** (see below).

#### Telemetry console (`Console`)
A bordered, rounded card (mono throughout) with a big drop shadow:
- Header row: green pulsing "live" dot + "live" / "London, UK" (uppercase, faint).
- Title block: "Senior Territory AE" / "Cloudflare · UK & Ireland".
- **`// quota attainment` `vs. 100% target`** — three rows, each: period (faint),
  big white % (27px, orange `%` sign), and a **green `▲ +N` over-target delta**.
  Data: Q1 '26 = 140% (+40), FY25 = 105% (+5), FY24 = 125% (+25).
  (Important: this replaced earlier progress bars, which read as "underachieving"
  for >100% values. Do **not** reintroduce bars.)
- Promotion ladder: "BDR ▸ AE ▸ **Sr AE · P4**" (last item orange).
- **`// languages`**: "English · Español · العربية" (Arabic in the Arabic font).

### 3. About (`About`) — section `01`
Two columns `1.4fr / 1fr` (one column < 780px):
- Left: three muted paragraphs (see Copy). Bold spans in `--fg`.
- Right: a bordered card with two mono headings — `// stack & methods` and
  `// credentials` — each a row of bordered "chips" (hover → orange).

### 4. Selected Wins (`Wins`) — section `02`, background `#131519`
3-column grid of stat cells (2-col < 680px, 1-col < 480px), hairline gaps.
Six cells; the four percentage cells are "hot" (orange number):
140% Q1'26 · 105% FY25 · 125% FY24 · 116% Avg qtr BDR · P4 Promoted Q1'25 · 10k+ Article reads.

### 5. Track Record (`TrackRecord`) — section `03`, id `#path`
Vertical timeline (orange→line gradient rail, ringed nodes). Five entries
(Cloudflare Sr AE, Cloudflare BDR, Layer · Ubanquity, Deloitte, Cryptolingo · Kent
Blockchain Society) — each with a mono date, company + orange role, and bullets.

### 6. Contact (`Contact`) — section `04`
Centered. Big headline link "Let's build something." (mailto), then three mono
pill links (Email / LinkedIn / GitHub), hover → orange + lift.

### 7. Footer (`Footer`)
Mono, faint: "© 2026 Shadi Youssef Nassar" / "London · Madrid · Beirut".

---

## Interactions & Behavior
- **Typed greeting** — `TypedGreeting.tsx`. setTimeout-driven type/erase loop across
  three language strings; blinking caret via CSS. Honors `prefers-reduced-motion`
  (shows the first line statically).
- **Scroll reveal** — `useReveal.ts`. Elements with class `.reveal` start at
  `opacity:0 / translateY(16px)` and get `.in` when they enter the viewport
  (IntersectionObserver, threshold 0.08, staggered `transition-delay`). **Robust:**
  if IO is missing, reduced-motion is set, or the observer never fires, everything is
  force-shown (no blank content). Keep this fallback.
- **Hover states** — nav/links/chips/buttons shift to orange; buttons + pills lift 2px.
- **Background animations** — `pulse` (dots/blip), `breathe` (hero glow). All disabled
  under reduced-motion.
- **Responsive** — breakpoints at 860 / 780 / 680 / 640 / 480px (see CSS).

## State Management
Minimal. Only `TypedGreeting` holds local `useState` (current text + Arabic flag).
`useReveal` runs one `useEffect`. No data fetching, no global state, no routing
(anchor links only). All résumé content is hardcoded in the components' data arrays
(`QUOTA`, `WINS`, `ROLES`, `STACK`, `CREDENTIALS`).

## Design tokens
Defined as CSS custom properties at the top of `signal.css`:

| Token | Value | Use |
|---|---|---|
| `--bg` | `#0c0d10` | page background |
| `--bg-2` | `#131519` | alt section bg / console base |
| `--panel` | `#16181d` | cards / console top |
| `--line` | `#262a31` | borders / dividers |
| `--line-2` | `#33373f` | secondary borders |
| `--fg` | `#eef1f4` | primary text |
| `--fg-soft` | `#9aa3ad` | body text |
| `--fg-faint` | `#646c76` | labels / meta |
| `--accent` | `#f6821f` | Cloudflare-nod orange |
| `--accent-2` | `#ffa94d` | lighter orange |
| `--ok` | `#3ddc84` | live dots + over-target deltas |

- **Type:** `--sans` Space Grotesk; `--mono` JetBrains Mono; `--ar` IBM Plex Sans Arabic.
- **Radii:** 5–6px (chips/labels), 8–9px (buttons/pills), 14px (console), 999px (dots/pills).
- **Spacing:** section padding 80px; content gutter 32px; max width 1120px.
- **Background grid:** 46×46px faint white lines on the body.

## Copy (exact)
- **Tagline:** "A frontier-tech background, applied to enterprise sales."
- **Lede:** "I help UK&I enterprises secure and modernize their infrastructure on
  Cloudflare, rebuilding the customer experience from legacy architectures to
  serverless and full-stack platform migrations. Five years, BDR to Senior Territory
  AE, consistently over quota. Before cloud, I came up through blockchain, consulting
  and digital transformation, across three languages and three continents."
- **now →** "Senior Territory Account Executive, UK&I at Cloudflare"
- About paragraphs, timeline bullets, chips: see the component files / reference HTML.
- **Contact:** email `shadihamdan1997@gmail.com`, LinkedIn
  `linkedin.com/in/shadiyoussefnassar/`, GitHub `github.com/shadiyoussef`.

## Assets
None. The design is fully typographic — no images, logos, or icon files. (Company
names are plain text; no Cloudflare/Deloitte logos are used.) Fonts load from Google
Fonts via the `<link>` tags in `index.head.html`. A `favicon.ico` is referenced by
the existing `index.html` — leave as-is or update separately.

## Files in this bundle
- `signal.reference.html` — approved mockup (source of truth).
- `src_app/App.tsx` — app shell (replaces existing App.tsx).
- `src_app/signal.css` — full stylesheet (all tokens + component styles).
- `src_app/hooks/useReveal.ts` — scroll-reveal hook.
- `src_app/components/*.tsx` — TopBar, TypedGreeting, Console, Hero, About, Wins,
  TrackRecord, Contact, Footer.
- `index.head.html` — font links + title/meta to merge into `index.html`.
