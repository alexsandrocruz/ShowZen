---
department: 01-idea
subfolder: competitor-analysis
priority: P1
stage: idea
estimated_time: "3-5 days"
requires:
  - 01-idea/problem-discovery
  - 01-idea/niche-selection
---

# Competitor Analysis

## Overview

This folder is for mapping the competitive landscape — understanding who else is solving this problem, how well they're doing it, and where the **gaps** are that your product can exploit.

Competitor analysis isn't about copying what others do. It's about understanding the battlefield so you can find unoccupied territory. The best SaaS companies don't win by being 10% better — they win by being **different** in a way that matters to a specific audience.

Your competitors include direct alternatives (same solution to same problem), indirect alternatives (different solution to same problem), and the status quo (doing nothing or using spreadsheets/manual processes).

## Questions to Answer

1. **Who are your 3-5 direct competitors?** Products that solve the same problem for a similar audience.
2. **Who are your indirect competitors?** Different approaches to the same underlying problem (including manual/DIY).
3. **What are each competitor's strengths?** What do their customers love about them? (Read their 5-star reviews.)
4. **What are each competitor's weaknesses?** What do customers complain about? (Read their 1-2 star reviews.)
5. **How do they price?** Tiers, pricing model, free plan, average deal size.
6. **What's their estimated revenue/traction?** Funding, team size, customer count, traffic.
7. **What gaps exist across all competitors?** Features missing, audiences underserved, UX problems, pricing issues.
8. **What would it take to switch a customer from them to you?** Switching costs, data migration, contracts.

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# Competitor Analysis: [Your SaaS Name]

## Competitive Landscape Overview
> [2-3 sentences summarizing the competitive landscape and your positioning thesis]

## Direct Competitors

### [Competitor 1 Name]
- **Website:** [URL]
- **Founded:** [Year] | **Funding:** [$X raised] | **Team size:** [~N]
- **Target customer:** [Who they serve]
- **Pricing:** [Model and tiers]
- **Est. revenue/customers:** [Best estimate + source]
- **Key strengths:** [3-5 bullets from positive reviews]
- **Key weaknesses:** [3-5 bullets from negative reviews]
- **What we can learn:** [1-2 takeaways]

### [Competitor 2 Name]
[Same structure]

## Competitor Feature Matrix

| Feature | Your SaaS | Comp 1 | Comp 2 | Comp 3 | Comp 4 |
|---|---|---|---|---|---|
| [Core feature 1] | Planned | ✅ | ✅ | ❌ | ✅ |
| [Core feature 2] | Planned | ❌ | ✅ | ✅ | ❌ |
| [Differentiator 1] | Planned | ❌ | ❌ | ❌ | ❌ |
| Free tier | | | | | |
| API access | | | | | |
| Mobile app | | | | | |

## Pricing Comparison

| Competitor | Free Tier | Starter | Pro | Enterprise |
|---|---|---|---|---|
| | | | | |

## Gap Analysis
| Gap | Why It Matters | Your Opportunity |
|---|---|---|
| | | |

## Positioning Statement
> For [target customer] who [need], [Your SaaS] is the [category] that [key differentiator], unlike [primary competitor] which [limitation].

## Switching Cost Analysis
| From | Switching Barriers | Migration Strategy |
|---|---|---|
| [Competitor] | [Data lock-in, contracts, learning curve] | [How you'll make it easy] |
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **G2** | Customer reviews, ratings, feature comparisons | Free |
| **Capterra** | Review aggregation, comparison pages | Free |
| **SimilarWeb** | Traffic estimates, traffic sources, audience overlap | Free / $199/mo |
| **BuiltWith** | Technology stack detection | Free / $295/mo |
| **Crunchbase** | Funding, team size, company data | Free / $29/mo |
| **Wayback Machine** | How competitors have evolved over time | Free |
| **Product Hunt** | Launch history, community reception | Free |

## Agent Instructions

When populating this folder for a founder:

1. Read `company-profile.md` and completed `01-idea/` folder documents
2. Identify 3-5 direct competitors and 2-3 indirect alternatives through research
3. For each competitor, pull data from G2, Capterra, Crunchbase, and their website
4. Read actual customer reviews — extract specific strengths from 5-star and weaknesses from 1-2 star reviews
5. Build the feature comparison matrix based on competitor feature pages and documentation
6. Map pricing tiers with actual numbers (not ranges)
7. Identify 3-5 genuine gaps that represent opportunities — not wishful thinking
8. Craft a positioning statement using the "For [X] who [Y]" framework
9. Be honest about where competitors are strong — founders need to know the real landscape

## Example Output (Abbreviated)

```markdown
# Competitor Analysis: InvoiceBot

## Direct Competitors

### FreshBooks
- **Funding:** $120M+ | **Team:** ~500 | **Customers:** 30M+ users
- **Pricing:** $17/mo (Lite) → $55/mo (Premium)
- **Strengths:** Beautiful UI, strong brand, excellent mobile app
- **Weaknesses:** Overkill for freelancers (full accounting), expensive for simple invoicing, slow support
- **What we can learn:** Their onboarding flow is best-in-class — study it

## Gap Analysis
| Gap | Why It Matters | Opportunity |
|---|---|---|
| No tool focuses on designers specifically | Designers need portfolio-style invoices | Design-centric invoice templates |
| Time tracking is always a separate step | Designers lose track of billable hours | Auto-detect time from Figma/Sketch |
```

## Cross-References

- **Depends on:** [01-idea/problem-discovery](../problem-discovery/) and [01-idea/niche-selection](../niche-selection/)
- **Feeds into:** [01-idea/opportunity-mapping](../opportunity-mapping/) — Gaps feed directly into opportunity thesis
- **Related:** [03-planning/feature-prioritization](../../03-planning/feature-prioritization/) — Competitor features inform your priority list
- **Related:** [11-conversion/pricing-strategy](../../11-conversion/pricing-strategy/) — Competitor pricing sets market expectations
