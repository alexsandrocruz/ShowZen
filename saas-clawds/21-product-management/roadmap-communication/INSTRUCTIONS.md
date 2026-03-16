---
department: 21-product-management
subfolder: roadmap-communication
priority: P1
stage: post-launch
estimated_time: "1-2 days"
requires: ["03-planning/product-roadmap", "20-customer-success/quarterly-business-reviews"]
---

# Roadmap Communication

## Overview

This folder is for **sharing the product roadmap** — internally (engineering, sales, support) and externally (customers, prospects). A communicated roadmap builds trust and sets expectations.

## Questions to Answer

1. **Do you have a public roadmap?** (Transparent vs internal only?)
2. **What's on the public roadmap?** (High-level themes? Specific features?)
3. **How do you gather roadmap feedback?** (Voting? Comments?)
4. **How often do you update the roadmap?** (Quarterly? Monthly?)
5. **How do you communicate internally?** (All-hands, Slack, Notion?)
6. **How do you handle "no" or "not now"?** (Explained, delayed, declined?)
7. **Do you show timelines?** (Q1, Q2 or vague "coming soon"?)

## Output Template

Create a `README.md` in this folder with:

```markdown
# Roadmap Communication: [Your SaaS Name]

## Public Roadmap
- **URL:** 
- **Tool:** [Canny, Productboard, Notion, custom]
- **Update cadence:** [Monthly / Quarterly]
- **Format:** [Now / Next / Later or Quarters]

## Roadmap Structure
| Column | Definition | Examples |
|---|---|---|
| Now | In progress, shipping soon | |
| Next | Planned, next quarter | |
| Later | Backlog, considering | |
| Declined | Not planned, with reason | |

## Internal Communication
| Audience | Channel | Cadence |
|---|---|---|
| Engineering | Slack, Sprint planning | Weekly |
| Sales | Slack, QBR prep | As needed |
| Support | Changelog, training | Per release |
| All-hands | Roadmap review | Monthly/Quarterly |

## External Communication
| Channel | Content |
|---|---|
| Public roadmap | Themes, features, voting |
| Email | Major releases, milestones |
| In-app | Release notes, announcements |
| QBR / Sales | Custom roadmap for account |
| Blog | Big launches, vision |
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Canny** | Public roadmap, voting | $50+/mo |
| **Productboard** | Roadmap + feedback | $49+/mo |
| **Notion** | Simple public roadmap | Free |
| **GitHub Projects** | Dev-centric roadmap | Free |
| **Figma / Miro** | Visual roadmap | $ |

## Agent Instructions

1. Read [03-planning/product-roadmap](../../03-planning/product-roadmap/) for roadmap content
2. Read [20-customer-success/quarterly-business-reviews](../../20-customer-success/quarterly-business-reviews/) for QBR roadmap sharing
3. Define public vs internal roadmap (recommend: public for trust)
4. Use Now/Next/Later or quarter-based structure
5. Document internal communication (engineering, sales, support)
6. Define how to handle "declined" requests (transparency builds trust)
7. Cross-ref [21-product-management/feedback-loops](../feedback-loops/) for voting

## Cross-References

- [03-planning/product-roadmap](../../03-planning/product-roadmap/) — Roadmap content
- [21-product-management/feedback-loops](../feedback-loops/) — Feedback → roadmap
- [23-documentation/changelog](../../23-documentation/changelog/) — Release communication
