---
department: 24-competitive-intelligence
subfolder: feature-gap-tracking
priority: P1
stage: post-launch
estimated_time: "2-3 days"
requires: ["01-idea/competitor-analysis", "03-planning/feature-prioritization"]
---

# Feature Gap Tracking

## Overview

This folder is for **tracking feature parity and gaps** — a matrix of your features vs. competitors, gap prioritization, and how gaps influence the roadmap. Close the gaps that cost you deals.

## Questions to Answer

1. **What are your critical features?** (Must-have for your ICP)
2. **What do competitors have that you don't?** (Gap list)
3. **What do you have that competitors don't?** (Advantage list)
4. **How do you prioritize gaps?** (Deal impact, effort, strategy?)
5. **How often do you update the matrix?** (Quarterly?)
6. **Who owns gap tracking?** (Product? Competitive intel?)
7. **How do gaps influence roadmap?** (Input to prioritization?)

## Output Template

Create a `README.md` in this folder with:

```markdown
# Feature Gap Tracking: [Your SaaS Name]

## Feature Parity Matrix
| Feature | Us | Competitor A | Competitor B | Competitor C |
|---|---|---|---|---|
| [Core feature 1] | Yes | Yes | No | Yes |
| [Core feature 2] | Yes | Partial | Yes | No |
| [Key differentiator] | Yes | No | No | No |
| [Gap - we lack] | No | Yes | Yes | No |
| [Gap - we lack] | No | Yes | No | Yes |
...

## Gap Priority
| Gap | Competitor | Deal Impact | Effort | Priority |
|---|---|---|---|---|
| [Feature X] | A, B | High (5+ losses) | Medium | P0 |
| [Feature Y] | A | Low | High | P2 |
...

## Advantage Matrix
| Feature | Us | Competitors |
|---|---|---|
| [Our differentiator] | Yes | None |
| [Our differentiator] | Yes | 1 has partial |
...

## Update Cadence
- **Review:** Quarterly
- **Owner:** 
- **Inputs:** Win/loss, sales feedback, competitive monitoring
- **Output:** Roadmap influence, battlecard updates
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Spreadsheet** | Feature matrix | Free |
| **Productboard** | Roadmap + competitive | $49+/mo |
| **Aha!** | Product strategy | $ |
| **Crayon** | Competitive intel | $ |
| **Manual** | Competitor signup, trial | Free |

## Agent Instructions

1. Read [01-idea/competitor-analysis](../../01-idea/competitor-analysis/) for competitor features
2. Read [03-planning/feature-prioritization](../../03-planning/feature-prioritization/) for prioritization framework
3. Create feature parity matrix (you vs 3-5 competitors)
4. List gaps (competitor has, we don't) with deal impact
5. List advantages (we have, they don't)
6. Prioritize gaps (P0/P1/P2 by impact and effort)
7. Define update cadence and roadmap influence
8. Cross-ref [21-product-management/feedback-loops](../../21-product-management/feedback-loops/) for gap feedback source

## Cross-References

- [01-idea/competitor-analysis](../../01-idea/competitor-analysis/) — Competitor features
- [03-planning/feature-prioritization](../../03-planning/feature-prioritization/) — Prioritization
- [24-competitive-intelligence/win-loss-analysis](../win-loss-analysis/) — Deal impact from losses
