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
untranslated copy. Hosting target: Netlify (not yet created as of this
writing). GitHub repo exists but its remote URL was not provided to this
session — git remains local-only until connected.

## Brand Commitments

- Name: **Bera** / **Bera Creative Studio**. Tagline/pillar: **"Domine a
  percepção"** (Own the perception).
- Symbol: an angular, geometric bear-head mark (strength, confidence,
  precision). **No official vector/PNG export of the logo exists in the
  project folder** — only a PDF brand guideline. Until Bera supplies real
  logo files, the site uses a styled text wordmark as an explicitly
  temporary placeholder (isolated in one `<Logo />` component).
- Typeface: **Parabolica** (weights Hairline, Light, Regular, Medium, Bold,
  Black). **No font files exist in the project folder.** Until supplied,
  the site self-hosts **Archivo** (open license) as a structural
  placeholder mapped 1:1 onto the same weight names.
- Palette (from `Base/Brand Guidelines BERA FIGMA.pdf`): Solid Blue
  `#303E98` (primary, 60% usage), Electric Mint `#47B86D` (accent, 25%),
  Grey `#CECECE` + black/cream neutrals (15%). See `DESIGN.md` for the full
  token system.
- Voice: per the guideline's channel table, the website tone is **"Moderno
  & Direto"** — strategic whitespace, clarity over ornamentation, no
  excess. Contrast with Instagram's punchier/faster tone — that's out of
  scope here.
- 7 years in market (existing site copy — treated as a standing brand
  fact, not to be altered without the user's say).

## Evidence on Hand

- `Base/Brand Guidelines BERA FIGMA.pdf` — full brand system (logo
  rationale, save-area rule, typography, color ratios, tone-of-voice table).
- Three named case studies already present in the original scaffold
  (Lumna Fitness, MMS Arquitetura, EquipproVix) — treated as real client
  names, not fabricated; no real photos/logos for them exist yet, so
  visuals stay abstract/geometric placeholders until real assets are
  uploaded via the CMS.
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
