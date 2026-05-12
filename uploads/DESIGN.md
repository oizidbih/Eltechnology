---
name: NawaahOS
description: Agentic operating system for enterprise — Obsidian Future aesthetic, deep space dark, violet-magenta accent pair, glassmorphic hero surfaces
colors:
  # Backgrounds
  paper: "#05050A"
  paper-mid: "#0d0d14"
  paper-surface: "#14141e"
  surface: "rgba(20, 20, 30, 0.4)"
  surface-solid: "#14141e"
  surface-dark: "#0a0a10"

  # Text
  ink: "#ffffff"
  ink-soft: "rgba(255,255,255,0.85)"
  muted: "rgba(255,255,255,0.5)"
  muted-warm: "rgba(255,255,255,0.35)"
  nav-title: "#d1c6ff"
  muted-lavender: "#d7ccff"

  # Accent — violet-magenta pair
  accent: "#A855F7"
  accent-secondary: "#D946EF"
  accent-deep: "#7356f0"
  accent-bright: "#c084fc"

  # Accent opacity fills
  accent-fill: "rgba(168,85,247,0.15)"
  accent-fill-mid: "rgba(168,85,247,0.25)"
  accent-fill-strong: "rgba(168,85,247,0.4)"
  accent-line: "rgba(168,85,247,0.3)"
  accent-line-strong: "rgba(168,85,247,0.5)"
  accent-glow: "rgba(168,85,247,0.12)"

  # Progress / data gradient
  gradient-progress: "linear-gradient(to right, #A855F7, #D946EF)"
  gradient-glow: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)"

  # Semantic / status
  status-red: "#ef7474"
  status-amber: "#8e63f3"
  status-green: "#5ce2a6"
  status-ok: "#63bb5b"
  status-idle: "#74819b"
  rose: "#ef7474"

  # Borders
  line: "rgba(255,255,255,0.1)"
  line-strong: "rgba(168,85,247,0.5)"
  line-soft: "rgba(255,255,255,0.06)"

typography:
  display:
    fontFamily: "Inter, Avenir Next, Trebuchet MS, Segoe UI, sans-serif"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Inter, Avenir Next, Trebuchet MS, Segoe UI, sans-serif"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: 1.2
  title:
    fontFamily: "Inter, Avenir Next, Trebuchet MS, Segoe UI, sans-serif"
    fontSize: "clamp(17px, 1.35vw, 21px)"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "Inter, Avenir Next, Trebuchet MS, Segoe UI, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  data:
    fontFamily: "Inter, Avenir Next, Trebuchet MS, Segoe UI, sans-serif"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1.4
  label:
    fontFamily: "Inter, Avenir Next, Trebuchet MS, Segoe UI, sans-serif"
    fontSize: "11px"
    fontWeight: 800
    letterSpacing: "0.16em"
  mono:
    fontFamily: "SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace"

rounded:
  sm: "8px"
  md: "12px"
  full: "999px"

spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "42px"
  card: "32px"

