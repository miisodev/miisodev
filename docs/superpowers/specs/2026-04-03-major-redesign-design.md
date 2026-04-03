# miiso.dev — Major Redesign Design Spec

**Date:** 2026-04-03  
**Author:** Kevin Miiso Novo  
**Status:** Approved

---

## Overview

A ground-up visual and structural redesign of miiso.dev. The design philosophy is "if polar.sh and claude.ai had a baby modelled by the best designers and engineers in the world" — precision typography, deep dual-mode aesthetic, generous whitespace, subtle purposeful motion, and a premium developer-tool feel with warmth and personality.

The site serves three audiences in priority order:
1. **Potential clients/collaborators** — see capabilities, reach out for custom work
2. **SaaS buyers/investors** — evaluate products, click through to buy or acquire
3. **Other builders/founders** — follow the journey, read the blog, find on socials

---

## Bun Migration

- Delete `package-lock.json` — `bun.lock` already exists and is the canonical lockfile
- No script changes needed — `next dev/build/start` work natively with bun
- Vercel auto-detects bun when `bun.lock` is present — no deployment config change
- Ensure `.gitignore` covers `package-lock.json` and `node_modules`

---

## Design System

### Color Tokens

```
Light mode:
  --bg:       #F6F4F1   (Paper — main background)
  --surface:  #E4DED2   (Stone — cards, elevated surfaces)
  --text:     #000000   (Black — primary text)
  --muted:    #6B6B6B   (secondary text, labels, icons)
  --accent:   #F95C4B   (Coral — all site UI interactions)
  --brand:    #0067FF   (Blue — myClerkBook elements only)
  --border:   #D8D2C8   (subtle card borders)

Dark mode:
  --bg:       #0C0C0F   (near-black — main background)
  --surface:  #161618   (dark surface — cards, elevated)
  --text:     #F0EDE8   (warm white — primary text)
  --muted:    #555558   (secondary text, labels, icons)
  --accent:   #F95C4B   (Coral — unchanged across modes)
  --brand:    #0067FF   (Blue — unchanged across modes)
  --border:   #222226   (subtle dark card borders)
```

Coral contrast ratios:
- Coral on Paper: 4.6:1 (WCAG AA pass)
- Coral on dark bg: 5.1:1 (WCAG AA pass)

### Typography

Font: **Outfit** (Google Fonts) — sole typeface across the entire site.  
Exception: **JetBrains Mono** retained exclusively for code blocks inside blog posts.

Loaded via `next/font/google`:
- Outfit: weights `[300, 400, 500, 600, 700, 800]`, subset `['latin']`, display `swap`
- JetBrains Mono: weights `[400, 500]`, subset `['latin']`, display `swap` — loaded only in blog post layout

| Role     | Weight | Size (desktop) | Tracking     | Usage |
|----------|--------|----------------|--------------|-------|
| Display  | 800    | 64–72px        | -0.03em      | Hero name, major page titles |
| Heading  | 600    | 24–32px        | -0.02em      | Section titles |
| Subhead  | 500    | 16–18px        | -0.01em      | Card titles, nav links |
| Body     | 400    | 14–16px        | 0            | Prose, descriptions |
| Label    | 500    | 11–12px        | +0.08em uppercase | Tags, chips, overlines, category labels |

### Spacing

- Base grid: 8px
- Section vertical gap: 96–128px
- Card padding: 24px
- Max content width: `max-w-4xl` (896px), centered
- Page horizontal padding: 16px (mobile), 24px (desktop)

### Border Radius

- Cards: 12px
- Buttons: 8px
- Chips/tags: 6px

### Elevation

Light mode (subtle depth):
```
card-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)
card-shadow-hover: 0 4px 12px rgba(0,0,0,0.10), 0 8px 32px rgba(0,0,0,0.06)
```

Dark mode (no shadows — border glow instead):
```
card-border-hover: rgba(249, 92, 75, 0.20)   (coral glow on hover)
brand-border-hover: rgba(0, 103, 255, 0.25)  (blue glow on myClerkBook card)
```

---

## Global Layout

### Header

- Sticky, `z-50`
- Height: 56px
- Full-width with `max-w-4xl` centered inner
- Background: `var(--bg)` at 85% opacity + `backdrop-blur-md`
- No bottom border — blur provides the visual separation

