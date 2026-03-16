---
department: 03-planning
subfolder: mvp-scope
priority: P0
stage: planning
estimated_time: "1-2 days"
requires:
  - 02-validation/customer-interviews
  - 03-planning/feature-prioritization
---

# MVP Scope

## Overview

This folder is for defining your **Minimum Viable Product** — the smallest thing you can build that proves your core value proposition to real users. The MVP is not a crappy v1 of your dream product. It's a focused, intentional slice that tests your biggest assumption.

The hardest part of MVP scoping isn't deciding what to include — it's deciding what to **cut**. Every feature you add delays launch, increases complexity, and dilutes focus. The question to ask for every feature: "Can we prove our core value without this?"

**The litmus test:** If you can describe your MVP in one sentence, you've scoped it right. If you need a paragraph, it's too big.

## Questions to Answer

1. **What is the single core value your MVP must deliver?** One job to be done, not three.
2. **What is the one sentence MVP description?** "[Product] lets [persona] do [core action] so they can [outcome]."
3. **What are the absolute must-have features?** (Maximum 3-5. Seriously.)
4. **What are you cutting that hurts to cut?** These are the "yes, but..." features. Name them and let them go.
5. **How will you know if the MVP succeeds?** What metric, at what threshold, within what timeframe?
6. **How long should it take to build?** If your answer is >8 weeks (solo) or >6 weeks (small team), scope is too big.
7. **What can you do manually instead of building?** Concierge, Wizard of Oz, or manual processes behind the scenes.

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# MVP Scope: [Your SaaS Name]

## MVP Definition
> [One sentence: "[Product] lets [persona] do [core action] so they can [outcome]."]

## Core Value Hypothesis
> We believe that [persona] will [adopt/pay for/use regularly] [product] because it [solves specific problem] better than [current alternative].

## Feature Scope

### ✅ MUST HAVE (In the MVP)
| Feature | Why It's Essential | Effort | Acceptance Criteria |
|---|---|---|---|
| [Feature 1] | [Without this, there's no product] | [T-shirt size] | [How you know it's done] |
| [Feature 2] | [Core UX requires it] | [Size] | [Criteria] |
| [Feature 3] | [Validates the key assumption] | [Size] | [Criteria] |

### ⏳ NICE TO HAVE (Built after MVP if validated)
| Feature | Why It's Deferred | Build When |
|---|---|---|
| [Feature] | [MVP works without it] | [After launch metric X is hit] |

### ❌ CUT (Explicitly excluded)
| Feature | Why It's Cut | Hurts to Cut? |
|---|---|---|
| [Feature] | [Adds 3 weeks; not needed to prove core value] | Yes / No |

### 🤝 MANUAL/CONCIERGE (Human-powered for now)
| Process | Automated Later? | Manual Effort |
|---|---|---|
| [e.g., Onboarding] | Yes, in v2 | 30 min per customer |

## User Stories (MVP Only)

### Epic: [Core Flow]
- As a [persona], I want to [action] so that [outcome]
- As a [persona], I want to [action] so that [outcome]
- As a [persona], I want to [action] so that [outcome]

## MVP Success Criteria

| Metric | Target | Timeframe | How Measured |
|---|---|---|---|
| Active users | [N] | Within [X] weeks of launch | [Tool] |
| Retention (Week 2) | [X]% | 2 weeks post-launch | [Tool] |
| NPS / satisfaction | ≥[X] | 4 weeks post-launch | Survey |
| Revenue (if applicable) | $[X] | Within [X] weeks | Stripe |

## Build Timeline

| Week | What Gets Built | Deliverable |
|---|---|---|
| Week 1 | [Foundation: auth, data model, core UI] | [Working skeleton] |
| Week 2-3 | [Core feature implementation] | [Feature 1 + 2 working] |
| Week 4 | [Feature 3 + integration + polish] | [Testable MVP] |
| Week 5 | [Bug fixes, onboarding flow, deploy] | [Launch-ready MVP] |

## Scope Creep Defense
**If someone suggests adding a feature to the MVP, ask:**
1. Can we prove core value without it?
2. Will it delay launch by more than 2 days?
3. Did multiple interview subjects ask for it unprompted?
4. If yes/yes/no → Cut it. Add to NICE TO HAVE list.
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Linear** | Issue tracking for MVP user stories | Free / $8/user/mo |
| **Notion** | MVP scope document and feature database | Free / $10/mo |
| **Whimsical** | Visual user story mapping | Free / $10/mo |
| **GitHub Projects** | Dev-integrated scope tracking | Free |
| **Excalidraw** | Quick architecture and flow sketches | Free |

**Books:** *The Lean Startup* by Eric Ries, *Shape Up* by Basecamp (free online)

## Agent Instructions

When populating this folder for a founder:

1. Read `03-planning/feature-prioritization/README.md` — the MVP is built from top-ranked features
2. Pull the top 3-5 "Must Have" features from the prioritization matrix
3. Be ruthless about scope: challenge every feature's inclusion by asking "can we prove core value without this?"
4. Write the one-sentence MVP definition — force clarity
5. List everything that was cut, with honest "hurts to cut" labels
6. Identify what can be done manually — concierge-first is almost always faster
7. Write specific user stories for the MVP features (3-5 stories per feature max)
8. Create a realistic build timeline based on team size from company profile
9. Define success criteria with specific numbers, not vague "good adoption"
10. Include the scope creep defense framework — founders will thank you later

## Example Output (Abbreviated)

```markdown
# MVP Scope: InvoiceBot

## MVP Definition
> InvoiceBot lets freelance designers create branded invoices from tracked Figma time and get paid online — in under 2 minutes.

### ✅ MUST HAVE
| Feature | Why Essential | Effort | Acceptance Criteria |
|---|---|---|---|
| Invoice generator | Core product — no product without it | M (2 weeks) | Create + send PDF invoice |
| Stripe payment link | Top interview request; designers need to get paid | S (1 week) | "Pay Now" button on invoice |
| Figma time tracking | Key differentiator — this is why they switch | L (3 weeks) | Auto-detect active Figma time |

### ❌ CUT
| Feature | Why Cut | Hurts? |
|---|---|---|
| Client portal | Nice but MVP works with email delivery | Yes |
| Multi-currency | 85% of initial niche is US-based | No |
| Expense tracking | Different job to be done; stay focused | No |
```

## Cross-References

- **Depends on:** [03-planning/feature-prioritization](../feature-prioritization/) — MVP features come from top of priority stack
- **Feeds into:** [03-planning/tech-stack](../tech-stack/) — MVP scope determines technology needs
- **Feeds into:** [03-planning/development-plan](../development-plan/) — Sprint plan built from MVP scope
- **Related:** [04-design/wireframes](../../04-design/wireframes/) — Wireframe the MVP features
- **Related:** [05-development/](../../05-development/) — This is what you're building
