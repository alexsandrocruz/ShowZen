---
department: 12-revenue
subfolder: annual-plans
priority: P1
stage: post-launch (introduce once monthly billing is working)
estimated_time: 2-3 hours strategy and implementation
requires:
  - 12-revenue/subscriptions
  - 11-conversion/pricing-strategy
---

# Annual Plans — Better Cash Flow, Lower Churn

## Overview

This folder contains your annual plan strategy — the plan for incentivizing customers to commit to yearly billing instead of monthly. Annual plans are one of the simplest revenue optimizations in SaaS with outsized impact: they improve cash flow (you get 12 months of revenue upfront), reduce churn (annual customers churn at 2-5x lower rates than monthly), and increase LTV.

The trade-off is that annual discounts reduce per-month revenue. But the math almost always works in your favor: a 20% annual discount with 3x lower churn rate is a clear win.

## Questions to Answer

Before designing the annual plan strategy, the founder needs to answer:

1. **What annual discount percentage will you offer?** (Standard: 15-25%. Two months free = ~17% discount. "Pay for 10 months, get 12" is a common framing.)
2. **How will you promote annual plans?** (Default on pricing page? Toggle? Highlighted as "best value"? Email campaign to monthly customers?)
3. **What payment flexibility do you offer?** (Pay annually upfront only? Or offer quarterly as a middle ground?)
4. **What is your cancellation and refund policy for annual plans?** (No refunds? Prorated refund? Refund within 30 days only?)
5. **How do plan changes work mid-annual-cycle?** (Upgrade: prorated upgrade charge? Downgrade: at renewal only?)
6. **What is your annual renewal process?** (Auto-renew with advance notice? Renewal reminder sequence? Renewal negotiation for large accounts?)
7. **What is your current monthly-to-annual ratio?** (Target: 30-50% of customers on annual plans)

## Output Template

Generate a comprehensive annual plan strategy with these sections:

### 1. Annual Plan Design
| Element | Decision | Rationale |
|---|---|---|
| Discount | 20% (2 months free) | Industry standard, meaningful savings without excessive revenue loss |
| Framing | "Pay annually, get 2 months free" | "Free months" is more compelling than "20% off" |
| Payment options | Annual upfront only | Simplifies billing and maximizes cash flow benefit |
| Default on pricing page | Annual selected, with monthly toggle | Nudges toward annual without hiding monthly |
| Refund policy | Full refund within 30 days, no refund after | Fair to customers, protects revenue |

### 2. Annual vs. Monthly Comparison Calculator
Show customers the value of committing annually:

| | Monthly | Annual | You Save |
|---|---|---|---|
| Team Plan | $8/user/mo | $6.40/user/mo | $19.20/user/year |
| Pro Plan | $14/user/mo | $11.20/user/mo | $33.60/user/year |
| 10-person team (Pro) | $140/mo ($1,680/yr) | $112/mo ($1,344/yr) | **$336/year** |

### 3. Annual Plan Promotion Campaigns

**Campaign 1: New User Default**
- Default pricing page to annual with toggle to monthly
- "Most Popular" badge on annual option
- Show per-month price for annual (looks cheaper)

**Campaign 2: Monthly-to-Annual Conversion Email**
- Target: active monthly customers with 3+ months tenure
- Timing: send after 90 days (past early churn risk)
- Offer: lock in current price for 12 months + 2 months free

**Campaign 3: Annual Renewal Incentive**
- Target: annual customers approaching renewal
- Timing: 45 days before renewal
- Offer: early renewal bonus (extra month, feature unlock)

**Campaign 4: End-of-Quarter Push**
- Target: monthly customers
- Timing: end of quarter (Q4 is especially effective)
- Offer: time-limited annual discount (extra 5% if they switch this week)

### 4. Renewal Management
- **60 days before renewal:** internal flag, CSM review for large accounts
- **45 days before renewal:** renewal reminder email with value summary
- **30 days before renewal:** second reminder with usage highlights
- **14 days before renewal:** final reminder, card validation check
- **Renewal day:** auto-charge, confirmation email, thank you
- **Failed renewal:** dunning sequence (same as monthly but higher priority)

### 5. Annual Plan Economics
- Model the impact on MRR, ARR, and cash flow
- Break-even analysis: at what churn rate does annual discount pay for itself?
- Example: 20% discount with 5% annual churn vs. 15% monthly churn
- LTV comparison: annual customer LTV vs. monthly customer LTV

### 6. Plan Change Policies
| Scenario | Policy |
|---|---|
| Annual → upgrade mid-cycle | Prorated charge for price difference, new annual cycle starts |
| Annual → downgrade | Takes effect at next renewal date |
| Annual → cancel | Access until end of paid period, no prorated refund (except within 30 days) |
| Monthly → annual | Switch immediately, credit remaining month, start annual |
| Annual → monthly (at renewal) | Allowed at renewal, no penalty |

## Recommended Tools

| Tool | Purpose | Pricing |
|---|---|---|
| **Stripe** | Annual billing and proration handling | Transaction fees |
| **Paddle** | Subscription billing with annual support | Transaction fees |
| **ProfitWell** | Analyze annual vs. monthly cohort behavior | Free |
| **Baremetrics** | Revenue analytics by billing period | $50+/mo |
| **Customer.io** | Automated annual promotion email campaigns | $100+/mo |

## Agent Instructions

When populating this folder, the AI agent should:

1. Read `company-profile.md` for pricing and customer base context
2. Read `11-conversion/pricing-strategy/README.md` for current pricing tiers
3. Read `12-revenue/subscriptions/README.md` for billing mechanics
4. Design the annual discount structure with clear rationale
5. Create a comparison calculator for the pricing page
6. Write 3-4 promotion campaigns to drive annual adoption
7. Build a renewal management timeline
8. Model the economics: discount impact vs. churn reduction benefit
9. Define plan change policies for all scenarios
10. Output everything as `README.md` in this folder

## Example Output (Snippet)

```markdown
## Monthly-to-Annual Conversion Email

**Subject:** Save $336/year on [Product] — switch to annual
**Target:** Monthly customers with 90+ days tenure and >3 active users
**Timing:** 90 days after signup

Hi {first_name},

Your team has been using [Product] for {months} months — and it's been great having you.

Quick question: did you know you could save **$336/year** by switching to annual billing?

Here's what you get:
- **2 months free** (pay for 10, get 12)
- Lock in your current price for 12 months
- Same plan, same features, just smarter billing

**Your current plan:** Team (10 users) at $140/mo = $1,680/year
**Annual plan:** Team (10 users) at $112/mo = **$1,344/year**
**You save:** $336

[Switch to Annual →]

No commitment to decide right now — you can switch anytime from your billing settings.

Best,
{Founder name}
```

## Cross-References

- `12-revenue/subscriptions` — annual plans are a billing variant within the subscription model
- `11-conversion/pricing-strategy` — annual pricing must be visible and compelling on the pricing page
- `11-conversion/checkout-optimization` — annual/monthly toggle on checkout is a conversion lever
- `14-retention/churn-reduction` — annual plans are one of the most effective churn reduction tools
- `13-analytics/kpi-dashboard` — track annual adoption rate and annual cohort churn vs. monthly
