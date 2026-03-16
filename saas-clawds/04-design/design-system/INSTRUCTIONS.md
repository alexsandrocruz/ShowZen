---
department: 04-design
subfolder: design-system
priority: P2
stage: design
estimated_time: "3-5 days (starter) to ongoing"
requires:
  - 04-design/ui-design
---

# Design System

## Overview

This folder is for establishing a **design system** — the set of reusable components, design tokens, patterns, and guidelines that keep your product visually consistent and your development efficient. A design system is your product's visual language, codified.

**For MVP stage:** You don't need a full-blown design system like Shopify Polaris or GitHub Primer. You need a **starter kit** — the minimum set of tokens and components that prevent your UI from becoming inconsistent as you add features.

Think of it as the 80/20 rule: 20% of components cover 80% of your UI. Start with buttons, inputs, cards, modals, and typography. Expand as your product grows.

**Why bother at MVP stage?**
- Developers move faster when they have defined components instead of guessing
- Consistency builds user trust (inconsistent UIs feel broken)
- It's 10x cheaper to start with a system than to retrofit one later

## Questions to Answer

1. **What are the most commonly used components in your product?** Buttons, inputs, cards, tables, modals, navigation?
2. **What is your design token foundation?** Colors, typography, spacing, border radius, shadows (from UI design)?
3. **Are you using a CSS framework?** Tailwind CSS, Chakra UI, Radix, Shadcn/ui?
4. **Do you need a component library?** Using a pre-built library (Shadcn, Radix) or building custom?
5. **Will the design system be documented?** Storybook, Notion, or inline docs?
6. **Who maintains the design system?** Founder, designer, or everyone contributes?

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# Design System: [Your SaaS Name]

## Foundations

### Design Tokens
*These values are the single source of truth for your entire UI.*

#### Colors
```css
:root {
  /* Primary */
  --color-primary: #[XXXXXX];
  --color-primary-hover: #[XXXXXX];
  --color-primary-light: #[XXXXXX];

  /* Neutral */
  --color-bg: #[XXXXXX];
  --color-surface: #[XXXXXX];
  --color-border: #[XXXXXX];
  --color-text: #[XXXXXX];
  --color-text-muted: #[XXXXXX];

  /* Semantic */
  --color-success: #[XXXXXX];
  --color-warning: #[XXXXXX];
  --color-error: #[XXXXXX];
  --color-info: #[XXXXXX];
}
```

#### Typography
```css
:root {
  --font-sans: '[Font Name]', system-ui, sans-serif;
  --font-mono: '[Mono Font]', monospace;

  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 2rem;      /* 32px */
}
```

#### Spacing
```css
:root {
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px */
  --space-3: 0.75rem;  /* 12px */
  --space-4: 1rem;     /* 16px */
  --space-6: 1.5rem;   /* 24px */
  --space-8: 2rem;     /* 32px */
  --space-12: 3rem;    /* 48px */
  --space-16: 4rem;    /* 64px */
}
```

## Component Library

### MVP Components (build these first)

| Component | States | Variants | Priority |
|---|---|---|---|
| Button | default, hover, active, disabled, loading | primary, secondary, ghost, destructive | P0 |
| Input | default, focus, error, disabled | text, email, password, search | P0 |
| Select / Dropdown | default, open, selected, disabled | single, multi | P0 |
| Card | default, hover, selected | standard, compact | P0 |
| Modal / Dialog | open, closing | small, medium, large | P0 |
| Toast / Notification | success, error, warning, info | auto-dismiss, persistent | P0 |
| Table | default, loading, empty | basic, sortable | P1 |
| Badge / Tag | default | status, category, count | P1 |
| Avatar | default, fallback | small, medium, large | P1 |
| Tabs | default, active | horizontal, vertical | P1 |
| Tooltip | default | top, bottom, left, right | P2 |
| Skeleton Loader | loading | text, card, table row | P2 |

