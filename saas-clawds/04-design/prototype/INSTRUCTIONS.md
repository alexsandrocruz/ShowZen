---
department: 04-design
subfolder: prototype
priority: P1
stage: design
estimated_time: "2-4 days"
requires:
  - 04-design/wireframes
  - 04-design/ux-flows
---

# Prototype

## Overview

This folder is for building a **clickable prototype** of your product and planning how to test it with real users. A prototype simulates the user experience without any backend code — it's an interactive facade that lets you test flows, gather feedback, and validate design decisions before investing in development.

Prototypes sit on a spectrum from low to high fidelity:
- **Low-fi:** Clickable wireframes — tests flow and layout (1-2 hours to build)
- **Mid-fi:** Styled wireframes with real copy — tests messaging and comprehension (2-4 hours)
- **High-fi:** Pixel-perfect designs with animations — tests the full experience (1-3 days)

For MVP validation, **mid-fi is the sweet spot.** It's realistic enough to get genuine reactions but fast enough to iterate quickly.

**The goal of prototyping is not to show off your design. It's to discover what's broken before you build it.**

## Questions to Answer

1. **What fidelity level do you need?** Low-fi for flow validation, high-fi for investor demos or user testing.
2. **Which flows will you prototype?** Focus on the core flows from UX Flows document.
3. **Who will test the prototype?** Target users from your niche, team members, advisors?
4. **How many testers do you need?** 5 tests catch ~85% of usability issues (Nielsen Norman Group).
5. **What are you testing for?** Task completion, comprehension, emotional response, time-to-complete?
6. **How will you collect feedback?** Moderated sessions (live), unmoderated (async), survey after?
7. **What would make you change the design?** Define failure criteria upfront.

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# Prototype & Testing: [Your SaaS Name]

## Prototype Scope

### Fidelity Level
> [Low / Mid / High] — [Rationale for this choice]

### Flows to Prototype
| # | Flow | Screens | Priority |
|---|---|---|---|
| 1 | Signup → First value | [N] screens | P0 |
| 2 | Core action (end-to-end) | [N] screens | P0 |
| 3 | [Secondary flow] | [N] screens | P1 |

### Prototype Link
> [Figma prototype link / InVision link / hosted URL]

## User Test Plan

### Test Objectives
1. Can users complete [core task] without assistance?
2. Do users understand [key concept/terminology]?
3. How long does it take to go from signup to first value?
4. Where do users get confused or hesitate?

### Participants
| # | Name/Pseudonym | Profile | Matches Persona? | Recruited Via |
|---|---|---|---|---|
| 1 | | [Title, industry, experience level] | Yes/No | [Channel] |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |

### Test Script

**Introduction (2 min):**
- "Thank you for helping us test this. There are no wrong answers — we're testing the design, not you."
- "Please think out loud as you go. Tell me what you're looking at, what you expect, and what confuses you."

**Task 1: [Signup and Onboarding]** (5 min)
- "Imagine you just heard about [product]. Walk me through signing up and getting started."
- *Observe: Where do they click first? What do they read? What do they skip?*

**Task 2: [Core Action]** (5-10 min)
- "Now I'd like you to [describe the core task in user language, not product language]."
- *Observe: Can they find the feature? How many wrong clicks? Time to complete?*

**Task 3: [Secondary Flow]** (5 min)
- "Now try to [secondary task]."
- *Observe: Same criteria*

**Debrief (5 min):**
- "What was your overall impression?"
- "What was the most confusing part?"
- "Would you use this product? Why or why not?"
- "What's missing?"

### Feedback Capture Template
| Tester | Task 1 (Signup) | Task 2 (Core) | Task 3 (Secondary) | Overall Impression | Key Quote |
|---|---|---|---|---|---|
| [Name] | ✅ Pass / ❌ Fail | ✅ / ❌ | ✅ / ❌ | [Positive/Neutral/Negative] | "[Quote]" |

## Results & Insights (fill after testing)

### Success Rates
| Task | Pass Rate | Avg Time | Common Struggles |
|---|---|---|---|
| Signup + Onboarding | [X/5] | [X min] | [What went wrong] |
| Core action | [X/5] | [X min] | [What went wrong] |
| Secondary flow | [X/5] | [X min] | [What went wrong] |

### Key Findings
| # | Finding | Severity | Design Change |
|---|---|---|---|
| 1 | [What you discovered] | [Critical/Major/Minor] | [How you'll fix it] |
| 2 | | | |
| 3 | | | |

### Design Changes Made
| Change | Before | After | Based on Finding |
|---|---|---|---|
| | | | |
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Figma Prototyping** | Clickable prototypes from Figma designs | Free |
| **InVision** | Prototype sharing and feedback collection | Free |
| **Marvel** | Simple prototyping from images/screens | Free / $12/mo |
| **Principle** | Animation-rich prototypes (macOS) | $29 one-time |
| **Maze** | Unmoderated user testing on prototypes | Free / $99/mo |
| **UserTesting** | Recruit testers and run moderated sessions | $49/participant |
| **Loom** | Record screen + narration for async feedback | Free / $12.50/mo |

## Agent Instructions

When populating this folder for a founder:

1. Read `04-design/wireframes/README.md` and `04-design/ux-flows/README.md`
2. Recommend a fidelity level based on the founder's goals (validation → low/mid, fundraising → high)
3. Identify the 2-3 flows that must be prototyped (always include signup→first-value)
4. Write a specific test script with tasks framed in user language, not product terminology
5. Define 5 test participant profiles that match the target niche
6. Include the feedback capture template so results are structured, not anecdotal
7. Set clear success criteria: task pass rates, time limits, comprehension checks
8. Leave the Results section blank — it's filled after testing
9. Recommend Figma prototyping for most founders (free, widely understood, design-to-prototype in one tool)

## Example Output (Abbreviated)

```markdown
# Prototype & Testing: InvoiceBot

### Flows to Prototype
| # | Flow | Screens | Priority |
|---|---|---|---|
| 1 | Signup → First invoice sent | 6 screens | P0 |
| 2 | Track time in Figma → Create invoice | 4 screens | P0 |
| 3 | Client receives invoice → Pays online | 3 screens | P1 |

### Test Task 2:
"You've been working on a logo redesign for 3 hours. Now you need to send the client an invoice. Show me how you'd do that."
```

## Cross-References

- **Depends on:** [04-design/wireframes](../wireframes/) and [04-design/ux-flows](../ux-flows/)
- **Feeds into:** [04-design/ui-design](../ui-design/) — Test results inform visual design adjustments
- **Related:** [02-validation/customer-interviews](../../02-validation/customer-interviews/) — Prototype testers may be interview participants
- **Related:** [07-testing/beta-testing](../../07-testing/beta-testing/) — Prototype testing is a precursor to beta testing
