---
department: 14-retention
subfolder: email-automation
priority: P0
stage: pre-launch (design sequences before launch, activate at launch)
estimated_time: 5-7 hours initial setup, ongoing optimization
requires:
  - 14-retention/user-onboarding
  - 13-analytics/user-tracking
---

# Email Automation — Lifecycle Email Sequences for Engagement and Retention

## Overview

This folder contains your email automation strategy — the system of behaviorally-triggered emails that keep users engaged between product sessions. Email is the one channel you fully own (unlike social media or search). Well-designed lifecycle emails act as a persistent, personalized nudge system that guides users from signup to activation to long-term engagement to expansion.

The goal isn't to send more emails — it's to send the *right* email at the *right* time based on what the user has (or hasn't) done. A user who hasn't logged in for 7 days needs a different message than one who just hit a usage limit.

## Questions to Answer

Before building email automation, the founder needs to answer:

1. **What lifecycle stages does your user go through?** (New → Onboarding → Activated → Engaged → Power User → At-risk → Churned. Map your specific stages.)
2. **What is your users' email frequency tolerance?** (SaaS users typically accept 2-3 emails/week during onboarding, 1/week during engagement, less during maintenance. Test to find your threshold.)
3. **What level of personalization will you implement?** (Name only? Behavior-based content? Usage data in emails? Product-specific recommendations?)
4. **What behavioral triggers drive your emails?** (Signup, activation milestone, feature first-use, inactivity, usage spike, approaching limit, trial ending, payment failure.)
5. **How do you separate transactional from marketing emails?** (Transactional: receipts, password resets, account alerts. Marketing: lifecycle, engagement, product updates. Different sending infrastructure and legal treatment.)
6. **What is your unsubscribe strategy?** (Granular preferences vs. all-or-nothing? Can users opt down instead of opting out?)
7. **How will you measure email performance?** (Open rate, click rate, conversion rate per email. But more importantly: does the sequence improve the lifecycle metric it targets?)

## Output Template

Generate a comprehensive email automation plan with these sections:

### 1. Email Automation Map

| Trigger | Delay | Email Name | Content Focus | Goal | Success Metric |
|---|---|---|---|---|---|
| User signs up | Immediate | Welcome | Quick start guide, first action CTA | Drive first login | Login within 24h |
| Signed up, no login | +24h | Nudge 1 | Reminder + quick-win example | Reduce signup→login drop-off | Login rate |
| First core action | Immediate | Milestone 1 | Celebrate + next step | Push toward activation | Completion of step 2 |
| Activated | +1 day | Power tips | 3 features they haven't tried | Deepen engagement | Feature adoption |
| No login for 7 days | +7d inactivity | Re-engagement | What they're missing + social proof | Bring back inactive users | Return rate |
| Trial ending (4 days) | Day 10 of 14 | Trial warning | Value summary + conversion CTA | Convert to paid | Conversion rate |
| Trial ended, no convert | +1 day | Win-back 1 | Special offer or extended trial | Recover lost conversions | Recovery rate |
| Churned (30 days) | +30d post-churn | Win-back 2 | What's new + incentive to return | Win back churned users | Reactivation rate |

### 2. Lifecycle Sequence Templates

**Onboarding Sequence (Days 0-14)**
- Email 1: Welcome + first action (Day 0)
- Email 2: Setup nudge if incomplete (Day 1)
- Email 3: Social proof + next milestone (Day 3)
- Email 4: Value report — what the product did for them (Day 5)
- Email 5: Feature discovery (Day 7)
- Email 6: Trial ending warning (Day 10)
- Email 7: Last chance + offer (Day 13)

**Engagement Sequence (Ongoing, weekly)**
- Usage summary email (weekly digest)
- Feature announcement (when relevant)
- Tips and best practices (bi-weekly)
- Customer story / case study (monthly)

**Win-back Sequence (Post-churn)**
- Email 1: "We miss you" + what's new (Day 30)
- Email 2: Incentive offer (Day 45)
- Email 3: Final reach-out (Day 90)

### 3. Email Performance Tracking

| Metric | Benchmark | Your Target |
|---|---|---|
| Open rate | 25-35% (transactional), 15-25% (marketing) | |
| Click-through rate | 3-5% | |
| Unsubscribe rate | <0.5% per email | |
| Sequence completion rate | 60-80% (not unsubscribed by end) | |
| Impact on target metric | Measurable improvement vs. no-email control | |

### 4. Personalization Framework

| Level | What It Means | Example |
|---|---|---|
| L1 — Name | First name in greeting | "Hi Sarah," |
| L2 — Behavior | Content based on actions taken/not taken | "You created a project but haven't added tasks yet" |
| L3 — Usage data | Product data embedded in email | "Your team completed 47 tasks this week" |
| L4 — Recommendation | AI-driven content suggestions | "Based on your usage, try the Kanban view" |

### 5. Technical Email Setup

- Sending domain and DNS records (SPF, DKIM, DMARC)
- Transactional vs. marketing email separation
- Suppression list management
- Preference center design
- A/B testing framework for subject lines and content

## Recommended Tools

| Tool | Purpose | Pricing |
|---|---|---|
| **Customer.io** | Behavioral email automation for SaaS | $100+/mo |
| **Intercom** | Messaging + email in one platform | $39+/mo |
| **Loops** | Modern email for SaaS (built for product teams) | Free tier, $49+/mo |
| **Resend** | Developer-friendly transactional email | Free tier, $20+/mo |
| **ConvertKit** | Creator/small SaaS email marketing | $9+/mo |
| **Mailchimp** | General email marketing with automation | Free tier, $13+/mo |
| **Postmark** | High-deliverability transactional email | $10+/mo |

## Agent Instructions

When populating this folder, the AI agent should:

1. Read `company-profile.md` to understand the product, user journey, and lifecycle stages
2. Read `14-retention/user-onboarding/README.md` for the onboarding flow and activation milestones
3. Read `13-analytics/user-tracking/README.md` for behavioral events that trigger emails
4. Design the complete email automation map with triggers, timing, and goals
5. Write subject line and content outline for each email in the onboarding sequence
6. Define the engagement and win-back sequences
7. Set up the performance tracking framework
8. Recommend a tool based on technical needs and budget
9. Output everything as `README.md` in this folder

## Example Output (Snippet)

```markdown
## Onboarding Email 3 — Day 3: Social Proof

**Subject:** How [Customer Name] saved 5 hours/week with [Product]
**Trigger:** User signed up 3 days ago AND has NOT completed activation
**Goal:** Motivate activation through social proof

Hi {first_name},

Quick question — have you had a chance to [key activation action] yet?

[Customer Name] from [Company] started using [Product] last month. Here's what happened:
- Set up in under 10 minutes
- Saved 5 hours/week on [specific task]
- "I wish I'd found this sooner" — [Customer Name]

**[Complete Your Setup →]**

Takes less than 3 minutes. Here's a quick video showing exactly how.
```

## Cross-References

- `14-retention/user-onboarding` — onboarding emails are the first lifecycle sequence
- `14-retention/churn-reduction` — win-back and save emails are churn reduction mechanisms
- `13-analytics/user-tracking` — behavioral events trigger email sequences
- `09-acquisition/content-marketing` — content marketing feeds email content
- `12-revenue/subscriptions` — dunning emails are a specific type of lifecycle email
