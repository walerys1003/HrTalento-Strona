# HR Talento Group — Landing Page

## Project Overview
- **Name**: HR Talento Group — AI-first ekosystem rekrutacyjny (landing page)
- **Goal**: Single-page, premium/editorial marketing site for a Polish AI-first recruitment
  startup composed of **4 vertical job-board portals** (MedTalento, TSLTalento, DevTalento,
  HoReCaTalento) powered by one shared AI engine (**AI Patch Engine v3**), converging on a
  **Q1 2027** launch.
- **Language**: Polish (PL).
- **Built from**: the supplied design handoff package (`design_handoff_hr_talento_landing`) and
  its high-fidelity HTML prototype — faithfully reproduced (editorial-brutalism aesthetic, lime
  highlight system, asymmetric grids, marquees/tickers, scroll-reveal).

## Currently Completed Features
- ✅ Fixed glass nav (brand monogram + 5 anchor links + live status pill + Kontakt CTA)
- ✅ **Mobile menu** (hamburger drawer with the 5 anchors + CTA) — closes the handoff's open mobile gap
- ✅ Live stats ticker (infinite CSS marquee)
- ✅ Hero (editorial H1 with lime highlighter, lede, CTA cluster, 4 hero stats, brief card, live diagram)
- ✅ Manifest section (4-point editorial manifesto)
- ✅ Lime brand marquee strip
- ✅ **The Four** — 4 data-rich portal deep-dives (badge, accent bar, name, pitch, body, 2×2 stats,
  6 AI features, stack chips, browser-frame screenshot + 2 AI module cards each), alternating layouts
- ✅ AI Engine section (inverted theme, 6-stage pipeline with latencies, 4 pillars)
- ✅ Founder section (photo card + bio + pull-quote + 5-ecosystem table + metric strip)
- ✅ Roadmap (6-quarter timeline, Q3 2026 active, Q1 2027 lime launch highlight)
- ✅ Contact / CTA (mailto + tel) + contact table
- ✅ Footer
- ✅ Accessibility hardening: skip-link, `:focus-visible` lime ring, `prefers-reduced-motion`
  support, descriptive image alts, semantic landmarks, SVG favicon, SEO + OpenGraph meta
- ✅ **Founder photo replaced** with the user-supplied portrait (`tomasz-kotlinski.jpg`)

## Functional Entry URIs
| Path | Description |
|---|---|
| `/` | The full single-page landing page (server-rendered via Hono) |
| `/#manifest` `/#portals` `/#engine` `/#founder` `/#roadmap` `/#cta` | In-page anchor navigation |
| `/static/style.css` | Compiled design-system stylesheet |
| `/static/assets/medtalento.jpg` | MedTalento portal screenshot |
| `/static/assets/tsltalento.jpg` | TSLTalento portal screenshot |
| `/static/assets/devtalento.jpg` | DevTalento portal screenshot |
| `/static/assets/horecatalento.jpg` | HoReCaTalento portal screenshot |
| `/static/assets/tomasz-kotlinski.jpg` | Founder portrait (user-supplied) |

There are no API endpoints — this is a static marketing landing page.

## Data Architecture
- **Data Models**: none (static content rendered server-side).
- **Storage Services**: none required.
- **Data Flow**: Hono renders the full HTML body on the edge; static assets are served from
  `public/static` via `serveStatic`.

## User Guide
Open the site root. Scroll through the nine stacked sections or use the top nav (desktop) / the
hamburger menu (mobile, < 1024px). The "Kontakt" / "Napisz do Tomasza" buttons open the founder's
email (`mailto:`); the phone button uses `tel:`.

## Tech Stack
- **Framework**: Hono (JSX renderer) on Cloudflare Pages/Workers
- **Build**: Vite + `@hono/vite-build/cloudflare-pages`
- **Styling**: Hand-written CSS design system (Instrument Serif / Geist / Geist Mono via Google Fonts)
- **JS**: Vanilla IntersectionObserver (scroll reveal), parallax on portal numerals, mobile menu

## Local Development
```bash
npm run build                       # build to ./dist
pm2 start ecosystem.config.cjs      # serve via wrangler pages dev on :3000
curl http://localhost:3000          # test
```

## Deployment
- **Platform**: Cloudflare Pages
- **Status**: ✅ Running locally in sandbox (not yet deployed to production)
- **Last Updated**: 2026-06-28

## Features Not Yet Implemented
- Production deployment to Cloudflare Pages (`*.pages.dev` URL)
- Real per-portal subdomain links (cards are currently presentational)
- Contact form / modal (currently `mailto:` / `tel:` fallback)
- Cookie-consent banner (legally required in PL/EU)
- Multi-language switcher (copy is Polish only)
- Re-exported AVIF/WebP responsive screenshots + 2× retina founder portrait

## Recommended Next Steps
1. Deploy to Cloudflare Pages (ask which deploy path: own CF account vs. Genspark-hosted).
2. Wire portal name/media to real subdomains once those products exist.
3. Add a proper contact form + cookie-consent banner.
4. Optimize images (AVIF/WebP + `srcset`), self-host fonts for performance.
5. Add Organization + Person structured data and an OG image (1200×630).
