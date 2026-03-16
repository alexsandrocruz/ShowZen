---
department: 05-development
subfolder: apis
priority: P0
stage: development
estimated_time: "2-4 days"
requires:
  - 05-development/backend
  - 05-development/database
---

# API Design & Documentation

## Overview

This folder contains your API design guide, endpoint inventory, and versioning strategy. Your API is the contract between your frontend and backend — and eventually between your product and the outside world. A well-designed API is intuitive, consistent, and hard to misuse.

If you ever plan to offer a public API, integrations, or a mobile app, what you design here becomes a first-class product. Even if it's internal-only for now, a clean API dramatically reduces frontend/backend coordination overhead and makes onboarding new developers painless.

## Questions to Answer

Before generating the output document, the founder should answer:

1. **REST, GraphQL, or tRPC?** REST is universal and simple. GraphQL is powerful for complex data. tRPC gives end-to-end type safety. What fits your team and product?
2. **How will you version your API?** URL versioning (`/v1/`), header versioning, or no versioning for now?
3. **What authentication method do API requests use?** Bearer tokens, API keys, session cookies, or a combination?
4. **What's your rate limiting strategy?** Per-user, per-endpoint, tiered by plan? What are the limits?
5. **How will you document the API?** Auto-generated OpenAPI spec, hand-written docs, both?
6. **What response format will you use?** Standard JSON envelope (`{ data, error, meta }`), raw JSON, JSON:API?
7. **How do you handle pagination?** Cursor-based, offset-based, or keyset? What's the default page size?
8. **Do you need a public API for third-party developers?** If so, when — at launch or later?

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# API Design Guide: [Your SaaS Name]

## API Overview
| Attribute | Value |
|---|---|
| Style | REST / GraphQL / tRPC |
| Base URL | `https://api.yourapp.com/v1` |
| Auth method | Bearer token |
| Response format | JSON envelope |
| Documentation | OpenAPI 3.1 |

## Response Envelope
```json
{
  "data": { ... },
  "error": null,
  "meta": {
    "page": 1,
    "per_page": 25,
    "total": 142
  }
}
```

## Error Format
```json
{
  "data": null,
  "error": {
    "code": "AUTH_TOKEN_EXPIRED",
    "message": "Your session has expired. Please log in again.",
    "status": 401
  }
}
```

## Endpoint Inventory
| Method | Endpoint | Description | Auth | Rate Limit |
|---|---|---|---|---|
| POST | `/auth/signup` | Create account | No | 5/min |
| POST | `/auth/login` | Authenticate user | No | 10/min |
| GET | `/users/me` | Get current user | Yes | 60/min |
| GET | `/projects` | List user's projects | Yes | 60/min |
| POST | `/projects` | Create a project | Yes | 30/min |

## Pagination Strategy
- Style: [cursor-based / offset]
- Default page size: [25]
- Max page size: [100]

## Versioning Strategy
- [How versions are introduced and deprecated]
- [Deprecation timeline — e.g., 6 months notice]

## Rate Limiting
| Tier | Limit | Window |
|---|---|---|
| Free | 100 req/min | Per user |
| Pro | 500 req/min | Per user |
| Enterprise | Custom | Per org |

## API Changelog Template
| Date | Version | Change | Breaking? |
|---|---|---|---|
| | | | |
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **OpenAPI / Swagger** | API specification and auto-generated docs | Free |
| **Postman** | API testing and collaboration | Free tier |
| **Hoppscotch** | Open-source API testing (Postman alternative) | Free |
| **Insomnia** | API client with environment management | Free tier |
| **Redocly** | Beautiful API documentation from OpenAPI specs | Free tier |
| **Zod / Joi** | Request/response schema validation | Free |
| **Orval** | Auto-generate API client from OpenAPI spec | Free |

**References:** Stripe's API design guide, GitHub REST API conventions, Zalando RESTful API guidelines

## Agent Instructions

When populating this folder for a founder:

1. Read `company-profile.md` to understand what the product does
2. Read `05-development/backend` for the API style and framework choice
3. Read `05-development/database` for the data model — endpoints mirror resources
4. Ask the 8 questions above if not answered
5. Generate a complete endpoint inventory covering all core product features (minimum 15 endpoints)
6. For REST APIs, follow resource-oriented URL design (nouns, not verbs)
7. Define a consistent response envelope and error format
8. Set rate limits appropriate for the pricing tiers in `11-conversion/pricing-strategy`
9. Include pagination strategy with concrete cursor/offset examples
10. If the product will have a public API, document the API key issuance and scope model

## Example Output (Abbreviated)

```markdown
# API Design Guide: TaskFlow

## Endpoint Inventory
| Method | Endpoint | Description | Auth | Rate Limit |
|---|---|---|---|---|
| POST | `/v1/auth/signup` | Register a new account | No | 5/min |
| POST | `/v1/auth/login` | Login and receive JWT | No | 10/min |
| GET | `/v1/tasks` | List tasks (paginated, filterable) | Yes | 120/min |
| POST | `/v1/tasks` | Create a new task | Yes | 60/min |
| PATCH | `/v1/tasks/:id` | Update a task | Yes | 60/min |
| DELETE | `/v1/tasks/:id` | Delete a task | Yes | 30/min |
| POST | `/v1/tasks/:id/assign` | Assign task to team member | Yes | 30/min |
| GET | `/v1/projects/:id/analytics` | Get project analytics | Yes | 30/min |
```

## Cross-References

- **Depends on:** [05-development/backend](../backend/) — Framework and architecture implementing these endpoints
- **Depends on:** [05-development/database](../database/) — Data models that endpoints expose
- **Securedby:** [05-development/authentication](../authentication/) — Auth mechanism for protected endpoints
- **Tested by:** [07-testing/integration-testing](../../07-testing/integration-testing/) — API contract tests
- **Consumed by:** [05-development/frontend](../frontend/) — Client that calls these endpoints
