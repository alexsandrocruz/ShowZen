---
department: 21-product-management
subfolder: product-market-fit
priority: P0
stage: post-launch
estimated_time: "2-3 days"
requires: ["13-analytics/cohort-analysis", "14-retention/user-onboarding"]
---

# Product-Market Fit

## Overview

This folder is for **measuring product-market fit** — PMF surveys (e.g., Sean Ellis test), retention curves, and leading indicators. PMF is when you have a repeatable way to acquire customers who love the product.

## Questions to Answer

1. **Have you run the Sean Ellis PMF survey?** ("How would you feel if you could no longer use this product?")
2. **What's your target PMF score?** (40%+ "very disappointed" is a common threshold)
3. **What retention signals indicate PMF?** (e.g., Day 1/7/30 retention)
4. **What's your North Star metric?** (Correlates with retention)
5. **How do you segment PMF by cohort?** (Signup date, channel, segment?)
6. **How often do you measure PMF?** (Quarterly survey? Monthly retention?)
7. **What actions do you take if PMF is low?** (Pivot, narrow segment, improve onboarding?)

## Output Template

Create a `README.md` in this folder with:

```markdown
# Product-Market Fit: [Your SaaS Name]

## PMF Survey (Sean Ellis)
**Question:** "How would you feel if you could no longer use [product]?"
- Very disappointed
- Somewhat disappointed
- Not disappointed
**Target:** 40%+ "Very disappointed" = strong PMF signal

## PMF Score History
| Date | Very Disappointed % | Sample Size | Segment |
|---|---|---|---|
| | | | |

## Retention-Based PMF Signals
| Metric | Target | Current | Notes |
|---|---|---|---|
| Day 1 retention | | | |
| Day 7 retention | | | |
| Day 30 retention | | | |
| Month 3 retention | | | |
| NRR (expansion - churn) | | | |

## North Star Metric
- **Definition:** 
- **Why it indicates PMF:** 
- **How to influence it:** 

## PMF by Segment
| Segment | PMF Score | Retention | Notes |
|---|---|---|---|
| [ICP A] | | | |
| [ICP B] | | | |
| [Channel X] | | | |
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Typeform / Google Forms** | PMF survey | Free |
| **ChartMogul / ProfitWell** | Retention curves | $ |
| **Amplitude / Mixpanel** | Retention, cohorts | $ |
| **Superhuman PMF guide** | PMF framework | Free |
| **Lenny's Newsletter** | PMF, retention content | Free |

## Agent Instructions

1. Read [13-analytics/cohort-analysis](../../13-analytics/cohort-analysis/) for retention data
2. Read [14-retention/user-onboarding](../../14-retention/user-onboarding/) for activation
3. Define Sean Ellis PMF survey and 40% threshold
4. List retention-based PMF signals (D1, D7, D30, M3)
5. Define North Star metric from [13-analytics/kpi-dashboard](../../13-analytics/kpi-dashboard/)
6. Create PMF by segment table (ICP, channel)
7. Cross-ref [01-idea/niche-selection](../../01-idea/niche-selection/) for segment definitions

## Cross-References

- [13-analytics/cohort-analysis](../../13-analytics/cohort-analysis/) — Retention data
- [13-analytics/kpi-dashboard](../../13-analytics/kpi-dashboard/) — North Star
- [01-idea/niche-selection](../../01-idea/niche-selection/) — Segments
