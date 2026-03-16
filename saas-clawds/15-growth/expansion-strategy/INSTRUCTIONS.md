---
department: 15-growth
subfolder: expansion-strategy
priority: P2
stage: post-product-market-fit (only expand when the core market is working)
estimated_time: 4-6 hours for strategy, ongoing execution
requires:
  - 01-idea/market-research
  - 13-analytics/cohort-analysis
  - 12-revenue/subscriptions
---

# Expansion Strategy — Growing Into New Markets, Verticals, and Segments

## Overview

This folder contains your expansion strategy — the plan for growing beyond your initial market into adjacent segments, new verticals, new geographies, and new customer tiers. Expansion is how SaaS companies unlock their next phase of growth after saturating their initial beachhead market.

Expansion should be deliberate, not opportunistic. Moving too early (before product-market fit) spreads resources thin. Moving too late means competitors capture adjacent markets first. The right time to expand is when your core market is working — strong retention, efficient unit economics, and clear demand signals from adjacent segments.

## Questions to Answer

Before planning expansion, the founder needs to answer:

1. **Which adjacent markets show the strongest demand signals?** (Inbound interest from new segments? Users hacking the product for unintended use cases? Competitor gaps in neighboring verticals?)
2. **What localization is needed?** (Language translation? Currency? Cultural adaptation? Time zones? Local compliance requirements?)
3. **Which new verticals could you serve?** (Same product, different industry? What vertical-specific features would be required? What's the TAM of each vertical?)
4. **Should you move upmarket or downmarket?** (Upmarket = larger customers, higher ACV, longer sales cycles, more enterprise features. Downmarket = smaller customers, self-serve, lower price, higher volume.)
5. **What is the international expansion sequence?** (Which countries/regions first? Usually: English-speaking markets → Western Europe → Asia-Pacific → Rest of world.)
6. **What is the expansion cost vs. opportunity?** (Engineering investment for vertical features or localization vs. the addressable market size and revenue potential.)
7. **How will you test expansion before committing?** (Landing page tests? Pilot programs? Partner-led entry? Minimum viable localization?)

## Output Template

Generate a comprehensive expansion strategy with these sections:

### 1. Expansion Opportunity Matrix

| Opportunity | Type | TAM | Effort | Timeline | Priority |
|---|---|---|---|---|---|
| [Vertical A] | New vertical | $XM | Medium | Q3 | P1 |
| [Vertical B] | New vertical | $XM | High | Q4 | P2 |
| [Region A] | International | $XM | Medium | Q3 | P1 |
| [Region B] | International | $XM | High | Q1 next year | P2 |
| Enterprise segment | Upmarket | $XM | High | Q4 | P1 |
| SMB segment | Downmarket | $XM | Low | Q2 | P1 |

### 2. Market Entry Plan Template

For each expansion opportunity:

| Element | Detail |
|---|---|
| **Target market** | [Description, size, characteristics] |
| **Demand signals** | [What evidence suggests this market wants your product?] |
| **Competitive landscape** | [Who serves this market today? What are their weaknesses?] |
| **Required product changes** | [Features, integrations, compliance, localization] |
| **Go-to-market approach** | [Self-serve? Partner-led? Sales-led? Content-led?] |
| **Success criteria** | [First 10 customers? $X MRR? Retention parity with core?] |
| **Timeline** | [Test → Pilot → Launch → Scale] |
| **Investment required** | [Engineering hours, marketing budget, partnerships] |
| **Risk factors** | [What could go wrong? Mitigation strategies] |

### 3. Vertical Expansion Framework

| Vertical | Pain Point We Solve | Required Features | Integration Needs | Pricing Adjustment | Go-to-Market |
|---|---|---|---|---|---|
| [Vertical 1] | | | | | |
| [Vertical 2] | | | | | |
| [Vertical 3] | | | | | |

### 4. Upmarket vs. Downmarket Analysis

| Dimension | Downmarket (SMB/self-serve) | Upmarket (Enterprise) |
|---|---|---|
| Customer profile | Small teams, price-sensitive | Large orgs, feature-demanding |
| ACV | $50-500/yr | $10K-100K+/yr |
| Sales motion | Self-serve, PLG | Sales-assisted, demo-led |
| Product requirements | Simplicity, templates, quick setup | SSO, SCIM, audit logs, SLAs |
| Support requirements | Self-serve + email | Dedicated CSM, phone support |
| CAC | Low ($50-200) | High ($5K-20K) |
| Churn characteristics | Higher logo churn, lower revenue churn | Lower logo churn, higher impact |
| Timeline to revenue | Hours to days | Weeks to months |

### 5. Localization Checklist

- [ ] UI translated into target language(s)
- [ ] Marketing site localized (not just translated — culturally adapted)
- [ ] Local currency pricing configured
- [ ] Local payment methods supported (e.g., iDEAL in Netherlands, PIX in Brazil)
- [ ] Help center translated for top articles
- [ ] Legal compliance (GDPR, local data residency, tax requirements)
- [ ] Local support hours or async support in language
- [ ] SEO in target language (localized content, hreflang tags)

### 6. Expansion Validation Plan

| Test | Purpose | Duration | Success Metric |
|---|---|---|---|
| Landing page in new vertical/region | Gauge demand | 4 weeks | Signup rate, waitlist conversions |
| Pilot program (10 customers) | Validate product fit | 8 weeks | Activation rate, retention, NPS |
| Partner-led entry | Leverage local distribution | 12 weeks | Partner-sourced signups and conversions |
| Localized paid ads | Test paid acquisition in new market | 4 weeks | CAC comparison to core market |

## Recommended Tools

| Tool | Purpose | Pricing |
|---|---|---|
| **Lokalise** | Translation management platform | $120+/mo |
| **Phrase** | Localization and translation automation | $25+/mo |
| **Stripe** | International payments and multi-currency | Transaction fees |
| **Paddle** | Merchant of Record for international sales + tax | Transaction fees |
| **Google Market Finder** | International market sizing | Free |
| **SimilarWeb** | Market and competitive intelligence | Free tier, paid plans |

## Agent Instructions

When populating this folder, the AI agent should:

1. Read `company-profile.md` to understand the current market, customer base, and growth stage
2. Read `01-idea/market-research/README.md` for market sizing and competitive landscape
3. Read `13-analytics/cohort-analysis/README.md` for retention data by segment
4. Read `12-revenue/subscriptions/README.md` for current pricing model
5. Identify 3-5 expansion opportunities (vertical, geographic, segment)
6. Score each opportunity on TAM, effort, and alignment
7. Create a market entry plan for the top 1-2 opportunities
8. Build the upmarket vs. downmarket analysis specific to the product
9. Create the localization checklist if international expansion is relevant
10. Output everything as `README.md` in this folder

## Example Output (Snippet)

```markdown
## Expansion Priority Matrix

| Opportunity | Score (TAM × Fit × Effort) | Decision |
|---|---|---|
| Healthcare vertical | 8.5/10 | ✅ Start pilot Q3 — 3 inbound requests, clear pain point |
| UK/EU expansion | 7.2/10 | ✅ Begin localization Q3 — English-first, low effort |
| Enterprise (500+ seats) | 6.8/10 | 🔄 Defer to Q1 — need SSO + audit logs first |
| Education vertical | 5.0/10 | ⏸️ Park — low willingness to pay, high support burden |
| APAC expansion | 4.5/10 | ⏸️ Park — wait until EU is established |

**Next Step:** Launch healthcare pilot with 10 design partners. Required: HIPAA compliance assessment, 2 healthcare-specific templates, integration with [specific tool].
```

## Cross-References

- `16-scaling/global-expansion` — international expansion logistics and operations
- `01-idea/market-research` — original market research informs expansion targets
- `13-analytics/cohort-analysis` — cohort data reveals which segments have the best retention
- `12-revenue/enterprise-deals` — enterprise expansion requires enterprise deal infrastructure
- `11-conversion/pricing-strategy` — new markets may require pricing adjustments
