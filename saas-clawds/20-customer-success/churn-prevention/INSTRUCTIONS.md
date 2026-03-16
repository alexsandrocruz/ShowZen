---
department: 20-customer-success
subfolder: churn-prevention
priority: P0
stage: post-launch
estimated_time: "2-3 days"
requires: ["20-customer-success/health-scoring", "14-retention/churn-reduction"]
---

# Churn Prevention

## Overview

This folder is for **at-risk intervention and save plays** — what to do when a customer is likely to churn. Distinct from [14-retention/churn-reduction] (broader strategy), this is the tactical playbook: who does what, when, and what offers to make.

## Questions to Answer

1. **What triggers an at-risk alert?** (Health score, support ticket, cancellation request?)
2. **Who responds to at-risk customers?** (CSM, support, founder?)
3. **What's your save offer playbook?** (Discount? Pause? Downgrade? Different tier?)
4. **What's the escalation path?** (CSM → Manager → Founder/Exec?)
5. **How do you handle cancellation requests?** (Save flow, exit survey?)
6. **What's your win-back strategy?** (Offboarding email, win-back offer?)
7. **How do you document win/loss reasons?** (For product and sales improvement)

## Output Template

Create a `README.md` in this folder with:

```markdown
# Churn Prevention: [Your SaaS Name]

## At-Risk Triggers
| Trigger | Threshold | Owner | Response Time |
|---|---|---|---|
| Health score < 50 | | CS | 24h |
| Cancellation request | Any | CS/Support | Same day |
| Failed payment | 2nd failure | Billing/CS | 48h |
| Support escalation | Unresolved > 7 days | CS | Immediate |
| Champion left | CRM update | CS | 1 week |

## Save Play Sequence
| Step | Action | Offer/Message | Approval |
|---|---|---|---|
| 1 | Outreach (email/call) | "We noticed [X]. How can we help?" | CS |
| 2 | Discount/pause offer | 1–3 month discount or pause | CS Manager |
| 3 | Downgrade option | Move to lower tier | CS |
| 4 | Executive escalation | Founder/exec call | CS Manager |
| 5 | Offboard | Exit survey, final invoice | CS |

## Save Offer Guidelines
| Offer Type | When | Approval |
|---|---|---|
| 10-20% discount (3 mo) | First save attempt | CS Manager |
| Pause subscription | Temporary need | CS |
| Downgrade | Can't afford current tier | CS |
| Custom terms | Enterprise, strategic | Founder |

## Cancellation Flow
1. Cancel button → Save flow (挽留)
2. If they proceed → Exit survey (why leaving?)
3. Offboarding email (data export, final date)
4. Win-back email (30–60 days later)
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **ChurnZero / Vitally** | At-risk triggers, save playbooks | $ |
| **ProfitWell Retain** | Cancellation save flow | $ |
| **Paddle / Stripe** | Pause, downgrade, billing | % |
| **Delighted / SurveyMonkey** | Exit survey | $ |

## Agent Instructions

1. Read [20-customer-success/health-scoring](../health-scoring/) for risk signals
2. Read [14-retention/churn-reduction](../../14-retention/churn-reduction/) for broad strategy
3. Define 5–7 at-risk triggers with owners and response times
4. Create 5-step save play sequence
5. Document save offer guidelines (discount, pause, downgrade)
6. Define cancellation flow with save step and exit survey
7. Cross-ref [14-retention/email-automation](../../14-retention/email-automation/) for win-back sequence

## Cross-References

- [14-retention/churn-reduction](../../14-retention/churn-reduction/) — Churn strategy
- [20-customer-success/health-scoring](../health-scoring/) — Risk signals
- [18-finance/billing-operations](../../18-finance/billing-operations/) — Failed payment handling
