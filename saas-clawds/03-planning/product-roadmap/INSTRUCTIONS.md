---
department: 03-planning
subfolder: product-roadmap
priority: P0
stage: planning
estimated_time: "2-3 days"
requires:
  - 01-idea/opportunity-mapping
  - 02-validation/customer-interviews
---

# Product Roadmap

## Overview

This folder is for creating a **time-based roadmap** for your product development. The roadmap is your strategic plan — it communicates what you're building, in what order, and why. It aligns your team, sets expectations with early customers, and prevents scope creep by making trade-offs explicit.

Use the **Now / Next / Later** framework instead of rigid Gantt charts. Early-stage roadmaps need flexibility — you'll learn things during development that change your priorities. The Now/Next/Later approach keeps you focused without locking you into commitments you can't keep.

**Now** = Currently building (this sprint/month)
**Next** = Coming soon (next 1-3 months)
**Later** = On the horizon (3-6 months+)

## Questions to Answer

1. **What must be in your first release?** The absolute minimum to deliver the core value proposition.
2. **What do customers expect within the first 3 months?** Features that came up repeatedly in interviews.
3. **What would make your product 10x better?** Features that differentiate you but aren't essential for launch.
4. **What are your quarterly milestones?** Concrete achievements tied to business outcomes, not just features shipped.
5. **Who is the roadmap for?** Internal team? Investors? Customers? The audience changes the level of detail.
6. **What are the key dependencies?** Features that block other features, external integrations, regulatory requirements.
7. **What are you explicitly NOT building?** The "not doing" list is as important as the "doing" list.

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# Product Roadmap: [Your SaaS Name]

## Vision Statement
> [One sentence: Where is this product going in 12-18 months?]

## Now / Next / Later

### 🔨 NOW — [Current Quarter]
*Building right now. Committed and in progress.*

| Feature/Initiative | Description | Owner | Target Date | Status |
|---|---|---|---|---|
| [Core feature 1] | [What and why] | [Who] | [Date] | In Progress |
| [Core feature 2] | [What and why] | [Who] | [Date] | Not Started |

### 📋 NEXT — [Next Quarter]
*High confidence these are coming. Scoped but not started.*

| Feature/Initiative | Description | Why Now | Dependencies |
|---|---|---|---|
| | | | |

### 🔮 LATER — [Future]
*Directional. Will be refined as we learn more.*

| Feature/Initiative | Description | Why It Matters |
|---|---|---|
| | | |

### 🚫 NOT DOING (Explicitly Deferred)
| Feature | Why We're Not Building It | Revisit When |
|---|---|---|
| | | |

## Quarterly Milestones

| Quarter | Business Milestone | Product Milestone | Key Metric |
|---|---|---|---|
| Q[X] (current) | [e.g., First 50 paying users] | [e.g., MVP launch] | [e.g., 50 signups] |
| Q[X+1] | [e.g., $5K MRR] | [e.g., Integration V1] | [e.g., 200 active users] |
| Q[X+2] | [e.g., Product-market fit signal] | [e.g., Self-serve onboarding] | [e.g., NPS > 40] |
| Q[X+3] | [e.g., Seed fundraise] | [e.g., API + Marketplace] | [e.g., $20K MRR] |

## Key Dependencies Map
```
[Feature A] ──blocks──→ [Feature B]
[External API] ──blocks──→ [Integration Feature]
[Design System] ──blocks──→ [UI Polish Sprint]
```

## Roadmap Review Cadence
- **Weekly:** Check progress against NOW items
- **Monthly:** Review and adjust NEXT items
- **Quarterly:** Full roadmap review — promote, defer, or cut
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Linear** | Issue tracking with roadmap views | Free / $8/user/mo |
| **Notion** | Flexible roadmap databases and docs | Free / $10/mo |
| **ProductBoard** | Customer-driven roadmap prioritization | $25/maker/mo |
| **Miro** | Visual roadmap collaboration | Free / $8/mo |
| **GitHub Projects** | Dev-integrated roadmap for technical founders | Free |

**Frameworks:** Now/Next/Later, RICE Scoring, Opportunity Solution Trees

## Agent Instructions

When populating this folder for a founder:

1. Read `company-profile.md`, all `01-idea/` documents, and `02-validation/` results
2. Build the NOW section from the MVP scope (if completed) or customer interview insights
3. Populate NEXT with features that came up in validation but aren't core MVP
4. Fill LATER with aspirational features from competitor analysis and opportunity mapping
5. Create a "NOT DOING" list — explicitly state what you're deferring and why
6. Set quarterly milestones that tie product milestones to business outcomes (revenue, users, metrics)
7. Identify at least 3 key dependencies that could block progress
8. Keep the roadmap realistic for the founder's team size and resources (from company profile)
9. Use specific dates or quarter references, not vague "soon" or "future"

## Example Output (Abbreviated)

```markdown
### 🔨 NOW — Q2 2026
| Feature | Description | Target | Status |
|---|---|---|---|
| Time tracking integration | Auto-detect hours from Figma activity | May 15 | In Progress |
| Invoice generator | Create branded PDF invoices from tracked time | May 30 | Not Started |
| Payment link | Stripe-powered "Pay Now" button on invoices | June 10 | Not Started |

### 🚫 NOT DOING
| Feature | Why | Revisit |
|---|---|---|
| Mobile app | Web-first; designers work on desktop | Q4 2026 |
| Multi-currency | 85% of initial niche is US-based | Q3 2026 |
```

## Cross-References

- **Depends on:** [01-idea/opportunity-mapping](../../01-idea/opportunity-mapping/) and [02-validation/customer-interviews](../../02-validation/customer-interviews/)
- **Feeds into:** [03-planning/feature-prioritization](../feature-prioritization/) — Roadmap items need scoring
- **Related:** [03-planning/mvp-scope](../mvp-scope/) — MVP scope defines the NOW section
- **Related:** [03-planning/development-plan](../development-plan/) — Roadmap drives sprint planning
