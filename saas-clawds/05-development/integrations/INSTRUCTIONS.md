---
department: 05-development
subfolder: integrations
priority: P1
stage: development
estimated_time: "2-4 days"
requires:
  - 05-development/backend
  - 05-development/apis
---

# Third-Party Integrations

## Overview

This folder documents your third-party integration strategy — which external services your product connects to, how those connections work, and how you manage the complexity that comes with depending on systems you don't control.

Integrations are a double-edged sword. They extend your product's capabilities without building everything in-house, but each one is a dependency that can break, change its API, or go offline. A clear integration architecture prevents the spaghetti of scattered API calls, inconsistent error handling, and secrets stored in random places.

## Questions to Answer

Before generating the output document, the founder should answer:

1. **What integrations are critical for launch?** Payment processing (Stripe), email (SendGrid/Resend), file storage (S3/Cloudflare R2)?
2. **What integrations are on the roadmap for post-launch?** CRM, analytics, Slack/Discord notifications, calendar sync?
3. **Do you need to receive webhooks?** From which services? How do you validate and process them?
4. **How will you handle API keys and secrets?** Environment variables, a secrets manager (AWS Secrets Manager, Doppler)?
5. **What happens when an integration goes down?** Retry logic, fallbacks, graceful degradation?
6. **Do you plan to offer integrations to your users?** (i.e., let users connect their own Slack, Google Drive, etc.)
7. **How will you monitor integration health?** Success rates, latency, error tracking per integration?
8. **What's your webhook security strategy?** Signature verification, idempotency keys, replay protection?

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# Integration Architecture: [Your SaaS Name]

## Integration Inventory

### Launch-Critical (P0)
| Integration | Purpose | API Type | Auth Method |
|---|---|---|---|
| Stripe | Payments and subscriptions | REST | API key |
| Resend/SendGrid | Transactional email | REST | API key |
| Cloudflare R2/S3 | File storage | S3-compatible | IAM |

### Post-Launch (P1)
| Integration | Purpose | Target Date |
|---|---|---|
| | | |

### Future / User-Facing (P2)
| Integration | Purpose | Trigger |
|---|---|---|
| | | [e.g., "When 10 customers request it"] |

## Integration Architecture Pattern
```
[Request] → Integration Service Layer → [External API]
                  ↓
            Error Handler → Retry Queue → Dead Letter Queue
                  ↓
            Event Log (for debugging and audit)
```

## Webhook Handling
| Source | Event | Endpoint | Action |
|---|---|---|---|
| Stripe | `invoice.paid` | `/webhooks/stripe` | Activate subscription |
| Stripe | `invoice.payment_failed` | `/webhooks/stripe` | Notify user, retry |

## API Key Management
| Secret | Storage | Rotation Frequency |
|---|---|---|
| `STRIPE_SECRET_KEY` | Environment variable / Secrets manager | Annually |
| `RESEND_API_KEY` | Environment variable / Secrets manager | Annually |

## Error Handling Strategy
- **Transient failures:** Retry with exponential backoff (max 3 retries)
- **Rate limits:** Respect `Retry-After` headers, queue excess requests
- **Permanent failures:** Log, alert, surface to user if action required
- **Downtime:** Graceful degradation — show cached data or "temporarily unavailable"

## Monitoring
| Metric | Threshold | Alert |
|---|---|---|
| Integration success rate | < 99% | Slack + PagerDuty |
| Webhook processing time | > 5s | Slack |
| Failed webhook deliveries | > 5 in 1 hour | PagerDuty |
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Stripe** | Payments, subscriptions, invoicing | 2.9% + 30¢/txn |
| **Resend** | Transactional email with great DX | Free tier |
| **Cloudflare R2** | S3-compatible object storage (no egress fees) | Pay-as-you-go |
| **Svix** | Webhook delivery infrastructure | Free tier |
| **Doppler** | Secrets management across environments | Free tier |
| **Segment** | Customer data pipeline to multiple destinations | Free tier |
| **Zapier / Make** | No-code integrations your users can set up | Varies |
| **Nango** | Unified API for third-party OAuth integrations | Free tier |

## Agent Instructions

When populating this folder for a founder:

1. Read `company-profile.md` to understand what the product does and its revenue model
2. Read `05-development/backend` for the tech stack and architecture
3. Read `05-development/apis` for the API patterns (webhook endpoints follow the same conventions)
4. Ask the 8 questions above if not answered
5. Identify all integrations from the product description — payment processing is almost always needed
6. Categorize integrations into P0 (launch), P1 (post-launch), P2 (future)
7. Design a webhook processing architecture with retry logic and dead-letter handling
8. Document API key management with storage locations and rotation schedules
9. Define error handling for each integration type (transient vs. permanent failures)
10. If users can connect their own integrations, design the OAuth flow and token storage

## Example Output (Abbreviated)

```markdown
# Integration Architecture: TaskFlow

### Launch-Critical (P0)
| Integration | Purpose | API Type | Auth Method |
|---|---|---|---|
| Stripe | Subscription billing | REST | API key (secret) |
| Resend | Welcome emails, notifications | REST | API key |
| Cloudflare R2 | File attachments on tasks | S3 API | Access key + secret |
| Slack (incoming webhook) | Team notifications | Webhook | Webhook URL |

### Post-Launch (P1)
| Integration | Purpose | Target Date |
|---|---|---|
| Google Calendar | Sync task due dates | Month 2 |
| GitHub | Link tasks to PRs/issues | Month 3 |
| Zapier | Let users build custom workflows | Month 4 |
```

## Cross-References

- **Depends on:** [05-development/backend](../backend/) — Integration service layer lives here
- **Depends on:** [05-development/apis](../apis/) — Webhook endpoint design follows API conventions
- **Securedby:** [05-development/authentication](../authentication/) — OAuth flows for user-facing integrations
- **Monitored by:** [06-infrastructure/monitoring](../../06-infrastructure/monitoring/) — Integration health dashboards
- **Revenue impact:** [12-revenue/subscriptions](../../12-revenue/subscriptions/) — Stripe integration drives billing
