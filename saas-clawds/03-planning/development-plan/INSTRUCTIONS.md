---
department: 03-planning
subfolder: development-plan
priority: P1
stage: planning
estimated_time: "1-2 days"
requires:
  - 03-planning/mvp-scope
  - 03-planning/tech-stack
---

# Development Plan

## Overview

This folder is for creating your **sprint plan and development milestones** — the week-by-week execution plan that turns your MVP scope into a shipped product. A development plan isn't a contract; it's a forcing function for sequencing work, surfacing dependencies, and setting realistic deadlines.

The best development plans are **opinionated about order** and **flexible about timeline**. You should know exactly what to build in Sprint 1 vs. Sprint 3, even if the exact ship dates shift by a week.

**Plan in 1-2 week sprints.** Anything longer and you lose urgency. Anything shorter and you spend all your time planning instead of building.

## Questions to Answer

1. **How many developers are working on this?** Solo founder, 2-person team, small team?
2. **How many hours per week can be dedicated to building?** Full-time (40hrs), part-time (20hrs), side project (10hrs)?
3. **What's your target launch date?** Working backward from this creates urgency and prevents scope creep.
4. **What needs to be done before code starts?** Design, architecture decisions, environment setup?
5. **What's your biggest technical risk?** The feature or integration you're least sure about. Build it first.
6. **How will you track progress?** Tool choice (Linear, GitHub Projects, Notion, sticky notes).
7. **What does "done" mean for each sprint?** Deployed? Code complete? Reviewed? Tested?

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# Development Plan: [Your SaaS Name]

## Plan Overview
- **Team:** [N] developer(s), [hours/week] per person
- **Sprint length:** [1 or 2 weeks]
- **Start date:** [Date]
- **Target launch date:** [Date]
- **Total sprints to MVP:** [N]

## Pre-Development Checklist
- [ ] Tech stack decisions finalized ([link to tech-stack])
- [ ] Design wireframes complete for core flows ([link to wireframes])
- [ ] Development environment set up (repo, CI/CD, staging)
- [ ] Database schema designed
- [ ] API contracts defined (if applicable)
- [ ] Third-party accounts created (Stripe, auth provider, hosting, etc.)

## Sprint Plan

### Sprint 0: Foundation (Week 1)
**Goal:** Project setup, dev environment, and data model
- [ ] Initialize repository with chosen framework
- [ ] Set up CI/CD pipeline (GitHub Actions → Vercel/Railway)
- [ ] Design and implement database schema
- [ ] Set up authentication (signup, login, session management)
- [ ] Create basic layout and navigation shell
- **Deliverable:** Authenticated user can log in and see empty dashboard

### Sprint 1: Core Feature (Weeks 2-3)
**Goal:** Build the primary value-delivering feature
- [ ] [Core feature task 1]
- [ ] [Core feature task 2]
- [ ] [Core feature task 3]
- [ ] Basic error handling and loading states
- **Deliverable:** [User can accomplish the core job-to-be-done]

### Sprint 2: Secondary Features (Weeks 3-4)
**Goal:** Build supporting features that complete the core experience
- [ ] [Supporting feature 1]
- [ ] [Supporting feature 2]
- [ ] [Integration with key third-party service]
- **Deliverable:** [End-to-end workflow is functional]

### Sprint 3: Polish & Launch Prep (Week 5)
**Goal:** Bug fixes, onboarding, and deployment
- [ ] Onboarding flow (first-time user experience)
- [ ] Error handling, edge cases, and input validation
- [ ] Email notifications (transactional)
- [ ] Landing page updates with real product screenshots
- [ ] Performance testing and optimization
- [ ] Security review (auth, data access, input sanitization)
- **Deliverable:** Launch-ready product

## Milestone Tracker

| Milestone | Target Date | Actual Date | Status |
|---|---|---|---|
| Development environment ready | [Date] | | ⬜ |
| Core feature working (internal demo) | [Date] | | ⬜ |
| End-to-end flow complete | [Date] | | ⬜ |
| Beta-ready (invite first users) | [Date] | | ⬜ |
| Launch-ready | [Date] | | ⬜ |

## Risk Register

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| [Technical risk: complex integration] | | | [Build a spike/proof-of-concept first] |
| [Timeline risk: underestimated effort] | | | [Cut scope from Sprint 2/3, not Sprint 1] |
| [External risk: API changes/outages] | | | [Abstract integrations behind an interface] |

## Definition of Done (per sprint)
- [ ] All tasks completed or explicitly deferred with rationale
- [ ] Code reviewed (if team > 1)
- [ ] No critical bugs
- [ ] Deployed to staging environment
- [ ] Sprint retro completed (what worked, what didn't, adjustments)

## Sprint Retro Template
| Sprint | What Went Well | What Didn't | Action Items |
|---|---|---|---|
| Sprint 0 | | | |
| Sprint 1 | | | |
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Linear** | Sprint planning, issue tracking, roadmap views | Free / $8/user/mo |
| **GitHub Projects** | Kanban boards integrated with code | Free |
| **Jira** | Enterprise-grade project management | Free / $8.15/user/mo |
| **Notion** | Flexible sprint boards and documentation | Free / $10/mo |
| **Toggl** | Time tracking per task/sprint | Free / $10/user/mo |

**Books:** *Shape Up* by Basecamp (free at basecamp.com/shapeup)

## Agent Instructions

When populating this folder for a founder:

1. Read `company-profile.md` for team size, availability, and timeline constraints
2. Read `03-planning/mvp-scope/README.md` for the feature list to be built
3. Read `03-planning/tech-stack/README.md` for technology choices
4. Sequence work so the riskiest/most uncertain features are built first (de-risk early)
5. Create realistic sprint plans — solo founders building part-time need longer sprints
6. Include a Sprint 0 for setup — founders always underestimate environment configuration time
7. Define clear deliverables for each sprint (not just task lists)
8. Include a milestone tracker with specific dates
9. Identify the top 3 risks and write concrete mitigations (not platitudes)
10. Add buffer: a plan that uses 100% of available time will always slip

## Example Output (Abbreviated)

```markdown
# Development Plan: InvoiceBot

## Plan Overview
- **Team:** 1 developer (founder), 30 hours/week
- **Sprint length:** 2 weeks
- **Start date:** April 1, 2026
- **Target launch date:** May 27, 2026
- **Total sprints:** 4 (8 weeks)

### Sprint 1: Core Invoicing (Weeks 2-3)
**Goal:** Users can create and send branded invoices
- [ ] Invoice data model (client, line items, totals, tax)
- [ ] Invoice creation form with live preview
- [ ] PDF generation from invoice data
- [ ] Email send with PDF attachment
- **Deliverable:** User can create an invoice and email it as PDF
```

## Cross-References

- **Depends on:** [03-planning/mvp-scope](../mvp-scope/) and [03-planning/tech-stack](../tech-stack/)
- **Feeds into:** [05-development/](../../05-development/) — This plan drives the build
- **Related:** [04-design/wireframes](../../04-design/wireframes/) — Design work should lead or parallel Sprint 0-1
- **Related:** [06-infrastructure/ci-cd](../../06-infrastructure/ci-cd/) — CI/CD setup is part of Sprint 0
- **Related:** [07-testing/](../../07-testing/) — Testing cadence aligns with sprint cycles
