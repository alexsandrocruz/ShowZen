---
department: 12-revenue
subfolder: upsells
priority: P0
stage: post-launch (once you have paying customers)
estimated_time: 2-3 hours strategy, ongoing optimization
requires:
  - 12-revenue/subscriptions
  - 11-conversion/pricing-strategy
---

# Upsells — Expand Revenue from Existing Customers

## Overview

This folder contains your upsell strategy — the plan for expanding revenue from customers who are already paying by moving them to higher-value plans. Upselling is one of the most efficient revenue growth levers because selling to an existing customer costs 5-7x less than acquiring a new one.

The best upsells don't feel like sales — they feel like natural progressions. When a customer outgrows their current plan, hitting a limit or needing a feature, the upgrade should feel like the obvious next step, not a pitch.

Net Revenue Retention (NRR) above 100% means your existing customer base grows even without new customers. World-class SaaS companies achieve 120-140% NRR, and upsells are the primary driver.

## Questions to Answer

Before building the upsell playbook, the founder needs to answer:

1. **What triggers an upsell?** (Usage limits hit, team size growth, feature need, success milestones)
2. **Where do upsell prompts appear?** (In-app modals, email, usage dashboards, during support interactions, at renewal)
3. **Are upsells usage-based or feature-based?** (Usage: "you've used 80% of your storage." Feature: "unlock advanced analytics.")
4. **What is your upsell-to-offer timing?** (Proactive at 80% of limit? Reactive when limit is hit? At value milestones?)
5. **What is your expansion revenue target?** (What % of MRR should come from upgrades? Benchmark: 20-30% of net new MRR)
6. **Who owns upselling?** (Product (in-app), marketing (email), sales (human outreach), or customer success?)
7. **Do you offer seamless self-serve upgrades?** (One-click upgrade in-app, or does it require contacting sales?)

## Output Template

Generate a comprehensive upsell playbook with these sections:

### 1. Upsell Trigger Definition Matrix
| Trigger Type | Trigger Event | Upsell Action | Channel |
|---|---|---|---|
| Usage limit | 80% of user seats used | "Running out of seats — upgrade" | In-app banner |
| Usage limit | Storage at 90% capacity | "Upgrade for more storage" | In-app + email |
| Feature wall | Clicks locked feature | "Available on Pro plan" | In-app modal |
| Success signal | Completed 100th [action] | "You're a power user — unlock more" | Email |
| Team growth | Added 3rd team member in a week | "Growing team? Consider Team plan" | In-app notification |
| Time-based | 90 days as active customer | Account review, proactive outreach | Email / CSM call |

### 2. Upsell Messaging Templates

**In-App Usage-Based:**
> You've used {current}/{limit} {resource}. Upgrade to {plan} for {new_limit} and keep growing.
> [Upgrade Now] [Learn More]

**Email — Success-Based:**
Subject: You've hit a milestone in [Product]
> You've {achievement}. Teams at your stage typically get even more value from {higher plan feature}...

**In-App Feature Wall:**
> {Feature name} is available on {plan name}. Unlock {specific benefit} to {outcome}.
> [See what's included] [Upgrade to {plan}]

### 3. Expansion Revenue Tracking
- **Expansion MRR:** revenue from plan upgrades and seat additions
- **Upgrade rate:** % of eligible customers who upgrade per month
- **Average upgrade value:** additional MRR per upgrade event
- **Time to upgrade:** average days from signup to first upgrade
- **Upgrade trigger distribution:** which triggers drive the most upgrades

### 4. In-App Upsell UX Patterns
- **Usage bar:** visual progress toward plan limits (e.g., "7 of 10 users")
- **Feature gate modal:** when user clicks a locked feature
- **Upgrade CTA in settings:** always visible in billing/plan settings
- **Contextual nudge:** non-intrusive tip when user would benefit from a higher plan
- **Comparison table:** show what they get now vs. what they could get

### 5. Self-Serve Upgrade Flow
- One-click upgrade path from any upsell prompt
- Plan comparison modal showing exactly what changes
- Prorated billing explained clearly
- Immediate access to new features post-upgrade
- Confirmation email with new plan details

### 6. Customer Success-Led Upsells
- Quarterly business review template with expansion discussion
- Usage report showing value delivered and headroom on current plan
- ROI calculation to justify upgrade cost to budget holder
- Multi-stakeholder expansion strategy (who else in the org could use the product?)

## Recommended Tools

| Tool | Purpose | Pricing |
|---|---|---|
| **Intercom** | In-app messaging and targeted upsell messages | $39+/mo |
| **Pendo** | Usage analytics and in-app guides | Custom pricing |
| **Vitally** | Customer success platform with health scoring | Custom pricing |
| **ChurnZero** | Customer success and expansion automation | Custom pricing |
| **Stripe** | Self-serve upgrade billing | Transaction fees |
| **PostHog** | Product analytics to identify upsell triggers | Free–$0+/mo |

## Agent Instructions

When populating this folder, the AI agent should:

1. Read `company-profile.md` for product details and pricing model
2. Read `11-conversion/pricing-strategy/README.md` for tier structure and feature gating
3. Read `12-revenue/subscriptions/README.md` for billing mechanics (proration, upgrades)
4. Identify 6-8 specific upsell triggers based on the product's feature set and usage patterns
5. Write upsell messaging templates for 3 channels: in-app, email, and CSM-led
6. Design the self-serve upgrade UX flow
7. Define expansion revenue metrics and targets
8. Create a quarterly business review template for CSM-led expansion
9. Output everything as `README.md` in this folder

## Example Output (Snippet)

```markdown
## Upsell Triggers — [Async Standup Tool]

### Trigger 1: Team Size Growth
**Event:** Customer adds 9th user (approaching 10-user limit on Team plan)
**Channel:** In-app banner + email
**Message:**
> Your team is growing! You're using 9 of 10 seats on the Team plan.
> Upgrade to Business for up to 100 users plus advanced analytics and API access.
> [Upgrade to Business — $14/user/mo] [Not now]

### Trigger 2: Feature Discovery
**Event:** Customer clicks "Advanced Analytics" (locked on Team plan)
**Channel:** In-app modal
**Message:**
> Advanced Analytics shows you standup completion trends, sentiment tracking, and
> team engagement scores. Available on the Business plan.
> [See what's included →] [Upgrade Now]

### Expansion Revenue Target
- Month 6: Expansion MRR = 15% of total net new MRR
- Month 12: Expansion MRR = 25% of total net new MRR
- NRR target: 110% by end of year 1
```

## Cross-References

- `12-revenue/subscriptions` — upsells generate expansion MRR within the subscription model
- `12-revenue/add-ons` — add-ons are lateral expansion; upsells are vertical (higher plan)
- `11-conversion/freemium-model` — free-to-paid conversion is the first "upsell"
- `14-retention/feature-adoption` — feature adoption signals are also upsell triggers
- `13-analytics/kpi-dashboard` — expansion MRR and NRR belong on the revenue dashboard
