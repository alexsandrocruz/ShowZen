---
department: 13-analytics
subfolder: funnel-analysis
priority: P0
stage: post-launch (requires real user data)
estimated_time: 3-4 hours initial setup, weekly ongoing analysis
requires:
  - 13-analytics/user-tracking
  - 11-conversion/sales-funnel
---

# Funnel Analysis — Mapping and Measuring Conversion Funnels

## Overview

This folder contains your funnel analysis framework — the systematic measurement of how users progress (or don't) through critical journeys in your product. Every SaaS has funnels: visitor → signup → activation → paying customer → advocate. Each step has a conversion rate, and the drops between steps represent your biggest opportunities.

Funnel analysis tells you *where* users fall off. Combined with qualitative research, it tells you *why*. This is how you find the 10% improvement that doubles your revenue.

## Questions to Answer

Before building funnels, the founder needs to answer:

1. **What are your 3-5 critical funnels?** (Signup funnel, activation funnel, conversion-to-paid funnel, expansion funnel, referral funnel — which ones matter most right now?)
2. **What are your benchmark conversion rates for each step?** (Industry benchmarks: visitor→signup 2-5%, signup→activated 20-40%, activated→paid 10-25% for freemium, 40-60% for free trial.)
3. **Where are the biggest drop-offs today?** (If you have existing data, where is the leakiest part of the bucket?)
4. **How frequently will you review funnels?** (Weekly for high-traffic funnels, monthly for lower-volume ones like enterprise conversion.)
5. **What segmentation matters?** (Do funnels differ by acquisition channel? By plan type? By geography? By device?)
6. **What qualitative data supplements your funnel data?** (Session recordings, user interviews, support tickets — how do you understand the "why" behind drop-offs?)
7. **What is the time window for funnel completion?** (Does signup→activation need to happen in 24 hours? 7 days? 30 days?)

## Output Template

Generate a comprehensive funnel analysis document with these sections:

### 1. Critical Funnel Definitions

For each funnel, define:

**Signup Funnel**
| Step | Event | Benchmark | Your Target |
|---|---|---|---|
| Landing page visit | `page_viewed (landing)` | — | — |
| CTA clicked | `signup_cta_clicked` | 10-15% | |
| Registration started | `signup_started` | 80-90% | |
| Registration completed | `user_signed_up` | 60-80% | |
| Email verified | `email_verified` | 70-85% | |

**Activation Funnel**
| Step | Event | Benchmark | Your Target |
|---|---|---|---|
| First login | `session_started (first)` | 85-95% of verified | |
| Onboarding started | `onboarding_started` | 80-90% | |
| Key action completed | `[product-specific event]` | 30-50% | |
| "Aha moment" reached | `user_activated` | 20-40% | |

**Conversion Funnel**
| Step | Event | Benchmark | Your Target |
|---|---|---|---|
| Activated user | `user_activated` | — | |
| Pricing page viewed | `pricing_page_viewed` | 20-30% | |
| Plan selected | `plan_selected` | 40-60% | |
| Payment entered | `payment_info_entered` | 60-80% | |
| Subscription started | `subscription_started` | 85-95% | |

### 2. Drop-Off Analysis Template

For each significant drop-off (>30% loss):

| Field | Value |
|---|---|
| **Funnel** | |
| **Step with drop-off** | Step X → Step Y |
| **Drop-off rate** | X% |
| **Volume lost** | ~N users/week |
| **Revenue impact** | ~$X/month if fixed |
| **Hypothesized causes** | (list 2-3) |
| **Evidence** | (session recordings, heatmaps, support data) |
| **Proposed fix** | |
| **Expected improvement** | |

### 3. Funnel Review Cadence

| Funnel | Review Frequency | Owner | Action Threshold |
|---|---|---|---|
| Signup | Weekly | Growth | >5% week-over-week decline |
| Activation | Weekly | Product | <25% activation rate |
| Conversion | Bi-weekly | Product/Growth | <10% conversion rate |
| Expansion | Monthly | Product | Flat or declining expansion MRR |
| Referral | Monthly | Growth | <5% referral rate |

### 4. Segmented Funnel Views

Build separate funnel views for:
- Acquisition channel (organic, paid, referral, direct)
- Device type (desktop, mobile, tablet)
- Geography (top 5 countries)
- Plan type (free, trial, paid)
- Company size (for B2B: solo, SMB, mid-market, enterprise)

## Recommended Tools

| Tool | Purpose | Pricing |
|---|---|---|
| **Mixpanel** | Funnel visualization and analysis | Free to 20M events/mo |
| **Amplitude** | Advanced funnel analysis with behavioral cohorts | Free tier available |
| **PostHog** | Open-source funnels with session recording | Free tier (generous) |
| **Heap** | Auto-capture funnels (retroactive analysis) | Contact for pricing |
| **Hotjar / FullStory** | Session recordings to understand "why" behind drop-offs | $32+/mo |

## Agent Instructions

When populating this folder, the AI agent should:

1. Read `company-profile.md` to understand the product and user journey
2. Read `13-analytics/user-tracking/README.md` for the event tracking plan
3. Read `11-conversion/sales-funnel/README.md` for the existing sales funnel definition
4. Define 3-5 critical funnels with specific events for each step
5. Set benchmark conversion rates using industry standards and the product's model (freemium vs. free trial vs. sales-led)
6. Create a drop-off analysis template ready for real data
7. Define the review cadence and escalation thresholds
8. Recommend segmentation dimensions relevant to the product
9. Output everything as `README.md` in this folder

## Example Output (Snippet)

```markdown
## Activation Funnel — Current State (Week of Jan 15)

| Step | Users | Conversion | Drop-off |
|---|---|---|---|
| Signed up | 1,240 | — | — |
| Completed onboarding | 868 | 70% | 30% ← investigate |
| Created first project | 521 | 60% | 40% ← biggest gap |
| Invited team member | 208 | 40% | 60% |
| Reached "aha moment" | 156 | 75% | 25% |

**Key Insight:** The biggest drop-off is between onboarding completion and first project creation. Session recordings show users are confused by the blank state. Recommendation: add project templates and a guided first-project wizard.
```

## Cross-References

- `13-analytics/user-tracking` — funnels depend on correctly tracked events
- `11-conversion/sales-funnel` — the macro sales funnel maps to specific product funnels
- `14-retention/user-onboarding` — onboarding quality directly affects activation funnel metrics
- `13-analytics/ab-testing` — test funnel improvements with controlled experiments
- `13-analytics/kpi-dashboard` — funnel conversion rates are key dashboard metrics
