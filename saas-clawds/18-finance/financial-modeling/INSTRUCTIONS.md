---
department: 18-finance
subfolder: financial-modeling
priority: P0
stage: pre-launch
estimated_time: "3-5 days"
requires: ["01-idea", "11-conversion/pricing-strategy"]
---

# Financial Modeling

## Overview

This folder is for **revenue and expense projections** — a financial model that shows burn rate, runway, and path to profitability. Investors and you both need this to make decisions.

## Questions to Answer

1. **What's your revenue model?** (subscription tiers, usage-based, one-time?)
2. **What are your key assumptions?** (signup rate, churn, ARPU, CAC)
3. **What are your fixed costs?** (team, infra, tools, legal, marketing)
4. **What's your current burn rate?** Monthly cash outflow
5. **How much runway do you have?** Months until cash runs out
6. **What scenarios will you model?** (base, best, worst case)
7. **What's your path to profitability?** Break-even date target?

## Output Template

Create a `README.md` in this folder with:

```markdown
# Financial Model: [Your SaaS Name]

## Key Assumptions
| Assumption | Value | Source |
|---|---|---|
| Monthly signups | | |
| Trial-to-paid % | | |
| Monthly churn % | | |
| ARPU | | |
| CAC | | |
| Gross margin | | |

## Revenue Projection (Next 24 Months)
| Month | MRR | New Customers | Churned | Net |
|---|---|---|---|---|
| M1 | | | | |
| M12 | | | | |
| M24 | | | | |

## Expense Breakdown
| Category | Monthly | Annual |
|---|---|---|
| Team (salary + benefits) | | |
| Infrastructure | | |
| Tools (SaaS) | | |
| Marketing | | |
| Legal/Accounting | | |
| Other | | |
| **Total Burn** | | |

## Runway & Scenarios
| Scenario | Runway (months) | Break-even (month) |
|---|---|---|
| Current burn, no revenue | | |
| Base case | | |
| Best case | | |
| Worst case | | |
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Google Sheets / Excel** | Financial model | Free / $ |
| **Causal** | Modeling, scenario analysis | Free tier / $ |
| **Pilot / Bench** | Bookkeeping, financial ops | $500+/mo |
| **SaaS Metrics Template** | Pre-built SaaS model | Various |

## Agent Instructions

1. Read `company-profile.md` and [11-conversion/pricing-strategy](../../11-conversion/pricing-strategy/)
2. Pull pricing tiers and ARPU assumptions
3. Estimate churn (industry benchmark: 3-7% monthly for SMB)
4. Document fixed costs from team size and [06-infrastructure/cloud-hosting](../../06-infrastructure/cloud-hosting/)
5. Build 24-month projection with base/best/worst scenarios
6. Cross-ref [18-finance/unit-economics](../unit-economics/) for LTV/CAC

## Cross-References

- [18-finance/unit-economics](../unit-economics/) — LTV, CAC inputs
- [11-conversion/pricing-strategy](../../11-conversion/pricing-strategy/) — Pricing, ARPU
- [18-finance/fundraising](../fundraising/) — Investor-ready numbers
