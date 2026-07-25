<!-- UPDATED after auditing the real bera.digital source (fabriciomota-crypto/bera-site): its CSS uses var(--teal) (#47B86D, our `accent` token) 30 times and var(--blue) (#303E98, our `primary` token) ZERO times. The brand-guideline PDF names blue as the "60% dominant" color, but the client's own shipped site never applies it — green/teal is the real recurring color (buttons, highlighted headline words, icons, borders). Token *names* (primary/accent) are unchanged in code to avoid a churny rename, but their visual *roles* are now flipped: accent (green) is the default/dominant color everywhere; primary (blue) survives only as a rare hover-flourish on CTA buttons. -->
---
name: Bera Creative Studio
description: Geometric-technical bold minimalism for a creative-and-performance studio that "owns the perception." Editorial pass: subtraction over decoration — giant type and real photo/video carry the site, motion is a single discreet scroll-reveal, work leads the narrative.
colors:
  primary: "#303E98"
  accent: "#47B86D"
  neutral-grey: "#CECECE"
  neutral-black: "#080810"
  neutral-surface: "#111120"
  neutral-cream: "#F0EDE6"
typography:
  display:
    fontFamily: "Parabolica, Archivo, ui-sans-serif, system-ui"
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Parabolica, Archivo, ui-sans-serif, system-ui"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Parabolica, Archivo, ui-sans-serif, system-ui"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Parabolica, Archivo, ui-sans-serif, system-ui"
    fontWeight: 700
    letterSpacing: "0.12em"
rounded:
  none: "0px"
  sm: "4px"
  md: "8px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "32px"
  xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.neutral-black}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-cream}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.neutral-black}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
---

# Design System: Bera Creative Studio

## Overview

**Creative North Star: "The Angular Bear"**

Bera's visual system is built from the same geometry as its bear mark:
confident, angular, precise. Nothing is soft by default — corners are cut,
not rounded; color blocks meet at hard edges, not gradients; depth comes
from flat panels overlapping, not blur or shadow. The dominant color is
Electric Mint (green) — confirmed against the real bera.digital source,
not just the brand-guideline PDF — carrying structure and weight across
most of any given screen; Solid Blue survives only as a rare hover-flourish
on primary buttons, and grey/black/cream neutrals do the quiet work of
contrast and legibility. The website channel specifically calls for
"Modern & Direct": strategic whitespace and clarity, not maximalism.

This system explicitly rejects generic AI-generated-template visual
language: no blurred gradient blobs, no glassmorphism, no fake-3D icons, no
stock photography, no floating 3D orbs.

**Key Characteristics:**
- Angular, cut-corner geometry over rounded pills
- Electric Mint (green) as the dominant, always-visible color; Solid Blue
  reserved for a single rare hover moment, never a default fill
- Flat, layered depth — never blur/glow
- Generous, deliberate white space; content never feels crowded
- The real bear mark (see Components → Logo) in the nav/footer; its
  angularity echoed abstractly elsewhere (dividers, panel cuts)

## Colors

The brand-guideline PDF states a 60/25/15 blue/mint/neutral ratio, but the
real bera.digital source code contradicts it — `grep`-ing its CSS shows
`var(--teal)` (green) used 30 times and `var(--blue)` used **zero** times.
This file follows the real, shipped site: green is the dominant recurring
color, blue is a rare accent.

### Primary (dominant, always visible)
- **Electric Mint** (`#47B86D`, token name `accent` in code): headline
  emphasis words, primary CTA button backgrounds, active nav/language-switch
  states, icons, tags/labels, borders on hover, small divider dots.

### Rare accent (hover-only flourish)
- **Solid Blue** (`#303E98`, token name `primary` in code): appears *only*
  as the hover state of primary CTA buttons (green → blue on hover, text
  flips light). Never a resting/default fill, never a large background —
  this is deliberate: it keeps the guideline's blue in the system as a
  brand-true detail without contradicting the real site's actual usage.

### Neutral
- **Bera Grey** (`#CECECE`): light-mode borders, dividers, muted surfaces.
- **Bera Black** (`#080810`): dark-mode background / near-black text on
  light surfaces.
