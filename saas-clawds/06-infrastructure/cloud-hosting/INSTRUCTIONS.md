---
department: 06-infrastructure
subfolder: cloud-hosting
priority: P0
stage: development
estimated_time: "2-3 days"
requires:
  - 03-planning/tech-stack
  - 05-development/backend
---

# Cloud Hosting & Infrastructure Architecture

## Overview

This folder documents where your application runs, how it scales, and what it costs. Cloud hosting is the physical (well, virtual) foundation of your SaaS — the servers, databases, storage, and CDNs that keep your product available 24/7.

The right hosting choice for a startup is almost never the same as for an enterprise. You want fast deploys, low operational overhead, and predictable costs. You can always migrate to more complex infrastructure when you have the revenue and team to justify it. Don't build for 1 million users when you have 10.

## Questions to Answer

Before generating the output document, the founder should answer:

1. **What cloud provider or platform are you using?** AWS, GCP, Azure, Vercel, Railway, Fly.io, Render, or a combination?
2. **What compute model fits your workload?** Serverless functions, containers, VMs, or a managed platform?
3. **What regions do you need to serve?** Where are your target customers? Do you need multi-region?
4. **Do you need a CDN?** For static assets, global API latency, or both?
5. **What storage do you need?** Object storage (files/uploads), block storage (database), or both?
6. **What's your estimated monthly infrastructure cost?** At 100 users, 1,000 users, 10,000 users?
7. **What's your scaling strategy?** Auto-scaling, manual scaling, or platform-managed?
8. **Do you have compliance or data residency requirements?** GDPR, SOC 2, HIPAA, specific countries?

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# Infrastructure Architecture: [Your SaaS Name]

## Hosting Overview
| Component | Provider | Service | Region |
|---|---|---|---|
| Web app | | | |
| API server | | | |
| Database | | | |
| File storage | | | |
| CDN | | | |
| Email | | | |

## Architecture Diagram (Text)
```
[User] → [CDN/Edge] → [Load Balancer]
                            ↓
                    [App Server(s)]
                       ↓        ↓
                  [Database]  [Object Storage]
                       ↓
                  [Redis Cache]
```

## Cost Projections
| Stage | Users | Monthly Cost | Key Drivers |
|---|---|---|---|
| MVP (0-100 users) | 100 | $__/mo | |
| Early traction (100-1K) | 1,000 | $__/mo | |
| Growth (1K-10K) | 10,000 | $__/mo | |
| Scale (10K+) | 50,000 | $__/mo | |

## Scaling Plan
| Trigger | Action | Complexity |
|---|---|---|
| CPU > 80% sustained | [Scale up / add instances] | Low |
| DB connections maxed | [Add read replicas / connection pooling] | Medium |
| Storage > 80% | [Expand volume / migrate to larger tier] | Low |
| Multi-region needed | [Deploy to additional region] | High |

## Domain & DNS
| Domain | Purpose | Provider |
|---|---|---|
| yourapp.com | Marketing site | Cloudflare |
| app.yourapp.com | Web application | Cloudflare |
| api.yourapp.com | API server | Cloudflare |

## SSL/TLS
- [Auto-provisioned via platform / Let's Encrypt / Cloudflare]

## Disaster Recovery
| Aspect | Strategy |
|---|---|
| Database backups | [Automated daily, 30-day retention] |
| Multi-AZ | [Yes/No — for database and compute] |
| Failover | [Automated / manual — with expected RTO] |
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Vercel** | Frontend hosting with edge functions | Free tier |
| **Railway** | Simple app + database hosting | $5/mo + usage |
| **Fly.io** | Global app deployment with edge containers | Free tier |
| **Render** | Managed hosting (apps, databases, cron) | Free tier |
| **AWS (ECS/Lambda/RDS)** | Full cloud with maximum flexibility | Pay-as-you-go |
| **Cloudflare** | CDN, DNS, DDoS protection, R2 storage | Free tier |
| **Supabase** | Hosted Postgres + auth + storage + realtime | Free tier |
| **PlanetScale** | Serverless MySQL with branching | Free tier |

## Agent Instructions

When populating this folder for a founder:

1. Read `company-profile.md` for stage, budget, and team size
2. Read `03-planning/tech-stack` for any pre-existing infrastructure decisions
3. Read `05-development/backend` for the runtime requirements (Node, Python, Go, etc.)
4. Ask the 8 questions above if not answered
5. For pre-revenue or bootstrapped founders, default to managed platforms (Railway, Render, Vercel) not raw AWS
6. Calculate cost projections for 4 stages: MVP, early traction, growth, scale
7. Design for single-region initially with a documented path to multi-region
8. Include a domain and DNS configuration plan
9. Specify the disaster recovery strategy with concrete RTO/RPO numbers
10. Flag any compliance requirements that affect hosting choices (GDPR → EU region, HIPAA → BAA required)

## Example Output (Abbreviated)

```markdown
# Infrastructure Architecture: TaskFlow

## Hosting Overview
| Component | Provider | Service | Region |
|---|---|---|---|
| Web app | Vercel | Edge deployment | Global (auto) |
| API server | Railway | Container | US-West |
| Database | Supabase | PostgreSQL 15 | US-West-1 |
| File storage | Cloudflare | R2 | Global |
| CDN | Cloudflare | Free plan | Global |
| Email | Resend | API | US |

## Cost Projections
| Stage | Users | Monthly Cost | Key Drivers |
|---|---|---|---|
| MVP | 100 | $12/mo | Railway ($5), Supabase (free), Resend (free) |
| Early traction | 1,000 | $45/mo | Railway ($20), Supabase ($25), Resend (free) |
| Growth | 10,000 | $180/mo | Railway ($50), Supabase ($75), R2 ($15), Resend ($20) |
```

## Cross-References

- **Depends on:** [03-planning/tech-stack](../../03-planning/tech-stack/) — Technology decisions driving infra choices
- **Depends on:** [05-development/backend](../../05-development/backend/) — Application runtime requirements
- **Pairs with:** [06-infrastructure/devops](../devops/) — Deployment automation to this infrastructure
- **Monitored by:** [06-infrastructure/monitoring](../monitoring/) — Uptime and performance visibility
- **Secured by:** [06-infrastructure/security](../security/) — Network and access security
