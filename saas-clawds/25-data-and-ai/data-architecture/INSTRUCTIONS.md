---
department: 25-data-and-ai
subfolder: data-architecture
priority: P1
stage: post-launch
estimated_time: "2-4 weeks"
requires: ["05-development/database", "13-analytics/user-tracking"]
---

# Data Architecture

## Overview

This folder is for **data pipeline and warehouse architecture** — how data flows from product, analytics, and external sources into a central store for reporting and AI. Good data architecture enables analytics and ML.

## Questions to Answer

1. **What data sources do you have?** (Product, billing, support, marketing?)
2. **Do you need a data warehouse?** (BigQuery, Snowflake, Redshift?)
3. **What's your ETL/ELT strategy?** (Extract, load, transform — tools?)
4. **What data models do you need?** (User, event, subscription, etc.)
5. **How do you handle real-time vs batch?** (Streaming? Daily sync?)
6. **What's your data freshness requirement?** (Real-time? Hourly? Daily?)
7. **Who owns data architecture?** (Data eng? Backend?)

## Output Template

Create a `README.md` in this folder with:

```markdown
# Data Architecture: [Your SaaS Name]

## Data Sources
| Source | Data | Volume | Freshness |
|---|---|---|---|
| Product (events) | User actions, feature usage | | |
| Billing (Stripe) | Subscriptions, payments | | |
| CRM | Leads, deals, pipeline | | |
| Support | Tickets, CSAT | | |
| Marketing | Campaigns, attribution | | |

## Architecture Overview
```
[Sources] → [ETL/ELT] → [Warehouse] → [BI/AI]
```

| Layer | Tool | Purpose |
|---|---|---|
| Extraction | Fivetran, Airbyte, custom | Ingest |
| Transformation | dbt, SQL | Model |
| Warehouse | BigQuery, Snowflake, Redshift | Store |
| BI | Metabase, Looker, Mode | Report |
| AI/ML | [Python, notebook] | Models |

## Data Models (Key)
| Model | Purpose |
|---|---|
| users | User dimension |
| events | Event fact table |
| subscriptions | Billing, MRR |
| [Custom] | |

## Pipeline Cadence
| Pipeline | Frequency |
|---|---|
| Product events | Real-time / Hourly |
| Billing | Daily |
| CRM | Hourly / Daily |
| Support | Daily |
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **BigQuery** | Data warehouse | Pay per query |
| **Snowflake** | Data warehouse | $ |
| **Fivetran** | ETL connectors | $ |
| **Airbyte** | Open-source ETL | Free |
| **dbt** | Data transformation | Free / $ |
| **Segment** | Customer data platform | $ |
| **Metabase** | BI, dashboards | Free / $ |

## Agent Instructions

1. Read [05-development/database](../../05-development/database/) for source DB
2. Read [13-analytics/user-tracking](../../13-analytics/user-tracking/) for event data
3. List 5-7 data sources with volume and freshness
4. Recommend warehouse (BigQuery for GCP, Snowflake for scale)
5. Document ETL/ELT flow and tools
6. List key data models (users, events, subscriptions)
7. Cross-ref [17-legal/compliance](../../17-legal/compliance/) for data residency, PII

## Cross-References

- [13-analytics/user-tracking](../../13-analytics/user-tracking/) — Event data
- [05-development/database](../../05-development/database/) — Source systems
- [25-data-and-ai/data-governance](../data-governance/) — Data classification