### Component Specification Template

#### Button
**Variants:**
- Primary: Solid background, white text — main actions
- Secondary: Outlined, subtle — secondary actions
- Ghost: No background — tertiary, less important actions
- Destructive: Red-toned — delete, remove, cancel

**Sizes:**
- Small: `height: 32px` `padding: 0 12px` `font-size: 13px`
- Medium (default): `height: 40px` `padding: 0 16px` `font-size: 14px`
- Large: `height: 48px` `padding: 0 24px` `font-size: 16px`

**States:**
- Default → Hover (darken 10%) → Active (darken 15%) → Disabled (50% opacity, no pointer)
- Loading: Replace label with spinner, maintain button width

[Repeat for each component]

## Patterns

### Common UI Patterns
| Pattern | When to Use | Example |
|---|---|---|
| Empty State | No data to display | Illustration + headline + CTA |
| Loading State | Fetching data | Skeleton loaders matching content shape |
| Error State | Something went wrong | Error message + retry action |
| Confirmation | Destructive action | Modal with clear consequences stated |
| Pagination | Long lists | Numbered pages or "Load more" |
| Search + Filter | Browsable data | Search bar + filter dropdowns |

## Implementation

### Tailwind Config (if using Tailwind)
```js
// Paste this into tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#[XX]', hover: '#[XX]', light: '#[XX]' },
        // ... rest of palette
      },
      fontFamily: {
        sans: ['[Font]', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
```

### Component Documentation
- **Tool:** [Storybook / Notion / README in component folder]
- **Location:** [Where component docs live in the codebase]
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Figma** | Design token and component design | Free / $15/mo |
| **Storybook** | Component documentation and testing | Free (open source) |
| **Tailwind CSS** | Utility-first CSS with built-in design system | Free |
| **Shadcn/ui** | Copy-paste component library for React + Tailwind | Free |
| **Radix UI** | Unstyled, accessible component primitives | Free |
| **Chromatic** | Visual regression testing for Storybook | Free / $149/mo |

## Agent Instructions

When populating this folder for a founder:

1. Read `04-design/ui-design/README.md` for the style guide (colors, typography, spacing)
2. Convert the style guide into design tokens (CSS custom properties or Tailwind config)
3. Identify the MVP component list based on the screens in wireframes
4. Specify each P0 component with variants, sizes, and states
5. Document common UI patterns (empty states, loading, errors) — these are often forgotten
6. If using Tailwind, provide the `tailwind.config.js` extension
7. If using Shadcn/ui, list which components to install and customize
8. Keep it practical — a 10-component starter system is more useful than a 50-component spec that never gets implemented
9. Include implementation guidance (where to put files, naming conventions, documentation approach)

## Example Output (Abbreviated)

```markdown
# Design System: InvoiceBot

### Colors
:root {
  --color-primary: #6C5CE7;
  --color-primary-hover: #5A4BD1;
  --color-bg: #FAFAFA;
  --color-surface: #FFFFFF;
  --color-text: #1A1A2E;
  --color-success: #00B894;
  --color-error: #E17055;
}

### MVP Components
| Component | Priority | Implementation |
|---|---|---|
| Button | P0 | Shadcn Button + custom variants |
| Input | P0 | Shadcn Input + error state |
| Card | P0 | Custom (invoice card, client card) |
| Modal | P0 | Shadcn Dialog |
| Toast | P0 | Shadcn Sonner |
| Table | P1 | Shadcn Table (for invoice list) |
```

## Cross-References

- **Depends on:** [04-design/ui-design](../ui-design/) — Design system codifies the UI design decisions
- **Feeds into:** [05-development/frontend](../../05-development/frontend/) — Developers implement these components
- **Related:** [04-design/wireframes](../wireframes/) — Components map to wireframe elements
- **Related:** [06-infrastructure/ci-cd](../../06-infrastructure/ci-cd/) — Visual regression tests can be part of CI
