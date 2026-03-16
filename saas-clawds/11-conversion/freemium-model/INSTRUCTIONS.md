---
department: 11-conversion
subfolder: freemium-model
priority: P1
stage: post-launch (strategic decision — not all products should be freemium)
estimated_time: 3-4 hours design, ongoing tuning
requires:
  - 11-conversion/pricing-strategy
  - 11-conversion/sales-funnel
---

# Freemium Model — Design a Free Tier That Drives Upgrades

## Overview

This folder contains your freemium model design — the strategy for offering a permanently free tier that gives users enough value to love the product while creating clear reasons to upgrade to paid. Freemium is a growth strategy, not a pricing strategy. The free tier's job is to acquire users at near-zero cost and convert a percentage to paid.

The fundamental tension: give away too little and users never experience value. Give away too much and users never need to upgrade. The art is finding the line where the free tier is genuinely useful but paid unlocks meaningfully more.

**Important:** Not every SaaS should be freemium. If your product is complex, high-touch, or serves a small market, a free trial may be better. Freemium works best for products with a large addressable market, low marginal cost per user, and clear upgrade triggers.

## Questions to Answer

Before designing the freemium model, the founder needs to answer:

1. **What features are free vs. paid?** (Core value free, power features paid? Or full features free with usage limits?)
2. **What usage limits define the free tier?** (Number of users, projects, storage, API calls, records, etc.)
3. **What are the feature gates?** (Specific features that require upgrade — advanced analytics, integrations, custom branding, etc.)
4. **What triggers an upgrade?** (Usage hitting limits, needing a specific feature, team growth, compliance requirements)
5. **What is your free-to-paid conversion target?** (Benchmark: 2-5% for bottom-up PLG, 5-10% with good upgrade nudges)
6. **How many free users can you support?** (Infrastructure cost per free user × expected free users = your free tier cost)
7. **What is the upgrade path?** (Self-serve upgrade, talk to sales, or both?)
8. **How do you prevent abuse of the free tier?** (Rate limiting, single-user restrictions, commercial use limitations)

## Output Template

Generate a comprehensive freemium model design with these sections:

### 1. Freemium Plan Design
| Dimension | Free Tier | Paid Tier(s) |
|---|---|---|
| Users | Up to 3 | Unlimited |
| Projects | 1 | Unlimited |
| Core features | Full access | Full access |
| Advanced features | — | Analytics, integrations, SSO |
| Storage | 500MB | 10GB+ |
| Support | Community | Email + chat |
| Branding | "[Product] branding" shown | Remove branding |

### 2. Feature Gating Matrix
| Feature | Free | Starter | Pro | Enterprise |
|---|---|---|---|---|
| Core workflow | Yes | Yes | Yes | Yes |
| Basic reporting | Yes | Yes | Yes | Yes |
| Advanced analytics | — | Yes | Yes | Yes |
| Integrations | 1 | 5 | Unlimited | Unlimited |
| Custom fields | — | — | Yes | Yes |
| SSO / SAML | — | — | — | Yes |
| API access | — | — | Yes | Yes |
| Priority support | — | — | Yes | Yes |

### 3. Upgrade Trigger Map
| Trigger | How It Happens | Conversion Action |
|---|---|---|
| User limit reached | 4th team member invited | "Upgrade to add more team members" |
| Feature wall hit | Clicks advanced analytics | "Upgrade to Pro for advanced analytics" |
| Usage cap reached | Exceeds free storage | "Upgrade for more storage" |
| Growth signal | Creates 2nd project | In-app upsell banner |
| Social proof | After 30 days of active use | "Teams like yours upgraded for X" |

### 4. Freemium Economics Model
- **Cost per free user:** infrastructure + support costs per free user per month
- **Free user limit:** maximum free users you can sustain = budget / cost per user
- **Conversion rate assumption:** X% of free users convert
- **ARPU of converted users:** $X/mo
- **Break-even math:** free user cost × total free users < converted users × ARPU

### 5. Upgrade UX Design
- Where upgrade CTAs appear (feature gates, settings, usage bars)
- Upgrade CTA copy for each trigger
- Upgrade flow: in-app checkout or redirect to pricing page
- Downgrade experience: what happens if a paid user downgrades to free

### 6. Free Tier Abuse Prevention
- Rate limiting for API and automation
- One free workspace per email domain
- Bot/spam detection for signups
- Monitoring for commercial use beyond intended scope

## Recommended Tools

| Tool | Purpose | Pricing |
|---|---|---|
| **Stripe** | Subscription billing with free tier support | Transaction fees |
| **Paddle** | All-in-one billing and tax | Transaction fees |
| **Stigg** | Feature flagging and entitlements for pricing tiers | $60+/mo |
| **Lago** | Open-source metering and billing | Free (self-hosted) |
| **LaunchDarkly** | Feature flags for gating | $10+/mo |
| **PostHog** | Product analytics for upgrade trigger analysis | Free–$0+/mo |

## Agent Instructions

When populating this folder, the AI agent should:

1. Read `company-profile.md` to understand the product, pricing model, and target market
2. Read `11-conversion/pricing-strategy/README.md` for pricing tier context
3. Design a free tier that delivers genuine value but has clear upgrade triggers
4. Create a feature gating matrix across all tiers
5. Identify 5-8 specific upgrade triggers with in-app UX descriptions
6. Model the freemium economics (cost per free user, conversion assumptions, break-even)
7. Design the upgrade UX flow
8. Include abuse prevention measures
9. Output everything as `README.md` in this folder

## Example Output (Snippet)

```markdown
## Freemium Design — [Async Standup Tool]

### Free Tier: "Starter"
- Up to 3 team members
- 1 standup routine
- Basic questions (What did you do? What will you do? Blockers?)
- 7-day history
- Slack integration only

### Paid Tier: "Team" ($12/user/mo)
- Unlimited team members
- Unlimited standup routines
- Custom questions and templates
- Unlimited history + analytics
- All integrations (Slack, Teams, Jira, Linear)
- Export and API access

### Primary Upgrade Trigger
When user invites the 4th team member:
> "Your team is growing! Upgrade to Team to add unlimited members. Teams of 5+ see 3x more value from async standups."
> [Upgrade Now — $12/user/mo] [Maybe Later]
```

## Cross-References

- `11-conversion/pricing-strategy` — freemium is a pricing decision; the two must be designed together
- `11-conversion/free-trial` — decide if you offer trial, freemium, or both (and how they interact)
- `12-revenue/subscriptions` — the free tier sits within your subscription model
- `12-revenue/upsells` — upgrade triggers are a form of upselling
- `15-growth/product-led-growth` — freemium is a cornerstone of PLG strategy
