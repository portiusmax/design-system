# Tyler Darrell — Design System

The canonical design tokens for [tylerdarrell.com](https://tylerdarrell.com) and all brand assets.
A **dark theme** built on **Space Grotesk** + **JetBrains Mono**, around a signature **violet → teal** gradient.

Every value here was extracted from the live site — this repo is the single source of truth.

## Import into Claude design

Paste a raw link as the source:

- **Whole system (CSS variables) — recommended:**
  `https://raw.githubusercontent.com/portiusmax/design-system/main/tokens/tokens.css`
- **By domain (W3C Design Tokens / DTCG):**
  - color · `…/main/tokens/color.json`
  - typography · `…/main/tokens/typography.json`
  - spacing · `…/main/tokens/spacing.json`
  - radius · `…/main/tokens/radius.json`
  - shadow · `…/main/tokens/shadow.json`
  - motion · `…/main/tokens/motion.json`

(Repo link for "connect a repo" fields: `https://github.com/portiusmax/design-system`)

## What's inside

### 🎨 Color
Brand violet `#8B5CF6` + teal `#2DD4BF`; dark backgrounds `#0A0A0F / #12121A / #1A1A25`;
slate text ramp; semantic success/error/warning/info. Signature gradient violet→teal.
→ full table in [`tokens/color.json`](tokens/color.json)

### 🔤 Typography
- **Sans / display:** Space Grotesk · **Mono:** JetBrains Mono
- **Weights:** 400 / 500 / 600 / 700
- **Scale:** xs `0.75` → 8xl `6rem` (12 steps)
- **Roles:** display, h1–h6, body-lg, body, small, eyebrow (mono uppercase), code
- Line-heights none→loose; tracking tight / normal / wide / wider

### 📐 Spacing
4px base unit, `space-0` → `space-24` (6rem). Container widths: prose / content / wide.

### ⬜ Radius
`sm 0.25` · `md 0.375` · `lg 0.5` · `xl 0.75` · `2xl 1rem` (default card) · `full`

### 🌑 Shadow & blur
`lg`, `xl`, `card` (glass), `elevated` (purple glow), `glow-brand` (violet→teal), `glow-violet`.
Backdrop blur sm→2xl.

### ⚡ Motion
Durations 150 / 200 / 300 / 500ms · easing `standard` cubic-bezier(.4,0,.2,1) and `out`.

## Files
```
tokens/
  color.json        typography.json   spacing.json
  radius.json       shadow.json       motion.json
  color.css         tokens.css        ← full CSS variables
tailwind.preset.js  ← drop-in Tailwind theme (site runs Tailwind)
preview.html        ← open in a browser to see everything
```

### Using the Tailwind preset
```js
// tailwind.config.js
module.exports = { presets: [require('./tailwind.preset.js')] }
```

## Status
Complete first pass: color · typography · spacing · radius · shadow · motion.
Next candidates: component tokens (buttons, cards, inputs) and a light-mode variant.
