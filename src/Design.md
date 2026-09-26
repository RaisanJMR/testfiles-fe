---
name: TestFiles
colors:
  surface: '#f9f9fb'
  surface-dim: '#d9dadc'
  surface-bright: '#f9f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f5'
  surface-container: '#eeeef0'
  surface-container-high: '#e8e8ea'
  surface-container-highest: '#e2e2e4'
  on-surface: '#1a1c1d'
  on-surface-variant: '#47464c'
  inverse-surface: '#2f3132'
  inverse-on-surface: '#f0f0f2'
  outline: '#78767d'
  outline-variant: '#c8c5cd'
  surface-tint: '#5d5d6f'
  primary: '#01010c'
  on-primary: '#ffffff'
  primary-container: '#1b1b2b'
  on-primary-container: '#848397'
  inverse-primary: '#c6c4da'
  secondary: '#5d5d6e'
  on-secondary: '#ffffff'
  secondary-container: '#dfdef3'
  on-secondary-container: '#616173'
  tertiary: '#020305'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1d21'
  on-tertiary-container: '#84858a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e3e0f7'
  primary-fixed-dim: '#c6c4da'
  on-primary-fixed: '#1a1a2a'
  on-primary-fixed-variant: '#464557'
  secondary-fixed: '#e2e0f5'
  secondary-fixed-dim: '#c6c5d9'
  on-secondary-fixed: '#191a29'
  on-secondary-fixed-variant: '#454556'
  tertiary-fixed: '#e2e2e8'
  tertiary-fixed-dim: '#c6c6cc'
  on-tertiary-fixed: '#1a1c20'
  on-tertiary-fixed-variant: '#45474b'
  background: '#f9f9fb'
  on-background: '#1a1c1d'
  surface-variant: '#e2e2e4'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  code-lg:
    fontFamily: JetBrains Mono
    fontSize: 15px
    fontWeight: '500'
    lineHeight: 22px
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  mono-badge:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-md: 1.5rem
  gutter-lg: 2rem
  margin: 1rem
  margin-md: 2rem
  margin-lg: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system embodies a quiet, utilitarian precision built for software engineers, QA analysts, and systems architects. The experience strips away marketing theater, gradients, and decorative animations to prioritize pure task completion: locating, configuring, and downloading dummy files in seconds. 

Drawing from modern technical minimalism, the interface relies on rigorous typographic cadence, hairline architectural borders, monochrome data badges, and generous structural whitespace. Interactions are instantaneous, crisp, and predictable. The aesthetic evokes the quiet authority of high-end developer documentation and CLI tools—understated, highly organized, and effortlessly functional.

## Colors

The palette is strictly restrained, anchored by deep ink `#1B1B2B` for high-priority typography, high-contrast actions, and hairline active states. Secondary text, technical descriptions, and passive metadata rely on muted slate `#6B6B7D` to create effortless typographic scan paths without stark visual competition.

Structural foundation:
- **Canvas (`#FFFFFF`)**: Base canvas and primary elevated surface layers.
- **Surface Subtle (`#F4F4F6`)**: Subtle neutral fill used for code blocks, inactive chip pills, hover states, and recessed drop targets.
- **Hairline Border (`#E5E5EB`)**: High-precision boundary separation for cards, dividers, tables, and inputs.
- **Dark Ink (`#1B1B2B`)**: Primary text, active controls, solid button fills, and prominent borders.
- **Muted Slate (`#6B6B7D`)**: Secondary copy, technical labels, file size notations, and helper text.

## Typography

Typographic hierarchy couples the neutral legibility of **Inter** with the technical accuracy of **JetBrains Mono**.

- **Inter**: Drives all structural UI labels, headings, body copy, and dialog contexts. Headings use tight negative tracking (`-0.01em` to `-0.03em`) and medium/semibold weights to maintain modern posture without visual clutter.
- **JetBrains Mono**: Serves as the technical accent. Applied strictly to file extensions (`.CSV`, `.PDF`, `.MP4`), byte sizes (`1.2 MB`, `500 KB`), hash keys, CLI snippets, and payload parameter tags.
- Large titles step down dynamically via defined mobile scales below 768px viewports.

## Layout & Spacing

The layout model is built on an 8-point rhythm inside a fixed-max-width shell (max `1120px`), ensuring high scan efficiency on wide desktop displays while preventing bloated horizontal line lengths.

