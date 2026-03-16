---
department: 12-revenue
subfolder: subscriptions
priority: P0
stage: pre-launch (design before launch, refine after)
estimated_time: 3-4 hours initial design, ongoing management
requires:
  - 11-conversion/pricing-strategy
  - 05-development/backend
---

# Subscriptions — Subscription Billing Model Design

## Overview

This folder contains your subscription model design — the foundation of your recurring revenue engine. Subscriptions are what make SaaS economics work: predictable, recurring revenue that compounds as you grow your customer base. But the details matter enormously — billing frequency, plan changes, grace periods, dunning, and proration all affect both revenue and customer experience.

A well-designed subscription model should feel invisible to customers. They pay, they get value, and the billing just works. A poorly designed one creates support tickets, failed payments, and unnecessary churn.

## Questions to Answer

Before designing the subscription model, the founder needs to answer:

1. **What billing frequencies will you support?** (Monthly, annually, quarterly? Most SaaS offers monthly + annual with a discount.)
2. **What is your grace period for failed payments?** (How many days before the account is restricted? Standard: 7-14 days.)
3. **What is your dunning strategy?** (How many retry attempts? How many emails? When do you suspend the account?)
4. **How do you handle proration?** (When a user upgrades mid-cycle, do they pay the difference immediately? Get credit for the unused portion?)
5. **How do plan changes work?** (Upgrade: immediate access with prorated charge? Downgrade: at end of current period? What about mid-cycle changes?)
6. **What currency(ies) will you bill in?** (USD only? Local currency pricing?)
7. **Do you need to support metered/usage-based billing alongside subscriptions?** (Hybrid models are increasingly common.)
8. **What is your cancellation flow?** (Immediate cancellation? End-of-period? Cancellation survey? Retention offers?)

## Output Template

Generate a comprehensive subscription model document with these sections:

### 1. Subscription Model Design
- Billing frequencies offered and pricing for each
- Billing cycle dates (fixed calendar date or signup anniversary)
- Currency support and localization
- Payment methods accepted
- Tax handling approach

### 2. Billing Rules Document
| Scenario | Behavior | Example |
|---|---|---|
| New subscription | Charge immediately, period starts today | User signs up Jan 15, charged $49, period Jan 15 - Feb 14 |
| Monthly renewal | Auto-charge on billing date | Charged $49 on Feb 15 |
| Upgrade (mid-cycle) | Prorated charge for remainder | Upgrade from $49→$99 on Jan 30: charge $25 for 15 remaining days |
| Downgrade | Takes effect at end of current period | Downgrade on Jan 20: keeps Pro until Feb 14, then starts Basic |
| Annual renewal | Auto-charge 30 days before (with notice) | Annual renews Feb 15, reminder email Jan 16 |
| Cancellation | Access continues until end of paid period | Cancel on Jan 20: access until Feb 14 |
| Payment failure | Retry 3x over 7 days, then suspend | Failed Jan 15, retry Jan 18, 22, 25, suspend Jan 29 |

### 3. Dunning Email Sequence
| Trigger | Day | Email | Tone |
|---|---|---|---|
| Payment fails | Day 0 | "We couldn't process your payment" | Informative, helpful |
| First retry fails | Day 3 | "Payment still failing — update your card" | Slightly urgent |
| Second retry fails | Day 7 | "Action needed: your account will be paused" | Urgent |
| Final attempt | Day 10 | "Last chance to keep your account active" | Final warning |
| Account suspended | Day 14 | "Your account has been paused" | Clear next steps |
| Win-back | Day 30 | "We miss you — reactivate in one click" | Friendly |

### 4. MRR Tracking Framework
Track these metrics monthly:
- **New MRR:** revenue from new customers
- **Expansion MRR:** revenue from upgrades and add-ons
- **Contraction MRR:** revenue lost from downgrades
- **Churned MRR:** revenue lost from cancellations
- **Net New MRR:** New + Expansion - Contraction - Churned
- **MRR Growth Rate:** month-over-month percentage change
- **Quick Ratio:** (New + Expansion) / (Contraction + Churned) — target >4

### 5. Cancellation Flow
- Step 1: "Are you sure?" with reminder of value received
- Step 2: Cancellation survey (reason for leaving)
- Step 3: Retention offer (discount, pause, downgrade, or extended trial of premium features)
- Step 4: Confirmation with end-of-period access reminder
- Step 5: Win-back email sequence (30, 60, 90 days post-cancellation)

### 6. Subscription Lifecycle Events
- Created, activated, trial started, trial ended
- Payment succeeded, payment failed, payment retried
- Upgraded, downgraded, plan changed
- Paused, resumed
- Canceled, expired
- Reactivated

Map each event to: webhook, email notification, in-app state change, analytics event.

## Recommended Tools

| Tool | Purpose | Pricing |
|---|---|---|
| **Stripe Billing** | Subscription billing infrastructure | Transaction fees + 0.5% |
| **Paddle** | All-in-one billing with tax compliance | Transaction fees |
| **Chargebee** | Subscription management and revenue ops | $249+/mo |
| **Recurly** | Enterprise subscription management | $249+/mo |
| **Baremetrics** | Subscription analytics and MRR tracking | $50+/mo |
| **ProfitWell** | Free subscription analytics | Free |

## Agent Instructions

When populating this folder, the AI agent should:

1. Read `company-profile.md` to understand the product and revenue model
2. Read `11-conversion/pricing-strategy/README.md` for pricing tiers and value metrics
3. Design the billing rules for all scenarios (new, renewal, upgrade, downgrade, cancel, fail)
4. Write a complete dunning email sequence with 5-6 emails
5. Create an MRR tracking framework with all key metrics defined
6. Design a cancellation flow with retention offers
7. Map subscription lifecycle events to system actions
8. Recommend a billing platform based on product stage and needs
9. Output everything as `README.md` in this folder

## Example Output (Snippet)

```markdown
## Dunning Email — Day 0: Payment Failed

**Subject:** We couldn't process your payment for [Product]
**Trigger:** First payment failure

Hi {first_name},

Your payment of {amount} for [Product] {plan_name} didn't go through. This usually happens when:
- Your card expired
- Insufficient funds
- Your bank flagged the charge

**[Update Payment Method →]**

We'll automatically retry in 3 days. Your account is fully active in the meantime — no interruption.

If you have questions, just reply to this email.

Best,
The [Product] Team

---

## MRR Dashboard

| Metric | January | February | March | MoM Change |
|---|---|---|---|---|
| New MRR | $4,200 | $5,100 | $6,800 | +33% |
| Expansion MRR | $800 | $1,200 | $1,500 | +25% |
| Contraction MRR | ($200) | ($300) | ($250) | — |
| Churned MRR | ($900) | ($750) | ($600) | Improving |
| **Net New MRR** | **$3,900** | **$5,250** | **$7,450** | **+42%** |
```

## Cross-References

- `11-conversion/pricing-strategy` — pricing tiers define the subscription structure
- `12-revenue/annual-plans` — annual billing is a subscription variant with specific considerations
- `12-revenue/upsells` — upgrades generate expansion MRR tracked in subscription metrics
- `14-retention/churn-reduction` — dunning and cancellation flows are churn reduction mechanisms
- `13-analytics/kpi-dashboard` — MRR metrics belong on the KPI dashboard
