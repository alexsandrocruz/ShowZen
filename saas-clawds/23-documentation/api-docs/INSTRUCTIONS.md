---
department: 23-documentation
subfolder: api-docs
priority: P1
stage: post-launch
estimated_time: "2-4 weeks"
requires: ["05-development/apis"]
---

# API Docs

## Overview

This folder is for **API documentation** — reference docs, authentication guide, code examples, and SDK documentation. Essential if you have a public API, webhooks, or developer-facing product.

## Questions to Answer

1. **Do you have a public API?** (REST, GraphQL, both?)
2. **What's your API docs tool?** (OpenAPI, ReadMe, Postman?)
3. **How do developers authenticate?** (API key, OAuth, JWT?)
4. **What code examples do you provide?** (cURL, JS, Python, etc.)
5. **Do you have SDKs?** (Official or community?)
6. **How do you version the API?** (URL versioning? Header?)
7. **Where do API docs live?** (Subdomain? Developer portal?)

## Output Template

Create a `README.md` in this folder with:

```markdown
# API Docs: [Your SaaS Name]

## API Overview
- **Base URL:** [https://api.yoursaas.com]
- **Format:** REST / GraphQL
- **Documentation URL:** [developers.yoursaas.com]
- **Tool:** [ReadMe, Stoplight, OpenAPI/Swagger]

## Authentication
| Method | Use Case | Doc Link |
|---|---|---|
| API Key | Server-to-server | |
| OAuth 2.0 | User authorization | |
| Webhooks | Event subscriptions | |

## API Structure
| Resource | Endpoints | Purpose |
|---|---|---|
| [Resource 1] | GET, POST, PUT, DELETE | |
| [Resource 2] | | |
| [Webhooks] | N/A | Event payloads |

## Code Examples
| Language | Example | Location |
|---|---|---|
| cURL | | |
| JavaScript | | |
| Python | | |
| [Other] | | |

## Versioning
- **Strategy:** [URL v1, Header, None]
- **Current version:** 
- **Deprecation policy:** 
- **Changelog:** [Link]

## SDKs
| SDK | Maintainer | Link |
|---|---|---|
| JavaScript | [Official/Community] | |
| Python | | |
| [Other] | | |
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **OpenAPI / Swagger** | API spec, code gen | Free |
| **ReadMe** | API docs, interactive | $99+/mo |
| **Stoplight** | API design + docs | $ |
| **Postman** | API testing, docs | Free tier |
| **Redoc** | Open-source API docs | Free |
| **Slate** | Beautiful API docs | Free |

## Agent Instructions

1. Read [05-development/apis](../../05-development/apis/) for API design
2. Document authentication methods (API key, OAuth)
3. List key resources and endpoints
4. Define versioning strategy
5. List code examples by language
6. Document SDK status (official, community, planned)
7. Cross-ref [23-documentation/developer-guides](../developer-guides/) for integration tutorials

## Cross-References

- [05-development/apis](../../05-development/apis/) — API design
- [23-documentation/developer-guides](../developer-guides/) — Integration tutorials
- [05-development/authentication](../../05-development/authentication/) — Auth flow
