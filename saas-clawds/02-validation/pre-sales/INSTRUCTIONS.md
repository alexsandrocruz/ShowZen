---
department: 02-validation
subfolder: pre-sales
priority: P1
stage: validation
estimated_time: "1-2 weeks"
requires:
  - 01-idea/problem-discovery
  - 01-idea/niche-selection
  - 02-validation/customer-interviews
---

# Pre-Sales

## Overview

This folder is for **selling your product before it's built** — the strongest possible validation signal. When someone gives you money for something that doesn't exist yet, that's not a survey response or an email signup. That's a commitment backed by their wallet.

Pre-sales aren't just validation — they're funding. Revenue from pre-sales can fund your MVP development, reduce the need for outside investment, and give you direct customer relationships from Day 0.

There are several pre-sale approaches:
- **Lifetime deals:** Pay once, use forever (great for early traction)
- **Annual prepay with discount:** Commit to a year at a lower rate
- **Founding member pricing:** Discounted ongoing rate locked in forever
- **Deposit/reservation:** Small upfront payment, rest on delivery

The key: be transparent about timelines and what you're promising.

## Questions to Answer

1. **What exactly are you selling?** A specific feature set? Access to the full product? A service-first version?
2. **At what price?** What's the pre-sale price vs. eventual full price? What discount are you offering?
3. **What are you promising to deliver?** Be specific — which features, by when?
4. **What's the delivery timeline?** When will pre-sale customers get access?
5. **What's your refund policy?** Full refund if delayed? Pro-rated? No refunds?
6. **How many pre-sales validate the idea?** What's your target number and revenue amount?
7. **Who are you selling to?** Interview respondents? Waitlist members? Cold outreach?
8. **What happens if you can't deliver?** Full refunds? Pivot the offer?

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# Pre-Sales Plan: [Your SaaS Name]

## Pre-Sale Offer

### What You're Selling
> [Clear description of what the customer gets]

### Pricing
| Offer | Price | Regular Price | Savings | Available Spots |
|---|---|---|---|---|
| Founding Member (annual) | $[X]/yr | $[Y]/yr | [Z]% off | [N] spots |
| Lifetime Deal | $[X] one-time | — | — | [N] spots |
| Early Bird (monthly) | $[X]/mo | $[Y]/mo | [Z]% off | Unlimited |

### What's Included
- [Feature 1] — available at launch
- [Feature 2] — available at launch
- [Feature 3] — available within [timeframe] after launch
- Founding member badge / recognition
- Direct access to founders for feedback and feature requests

### What's NOT Included (Yet)
- [Feature that comes later — be transparent]
- [Integration that's on the roadmap]

### Delivery Timeline
- **Pre-sale window:** [Start date] → [End date]
- **Beta access:** [Date]
- **Full launch:** [Date]
- **Refund policy:** [Full refund before [date] / within [N] days]

## Sales Channels

| Channel | Approach | Target | Expected Conversions |
|---|---|---|---|
| Interview participants | Personal email with offer | [N] people | [N] (X%) |
| Waitlist members | Email sequence with urgency | [N] people | [N] (X%) |
| Niche communities | Authentic post + offer link | [N] reach | [N] (X%) |
| Direct outreach | Personalized DM/email | [N] people | [N] (X%) |

## Pre-Sale Email Template

**Subject:** [Your SaaS] is coming — founding member spots open

**Body:**
> Hi [Name],
>
> [Reference previous conversation or connection point.]
>
> I'm building [product] to solve [problem you discussed]. Based on our conversation, I think you'd be a perfect founding member.
>
> Founding members get:
> - [Key benefit 1]
> - [Key benefit 2]
> - [Locked-in price of $X/mo (regular will be $Y/mo)]
>
> Only [N] founding spots available. [Link]
>
> I'm planning to deliver [specific capability] by [date]. Full refund if I miss that deadline.
>
> Would love to have you as one of the first.
>
> [Founder name]

## Success Metrics

| Metric | Target | Meaning |
|---|---|---|
| Pre-sales revenue | $[X] | [Covers X months of development] |
| Number of paying customers | [N] | [Strong/moderate/weak signal] |
| Conversion rate from outreach | [X]% | [Benchmark for later sales] |
| Average deal size | $[X] | [Validates pricing model] |
| Refund rate | <[X]% | [Satisfaction proxy] |

## Results (fill after pre-sale window closes)
- **Total revenue:** $[X]
- **Paying customers:** [N]
- **Top channel:** [Source]
- **Refunds requested:** [N]
- **Decision:** [Build it / Pivot / Refund and rethink]
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Stripe** | Payment processing | 2.9% + $0.30 per transaction |
| **Gumroad** | Simple product sales page with payments | 10% per transaction |
| **Lemon Squeezy** | SaaS-focused payment platform | 5% + $0.50 per transaction |
| **Buy Me a Coffee** | Simple support/payment for solopreneurs | 5% per transaction |
| **PayPal** | Alternative payment processing | 2.9% + $0.30 |

## Agent Instructions

When populating this folder for a founder:

1. Read all completed documents in `01-idea/` and `02-validation/`
2. Design a pre-sale offer that's appropriately aggressive for the founder's stage and confidence level
3. Set pricing that's attractive enough to convert but signals real value (not too cheap)
4. Create the specific email template using language from customer interviews
5. Build a realistic sales channel plan — don't suggest channels the founder can't access
6. Calculate how many pre-sales are needed to fund initial development
7. Include a clear refund policy — ambiguity kills trust
8. Set specific targets that distinguish "validated" from "not enough signal"

## Example Output (Abbreviated)

```markdown
# Pre-Sales Plan: InvoiceBot

### Pricing
| Offer | Price | Regular | Savings | Spots |
|---|---|---|---|---|
| Founding Designer (annual) | $199/yr | $300/yr | 33% off | 50 spots |
| Lifetime Deal | $349 one-time | — | — | 25 spots |

### Success Metrics
| Metric | Target | Meaning |
|---|---|---|
| Pre-sales revenue | $5,000 | Covers 2 months of solo development |
| Paying customers | 25 | Strong signal — 25 people paid before seeing the product |
```

## Cross-References

- **Depends on:** [02-validation/customer-interviews](../customer-interviews/) — Interview contacts are your warmest leads
- **Related:** [11-conversion/pricing-strategy](../../11-conversion/pricing-strategy/) — Pre-sale pricing informs long-term pricing
- **Related:** [12-revenue/subscriptions](../../12-revenue/subscriptions/) — Pre-sale structure previews your revenue model
- **Feeds into:** [08-launch/early-adopters](../../08-launch/early-adopters/) — Pre-sale customers are your earliest adopters
