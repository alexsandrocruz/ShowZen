---
department: 11-conversion
subfolder: pricing-strategy
priority: P0
stage: pre-launch through ongoing (revisit quarterly)
estimated_time: 4-6 hours initial design, quarterly reviews
requires:
  - 02-validation/pre-sales
  - 01-idea/competitor-analysis
---

# Pricing Strategy — The Strongest Lever for Revenue

## Overview

This folder contains your pricing strategy — arguably the single most important business decision you'll make. Pricing is the strongest lever for revenue: a 1% improvement in pricing yields an 11% improvement in profit (more than acquisition or retention improvements). Yet most founders set pricing once and forget it, leaving enormous value on the table.

Great pricing isn't about finding the "right number." It's about aligning your pricing structure with the value customers receive, making it easy to understand, and creating a natural path from small to large spend as customers grow.

**This is a CRITICAL folder.** Get pricing wrong, and everything downstream suffers. Get it right, and you have a sustainable business.

## Questions to Answer

Before designing the pricing strategy, the founder needs to answer:

1. **What is your value metric?** (The unit of value customers pay for: per user, per project, per GB, per transaction, per feature set. This is the most important pricing decision.)
2. **How will you use price anchoring?** (Show a higher-priced plan first? Highlight the "most popular" plan? Decoy pricing?)
3. **How many tiers will you offer?** (Rule of thumb: 3-4 tiers. 2 feels limiting, 5+ creates decision paralysis.)
4. **Will you offer an annual discount?** (Typical: 15-25% discount for annual commitment)
5. **What do competitors charge?** (You don't need to match them, but you need to understand the reference point)
6. **Have you done willingness-to-pay research?** (Even 10 customer conversations about pricing can be transformative)
7. **What is your positioning: budget, mid-market, or premium?** (This shapes every pricing decision)
8. **Will you show pricing publicly?** (Transparent pricing builds trust for self-serve; hidden pricing works for enterprise)

## Output Template

Generate a comprehensive pricing strategy document with these sections:

### 1. Pricing Page Design
- Number of tiers and their names
- Price points for each tier (monthly and annual)
- Feature comparison table
- "Most popular" or recommended tier highlight
- CTA for each tier (Start free trial, Buy now, Contact sales)
- FAQ section addressing common objections

### 2. Tier Comparison Matrix
| Feature | Free / Starter | Growth | Pro | Enterprise |
|---|---|---|---|---|
| Price (monthly) | $0 | $29/mo | $79/mo | Custom |
| Price (annual) | $0 | $24/mo | $66/mo | Custom |
| Value metric limit | 3 users | 10 users | 50 users | Unlimited |
| Core features | Basic | Full | Full + advanced | Everything + custom |
| Support | Community | Email | Priority | Dedicated CSM |
| Integrations | 1 | All | All + API | All + custom |

### 3. Value Metric Analysis
- What unit of value aligns price with customer success
- Why this metric works (scales with value received)
- How to implement metering for this metric
- Comparison: per-user vs. per-project vs. usage-based vs. flat-rate

### 4. Pricing Experiment Plan
| Experiment | Hypothesis | Metric | Duration |
|---|---|---|---|
| Raise Pro tier by 20% | Price is below WTP for target segment | Revenue per signup, conversion rate | 4 weeks |
| Add annual plan toggle | Annual option increases ARPU | % annual adoption, total revenue | 6 weeks |
| Move feature X to higher tier | Feature X is upgrade trigger | Free-to-paid conversion | 4 weeks |
| Test 3-tier vs 4-tier | Fewer options = faster decisions | Time to purchase, conversion rate | 4 weeks |

### 5. Price Sensitivity Analysis
- Van Westendorp price sensitivity model (if research data available)
- Competitor price benchmarking
- Customer segment-based pricing analysis
- Pricing power indicators (churn rate, feature requests, competitor switching)

### 6. Pricing Psychology
- **Anchoring:** show the highest-priced plan first or use a crossed-out price
- **Charm pricing:** use $29 vs $30 (reduces perceived cost)
- **Decoy effect:** include a tier that makes the target tier look like the best deal
- **Social proof:** "Most Popular" badge on the tier you want most people to choose
- **Loss aversion:** frame downgrades as losing features, not saving money

### 7. Discounting Policy
- When to offer discounts (annual, startup programs, nonprofits, education)
- When NOT to offer discounts (never discount to close a deal — it sets a precedent)
- Coupon strategy and tracking
- Competitive displacement offers

## Recommended Tools

| Tool | Purpose | Pricing |
|---|---|---|
| **Stripe** | Payment processing and subscription billing | Transaction fees |
| **Paddle** | All-in-one payments, tax, and subscriptions | Transaction fees |
| **ProfitWell** | Subscription analytics and pricing optimization | Free–custom |
| **Price Intelligently** | Willingness-to-pay research and pricing strategy | Custom pricing |
| **Baremetrics** | Revenue analytics and benchmarks | $50+/mo |
| **Stigg** | Pricing and packaging experimentation | $60+/mo |

## Agent Instructions

When populating this folder, the AI agent should:

1. Read `company-profile.md` to understand the product, target customer, and revenue model
2. Read `01-idea/competitor-analysis/README.md` for competitor pricing benchmarks
3. Identify the optimal value metric based on the product's core value delivery
4. Design 3-4 pricing tiers with specific price points and feature allocation
5. Apply pricing psychology principles (anchoring, decoy, social proof)
6. Create a pricing experiment plan with 3-4 experiments to run in the first quarter
7. Define the discounting policy (when yes, when no)
8. Format the tier comparison as a pricing page-ready matrix
9. Output everything as `README.md` in this folder

## Example Output (Snippet)

```markdown
## Pricing Tiers — [Async Standup Tool]

### Value Metric: Per active user per month
**Rationale:** Standups are more valuable as more team members participate. Per-user pricing scales naturally with the value teams receive.

| | Starter | Team | Business | Enterprise |
|---|---|---|---|---|
| **Monthly** | Free | $8/user/mo | $14/user/mo | Custom |
| **Annual** | Free | $6/user/mo | $11/user/mo | Custom |
| **Users** | Up to 5 | Up to 25 | Up to 100 | Unlimited |
| **Standups** | 1 | Unlimited | Unlimited | Unlimited |
| **Integrations** | Slack | All | All + API | All + custom |
| **Analytics** | Basic | Standard | Advanced | Custom |
| **Support** | Community | Email | Priority | Dedicated |
| **CTA** | Get Started | Start Trial | Start Trial | Contact Us |

**Most Popular:** Team plan (highlighted on pricing page)
**Decoy:** Business plan makes Team plan look like great value for small teams
```

## Cross-References

- `11-conversion/freemium-model` — if you have a free tier, pricing and freemium must be designed together
- `12-revenue/subscriptions` — pricing tiers feed directly into subscription billing
- `12-revenue/annual-plans` — annual discount strategy is part of pricing
- `12-revenue/enterprise-deals` — enterprise pricing is typically custom; define the starting point here
- `01-idea/competitor-analysis` — competitor pricing sets the market reference point
