---
department: 15-growth
subfolder: product-led-growth
priority: P0
stage: pre-launch (design PLG into the product from the start)
estimated_time: 5-7 hours for audit and strategy, ongoing implementation
requires:
  - 11-conversion/freemium-model
  - 14-retention/user-onboarding
  - 13-analytics/user-tracking
---

# Product-Led Growth — Using the Product Itself as the Primary Growth Engine

## Overview

This folder contains your PLG strategy — the approach where the product drives acquisition, conversion, and expansion with minimal sales touch. In PLG, the product *is* the marketing. Users sign up, experience value, invite others, and upgrade — all through self-serve interactions with the product.

PLG doesn't mean "no sales." It means the product does the heavy lifting of the early funnel, and sales (if needed) focuses on expansion and enterprise. The result: lower CAC, faster growth, and a more defensible business because growth is built into the product, not dependent on marketing spend.

The best PLG companies — Slack, Notion, Figma, Dropbox — didn't just happen to grow through the product. They intentionally designed their products to be growth engines from the beginning.

## Questions to Answer

Before building a PLG strategy, the founder needs to answer:

1. **What PLG motions are possible for your product?** (Self-serve signup? Freemium? Free trial? Collaboration-driven (invite teammates)? Viral output (branded exports/embeds)? API-led (developers build on your platform)?)
2. **How much friction exists in your self-serve signup?** (Can someone go from "never heard of you" to "using the product" in under 5 minutes? If not, where are the blockers?)
3. **Where are the natural in-product upgrade prompts?** (What usage limits, features, or moments naturally create a reason to upgrade? Are these moments well-designed or frustrating?)
4. **Is usage-based pricing an option?** (Does your product have a natural usage metric that scales with value delivered? This is the strongest PLG pricing lever.)
5. **Do collaboration features bring in new users?** (Can User A invite User B in a way that User B gets value and becomes a user themselves? This is the collaboration viral loop.)
6. **What product output is shareable?** (Reports, dashboards, documents, designs — can these be shared publicly or with non-users, creating awareness?)
7. **What is the self-serve conversion rate today?** (What % of free users convert to paid without talking to sales? What % of revenue comes from self-serve vs. sales-assisted?)

## Output Template

Generate a comprehensive PLG strategy with these sections:

### 1. PLG Audit Checklist

| PLG Element | Status | Score (1-5) | Notes |
|---|---|---|---|
| Self-serve signup (no demo required) | | | |
| Time-to-value under 5 minutes | | | |
| Free plan or free trial available | | | |
| In-product upgrade prompts at value moments | | | |
| Collaboration features that invite new users | | | |
| Shareable output (reports, docs, embeds) | | | |
| Usage-based pricing component | | | |
| API / developer ecosystem | | | |
| Self-serve billing (upgrade/downgrade/cancel) | | | |
| In-product education (tooltips, guides, docs) | | | |
| Product qualified leads (PQL) identification | | | |
| Viral mechanics (referral, branded output) | | | |

**PLG Score:** Sum / 60 — Above 40 = strong PLG foundation. Below 25 = significant gaps.

### 2. Self-Serve Funnel Optimization

| Stage | Current Friction | Optimization |
|---|---|---|
| Awareness → Signup | Requires demo? Requires credit card? | Remove barriers — email-only signup |
| Signup → First value | Long setup? Confusing UI? | Templates, guided wizard, smart defaults |
| Free → Paid | Unclear upgrade path? | Usage limits at natural breakpoints + clear upgrade CTA |
| Individual → Team | Manual invite process? | In-product "invite teammate" at collaboration moments |
| Team → Enterprise | No self-serve option? | Self-serve up to X seats, sales-assist above |

### 3. In-Product Growth Lever Inventory

| Lever | Type | Mechanism | Expected Impact |
|---|---|---|---|
| Invite team members | Collaboration loop | User invites colleague → colleague gets value | Each team user brings 1.5 more |
| Shareable reports/output | Viral output | Recipient sees "[Product] powered" | Awareness → signup pipeline |
| Usage limit upgrade | Expansion trigger | Hit free plan limit → upgrade CTA | Free→paid conversion |
| Empty state prompts | Activation | Blank state shows what's possible + guided start | First-action completion |
| Feature gating | Expansion trigger | See locked features → upgrade to unlock | Upgrade motivation |
| Public templates | Acquisition | Templates indexed by search engines | SEO → signup pipeline |

