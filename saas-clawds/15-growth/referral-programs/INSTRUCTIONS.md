---
department: 15-growth
subfolder: referral-programs
priority: P1
stage: post-launch (requires happy customers to refer)
estimated_time: 4-6 hours initial design, ongoing optimization
requires:
  - 14-retention/user-onboarding
  - 12-revenue/subscriptions
---

# Referral Programs — Building a Structured Word-of-Mouth Engine

## Overview

This folder contains your referral program design — the structured system for turning happy customers into your best acquisition channel. Word-of-mouth is already your most powerful growth lever; a referral program simply adds incentives and mechanics to amplify it. Referred customers convert at higher rates, retain longer, and have higher LTV than customers from any other channel.

The best referral programs don't feel like marketing — they feel like one friend helping another. The incentive exists to trigger the behavior, but the underlying motivation is genuine: "I use this product, it's great, you should try it."

## Questions to Answer

Before building a referral program, the founder needs to answer:

1. **What incentive will you offer — and to which side?** (Referrer only? Referee only? Both sides? Common: give $X credit, get $X credit. Or: give 1 month free, get 1 month free. Two-sided incentives perform 2-3x better.)
2. **What is the referral mechanic?** (Unique referral link? Referral code? In-app invite? Email invite? The simpler the mechanic, the higher the participation rate.)
3. **When is the best time to prompt for a referral?** (After a success moment, not at random. After the user completes a project, gets a result, or reaches a milestone. "Moment of delight" is the ideal trigger.)
4. **How do you prevent fraud?** (Self-referrals, fake accounts, referral farming. Set rules: unique email, must be a new user, must convert to paid, payout only after X days.)
5. **How will you track attribution?** (First-touch? Referral link click → signup → conversion. What's the attribution window? 30 days? 90 days?)
6. **What is the referral reward fulfillment process?** (Automatic account credit? Manual review? Instant or delayed? Clear communication of reward status.)
7. **What is your K-factor target?** (K = invites per user × conversion rate of invites. K > 1 = viral growth. Most referral programs achieve K of 0.1-0.3, which is still highly valuable.)

## Output Template

Generate a comprehensive referral program plan with these sections:

### 1. Referral Program Design

| Element | Your Design |
|---|---|
| **Program name** | [e.g., "Invite & Earn", "Share [Product]"] |
| **Referrer incentive** | [e.g., 1 month free, $20 credit, extra storage] |
| **Referee incentive** | [e.g., 20% off first month, extended trial, bonus feature] |
| **Referral mechanic** | [Link, code, in-app invite, email] |
| **Attribution window** | [30/60/90 days from click to signup] |
| **Reward trigger** | [On signup? On activation? On first payment?] |
| **Cap/limits** | [Max referrals per user? Max reward value?] |

### 2. Referral User Journey

| Step | Referrer Experience | Referee Experience |
|---|---|---|
| 1 | Sees referral prompt (in-app, email, or success screen) | — |
| 2 | Shares unique link via preferred channel | Receives link/recommendation |
| 3 | Sees referral status in dashboard | Clicks link → landing page with special offer |
| 4 | Notified when friend signs up | Signs up with referral context |
| 5 | Rewarded when friend meets criteria | Receives referee incentive |
| 6 | Encouraged to refer again | Prompted to refer others |

### 3. Referral Prompt Timing

| Trigger | Why | Copy Example |
|---|---|---|
| After completing first project | Moment of delight | "Love [Product]? Give a friend 1 month free" |
| After upgrade to paid | High commitment signal | "You upgraded! Share the love — invite friends" |
| After 30 days active | Proven engagement | "You've been using [Product] for a month — know someone who'd love it?" |
| After NPS survey (Promoter) | Already expressed enthusiasm | "Thanks for the great score! Would you refer a friend?" |
| Monthly usage summary email | Regular touchpoint | "You accomplished X this month. Know someone who could too?" |

### 4. Fraud Prevention Rules

| Rule | Implementation |
|---|---|
| Unique email address required | No +aliases or disposable emails |
| New user only | Referee must not have an existing account |
| Activation required | Reward only triggers after referee completes activation |
| Paid conversion required | (Optional) Reward only after first payment |
| Cooldown period | Reward delivered 14 days after qualifying event |
| Self-referral detection | Block same IP/device referrals |
| Manual review threshold | Flag accounts with >20 referrals for review |

### 5. Referral Email Templates

**Invite Email (from referrer):**
Subject: "I thought you'd like [Product]"
Content: Personal note from referrer + incentive + CTA

**Reward Notification (to referrer):**
Subject: "[Friend's name] just signed up — your reward is ready!"
Content: Celebrate + show reward applied + encourage another referral

**Welcome Email (to referee):**
Subject: "[Referrer's name] invited you to try [Product]"
Content: Warm introduction + special offer + quick start guide

### 6. Referral Metrics

| Metric | Definition | Target |
|---|---|---|
| Referral participation rate | % of users who share at least one referral | >10% |
| Referral conversion rate | % of referral links that convert to signups | >15% |
| K-factor | Invites per user × conversion rate | >0.15 |
| Referral LTV vs. average LTV | Lifetime value comparison | Referral LTV > avg LTV |
| Time to referral | Days from signup to first referral | <60 days |
| Fraud rate | % of flagged/rejected referrals | <5% |

## Recommended Tools

| Tool | Purpose | Pricing |
|---|---|---|
| **Rewardful** | Referral + affiliate tracking for SaaS | $49+/mo |
| **FirstPromoter** | SaaS referral and affiliate management | $49+/mo |
| **Viral Loops** | Referral program templates and widgets | $34+/mo |
| **ReferralCandy** | E-commerce/SaaS referral programs | $47+/mo |
| **Custom-built** | Full control over UX and logic | Engineering time |
| **Stripe promo codes** | Simple referral discounts | Free (Stripe fees) |

## Agent Instructions

When populating this folder, the AI agent should:

1. Read `company-profile.md` to understand the product, pricing, and target customer
2. Read `12-revenue/subscriptions/README.md` for pricing and billing model (to design incentives)
3. Read `14-retention/user-onboarding/README.md` for activation milestones (referral reward triggers)
4. Design a two-sided incentive that aligns with the product's pricing model
5. Map the complete referral user journey for both referrer and referee
6. Define 5+ trigger moments for referral prompts
7. Create fraud prevention rules appropriate to the product
8. Write referral email templates
9. Output everything as `README.md` in this folder

## Example Output (Snippet)

```markdown
## Referral Program: "Give a Month, Get a Month"

**Incentive:** Both referrer and referee get 1 month free on any paid plan.
**Mechanic:** Unique referral link generated in the user dashboard.
**Trigger:** Reward applied when referee completes their first payment.

### Performance (January 2025)
| Metric | Value |
|---|---|
| Users who shared | 124 (8.3% of active users) |
| Referral links clicked | 340 |
| Signups from referrals | 67 (19.7% conversion) |
| Converted to paid | 23 (34% of referral signups) |
| K-factor | 0.22 |
| Revenue impact | $2,070 MRR from referrals |
```

## Cross-References

- `09-acquisition/affiliate-marketing` — affiliates are professional referrers; programs can overlap
- `15-growth/viral-loops` — referrals are one type of viral loop
- `15-growth/product-led-growth` — referral programs are a PLG growth lever
- `14-retention/user-onboarding` — referral onboarding should be customized for referred users
- `12-revenue/subscriptions` — referral credits affect subscription billing
