---
department: 13-analytics
subfolder: kpi-dashboard
priority: P0
stage: pre-launch (define metrics before launch, build dashboard after)
estimated_time: 4-6 hours initial setup, ongoing refinement
requires:
  - 13-analytics/user-tracking
  - 12-revenue/subscriptions
---

# KPI Dashboard — Defining and Tracking the Metrics That Matter

## Overview

This folder contains your KPI framework and dashboard design — the single source of truth for how your business is performing. A KPI dashboard isn't a wall of charts; it's a decision-making tool. It should answer the question "how is the business doing?" in under 30 seconds and immediately surface anything that needs attention.

The biggest mistake founders make is tracking too many metrics. You should have one North Star metric that the entire company rallies around, supported by 5-7 metrics that explain what's driving it. Everything else is diagnostic — useful for deep dives but not on the main dashboard.

## Questions to Answer

Before building the dashboard, the founder needs to answer:

1. **What is your North Star metric?** (The single metric that best captures the value you deliver. For Slack: messages sent. For Stripe: payment volume. For Zoom: meeting minutes. What's yours?)
2. **What 5-7 supporting KPIs explain the North Star?** (Usually: acquisition, activation, retention, revenue, referral — the pirate metrics AARRR.)
3. **How often will metrics be reviewed?** (Daily glance, weekly team review, monthly deep-dive, quarterly board review?)
4. **Who has access to the dashboard?** (Everyone? Leadership only? Investors? Different views for different audiences?)
5. **What are the alert thresholds?** (At what point does a metric trigger an alert? E.g., churn >7%, activation <20%, MRR growth <5%.)
6. **What is the data source for each metric?** (Stripe for revenue, your database for usage, analytics tool for behavior.)
7. **Do you need real-time or is daily refresh sufficient?** (Most SaaS only needs daily. Real-time is expensive and usually unnecessary.)

## Output Template

Generate a comprehensive KPI framework with these sections:

### 1. North Star Metric Definition

| Field | Value |
|---|---|
| **Metric** | |
| **Definition** | Exactly what this measures, in plain language |
| **Formula** | How to calculate it |
| **Current Value** | (fill in when data exists) |
| **Target (3-month)** | |
| **Target (12-month)** | |
| **Data Source** | Where this number comes from |
| **Owner** | Who is accountable for this metric |

### 2. Core SaaS Metrics

| Metric | Definition | Formula | Target | Frequency | Owner |
|---|---|---|---|---|---|
| **MRR** | Monthly Recurring Revenue | Sum of all active subscription amounts | — | Daily | Finance |
| **ARR** | Annual Recurring Revenue | MRR × 12 | — | Monthly | Finance |
| **Monthly Churn Rate** | % of customers lost per month | Churned customers / Start-of-month customers | <5% (B2B), <7% (B2C) | Monthly | Product |
| **Revenue Churn** | % of MRR lost per month | Churned MRR / Start-of-month MRR | <3% | Monthly | Product |
| **LTV** | Customer Lifetime Value | ARPU / Monthly churn rate | — | Monthly | Finance |
| **CAC** | Customer Acquisition Cost | Total S&M spend / New customers acquired | — | Monthly | Marketing |
| **LTV:CAC Ratio** | Unit economics health | LTV / CAC | >3:1 | Monthly | Leadership |
| **NRR** | Net Revenue Retention | (Start MRR + Expansion - Contraction - Churn) / Start MRR | >100% | Monthly | Product |
| **ARPU** | Average Revenue Per User | MRR / Total paying customers | Trending up | Monthly | Finance |
| **DAU/MAU Ratio** | Product stickiness | Daily active users / Monthly active users | >20% (good), >50% (great) | Weekly | Product |
| **NPS** | Customer satisfaction | % Promoters - % Detractors | >30 (good), >50 (great) | Quarterly | Product |

### 3. Dashboard Layout

**Executive View (Default)**
- Row 1: North Star metric (big number + trend line)
- Row 2: MRR, Churn Rate, NRR (side-by-side)
- Row 3: New signups, Activation rate, Conversion rate
- Row 4: LTV, CAC, LTV:CAC ratio
- Row 5: DAU/MAU, NPS

**Weekly Review Dashboard**
- Week-over-week changes for all core metrics
- Funnel conversion rates by step
- Top acquisition channels by volume and quality
- Support ticket volume and resolution time

**Monthly Board Dashboard**
- MRR waterfall chart (new + expansion - contraction - churn)
- Cohort retention curves
- Revenue by plan and by cohort
- Burn rate and runway

### 4. Alert Configuration

| Metric | Warning Threshold | Critical Threshold | Alert Channel |
|---|---|---|---|
| Daily signups | <50% of 7-day average | <25% of 7-day average | Slack #alerts |
| Churn rate | >5% monthly | >8% monthly | Slack + Email |
| Activation rate | <25% weekly | <15% weekly | Slack #product |
| MRR growth | <3% MoM | Negative growth | Slack + SMS |
| Error rate | >1% | >5% | PagerDuty |

### 5. Review Cadence

| Cadence | Audience | Focus | Duration |
|---|---|---|---|
| Daily | Founder/CEO | Quick glance — anything broken? | 2 min |
| Weekly | Leadership team | Trends and priorities for the week | 30 min |
| Monthly | Full team | Deep dive with cohort and funnel analysis | 60 min |
| Quarterly | Board / Investors | Strategic metrics, runway, growth trajectory | 90 min |

## Recommended Tools

| Tool | Purpose | Pricing |
|---|---|---|
| **Metabase** | Open-source BI dashboards from your database | Free (self-hosted) |
| **Grafana** | Real-time dashboards and alerting | Free (open-source) |
| **ChartMogul** | SaaS revenue analytics (connects to Stripe) | $100+/mo |
| **Baremetrics** | Subscription analytics dashboard | $50+/mo |
| **Databox** | Pull metrics from 70+ sources into one dashboard | Free tier, $47+/mo |
| **Geckoboard** | TV-friendly dashboards for office/team | $39+/mo |
| **Google Sheets** | Simple, accessible, free dashboard for early stage | Free |

## Agent Instructions

When populating this folder, the AI agent should:

1. Read `company-profile.md` to understand the product, stage, and revenue model
2. Read `12-revenue/subscriptions/README.md` for the subscription model and revenue metrics
3. Read `13-analytics/user-tracking/README.md` for available events and properties
4. Define the North Star metric specific to the product's value proposition
5. Select 5-7 supporting KPIs from the standard SaaS metrics, customized with targets
6. Design the dashboard layout for each audience (daily, weekly, monthly, quarterly)
7. Configure alert thresholds appropriate to the company's stage and volume
8. Recommend a dashboard tool based on technical sophistication and budget
9. Output everything as `README.md` in this folder

## Example Output (Snippet)

```markdown
## North Star Metric

**Weekly Active Projects** — the number of projects with at least one edit in the past 7 days.
This captures both user engagement and value delivery — if users are actively working in the product, they're getting value.

| Current | 3-Month Target | 12-Month Target |
|---|---|---|
| 340 | 1,000 | 5,000 |

## Weekly Dashboard Snapshot (Jan 20-26)

| Metric | This Week | Last Week | Change | Status |
|---|---|---|---|---|
| MRR | $12,400 | $11,800 | +5.1% | ✅ On track |
| New signups | 189 | 203 | -6.9% | ⚠️ Monitor |
| Activation rate | 34% | 31% | +3pp | ✅ Improving |
| Churn rate | 4.2% | 4.5% | -0.3pp | ✅ Improving |
| NRR | 108% | 106% | +2pp | ✅ Healthy |
```

## Cross-References

- `13-analytics/user-tracking` — the events that feed dashboard metrics
- `12-revenue/subscriptions` — MRR, ARR, churn, and revenue metrics
- `13-analytics/funnel-analysis` — funnel conversion rates on the weekly dashboard
- `13-analytics/cohort-analysis` — cohort curves on the monthly dashboard
- `14-retention/churn-reduction` — churn metrics and alerts
