---
department: 18-finance
subfolder: billing-operations
priority: P1
stage: post-launch
estimated_time: "1-2 weeks"
requires: ["12-revenue/subscriptions", "11-conversion/checkout-optimization"]
---

# Billing Operations

## Overview

This folder is for **payment processing, invoicing, dunning, and refunds** — the day-to-day operations of collecting money. Aligns with [12-revenue/subscriptions] for the model and [11-conversion/checkout] for the flow.

## Questions to Answer

1. **Who is your payment processor?** (Stripe, Paddle, etc.)
2. **Do you offer invoicing for enterprise?** Net-30, Net-60?
3. **What's your dunning process?** (Failed payment retry sequence)
4. **What's your refund policy?** (Prorated? Full? Window?)
5. **How do you handle chargebacks?** (Dispute process, documentation)
6. **Do you collect sales tax?** (Stripe Tax, TaxJar, manual?)
7. **Who handles billing support?** (Support team, finance, dedicated?)

## Output Template

Create a `README.md` in this folder with:

```markdown
# Billing Operations: [Your SaaS Name]

## Payment Setup
| Component | Tool | Configuration |
|---|---|---|
| Payment processor | | |
| Invoicing | | |
| Sales tax | | |
| Currency | | |

## Dunning Sequence (Failed Payments)
| Day | Action | Channel |
|---|---|---|
| 0 | Payment fails | In-app + email |
| 3 | Retry #1 | |
| 7 | Retry #2 + email | |
| 14 | Retry #3 + support outreach | |
| 21 | Account suspension warning | |
| 30 | Account suspended | |

## Refund Policy
- **Eligibility:** 
- **Process:** 
- **Proration:** 
- **Approval required above:** 

## Invoice Process (Enterprise)
- **Terms:** Net-30, Net-60
- **Invoice template:** 
- **Payment methods:** ACH, wire, check
- **Collections process:** 
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Stripe** | Payments, invoicing, tax | 2.9% + $0.30 |
| **Paddle** | Merchant of record (MoR) | 5% + $0.50 |
| **Lemon Squeezy** | MoR, simpler setup | 5% + $0.50 |
| **Stripe Tax** | Sales tax automation | % of taxable |
| **BillingPlatform** | Complex billing, enterprise | $ |

## Agent Instructions

1. Read [12-revenue/subscriptions](../../12-revenue/subscriptions/) for billing model
2. Read [11-conversion/checkout-optimization](../../11-conversion/checkout-optimization/) for checkout flow
3. Document dunning sequence (recommend: 3 retries over 14-21 days)
4. Define refund policy aligned with [11-conversion/free-trial](../../11-conversion/free-trial/) if applicable
5. List invoice process for enterprise from [12-revenue/enterprise-deals](../../12-revenue/enterprise-deals/)
6. Cross-ref [14-retention/churn-reduction](../../14-retention/churn-reduction/) for involuntary churn

## Cross-References

- [12-revenue/subscriptions](../../12-revenue/subscriptions/) — Billing model
- [11-conversion/checkout-optimization](../../11-conversion/checkout-optimization/) — Checkout flow
- [14-retention/churn-reduction](../../14-retention/churn-reduction/) — Involuntary churn
