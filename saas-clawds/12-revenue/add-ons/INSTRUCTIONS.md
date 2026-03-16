---
department: 12-revenue
subfolder: add-ons
priority: P1
stage: post-launch (after core product and pricing are established)
estimated_time: 2-3 hours strategy, varies per add-on build
requires:
  - 12-revenue/subscriptions
  - 11-conversion/pricing-strategy
---

# Add-Ons — Additional Paid Features Beyond Core Subscription

## Overview

This folder contains your add-on strategy — the plan for creating additional paid features, services, or capabilities that customers can purchase on top of their base subscription. Add-ons are a powerful revenue lever because they increase ARPU without forcing customers to upgrade to a more expensive plan.

Think of add-ons as modular value: the core subscription covers the essentials, and add-ons let customers tailor their plan to their specific needs. This works especially well when some features are valuable to a subset of customers but not all — making them add-ons avoids bloating the core product while still capturing the revenue.

## Questions to Answer

Before designing the add-on strategy, the founder needs to answer:

1. **What features or services could be sold as add-ons?** (Advanced features, extra usage, premium support, professional services, custom integrations)
2. **How should add-ons be priced?** (Flat monthly fee, per-usage, one-time purchase, percentage of base plan)
3. **Do add-ons make sense vs. just including them in a higher tier?** (If >30% of customers would want it, maybe it belongs in a plan. If <30%, it's a good add-on candidate.)
4. **What is the implementation complexity?** (Can you build this in a week or does it require months of engineering?)
5. **Are there bundling opportunities?** (Buy 3 add-ons, get 15% off — or create "power packs")
6. **How do add-ons interact with plan tiers?** (Available to all tiers? Only Pro and above? Different pricing by tier?)

## Output Template

Generate a comprehensive add-on strategy with these sections:

### 1. Add-On Product Matrix
| Add-On | Description | Target Segment | Pricing | Available On |
|---|---|---|---|---|
| Priority Support | Faster response times, dedicated channel | All customers who need help fast | $29/mo | All plans |
| Custom Branding | Remove product branding, add company logo | Agencies, white-label customers | $19/mo | Pro+ |
| API Access | Full REST API for custom integrations | Developer-heavy teams | $49/mo | Pro+ |
| Additional Storage | Extra 50GB of file storage | Media-heavy teams | $9/mo per 50GB | All plans |
| SSO / SAML | Enterprise single sign-on | Security-conscious orgs | $99/mo | Business+ |
| Data Export | Scheduled CSV/JSON data exports | Analytics teams | $19/mo | Pro+ |

### 2. Add-On vs. Plan Feature Decision Framework
| Criteria | Include in Plan Tier | Sell as Add-On |
|---|---|---|
| % of customers who want it | >30% | <30% |
| Drives plan upgrade value | Yes | No — too niche |
| Marginal cost to deliver | Low | Variable or high |
| Competitive differentiator | Yes — everyone expects it | Nice-to-have |
| Implementation complexity | Already built | Modular, can build separately |

### 3. Pricing Strategy Per Add-On
For each add-on:
- Cost to deliver (infrastructure, support, maintenance)
- Value to customer (willingness to pay)
- Competitive reference (what do competitors charge?)
- Recommended price point with rationale
- Pricing model (flat, per-unit, tiered)

### 4. Add-On Launch Plan
- **Pre-launch:** Build, test, create documentation and marketing assets
- **Launch:** Announce via email, in-app notification, changelog, social
- **Targeting:** Identify existing customers most likely to purchase (usage signals)
- **Measurement:** Track adoption rate, revenue per add-on, impact on churn

### 5. Bundling Strategy
- **Power Pack:** Most popular add-ons bundled at 15-20% discount
- **Department bundles:** Group add-ons by use case (e.g., "Security Bundle" = SSO + audit logs + data export)
- **Seasonal promotions:** Limited-time bundle offers to boost adoption

### 6. Technical Implementation
- Feature flagging system for add-on entitlements
- Billing integration (prorated add-on charges)
- Add-on management UI in account settings
- Provisioning/deprovisioning automation

## Recommended Tools

| Tool | Purpose | Pricing |
|---|---|---|
| **Stripe** | Flexible billing for add-on charges | Transaction fees |
| **Paddle** | Add-on and subscription billing | Transaction fees |
| **Stigg** | Entitlements and feature management | $60+/mo |
| **LaunchDarkly** | Feature flags for add-on gating | $10+/mo |
| **Lago** | Usage-based billing for metered add-ons | Free (OSS) |

## Agent Instructions

When populating this folder, the AI agent should:

1. Read `company-profile.md` to understand the product feature set and target customers
2. Read `11-conversion/pricing-strategy/README.md` for existing tier structure
3. Read `12-revenue/subscriptions/README.md` for billing mechanics
4. Identify 4-6 potential add-ons based on the product's feature set
5. Apply the decision framework: which features are add-ons vs. plan features
6. Price each add-on with cost, value, and competitive analysis
7. Create a launch plan for the first add-on
8. Design a bundling strategy if 3+ add-ons exist
9. Output everything as `README.md` in this folder

## Example Output (Snippet)

```markdown
## Add-On Matrix — [Async Standup Tool]

| Add-On | Price | Segment | Rationale |
|---|---|---|---|
| **Custom Branding** | $19/mo | Agencies, consultants | <20% of users want this, high value for those who do |
| **Advanced Analytics** | $29/mo | Team leads, managers | Deep insights into team health and participation trends |
| **Priority Support** | $29/mo | All segments | 4-hour response SLA vs. 24-hour standard |
| **API Access** | $49/mo | Dev teams | Integrate standup data into custom workflows |
| **Extra Integrations Pack** | $19/mo | Power users | Connect 10+ additional tools beyond standard |

## Bundle: "Power User Pack"
- Custom Branding + Advanced Analytics + API Access
- Individual total: $97/mo
- Bundle price: $79/mo (19% savings)
- Target: Pro plan customers with 10+ team members
```

## Cross-References

- `12-revenue/upsells` — upsells move customers to higher plans; add-ons expand within a plan
- `12-revenue/subscriptions` — add-ons are billed as part of the subscription
- `11-conversion/pricing-strategy` — add-on pricing must be coherent with plan pricing
- `03-planning/feature-prioritization` — add-on features should go through the prioritization process
- `05-development/backend` — add-on entitlements require backend feature flagging
