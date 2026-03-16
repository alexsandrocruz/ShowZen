---
department: 18-finance
subfolder: bookkeeping
priority: P1
stage: pre-launch
estimated_time: "1-2 weeks"
requires: ["17-legal/incorporation"]
---

# Bookkeeping

## Overview

This folder is for **accounting and bookkeeping** — chart of accounts, monthly close process, tax preparation, and financial reporting. Clean books are required for fundraising, audits, and good decision-making.

## Questions to Answer

1. **What accounting method do you use?** (Cash vs accrual)
2. **Who does your bookkeeping?** (DIY, bookkeeper, accountant, firm)
3. **What tools do you use?** (QuickBooks, Xero, Wave?)
4. **What's your monthly close process?** (Deadline, checklist, approver)
5. **When are taxes due?** (Quarterly estimates? Annual filing?)
6. **Do you need GAAP compliance?** (For fundraising, audit)
7. **How do you categorize SaaS metrics?** (Deferred revenue, etc.)

## Output Template

Create a `README.md` in this folder with:

```markdown
# Bookkeeping: [Your SaaS Name]

## Chart of Accounts (Summary)
| Category | Key Accounts | Purpose |
|---|---|---|
| Revenue | Subscription revenue, Professional services | |
| COGS | Infrastructure, support cost allocation | |
| Operating Expenses | Payroll, marketing, infra, tools | |
| Assets | Cash, A/R, prepaid | |
| Liabilities | A/P, deferred revenue, accrued | |

## Monthly Close Checklist
- [ ] Reconcile bank accounts
- [ ] Reconcile Stripe/payment processor
- [ ] Review A/R aging
- [ ] Record deferred revenue (subscriptions)
- [ ] Accrue expenses
- [ ] Review P&L and variance
- [ ] Close by [date] each month

## Tax Calendar
| Filing | Due Date | Owner |
|---|---|---|
| Quarterly estimated taxes | | |
| Annual tax return | | |
| State filings | | |
| Sales tax (if applicable) | | |

## Key Integrations
| Source | → | Destination |
|---|---|---|
| Stripe | | |
| Bank | | |
| Payroll | | |
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **QuickBooks** | Accounting, invoicing | $30+/mo |
| **Xero** | Accounting | $15+/mo |
| **Pilot / Bench** | Bookkeeping service | $500+/mo |
| **Deel / Rippling** | Payroll + compliance | $8+/employee |
| **Stripe Tax** | Sales tax automation | % of taxable |

## Agent Instructions

1. Read [17-legal/incorporation](../../17-legal/incorporation/) for entity type
2. Document chart of accounts (high level; full COA often in accounting software)
3. Define monthly close steps and owner
4. List tax obligations by jurisdiction
5. Document Stripe/banking integrations for reconciliation
6. Cross-ref [18-finance/billing-operations](../billing-operations/) for revenue recognition

## Cross-References

- [18-finance/billing-operations](../billing-operations/) — Revenue, invoicing
- [18-finance/financial-modeling](../financial-modeling/) — P&L structure
- [17-legal/incorporation](../../17-legal/incorporation/) — Entity, EIN, tax structure