### Breakpoints & Adaptive Rules
- **Mobile (< 768px)**: 4-column layout, `margin`: `1rem` (16px), `gutter`: `1rem` (16px). Grids for file categories collapse to 1 or 2 columns. Search, category filter pills, and quick download actions stack vertically into a single column flow.
- **Tablet (768px – 1024px)**: 8-column layout, `margin-md`: `2rem` (32px), `gutter-md`: `1.5rem` (24px). File format cards display in a 2-column or 3-column configuration.
- **Desktop (> 1024px)**: 12-column layout, `margin-lg`: `3rem` (48px), `gutter-lg`: `2rem` (32px). File category grids expand up to 4 columns. Options drawers and configuration panels dock alongside list results.

## Elevation & Depth

This system avoids ambient drop shadows, multi-tiered blurs, and skeuomorphic bevels. Visual depth is established purely through **low-contrast outlines** and **tonal layering**:

- **Hairline Framing**: Standard card borders, list bounds, and input perimeters utilize a crisp 1px solid border in `#E5E5EB`.
- **Tonal Contrast**: Interactive card surfaces remain `#FFFFFF` against canvas `#FFFFFF`, defined solely by their 1px `#E5E5EB` boundary. Recessed wells, code snippet containers, and secondary action wrappers adopt `#F4F4F6` with zero border.
- **Active & Focus Hierarchy**: Active focus rings and selected card strokes switch directly to 1px or 2px solid `#1B1B2B`.
- **Floating Overlays (Modals & Tooltips)**: For elevated context menus and tooltips, depth is achieved via a stark 1px solid `#1B1B2B` border or a razor-sharp micro-shadow (`0 1px 2px rgba(27, 27, 43, 0.06)`), retaining absolute functional clarity.

## Shapes

Corner radiuses reflect strict restraint, balancing geometric discipline with modern soft edges:

- **Base Radius (`0.5rem` / 8px)**: Applied to buttons, inputs, file cards, selection panels, and segmented controls.
- **Outer Containers (`0.625rem` / 10px)**: Applied to large card groups, code block wrappers, and modal windows.
- **Micro Radius (`0.25rem` / 4px)**: Applied to monospace chips, inline format tags, and technical badges.
- **Fully Rounded (`9999px`)**: Permitted exclusively for toggle switches and select circular action triggers.

## Components

### Buttons
- **Primary**: Solid `#1B1B2B` fill, `#FFFFFF` text (Inter SemiBold, 14px), 8px border radius, 8px 16px padding. Subtle click compression (`transform: scale(0.98)`).
- **Secondary / Outline**: `#FFFFFF` background, 1px solid `#E5E5EB` border, `#1B1B2B` text. On hover: border switches to `#1B1B2B` with zero layout shift.
- **Ghost / Utility**: Transparent background, `#6B6B7D` text. On hover: `#F4F4F6` background, `#1B1B2B` text.

### Chips & Badges
- **Format Badges**: Compact tags displaying file types (`PDF`, `JPG`, `MP4`, `SQL`). Background `#F4F4F6`, border 1px solid `#E5E5EB`, text `#1B1B2B` in `JetBrains Mono` 11px uppercase, 4px border radius, padding 2px 6px.
- **Filter Chips**: 8px radius pills for category filtering. Unselected: `#FFFFFF` fill, 1px `#E5E5EB` border, `#6B6B7D` label. Selected: `#1B1B2B` fill, `#FFFFFF` label.

### File Asset Cards
- White surface (`#FFFFFF`) framed by a 1px `#E5E5EB` border.
- Layout: Top header displaying format badge and file type title, middle section showcasing default size in `JetBrains Mono` (`e.g., 2.4 MB`), bottom row with instant direct download trigger and configurable parameter dropdown trigger.
- Hover state: Border shifts to `#1B1B2B` with zero movement or artificial elevation.

### Input Fields & Selectors
- Background `#FFFFFF`, 1px solid `#E5E5EB` border, 8px radius, text 14px Inter `#1B1B2B`.
- Placeholder color: `#6B6B7D`.
- Focus state: Border color transitions immediately to `#1B1B2B` with an offset outline of 1px solid `#1B1B2B`. No diffuse glow.

### Checkboxes & Segmented Size Controls
- **Checkboxes**: 16x16px square with 4px border radius. Unchecked: 1px `#E5E5EB` border on `#FFFFFF`. Checked: solid `#1B1B2B` with white checkmark.
- **Size Selector Tabs**: Compact segmented group inside `#F4F4F6` housing with 8px radius. Active segment raises into `#FFFFFF` with 1px `#E5E5EB` border and `#1B1B2B` mono text.

### CLI & Copy Snppet Box
- Recessed `#F4F4F6` container with 8px radius and inner padding (12px 16px).
- Text rendered in `JetBrains Mono` 13px `#1B1B2B` alongside a minimalist inline icon button for one-click cURL/Wget command copying.