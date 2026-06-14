# DualScript — Project Context

## Company
DualScript LLC is a Wyoming-based software product company. Builds purpose-built,
vertical-specific tools for professionals with specific workflow problems.
Not consulting. Not services. Not AI wrappers. One product, one problem, done well.

Positioning: "DualScript builds vertical software for professionals."
Co-founders: Phil Casalini and Chris (50/50).
Domain: dualscript.io
Contact: info@dualscript.io

## Products
1. StencilMind — Professional stencil conversion for tattoo artists. LIVE at stencilmind.com.
2. Trading System — Software infrastructure for systematic trading. IN DEVELOPMENT.
3. Field Service SaaS — Operations software for field teams. IN DEVELOPMENT.

## Stack
- Framework: Next.js 14 App Router
- Styling: Tailwind CSS v3
- Language: TypeScript
- Fonts: Inter (display) + DM Mono (body/labels) via next/font/google
- Hosting: Vercel (auto-deploys on push to main)
- Repo: GitHub private — dualscript-site (DualScript-Dev org)

## Brand Colors
--bg:           #080d14
--accent:       #3ecfff
--accent-dim:   rgba(62,207,255,0.18)
--accent-glow:  rgba(62,207,255,0.06)
--text:         #f0f0ee
--muted:        #68778a
--border:       rgba(255,255,255,0.07)
--border-mid:   rgba(255,255,255,0.05)

## Typography
Display headings (h1, h2): Inter — weights 400, 500, 600, 700
Body, nav, labels, badges, footer, code: DM Mono — weights 300, 400, 500
Both fonts loaded via next/font/google in layout.tsx
CSS variables: --font-inter, --font-dm-mono

## Logo Rules
- Always rendered as an inline SVG — never an img tag, never an external file
- viewBox: "320 860 1340 280"
- Contains four linearGradient definitions: cyan (#00ffff) to blue (#006ee3)
- Full SVG code lives in CONTENT.md under ## Logo
- Never alter paths, gradients, colors, or viewBox

## Visual System
Background texture:
  - CSS grid: linear-gradient lines at rgba(62,207,255,0.032), 60px x 60px
  - Grain: SVG fractalNoise data URI at opacity 0.025
  - Both applied via body::before and body::after pseudo-elements

Ambient orbs (position: fixed, z-index: 0, pointer-events: none, border-radius: 50%, filter: blur):
  - Orb 1: 640x640px — radial-gradient #0055cc→#001f55 — opacity 0.22 — top-left — 22s drift
  - Orb 2: 420x420px — radial-gradient #002a55→#001020 — opacity 0.18 — bottom-right — 28s drift
  - Orb 3: 500x300px ellipse — radial-gradient #003380→transparent — opacity 0.09 — bottom-center — 35s drift
  - All animations: ease-in-out, infinite alternate, CSS only

Entrance animations:
  - fadeUp: opacity 0→1 + translateY 18px→0
  - Staggered delays per section
  - CSS only — no animation libraries

## Page Sections (in order)
1. Nav — sticky, minimal, DualScript wordmark left, Products anchor link right
2. Hero — full viewport height, bold headline, strong visual presence
3. Products — three cards with Live / In Development status badges
4. About — short company positioning statement
5. Footer — minimal, one line

## Hard Rules for Every Session
- Read CONTEXT.md and CONTENT.md before writing any code
- Use the inline SVG logo from CONTENT.md verbatim — never replace it
- Never change brand colors
- h1 and h2 use Inter — do not override with DM Mono
- All other text uses DM Mono — do not override with Inter
- Never install UI libraries (no shadcn, no radix, no headlessui)
- Never install animation libraries (no framer-motion, no gsap)
- Never add database, auth, or API routes
- All new files go inside src/
- Do not modify next.config.ts, tailwind.config.ts, tsconfig.json, or package.json without explicit approval
- Stop and ask before any action not covered by this file

## Current Page Status
- Homepage is live at dualscript.io
- Single page: hero, products (3 cards), about, footer
- No coming soon badge — this is a full company homepage
- StencilMind card links to stencilmind.com (external)
- Trading System and Field Service SaaS cards have no links (in development)
- OG image not yet created — social sharing shows blank preview
- Mobile responsive styles added but not fully tested