- **Bera Surface** (`#111120`): dark-mode secondary/elevated surface.
- **Bera Cream** (`#F0EDE6`): dark-mode primary text color (never pure
  white — it's warmer and softer against Bera Black).

### Named Rules
**The Green-Is-Default Rule.** Any color that needs to be visible at rest
— a button, a highlighted word, an active state — is green. Blue only ever
appears transiently (a hover), never as a resting state or a large fill.
If blue is doing visible work at rest anywhere, it's off-brand.

## Typography

**Display/Body Font:** Parabolica (real weight files on the live site:
Light, Regular, Medium, Bold, Bold Oblique — confirmed via `@font-face` in
bera-site's source). **Font files themselves are still not in this
project** — fetching them from bera.digital's own `assets/fonts/` path
404'd (the production build likely hashes/relocates them), so the
implementation still self-hosts Archivo as a structural stand-in, mapped to
the same weight names, swappable in one file once the real `.otf` files are
supplied.

**Character:** A single geometric-technical grotesk carries most of the
system. Note for later: the real site also pairs a serif italic
("TheSerifon", used for single emphasized words like *percepção*) — not yet
implemented here since we don't have those font files either. Worth adding
once both font families are supplied.

### Hierarchy
- **Display** (Black/900, `clamp(2.75rem, 6vw, 5rem)`, line-height 1.05):
  Hero H1 only.
- **Headline** (Bold/700, `clamp(2.25rem, 6vw, 4rem)`, line-height 1.05): H2
  section titles.
- **Title** (Bold/700, `1.375rem–1.625rem`, line-height 1.3): H3, card
  titles.
- **Body** (Regular/400, `1.125rem`, line-height 1.65, max ~65ch):
  paragraphs, descriptions.
- **Label** (Bold/700, `0.75rem`, letter-spacing 0.12em, uppercase):
  short nav/tag labels only — **not** for full descriptive phrases (a
  34-char eyebrow in all-caps is a readability failure, not a style choice;
  those get a quiet sentence-case treatment instead, see Authority).

### Named Rules
**The One-Family Rule.** Every weight in the system comes from the same
type family (Parabolica → Archivo fallback). Never mix in a second
typeface for "contrast" — the weight range already provides it.

**The Giant-Type Rule** (editorial pass, Basic Agency/Instrument direction).
Type does the work that decoration used to: H1 scales up to `7rem`, H2 up
to `4rem`. Reserve true H1 scale for the Hero only — repeating it
elsewhere (e.g. Stats numbers) makes nothing feel dominant because
everything competes; Stats uses H2 scale instead.

## Motion (editorial pass)

**One discreet device, used everywhere, instead of many different ones.**
`Reveal.tsx` fades+drifts content up by 16px on scroll-into-view
(IntersectionObserver, generous rootMargin, 2s fail-safe timeout so nothing
ever stays permanently invisible if JS/observer timing is off). No bounce,
no big transform, nothing that announces itself.

### Named Rules
**The No-Loop Rule.** No infinite/attention-holding animation anywhere
(the Hero's old marquee ticker is gone — same real tag words, presented as
a quiet static wrapped row instead of a scrolling loop). Hover motion is
limited to: a color shift, an underline growing in from 0 width
(`.link-underline`), or a ~1.03–1.04x image scale — never a translateY
lift on cards/buttons.

**The No-Box Rule.** Cards/service-items/team photos don't get a
bordered container by default — a `border-t` divider or plain spacing
separates content instead. Photography and video are the protagonists;
borders and shadows around them are chrome that competes for attention.

## Layout

Single `max-w-7xl` centered container, consistent `px-4 sm:px-6 lg:px-8`
gutters. Section vertical rhythm is generous (`py-24`) to honor the
"strategic white space" voice requirement. Two-column asymmetric grids
(e.g. Authority section) are preferred over centered single-column blocks
for body sections — it reads more editorial/considered than a stacked
template. Mobile collapses every grid to single-column with no change in
spacing rhythm (padding scales down, never disappears).

## Elevation & Depth

**No blur, no drop-shadow glows.** Depth is conveyed by flat geometric
layering: angular panels of Solid Blue / Bera Black overlapping at
different implied z-order, thin 1px borders (grey in light mode, translucent
cream in dark mode) separating surfaces, and deliberate color-blocking
(a blue panel butting directly against a cream one, no gradient transition
between them).

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. The only motion
response is a small `translateY` lift + accent-color shift on hover/focus —
never a blurred glow appearing from nowhere.

## Shapes

Corners are **cut, not rounded**, almost everywhere: buttons and cards use
either `rounded-none` or a clipped/angled corner (a small diagonal cut on
one corner, echoing the bear mark's angularity), replacing the previous
`rounded-full` pill buttons and `rounded-2xl`/`rounded-3xl` soft cards
entirely. The one exception is small circular elements that are
functionally dots/badges (e.g. a status pulse dot), which stay circular
because a "cut circle" reads as broken, not intentional.

## Components

### Logo
The real bear-mark + wordmark + trailing dot, extracted as an inline SVG
from bera.digital's own source (`src/assets/brand/bera-logo.svg`, used live
in `src/components/Logo.tsx`). Renders in `currentColor` so it adapts to
light/dark theme automatically. This replaced an earlier text-only
placeholder — no more placeholder needed.

### Buttons
- **Shape:** `rounded-none`, or a single clipped corner via `clip-path`
  (angular, on-brand) — never `rounded-full`.
- **Primary:** **Electric Mint** background / near-black text at rest — the
  dominant color earns the primary action. **Solid Blue** background /
  light text on hover — the one rare, deliberate blue moment in the system.
- **Secondary/Ghost:** transparent background, 2px border, fills or shifts
  border color to mint on hover.

### Cards / Containers
- **Corner Style:** `rounded-none` or a single clipped corner.
- **Background:** neutral surface (grey-tinted in light mode, Bera Surface
  in dark mode).
- **Shadow Strategy:** none — see Elevation & Depth. Depth via a 1px border
  and hover `translateY`.
- **Internal Padding:** generous, `p-8` minimum.

### Navigation
Fixed, translucent-blur backdrop (functional blur for legibility over
scrolled content is fine — decorative glow blobs are not). Label-style nav
links (uppercase, letter-spaced). Active/hover state shifts to mint. The
language switcher (PT-BR ⇄ EN-US) sits beside the theme toggle as a small
two-state pill — the one deliberate exception to "no pills," since it's a
binary toggle control, not a content container.

## Do's and Don'ts

### Do:
- **Do** keep Electric Mint as the dominant, always-visible color in every
  section — it must be visibly present at rest, not just on hover.
- **Do** use angular/cut corners as the default shape language.
- **Do** use generous white space and a clear H1/H2/H3/body hierarchy.
- **Do** use the real bear logo mark (`src/assets/brand/bera-logo.svg`) —
  no more placeholder needed.
- **Do** use the real photo/video assets pulled from bera.digital's own
  source where they exist (hero video, team photos, the green-container
  authority image) instead of abstract placeholders.
- **Do** write direct, clarity-first website copy ("Modern & Direct") —
  save punchier/faster phrasing for Instagram-only content, not this site.

### Don't:
- **Don't** use blurred gradient "blob" glows behind sections (the previous
  implementation's `blur-3xl`/`blur-2xl` circles) — flat layering only.
- **Don't** use fake-3D icons, glassmorphism panels, or floating 3D orbs.
- **Don't** use generic stock photography or fabricated client
  testimonials/logos — real assets exist for hero/team/authority now;
  anything still missing (case study photos, gallery images) stays an
  abstract placeholder until Bera uploads the real thing via the CMS.
- **Don't** default to `rounded-full` pill buttons/cards as the shape
  language (note: the real site itself *does* use rounded-full pills —
  this is a deliberate redesign choice, not an oversight; the visual
  reformulation brief authorizes changing shape language, just not content).
- **Don't** use Solid Blue as a resting/default fill anywhere — it is a
  hover-only flourish, confirmed against the real site's near-zero blue
  usage.
- **Don't** write robotic AI-marketing copy ("Unlock your potential with
  AI-powered solutions") — copy stays direct and specific to Bera's actual
  service pillars.
- **Don't** copy Human Academy's (or any reference site's) literal layout,
  icons, or text — only abstracted mood (background depth technique, motion
  pacing) may be adapted, translated into this palette.
- **Don't** add a newsletter signup or client-logo showcase just because
  Instrument/Basic-DEPT/The Human all have one — Bera's real site has
  neither, and this is a visual/presentation pass, not license to invent
  new content or capabilities.

## Section Order (editorial pass, reversible)

Content is identical either way — `src/design/layout.json` controls which
*order* sections render in, toggle-able from the dev panel ("Section
Order"). Hero always opens, FAQ/Footer always close.

- **`editorial`** (current default): Cases → Stats → Authority → Intro →
  Services → About → Tagline → Method → Team → Gallery → Contact. Work
  leads, services support it — per Instrument/Basic-DEPT's "work before
  services" convention.
- **`original`**: Stats → Authority → Intro → Services → Cases → About →
  Method → Team → Tagline → Gallery → Contact — the order this project
  shipped with before the editorial pass.

Flip `active` in `src/design/layout.json` (or use the panel) to revert;
nothing needs to be rebuilt from content.