components:
  button-primary:
    backgroundColor: "rgba(168,85,247,0.5)"
    border: "1px solid rgba(168,85,247,0.7)"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "12px 22px"
    fontSize: "11px"
    fontWeight: 800
    letterSpacing: "0.14em"
    textTransform: "uppercase"
    backdropFilter: "blur(8px)"
  button-primary-hover:
    backgroundColor: "rgba(168,85,247,0.65)"
    boxShadow: "0 0 20px rgba(168,85,247,0.4)"
    transform: "translateY(-1px)"
  button-secondary:
    backgroundColor: "transparent"
    border: "1px solid rgba(168,85,247,0.5)"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "10px 16px"
  button-warn:
    backgroundColor: "transparent"
    border: "1px solid rgba(239,116,116,0.4)"
    textColor: "#ef7474"
    rounded: "{rounded.sm}"
    padding: "10px 16px"
  pill:
    backgroundColor: "rgba(168,85,247,0.15)"
    border: "1px solid rgba(168,85,247,0.3)"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    padding: "8px 11px"
  pill-active:
    backgroundColor: "#A855F7"
    border: "1px solid #A855F7"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    padding: "8px 11px"
  card-hero:
    background: "rgba(20,20,30,0.4)"
    backdropFilter: "blur(20px)"
    border: "1px solid rgba(168,85,247,0.5)"
    borderRadius: "{rounded.md}"
    padding: "{spacing.card}"
    boxShadow: "0 0 60px rgba(168,85,247,0.12), 0 22px 70px rgba(3,8,18,0.34)"
  card-panel:
    background: "rgba(20,20,30,0.4)"
    backdropFilter: "blur(20px)"
    border: "1px solid rgba(255,255,255,0.1)"
    borderRadius: "{rounded.md}"
    padding: "{spacing.card}"
  card-data:
    background: "rgba(12,18,27,0.34)"
    border: "1px solid rgba(255,255,255,0.1)"
    borderRadius: "{rounded.sm}"
    padding: "{spacing.md}"
  progress:
    track: "rgba(255,255,255,0.08)"
    fill: "linear-gradient(to right, #A855F7, #D946EF)"
    height: "3px"
    borderRadius: "2px"
---

# Design System: NawaahOS (Obsidian Future v2)

## 1. Overview

**Creative North Star: "The Obsidian Director"**

NawaahOS operates like a high-command executive surface: deep space darkness, violet-magenta precision, glassmorphic depth on critical panels. The interface does not fill space with information — it surfaces what requires action and recedes on everything else. Users open it and immediately know what they must decide.

The palette is near-black (`#05050A`) with a violet-magenta accent pair (`#A855F7` / `#D946EF`). Hero and decision panels use glassmorphism — `backdrop-filter: blur(20px)` with semi-transparent fills — as a deliberate elevation signal reserved for surfaces that demand attention. Data rows, KPI lists, and supporting panels use flat dark surfaces that recede behind the hero layer. Typography is bold at display scale and clean at data scale, with gradient progress bars as the only multi-color data treatment.

**Key Characteristics:**
- Deep space `#05050A` canvas — not navy, not grey, near-black with depth
- Violet-magenta pair: `#A855F7` primary, `#D946EF` secondary (gradient fills, hover states)
- Glassmorphism on hero/decision panels only: `rgba(20,20,30,0.4)` + `backdrop-filter: blur(20px)`
- Outer glow border `rgba(168,85,247,0.5)` on critical panels; `rgba(255,255,255,0.1)` on standard
- Radial glow depth behind hero panels: `radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)`
- Progress bars always gradient: `linear-gradient(to right, #A855F7, #D946EF)`
- Inset rose bar `inset 4px 0 0 var(--rose)` on urgent/critical decision items
- RTL-mirrored on Arabic locale; inset bars flip to end edge
- WCAG AA: status always dot + text, never color alone

## 2. Colors: The Deep Space Palette

### Canvas
- **Paper** (`#05050A`): Primary canvas. Near-black, not navy. High contrast foundation.
- **Paper Mid** (`#0d0d14`): Slightly lifted canvas for secondary sections.
- **Paper Surface** (`#14141e`): Solid surface for non-glassmorphic panels.

### Glass Surfaces
- **Hero Surface** (`rgba(20,20,30,0.4)`): Glassmorphic fill. Used with `backdrop-filter: blur(20px)` on hero decision panels and primary queue panels. Never used as a flat background without the blur.
- **Standard Surface** (`rgba(20,20,30,0.4)` + `rgba(255,255,255,0.1)` border): Same glass fill, dimmer border. Supporting panels.
- **Data Surface** (`rgba(12,18,27,0.34)`): Flat. No blur. KPI rows, source rows, workforce rows.

