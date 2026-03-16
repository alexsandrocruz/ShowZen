---
department: 19-sales
subfolder: crm-setup
priority: P1
stage: post-launch
estimated_time: "2-3 days"
requires: ["19-sales/sales-process", "09-acquisition/cold-email"]
---

# CRM Setup

## Overview

This folder is for **CRM configuration** — pipeline stages, custom fields, lead sources, reporting, and integrations. A well-configured CRM is the source of truth for pipeline and forecasting.

## Questions to Answer

1. **What CRM are you using?** (HubSpot, Pipedrive, Salesforce, etc.)
2. **What are your pipeline stages?** (Match [sales-process])
3. **What custom fields do you need?** (Deal size, source, vertical, etc.)
4. **How do you track lead source?** (UTM, form, manual?)
5. **What reports do you need?** (Pipeline by stage, win rate, cycle time)
6. **What integrations?** (Email, calendar, Slack, enrichment)
7. **Who has access?** (Roles, visibility)

## Output Template

Create a `README.md` in this folder with:

```markdown
# CRM Setup: [Your SaaS Name]

## CRM Tool
- **Platform:** 
- **Plan:** 
- **Primary users:** 

## Pipeline Configuration
| Stage | Probability | Required Fields |
|---|---|---|
| Lead | 0% | |
| Qualified | 10% | |
| Demo scheduled | 25% | |
| Proposal sent | 50% | |
| Negotiation | 75% | |
| Closed Won | 100% | |
| Closed Lost | 0% | |

## Custom Fields (Deals)
| Field | Type | Purpose |
|---|---|---|
| ACV | Currency | Deal size |
| Lead source | Picklist | Attribution |
| Vertical | Picklist | Segregation |
| Champion | Contact | Key contact |

## Lead Source Mapping
| Source | CRM Value | UTM/Form |
|---|---|---|
| Website | | |
| Product Hunt | | |
| Cold email | | |
| Referral | | |
| Partner | | |

## Key Reports
| Report | Purpose | Frequency |
|---|---|---|
| Pipeline by stage | Forecasting | Weekly |
| Win/loss rate | Process improvement | Monthly |
| Sales cycle length | Efficiency | Monthly |
| Lead source performance | Channel attribution | Monthly |
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **HubSpot** | All-in-one CRM + marketing | Free tier / $45+ |
| **Pipedrive** | Sales-focused CRM | $15+/user |
| **Close** | Inside sales CRM | $49+/user |
| **Salesforce** | Enterprise CRM | $25+/user |
| **Clay** | Enrichment, lead data | $149+/mo |

## Agent Instructions

1. Read [19-sales/sales-process](../sales-process/) for pipeline stages
2. Map stages to CRM with win probability
3. Define custom fields for deals and contacts
4. Document lead source values for attribution
5. List 4–5 key reports for pipeline and forecasting
6. Cross-ref [09-acquisition/cold-email](../../09-acquisition/cold-email/) for outbound tracking

## Cross-References

- [19-sales/sales-process](../sales-process/) — Pipeline stages
- [09-acquisition](../../09-acquisition/) — Lead sources
- [13-analytics/funnel-analysis](../../13-analytics/funnel-analysis/) — Conversion metrics
