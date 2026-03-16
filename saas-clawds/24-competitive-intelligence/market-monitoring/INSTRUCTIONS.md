---
department: 24-competitive-intelligence
subfolder: market-monitoring
priority: P1
stage: post-launch
estimated_time: "1-2 days"
requires: ["01-idea/competitor-analysis"]
---

# Market Monitoring

## Overview

This folder is for **ongoing competitive and market monitoring** — news alerts, product updates, funding, leadership changes, and market shifts. Stay informed without constant manual checking.

## Questions to Answer

1. **Who are your top 5-10 competitors to monitor?**
2. **What do you want to track?** (Product, pricing, funding, news?)
3. **What tools will you use?** (Crayon, manual, RSS?)
4. **Who owns competitive intel?** (Product? Sales? Marketing?)
5. **How often do you review?** (Weekly digest? Monthly?)
6. **How do you distribute intel?** (Slack, email, wiki?)
7. **What triggers an alert?** (Funding, major launch, pricing change?)

## Output Template

Create a `README.md` in this folder with:

```markdown
# Market Monitoring: [Your SaaS Name]

## Competitors to Monitor
| Competitor | Priority | What to Track |
|---|---|---|
| [A] | P0 | Product, pricing, funding |
| [B] | P0 | |
| [C] | P1 | |
| [D] | P1 | |
| [E] | P2 | |

## Monitoring Stack
| Source | Tool/Method | Cadence |
|---|---|---|
| News | Google Alerts, Feedly | Daily |
| Product updates | Competitor blog, changelog | Weekly |
| Funding | Crunchbase, LinkedIn | As needed |
| Pricing | Manual check, signup | Monthly |
| Reviews | G2, Capterra | Monthly |
| [Crayon / Kompyte] | All-in-one | If budget |

## Alert Triggers
| Trigger | Action | Owner |
|---|---|---|
| Competitor funding | Review positioning | |
| Major product launch | Update battlecard | |
| Pricing change | Update pricing intel | |
| Leadership change | Note for account strategy | |
| Negative review trend | Product/support review | |

## Distribution
| Audience | Channel | Frequency |
|---|---|---|
| Sales | Slack #competitive | Weekly digest |
| Product | Email / Wiki | Monthly summary |
| Leadership | All-hands / Email | Quarterly |
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Crayon** | Competitive intel platform | $ |
| **Kompyte** | Competitive tracking | $ |
| **Google Alerts** | News monitoring | Free |
| **Feedly** | RSS, blogs | Free |
| **Crunchbase** | Funding, company info | Free / $ |
| **BuiltWith** | Tech stack, traffic | $ |
| **SimilarWeb** | Traffic, keywords | Free tier |

## Agent Instructions

1. Read [01-idea/competitor-analysis](../../01-idea/competitor-analysis/) for competitor list
2. Prioritize top 5-10 competitors
3. List what to track per competitor (product, pricing, funding, news)
4. Define monitoring stack (free: Google Alerts, Feedly; paid: Crayon)
5. Create alert triggers (funding, launch, pricing)
6. Define distribution (Slack, email, wiki, cadence)
7. Cross-ref [24-competitive-intelligence/feature-gap-tracking](../feature-gap-tracking/) for product tracking

## Cross-References

- [01-idea/competitor-analysis](../../01-idea/competitor-analysis/) — Competitor list
- [24-competitive-intelligence/feature-gap-tracking](../feature-gap-tracking/) — Product updates
- [24-competitive-intelligence/pricing-intelligence](../pricing-intelligence/) — Pricing updates
