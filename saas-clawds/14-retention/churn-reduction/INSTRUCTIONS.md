---
department: 14-retention
subfolder: churn-reduction
priority: P0
stage: post-launch (requires data on churned customers)
estimated_time: 5-7 hours initial framework, ongoing operation
requires:
  - 13-analytics/cohort-analysis
  - 12-revenue/subscriptions
  - 14-retention/user-onboarding
---

# Churn Reduction — Understanding and Systematically Eliminating Churn

## Overview

This folder contains your churn reduction strategy — the most critical retention initiative in your SaaS. Churn is the silent killer. A 5% monthly churn rate means you lose half your customers every year. That means half your acquisition efforts just go toward replacing losses. Reducing churn is almost always higher-ROI than increasing acquisition.

Churn isn't one problem — it's many problems wearing the same mask. Some customers churn because they never activated. Some churn because a competitor won them over. Some churn because their credit card expired and nobody followed up. Each type requires a different solution. This folder helps you diagnose, categorize, and systematically reduce every type of churn.

## Questions to Answer

Before attacking churn, the founder needs to answer:

1. **What is your current churn rate?** (Both logo churn — percentage of customers lost — and revenue churn — percentage of MRR lost. Revenue churn matters more because losing a $500/mo customer hurts more than losing a $10/mo customer.)
2. **What are the top 3-5 reasons customers leave?** (If you don't know, start with exit surveys and churned customer interviews. Common reasons: didn't get value, too expensive, switched to competitor, no longer need the product, poor support experience.)
3. **What is the voluntary vs. involuntary churn split?** (Voluntary = customer chose to cancel. Involuntary = payment failed and wasn't recovered. Involuntary churn is typically 20-40% of total churn and is the easiest to fix.)
4. **What are the at-risk signals?** (What behavior predicts churn? Declining logins, reduced feature usage, support complaints, non-response to emails. Identify early warning signals.)
5. **What does your cancellation flow look like?** (Is it a one-click cancel? A multi-step flow with a retention offer? Do you collect a reason? Do you offer alternatives like pause or downgrade?)
6. **What is your win-back strategy?** (Do you try to recover churned customers? When? With what offer? Win-back campaigns can recover 5-15% of churned customers.)
7. **What is your acceptable churn rate target?** (Best-in-class B2B SaaS: <2% monthly / <5% annual logo churn. SMB SaaS: <5% monthly. Consumer SaaS: <7% monthly.)

## Output Template

Generate a comprehensive churn reduction strategy with these sections:

### 1. Churn Analysis Framework

**Churn Taxonomy:**
| Type | Description | Typical % | Fix |
|---|---|---|---|
| Never activated | Signed up but never experienced value | 30-40% | Better onboarding |
| Early churn (0-30 days) | Left during trial or first month | 20-30% | Faster time-to-value |
| Product gap | Missing feature they need | 10-15% | Roadmap alignment |
| Competitive loss | Switched to competitor | 5-10% | Positioning / differentiation |
| Price sensitivity | Product works but costs too much | 5-10% | Pricing tiers / downgrade |
| Involuntary | Payment failed, not recovered | 20-40% | Dunning optimization |
| Outgrew / Changed needs | No longer need this type of tool | 5-10% | Hard to prevent — natural |

### 2. At-Risk Scoring Model

| Signal | Weight | Measurement |
|---|---|---|
| No login in 14+ days | High | Track last active date |
| Feature usage declining week-over-week | High | Compare weekly active feature count |
| Support complaint filed | Medium | Tag complaints in helpdesk |
| Billing issue (failed payment) | High | Stripe webhook |
| NPS score ≤6 (Detractor) | High | Quarterly NPS survey |
| Didn't complete onboarding | Medium | Onboarding checklist status |
| No feature usage beyond basic | Medium | Feature adoption scorecard |

**Risk Score = Weighted sum of signals → Low / Medium / High risk**

### 3. Cancellation Flow Design

| Step | Screen | Purpose | Expected Save Rate |
|---|---|---|---|
| 1 | "We're sorry to see you go" | Empathy + show value delivered | — |
| 2 | Cancellation reason survey | Understand why (required, 4-6 options) | — |
| 3 | Targeted save offer based on reason | Discount / Pause / Downgrade / Help | 10-25% save rate |
| 4 | Confirmation | Confirm cancellation, show end date | — |
| 5 | Post-cancel email | Thank you + door is open to return | — |

**Save Offers by Reason:**
| Reason | Offer |
|---|---|
| Too expensive | 20% discount for 3 months, or downgrade to lower tier |
| Not using it enough | Pause account for 1-3 months (free) |
| Missing feature | Feature timeline + flag for priority |
| Switching to competitor | What would make you stay? (custom retention) |
| No longer need it | Graceful goodbye, win-back in 60 days |

### 4. Win-Back Email Sequence

| Email | Timing | Subject | Content | Goal |
|---|---|---|---|---|
| 1 | Day 30 | "Things have changed since you left" | New features, improvements, social proof | Pique interest |
| 2 | Day 45 | "Special offer: come back to [Product]" | 30% discount or 1 month free | Incentivize return |
| 3 | Day 90 | "We built [feature they asked for]" | Personalized based on churn reason | Address specific objection |

### 5. Monthly Churn Review Template

| Metric | This Month | Last Month | 3-Month Avg | Target |
|---|---|---|---|---|
| Logo churn rate | _% | _% | _% | <5% |
| Revenue churn rate | _% | _% | _% | <3% |
| Voluntary churn | _% | _% | _% | — |
| Involuntary churn | _% | _% | _% | <1% |
| Cancellation save rate | _% | _% | _% | >15% |
| Win-back rate | _% | _% | _% | >5% |

**Top churn reasons this month:**
1. [Reason] — _% of churns — [Action taken]
2. [Reason] — _% of churns — [Action taken]
3. [Reason] — _% of churns — [Action taken]

### 6. Involuntary Churn Prevention

- Smart payment retries (retry failed payments on days most likely to succeed)
- Pre-dunning alerts (warn users before card expires)
- Multiple payment methods (backup payment source)
- Account updater service (automatic card number updates)
- Graceful degradation (don't lock users out immediately on failure)

## Recommended Tools

| Tool | Purpose | Pricing |
|---|---|---|
| **ChurnZero** | Customer success and churn prediction | Contact for pricing |
| **Vitally** | Customer health scoring and playbooks | $150+/mo |
| **ProfitWell Retain** | Involuntary churn reduction (dunning optimization) | Performance-based |
| **Baremetrics** | Churn analytics and cancellation insights | $50+/mo |
| **Stripe** | Payment retry logic and dunning | Transaction fees |
| **Intercom / Customer.io** | Lifecycle emails for at-risk and win-back | $39-100+/mo |

## Agent Instructions

When populating this folder, the AI agent should:

1. Read `company-profile.md` to understand the product, pricing model, and current stage
2. Read `13-analytics/cohort-analysis/README.md` for retention curves and cohort data
3. Read `12-revenue/subscriptions/README.md` for the dunning strategy and cancellation flow
4. Read `14-retention/user-onboarding/README.md` for activation rate (early churn driver)
5. Build the churn taxonomy with estimated percentages for each type
6. Design the at-risk scoring model with weighted signals
7. Design the complete cancellation flow with save offers by reason
8. Write a 3-email win-back sequence
9. Create the monthly churn review template
10. Include involuntary churn prevention strategies
11. Output everything as `README.md` in this folder

## Example Output (Snippet)

```markdown
## Churn Breakdown — January 2025

Total churned accounts: 47 (4.7% logo churn, 3.2% revenue churn)

| Reason | Count | % | Revenue Lost | Action |
|---|---|---|---|---|
| Never activated | 18 | 38% | $540 | Improving onboarding (see 14-retention/user-onboarding) |
| Payment failed | 12 | 26% | $720 | Implemented Retain — recovering 40% |
| Too expensive | 8 | 17% | $960 | Testing new entry-level tier |
| Competitor | 5 | 11% | $1,250 | Competitive analysis update needed |
| No longer needed | 4 | 8% | $200 | Natural churn — no action |

**Win-back results:** 6 of 35 previously churned users reactivated (17% win-back rate) from the Day-30 email campaign.
```

## Cross-References

- `13-analytics/cohort-analysis` — cohort retention curves show churn patterns over time
- `12-revenue/subscriptions` — dunning strategy handles involuntary churn
- `14-retention/user-onboarding` — onboarding quality is the #1 driver of early churn
- `14-retention/feature-adoption` — low feature adoption predicts churn
- `14-retention/email-automation` — at-risk and win-back emails are part of the lifecycle system
- `13-analytics/kpi-dashboard` — churn metrics belong on the executive dashboard
