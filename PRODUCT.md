# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Marketing/founder-level decision-makers at mid-to-large companies in
"complex sectors" (per existing site copy — industrial, B2B, architecture,
health/fitness) evaluating a creative partner. They compare Bera against
generic agencies and freelancers, and are visiting to judge whether Bera can
credibly combine brand aesthetics with measurable business performance.
Secondary audience: US/international clients (site ships PT-BR and EN-US).

## Product Purpose

Bera Creative Studio's public marketing site. It establishes credibility,
communicates the four service pillars (Identidade Visual, Audiovisual &
Motion, Digital & Web, Performance & Tráfego), and converts visitors into
qualified leads through a contact/diagnostic form. It is not a portfolio
tool or a client dashboard — purely acquisition-facing.

## Positioning

"Domine a percepção" (Own the perception) — Bera's differentiator is
treating brand perception as a performance lever, not decoration: "quando
sua marca domina [a percepção], o preço deixa de ser o critério." Unlike
agencies that sell only aesthetics, Bera pairs creativity with strategy and
technology (design + funnel/media performance) as one continuous system.

## Operating Context

Single-page bilingual (PT-BR default, EN-US toggle) marketing site:
hero, services, authority/method, cases, FAQ, contact/footer. Two editing
surfaces exist for two different audiences:
- Bera's non-technical team edits copy, images, and client logos through a
  git-based CMS (Decap CMS) once deployed — no code, no agent involvement.
- Developers adjust the visual system (fonts, colors, spacing, type scale)
  through a dev-only visual control panel that never ships to production.

## Capabilities and Constraints

Static Vite + React 19 + TypeScript + Tailwind SPA, no application backend.
Content persistence is git-based (CMS writes commits; Netlify rebuilds on
push) — content changes are not instant/dynamic, they require a rebuild.
Every visible string must exist in both PT and EN; no hardcoded
untranslated copy. Hosting: **Netlify, connected to
github.com/fabriciomota-crypto/Bera-Creative-Studio (branch `main`)** —
repo is live, Identity/Git Gateway invite sent to the team.

## Brand Commitments

- Name: **Bera** / **Bera Creative Studio**. Tagline/pillar: **"Domine a
  percepção"** (Own the perception).
- Symbol: an angular, geometric bear-head mark. **Real vector logo now
  integrated** — extracted as an inline SVG directly from bera.digital's own
  source (`fabriciomota-crypto/bera-site`) and saved at
  `src/assets/brand/bera-logo.svg`, used live in `src/components/Logo.tsx`.
  No placeholder needed anymore.
- Real photo/video assets pulled from the same source repo and in active
  use: hero background video (`public/videos/hero.m4v`), team photos for
  Fabricio Mota and Thiago Có (`public/images/team/`), the green-container
  brand photo used in the Authority section
  (`public/images/container-bera-01.png`), and the real favicon
  (`public/favicon.png`).
- Typeface: **Parabolica** (real weights confirmed from bera-site's source:
  Light, Regular, Medium, Bold, Bold Oblique) paired with a serif italic
  called **"TheSerifon"** for single emphasized words. **Neither font's
  files are in this project** — bera.digital's own `assets/fonts/` path
  404s (likely relocated/hashed in its production build), so getting the
  real files requires Bera to supply them directly. Until then, the site
  self-hosts **Archivo** (open license) as a structural placeholder mapped
  1:1 onto the same weight names; the serif-italic pairing isn't
  implemented at all yet.
- Palette: **corrected against the real bera.digital source**, which
  contradicts the brand-guideline PDF's stated 60% blue / 25% mint ratio —
  its CSS uses `var(--teal)` (green, `#47B86D`) 30 times and `var(--blue)`
  (`#303E98`) zero times. Green is now the dominant, always-visible color;
  blue survives only as a rare hover-flourish. See `DESIGN.md` for the full
  token system and the reasoning.
- Voice: per the guideline's channel table, the website tone is **"Moderno
  & Direto"** — strategic whitespace, clarity over ornamentation, no
  excess. Contrast with Instagram's punchier/faster tone — that's out of
  scope here.
- 7 years in market (existing site copy — treated as a standing brand
  fact, not to be altered without the user's say).

## Evidence on Hand

- `Base/Brand Guidelines BERA FIGMA.pdf` — brand rationale, save-area rule,
  typography, tone-of-voice table. Its stated color ratio is superseded by
  direct evidence from the real site (see Palette above).
- **The live site itself, bera.digital** — all real section copy (hero,
  stats, services, cases, about/manifesto, method, team, contact, footer)
  was pulled directly from its rendered HTML and is now the site's actual
  content, replacing an earlier round of invented placeholder copy.
- **`fabriciomota-crypto/bera-site`** (a snapshot of the live site's own
  source) — real logo SVG, hero video, team photos, the container-brand
  photo, favicon, and the real CSS confirming actual color usage. No font
  files or client-logo assets were in that snapshot.
- Three real case studies: Innovare, Zagross Itália, Guidoni, with real
  metrics (+2.5M views, +40% conversão) — pulled from the live site, not
  fabricated.
- No testimonials, press, or additional case data exist — future work must
  not invent any.

## Product Principles

1. **Perception is the product.** Every screen should visibly encode
   strategy and precision, not just decoration — this is the site's own
   sales pitch, so it cannot look like a generic template.
2. **Bilingual parity is non-negotiable.** No PT-only or EN-only surface,
   ever — including CMS-authored and FAQ content.
3. **Content and design are separated.** Bera's team edits words/images via
   the CMS; the visual system changes only through code + the dev-only
   panel. The CMS never exposes color/font/spacing controls.
4. **Precision over flourish.** Angular, geometric, technical restraint
   beats generic SaaS decoration (blob gradients, glassmorphism, fake-3D
   icons) — this is a named anti-pattern list, not a vague preference.

## Accessibility & Inclusion

No product-specific requirement beyond a general WCAG AA baseline
(contrast, keyboard nav, semantic headings, labeled form fields) — not
explicitly confirmed by the client, applied as sound default practice.
