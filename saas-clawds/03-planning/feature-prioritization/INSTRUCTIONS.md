---
department: 03-planning
subfolder: feature-prioritization
priority: P0
stage: planning
estimated_time: "1-2 days"
requires:
  - 01-idea/competitor-analysis
  - 02-validation/customer-interviews
  - 03-planning/product-roadmap
---

# Feature Prioritization

## Overview

This folder is for **objectively deciding what to build first and what to defer**. Every founder has a list of 50 features they want to build. The ones who succeed are the ones who ruthlessly prioritize.

Feature prioritization replaces gut feelings with structured frameworks. The two most effective:

- **RICE Scoring** — Rate each feature by Reach, Impact, Confidence, and Effort to get a quantitative priority score
- **MoSCoW** — Categorize features as Must have, Should have, Could have, or Won't have

Use RICE when you need objective scoring across many features. Use MoSCoW when you need quick categorization for stakeholder alignment.

## Questions to Answer

1. **What is your complete feature wish list?** Every feature you've considered — brain dump, no filtering.
2. **Which features were most requested in customer interviews?** Direct signal from validation.
3. **Which features differentiate you from competitors?** From your competitor analysis gap list.
4. **What's the effort level for each feature?** T-shirt sizing: S (days), M (1-2 weeks), L (3-4 weeks), XL (1+ months).
5. **Which features are table stakes?** What does every competitor have that you must match to be taken seriously?
6. **Which features have dependencies?** Feature B requires Feature A to work.
7. **What's your team's current capacity?** How many developer-weeks do you have before launch?

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# Feature Prioritization: [Your SaaS Name]

## Feature Inventory

### Complete Feature List
| # | Feature | Source | Category |
|---|---|---|---|
| 1 | [Feature name] | [Interview / Competitor / Founder vision] | [Core / Growth / Polish / Infrastructure] |
| 2 | | | |

## RICE Scoring

| Feature | Reach (1-10) | Impact (1-3) | Confidence (%) | Effort (person-weeks) | RICE Score | Rank |
|---|---|---|---|---|---|---|
| | | | | | | |

**How to calculate:** RICE Score = (Reach × Impact × Confidence) / Effort

**Scoring guide:**
- **Reach:** How many users will this affect in a given time period? (1=few, 10=all)
- **Impact:** How much will this move the needle? (1=low, 2=medium, 3=high)
- **Confidence:** How sure are you about Reach and Impact estimates? (100%=data-backed, 50%=gut feel)
- **Effort:** Person-weeks of engineering time (use honest estimates, then add 50% buffer)

## MoSCoW Categorization

### Must Have (MVP — ship breaks without these)
| Feature | Why It's a Must | Effort |
|---|---|---|
| | | |

### Should Have (Important but MVP works without them)
| Feature | Value Add | Effort |
|---|---|---|
| | | |

### Could Have (Nice to have — do if time allows)
| Feature | Benefit | Effort |
|---|---|---|
| | | |

### Won't Have (Explicitly cut from this phase)
| Feature | Why Cut | Revisit When |
|---|---|---|
| | | |

## Priority Stack Rank (Final)
| Rank | Feature | RICE Score | MoSCoW | Sprint |
|---|---|---|---|---|
| 1 | | | Must | Sprint 1 |
| 2 | | | Must | Sprint 1 |
| 3 | | | Must | Sprint 2 |
| 4 | | | Should | Sprint 3 |
| 5 | | | Should | Sprint 3 |

## Dependencies
```
[Feature A] → [Feature B] → [Feature C]
                           → [Feature D]
```

## Decision Log
| Date | Decision | Rationale |
|---|---|---|
| [Date] | [Feature X moved from Must to Could] | [Why] |
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Linear** | Issue tracking with priority fields | Free / $8/user/mo |
| **Notion** | Feature database with scoring formulas | Free / $10/mo |
| **ProductBoard** | Customer feedback → feature prioritization pipeline | $25/maker/mo |
| **Google Sheets** | Simple RICE scoring spreadsheet | Free |
| **Airtable** | Feature database with custom views | Free / $20/mo |

**Frameworks:** RICE (Intercom), MoSCoW (DSDM), ICE Scoring, Kano Model, Opportunity Scoring

## Agent Instructions

When populating this folder for a founder:

1. Read all `01-idea/` documents (especially competitor analysis for table stakes) and `02-validation/` documents (especially customer interviews for requested features)
2. Build the complete feature inventory from all sources: interviews, competitor gaps, founder vision
3. Score every feature using RICE with honest, evidence-based ratings
4. Categorize using MoSCoW — be strict about "Must Have" (it should be 3-5 features max for an MVP)
5. Create the final stack rank combining RICE scores and MoSCoW categories
6. Map dependencies — which features block others?
7. Assign features to sprints based on the development timeline from company profile
8. Challenge the founder: push back on "Must Haves" that are really "Should Haves"
9. Include a decision log for tracking changes over time

## Example Output (Abbreviated)

```markdown
## RICE Scoring
| Feature | Reach | Impact | Confidence | Effort | RICE | Rank |
|---|---|---|---|---|---|---|
| Invoice generator | 10 | 3 | 90% | 2 weeks | 13.5 | 1 |
| Figma time tracking | 8 | 3 | 80% | 3 weeks | 6.4 | 2 |
| Payment links | 9 | 2 | 85% | 1 week | 15.3 | 1* |
| Client portal | 5 | 2 | 60% | 4 weeks | 1.5 | 5 |

## Must Have
| Feature | Why | Effort |
|---|---|---|
| Invoice generator | Core value prop — can't launch without it | 2 weeks |
| Stripe payment link | Customers need to get paid (top interview request) | 1 week |
```

## Cross-References

- **Depends on:** [01-idea/competitor-analysis](../../01-idea/competitor-analysis/) and [02-validation/customer-interviews](../../02-validation/customer-interviews/)
- **Feeds into:** [03-planning/mvp-scope](../mvp-scope/) — Top-ranked features define the MVP
- **Related:** [03-planning/product-roadmap](../product-roadmap/) — Priority stack rank populates the roadmap
- **Related:** [03-planning/development-plan](../development-plan/) — Sprint assignments come from this prioritization
