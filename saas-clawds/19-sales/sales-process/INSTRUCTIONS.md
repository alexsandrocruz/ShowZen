---
department: 19-sales
subfolder: sales-process
priority: P0
stage: post-launch
estimated_time: "2-3 days"
requires: ["11-conversion/sales-funnel", "01-idea/niche-selection"]
---

# Sales Process

## Overview

This folder is for **defining your sales methodology** — pipeline stages, qualification criteria (BANT, MEDDIC, etc.), and the steps from lead to closed-won. A clear process improves forecasting and win rates.

## Questions to Answer

1. **What's your sales motion?** (Self-serve, product-led, sales-assist, sales-led?)
2. **What are your pipeline stages?** (Lead, qualified, demo, proposal, negotiation, closed)
3. **How do you qualify leads?** (Budget, authority, need, timeline?)
4. **What's your average sales cycle?** (Days from first touch to close)
5. **What's your average deal size?** (ACV)
6. **What triggers a handoff from marketing/product to sales?**
7. **How do you forecast?** (Opportunity-weighted, commit/best/worst?)

## Output Template

Create a `README.md` in this folder with:

```markdown
# Sales Process: [Your SaaS Name]

## Sales Motion
- **Type:** [Self-serve / Product-led / Sales-assist / Sales-led]
- **Average deal size (ACV):** 
- **Average sales cycle:** days
- **Typical buyer persona:** 
- **Decision maker + champion + blocker:** 

## Pipeline Stages
| Stage | Definition | Exit Criteria | Avg. Duration |
|---|---|---|---|
| Lead | | | |
| Qualified | | | |
| Demo scheduled | | | |
| Proposal sent | | | |
| Negotiation | | | |
| Closed Won | | | |
| Closed Lost | | | |

## Qualification Criteria (BANT / MEDDIC / Custom)
| Criterion | Question | Pass/Fail |
|---|---|---|
| Budget | | |
| Authority | | |
| Need | | |
| Timeline | | |

## Lead Routing
- **Inbound lead →** 
- **Product-qualified lead (PQL) →** 
- **Handoff from marketing when:** 
- **Disqualify when:** 
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **HubSpot** | CRM, pipeline, email | Free tier / $45+ |
| **Pipedrive** | Pipeline-focused CRM | $15+/user |
| **Close** | Sales-specific CRM | $49+/user |
| **Gong / Chorus** | Call recording, insights | $1k+/mo |
| **Outreach / Salesloft** | Sales engagement | $100+/user |

## Agent Instructions

1. Read `company-profile.md` and [01-idea/niche-selection](../../01-idea/niche-selection/)
2. Read [11-conversion/sales-funnel](../../11-conversion/sales-funnel/) for funnel stages
3. Define 6–8 pipeline stages that match your sales motion
4. Choose qualification framework (BANT for SMB, MEDDIC for enterprise)
5. Document lead routing and handoff triggers
6. Cross-ref [19-sales/crm-setup](../crm-setup/) for CRM stage mapping

## Cross-References

- [11-conversion/sales-funnel](../../11-conversion/sales-funnel/) — Funnel definition
- [19-sales/crm-setup](../crm-setup/) — CRM configuration
- [12-revenue/enterprise-deals](../../12-revenue/enterprise-deals/) — Enterprise process
