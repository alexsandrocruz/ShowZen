---
department: 21-product-management
subfolder: feedback-loops
priority: P0
stage: post-launch
estimated_time: "1-2 weeks"
requires: ["14-retention/customer-support", "13-analytics/user-tracking"]
---

# Feedback Loops

## Overview

This folder is for **capturing, synthesizing, and prioritizing product feedback** — feature requests, bug reports, and user suggestions. A structured feedback loop ensures you build what matters and close the loop with users.

## Questions to Answer

1. **Where does feedback come in?** (Support, in-app, email, community?)
2. **How do you triage feedback?** (P0/P1/P2? By impact?)
3. **Do you use a feedback voting board?** (Canny, Productboard?)
4. **How do you close the loop?** (Notify users when shipped?)
5. **Who owns feedback triage?** (PM, support, founder?)
6. **How often do you review feedback?** (Weekly, bi-weekly?)
7. **How do you connect feedback to roadmap?** (Feature request → roadmap item?)

## Output Template

Create a `README.md` in this folder with:

```markdown
# Feedback Loops: [Your SaaS Name]

## Feedback Sources
| Source | Volume | Owner | Tool |
|---|---|---|---|
| In-app widget | | | |
| Support tickets | | | |
| Email | | | |
| Community / Slack | | | |
| Sales conversations | | | |
| NPS/CSAT comments | | | |

## Triage Process
| Step | Owner | Cadence |
|---|---|---|
| Collect | | Continuous |
| Triage (tag, prioritize) | | Weekly |
| Route to roadmap or backlog | | Bi-weekly |
| Close loop (notify when shipped) | | Per release |

## Prioritization Framework
| Criterion | Weight | Example |
|---|---|---|
| Impact | | High = many users, big pain |
| Effort | | Low = quick win |
| Strategic fit | | Aligns with vision |
| Revenue potential | | Upsell, retention |
| Customer importance | | Enterprise ask |

## Feedback Board (If Used)
- **Tool:** [Canny, Productboard, GitHub, etc.]
- **URL:** 
- **Voting:** Yes / No
- **Response SLA:** 
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Canny** | Feature requests, voting | $50+/mo |
| **Productboard** | Product management, feedback | $49+/mo |
| **Notion** | Simple feedback log | Free |
| **GitHub Issues** | Dev-centric feedback | Free |
| **Intercom / Zendesk** | Support → feedback routing | $ |
| **Hotjar / Pendo** | In-app feedback | $ |

## Agent Instructions

1. Read [14-retention/customer-support](../../14-retention/customer-support/) for support channels
2. Read [13-analytics/user-tracking](../../13-analytics/user-tracking/) for in-app feedback
3. List 5–7 feedback sources with owners
4. Define triage process (collect → triage → roadmap → close loop)
5. Create prioritization framework (RICE or custom)
6. Recommend feedback tool (Canny for voting, Notion for simple)
7. Cross-ref [03-planning/feature-prioritization](../../03-planning/feature-prioritization/) for prioritization alignment

## Cross-References

- [03-planning/feature-prioritization](../../03-planning/feature-prioritization/) — Prioritization framework
- [21-product-management/roadmap-communication](../roadmap-communication/) — Share roadmap
- [14-retention/customer-support](../../14-retention/customer-support/) — Support as feedback source
