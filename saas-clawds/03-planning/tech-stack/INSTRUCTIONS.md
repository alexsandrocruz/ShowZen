---
department: 03-planning
subfolder: tech-stack
priority: P1
stage: planning
estimated_time: "1-2 days"
requires:
  - 03-planning/mvp-scope
---

# Tech Stack

## Overview

This folder is for choosing the **technologies** that will power your SaaS — frontend, backend, database, hosting, and key services. Tech stack decisions have long-lasting consequences: migration is expensive, hiring is constrained by your choices, and performance ceilings are set early.

That said, the best tech stack is the one your team can ship with **fastest**. Don't choose Rust because it's cool if your team knows TypeScript. Don't build microservices for an MVP. Don't debate PostgreSQL vs. MySQL for three weeks when either works fine.

**Principles for early-stage tech stack decisions:**
1. Optimize for speed to ship, not theoretical scalability
2. Use what your team already knows
3. Prefer boring, proven technology over bleeding edge
4. Minimize the number of technologies (every new tool is a maintenance burden)
5. Choose technologies with strong communities and hiring pools

## Questions to Answer

1. **What is your team's existing expertise?** Languages, frameworks, and platforms you already know well.
2. **What type of application are you building?** Web app, mobile app, API-first, real-time, data-heavy?
3. **What are your performance requirements?** Response time, concurrent users, data volume expectations.
4. **Do you need real-time features?** Chat, collaboration, live updates, notifications?
5. **What third-party integrations are critical?** Payment processing, email, analytics, specific APIs.
6. **What's your hosting budget?** $0/mo (free tiers), $50-200/mo, $500+/mo?
7. **Do you have compliance requirements?** Data residency, encryption, SOC 2, HIPAA?
8. **Will you need to hire developers?** If so, optimize for a popular stack with a large hiring pool.

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# Tech Stack: [Your SaaS Name]

## Stack Summary

| Layer | Choice | Rationale |
|---|---|---|
| **Frontend** | [Framework] | [Why] |
| **Backend** | [Language/Framework] | [Why] |
| **Database** | [Database] | [Why] |
| **Hosting** | [Provider] | [Why] |
| **Auth** | [Service/Library] | [Why] |
| **Payments** | [Provider] | [Why] |
| **Email** | [Service] | [Why] |
| **File Storage** | [Service] | [Why] |
| **Analytics** | [Tool] | [Why] |
| **Monitoring** | [Tool] | [Why] |

## Detailed Decisions

### Frontend
- **Framework:** [e.g., Next.js, SvelteKit, Remix]
- **Styling:** [e.g., Tailwind CSS, CSS Modules, Styled Components]
- **State management:** [e.g., Zustand, Redux, built-in]
- **Why this choice:** [Rationale tied to MVP requirements and team skills]
- **Alternatives considered:** [What else you evaluated and why you passed]

### Backend
- **Language/Framework:** [e.g., Node.js/Express, Python/FastAPI, Go/Gin]
- **API style:** [REST, GraphQL, tRPC]
- **Why this choice:** [Rationale]
- **Alternatives considered:** [What else and why not]

### Database
- **Primary database:** [e.g., PostgreSQL, MySQL, MongoDB]
- **ORM/Query builder:** [e.g., Prisma, Drizzle, SQLAlchemy]
- **Caching layer:** [e.g., Redis, none for MVP]
- **Why this choice:** [Rationale]

### Infrastructure & DevOps
- **Hosting:** [e.g., Vercel, Railway, AWS, Fly.io]
- **CI/CD:** [e.g., GitHub Actions, Vercel auto-deploy]
- **Container strategy:** [Docker, serverless, bare metal]
- **Estimated monthly cost:** $[X] at launch, $[X] at 1K users

### Third-Party Services
| Service | Provider | Cost | Purpose |
|---|---|---|---|
| Authentication | [Clerk, Auth0, Supabase Auth] | [$/mo] | |
| Payments | [Stripe, Lemon Squeezy] | [% per txn] | |
| Email (transactional) | [Resend, Postmark, SendGrid] | [$/mo] | |
| Email (marketing) | [ConvertKit, Mailchimp] | [$/mo] | |
| File storage | [S3, Cloudflare R2, Uploadthing] | [$/mo] | |
| Analytics | [PostHog, Mixpanel, Plausible] | [$/mo] | |

## Cost Projection

| Stage | Monthly Cost | Breakdown |
|---|---|---|
| Development (0 users) | $[X] | [Hosting: $X, Services: $X] |
| Launch (0-100 users) | $[X] | [Breakdown] |
| Growth (100-1K users) | $[X] | [Breakdown] |
| Scale (1K-10K users) | $[X] | [Breakdown] |

## Tech Debt Acknowledgments
| Decision | Why It's OK For Now | When to Revisit |
|---|---|---|
| [e.g., No caching layer] | [MVP traffic won't need it] | [When p99 latency > 500ms] |
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **StackShare** | See what other companies use | Free |
| **ThoughtWorks Tech Radar** | Technology maturity assessment | Free |
| **Vercel** | Frontend hosting with edge functions | Free / $20/mo |
| **Railway** | Backend hosting, databases, easy deployment | $5/mo + usage |
| **Supabase** | PostgreSQL + Auth + Storage + Realtime | Free / $25/mo |
| **PlanetScale** | Serverless MySQL with branching | Free / $29/mo |

## Agent Instructions

When populating this folder for a founder:

1. Read `company-profile.md` for team expertise, budget, and stage
2. Read `03-planning/mvp-scope/README.md` to understand what's being built
3. Recommend a stack that matches the team's existing skills — don't suggest Go if they know JavaScript
4. Choose the simplest stack that meets MVP requirements (monolith over microservices, always)
5. Minimize the number of technologies — every addition is a maintenance cost
6. Include specific products with real pricing, not categories
7. Calculate a realistic cost projection for each growth stage
8. Flag known tech debt decisions openly — acknowledge trade-offs
9. For solo founders with no strong preference, default to the "modern SaaS starter" stack: Next.js + Tailwind + Supabase (or Prisma + PostgreSQL) + Vercel + Stripe
10. Include alternatives considered to show the decision was deliberate

## Example Output (Abbreviated)

```markdown
# Tech Stack: InvoiceBot

| Layer | Choice | Rationale |
|---|---|---|
| Frontend | Next.js 14 + Tailwind CSS | Founder knows React; Tailwind is fast for UI |
| Backend | Next.js API Routes + tRPC | Monolith for speed; type-safe API layer |
| Database | Supabase (PostgreSQL) | Free tier generous; built-in auth; real-time |
| Hosting | Vercel | Zero-config deploy from GitHub; free tier covers MVP |
| Payments | Stripe | Industry standard; best docs; supports invoicing APIs |

## Cost Projection
| Stage | Monthly Cost |
|---|---|
| Development | $0 (all free tiers) |
| Launch (100 users) | $25 (Supabase Pro) |
| Growth (1K users) | $95 (Supabase + Vercel Pro + Resend) |
```

## Cross-References

- **Depends on:** [03-planning/mvp-scope](../mvp-scope/) — What you're building determines what tech you need
- **Feeds into:** [05-development/](../../05-development/) — Developers build with this stack
- **Related:** [06-infrastructure/](../../06-infrastructure/) — Infrastructure choices follow from tech stack
- **Related:** [06-infrastructure/security](../../06-infrastructure/security/) — Security requirements may constrain choices
