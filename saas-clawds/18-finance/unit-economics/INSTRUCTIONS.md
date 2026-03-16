---
department: 18-finance
subfolder: unit-economics
priority: P0
stage: post-launch
estimated_time: "2-4 days"
requires: ["12-revenue/subscriptions", "09-acquisition"]
---

# Unit Economics

## Overview

This folder is for **LTV (Lifetime Value)**, **CAC (Customer Acquisition Cost)**, **payback period**, and **gross margin** — the metrics that show whether your business model works. LTV:CAC > 3 and payback < 18 months are healthy targets for SMB SaaS.

## Questions to Answer

1. **What's your current ARPU?** (Average revenue per user, monthly)
2. **What's your gross margin?** (Revenue minus COGS — infra, support, payment fees)
3. **What's your monthly churn rate?** (Or retention curve)
4. **What's your CAC by channel?** (Organic, paid, sales)
5. **What's your LTV?** (ARPU / churn, or from cohort data)
6. **What's your payback period?** (CAC / (ARPU × gross margin))
7. **What are your targets?** LTV:CAC ratio, payback months

## Output Template

Create a `README.md` in this folder with:

```markdown
# Unit Economics: [Your SaaS Name]

## Core Metrics
| Metric | Formula | Current | Target | Benchmark |
|---|---|---|---|---|
| ARPU | MRR / paying customers | | | |
| Gross Margin | (Revenue - COGS) / Revenue | | >80% | |
| Monthly Churn | Lost customers / Total | | <5% SMB | |
| LTV | ARPU × (1/churn) or cohort-based | | | |
| CAC | Sales + Marketing $ / New customers | | | |
| LTV:CAC | LTV / CAC | | >3 | |
| Payback (months) | CAC / (ARPU × margin) | | <18 | |

## LTV Calculation
- **Simple:** LTV = ARPU × (1 / monthly churn)
- **Cohort-based:** [Link to cohort analysis]
- **With expansion:** Factor in upsell revenue

## CAC by Channel
| Channel | CAC | Volume | Blended CAC |
|---|---|---|---|
| Organic/SEO | | | |
| Paid | | | |
| Sales/Outbound | | | |
| Referral | | | |
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **ChartMogul** | MRR, churn, LTV | $100+/mo |
| **ProfitWell** | Retention, expansion revenue | Free / $ |
| **Baremetrics** | SaaS metrics dashboard | $50+/mo |
| **Spreadsheet** | Manual LTV/CAC model | Free |

## Agent Instructions

1. Read [12-revenue/subscriptions](../../12-revenue/subscriptions/) for pricing and MRR
2. Read [13-analytics/cohort-analysis](../../13-analytics/cohort-analysis/) for churn/retention
3. Read [09-acquisition](../../09-acquisition/) for acquisition spend and channels
4. Calculate LTV using simple formula; note if cohort data available
5. Calculate CAC by channel; document blended CAC
6. Set targets: LTV:CAC 3+, payback <18 months for SMB

## Cross-References

- [12-revenue/subscriptions](../../12-revenue/subscriptions/) — Revenue model
- [13-analytics/cohort-analysis](../../13-analytics/cohort-analysis/) — Retention data
- [09-acquisition](../../09-acquisition/) — Acquisition costs