**Left:** `miiso.dev` — Outfit 600, 15px. Coral on hover, smooth transition.

**Right (nav links):** Outfit 500, 14px. Muted color default. Coral on hover. Active state: coral 2px underline that animates width from 0→100% on page mount. Links: SaaS · Web Dev · Game Dev · Blog.

**Far right:** 3-way theme toggle — pill shape with system/sun/moon icons. Smooth sliding pill indicator. Keyboard navigable (`role="radiogroup"`, each option `role="radio"` with `aria-checked`).

**Skip link:** First focusable element in DOM. Visually hidden until focused. Jumps to `#main-content`. Coral background when visible.

### Footer

- Single row, `max-w-4xl` centered
- Top border: `1px solid rgba(249, 92, 75, 0.15)`
- Padding: 64px top/bottom

Layout:
- Left: `© 2026 miiso.dev` — Outfit 400, 13px, muted
- Center: Social icon row — X, GitHub, Twitch, YouTube, TikTok. 18px stroke icons, `aria-hidden` with `aria-label` on parent `<a>`. Muted default, coral on hover.
- Right: `miisodev@gmail.com` — Outfit 500, 13px, label style, coral on hover

### Page Transitions

Single CSS animation on every page:
```css
@keyframes pageEnter {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}
/* 400ms ease-out, applied to the page root element */
```

`@media (prefers-reduced-motion: reduce)` disables all animations site-wide — elements render at final state immediately.

---

## Home Page (`/`)

### Hero

No card, no box. Pure typography. Top padding: 120px.

```
[LABEL]   "Founder & CEO · Durban, South Africa"
          Outfit 500, 12px, coral, uppercase, tracking +0.08em

[NAME]    "Kevin Miiso Novo"
          Outfit 800, 64px (mobile: 48px), tracking -0.03em
          Black (light) / warm white (dark)

[TAGLINE] "Building AI-powered products that ship."
          Outfit 300, 20px, muted

[BIO]     2 sentences of prose
          Outfit 400, 15px, muted, max-w-lg, line-height 1.65

[SOCIALS] Inline text row: x.com · twitch · youtube · tiktok · github · miisodev@gmail.com
          Outfit 500, 14px, muted. Separator: · (middle dot). Coral on hover.
          margin-top: 24px
```

Hero entrance: staggered fade-in. Label → Name → Tagline → Bio → Socials, each delayed 80ms apart. Disabled under `prefers-reduced-motion`.

### myClerkBook Featured Card

Full-width card. Stone surface (light) / dark surface (dark).  
Left border: 4px solid `#0067FF` — the only blue element on the page.

Contents:
- `SAAS PRODUCT` label — blue, uppercase, 11px
- `myClerkBook` — Outfit 700, 22px
- `Smart bookkeeping for modern professionals.` — Outfit 400, 15px, muted
- 2-line description — Outfit 400, 14px
- `myclerkbook.com →` — Outfit 500, 14px, blue

Hover: shadow lift (light) / blue border glow `rgba(0,103,255,0.25)` (dark). `translateY(-1px)` transition 200ms.

### What I Can Do

Heading: `What I can do` — Outfit 700, 32px. No `</>` prefix.

6-card 2-col grid (1-col mobile):
- Each card: Stone border 1px, Paper bg (light) / dark surface (dark), 12px radius, 24px padding
- Overline label: Outfit 500, 11px, coral, uppercase, tracking wide
- Title: Outfit 600, 16px
- Description: Outfit 400, 14px, line-height 1.6

Hover: border color transitions to coral, background gets subtle coral tint `rgba(249,92,75,0.03)`.

Capabilities:
1. Product & Strategy
2. Design & Branding
3. Development & Engineering
4. DevOps & Infrastructure
5. AI/ML & Automation
6. Mobile & Desktop

### What I Do

Heading: `What I do` — Outfit 700, 32px.

3-card 3-col grid (1-col mobile):
- Each card: Stone border 1px, 12px radius, 24px padding, full height flex column
- Icon: 20px stroke SVG, coral color, `aria-hidden`
- Title: Outfit 600, 18px
- Description: Outfit 400, 14px, flex-grow
- `Explore →`: Outfit 500, 14px, coral, `margin-top: auto`

Hover: border coral, `translateY(-2px)` 200ms ease.

Cards: SaaS → `/saas`, Web Dev → `/web-dev`, Game Dev → `/game-dev`.

