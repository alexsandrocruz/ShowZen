---
department: 06-infrastructure
subfolder: monitoring
priority: P1
stage: development
estimated_time: "2-3 days"
requires:
  - 06-infrastructure/cloud-hosting
  - 05-development/backend
---

# Monitoring, Logging & Alerting

## Overview

This folder documents your observability strategy — what you monitor, how you collect logs, when you fire alerts, and how you respond to incidents. Monitoring is how you see inside your running application. Without it, you're flying blind — learning about outages from angry customer emails instead of automated alerts.

The three pillars of observability are **metrics** (what's happening), **logs** (why it happened), and **traces** (the path a request took). You don't need all three on day one, but you need enough visibility to know when things break and where to look when they do.

## Questions to Answer

Before generating the output document, the founder should answer:

1. **What are the critical metrics for your product?** Response time, error rate, active users, job queue depth?
2. **What uptime SLA are you targeting?** 99.9% (8.7 hours downtime/year), 99.95%, or 99.99%?
3. **Who gets alerted when something breaks?** On-call rotation, specific team members, everyone?
4. **What's your log retention policy?** 7 days, 30 days, 90 days? Compliance requirements?
5. **Do you need a public status page?** And should it auto-update from monitoring?
6. **What are your dashboard needs?** Real-time traffic, business metrics, infrastructure health?
7. **What's your error tracking strategy?** Sentry, Bugsnag, or custom? Do you track frontend and backend?
8. **What's your incident response process?** Detect → triage → fix → post-mortem?

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# Monitoring & Observability: [Your SaaS Name]

## Monitoring Stack
| Layer | Tool | Purpose |
|---|---|---|
| Error tracking | Sentry | Capture and group exceptions |
| Uptime monitoring | BetterStack | Ping endpoints, alert on downtime |
| Infrastructure metrics | [Provider dashboard / Datadog] | CPU, memory, disk |
| Application metrics | [Custom / Datadog / Grafana] | Response times, request rates |
| Log management | [Provider logs / Datadog / Loki] | Centralized log search |
| Status page | [BetterStack / Instatus] | Public uptime communication |

## Alert Definition Matrix
| Alert | Condition | Severity | Channel | Responder |
|---|---|---|---|---|
| API down | Health check fails 3x | P0 - Critical | PagerDuty + Slack | On-call |
| High error rate | > 5% 5xx responses (5 min) | P0 - Critical | PagerDuty + Slack | On-call |
| Slow responses | p95 latency > 2s (5 min) | P1 - Warning | Slack | Backend lead |
| Disk usage high | > 85% | P1 - Warning | Slack | DevOps |
| SSL cert expiry | < 14 days | P2 - Info | Email | DevOps |
| Job queue backed up | > 100 pending (10 min) | P1 - Warning | Slack | Backend lead |

## Key Metrics Dashboard
| Metric | Source | Target | Red Threshold |
|---|---|---|---|
| Uptime | Health check | 99.9% | < 99.5% |
| p50 response time | APM | < 200ms | > 500ms |
| p95 response time | APM | < 500ms | > 2,000ms |
| Error rate (5xx) | Logs / APM | < 0.1% | > 1% |
| Active users (daily) | Analytics | Growing | Declining 3+ days |

## Logging Strategy
- Format: Structured JSON
- Levels: ERROR, WARN, INFO, DEBUG
- Correlation: Request ID attached to all logs in a request lifecycle
- Retention: [30 / 90 days]
- PII handling: [Redact sensitive fields before logging]

## Incident Response Playbook

### Severity Levels
| Level | Definition | Response Time | Example |
|---|---|---|---|
| P0 | Service down or data loss | 15 minutes | API unreachable |
| P1 | Degraded for many users | 1 hour | Slow response times |
| P2 | Minor issue, workaround exists | 4 hours | UI glitch on one page |
| P3 | Cosmetic / low impact | Next sprint | Typo in notification |

### Incident Workflow
1. **Detect** — Alert fires or user reports issue
2. **Acknowledge** — Responder claims the incident within SLA
3. **Diagnose** — Check dashboards, logs, recent deploys
4. **Mitigate** — Rollback, scale up, or hotfix
5. **Resolve** — Confirm service is restored
6. **Post-mortem** — Document root cause, impact, and prevention within 48 hours
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Sentry** | Error tracking (frontend + backend) | Free tier |
| **BetterStack (formerly Better Uptime)** | Uptime monitoring + status page | Free tier |
| **Datadog** | Full observability (metrics, logs, traces) | Free tier (limited) |
| **Grafana Cloud** | Dashboards, metrics, logs, traces | Free tier |
| **PagerDuty** | On-call scheduling and escalation | Free for up to 5 users |
| **Instatus** | Beautiful public status pages | Free tier |

## Agent Instructions

When populating this folder for a founder:

1. Read `company-profile.md` for product type and customer expectations (B2B enterprise needs higher SLAs)
2. Read `06-infrastructure/cloud-hosting` for the hosting platform (monitoring integrations depend on this)
3. Read `05-development/backend` for the tech stack (log format, APM compatibility)
4. Ask the 8 questions above if not answered
5. Default to Sentry (errors) + BetterStack (uptime) for early-stage — this covers 80% of needs
6. Define at least 6 specific alerts with conditions, severity, and notification channels
7. Build a key metrics dashboard with concrete targets and red thresholds
8. Write an incident response playbook with severity levels and response time SLAs
9. Include a logging strategy with format, levels, retention, and PII handling
10. If the product serves enterprise customers, include a status page setup

## Example Output (Abbreviated)

```markdown
# Monitoring & Observability: TaskFlow

## Monitoring Stack
| Layer | Tool | Purpose |
|---|---|---|
| Error tracking | Sentry | Frontend + backend exception capture |
| Uptime | BetterStack | 1-minute ping on /api/health |
| Infra metrics | Railway dashboard | CPU, memory, deploy history |
| Status page | BetterStack | status.taskflow.app |
```

## Cross-References

- **Depends on:** [06-infrastructure/cloud-hosting](../cloud-hosting/) — Infrastructure being monitored
- **Depends on:** [05-development/backend](../../05-development/backend/) — Logging strategy and health endpoints
- **Feeds into:** [06-infrastructure/security](../security/) — Security event monitoring
- **Supports:** [06-infrastructure/devops](../devops/) — Post-deploy health verification
- **Informs:** [07-testing/performance-testing](../../07-testing/performance-testing/) — Baseline performance data
