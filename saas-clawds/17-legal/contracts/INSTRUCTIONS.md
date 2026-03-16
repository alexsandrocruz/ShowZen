---
department: 17-legal
subfolder: contracts
priority: P1
stage: post-launch
estimated_time: "2-4 weeks"
requires: ["17-legal/terms-and-privacy", "12-revenue/subscriptions"]
---

# Contracts

## Overview

This folder is for **standardized contract templates** — customer agreements, vendor contracts, NDAs, SLAs, and SOWs. Having reusable, lawyer-reviewed templates speeds up sales, reduces risk, and keeps legal costs predictable.

## Questions to Answer

1. **What contracts do you need for customers?** (MSA, order form, SOW?)
2. **Do you have standard SLAs?** (uptime, support response times)
3. **What vendor contracts do you sign?** (cloud, SaaS tools, contractors)
4. **Do you use NDAs for prospect/sales conversations?**
5. **Who approves contract deviations?** (Founder only? Board above $X?)
6. **Where do you store signed contracts?** (DocuSign, Notion, Drive?)
7. **Do you need custom contracts for enterprise?** (negotiated terms)

## Output Template

Create a `README.md` in this folder with:

```markdown
# Contracts: [Your SaaS Name]

## Customer Contracts
| Contract Type | Purpose | Template Location | Approval Required |
|---|---|---|---|
| Master Service Agreement (MSA) | Standard terms for all customers | | |
| Order Form | Specific plan, pricing, term | | |
| Statement of Work (SOW) | Custom projects, implementations | | |
| Data Processing Agreement (DPA) | GDPR, data handling | | |
| SLA | Uptime, support commitments | | |

## Vendor Contracts
| Vendor Type | Key Terms to Negotiate | Owner |
|---|---|---|
| Cloud/Hosting | Liability caps, data ownership | |
| SaaS Tools | Data export, security, auto-renewal | |
| Contractors | IP assignment, confidentiality | |

## NDA Policy
- **When to use:** 
- **Mutual vs one-way:** 
- **Template:** 

## Approval Matrix
| Contract Value/Type | Approver |
|---|---|
| Standard MSA | |
| Custom terms | |
| >$X deviation | |
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **PandaDoc** | Contract creation, e-sign, tracking | $19+/user/mo |
| **DocuSign** | E-signature | $25+/mo |
| **Ironclad** | Contract lifecycle management | Enterprise |
| **Legal counsel** | Template review, custom terms | $300-500/hr |

## Agent Instructions

1. Read [12-revenue/subscriptions](../../12-revenue/subscriptions/) for billing/pricing structure
2. List customer contract types based on sales motion (self-serve vs sales-led)
3. Document SLA commitments from [06-infrastructure/monitoring](../../06-infrastructure/monitoring/)
4. List key vendors (Stripe, AWS, analytics, etc.) for vendor contract tracking
5. Cross-ref [19-sales/proposals-and-contracts](../../19-sales/proposals-and-contracts/) for sales contract flow

## Cross-References

- [19-sales/proposals-and-contracts](../../19-sales/proposals-and-contracts/) — Sales proposals and SOWs
- [12-revenue/enterprise-deals](../../12-revenue/enterprise-deals/) — Enterprise contract negotiation
- [17-legal/terms-and-privacy](../terms-and-privacy/) — Base legal terms
