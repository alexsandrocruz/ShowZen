---
department: 13-analytics
subfolder: cohort-analysis
priority: P1
stage: post-launch (needs 2-3 months of data minimum)
estimated_time: 3-4 hours initial setup, monthly ongoing analysis
requires:
  - 13-analytics/user-tracking
  - 13-analytics/funnel-analysis
---

# Cohort Analysis — Understanding User Behavior Over Time

## Overview

This folder contains your cohort analysis framework — the practice of grouping users by a shared characteristic (usually signup date) and tracking their behavior over time. Cohort analysis is the most honest way to measure your product's health because it shows whether each new batch of users is performing better or worse than the last.

Averages lie. If your "overall retention" is 60%, that could mean every cohort retains at 60%, or it could mean early cohorts retain at 80% while recent ones retain at 30%. Only cohort analysis reveals the truth. It's the best early warning system for product problems and the best proof that your improvements are working.

## Questions to Answer

Before building cohort reports, the founder needs to answer:

1. **What cohort dimensions matter most to your business?** (Signup date is the default. But also consider: acquisition channel, plan type, company size, geography, onboarding path, first feature used.)
2. **What is your retention curve benchmark?** (For B2B SaaS: Day 1 ~80%, Week 1 ~60%, Month 1 ~40%, Month 3 ~30%. For B2C SaaS: expect lower numbers. What does "good" look like for your category?)
3. **How will you segment cohorts?** (Weekly cohorts for high-volume products. Monthly for lower-volume. Custom cohorts for specific experiments.)
4. **What is your reporting cadence?** (Monthly cohort review is standard. Weekly for fast-growing products.)
5. **What behavioral milestones define your cohort curves?** (Return visit? Feature usage? Revenue generated? Multiple metrics for different views.)
6. **What is your "flattening" target?** (The point where the retention curve levels off. The higher and sooner it flattens, the better your product.)
7. **Who consumes cohort data?** (Product team for retention, marketing for channel quality, leadership for business health.)

## Output Template

Generate a comprehensive cohort analysis framework with these sections:

### 1. Cohort Retention Matrix (Template)

**Monthly Signup Cohorts — User Retention**

| Cohort | Month 0 | Month 1 | Month 2 | Month 3 | Month 4 | Month 5 | Month 6 |
|---|---|---|---|---|---|---|---|
| Jan 2025 | 100% | | | | | | |
| Feb 2025 | 100% | | | | | | |
| Mar 2025 | 100% | | | | | | |

### 2. Cohort Dimensions

| Dimension | Segments | Why It Matters |
|---|---|---|
| Signup date | Weekly / Monthly | Baseline: are things getting better or worse? |
| Acquisition channel | Organic, Paid, Referral, Direct | Which channels bring the highest-quality users? |
| Plan type | Free, Trial, Paid | Do paid users retain differently than free? |
| Activation status | Activated vs. not activated | Proof that activation drives retention |
| Company size | Solo, SMB, Mid-market, Enterprise | Segment-specific retention patterns |
| First feature used | [Product-specific features] | Which entry points predict long-term usage? |

### 3. Retention Curve Analysis

For each cohort:
- **Steep drop zone** (Day 1-7): expected initial drop — focus on onboarding
- **Flattening zone** (Week 2-8): where the curve should stabilize — focus on habit formation
- **Plateau** (Month 3+): long-term retention floor — focus on continued value delivery
- **Resurrection** (any time): can you bring churned users back?

### 4. Cohort Comparison Report Template

| Metric | Cohort A (Baseline) | Cohort B (After Change) | Delta |
|---|---|---|---|
| Size (N) | | | |
| Day 7 retention | | | |
| Day 30 retention | | | |
| Activation rate | | | |
| Conversion to paid | | | |
| Average revenue per user | | | |

### 5. Revenue Cohort Analysis

Track revenue per cohort over time to understand:
- Does revenue per cohort grow (expansion) or shrink (contraction)?
- Which cohorts have the best LTV?
- Are newer cohorts trending toward better or worse unit economics?

## Recommended Tools

| Tool | Purpose | Pricing |
|---|---|---|
| **Mixpanel** | Built-in cohort retention analysis | Free to 20M events/mo |
| **Amplitude** | Advanced behavioral cohorts | Free tier available |
| **ChartMogul** | Revenue cohort analysis for subscriptions | $100+/mo |
| **ProfitWell** | Free revenue analytics with cohort views | Free |
| **PostHog** | Open-source retention and cohort analysis | Free tier (generous) |
| **SQL + Spreadsheet** | Custom cohort queries from your data warehouse | Free |

## Agent Instructions

When populating this folder, the AI agent should:

1. Read `company-profile.md` to understand the product type (B2B vs. B2C), customer segments, and pricing model
2. Read `13-analytics/user-tracking/README.md` for available events and user properties
3. Read `14-retention/churn-reduction/README.md` (if exists) for churn context
4. Design a retention matrix template with appropriate time windows (daily for first week, then weekly, then monthly)
5. Define 4-6 cohort dimensions relevant to the specific product
6. Set retention benchmarks using industry data for the product's category
7. Create a cohort comparison report template for measuring the impact of changes
8. Include a revenue cohort view alongside the usage/engagement view
9. Output everything as `README.md` in this folder

## Example Output (Snippet)

```markdown
## Monthly Retention Cohorts — Active Users

| Cohort | M0 | M1 | M2 | M3 | M4 | M5 | M6 |
|---|---|---|---|---|---|---|---|
| Jul 2024 (n=320) | 100% | 42% | 35% | 31% | 29% | 28% | 28% |
| Aug 2024 (n=410) | 100% | 45% | 38% | 34% | 31% | 30% | — |
| Sep 2024 (n=520) | 100% | 48% | 41% | 36% | 33% | — | — |
| Oct 2024 (n=580) | 100% | 52% | 44% | 38% | — | — | — |

**Trend:** Month-1 retention is improving steadily (+10pp from Jul→Oct), suggesting recent onboarding changes are working. The curve flattens around Month 4-5 at ~28-30%, which is our current retention floor.
```

## Cross-References

- `13-analytics/user-tracking` — cohort analysis depends on proper event tracking and user properties
- `14-retention/churn-reduction` — cohort data reveals churn patterns and the impact of interventions
- `13-analytics/kpi-dashboard` — cohort retention metrics belong on the executive dashboard
- `13-analytics/funnel-analysis` — funnel performance varies by cohort
- `12-revenue/subscriptions` — revenue cohorts track subscription health over time
