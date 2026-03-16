---
department: 21-product-management
subfolder: product-ops
priority: P2
stage: growth
estimated_time: "2-3 days"
requires: ["21-product-management/feedback-loops", "03-planning/development-plan"]
---

# Product Ops

## Overview

This folder is for **product operations** — tooling, workflows, cross-functional rituals, and sprint ceremonies. Product ops ensures product runs smoothly as the team scales.

## Questions to Answer

1. **What tools does product use?** (Roadmap, feedback, analytics, docs?)
2. **What's your sprint cadence?** (If applicable)
3. **What ceremonies do you run?** (Sprint planning, retro, roadmap review?)
4. **How does product work with engineering?** (Prioritization, specs, handoff?)
5. **How does product work with design?** (Brief, review, handoff?)
6. **What specs do you write?** (PRD, ticket, design doc?)
7. **Who owns product ops?** (PM, founder, ops person?)

## Output Template

Create a `README.md` in this folder with:

```markdown
# Product Ops: [Your SaaS Name]

## Product Stack
| Function | Tool | Owner |
|---|---|---|
| Roadmap | | |
| Feedback | | |
| Analytics | | |
| Specs / Docs | | |
| Design | | |
| Dev / Tickets | | |

## Ceremonies
| Ceremony | Cadence | Attendees | Purpose |
|---|---|---|---|
| Sprint planning | | | |
| Backlog refinement | | | |
| Roadmap review | | | |
| Retrospective | | | |
| All-hands roadmap | | | |

## Spec / Handoff Process
| Artifact | Format | Owner | Review |
|---|---|---|---|
| Feature request | Ticket / PRD | PM | |
| Design brief | Doc / Figma | Design | PM |
| Engineering spec | Doc / Ticket | Eng | PM |
| Release checklist | Checklist | PM/Eng | |

## Cross-Functional Workflows
- **Product → Engineering:** [How prioritization is communicated]
- **Product → Design:** [How design requests flow]
- **Product → Support:** [How support feedback reaches product]
- **Product → Sales:** [How roadmap is shared for deals]
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Linear** | Issues, roadmap, sprints | $8+/user |
| **Notion** | Docs, specs, wiki | Free |
| **Figma** | Design, handoff | Free tier |
| **Productboard** | Roadmap, feedback | $49+/mo |
| **Slack** | Async communication | Free |
| **Loom** | Async video, specs | Free tier |

## Agent Instructions

1. Read [21-product-management/feedback-loops](../feedback-loops/) for feedback tooling
2. Read [03-planning/development-plan](../../03-planning/development-plan/) for sprint structure
3. List product stack (6–8 tools)
4. Define 4–6 ceremonies with cadence and attendees
5. Document spec/handoff process (request → design → eng)
6. Define cross-functional workflows
7. Cross-ref [16-scaling/systems](../../16-scaling/systems/) for broader ops

## Cross-References

- [03-planning/development-plan](../../03-planning/development-plan/) — Sprint plan
- [21-product-management/feedback-loops](../feedback-loops/) — Feedback tooling
- [16-scaling/systems](../../16-scaling/systems/) — Broader systems