### 4. PLG Metrics Framework

| Metric | Definition | Benchmark | Your Target |
|---|---|---|---|
| Self-serve signup rate | % of visitors who signup without sales | >2% (website visitors) | |
| Time to value | Minutes from signup to first value moment | <5 min (ideal) | |
| Free → Paid conversion | % of free users who convert | 2-5% (freemium), 15-30% (trial) | |
| PQL rate | % of signups identified as product-qualified | 10-20% | |
| Expansion rate | % of teams that add seats or upgrade | >5%/month | |
| Viral coefficient | New users generated per existing user | >0.15 | |
| Self-serve revenue % | Revenue from self-serve vs. sales-assisted | Growing over time | |

### 5. Product Qualified Lead (PQL) Definition

A PQL is a user who has demonstrated buying intent through product usage:

| PQL Signal | Weight | Threshold |
|---|---|---|
| Completed activation | Required | Must be activated |
| Used product for ≥X days | High | 3+ days of usage |
| Invited team members | High | ≥1 invite sent |
| Hit usage limit | High | Approached or exceeded free tier limit |
| Viewed pricing page | Medium | ≥1 pricing page view |
| Used advanced feature | Medium | Feature on paid plan used during trial |

### 6. PLG Roadmap

| Quarter | Initiative | Expected Impact |
|---|---|---|
| Q1 | Reduce signup friction (remove credit card requirement) | +30% signup rate |
| Q1 | Improve onboarding (templates + wizard) | +20% activation rate |
| Q2 | Add collaboration invite flow | +0.1 viral coefficient |
| Q2 | Implement usage-based upgrade prompts | +15% free→paid conversion |
| Q3 | Build shareable output (branded embeds/reports) | New awareness channel |
| Q3 | Launch API / developer program | Platform ecosystem |
| Q4 | PQL-based sales outreach for enterprise | Sales-assist at scale |

## Recommended Tools

| Tool | Purpose | Pricing |
|---|---|---|
| **PostHog** | Product analytics + feature flags for PLG experimentation | Free tier |
| **Pendo** | In-app guides and PQL identification | Contact for pricing |
| **Amplitude** | Product analytics with PLG-focused features | Free tier |
| **Appcues** | Self-serve onboarding and in-product prompts | $249+/mo |
| **Correlated** | PQL identification and scoring | Contact for pricing |
| **OpenView PLG Index** | Benchmarking and best practices | Free resource |

## Agent Instructions

When populating this folder, the AI agent should:

1. Read `company-profile.md` to understand the product, pricing model, and growth stage
2. Read `11-conversion/freemium-model/README.md` for the free tier design
3. Read `14-retention/user-onboarding/README.md` for the onboarding flow
4. Read `13-analytics/user-tracking/README.md` for available product usage events
5. Complete the PLG audit checklist with honest scoring
6. Identify the top 3 PLG levers specific to the product
7. Define PQL criteria based on the product's value moments
8. Design the self-serve funnel optimization plan
9. Create a quarterly PLG roadmap
10. Output everything as `README.md` in this folder

## Example Output (Snippet)

```markdown
## PLG Audit Score: 32/60 — Moderate PLG Foundation

**Strengths:**
- Self-serve signup with no credit card required
- 14-day free trial with full features
- Good onboarding checklist

**Gaps to Close:**
- No collaboration invite flow (biggest opportunity)
- No shareable output — all reports are private
- Upgrade prompts only on pricing page, not at usage moments
- No PQL identification or sales handoff

**#1 Priority:** Build the team invite flow. Users who invite teammates have 3x conversion rate. Current invite rate is 12% — target 30% by adding invite prompts after key collaboration moments.
```

## Cross-References

- `11-conversion/freemium-model` — freemium is a PLG pricing strategy
- `14-retention/user-onboarding` — onboarding is the first PLG experience
- `15-growth/viral-loops` — viral mechanics are PLG growth levers
- `15-growth/referral-programs` — referrals amplify PLG acquisition
- `13-analytics/ab-testing` — PLG optimization requires continuous experimentation
- `13-analytics/funnel-analysis` — the self-serve funnel is PLG's core measurement
