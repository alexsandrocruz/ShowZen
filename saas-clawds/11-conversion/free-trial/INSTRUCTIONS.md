---
department: 11-conversion
subfolder: free-trial
priority: P0
stage: post-launch
estimated_time: 3-4 hours initial design, ongoing optimization
requires:
  - 11-conversion/sales-funnel
  - 14-retention/user-onboarding
---

# Free Trial — Optimize the Trial Experience to Maximize Conversion

## Overview

This folder contains your free trial optimization plan — the strategy for designing a trial experience that gives users enough value to convert while creating urgency to upgrade before the trial ends. The free trial is where your product needs to prove itself. Every element — length, restrictions, onboarding, communication — affects whether someone becomes a paying customer.

Trial-to-paid conversion is one of the most important metrics in SaaS. The difference between 10% and 20% conversion literally doubles your revenue from the same acquisition spend.

## Questions to Answer

Before generating the trial strategy, the founder needs to answer:

1. **What is your trial length?** (7 days for simple products, 14 days is the standard, 30 days for complex enterprise tools — shorter trials create more urgency)
2. **What features are restricted during trial?** (Full access vs. limited features vs. usage caps)
3. **Is a credit card required upfront?** (CC upfront = fewer trials but higher conversion; no CC = more trials but lower conversion)
4. **What does the onboarding experience during trial look like?** (Product tours, checklist, setup wizard, human outreach?)
5. **What is your trial-to-paid conversion target?** (Benchmark: 15-25% without CC required, 40-60% with CC required)
6. **What emails do you send during the trial?** (Welcome, tips, social proof, urgency, expiry warning)
7. **What happens when the trial expires?** (Account locked? Downgrade to free? Grace period? Data retained?)
8. **Do you offer trial extensions?** (Under what circumstances? Automated or manual?)

## Output Template

Generate a comprehensive trial optimization plan with these sections:

### 1. Trial Design Decisions
| Decision | Options | Recommended | Rationale |
|---|---|---|---|
| Trial length | 7 / 14 / 30 days | 14 days | Balances urgency with time to evaluate |
| Credit card required | Yes / No | No (initially) | Maximize signups, optimize conversion later |
| Feature access | Full / Limited / Usage-capped | Full access | Let users experience full value |
| Trial extensions | Yes / No | Yes (1x, 7 days) | Recover users who need more time |

### 2. Trial Email Sequence
| Day | Email | Subject Line | Goal |
|---|---|---|---|
| 0 | Welcome | Welcome to [Product] — here's your quick start | Orient and activate |
| 1 | Quick win | Do this one thing to get value from [Product] today | Drive first core action |
| 3 | Feature highlight | You haven't tried [key feature] yet | Expand feature usage |
| 7 | Social proof | How [Customer] uses [Product] to [result] | Build confidence |
| 10 | Value recap | Here's what you've accomplished in [Product] | Reinforce value delivered |
| 12 | Urgency | Your trial ends in 2 days | Create urgency to upgrade |
| 14 | Expiry | Your trial has ended — here's what happens next | Clear next steps |
| 17 | Win-back | We saved your data — come back anytime | Re-engage non-converters |

### 3. In-App Trial Experience
- **Day 1-3:** Onboarding checklist, product tour, setup wizard
- **Day 4-7:** Feature discovery prompts, "have you tried X?" nudges
- **Day 8-10:** Usage summary showing value received, upgrade teaser
- **Day 11-14:** Countdown banner, upgrade CTA becomes more prominent
- **Post-expiry:** Locked state with clear upgrade path, data preservation message

### 4. Trial Expiry Handling
- What gets locked vs. stays accessible
- Data retention policy (how long you keep their data)
- Downgrade path (to free tier if you have one)
- Reactivation flow (easy to upgrade even after expiry)
- Grace period rules

### 5. Trial Extension Policy
- Criteria for granting extensions (asked, enterprise eval, high engagement but not converted)
- Extension length (7 days standard)
- Maximum extensions (1-2)
- How to request (in-app, email reply, automatic offer at expiry)

### 6. Trial Analytics
- **Activation rate:** % of trial users who complete first core action
- **Feature adoption:** which features trial users engage with
- **Conversion timing:** when in the trial do users typically convert
- **Drop-off points:** when users go inactive during trial
- **Extension impact:** conversion rate for extended trials vs. standard

## Recommended Tools

| Tool | Purpose | Pricing |
|---|---|---|
| **Intercom** | In-app messaging, product tours, email | $39+/mo |
| **Customer.io** | Behavioral email sequences | $100+/mo |
| **Appcues** | No-code product tours and onboarding flows | $249+/mo |
| **Pendo** | Product analytics and in-app guides | Custom pricing |
| **Chameleon** | Product tours and tooltips | $279+/mo |
| **Userflow** | User onboarding flows | $200+/mo |

## Agent Instructions

When populating this folder, the AI agent should:

1. Read `company-profile.md` to understand the product complexity and target customer
2. Read `11-conversion/sales-funnel/README.md` for overall funnel context
3. Design the trial structure (length, restrictions, CC requirement) with rationale
4. Write a complete trial email sequence with subject lines and goals for each email
5. Design the in-app trial experience with daily/phase-based plan
6. Define trial expiry handling and extension policies
7. Specify analytics to track with specific metrics
8. Reference `14-retention/user-onboarding` for onboarding integration
9. Output everything as `README.md` in this folder

## Example Output (Snippet)

```markdown
## Trial Email Sequence — Day 1: Quick Win

**Subject:** One thing to try in [Product] today
**Send time:** 24 hours after signup
**Trigger:** User has signed up but not completed first core action

Hi {first_name},

Welcome aboard! Most teams that get the most from [Product] do one thing on day one: **create their first async standup.**

It takes 2 minutes:
1. Click "New Standup" in your dashboard
2. Choose a template (or use ours)
3. Invite one teammate

[Create Your First Standup →]

Once you see your first team update come in, you'll immediately understand why 500+ teams have ditched their daily meeting.

Questions? Reply to this email — I read every response.

{Founder name}
```

## Cross-References

- `11-conversion/freemium-model` — if you offer both free trial and freemium, they need to be coordinated
- `14-retention/user-onboarding` — trial onboarding and long-term onboarding share UX patterns
- `11-conversion/pricing-strategy` — pricing page is where trial users convert; they must align
- `14-retention/email-automation` — trial emails are the first email sequence users experience
- `13-analytics/funnel-analysis` — trial conversion is a critical funnel metric to track
