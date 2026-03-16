---
department: 23-documentation
subfolder: developer-guides
priority: P2
stage: post-launch
estimated_time: "2-4 weeks"
requires: ["05-development/apis", "05-development/integrations", "23-documentation/api-docs"]
---

# Developer Guides

## Overview

This folder is for **developer-facing tutorials** — integration guides, webhooks, OAuth flow, and developer portal. If you have an API or integrations, developers need step-by-step guides to get started.

## Questions to Answer

1. **Do you have a developer portal?** (Dedicated site?)
2. **What integrations do you document?** (Zapier, API, webhooks?)
3. **What's your OAuth/integration flow?** (If applicable)
4. **What tutorials do you need?** (Quickstart, use cases?)
5. **Do you have a sandbox/test environment?**
6. **How do developers get API keys?** (Self-serve? Request?)
7. **Do you have a developer community?** (Slack, Discord, forum?)

## Output Template

Create a `README.md` in this folder with:

```markdown
# Developer Guides: [Your SaaS Name]

## Developer Portal
- **URL:** [developers.yoursaas.com]
- **Contents:** API docs, guides, SDKs, status
- **Auth for docs:** [Public / Sign-up / API key]

## Integration Types
| Type | Doc | Self-Serve? |
|---|---|---|
| REST API | [Link] | |
| Webhooks | [Link] | |
| OAuth | [Link] | |
| Zapier | [Link] | |
| [Other] | | |

## Tutorials
| Tutorial | Audience | Time |
|---|---|---|
| Quickstart | New developers | 5 min |
| First integration | First API call | 15 min |
| Webhooks setup | Event-driven | 20 min |
| OAuth flow | App builders | 30 min |
| [Use case] | | |

## Developer Journey
1. **Sign up** → Create account
2. **Get API key** → Dashboard / self-serve
3. **Read Quickstart** → First request
4. **Explore API reference** → Endpoints
5. **Set up webhooks** → (If applicable)
6. **Build** → Support: [Slack, email, etc.]

## Sandbox / Test
- **Test environment:** [URL]
- **Test API keys:** [How to get]
- **Limitations:** [Rate limits, data]

## Developer Support
- **Community:** [Slack, Discord]
- **Email:** 
- **Status page:** 
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **ReadMe** | Developer docs, API | $99+/mo |
| **GitBook** | Docs, tutorials | Free tier |
| **Postman** | API examples, collections | Free |
| **Zapier** | Integration platform | $ |
| **Slack / Discord** | Developer community | Free |
| **Statuspage** | API status | $ |

## Agent Instructions

1. Read [05-development/apis](../../05-development/apis/) and [05-development/integrations](../../05-development/integrations/)
2. Read [23-documentation/api-docs](../api-docs/) for API reference
3. List integration types (REST, webhooks, OAuth, Zapier)
4. Create 4-6 tutorial outline (quickstart, API, webhooks, OAuth, use case)
5. Document developer journey (signup → first call → build)
6. Define sandbox/test environment
7. Cross-ref [10-distribution/integrations](../../10-distribution/integrations/) for integration roadmap

## Cross-References

- [23-documentation/api-docs](../api-docs/) — API reference
- [05-development/integrations](../../05-development/integrations/) — Integration architecture
- [10-distribution/integrations](../../10-distribution/integrations/) — Integration roadmap