### Accent — The Violet-Magenta Pair
- **Electric Violet** (`#A855F7`): Primary accent. Critical action buttons, active state fills, progress bar start, badge fills. The dominant accent.
- **Magenta Glow** (`#D946EF`): Secondary accent. Progress bar end, hover states on secondary elements, secondary data visualizations. Never used alone — always paired with `#A855F7` in a gradient.
- **Accent Deep** (`#7356f0`): Inset bar structural marker. Used as `box-shadow: inset 4–5px 0 0 #7356f0` on owned/elevated cards.
- **Accent Bright** (`#c084fc`): Overline labels, section header text, active nav indicators.

### Text
- **Ink** (`#ffffff`): Hero headlines, data values, decision titles.
- **Ink Soft** (`rgba(255,255,255,0.85)`): Primary body text, card content.
- **Muted** (`rgba(255,255,255,0.5)`): Labels, metadata, secondary descriptions.
- **Muted Warm** (`rgba(255,255,255,0.35)`): Timestamps, tertiary info.
- **Nav Title** (`#d1c6ff`): Section headings in nav and panel headers.

### Borders
- **Line Strong** (`rgba(168,85,247,0.5)`): Hero panel border. Signals: this panel is primary.
- **Line Standard** (`rgba(255,255,255,0.1)`): Supporting panel border. Standard container.
- **Line Soft** (`rgba(255,255,255,0.06)`): Row separators within panels.

### Semantic
- **Status Red** (`#ef7474`): Critical, error, urgent. Inset bar on decision items: `inset 4px 0 0 #ef7474`.
- **Status Amber** (`#8e63f3`): Review, pending, watch states.
- **Status Green** (`#5ce2a6`): Live / active. Status dot only.
- **Status OK** (`#63bb5b`): Done, complete.
- **Status Idle** (`#74819b`): Idle, default, no signal.

### Named Rules
**The Glow Rule.** Outer glow on hero panels only: `box-shadow: 0 0 60px rgba(168,85,247,0.12)`. Never on data rows or standard containers. Glow signals decision-level priority.

**The Glass Rule.** `backdrop-filter: blur(20px)` is the hero card signature — reserved for surfaces that demand immediate attention (critical decision panel, primary decision queue). Standard data panels use flat `rgba(12,18,27,0.34)` with no blur.

**The Gradient Rule.** Progress bars always use `linear-gradient(to right, #A855F7, #D946EF)`. Solid accent fills are for buttons and badges only. No solid-color progress bars.

**The One Dark Rule.** No light mode. Canvas is `#05050A`. Do not introduce lighter background variants.

## 3. Typography

**Primary Font:** Inter (with Avenir Next, Trebuchet MS, Segoe UI as fallbacks)
**Mono Font:** SFMono-Regular, Consolas, Liberation Mono, Menlo

### Hierarchy

| Role | Size | Weight | Tracking | Usage |
|---|---|---|---|---|
| **Display** | 36px | 700 | -0.02em | Hero decision headline — "CRITICAL DECISION:" label, hero card title |
| **Headline** | 18px | 600 | 0 | Panel section headers — "EXECUTIVE DECISIONS", "STRATEGIC KPIS" |
| **Title** | clamp(17px, 1.35vw, 21px) | 700 | 0 | Card titles, decision item titles, agent names |
| **Body** | 14px | 400 | 0 | Supporting descriptions, decision meta, source rows |
| **Data** | 14px | 700 | 0 | KPI values, percentages, status values — bold to contrast labels |
| **Label** | 11px | 800 | 0.16em | Overlines (AI-DRIVEN FOCUS.), severity tags (CRITICAL, REVIEW), nav section headers |
| **Small** | 12–13px | 400 | 0 | Timestamps, role labels, metadata |

### Named Rules
**Display + Label pairing.** Hero panels use Label (11px, 800, tracked) as overline above Display headline. This is the only context where label-above-display is intentional.

**The Weight Contrast Rule.** Adjacent text elements must differ by ≥300 weight or ≥1.25× size. Flat hierarchies read as noise.

## 4. Elevation

Four tiers, from highest to lowest:

