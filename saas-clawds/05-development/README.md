# 05 — Development: Where Your Product Comes to Life

> This is the build phase. Everything you've ideated, validated, planned, and designed now becomes working software. Code is where vision meets reality.

## Purpose

The Development department is where your SaaS stops being a slide deck and starts being a product. This isn't just about writing code — it's about making architectural decisions that will either accelerate or haunt you for years. The right choices here mean you can ship fast, iterate safely, and scale when the time comes. The wrong choices mean rewrites, outages, and technical debt that slows everything down.

This department covers six critical areas of your technical build:

| Subfolder | What You'll Produce | Priority |
|---|---|---|
| [frontend](./frontend/) | Frontend architecture document, component strategy, styling plan | P0 |
| [backend](./backend/) | Backend architecture document, API patterns, directory structure | P0 |
| [apis](./apis/) | API design guide, endpoint inventory, versioning strategy | P0 |
| [database](./database/) | Schema design, entity relationships, migration plan | P0 |
| [authentication](./authentication/) | Auth architecture, permission matrix, security checklist | P0 |
| [integrations](./integrations/) | Integration inventory, API key management, webhook architecture | P1 |

## How to Work Through This Department

**Start with your foundation, then layer upward:**

1. **Database** — Design your data model first; everything else depends on it
2. **Backend** — Build your server architecture and core business logic
3. **APIs** — Define the contract between your frontend and backend
4. **Authentication** — Secure the system before exposing anything to users
5. **Frontend** — Build the user-facing experience on top of solid APIs
6. **Integrations** — Connect to third-party services to extend functionality

## Time Estimate

| Approach | Time |
|---|---|
| Solo founder, familiar stack, simple MVP | 4–8 weeks |
| Small team (2-4 devs), moderate complexity | 6–12 weeks |
| Full product build with integrations | 3–6 months |

## Key Principle

**Make boring technology choices.** Unless your differentiator is the technology itself, pick proven, well-documented tools with large communities. Your competitive advantage is the problem you solve, not the framework you use. Save clever engineering for the parts that directly create customer value.

## What Success Looks Like

When you finish this department, you should have:
- A **running application** with core functionality
- **Documented architecture** that a new developer could understand in a day
- **Secure authentication** protecting user data
- **Clean APIs** that your frontend (and future mobile app) can consume
- A **database schema** that models your domain accurately
- **Third-party integrations** that extend your product's capabilities

## Prerequisites

Complete these departments first:
- [03-planning/tech-stack](../03-planning/tech-stack/) — Technology decisions that inform every choice here
- [03-planning/mvp-scope](../03-planning/mvp-scope/) — What features to build (and what to skip)
- [04-design/design-system](../04-design/design-system/) — UI components and design tokens

## Next Step

Once your code is written, move to [06-infrastructure](../06-infrastructure/) to deploy it reliably, and [07-testing](../07-testing/) to make sure it actually works.
