---
department: 14-retention
subfolder: customer-support
priority: P0
stage: pre-launch (set up basics before launch, scale after)
estimated_time: 4-6 hours initial setup, ongoing operation
requires:
  - 08-launch/public-release
---

# Customer Support — Building a Retention Engine, Not a Cost Center

## Overview

This folder contains your customer support strategy — the system that turns frustrated users into loyal advocates. Support isn't a cost center; it's a retention engine. Every support interaction is a moment of truth: handle it well and the customer trusts you more. Handle it poorly and they're gone.

In early-stage SaaS, the founder *is* support — and that's actually an advantage. Every support ticket is a direct line to understanding what's broken, what's confusing, and what users actually need. Later, you'll build a team. But the principles you establish now — speed, empathy, resolution — will define your support culture forever.

## Questions to Answer

Before building the support system, the founder needs to answer:

1. **What support channels will you offer?** (In-app chat, email, phone, self-service knowledge base? Start with 1-2 channels and do them well. Don't spread thin across 5 channels.)
2. **What are your response time SLAs?** (Chat: <2 minutes. Email: <4 hours for paying customers, <24 hours for free. Define tiers based on plan.)
3. **What does your help center content plan look like?** (Top 20 questions that cover 80% of support volume. Write these before launch.)
4. **What is your escalation process?** (L1: frontline agent, L2: senior agent, L3: engineering. When does each escalation happen? What are the time limits?)
5. **How will you measure support quality?** (CSAT after every conversation? NPS quarterly? First response time? Resolution time? First-contact resolution rate?)
6. **How will support insights feed back to product?** (Tagging tickets by category, weekly review of top issues, direct line from support to product team.)
7. **When do you hire your first support person?** (Typically when support takes >2 hours/day of founder time, or when response times consistently miss SLAs.)

## Output Template

Generate a comprehensive support strategy with these sections:

### 1. Support Playbook

**Support Philosophy:** [1-2 sentences about your approach — e.g., "Fast, human, and empowering. Every interaction should leave the customer better off and more capable of self-serving next time."]

**Channel Strategy:**
| Channel | Availability | SLA (Paid) | SLA (Free) | Tool |
|---|---|---|---|---|
| In-app chat | Business hours | <2 min first response | <15 min | |
| Email | 24/7 (async) | <4 hours | <24 hours | |
| Knowledge base | 24/7 (self-serve) | — | — | |
| Phone/video | By appointment | Same day | Not offered | |

### 2. SLA Definitions

| Priority | Description | First Response | Resolution Target | Examples |
|---|---|---|---|---|
| P0 — Critical | Service down, data loss risk | <15 min | <2 hours | Outage, security breach |
| P1 — High | Major feature broken, blocking work | <1 hour | <8 hours | Can't create projects, billing error |
| P2 — Medium | Feature partially broken, workaround exists | <4 hours | <24 hours | Export failing for certain formats |
| P3 — Low | Question, feature request, minor issue | <8 hours | <48 hours | "How do I...", UI glitch |

### 3. Help Center Content Plan (Top 20 Articles)

| # | Category | Article Title | Covers |
|---|---|---|---|
| 1 | Getting Started | Quick start guide | Signup → first value in 5 minutes |
| 2 | Getting Started | [Product] 101 — core concepts | Key terms and mental model |
| 3 | Account | How to update billing and payment info | Payment method, invoices |
| 4 | Account | How to invite and manage team members | Roles, permissions |
| 5 | Account | How to upgrade, downgrade, or cancel | Self-serve plan management |
| 6-10 | Features | [One article per core feature] | Setup, usage, tips |
| 11-15 | Troubleshooting | [Top 5 common issues and fixes] | Step-by-step resolution |
| 16-18 | Integrations | [Top 3 integration setup guides] | Connect, configure, test |
| 19 | API | API quickstart guide | Auth, first call, rate limits |
| 20 | FAQ | Frequently asked questions | Catch-all for common queries |

### 4. Escalation Matrix

| Condition | Action | Escalate To | Time Limit |
|---|---|---|---|
| Agent can't resolve in 15 min | Internal consult with senior agent | L2 | +30 min |
| Bug confirmed (reproducible) | File bug ticket, notify user of timeline | Engineering (L3) | +4 hours |
| Customer threatens churn | Escalate with context and save offer | Founder / CS Lead | Immediate |
| Security/privacy concern | Escalate immediately | Engineering + Legal | Immediate |
| Feature request (>3 requests for same thing) | Create feature request ticket | Product | Weekly review |

### 5. CSAT Measurement Plan

- **Trigger:** Automatic survey after every resolved conversation
- **Question:** "How would you rate your support experience?" (1-5 stars)
- **Optional follow-up:** "What could we have done better?" (free text)
- **Target:** CSAT >90% (4+ stars)
- **Review cadence:** Weekly by support lead, monthly by leadership
- **Action threshold:** Any week with CSAT <85% triggers a deep dive

### 6. Support Staffing Plan

| Stage | Volume | Coverage | Team |
|---|---|---|---|
| Pre-launch | 0-10 tickets/day | Founder handles all | Founder |
| Early traction | 10-30 tickets/day | Founder + part-time hire | 1 FTE |
| Growth | 30-100 tickets/day | Dedicated support team | 2-3 FTE |
| Scale | 100+ tickets/day | Tiered support org with specialists | 5+ FTE |

## Recommended Tools

| Tool | Purpose | Pricing |
|---|---|---|
| **Intercom** | In-app chat, help center, ticketing | $39+/mo |
| **Zendesk** | Full-featured helpdesk and knowledge base | $19+/mo per agent |
| **Help Scout** | Simple, human-friendly helpdesk | $20+/mo per user |
| **Freshdesk** | Helpdesk with free tier | Free for up to 10 agents |
| **Crisp** | Live chat + helpdesk for startups | Free tier, $25+/mo |
| **Plain** | Modern support tool built for SaaS | $39+/mo |
| **Notion / GitBook** | Knowledge base / help center | Free / $6.70+/mo |

## Agent Instructions

When populating this folder, the AI agent should:

1. Read `company-profile.md` to understand the product, team size, and current stage
2. Read `08-launch/public-release/README.md` for launch timeline and expected initial volume
3. Design the channel strategy based on product type and team capacity
4. Define SLA tiers appropriate to the product's stage
5. Write the top 20 help center article plan with titles and content outlines
6. Create the escalation matrix with clear triggers and owners
7. Design the CSAT measurement approach
8. Recommend a support tool based on budget and needs
9. Output everything as `README.md` in this folder

## Example Output (Snippet)

```markdown
## Support Interaction Template

**Greeting (first response):**
Hi {first_name}! Thanks for reaching out. I can see [restate the issue briefly]. Let me help you with that.

**Resolution:**
[Clear steps to resolve, with screenshots if needed]

**Closing:**
That should be all sorted now! Let me know if you run into anything else. Happy to help anytime.

## Weekly Support Metrics (Jan 20-26)

| Metric | Value | Target | Status |
|---|---|---|---|
| Total conversations | 84 | — | — |
| Avg. first response time | 3.2 min | <5 min | ✅ |
| Avg. resolution time | 22 min | <30 min | ✅ |
| CSAT | 94% | >90% | ✅ |
| First-contact resolution | 78% | >75% | ✅ |
| Top issue category | Billing (23%) | — | → Write FAQ |
```

## Cross-References

- `08-launch/public-release` — support needs to be ready before public launch
- `14-retention/churn-reduction` — support quality directly impacts churn
- `14-retention/user-onboarding` — many support tickets come from onboarding confusion
- `13-analytics/kpi-dashboard` — support metrics belong on the operational dashboard
- `04-design/ux-flows` — recurring support issues signal UX problems to fix
