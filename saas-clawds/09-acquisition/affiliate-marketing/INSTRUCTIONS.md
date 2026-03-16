---
department: 09-acquisition
subfolder: affiliate-marketing
priority: P2
stage: post-launch (after proven conversion funnel)
estimated_time: 3-4 hours initial setup, ongoing monthly
requires:
  - 11-conversion/pricing-strategy
  - 12-revenue/subscriptions
---

# Affiliate Marketing — Performance-Based Partner Programs

## Overview

This folder contains your affiliate and referral partner program strategy — the plan for building a network of people who promote your product in exchange for a commission on sales they generate. Affiliate marketing is pure performance-based acquisition: you only pay when you get results.

The best affiliate programs in SaaS are not just discount-code spam. They're genuine partnerships where affiliates create real content — reviews, tutorials, comparisons — that drives qualified traffic. Done right, affiliates become an extension of your marketing team.

## Questions to Answer

Before generating the affiliate program, the founder needs to answer:

1. **What commission structure will you offer?** (Recurring % of subscription, one-time flat fee, or tiered based on volume? SaaS standard: 20-30% recurring for 12 months)
2. **What is your cookie duration?** (How long after a click does the affiliate get credit? Standard: 30-90 days)
3. **Who are your ideal affiliates?** (Bloggers, YouTubers, newsletter writers, consultants, agencies, existing customers, complementary SaaS tools)
4. **What are your payment terms?** (Monthly payouts? Minimum threshold? Net-30 or net-60? Payment methods?)
5. **How will you prevent fraud?** (Self-referrals, cookie stuffing, fake signups — what guardrails are in place?)
6. **What promotional assets will you provide?** (Banners, email copy, landing pages, demo videos, comparison sheets)
7. **What is your affiliate activation strategy?** (Most affiliates sign up and do nothing — how will you activate them?)
8. **At what stage should you launch this?** (You need a proven conversion funnel first — affiliates amplify what already works)

## Output Template

Generate a comprehensive affiliate program document with these sections:

### 1. Program Overview & Economics
- Commission structure (percentage, duration, tiers)
- Cookie duration and attribution model (first-touch, last-touch, or multi-touch)
- Expected economics: if ARPU = $X, commission = Y%, break-even in Z months
- Program rules and terms of service summary

### 2. Commission Tiers
| Tier | Requirement | Commission | Bonus |
|---|---|---|---|
| Starter | 0-5 referrals/mo | 20% recurring | — |
| Growth | 6-20 referrals/mo | 25% recurring | Priority support |
| Elite | 21+ referrals/mo | 30% recurring | Co-marketing + dedicated AM |

### 3. Affiliate Agreement Template
- Commission terms and payment schedule
- Prohibited promotional methods (spam, trademark bidding, misleading claims)
- Termination clauses
- Intellectual property usage rights
- Disclosure requirements (FTC compliance)

### 4. Promotional Asset Kit
- Banner ads in standard sizes (728x90, 300x250, 160x600)
- Email copy templates (3 versions for different audiences)
- Social media post templates
- Comparison page content
- Product screenshots and demo video links
- Unique selling points cheat sheet

### 5. Affiliate Recruitment Strategy
- Where to find affiliates (affiliate networks, your own customers, industry blogs)
- Outreach email templates for recruiting affiliates
- Application and vetting process
- Onboarding sequence for new affiliates

### 6. Activation & Retention
- 30-day activation program (get new affiliates to make their first referral)
- Monthly newsletter for affiliates (new features, promotional ideas, top performer spotlight)
- Affiliate leaderboard and contests
- Quarterly check-ins with top performers

### 7. Fraud Prevention
- Monitoring for self-referrals and fake accounts
- IP and email pattern detection
- Minimum payout threshold ($50-100)
- Manual review for large commission payouts
- Clawback policy for chargebacks and refunds

## Recommended Tools

| Tool | Purpose | Pricing |
|---|---|---|
| **PartnerStack** | Full-featured partner/affiliate platform | Custom pricing |
| **FirstPromoter** | SaaS-focused affiliate tracking | $49+/mo |
| **Rewardful** | Stripe-integrated affiliate tracking | $49+/mo |
| **Tapfiliate** | Affiliate tracking and management | $89+/mo |
| **ReferralCandy** | E-commerce/SaaS referral programs | $47+/mo |
| **Stripe** | Payment processing for affiliate payouts | Standard fees |

## Agent Instructions

When populating this folder, the AI agent should:

1. Read `company-profile.md` to understand the product, pricing, and target customer
2. Read `11-conversion/pricing-strategy/README.md` and `12-revenue/subscriptions/README.md` to calculate commission economics
3. Design a 3-tier commission structure based on the product's ARPU
4. Write an affiliate agreement covering key legal terms
5. Create 3 email templates for recruiting different affiliate types
6. Design a 30-day affiliate activation program
7. Include a fraud prevention checklist
8. List 10-15 specific places to recruit affiliates for this niche
9. Output everything as `README.md` in this folder

## Example Output (Snippet)

```markdown
## Program Economics

- **ARPU:** $49/mo
- **Commission:** 25% recurring for 12 months
- **Per-referral value to affiliate:** $49 × 25% × 12 = $147
- **Break-even:** If CAC through other channels is $200, affiliate CAC of $147 is a win
- **Cookie duration:** 60 days

## Recruitment Email — Blogger

Subject: Partner with [Product] — earn 25% recurring commission

Hi {name},

I've been reading your blog, particularly your post on {relevant topic}. Your audience aligns perfectly with who we built [Product] for.

We just launched our affiliate program:
- **25% recurring commission** on all referrals (for 12 months)
- 60-day cookie window
- Dedicated dashboard with real-time tracking
- Pre-made content assets (banners, email copy, comparison data)

Most of our active affiliates earn $500-2,000/mo. Happy to give you a full product walkthrough if you want to try it first.

Interested?
{Founder name}
```

## Cross-References

- `15-growth/referral-programs` — affiliates are external referrers; referral programs target existing customers
- `12-revenue/subscriptions` — commission structure must align with subscription economics
- `09-acquisition/influencer-outreach` — influencers often become top-performing affiliates
- `11-conversion/pricing-strategy` — your pricing determines the commission math
