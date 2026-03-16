---
department: 01-idea
subfolder: opportunity-mapping
priority: P1
stage: idea
estimated_time: "1-2 days"
requires:
  - 01-idea/problem-discovery
  - 01-idea/market-research
  - 01-idea/niche-selection
  - 01-idea/competitor-analysis
---

# Opportunity Mapping

## Overview

This folder is the **synthesis layer** of the Idea department. You've identified a problem, sized the market, chosen a niche, and mapped competitors. Now it's time to pull it all together into a clear, compelling **opportunity thesis** — a concise document that answers: "Why is this worth building, and why can we win?"

Think of this as your internal pitch. It's the document you reference when making every strategic decision — from what features to build first to how to position your marketing. If you can't articulate the opportunity clearly in this document, you're not ready to move to validation.

## Questions to Answer

1. **What specific gap exists in the market?** Not a vague "we can do it better" — what concrete unmet need have you identified?
2. **Why now?** What has changed (technology, regulation, behavior, market) that makes this the right moment?
3. **What are your unfair advantages?** Domain expertise, network, technology, distribution, unique data, founder-market fit.
4. **What is your moat potential?** Network effects, data advantages, switching costs, brand, integrations, economies of scale.
5. **What are the biggest risks to this opportunity?** Market risk, execution risk, competitive risk, timing risk.
6. **What does the first meaningful milestone look like?** The concrete achievement that proves this opportunity is real.
7. **What's the 3-year vision?** Where does this go if everything works?

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# Opportunity Mapping: [Your SaaS Name]

## Opportunity Thesis
> [2-3 sentences: The opportunity, why it exists, and why you can capture it.]

## The Gap

### What's Missing in the Market
- **Unmet need:** [Specific capability or experience that doesn't exist]
- **Evidence:** [Data points from problem discovery, market research, competitor gaps]
- **Who feels this most:** [Your chosen niche from niche-selection]

### Why This Gap Exists
- [Reason 1: Incumbents are focused on X and ignore Y]
- [Reason 2: Technology enabling this solution only recently became viable/affordable]
- [Reason 3: Market shift creating new demand]

## Timing — Why Now?

| Tailwind | Impact | Source |
|---|---|---|
| [Technology shift] | [How it enables your solution] | [Evidence] |
| [Market trend] | [How it creates demand] | [Evidence] |
| [Behavioral change] | [How it opens the door] | [Evidence] |

## Your Unfair Advantages

| Advantage | Strength (1-10) | How It Helps |
|---|---|---|
| [Founder-market fit] | | |
| [Technical expertise] | | |
| [Network / distribution] | | |
| [Unique insight / data] | | |

## Moat Potential

| Moat Type | Feasibility | Timeline to Build |
|---|---|---|
| Network effects | | |
| Data advantages | | |
| Switching costs | | |
| Brand / community | | |
| Integration ecosystem | | |

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| [Market risk] | | | |
| [Execution risk] | | | |
| [Competitive risk] | | | |
| [Timing risk] | | | |
| [Funding/runway risk] | | | |

## First Milestone
- **What:** [Concrete, measurable achievement]
- **Timeline:** [Realistic timeframe]
- **Success criteria:** [How you'll know you hit it]

## 3-Year Vision
| Timeframe | Goal | Revenue Target |
|---|---|---|
| 6 months | | |
| 12 months | | |
| 24 months | | |
| 36 months | | |

## Go/No-Go Decision
- [ ] Problem validated with evidence (pain score ≥ 7/10)
- [ ] Market large enough ($SAM > $100M or niche > $10M)
- [ ] Clear gap identified with competitive moat potential
- [ ] Timing is right (at least 2 tailwinds identified)
- [ ] Founder has at least 1 meaningful unfair advantage
- [ ] First milestone achievable within runway/resources
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Miro / FigJam** | Visual opportunity canvas mapping | Free / $8/mo |
| **Notion** | Structured document and database | Free / $10/mo |
| **Loom** | Record your opportunity thesis as a video pitch | Free / $12.50/mo |
| **Pitch / Google Slides** | Create a visual opportunity deck | Free |

**Frameworks:** Lean Canvas, Opportunity Canvas, Value Proposition Canvas

## Agent Instructions

When populating this folder for a founder:

1. Read all completed documents in `01-idea/` — this folder synthesizes everything
2. Craft a clear opportunity thesis in 2-3 sentences (concise, specific, compelling)
3. Map the gap using evidence from problem-discovery and competitor-analysis
4. Identify at least 3 "why now" tailwinds with specific evidence
5. Honestly assess unfair advantages — don't inflate them; "none yet" is a valid answer
6. Evaluate moat potential realistically — most early-stage SaaS has weak moats, that's okay
7. List at least 4 risks with specific mitigations (not generic platitudes)
8. Define a concrete first milestone with measurable success criteria
9. Fill in the Go/No-Go checklist based on evidence gathered across the department
10. If the Go/No-Go checklist has multiple unchecked items, flag this clearly for the founder

## Example Output (Abbreviated)

```markdown
# Opportunity Mapping: InvoiceBot

## Opportunity Thesis
> The $680M freelancer billing market is served by tools built for accountants, not creators. InvoiceBot is purpose-built for freelance designers — turning time tracked in Figma into beautiful, branded invoices with one click. The freelance economy is growing 17% YoY, and no incumbent is focused on the design niche.

## Timing — Why Now?
| Tailwind | Impact | Source |
|---|---|---|
| Freelance economy +17% YoY | More freelancers = more invoicing pain | Upwork/MBO Partners 2025 |
| Figma API maturity | Enables direct time-tracking integration | Figma changelog |
| IR35/1099 compliance tightening | Increases need for proper invoicing records | IRS/HMRC updates |
```

## Cross-References

- **Depends on:** All other `01-idea/` subfolders — this is the synthesis
- **Next step:** [02-validation/customer-interviews](../../02-validation/customer-interviews/) — Validate the opportunity with real people
- **Feeds into:** [03-planning/product-roadmap](../../03-planning/product-roadmap/) — Opportunity thesis drives roadmap priorities
- **Related:** [08-launch/landing-page](../../08-launch/landing-page/) — Opportunity thesis informs launch messaging
