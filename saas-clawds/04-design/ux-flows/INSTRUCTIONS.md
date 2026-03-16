---
department: 04-design
subfolder: ux-flows
priority: P0
stage: design
estimated_time: "1-3 days"
requires:
  - 03-planning/mvp-scope
---

# UX Flows

## Overview

This folder is for mapping **user journeys** through your product — the step-by-step paths a user takes to accomplish their goals. UX flows answer: "What does the user do first? Then what? What if something goes wrong? Where do they end up?"

UX flows should be created **before wireframes**. You need to understand the journey before you can design the individual screens. Think of it like planning a road trip: you map the route before you design the rest stops.

Every SaaS product has a handful of critical flows that make or break the experience:
1. **Signup/Onboarding** — First impression, sets the tone
2. **Core action** — The main thing users come to do (the "aha moment")
3. **Settings/Configuration** — Usually boring, but bad settings UX causes churn
4. **Upgrade/Payment** — Where your revenue happens

## Questions to Answer

1. **What are the 3-5 critical user flows in your MVP?** The paths that must work flawlessly.
2. **What is the "aha moment"?** The specific point where the user first experiences value. How many steps does it take to get there?
3. **What does the signup → first value path look like?** Every step, every screen, every decision point.
4. **Where are the most likely drop-off points?** Where might a user get confused, frustrated, or abandon?
5. **What happens when things go wrong?** Error states, edge cases, empty states.
6. **Are there multiple user roles?** Do admin and regular users have different flows?

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# UX Flows: [Your SaaS Name]

## Critical Flows

### Flow 1: Signup → First Value (Aha Moment)
**Goal:** New user signs up and experiences core value for the first time.
**Target time to value:** [X] minutes

```
[Start] → Landing Page → Click "Sign Up"
  → Signup Form (email + password / OAuth)
    → Success → Onboarding Step 1: [What?]
      → Onboarding Step 2: [What?]
        → First [core action] → ⭐ AHA MOMENT
          → Dashboard (with first result visible)
```

| Step | Screen | User Action | System Response | Drop-off Risk |
|---|---|---|---|---|
| 1 | Landing page | Clicks "Sign Up" | Shows signup form | Low |
| 2 | Signup form | Enters email + password | Creates account, sends verification | Medium |
| 3 | Onboarding Q1 | [Answers question] | [Personalizes experience] | Medium |
| 4 | Core feature | [Takes core action] | [Shows result — AHA moment] | High |
| 5 | Dashboard | Sees first result | Celebrates with UI feedback | Low |

**Drop-off mitigations:**
- Step 2: Offer OAuth (Google/GitHub) to reduce friction
- Step 3: Make onboarding skippable but valuable
- Step 4: Pre-populate with sample data so they see value immediately

---

### Flow 2: Core Action — [Main Job to Be Done]
**Goal:** User completes the primary task your product exists for.

```
Dashboard → Click [action button]
  → [Step 1 screen] → [Input/configure]
    → [Step 2 screen] → [Review/confirm]
      → [Result screen] → ✅ Task Complete
```

| Step | Screen | User Action | System Response |
|---|---|---|---|
| 1 | | | |
| 2 | | | |

---

### Flow 3: [Secondary Flow — e.g., Settings, Invite Team, Export]
[Same structure]

---

### Flow 4: Upgrade / Payment
**Goal:** Free user converts to paid plan.

```
[Trigger: hits limit / sees upgrade prompt]
  → Pricing page (within app)
    → Select plan → Payment form (Stripe)
      → Success → Unlocked features → Dashboard
```

## Edge Cases & Error Flows
| Scenario | What Happens | User Sees |
|---|---|---|
| Signup with existing email | Account exists error | "Already have an account? Log in" link |
| Payment fails | Stripe returns error | Friendly error message + retry option |
| Empty state (no data yet) | First-time user, nothing to show | Helpful empty state with CTA |
| Session expired | Auth token expired | Redirect to login with "session expired" message |
| Network error | API call fails | Retry button with offline indicator |

## Aha Moment Definition
- **What is it:** [The specific moment the user first gets value]
- **Target steps to reach it:** [N] steps from signup
- **Target time to reach it:** [N] minutes from signup
- **How to measure it:** [Analytics event that tracks this moment]
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **FigJam** | Collaborative flow diagramming (part of Figma) | Free |
| **Miro** | Whiteboard for flow mapping | Free / $8/mo |
| **Whimsical** | Clean flowcharts + wireframes | Free / $10/mo |
| **Excalidraw** | Quick, sketch-style flow diagrams | Free |
| **Lucidchart** | Professional flowcharting | Free / $8/mo |
| **Mermaid.js** | Code-based flow diagrams (works in markdown) | Free |

## Agent Instructions

When populating this folder for a founder:

1. Read `03-planning/mvp-scope/README.md` to understand what features exist in the MVP
2. Map 3-5 critical flows: always include signup→first-value, core action, and upgrade
3. For each flow, detail every step with screen, user action, and system response
4. Identify the "aha moment" — the specific point where the user first gets value
5. Calculate steps-to-value and flag if it's too many (more than 5 steps before value is risky)
6. Document drop-off risks at each step with specific mitigations
7. Include edge cases and error flows — these are where users actually get stuck
8. Use text-based flow diagrams (ASCII art or Mermaid syntax) — don't require a design tool
9. The signup→first-value flow deserves the most detail since it determines activation rate

## Example Output (Abbreviated)

```markdown
# UX Flows: InvoiceBot

### Flow 1: Signup → First Invoice Sent (Aha Moment)
**Target time to value:** 4 minutes

| Step | Screen | User Action | System Response | Risk |
|---|---|---|---|---|
| 1 | Landing | Click "Start Free" | Show signup | Low |
| 2 | Signup | Google OAuth | Create account | Low |
| 3 | Onboarding | Enter business name + logo | Save, personalize | Medium |
| 4 | Create Invoice | Fill in client + line items | Live preview updates | Medium |
| 5 | Preview | Click "Send Invoice" | Email sent + payment link | Low |
| 6 | Dashboard | See invoice status: "Sent" | ⭐ Aha moment | Low |

**Steps to value: 6** (acceptable — each step adds clear value)
```

## Cross-References

- **Depends on:** [03-planning/mvp-scope](../../03-planning/mvp-scope/) — Flows are built from MVP features
- **Feeds into:** [04-design/wireframes](../wireframes/) — Each step in a flow becomes a screen to wireframe
- **Related:** [14-retention/user-onboarding](../../14-retention/user-onboarding/) — Signup flow is the onboarding experience
- **Related:** [13-analytics/funnel-analysis](../../13-analytics/funnel-analysis/) — Flows define funnels to track
