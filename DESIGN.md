<!-- SEED: established from Base/Brand Guidelines BERA FIGMA.pdf ahead of implementation, since the current code's tokens (generic teal accent, no blue, Inter font, blob gradients) contradict the official guideline. Re-run /impeccable document once the rebuild lands to capture the actual implemented tokens/components. -->
---
name: Bera Creative Studio
description: Geometric-technical bold minimalism for a creative-and-performance studio that "owns the perception."
colors:
  primary: "#303E98"
  primary-deep: "#232d70"
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
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-cream}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.neutral-black}"
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
Solid Blue, not white space dressed up as "minimalism" — blue carries
structure and weight across roughly 60% of any given screen, mint appears
only where something genuinely needs to stand out (25%), and grey/black/
cream neutrals do the quiet work of contrast and legibility (15%). The
website channel specifically calls for "Modern & Direct": strategic
whitespace and clarity, not maximalism.

This system explicitly rejects generic AI-generated-template visual
language: no blurred gradient blobs, no glassmorphism, no fake-3D icons, no
stock photography, no floating 3D orbs.

**Key Characteristics:**
- Angular, cut-corner geometry over rounded pills
- Solid Blue as the dominant structural color, not an afterthought
- Flat, layered depth — never blur/glow
- Generous, deliberate white space; content never feels crowded
- The bear's geometry echoed in dividers, section markers, and background
  panels (abstractly, not as literal logo repetition)

## Colors

The palette is a strict 60/25/15 system, not a free palette — every new
surface should be checked against this ratio.

### Primary
- **Solid Blue** (`#303E98`): the dominant color (60%). Used for primary
  backgrounds, nav structure, key headline emphasis words, primary section
  dividers, and the dominant panel color in layered background compositions.

### Secondary
- **Electric Mint** (`#47B86D`): the accent (25%). Reserved for things that
  must visibly stand out: the primary CTA button's hover state, active
  nav/tab states, tags/labels, small icon accents, the language-switcher
  active state. Never used as a large background fill.

### Neutral
- **Bera Grey** (`#CECECE`): light-mode borders, dividers, muted surfaces.
- **Bera Black** (`#080810`): dark-mode background / near-black text on
  light surfaces.
- **Bera Surface** (`#111120`): dark-mode secondary/elevated surface.
- **Bera Cream** (`#F0EDE6`): dark-mode primary text color (never pure
  white — it's warmer and softer against Bera Black).

### Named Rules
**The 60/25/15 Rule.** Any full-viewport section should read as roughly
60% blue structure, 25% mint accents, 15% grey/black/cream neutral detail.
If a section is >50% white/neutral space with a green accent doing all the
work (the old implementation's mistake), it's off-brand — blue is missing
its job.

## Typography

**Display/Body Font:** Parabolica (all weights: Hairline, Light, Regular,
Medium, Bold, Black). **Font files are not yet supplied** — the
implementation self-hosts Archivo as a structural stand-in, mapped to the
same weight names, swappable in one file once real Parabolica files exist.

**Character:** A single geometric-technical grotesk carries the whole
system — no serif, no script, no secondary "editorial" pairing. The
weight range itself creates hierarchy.

### Hierarchy
- **Display** (Black/900, `clamp(2.75rem, 6vw, 5rem)`, line-height 1.05):
  Hero H1 only.
- **Headline** (Bold/700, `clamp(2rem, 4vw, 3rem)`, line-height 1.15): H2
  section titles.
- **Title** (Bold/700, `1.25rem–1.5rem`, line-height 1.25): H3, card
  titles.
- **Body** (Regular/400, `1rem–1.125rem`, line-height 1.6, max ~68ch):
  paragraphs, descriptions.
- **Label** (Bold/700, `0.75rem`, letter-spacing 0.12em, uppercase):
  eyebrow tags, nav links, button labels.

### Named Rules
**The One-Family Rule.** Every weight in the system comes from the same
type family (Parabolica → Archivo fallback). Never mix in a second
typeface for "contrast" — the weight range already provides it.

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

### Buttons
- **Shape:** `rounded-none`, or a single clipped corner via `clip-path`
  (angular, on-brand) — never `rounded-full`.
- **Primary:** Solid Blue background / Bera Cream text at rest — the
  dominant color earns the primary action. **Electric Mint** background /
  Bera Black text on hover — the accent's one clear "stand out" moment.
- **Secondary/Ghost:** transparent background, 2px Bera Black/Cream border,
  fills or shifts border color to mint on hover.

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
- **Do** keep Solid Blue as the dominant structural color (60%) in every
  full section — it must be visibly present, not just in a logo dot.
- **Do** use angular/cut corners as the default shape language.
- **Do** use generous white space and a clear H1/H2/H3/body hierarchy.
- **Do** keep the bear's geometric language present abstractly (angular
  divider shapes, panel cuts) even without the final logo file.
- **Do** write direct, clarity-first website copy ("Modern & Direct") —
  save punchier/faster phrasing for Instagram-only content, not this site.

### Don't:
- **Don't** use blurred gradient "blob" glows behind sections (the previous
  implementation's `blur-3xl`/`blur-2xl` circles) — flat layering only.
- **Don't** use fake-3D icons, glassmorphism panels, or floating 3D orbs.
- **Don't** use generic stock photography or fabricated client
  testimonials/logos — use real assets only, placeholders stay abstract.
- **Don't** default to `rounded-full` pill buttons/cards as the shape
  language.
- **Don't** write robotic AI-marketing copy ("Unlock your potential with
  AI-powered solutions") — copy stays direct and specific to Bera's actual
  service pillars.
- **Don't** copy Human Academy's (or any reference site's) literal layout,
  icons, or text — only abstracted mood (background depth technique, motion
  pacing) may be adapted, translated into this palette.
