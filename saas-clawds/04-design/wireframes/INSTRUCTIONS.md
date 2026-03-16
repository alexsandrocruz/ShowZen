---
department: 04-design
subfolder: wireframes
priority: P0
stage: design
estimated_time: "2-4 days"
requires:
  - 03-planning/mvp-scope
  - 04-design/ux-flows
---

# Wireframes

## Overview

This folder is for creating **low-fidelity layout sketches** of every key screen in your MVP. Wireframes strip away visual design (no colors, no fonts, no images) to focus purely on **layout, information hierarchy, and interaction patterns**.

Wireframes answer: "What goes on this screen, and where?" They don't answer: "What does it look like?" — that comes later in UI design.

The best wireframes are **fast and disposable**. Spend hours, not days. Use boxes, lines, and placeholder text. The goal is to explore and iterate on layout ideas before investing in high-fidelity design or code.

**Low fidelity is a feature, not a limitation.** When wireframes look rough, stakeholders focus on structure and flow instead of debating button colors.

## Questions to Answer

1. **What are the key screens in your MVP?** List every unique screen or view the user will encounter.
2. **What is the most important action on each screen?** Every screen should have one primary action.
3. **What information does the user need on each screen?** To make a decision or take the primary action.
4. **What's the navigation structure?** Sidebar? Top nav? Tabs? How does the user move between screens?
5. **What are the common patterns across screens?** Shared headers, footers, sidebars, action bars.
6. **What responsive breakpoints matter?** Desktop only for MVP? Desktop + tablet? Full responsive?

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# Wireframes: [Your SaaS Name]

## Screen Inventory

### Key Screens to Wireframe
| # | Screen | Purpose | Primary Action | Priority |
|---|---|---|---|---|
| 1 | Landing / Marketing page | Convert visitors to signups | Sign Up / CTA | P0 |
| 2 | Signup / Login | Authenticate users | Create account / Log in | P0 |
| 3 | Dashboard / Home | Orient user, show key info | Navigate to core feature | P0 |
| 4 | [Core feature screen 1] | [Primary job to be done] | [Primary action] | P0 |
| 5 | [Core feature screen 2] | [Supporting task] | [Action] | P0 |
| 6 | Settings / Account | Manage account, billing | Update settings | P1 |
| 7 | Onboarding flow | Guide first-time setup | Complete setup | P1 |

## Navigation Structure
```
[App Shell]
├── Top Nav: Logo | [Nav item 1] | [Nav item 2] | Profile
├── [Screen 1: Dashboard]
├── [Screen 2: Core Feature]
│   ├── [Sub-view A]
│   └── [Sub-view B]
├── [Screen 3: Settings]
└── [Screen 4: Help/Support]
```

## Wireframe Descriptions

### Screen 1: Dashboard
- **Layout:** [Description: sidebar nav on left, main content area with cards/list]
- **Key elements:**
  - [Summary stats or key metrics at top]
  - [Primary content list or feed in center]
  - [Quick action button (FAB or header CTA)]
- **Primary action:** [What the user should do from here]
- **Wireframe file:** [Link to wireframe image/file]

### Screen 2: [Core Feature Screen]
- **Layout:** [Description]
- **Key elements:** [List]
- **Primary action:** [Action]
- **Wireframe file:** [Link]

[Repeat for each screen]

## Shared Patterns
| Pattern | Used On | Description |
|---|---|---|
| Top navigation bar | All screens | Logo, nav links, profile dropdown |
| Empty state | Dashboard, list views | Illustration + CTA when no data |
| Confirmation modal | Destructive actions | "Are you sure?" with cancel/confirm |
| Toast notification | After actions | Success/error feedback, auto-dismiss |
| Loading skeleton | Data-heavy screens | Placeholder shapes while content loads |

## Wireframe Checklist
- [ ] Every MVP screen has a wireframe
- [ ] Primary action on each screen is obvious
- [ ] Navigation between screens is clear
- [ ] Empty states are considered
- [ ] Error states are considered
- [ ] Mobile layout sketched (if mobile is in scope)
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Excalidraw** | Quick, sketch-style wireframes (collaborative) | Free |
| **Balsamiq** | Purpose-built wireframing tool | $9/mo |
| **Figma** | Professional wireframing + design (all-in-one) | Free / $15/mo |
| **Whimsical** | Wireframes + flowcharts combined | Free / $10/mo |
| **tldraw** | Simple whiteboard-style sketching | Free |
| **Paper + pen** | Fastest wireframing tool ever invented | Free |

**Reference:** [Mobbin](https://mobbin.com) — browse real app screenshots for layout inspiration

## Agent Instructions

When populating this folder for a founder:

1. Read `03-planning/mvp-scope/README.md` to understand what screens are needed
2. Read `04-design/ux-flows/README.md` (if completed) to align wireframes with user journeys
3. Create the screen inventory listing every unique screen in the MVP
4. Describe the layout and key elements for each screen in text form
5. Recommend a navigation structure appropriate for the product type (sidebar for dashboards, top nav for simple apps)
6. List shared patterns that should be consistent across screens
7. Include empty states and error states — most wireframes miss these
8. If the founder has no design tool, recommend Excalidraw (free, zero learning curve)
9. Don't create actual wireframe images — describe them textually and recommend the founder use a tool to sketch them
10. Include the wireframe checklist as a quality gate

## Example Output (Abbreviated)

```markdown
# Wireframes: InvoiceBot

## Screen Inventory
| # | Screen | Purpose | Primary Action | Priority |
|---|---|---|---|---|
| 1 | Dashboard | See recent invoices + quick stats | Create New Invoice | P0 |
| 2 | Create Invoice | Build a new invoice | Send Invoice | P0 |
| 3 | Invoice Preview | Review before sending | Send / Edit | P0 |
| 4 | Client List | Manage clients | Add Client | P1 |
| 5 | Time Tracker | See Figma-tracked time | Convert to Invoice | P0 |
| 6 | Settings | Account, branding, Stripe connect | Save Changes | P1 |

### Screen 2: Create Invoice
- **Layout:** Two-column — form on left, live preview on right
- **Key elements:** Client selector, line item rows (add/remove), tax toggle, notes field, totals summary
- **Primary action:** "Preview & Send" button (bottom right, prominent)
```

## Cross-References

- **Depends on:** [03-planning/mvp-scope](../../03-planning/mvp-scope/) and [04-design/ux-flows](../ux-flows/)
- **Feeds into:** [04-design/ui-design](../ui-design/) — Wireframes are the foundation for visual design
- **Related:** [04-design/prototype](../prototype/) — Wireframes can become low-fi clickable prototypes
- **Related:** [05-development/frontend](../../05-development/frontend/) — Developers reference wireframes during build
