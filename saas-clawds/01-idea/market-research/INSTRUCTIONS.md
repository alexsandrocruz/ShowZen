---
department: 01-idea
subfolder: market-research
priority: P0
stage: idea
estimated_time: "3-5 days"
requires:
  - 01-idea/problem-discovery
---

# Market Research

## Overview

This folder is for sizing the market and understanding the dynamics of the space you're entering. Market research answers the investor question "How big is this?" — but more importantly, it tells **you** whether this market can sustain a real business.

You're not just looking for a big TAM number to put in a pitch deck. You need to understand growth trajectories, buyer behavior, regulatory headwinds, and where the money actually flows. A $50B market dominated by entrenched incumbents with zero switching costs is worse than a $500M market growing 40% YoY with fragmented competitors.

## Questions to Answer

1. **What is your Total Addressable Market (TAM)?** The total revenue opportunity if you captured 100% of the market.
2. **What is your Serviceable Addressable Market (SAM)?** The segment you can realistically reach with your product and go-to-market.
3. **What is your Serviceable Obtainable Market (SOM)?** The realistic revenue you can capture in the first 1-3 years.
4. **What is the market growth rate?** Is this market expanding, flat, or contracting? What's driving the trend?
5. **What industry trends are shaping this space?** New regulations, technology shifts, demographic changes, remote work, AI adoption, etc.
6. **Who are the major players and how is the market structured?** Fragmented (many small players) or consolidated (few large players)?
7. **What does the buying process look like?** Who makes the purchase decision? What's the sales cycle? Budget source?
8. **Are there regulatory or compliance factors?** GDPR, HIPAA, SOC 2, industry-specific requirements?

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# Market Research: [Your SaaS Name]

## Market Sizing

### TAM (Total Addressable Market)
- **Size:** $[X]B
- **How calculated:** [Bottom-up or top-down methodology]
- **Source(s):** [Statista, Gartner, etc.]

### SAM (Serviceable Addressable Market)
- **Size:** $[X]M
- **Segment definition:** [Geographic, vertical, company size filters applied]

### SOM (Serviceable Obtainable Market)
- **Year 1 target:** $[X]K - $[X]M
- **Assumptions:** [Conversion rates, pricing, channels]

## Market Dynamics

### Growth Trajectory
- **Current market size:** $[X]
- **Projected size (5 years):** $[X]
- **CAGR:** [X]%
- **Growth drivers:** [List 3-5 factors]

### Industry Trends
| Trend | Impact on Your SaaS | Timeframe |
|---|---|---|
| | | |

### Market Structure
- **Fragmentation level:** [Highly fragmented / Moderately consolidated / Dominated by few]
- **Top players and estimated market share:**
  | Player | Est. Market Share | Annual Revenue |
  |---|---|---|
  | | | |

### Buyer Behavior
- **Primary buyer persona:** [Title, budget authority]
- **Average sales cycle:** [Days/weeks/months]
- **Key purchase criteria:** [Price, features, integrations, support, brand]
- **Budget source:** [IT budget, department budget, personal expense]

### Regulatory Landscape
- **Relevant regulations:** [GDPR, SOC 2, HIPAA, etc.]
- **Compliance requirements:** [What you'll need to meet]
- **Impact on product decisions:** [What this means for your build]

## Key Insights
1. [Insight that directly impacts your strategy]
2. [Insight about timing or market window]
3. [Insight about underserved segments]

## Sources & References
| Source | URL | Date Accessed | Key Data Point |
|---|---|---|---|
| | | | |
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Statista** | Market sizing data and industry reports | Free (limited) / $199/mo |
| **Crunchbase** | Funding data, competitor revenue estimates | Free / $29/mo |
| **Google Trends** | Search interest trends over time | Free |
| **SimilarWeb** | Website traffic data for competitors | Free (limited) / $199/mo |
| **IBISWorld** | Industry reports with market sizing | $1,500+/year |
| **CB Insights** | Market maps, trend analysis, funding data | Enterprise pricing |
| **Census Bureau / BLS** | Business demographic data (US) | Free |

## Agent Instructions

When populating this folder for a founder:

1. Read `company-profile.md` and `01-idea/problem-discovery/README.md` for context
2. Calculate TAM/SAM/SOM using both top-down and bottom-up approaches where possible
3. Use the founder's target customer to define SAM boundaries (geography, industry, company size)
4. Research market growth using available data — cite specific sources and dates
5. Identify 3-5 industry trends that create tailwinds or headwinds for the product
6. Map the market structure (fragmented vs. consolidated) with named players
7. Document the buying process for the target customer segment
8. Note any regulatory requirements that will affect product or go-to-market

## Example Output (Abbreviated)

```markdown
# Market Research: InvoiceBot

## Market Sizing
### TAM — $11.2B (global invoicing/billing software market, Statista 2025)
### SAM — $680M (freelancers + micro-agencies in US/UK/Canada using SaaS billing)
### SOM — $1.2M Year 1 (3,200 users × $31/mo average, 2% conversion from freemium)

## Growth Trajectory
- CAGR: 14.3% (2024-2029)
- Growth drivers: Freelance economy growing 17% YoY, IR35 regulations increasing compliance needs
```

## Cross-References

- **Depends on:** [01-idea/problem-discovery](../problem-discovery/) — Problem context informs market boundaries
- **Feeds into:** [01-idea/niche-selection](../niche-selection/) — Market data helps pick the right niche
- **Related:** [01-idea/competitor-analysis](../competitor-analysis/) — Competitors validate market size
- **Related:** [12-revenue/subscriptions](../../12-revenue/subscriptions/) — Market data informs pricing