### Logs (Timeline)

Heading: `Logs` — Outfit 700, 32px.

Vertical timeline layout:
- Left: continuous 1px vertical line in `rgba(249,92,75,0.2)`
- Each entry: coral 8px dot on the line (positioned absolute), 24px left padding offset
- Company: Outfit 600, 18px
- Role: Outfit 500, 13px, coral
- Period: Outfit 400, 13px, muted
- Description: Outfit 400, 14px, line-height 1.65
- Gap between entries: 40px

### Blog Preview

Heading: `Latest writing` — Outfit 700, 32px.

3 most recent posts as horizontal rows:
- Date: Outfit 500, 12px, muted, uppercase, fixed width left column
- Title: Outfit 500, 15px, flex-grow
- Arrow: `→` coral, right

Full-row hover: Stone bg transition 150ms, coral 2px left border. No card box by default.

`All posts →` link below the list — Outfit 500, 14px, coral.

---

## SaaS Page (`/saas`)

### Hero

```
[LABEL]   "SaaS" — coral, uppercase label
[TITLE]   "Building to ship." — Outfit 800, 56px
[SUB]     "AI-powered software products designed to be acquired." — Outfit 300, 18px, muted
[BIO]     2–3 sentences — Outfit 400, 15px, muted, max-w-lg
```

### Projects Section

Heading: `Projects` — Outfit 700, 28px.

**myClerkBook** (featured): Same blue-bordered card as homepage. Full product details, status chip `LIVE` in blue.

**Future projects**: Dashed-border placeholder card, styled cleanly:
- Border: `1px dashed rgba(249,92,75,0.3)`
- `IN DEVELOPMENT` chip — muted, uppercase label
- Title: `First Project` — Outfit 600, 20px
- Description: muted prose
- Disabled action links styled as muted chips, `pointer-events: none`

Each live project card (when added):
- Stone surface, 12px radius, 24px padding
- Left metadata column: status chip (coral=LIVE, muted=WIP), stack tags as small chips
- Right content column: name Outfit 700, tagline 400, description 400
- Action links as inline text: `Live →` · `Buy on Acquire →` · `Buy Now →` — coral

---

## Web Dev Page (`/web-dev`)

### Hero

```
[LABEL]   "Web Dev" — coral, uppercase label
[TITLE]   "Crafted for the web." — Outfit 800, 56px
[SUB]     "Framer templates built to convert." — Outfit 300, 18px, muted
[BIO]     2–3 sentences — Outfit 400, 15px, muted, max-w-lg
```

### Templates Grid

2-col grid (1-col mobile). Each card:
- Preview area: Stone bg placeholder (16:9 ratio), `rounded-t-xl`
- Card body: title Outfit 600, 16px; description Outfit 400, 14px; `View on Framer →` coral link

### Custom Projects CTA

Full-width Stone surface band, 12px radius, 40px padding:
- Headline: Outfit 600, 20px
- `Get in touch →` — coral link

---

## Game Dev Page (`/game-dev`)

Identical structure to Web Dev, with:

```
[LABEL]   "Game Dev" — coral, uppercase label
[TITLE]   "Built for Fortnite." — Outfit 800, 56px
[SUB]     "Game experiences built to engage." — Outfit 300, 18px, muted
```

Grid: `Maps` instead of `Templates`. Same card structure, same CTA band.

---

## Blog Page (`/blog`)

### Hero

```
[LABEL]   "Blog" — coral, uppercase label
[TITLE]   "Thoughts on building." — Outfit 800, 56px
[SUB]     "Writing on AI, engineering, SaaS, and building in public." — Outfit 300, 18px, muted
```

### Post List

Full post list as vertical rows:
- Date: Outfit 500, 12px, muted, uppercase, left column, fixed width
- Title: Outfit 500, 15px, flex-grow
- Read time: Outfit 500, 12px, muted, right column
- Full-row hover: Stone bg 150ms, coral 2px left border

Thin `1px rgba(border,0.4)` divider between rows.

### Individual Blog Post (`/blog/[slug]`)

Layout: `max-w-2xl` centered.

