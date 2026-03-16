---
department: 17-legal
subfolder: intellectual-property
priority: P1
stage: post-launch
estimated_time: "1-3 weeks"
requires: ["17-legal/incorporation", "01-idea"]
---

# Intellectual Property

## Overview

This folder is for **protecting your IP** — trademarks, patents, trade secrets, and open-source licensing. Your brand name, product name, and core innovations are assets that increase company value and protect you from copycats.

## Questions to Answer

1. **Have you trademarked your company and product name?** In which classes?
2. **Do you have patentable technology?** (novel algorithms, unique processes)
3. **What's your open-source strategy?** (What do you open-source vs keep proprietary?)
4. **Do you use third-party open-source?** License compliance (MIT, Apache, GPL)?
5. **Do contractors/employees sign IP assignment agreements?**
6. **Do you have trade secrets?** How are they protected (NDAs, access controls)?
7. **Have you done a trademark search?** Any conflicts?

## Output Template

Create a `README.md` in this folder with:

```markdown
# Intellectual Property: [Your SaaS Name]

## Trademarks
| Mark | Type | Registration # | Jurisdiction | Status |
|---|---|---|---|---|
| [Company name] | Word | | | |
| [Product name] | Word | | | |
| [Logo] | Design | | | |

## Patents
| Invention | Type (Utility/Design) | Status | Filing # |
|---|---|---|---|
| | | | |

## Open-Source Strategy
- **Proprietary code:** (kept private)
- **Open-sourced components:** 
- **Third-party OSS used:** (list key dependencies + licenses)
- **License compliance checklist:** [ ] All OSS licenses compatible with use case

## IP Assignment
- **Employee agreement includes IP assignment:** 
- **Contractor agreement includes IP assignment:** 
- **Template location:** 
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **USPTO TESS** | Trademark search | Free |
| **Trademarkia / LegalZoom** | Trademark filing | $99-299 |
| **FOSSA / WhiteSource** | OSS license compliance | Free tier / $ |
| **Patent attorney** | Patent drafting, prosecution | $10k-50k+ |

## Agent Instructions

1. Read `company-profile.md` for product and company name
2. Check [05-development/](../../05-development/) for tech stack and OSS dependencies
3. Document trademark status (pending, filed, registered)
4. List key OSS with licenses; flag GPL/AGPL for compliance review
5. Recommend IP assignment language for contractors
6. Cross-ref [22-brand-and-positioning/brand-identity](../../22-brand-and-positioning/brand-identity/) for brand assets

## Cross-References

- [22-brand-and-positioning/brand-identity](../../22-brand-and-positioning/brand-identity/) — Logo, name, brand assets
- [05-development/](../../05-development/) — Codebase, dependencies
- [26-people-and-culture/](../../26-people-and-culture/) — Contractor agreements
