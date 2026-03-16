---
department: 05-development
subfolder: backend
priority: P0
stage: development
estimated_time: "3-5 days"
requires:
  - 03-planning/tech-stack
  - 05-development/database
---

# Backend Architecture

## Overview

This folder documents your backend architecture — the language, framework, patterns, and directory structure that power your SaaS behind the scenes. The backend is where your business logic lives: authentication, data processing, integrations, billing, and every rule that makes your product actually work.

A clear backend architecture document prevents the #1 cause of engineering slowdowns: tribal knowledge. When the architecture lives only in one person's head, every new developer (or your future self) wastes days figuring out "where does this go?" and "why was it built this way?"

## Questions to Answer

Before generating the output document, the founder should answer:

1. **What language and framework are you using?** Node/Express, Python/FastAPI, Go/Gin, Ruby/Rails, Elixir/Phoenix? Why?
2. **Monolith or microservices?** (Hint: start with a well-structured monolith. You can always extract services later.)
3. **What's your API style?** REST, GraphQL, tRPC, or a mix? What drove that choice?
4. **Where will this run?** Serverless functions, containers, a traditional server, or a managed platform?
5. **How do you handle background jobs?** Queues, cron jobs, event-driven processing?
6. **What's your error handling strategy?** Structured error codes, centralized error handler, error tracking service?
7. **How do you manage configuration and secrets?** Environment variables, secrets manager, config service?
8. **What's your logging strategy?** Structured JSON logs, log levels, correlation IDs for request tracing?

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# Backend Architecture: [Your SaaS Name]

## Stack Summary
| Layer | Choice | Rationale |
|---|---|---|
| Language | | |
| Framework | | |
| Architecture pattern | | |
| Hosting | | |
| Background jobs | | |
| Logging | | |

## Architecture Pattern
- [Monolith/microservices/serverless — explain the choice]
- [Service boundaries if applicable]
- [Communication patterns between services]

## Directory Structure
```
src/
├── routes/           # HTTP route definitions
├── controllers/      # Request handling and response formatting
├── services/         # Business logic (the core of your app)
├── models/           # Data models and database interactions
├── middleware/        # Auth, logging, rate limiting, error handling
├── jobs/             # Background job definitions
├── utils/            # Shared helpers and utilities
├── config/           # Configuration loading and validation
└── types/            # TypeScript types / Python schemas
```

## Request Lifecycle
1. Request hits route → 2. Middleware (auth, validation) → 3. Controller → 4. Service (business logic) → 5. Model (data access) → 6. Response

## Error Handling
- [Error code structure: e.g., AUTH_001, PAYMENT_002]
- [How errors are caught and formatted]
- [What gets logged vs. what gets returned to client]

## Environment & Configuration
| Environment | Purpose | URL |
|---|---|---|
| local | Development | localhost:3000 |
| staging | Pre-production testing | staging.yourapp.com |
| production | Live users | api.yourapp.com |

## Background Jobs
| Job | Trigger | Frequency | Description |
|---|---|---|---|
| | | | |

## Security Considerations
- [Input validation approach]
- [SQL injection prevention]
- [Rate limiting strategy]
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Node.js + Express/Fastify** | JavaScript/TypeScript backend runtime | Free |
| **Python + FastAPI** | High-performance Python API framework | Free |
| **tRPC** | End-to-end type-safe APIs (with TypeScript frontend) | Free |
| **BullMQ / Celery** | Background job queues | Free |
| **Zod / Pydantic** | Runtime input validation | Free |
| **Supabase** | Backend-as-a-service with Postgres, auth, and storage | Free tier |
| **Railway / Render** | Managed deployment platforms | Free tier |
| **Sentry** | Error tracking and performance monitoring | Free tier |

## Agent Instructions

When populating this folder for a founder:

1. Read `company-profile.md` for product type, complexity, and team size
2. Read `03-planning/tech-stack` for pre-existing language/framework decisions
3. Read `05-development/database` for the data layer that the backend sits on top of
4. Ask the 8 questions above if not already answered
5. Recommend a monolith for any team under 10 engineers — defend this if the founder pushes back
6. Design the directory structure around the product's domain (e.g., `/services/billing.ts`, `/services/projects.ts`)
7. Document the full request lifecycle with specific middleware
8. Define at least 3 background jobs relevant to the product (emails, data sync, cleanup, etc.)
9. Include an error handling strategy with concrete error code examples
10. Cross-reference the API design in `05-development/apis`

## Example Output (Abbreviated)

```markdown
# Backend Architecture: TaskFlow

## Stack Summary
| Layer | Choice | Rationale |
|---|---|---|
| Language | TypeScript | Same language as frontend, strong typing |
| Framework | Fastify | 2x faster than Express, built-in validation |
| Architecture | Modular monolith | Clean boundaries, easy to extract later |
| Hosting | Railway | Simple deploys, predictable pricing |
| Background jobs | BullMQ + Redis | Reliable queues for email, webhooks, reports |
| Logging | Pino (structured JSON) | Fast, searchable, Datadog-compatible |

## Background Jobs
| Job | Trigger | Frequency | Description |
|---|---|---|---|
| send-welcome-email | User signup event | On event | Sends onboarding email sequence |
| sync-integrations | Cron | Every 15 min | Pulls data from connected third-party tools |
| cleanup-expired-sessions | Cron | Daily 2 AM | Removes sessions older than 30 days |
```

## Cross-References

- **Depends on:** [03-planning/tech-stack](../../03-planning/tech-stack/) — Language and framework decisions
- **Depends on:** [05-development/database](../database/) — Data models and query patterns
- **Pairs with:** [05-development/apis](../apis/) — API contract the backend implements
- **Deployed via:** [06-infrastructure/cloud-hosting](../../06-infrastructure/cloud-hosting/) — Hosting and scaling
- **Monitored by:** [06-infrastructure/monitoring](../../06-infrastructure/monitoring/) — Logs, metrics, and alerts
