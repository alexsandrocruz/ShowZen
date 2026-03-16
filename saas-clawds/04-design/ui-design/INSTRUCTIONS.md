---
department: 04-design
subfolder: ui-design
priority: P1
stage: design
estimated_time: "3-7 days"
requires:
  - 04-design/wireframes
---

# UI Design

## Overview

This folder is for creating **high-fidelity visual designs** — the final look and feel of your product before development. UI design takes your wireframe layouts and applies color, typography, spacing, imagery, and brand identity to create screens that look like the real product.

Good UI design isn't about being flashy. It's about **clarity and trust**. Clean typography, consistent spacing, and thoughtful color use signal professionalism and reduce cognitive load. Users should never have to think about the interface — only about their task.

**For MVP stage:** You don't need to design every screen in pixel-perfect detail. Focus on:
1. The 3-5 most important screens (core user flow)
2. A style guide that developers can extrapolate from
3. A handful of component designs that cover 80% of the UI

## Questions to Answer

1. **Do you have existing brand guidelines?** Logo, colors, fonts, tone of voice?
2. **What visual style are you aiming for?** Minimal/clean, bold/colorful, corporate/trustworthy, playful/friendly?
3. **Who are your design inspirations?** 3-5 SaaS products whose visual design you admire.
4. **What's your primary brand color?** And what emotion should it evoke?
5. **What's your typography preference?** Geometric/modern (Inter, Plus Jakarta), humanist/warm (Source Sans, Nunito), or monospace/technical?
6. **Dark mode?** Not for MVP usually, but it's cheaper to plan for it than retrofit.
7. **Who is designing this?** Founder, designer on team, freelancer, AI tool?
8. **What format do developers need?** Figma handoff, CSS specs, Tailwind classes?

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# UI Design: [Your SaaS Name]

## Design Direction
> [2-3 sentences: The visual personality of your product. e.g., "Clean and professional with a friendly tone. Inspired by Linear's minimalism and Notion's warmth."]

## Style Guide Essentials

### Colors
| Token | Hex | Usage |
|---|---|---|
| Primary | #[XXXXXX] | Buttons, links, key actions |
| Primary Hover | #[XXXXXX] | Hover states for primary elements |
| Secondary | #[XXXXXX] | Secondary buttons, badges |
| Background | #[XXXXXX] | Page background |
| Surface | #[XXXXXX] | Cards, panels, modals |
| Text Primary | #[XXXXXX] | Headings, body text |
| Text Secondary | #[XXXXXX] | Muted text, labels, captions |
| Success | #[XXXXXX] | Success states, positive actions |
| Warning | #[XXXXXX] | Warning states |
| Error | #[XXXXXX] | Error states, destructive actions |
| Border | #[XXXXXX] | Dividers, input borders |

### Typography
| Element | Font | Weight | Size | Line Height |
|---|---|---|---|---|
| H1 | [Font] | Bold (700) | 32px | 40px |
| H2 | [Font] | Semibold (600) | 24px | 32px |
| H3 | [Font] | Semibold (600) | 20px | 28px |
| Body | [Font] | Regular (400) | 16px | 24px |
| Small | [Font] | Regular (400) | 14px | 20px |
| Caption | [Font] | Medium (500) | 12px | 16px |

### Spacing Scale
- `4px` — Tight (within components)
- `8px` — Compact (related elements)
- `16px` — Default (between components)
- `24px` — Relaxed (between sections)
- `32px` — Spacious (between major sections)
- `48px` — Generous (page-level padding)

### Border Radius
- `4px` — Inputs, small elements
- `8px` — Cards, buttons
- `12px` — Modals, larger panels
- `Full (9999px)` — Avatars, pills

### Shadows
| Level | CSS | Usage |
|---|---|---|
| sm | `0 1px 2px rgba(0,0,0,0.05)` | Cards, dropdowns |
| md | `0 4px 6px rgba(0,0,0,0.07)` | Elevated panels |
| lg | `0 10px 15px rgba(0,0,0,0.1)` | Modals, popovers |

## Design Inspirations
| Product | What to Steal | Screenshot Link |
|---|---|---|
| [Product 1] | [e.g., Their dashboard layout] | [URL/Mobbin link] |
| [Product 2] | [e.g., Their onboarding flow] | [URL] |
| [Product 3] | [e.g., Their pricing page design] | [URL] |

## Screen Designs
| Screen | Status | Link to Design |
|---|---|---|
| Dashboard | [Done / In Progress / Not Started] | [Figma link] |
| [Core screen 1] | | |
| [Core screen 2] | | |
| Settings | | |
| Onboarding | | |

## Developer Handoff Notes
- [ ] All designs in Figma with auto-layout for responsive guidance
- [ ] Color tokens defined as CSS variables or Tailwind config
- [ ] Component states designed (default, hover, active, disabled, loading)
- [ ] Mobile breakpoints addressed (if in scope)
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Figma** | Industry-standard UI design and handoff | Free / $15/editor/mo |
| **Sketch** | macOS-native design tool | $10/editor/mo |
| **Adobe XD** | Part of Creative Cloud suite | $10/mo |
| **Mobbin** | UI inspiration from real apps (searchable) | Free / $12/mo |
| **Realtime Colors** | Generate and preview color palettes in context | Free |
| **Google Fonts** | Free, high-quality web fonts | Free |
| **Heroicons / Lucide** | Consistent icon sets | Free |
| **v0.dev / Galileo AI** | AI-generated UI components and designs | Free / $20/mo |

## Agent Instructions

When populating this folder for a founder:

1. Read `company-profile.md` for brand info and `04-design/wireframes/README.md` for screen layouts
2. Propose a design direction based on the target audience — B2B enterprise = clean/professional, prosumer = modern/bold, consumer = playful/warm
3. Suggest a specific color palette with hex codes — not vague "pick a blue"
4. Recommend specific fonts from Google Fonts that match the design direction
5. Fill out the full style guide (colors, typography, spacing, borders, shadows)
6. List 3 design inspirations with specific aspects to reference
7. Don't create actual design files — document the design specifications that a designer or developer can execute
8. Include developer handoff notes for implementation with Tailwind or CSS variables
9. If the founder has no designer, recommend AI tools (v0.dev) and template-based approaches

## Example Output (Abbreviated)

```markdown
# UI Design: InvoiceBot

## Design Direction
> Modern and clean with a creative edge — professional enough for client-facing invoices, but with personality that resonates with designers. Inspired by Linear's precision, Framer's creative confidence, and Stripe's clarity.

### Colors
| Token | Hex | Usage |
|---|---|---|
| Primary | #6C5CE7 | Buttons, links (creative purple) |
| Background | #FAFAFA | Page background |
| Surface | #FFFFFF | Cards, invoice preview |
| Text Primary | #1A1A2E | Headings, body text |
| Success | #00B894 | Payment received, sent status |
| Error | #E17055 | Overdue, failed states |
```

## Cross-References

- **Depends on:** [04-design/wireframes](../wireframes/) — Visual design applies to wireframe layouts
- **Feeds into:** [04-design/design-system](../design-system/) — Style guide seeds the design system
- **Related:** [04-design/prototype](../prototype/) — High-fidelity designs become clickable prototypes
- **Related:** [05-development/frontend](../../05-development/frontend/) — Developers implement these designs
- **Related:** [08-launch/landing-page](../../08-launch/landing-page/) — Landing page uses the same visual system
