---
department: 10-distribution
subfolder: saas-marketplaces
priority: P1
stage: post-launch (after core product is stable)
estimated_time: 4-8 hours per marketplace listing, varies widely
requires:
  - 05-development/integrations
  - 08-launch/public-release
---

# SaaS Marketplaces — App Stores & Ecosystem Listings

## Overview

This folder contains your SaaS marketplace strategy — the plan for listing your product in app stores and marketplace ecosystems. Unlike directories (which are just listings), marketplaces involve deeper integration with a platform's ecosystem. Getting listed in the right marketplace can become your single largest acquisition channel.

Salesforce AppExchange, HubSpot Marketplace, Shopify App Store, Slack App Directory — each of these has millions of users actively searching for tools. If your product fits one of these ecosystems, this is where you should invest heavily.

## Questions to Answer

Before generating the marketplace strategy, the founder needs to answer:

1. **Which platform ecosystems are your customers already using?** (Salesforce, HubSpot, Shopify, Slack, Microsoft Teams, Notion, Zapier, etc.)
2. **What integration depth is required for each marketplace?** (API integration, OAuth, embedded UI, webhooks — requirements vary dramatically)
3. **What is the revenue share for each marketplace?** (Shopify takes 0-20%, Salesforce takes 15%, Apple takes 30% — this affects your economics)
4. **What are the listing/review requirements?** (Some marketplaces have strict review processes that take weeks)
5. **What support requirements does each marketplace impose?** (SLAs, response times, documentation standards)
6. **What is your estimated traffic from each marketplace?** (Research category traffic before investing engineering effort)
7. **Do you have the engineering capacity to build and maintain these integrations?** (Each marketplace integration has ongoing maintenance costs)

## Output Template

Generate a comprehensive marketplace strategy with these sections:

### 1. Marketplace Evaluation Matrix
| Marketplace | Audience Size | Category Fit | Revenue Share | Integration Effort | Expected ROI | Priority |
|---|---|---|---|---|---|---|
| Zapier | 6M+ users | — | Free to list | Low (API) | High | P0 |
| Slack App Directory | 30M+ DAU | Communication | Free | Medium | Medium-High | P1 |
| HubSpot Marketplace | 200K+ companies | CRM/Marketing | 20% (first year) | Medium-High | High | P1 |
| Shopify App Store | 2M+ merchants | E-commerce | 0-20% | High | Varies | P1 |
| Salesforce AppExchange | 150K+ companies | Enterprise | 15% | High | High | P2 |
| Microsoft AppSource | 1B+ users | Enterprise | 3% | Medium | High | P2 |
| Chrome Web Store | 3B+ users | Browser tools | Free / 5% | Low | Medium | P1 |
| Notion Integrations | 30M+ users | Productivity | Free | Low-Medium | Medium | P1 |

### 2. Listing Content Plan (Per Marketplace)
- App name and tagline
- Description (short and long versions)
- Screenshots (marketplace-specific dimensions)
- Demo video (60-90 seconds)
- Feature highlights
- Pricing information
- Support documentation and FAQ
- Customer testimonials

### 3. Integration Requirements Checklist (Per Marketplace)
- [ ] API endpoints required
- [ ] Authentication method (OAuth 2.0, API key, etc.)
- [ ] Data sync requirements (real-time, batch, webhooks)
- [ ] UI components (embedded views, settings pages)
- [ ] Testing and sandbox environment
- [ ] Security review requirements
- [ ] Documentation and help articles
- [ ] Support process and SLA

### 4. Launch Plan (Per Marketplace)
- Pre-launch: build integration, test, create listing assets
- Launch: submit for review, prepare announcement
- Post-launch: monitor reviews, respond to feedback, iterate
- Promotion: announce to existing users, feature in changelog, social media

### 5. Ongoing Maintenance Plan
- API version updates and deprecation monitoring
- User feedback monitoring and response
- Performance monitoring
- Quarterly listing refresh (screenshots, copy, pricing)

## Recommended Tools

| Tool | Purpose | Pricing |
|---|---|---|
| **Zapier** | No-code integration platform (great first marketplace) | Free to list |
| **Make (Integromat)** | Integration platform alternative to Zapier | Free to list |
| **Merge.dev** | Unified API for building multiple integrations | $0+/mo |
| **Paragon** | Embedded integration platform | Custom pricing |
| **Alloy** | Integration infrastructure for SaaS | Custom pricing |

## Agent Instructions

When populating this folder, the AI agent should:

1. Read `company-profile.md` to understand the product category and target customer's tool ecosystem
2. Evaluate 5-8 relevant marketplaces using the evaluation matrix framework
3. Rank marketplaces by expected ROI vs. integration effort
4. Create a detailed listing content plan for the top 2-3 marketplaces
5. Build an integration requirements checklist for each priority marketplace
6. Read `05-development/integrations` for existing integration architecture
7. Create a phased launch plan: which marketplace first, second, third
8. Output everything as `README.md` in this folder

## Example Output (Snippet)

```markdown
## Marketplace Priority Ranking

### Phase 1 — Quick Wins (Month 1-2)
1. **Zapier** — Lowest effort, broad reach. Build 5 core triggers/actions.
2. **Chrome Web Store** — If applicable. Browser extension drives daily usage.

### Phase 2 — Ecosystem Plays (Month 3-4)
3. **Slack App Directory** — Our ICP lives in Slack. Build a native Slack bot.
4. **HubSpot Marketplace** — High-value B2B audience. Requires deeper CRM integration.

### Phase 3 — Enterprise Expansion (Month 5+)
5. **Salesforce AppExchange** — Enterprise opportunity. Significant eng investment required.

## Zapier Listing Content

**App Name:** [Product] for Zapier
**Tagline:** Automate your async standups and team check-ins
**Triggers:** New standup submitted, Team goal updated, Mood alert triggered
**Actions:** Create standup reminder, Post update to channel, Add team member
```

## Cross-References

- `05-development/integrations` — the technical integration work required for marketplace listings
- `10-distribution/directories` — directories are listing-only; marketplaces involve deeper integration
- `10-distribution/integrations` — marketplace integrations are a subset of your integration strategy
- `10-distribution/partnerships` — marketplace listing can evolve into formal platform partnerships
