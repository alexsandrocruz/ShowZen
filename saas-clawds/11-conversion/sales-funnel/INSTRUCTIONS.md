---
department: 11-conversion
subfolder: sales-funnel
priority: P0
stage: post-launch (design pre-launch)
estimated_time: 3-4 hours initial design, ongoing optimization
requires:
  - 09-acquisition/seo-wins
  - 09-acquisition/content-marketing
  - 08-launch/landing-page
---

# Sales Funnel — From First Touch to Closed Deal

## Overview

This folder contains your sales funnel design — the complete path a prospect takes from discovering your product to becoming a paying customer. Every SaaS company has a funnel, whether they've designed it intentionally or not. The goal here is to make yours intentional, measurable, and optimizable.

Your funnel should define every stage, the conversion rate targets between stages, the touchpoints at each stage, and where automation can replace manual effort. Whether you're self-serve, sales-assisted, or enterprise, the funnel framework applies.

## Questions to Answer

Before generating the sales funnel, the founder needs to answer:

1. **What are the stages of your funnel?** (Common: Awareness → Interest → Consideration → Trial/Demo → Purchase → Activation)
2. **What conversion rate are you targeting at each stage?** (Industry benchmarks: visitor→signup 2-5%, signup→active 40-60%, active→paid 15-25%)
3. **What are the touchpoints at each stage?** (Landing page, email, in-app, sales call, demo, case study, etc.)
4. **Where can you automate?** (Email sequences, in-app nudges, chatbot, self-serve checkout)
5. **Is your model self-serve, sales-assisted, or enterprise sales?** (This fundamentally shapes the funnel)
6. **What is your average deal size?** (Determines whether high-touch sales is economically viable)
7. **How do you define a qualified lead?** (What signals indicate someone is likely to convert?)
8. **What is your time-to-close?** (Average days from first touch to payment)

## Output Template

Generate a comprehensive sales funnel document with these sections:

### 1. Funnel Map
Visual representation of each stage:
```
[Visitors] → [Signups] → [Activated Users] → [Qualified Leads] → [Customers]
  100%          3-5%          40-60%              20-30%            15-25%
```
- Define what triggers the transition between each stage
- List the touchpoints that exist at each stage
- Identify drop-off points where prospects are lost

### 2. Stage Definitions
For each funnel stage:
- **Entry criteria:** what qualifies someone for this stage
- **Exit criteria:** what moves them to the next stage
- **Key touchpoints:** what the prospect experiences
- **Owner:** who is responsible (product, marketing, sales)
- **Automation:** what can be automated vs. requires human touch
- **Conversion target:** benchmark and stretch goal

### 3. Conversion Rate Benchmarks
| Stage Transition | Industry Benchmark | Your Target | Current |
|---|---|---|---|
| Visitor → Signup | 2-5% | | |
| Signup → Activated | 40-60% | | |
| Activated → Qualified | 20-30% | | |
| Qualified → Customer | 15-25% (self-serve) / 20-40% (sales-assisted) | | |
| Overall Visitor → Customer | 0.5-2% | | |

### 4. Lead Scoring Criteria
| Signal | Score | Rationale |
|---|---|---|
| Completed onboarding | +20 | Shows intent and engagement |
| Invited team members | +30 | Multi-user = higher LTV |
| Visited pricing page | +15 | Purchase intent signal |
| Used core feature 3+ times | +25 | Found value |
| Enterprise email domain | +10 | Higher deal potential |
| Inactive 7+ days | -15 | Losing interest |

### 5. Touchpoint Map
For each stage, list every touchpoint:
- **Awareness:** blog post, social post, ad, community mention, directory listing
- **Interest:** landing page, feature page, demo video, free tool
- **Consideration:** case study, comparison page, free trial signup, webinar
- **Decision:** pricing page, sales call, custom demo, ROI calculator
- **Purchase:** checkout page, onboarding flow, welcome email sequence

### 6. Funnel Optimization Playbook
- Top 5 experiments to run in the first 90 days
- A/B testing framework for each stage
- Qualitative feedback collection (exit surveys, user interviews)
- Monthly funnel review process

## Recommended Tools

| Tool | Purpose | Pricing |
|---|---|---|
| **HubSpot** | CRM, lead scoring, funnel tracking | Free–$45+/mo |
| **Pipedrive** | Sales pipeline management | $14+/mo |
| **Close** | Sales CRM for startups | $29+/mo |
| **Salesforce** | Enterprise CRM and funnel management | $25+/mo |
| **Mixpanel** | Product analytics for funnel tracking | Free–$25+/mo |
| **Hotjar** | Heatmaps and session recordings for funnel pages | Free–$32+/mo |

## Agent Instructions

When populating this folder, the AI agent should:

1. Read `company-profile.md` to understand the product, pricing model, and sales motion (self-serve vs. sales-assisted)
2. Design a funnel appropriate to the business model (PLG funnels differ from sales-led)
3. Define 4-6 funnel stages with entry/exit criteria
4. Set conversion rate targets based on industry benchmarks adjusted for the specific model
5. Create a lead scoring system with 8-12 signals
6. Map all touchpoints per stage
7. Suggest 5 optimization experiments for the first quarter
8. Reference `09-acquisition/` for top-of-funnel channels and `11-conversion/free-trial` or `11-conversion/freemium-model` for middle-of-funnel
9. Output everything as `README.md` in this folder

## Example Output (Snippet)

```markdown
## Funnel Stages — Self-Serve PLG Model

### Stage 1: Awareness
- **Entry:** First visit to website or content
- **Touchpoints:** Blog, social, community, directory listing, ad
- **Exit → Interest:** Clicks through to product page or signs up for newsletter
- **Conversion target:** 15% of visitors show interest signal

### Stage 2: Signup
- **Entry:** Creates free account
- **Touchpoints:** Signup page, OAuth flow, welcome email
- **Exit → Activated:** Completes first core action (e.g., creates first standup)
- **Conversion target:** 60% of signups activate within 48 hours
- **Automation:** Welcome email sequence (Day 0, 1, 3, 7)

### Stage 3: Activation
- **Entry:** Completed first core action
- **Touchpoints:** In-app onboarding, product tours, email tips
- **Exit → Qualified:** Uses product 3+ times AND invites a team member
- **Conversion target:** 40% of activated users become qualified
```

## Cross-References

- `09-acquisition/cold-email` — outbound feeds the top of the funnel
- `11-conversion/free-trial` — trial optimization is a critical funnel stage
- `11-conversion/pricing-strategy` — pricing impacts conversion at the bottom of the funnel
- `13-analytics/funnel-analysis` — data-driven funnel optimization
- `14-retention/user-onboarding` — onboarding is the bridge between signup and activation
