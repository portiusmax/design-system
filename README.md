# Tyler Darrell — Design System

The canonical design tokens for [tylerdarrell.com](https://tylerdarrell.com) and all brand assets.
A **dark theme** built around a signature **violet → teal** gradient.

This repo is the single source of truth. Import it into Claude design (or any tool) by linking
the raw token file.

## How to import into Claude design

Paste one of these raw links as the source:

- **W3C Design Tokens (recommended):**
  `https://raw.githubusercontent.com/portiusmax/design-system/main/tokens/color.json`
- **CSS variables:**
  `https://raw.githubusercontent.com/portiusmax/design-system/main/tokens/color.css`

## Colors

### Brand
| Token | Hex | Role |
|---|---|---|
| `brand.primary` | `#8B5CF6` | Violet — primary brand, gradients, accents |
| `brand.primary-light` | `#A78BFA` | Lighter violet — accent text, hover |
| `brand.accent-purple` | `#A855F7` | Purple — secondary highlight |
| `brand.secondary` | `#2DD4BF` | Teal — secondary accent |
| `brand.secondary-light` | `#5EEAD4` | Lighter teal — accent text, hover |

### Background (dark)
| Token | Hex | Role |
|---|---|---|
| `background.base` | `#0A0A0F` | Page / canvas |
| `background.surface` | `#12121A` | One level up |
| `background.elevated` | `#1A1A25` | Cards, panels |

### Text
| Token | Hex | Role |
|---|---|---|
| `text.primary` | `#F8FAFC` | Primary text |
| `text.secondary` | `#94A3B8` | Secondary text |
| `text.muted` | `#64748B` | Muted / quiet labels |
| `text.gray` | `#9CA3AF` | Neutral gray |
| `text.light` | `#E5E7EB` | Subtle light text |

### Border
| Token | Value | Role |
|---|---|---|
| `border.default` | white @ 10% | Hairline borders |
| `border.subtle` | white @ 5% | Subtle dividers |

### Semantic
| Token | Hex | Role |
|---|---|---|
| `semantic.success` | `#22C55E` | Success / positive |
| `semantic.error` | `#EF4444` | Error / destructive |
| `semantic.warning` | `#F59E0B` | Warning / caution |
| `semantic.info` | `#3B82F6` | Info, focus ring |

### Signature gradient
`gradient.brand` — `linear-gradient(135deg, #8B5CF6 0%, #2DD4BF 100%)` (violet → teal)

## Files
- `tokens/color.json` — W3C Design Tokens (DTCG) format. Source of truth.
- `tokens/color.css` — CSS custom properties.
- `preview.html` — open in a browser to see swatches.

## Roadmap
Colors first. Next: typography, spacing, radii, shadows, and component tokens.
