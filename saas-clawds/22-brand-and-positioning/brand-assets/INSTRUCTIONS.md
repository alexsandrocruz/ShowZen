---
department: 22-brand-and-positioning
subfolder: brand-assets
priority: P1
stage: post-launch
estimated_time: "1 day"
requires: ["22-brand-and-positioning/brand-identity"]
---

# Brand Assets

## Overview

This folder is for **storing and organizing brand assets** — logo files, social templates, slide deck master, email signatures, and a brand kit. Centralized assets ensure everyone uses the correct, latest versions.

## Questions to Answer

1. **Where do you store brand assets?** (Drive, Dropbox, Figma, brand portal?)
2. **What logo formats do you provide?** (SVG, PNG, PDF?)
3. **Do you have social media templates?** (Sizes, formats)
4. **Do you have a slide deck template?** (Pitch, sales, internal?)
5. **What's in your brand kit?** (Logo, colors, fonts, templates?)
6. **Who can access assets?** (Public link? Internal only?)
7. **How do you version assets?** (v1, v2? Date-based?)

## Output Template

Create a `README.md` in this folder with:

```markdown
# Brand Assets: [Your SaaS Name]

## Asset Repository
- **Location:** [URL - Google Drive, Figma, etc.]
- **Access:** [Public / Internal / Request]
- **Owner:** 

## Logo Files
| Asset | Format | Use Case |
|---|---|---|
| Logo primary | SVG, PNG (1x, 2x) | Light backgrounds |
| Logo reversed | SVG, PNG | Dark backgrounds |
| Favicon | ICO, PNG 32x32, 180x180 | Browser, PWA |
| App icon | PNG 1024x1024 | App stores |
| Social square | PNG 1200x1200 | Social avatars |
| Email signature | HTML, image | Email |

## Social Templates
| Platform | Size | Template | Notes |
|---|---|---|---|
| Twitter/X | 1200x675 | | |
| LinkedIn | 1200x627 | | |
| Instagram | 1080x1080 | | |
| Facebook | 1200x630 | | |
| Open Graph | 1200x630 | | Default share image |

## Slide Deck
- **Pitch deck:** [Link]
- **Sales deck:** [Link]
- **Internal deck:** [Link]
- **Branded template:** [Link]

## Brand Kit Contents
- [ ] Logo (all formats)
- [ ] Color palette (hex, RGB, CMYK)
- [ ] Typography (fonts, weights)
- [ ] Imagery guidelines
- [ ] Voice and tone summary
- [ ] Templates (social, deck, email)
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Figma** | Design files, brand kit | Free tier |
| **Google Drive / Dropbox** | Asset storage | Free |
| **Brandfolder** | Brand asset management | $ |
| **Canva** | Templates | Free / $ |
| **Frontify** | Brand guidelines portal | $ |

## Agent Instructions

1. Read [22-brand-and-positioning/brand-identity](../brand-identity/) for logo and colors
2. List logo formats needed (SVG, PNG, favicon, app icon, social)
3. Document social template sizes (Twitter, LinkedIn, OG)
4. List slide deck types (pitch, sales, internal)
5. Create brand kit checklist
6. Recommend asset storage location
7. Cross-ref [17-legal/intellectual-property](../../17-legal/intellectual-property/) for usage rights

## Cross-References

- [22-brand-and-positioning/brand-identity](../brand-identity/) — Logo source
- [08-launch/landing-page](../../08-launch/landing-page/) — Landing page assets
- [09-acquisition/social-media](../../09-acquisition/social-media/) — Social assets
