---
department: 15-growth
subfolder: viral-loops
priority: P1
stage: post-launch (requires active users and a product worth sharing)
estimated_time: 4-6 hours design, significant engineering effort to implement
requires:
  - 15-growth/product-led-growth
  - 13-analytics/user-tracking
---

# Viral Loops — Building Sharing and Invitation Mechanics Into the Product

## Overview

This folder contains your viral loop design — the mechanics built into your product that cause each user to naturally bring in new users. A viral loop is a closed cycle: User A uses the product → takes an action that exposes the product to Person B → Person B becomes a user → repeats. When this loop works, growth becomes self-reinforcing.

Virality isn't magic — it's engineering. Every viral product was designed to be viral. Dropbox's "get more space by inviting friends." Figma's multiplayer design that requires colleagues to join. Calendly's meeting links that introduce recipients to the product. These aren't accidents — they're intentional product decisions.

## Questions to Answer

Before designing viral loops, the founder needs to answer:

1. **What is inherently shareable about your product?** (Output, content, results, links, embeds, invitations — what naturally gets shared with non-users?)
2. **What incentivizes sharing?** (Intrinsic value: "I need my colleague in the tool to collaborate." Extrinsic value: "I get a reward for inviting people." Social value: "Sharing this makes me look smart/helpful.")
3. **What is your K-factor target?** (K = average invites per user × conversion rate of those invites. K > 1 means exponential growth. K of 0.2-0.5 is realistic and very valuable for SaaS.)
4. **What is the viral cycle time?** (How long from User A sharing to User B becoming active? Shorter is dramatically better. Slack's viral cycle is hours. Enterprise tools might be weeks.)
5. **Can your product's output be branded?** (Reports with "Made with [Product]", embedded widgets, shared dashboards — does the output carry your brand to new audiences?)
6. **Are there collaboration features that require multi-user adoption?** (Team features, shared workspaces, commenting, multiplayer editing — these create natural expansion within organizations.)

## Output Template

Generate a comprehensive viral loop strategy with these sections:

### 1. Viral Loop Design

**Loop Structure:** Trigger → Share → Accept → Value → Trigger (repeat)

| Stage | What Happens | Design |
|---|---|---|
| **Trigger** | User reaches a moment where sharing is natural | [Define the trigger moment] |
| **Share** | User shares with non-user via product mechanic | [Define the sharing mechanic] |
| **Accept** | Non-user receives the share and encounters the product | [Define the landing experience] |
| **Value** | Non-user experiences value, decides to sign up | [Define the value hook] |
| **Trigger (repeat)** | New user reaches their own sharing moment | [How the loop restarts] |

### 2. Viral Loop Inventory

| Loop Type | Mechanism | Example | K-Factor Potential |
|---|---|---|---|
| **Collaboration loop** | User invites teammates to collaborate | Shared workspaces, team features | High (0.3-0.8) |
| **Content/output loop** | Product output is shared publicly | Reports, dashboards, embeds | Medium (0.1-0.3) |
| **Invitation loop** | Direct invite with incentive | Referral program with reward | Medium (0.1-0.3) |
| **Word-of-mouth loop** | Organic recommendation | User recommends to peer | Low-Medium (0.05-0.2) |
| **API/integration loop** | Developers build on your platform | Embedded widgets, API consumers | High (0.2-0.5) but slow |

### 3. Viral Coefficient Calculation

```
K = i × c

Where:
  i = average number of invites/shares per user
  c = conversion rate of those invites to new users

Example:
  i = 3 invites per user (average)
  c = 15% conversion rate
  K = 3 × 0.15 = 0.45

Interpretation:
  K < 1: Growth supplements other channels (still valuable!)
  K = 1: Each user brings exactly one new user (self-sustaining)
  K > 1: Exponential growth (rare, but the dream)
```

### 4. Viral Cycle Time Optimization

| Phase | Current Duration | Target | Optimization |
|---|---|---|---|
| Signup → first share trigger | ___ days | <7 days | Onboard faster, prompt earlier |
| Share trigger → actual share | ___ hours | <1 hour | Reduce friction, one-click sharing |
| Share → recipient views | ___ hours | <24 hours | Email/notification delivery speed |
| View → signup | ___ days | <1 day | Compelling landing page, easy signup |
| Signup → active user | ___ days | <1 day | Streamlined onboarding for referred users |
| **Total cycle time** | ___ days | <14 days | Shorter = dramatically faster growth |

### 5. Branded Output Strategy

| Output Type | Branding Approach | Visibility |
|---|---|---|
| Shared reports/dashboards | "[Product] powered" watermark + link | Public viewers see brand |
| Embedded widgets | "Built with [Product]" badge | Website visitors see brand |
| Email notifications | "[Product]" in sender or footer | Recipients see brand |
| Public profiles/pages | "[Product] profile" | SEO + direct traffic |
| Exported files | "[Product]" metadata or footer | Recipients see brand |

### 6. Sharing Mechanic Design

For each viral loop, define:
- **Share button placement** — where in the UI does the share action live?
- **Share channels** — email, link copy, social media, in-app invite?
- **Share preview** — what does the recipient see? (OG tags, email preview, link preview)
- **Landing experience** — what page does the recipient land on?
- **Signup friction** — how easy is it for the recipient to start using the product?
- **Value preview** — can the recipient see value before signing up?

## Recommended Tools

| Tool | Purpose | Pricing |
|---|---|---|
| **Custom implementation** | Most viral loops require product engineering | Engineering time |
| **Viral Loops** | Pre-built viral campaign templates | $34+/mo |
| **Branch** | Deep linking for mobile viral loops | Free tier, then usage-based |
| **AddThis / ShareThis** | Social sharing buttons (basic) | Free |
| **PostHog** | Measure viral metrics and experiment | Free tier |
| **OpenGraph / Twitter Cards** | Rich link previews for shared content | Free (implementation) |

## Agent Instructions

When populating this folder, the AI agent should:

1. Read `company-profile.md` to understand the product and its natural sharing moments
2. Read `15-growth/product-led-growth/README.md` for PLG levers that enable virality
3. Read `15-growth/referral-programs/README.md` for the referral mechanic (one type of viral loop)
4. Read `13-analytics/user-tracking/README.md` for events that track sharing behavior
5. Identify 2-3 viral loops possible for the specific product
6. Design the complete loop for each (trigger → share → accept → value → repeat)
7. Calculate target K-factor and viral cycle time
8. Design the branded output strategy if applicable
9. Output everything as `README.md` in this folder

## Example Output (Snippet)

```markdown
## Primary Viral Loop: Collaboration Invite

**Loop:** User creates a shared workspace → invites colleagues → colleagues experience value → create their own workspaces → invite their contacts

| Metric | Current | Target |
|---|---|---|
| Avg invites per user | 1.8 | 3.0 |
| Invite acceptance rate | 42% | 55% |
| Accepted → active rate | 68% | 75% |
| K-factor | 0.52 | 1.24 |
| Viral cycle time | 12 days | 7 days |

**Key Optimization:** Adding an "invite to this project" prompt after the first task assignment increased invite rate by 40%. The prompt appears at a natural collaboration moment, not randomly.
```

## Cross-References

- `15-growth/referral-programs` — referrals are incentivized viral loops
- `15-growth/product-led-growth` — PLG provides the foundation for viral mechanics
- `13-analytics/user-tracking` — track every stage of the viral loop
- `13-analytics/ab-testing` — test viral loop optimizations with controlled experiments
- `14-retention/user-onboarding` — viral loop recipients need tailored onboarding
