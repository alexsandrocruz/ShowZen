---
department: 16-scaling
subfolder: systems
priority: P1
stage: post-launch (document processes as you build them)
estimated_time: 4-6 hours initial framework, ongoing documentation
requires: []
---

# Systems — Building Repeatable Processes and SOPs for Every Function

## Overview

This folder contains your systems and process documentation strategy — the operating manual for your company. Systems are what allow you to scale without the founder being a bottleneck for every decision. If a process lives only in someone's head, it doesn't scale. If it's documented, anyone can learn it, improve it, and execute it consistently.

The goal isn't bureaucracy — it's freedom. Well-documented systems free you to focus on strategy and growth instead of explaining the same process for the tenth time. They enable hiring (new people can onboard faster), quality consistency (things get done the same way every time), and delegation (you can hand off functions with confidence).

## Questions to Answer

Before building systems documentation, the founder needs to answer:

1. **What processes need documentation most urgently?** (Start with the processes you do most frequently, the ones you'd need to teach a new hire, and the ones where mistakes are costly.)
2. **What is your knowledge management tool?** (Notion, Confluence, Slite, Google Docs — choose one and commit. The worst system is having processes scattered across 5 tools.)
3. **Who owns each process?** (Every SOP needs an owner who keeps it updated. Undocumented processes are owned by whoever remembers them — which is fragile.)
4. **What is the review cadence?** (SOPs rot fast. Review quarterly at minimum. If a process changes and the SOP doesn't, the SOP becomes actively harmful.)
5. **What is the system of record for each function?** (Where is the "source of truth" for customers? Revenue? Product data? Code? Tasks? Define this clearly to avoid data conflicts.)
6. **How do you balance documentation with agility?** (Over-documenting slows you down. Under-documenting creates chaos. Document the "what" and "why" — let smart people figure out the "how" details.)

## Output Template

Generate a comprehensive systems strategy with these sections:

### 1. SOP Template

Every Standard Operating Procedure should follow this format:

```
# [Process Name]

**Owner:** [Name/Role]
**Last Updated:** [Date]
**Review Cadence:** [Quarterly/Monthly]
**Estimated Time:** [How long this process takes]

## Purpose
Why this process exists and what outcome it produces.

## When to Use
Trigger conditions — when should someone execute this process.

## Prerequisites
What needs to be true before starting.

## Steps
1. [Step 1 — specific, actionable]
2. [Step 2]
3. [Step 3]
...

## Tools Used
- [Tool and what it's used for in this process]

## Common Mistakes
- [Mistake 1 and how to avoid it]

## Related Processes
- [Link to related SOP]
```

### 2. Process Inventory by Department

| Department | Process | Owner | SOP Status | Priority |
|---|---|---|---|---|
| Development | Code review and merge workflow | Engineering Lead | ✅ Documented | P0 |
| Development | Deployment to production | Engineering Lead | ✅ Documented | P0 |
| Development | Bug triage and prioritization | Product | 🔄 In progress | P0 |
| Support | Ticket handling and escalation | Support Lead | ✅ Documented | P0 |
| Support | Refund processing | Support Lead | 📋 Planned | P1 |
| Marketing | Content publishing workflow | Marketing | 📋 Planned | P1 |
| Marketing | Social media posting | Marketing | ❌ Not documented | P2 |
| Finance | Monthly financial close | Founder/Finance | 📋 Planned | P1 |
| Finance | Expense approval | Founder | ❌ Not documented | P2 |
| Sales | Demo to close workflow | Sales/Founder | 📋 Planned | P1 |
| HR/Ops | New employee onboarding | Founder/Ops | 📋 Planned | P1 |

### 3. Knowledge Base Structure

```
📁 Company Wiki
├── 📁 Company
│   ├── Mission, Vision, Values
│   ├── Org chart
│   ├── Team directory
│   └── Company policies
├── 📁 Engineering
│   ├── Development workflow
│   ├── Code standards
│   ├── Deployment process
│   └── Architecture decisions (ADRs)
├── 📁 Product
│   ├── Roadmap
│   ├── Feature specs
│   └── User research
├── 📁 Marketing
│   ├── Brand guidelines
│   ├── Content workflow
│   └── Channel playbooks
├── 📁 Sales
│   ├── Sales playbook
│   ├── Objection handling
│   └── Demo script
├── 📁 Support
│   ├── Ticket handling SOP
│   ├── Escalation matrix
│   └── Common issue resolutions
└── 📁 Operations
    ├── Tools and access
    ├── Expense policy
    └── Onboarding checklist (new hires)
```

### 4. System-of-Record Definitions

| Function | System of Record | Tool | Owner |
|---|---|---|---|
| Customer data | CRM | [HubSpot/Attio/Salesforce] | Sales/CS |
| Revenue data | Billing system | [Stripe/Paddle] | Finance |
| Product code | Version control | [GitHub/GitLab] | Engineering |
| Task management | Project tool | [Linear/Jira/Asana] | Product |
| Knowledge base | Wiki | [Notion/Confluence] | Ops |
| Customer comms | Helpdesk | [Intercom/Zendesk] | Support |
| Analytics | Analytics platform | [Mixpanel/PostHog] | Product |
| HR/People | HRIS | [Gusto/Rippling/Deel] | Ops |

### 5. Documentation Culture Guidelines

- **Document as you go** — don't wait for a "documentation sprint." Write the SOP the first time you do something twice.
- **Good enough > perfect** — a rough SOP is infinitely better than no SOP. Improve it over time.
- **Screenshots and Loom videos** — show, don't just tell. A 2-minute Loom is worth 500 words.
- **Single source of truth** — one place for each type of information. If it exists in two places, one of them is wrong.
- **Ownership is mandatory** — every document has an owner. If the owner leaves, ownership transfers.

### 6. Quarterly Review Checklist

- [ ] Review all SOPs — are they still accurate?
- [ ] Archive obsolete processes
- [ ] Identify new processes that need documentation
- [ ] Verify system-of-record assignments are still correct
- [ ] Check tool access — does everyone have what they need?
- [ ] Gather feedback on documentation quality from the team

## Recommended Tools

| Tool | Purpose | Pricing |
|---|---|---|
| **Notion** | All-in-one wiki, docs, and project management | Free for small teams, $8+/user/mo |
| **Confluence** | Enterprise wiki and knowledge management | $5.75+/user/mo |
| **Slite** | Simple, focused team knowledge base | Free tier, $8+/user/mo |
| **Loom** | Video walkthroughs for processes | Free tier, $12.50+/user/mo |
| **Scribe** | Auto-generate SOPs from screen recordings | Free tier, $23+/user/mo |
| **Tettra** | Internal knowledge base with Slack integration | $4+/user/mo |
| **GitBook** | Documentation platform (good for technical teams) | Free tier, $6.70+/user/mo |

## Agent Instructions

When populating this folder, the AI agent should:

1. Read `company-profile.md` to understand the team size, stage, and current tools
2. Scan README files across all departments for processes that should be documented
3. Create the process inventory covering every department
4. Design the knowledge base structure appropriate to the company's size
5. Define the system-of-record for each function based on tools already in use
6. Write the SOP template with a real example
7. Draft documentation culture guidelines
8. Output everything as `README.md` in this folder

## Example Output (Snippet)

```markdown
## SOP: Production Deployment

**Owner:** Lead Engineer
**Last Updated:** 2025-01-15
**Review Cadence:** Monthly

### Steps
1. Create PR against `main` branch with all changes
2. Ensure all CI checks pass (tests, linting, type checking)
3. Get at least 1 code review approval
4. Merge PR — this triggers staging deployment automatically
5. Verify on staging environment (5 min smoke test)
6. Promote staging to production via deploy command: `make deploy-prod`
7. Monitor error rates and key metrics for 15 minutes post-deploy
8. If errors spike >2x baseline, rollback: `make rollback-prod`

### Common Mistakes
- Deploying on Friday afternoon (don't — save it for Monday)
- Skipping the staging verification (always verify)
- Not monitoring post-deploy (set a 15-min timer)
```

## Cross-References

- All departments — every department has processes to document
- `16-scaling/hiring` — SOPs enable faster onboarding for new hires
- `16-scaling/automation` — documented processes are easier to automate
- `06-infrastructure/ci-cd` — CI/CD is a key system that needs documentation
- `05-development/backend` — engineering processes are often the first to document