```
[LABEL]   "Blog" — coral uppercase
[TITLE]   Post title — Outfit 700, 40px, tracking -0.02em
[META]    Date · Read time — Outfit 400, 13px, muted
[DIVIDER] 1px border, margin 32px vertical
[BODY]    Outfit 400, 17px, line-height 1.75
          Code blocks: JetBrains Mono 400, 14px, Stone bg, 8px radius
          h2: Outfit 600, 24px
          h3: Outfit 600, 20px
          Links: coral, underline on hover
```

JSON-LD `Article` schema added to each post page.

---

## 3-Way Theme Toggle Component

Replaces current binary ThemeToggle.

```
States: "system" | "light" | "dark"
Storage: localStorage key "theme-preference"
Default: "system" (follows prefers-color-scheme)
```

Structure: `role="radiogroup"`, `aria-label="Color theme"`. Three `role="radio"` buttons with `aria-checked`. Pill container with sliding background indicator (CSS `transform: translateX`, 200ms ease). Icons: monitor (system), sun (light), moon (dark) — all `aria-hidden`, labels via `aria-label` on each button.

Theme application: sets `data-theme="light"|"dark"` on `<html>`. CSS responds to `html[data-theme="dark"]`. System mode removes the attribute, falls back to `@media (prefers-color-scheme: dark)`.

---

## Performance Constraints

- All page components are React Server Components except: `ThemeToggle`, `Header` (uses `usePathname`)
- `next/font/google` for both fonts — zero external font requests at runtime
- `next/image` on all images: explicit dimensions, `priority` above fold, `loading="lazy"` below
- No `will-change` on static elements — applied only during active animation, removed after
- `animation-fill-mode: forwards` on all entrance animations
- `prefers-reduced-motion: reduce` wraps all `@keyframes` — elements render at final state instantly
- Tailwind v4 — purges unused styles at build time

---

## SEO Preservation

All existing implementations carried forward unchanged:
- `generateMetadata` on every page (title, description, keywords, OG, Twitter, canonical)
- JSON-LD schemas: Person, WebSite (layout), SoftwareApplication + BreadcrumbList (inner pages)
- New: `Article` JSON-LD on each blog post page
- `sitemap.ts`, `robots.txt`, `llms.txt` — unchanged
- Canonical URLs — unchanged

---

## Accessibility Checklist

- [ ] Skip-to-content link as first DOM element, coral bg when focused
- [ ] All interactive elements: `outline: 2px solid #F95C4B; outline-offset: 3px` on `:focus-visible`
- [ ] 3-way toggle: `role="radiogroup"` + `role="radio"` + `aria-checked` + keyboard nav (arrow keys)
- [ ] All SVG icons: `aria-hidden="true"` — parent element carries `aria-label`
- [ ] Heading hierarchy: `h1` → `h2` → `h3`, no skips on any page
- [ ] Color contrast: all text/bg pairs WCAG AA minimum
- [ ] `prefers-reduced-motion` disables all CSS animations
- [ ] `lang="en"` on `<html>` (already present)

---

## Files to Create / Modify

### Modified
- `package.json` — remove `package-lock.json` reference if any; verify scripts
- `.gitignore` — add `package-lock.json`
- `app/globals.css` — full rewrite: new color tokens, Outfit variable, animation system
- `app/layout.tsx` — swap fonts (Outfit + conditional JetBrains Mono), add skip link, update ThemeToggle, update data-theme pattern
- `app/page.tsx` — full rewrite per home page spec
- `app/saas/page.tsx` — full rewrite per SaaS page spec
- `app/web-dev/page.tsx` — full rewrite per Web Dev page spec
- `app/game-dev/page.tsx` — full rewrite per Game Dev page spec
- `app/blog/page.tsx` — full rewrite per Blog page spec
- `components/Header.tsx` — new nav styles, coral active underline, replace ThemeToggle import
- `components/Footer.tsx` — new 3-column layout, social icons, email
- `components/ThemeToggle.tsx` — full rewrite as 3-way toggle
- `components/Logs.tsx` — vertical timeline with coral dot + line
- `components/PostList.tsx` — horizontal row list with hover highlight

### Created
- `app/blog/[slug]/layout.tsx` — loads JetBrains Mono scoped to blog posts (new file)

### Deleted
- `package-lock.json`

---

## Out of Scope

- No new pages beyond what currently exists
- No new content (copy stays as-is, structure changes)
- No backend changes, no new APIs
- No new dependencies beyond what's already installed
- No Framer, Figma, or external design tool exports
