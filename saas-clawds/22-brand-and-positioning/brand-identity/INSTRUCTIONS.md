---
department: 22-brand-and-positioning
subfolder: brand-identity
priority: P0
stage: pre-launch
estimated_time: "1-2 weeks"
requires: ["01-idea", "04-design/design-system"]
---

# Brand Identity

## Overview

This folder is for **brand identity** — company name, logo, visual identity (colors, typography, imagery), and brand guidelines. Brand identity is the visual foundation of how you're recognized.

## Questions to Answer

1. **What's your company name?** Final or working?
2. **Do you have a logo?** (Wordmark, symbol, combination?)
3. **What are your brand colors?** (Primary, secondary, accents?)
4. **What typography do you use?** (Headings, body, code?)
5. **What's your visual style?** (Minimal, playful, enterprise, tech?)
6. **Do you have imagery guidelines?** (Photos, illustrations, icons?)
7. **Where is your brand documented?** (Figma, PDF, Notion?)

## Output Template

Create a `README.md` in this folder with:

```markdown
# Brand Identity: [Your SaaS Name]

## Company Name
- **Legal name:** 
- **Product name / DBA:** 
- **Tagline (if different from messaging):** 

## Logo
| Asset | Format | Usage |
|---|---|---|
| Primary logo | SVG, PNG | Light bg |
| Logo (dark bg) | SVG, PNG | Dark bg |
| Favicon | ICO, PNG | Browser |
| Wordmark only | | When symbol doesn't fit |
| Icon only | | App icon, social |

## Color Palette
| Role | Hex | Usage |
|---|---|---|
| Primary | | Main brand, CTAs |
| Secondary | | Accents, links |
| Neutral | | Text, backgrounds |
| Success / Error / Warning | | UI states |

## Typography
| Use | Font | Weight |
|---|---|---|
| Headings | | |
| Body | | |
| Mono / Code | | |
| Captions | | |

## Visual Style
- **Mood:** [e.g., Professional, approachable, innovative]
- **Imagery:** [Photos, illustrations, abstract]
- **Do:** 
- **Don't:** 
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Figma** | Brand guidelines, mockups | Free tier |
| **Canva** | Simple logo, templates | Free / $ |
| **Looka / Tailor Brands** | AI logo generator | $20-65 |
| **99designs** | Logo contest | $299+ |
| **Designer** | Custom identity | $500-5k+ |

## Agent Instructions

1. Read `company-profile.md` for company and product name
2. Read [04-design/design-system](../../04-design/design-system/) for UI colors/typography
3. Ensure brand colors align with design system (or document if separate)
4. List logo assets (primary, dark, favicon, icon)
5. Document color palette with hex values
6. Define typography for headings and body
7. Cross-ref [17-legal/intellectual-property](../../17-legal/intellectual-property/) for trademark status

## Cross-References

- [04-design/design-system](../../04-design/design-system/) — UI alignment
- [17-legal/intellectual-property](../../17-legal/intellectual-property/) — Trademark
- [22-brand-and-positioning/brand-assets](../brand-assets/) — Asset storage