1. **Hero / Decision panel** — `background: rgba(20,20,30,0.4)`, `backdrop-filter: blur(20px)`, border `rgba(168,85,247,0.5)`, `box-shadow: 0 0 60px rgba(168,85,247,0.12), 0 22px 70px rgba(3,8,18,0.34)`. Radial glow behind: `radial-gradient(circle at 70% 0%, rgba(168,85,247,0.15), transparent 65%)`. Top edge gradient line: `linear-gradient(90deg, rgba(168,85,247,0.7), transparent 70%)`. Reserved: critical decision, primary action queue.

2. **Supporting panel** — `background: rgba(20,20,30,0.4)`, `backdrop-filter: blur(20px)`, border `rgba(255,255,255,0.1)`, `box-shadow: 0 18px 52px rgba(3,8,18,0.24)`. Top edge gradient line: `linear-gradient(90deg, rgba(168,85,247,0.28), transparent 58%)`. Used: KPI section, source monitor, workforce panel.

3. **Data surface** — `background: rgba(12,18,27,0.34)`, border `rgba(255,255,255,0.1)`, no shadow, no blur. Used: KPI rows, decision queue items, source rows.

4. **Inset accent bar** — `box-shadow: inset 4px 0 0 #7356f0` (LTR) / `inset -4px 0 0 #7356f0` (RTL). On owned/primary items. Critical/urgent items use `inset 4px 0 0 #ef7474` (rose) instead of violet.

### Named Rules
**The Inset Bar Rule.** Violet inset bar = ownership or elevated state. Rose inset bar = urgent/critical decision. Neither is decorative. Do not apply to non-semantic containers.

## 5. Components

### Hero Decision Panel
```
background: rgba(20, 20, 30, 0.4)
backdrop-filter: blur(20px)
border: 1px solid rgba(168, 85, 247, 0.5)
border-radius: 12px
padding: 32px
box-shadow: 0 0 60px rgba(168,85,247,0.12), 0 22px 70px rgba(3,8,18,0.34)
```
Internal structure:
- `::before`: radial glow `radial-gradient(circle at 70% 0%, rgba(168,85,247,0.15), transparent 65%)`
- `::after`: top edge line `linear-gradient(90deg, rgba(168,85,247,0.7), transparent 70%)`
- Overline: Label type, `color: #c084fc`
- Sub-label: `CRITICAL DECISION:` in Label type, `color: rgba(168,85,247,0.9)`
- Headline: Display type (36px, 700, -0.02em), `color: #ffffff`
- Meta dots: 6px circle, `#ef7474` critical / `#8e63f3` amber
- Actions: primary authorize button + secondary ghost button

### Authorize Button (Hero Primary)
```
background: rgba(168, 85, 247, 0.5)
border: 1px solid rgba(168, 85, 247, 0.7)
color: #ffffff
font-size: 11px; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase
padding: 12px 22px; border-radius: 8px
backdrop-filter: blur(8px)
```
Hover: `background: rgba(168,85,247,0.65)`, `box-shadow: 0 0 20px rgba(168,85,247,0.4)`, `translateY(-1px)`

### Standard Button (Secondary/Ghost)
```
background: transparent
border: 1px solid rgba(168, 85, 247, 0.5)
color: #ffffff
padding: 10px 16px; border-radius: 8px
```

### Decision Queue Panel
Standard panel elevation. Internal items:
- Separator: `border-top: 1px solid rgba(255,255,255,0.06)`
- Urgent item: `box-shadow: inset 4px 0 0 #ef7474` (RTL: `inset -4px 0 0`)
- Severity label: Label type; colors — Critical `#ef7474`, Review `#8e63f3`, Watch `rgba(255,255,255,0.5)`
- Title: Title type, `color: #ffffff`
- Progress bar: 2px track `rgba(255,255,255,0.08)`, fill `linear-gradient(90deg, #A855F7, #D946EF)`

