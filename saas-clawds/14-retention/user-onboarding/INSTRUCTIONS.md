---
department: 14-retention
subfolder: user-onboarding
priority: P0
stage: pre-launch (design before launch, iterate aggressively after)
estimated_time: 6-8 hours initial design, ongoing optimization
requires:
  - 04-design/ux-flows
  - 11-conversion/free-trial
  - 13-analytics/user-tracking
---

# User Onboarding — Designing the First-Run Experience

## Overview

This folder contains your onboarding strategy — the most critical experience in your entire product. User onboarding is the bridge between "I just signed up" and "I can't live without this." If users don't reach their "aha moment" quickly, they leave and never come back. Studies show that 40-60% of free trial users who sign up will use your product once and never return.

Great onboarding doesn't just explain the product — it gets the user to experience real value as fast as possible. Every extra step, every moment of confusion, every unnecessary field is a user lost.

## Questions to Answer

Before designing onboarding, the founder needs to answer:

1. **What is the "aha moment" for your product?** (The moment the user first experiences real value. For Dropbox: seeing a file sync across devices. For Slack: getting a response from a teammate. For Canva: finishing a design. What's yours?)
2. **What are the minimum steps to reach the "aha moment"?** (List every step from signup to value. Now ruthlessly cut anything that isn't essential. Can you get there in 3 steps or fewer?)
3. **What is your time-to-value target?** (How fast should a new user experience value? Under 5 minutes is ideal. Under 30 minutes is acceptable. Anything over 24 hours is dangerous.)
4. **What onboarding style fits your product?** (Product tour with tooltips? Checklist sidebar? Setup wizard? Progressive disclosure? Template-first? The right choice depends on product complexity.)
5. **Should onboarding be personalized?** (Do different user types need different paths? E.g., a marketer vs. a developer, or a solo user vs. a team admin.)
6. **What data do you need during signup vs. later?** (Every field in the signup form reduces conversion by 3-5%. Collect only what's essential for the first experience. Gather the rest later.)
7. **What does the first email sequence look like?** (Welcome email + 3-5 onboarding emails over the first 7-14 days, nudging users toward activation milestones.)
8. **How will you measure onboarding success?** (Activation rate, time-to-value, onboarding completion rate, and the correlation between onboarding steps and retention.)

## Output Template

Generate a comprehensive onboarding strategy with these sections:

### 1. "Aha Moment" Definition

| Field | Value |
|---|---|
| **Aha moment** | [Describe the moment of first value] |
| **Activation criteria** | [Specific, measurable action(s) that define activation] |
| **Current activation rate** | [If known] |
| **Target activation rate** | [Target] |
| **Time-to-value target** | [Minutes/hours from signup to aha moment] |

### 2. Onboarding Flow Map

Step-by-step user journey from signup to activation:

| Step | Screen/Action | Goal | Time Estimate | Drop-off Risk |
|---|---|---|---|---|
| 1 | Signup form | Create account | 30 seconds | High — minimize fields |
| 2 | Welcome screen | Set expectations | 10 seconds | Low |
| 3 | Use case selection | Personalize path | 15 seconds | Medium |
| 4 | First core action | Experience value | 2-5 minutes | High — provide guidance |
| 5 | Success moment | Confirm value received | Instant | Low |

### 3. Onboarding Checklist Definition

- [ ] Step 1: [First activation milestone]
- [ ] Step 2: [Second milestone]
- [ ] Step 3: [Third milestone]
- [ ] Step 4: [Fourth milestone — aha moment]
- [ ] Bonus: [Power user action — e.g., invite team, integrate tool]

Show progress bar. Celebrate completion of each step. Reward checklist completion.

### 4. Welcome Email Sequence

| Email | Timing | Subject Line | Goal |
|---|---|---|---|
| Welcome | Immediate | Welcome to [Product] — here's your first step | Set expectations, link to first action |
| Nudge 1 | Day 1 | Quick win: [specific action] in under 2 minutes | Push toward activation if not yet activated |
| Nudge 2 | Day 3 | Most users do this next... | Social proof + next milestone |
| Value proof | Day 5 | Here's what [Product] did for you this week | Show value delivered (data-driven) |
| Engagement | Day 7 | 3 things you haven't tried yet | Feature discovery |
| Trial ending | Day 10 | Your trial ends in 4 days — here's what you'd lose | Urgency + loss aversion |

### 5. Activation Metrics

| Metric | Definition | Target |
|---|---|---|
| Signup → First login | % who log in within 24 hours | >85% |
| First login → Core action | % who complete the key first action | >50% |
| Core action → Activated | % who reach the aha moment | >30% |
| Overall activation rate | Signup → Activated | >25% |
| Time to activation | Median time from signup to aha moment | <24 hours |

### 6. Onboarding A/B Test Ideas

| Test | Hypothesis | Primary Metric |
|---|---|---|
| Wizard vs. checklist | Wizard increases completion for complex setup | Onboarding completion rate |
| With/without product tour | Tour reduces confusion for first-time users | Time to first core action |
| 2-field vs. 5-field signup | Fewer fields increase signup conversion | Signup completion rate |
| Template start vs. blank | Templates reduce time-to-value | Activation rate |
| Personalized vs. generic | Use case-specific paths increase activation | Day-7 retention |

## Recommended Tools

| Tool | Purpose | Pricing |
|---|---|---|
| **Appcues** | No-code onboarding flows and checklists | $249+/mo |
| **Pendo** | In-app guides with analytics | Contact for pricing |
| **Userflow** | Onboarding flows and checklists | $200+/mo |
| **Intercom** | Product tours + lifecycle messaging | $39+/mo |
| **Customer.io** | Behavioral onboarding email sequences | $100+/mo |
| **CommandBar** | In-app assistance and nudges | Free tier available |
| **Custom-built** | Full control, no ongoing cost | Engineering time |

## Agent Instructions

When populating this folder, the AI agent should:

1. Read `company-profile.md` to understand the product, target user, and core value proposition
2. Read `04-design/ux-flows/README.md` for existing UX flow documentation
3. Read `11-conversion/free-trial/README.md` for the trial model and conversion approach
4. Define the "aha moment" specific to the product — not generic, but the actual moment of value
5. Map the minimum-step onboarding flow from signup to aha moment
6. Design a checklist with 4-5 milestones
7. Write a 5-6 email welcome sequence with specific subject lines and timing
8. Set activation metrics with targets appropriate to the product type
9. Generate 5+ onboarding A/B test ideas
10. Output everything as `README.md` in this folder

## Example Output (Snippet)

```markdown
## Aha Moment

**For a project management tool:** The aha moment is when a user creates their first project, adds at least 3 tasks, and sees the board view organize their work visually. This typically happens within the first 10 minutes if the onboarding guides them there.

**Activation Criteria:** User has created ≥1 project with ≥3 tasks within 7 days of signup.

## Onboarding Checklist
- [x] Create your first project (2 min)
- [ ] Add 3 tasks to your project (1 min)
- [ ] Drag a task to "In Progress" (10 sec)
- [ ] Invite a team member (1 min)
- [ ] 🎉 You're set up! Explore templates →
```

## Cross-References

- `04-design/ux-flows` — UX flow design determines the onboarding experience
- `11-conversion/free-trial` — onboarding is the trial conversion engine
- `14-retention/email-automation` — onboarding emails are part of the lifecycle email system
- `14-retention/feature-adoption` — onboarding introduces features; adoption drives long-term retention
- `13-analytics/funnel-analysis` — the activation funnel is the most important onboarding metric
- `13-analytics/ab-testing` — onboarding is the highest-ROI area for experimentation