### KPI Row
```
display: grid; grid-template-columns: 180px 1fr 130px
padding: 13px 10px; border-radius: 8px
border-bottom: 1px solid rgba(255,255,255,0.04)
```
- KPI name: 14px, 500, `rgba(255,255,255,0.5)`
- Track: 3px, `rgba(255,255,255,0.07)`, fill `linear-gradient(90deg, #A855F7, #D946EF)`
- Value: 14px, 700, `#ffffff`
- Status suffix: 12px, 500 — on-track `muted`, watch `#8e63f3`, strong `#5ce2a6`
- Hover: `background: rgba(168,85,247,0.08)`, `padding-left: 14px`, fill `filter: brightness(1.15)`

### Pills / Chips
- **Resting:** `background: rgba(168,85,247,0.15)`, `border: 1px solid rgba(168,85,247,0.3)`
- **Active:** `background: #A855F7`, `border: 1px solid #A855F7`

### Navigation
Left rail, full-height, `background: #0a0a10`, `border-right: 1px solid rgba(255,255,255,0.06)`.
- Items: 40px min-height, 8px radius, transparent at rest
- Hover/Active: `background: rgba(168,85,247,0.14)`, `border: 1px solid rgba(168,85,247,0.5)`
- Section headers: 11px, 800, 0.20em tracked, uppercase, `#d1c6ff`
- Active indicator: 9px square (`border-radius: 0`), `#A855F7` fill — angular, deliberate

### Status Dots
8px circle, always accompanies status text. Colors: `#5ce2a6` live, `#8e63f3` pending, `#ef7474` critical, `#63bb5b` done, `#74819b` idle.

### Chat / Agent Workspace
- User message: `background: rgba(168,85,247,0.2)`, `border: 1px solid rgba(168,85,247,0.5)`, `align-self: flex-end`
- Agent message: `background: rgba(12,18,27,0.5)`, `box-shadow: inset 4px 0 0 rgba(168,85,247,0.48)`
- Composer: dark fill, violet-border send button

## 6. Do's and Don'ts

### Do:
- **Do** use glassmorphism (`backdrop-filter: blur(20px)`, `rgba(20,20,30,0.4)`) on hero and decision panels — this is the elevation signal for surfaces that demand attention.
- **Do** use `linear-gradient(to right, #A855F7, #D946EF)` for every progress bar fill. No solid-color bars.
- **Do** use outer glow `box-shadow: 0 0 60px rgba(168,85,247,0.12)` on hero panels only. Not on data rows.
- **Do** use the radial depth gradient (`rgba(168,85,247,0.15) → transparent`) inside hero panels as a background layer.
- **Do** use the rose inset bar (`inset 4px 0 0 #ef7474`) on urgent/critical decision items. It is the urgency semantic.
- **Do** use Label type (11px, 800, tracked, uppercase) for overlines, severity tags, and section headers.
- **Do** pair severity labels with color: Critical `#ef7474`, Review `#8e63f3`, Watch muted. Never text alone — always color-coded.
- **Do** mirror inset bars to end edge on RTL: `inset -4px 0 0`.
- **Do** include status dot alongside status text for WCAG AA.
- **Do** respect `prefers-reduced-motion` — guard transforms and transitions.

### Don't:
- **Don't** use glassmorphism on data rows, KPI rows, or standard list items — flat `rgba(12,18,27,0.34)` only.
- **Don't** use solid-color progress bars. The gradient pair is the only valid fill.
- **Don't** use `#A855F7` as a large background area fill. Accent fills cap at `rgba(168,85,247,0.4)`.
- **Don't** use gradient text (`background-clip: text`). Use solid `#c084fc` for emphasis.
- **Don't** use modals as first response. Inline expansion, contextual panels, drawers first.
- **Don't** add `border-left` / `border-right` > 1px as colored accent stripe. Inset `box-shadow` only.
- **Don't** introduce light-mode surfaces. Canvas is `#05050A`, always.
- **Don't** use the hero-metric template (big number + small label + gradient, repeated in a grid).
- **Don't** build card grids (icon + heading + explainer text, repeated identically).
- **Don't** use SAP/Salesforce/ServiceNow-style dense label-above-field layouts.
