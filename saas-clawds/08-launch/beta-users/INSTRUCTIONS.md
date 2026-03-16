---
department: 08-launch
subfolder: beta-users
priority: P0
stage: pre-launch
estimated_time: "2-4 days"
requires:
  - 07-testing/beta-testing
  - 05-development/frontend
---

# Beta User Management

## Overview

This folder documents how you recruit, onboard, support, and transition your beta users. While `07-testing/beta-testing` covers the testing program design, this folder is about the user-facing experience — making beta users feel valued, heard, and excited to be part of something early.

Your beta users are your first real users. How you treat them sets the tone for your entire company culture. The best beta programs create a sense of belonging — users feel like insiders, not guinea pigs. These are the people who'll write your first testimonials, refer their friends, and forgive your early mistakes.

## Questions to Answer

Before generating the output document, the founder should answer:

1. **How many beta users are you targeting?** And in what cohorts (all at once, or waves)?
2. **How will you recruit beta users?** Waitlist, personal network, communities, social media, cold outreach?
3. **What does the beta onboarding experience look like?** Self-serve, white-glove, or hybrid?
4. **What communication cadence will you maintain?** Weekly update emails, daily Slack, on-demand?
5. **How do you handle beta users who go silent?** Re-engagement strategy?
6. **What's the transition plan from beta to paid?** Free period, gradual pricing, grandfather clause?
7. **Will beta user data persist into production?** Or will you need to communicate a data reset?
8. **How do you say "thank you" to your beta users?** Beyond the product — personal gestures?

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# Beta User Management: [Your SaaS Name]

## Beta Program Summary
| Attribute | Value |
|---|---|
| Target cohort size | [Number] |
| Recruitment channels | [Waitlist, communities, outreach] |
| Onboarding style | [Self-serve / White-glove / Hybrid] |
| Beta duration | [X weeks] |
| Transition to paid | [Date / trigger] |

## Recruitment Plan
| Channel | Target Signups | Approach |
|---|---|---|
| Waitlist (landing page) | [Number] | CTA on landing page: "Get early access" |
| Personal network | [Number] | Direct DMs to people who match persona |
| Communities (Reddit, Slack, Discord) | [Number] | Genuine value-first posts (not spam) |
| Twitter/X | [Number] | Build in public, share progress |

## Beta Onboarding Sequence

### Email 1: Welcome (Sent immediately on invite)
- Subject: "You're in! Welcome to [Product] beta"
- Content: What to expect, how to get started, link to the app
- CTA: "Log in and create your first [resource]"

### Email 2: Quick Start (Day 2)
- Subject: "Get the most out of [Product] in 5 minutes"
- Content: Top 3 features to try, short video walkthrough
- CTA: "Try [core feature]"

### Email 3: Feedback Ask (Day 5)
- Subject: "Quick question — how's it going?"
- Content: 3-question survey link
- CTA: "Take 2-min survey"

### Email 4: Community Invite (Day 7)
- Subject: "Join other beta testers in our [Slack/Discord]"
- Content: Invite link, what to expect in the community
- CTA: "Join the conversation"

### Email 5: Check-in (Day 14)
- Subject: "What would make [Product] a must-have for you?"
- Content: Open-ended question, offer a 15-min call
- CTA: "Reply to this email or book a call"

## Re-engagement Strategy
| Trigger | Action |
|---|---|
| No login in 7 days | Personal email asking if they're stuck |
| No login in 14 days | Offer a 1:1 onboarding call |
| No login in 21 days | "We miss you" email with product updates |
| No login in 30 days | Remove from active beta, ask for exit feedback |

## Beta → Paid Transition Plan
| Scenario | Timeline | Communication |
|---|---|---|
| Beta ends, paid begins | 2 weeks notice | Email sequence explaining pricing and what they get |
| Grandfather pricing | At transition | "As a thank you, you're locked in at [X] forever" |
| Free extension | If beta extends | "We need more time — your free access is extended" |
| Data migration | At transition | "All your data carries over — nothing to do" |

## Beta User Graduation Criteria
- [ ] Used the product at least [X] times
- [ ] Completed the core value action
- [ ] Provided feedback (survey or interview)
- [ ] No unresolved support issues
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Loops / Resend** | Automated onboarding email sequences | Free tier |
| **Slack / Discord** | Beta community channel | Free |
| **Cal.com / Calendly** | Schedule 1:1 calls with beta users | Free tier |
| **Tally / Typeform** | Feedback surveys | Free tier |
| **Intercom** | In-app messaging and onboarding tooltips | Free for startups |
| **PostHog** | Track activation and feature adoption | Free tier |

## Agent Instructions

When populating this folder for a founder:

1. Read `company-profile.md` for target persona, stage, and product description
2. Read `07-testing/beta-testing` for the beta program design (this folder operationalizes it)
3. Ask the 8 questions above if not answered
4. Write the complete onboarding email sequence with specific subject lines and content
5. Design recruitment channels based on where the founder's target users actually are
6. Create a re-engagement strategy with specific triggers and actions
7. Plan the beta-to-paid transition with clear timelines and communication
8. Include graduation criteria that are specific to the product's core value
9. If B2B, include a white-glove onboarding option for high-value beta users
10. Include concrete "thank you" ideas beyond product access

## Example Output (Abbreviated)

```markdown
# Beta User Management: TaskFlow

## Recruitment Plan
| Channel | Target | Approach |
|---|---|---|
| Waitlist | 50 | "Get early access" on landing page |
| Indie Hackers | 20 | Post in "Show IH" with honest build story |
| Twitter/X | 15 | Build in public tweets, DM engaged followers |
| Personal network | 15 | DM 30 PMs and ops leads I know |

## Email 1: Welcome
- Subject: "You're in! Welcome to TaskFlow beta 🎉"
- Content: "Hey [Name], you're one of 25 people with early access to TaskFlow. Here's how to make the most of it: [Login link]. Create your first project and add a few tasks — it takes about 2 minutes. If anything's confusing, reply to this email. I read every one. — Alex"
```

## Cross-References

- **Depends on:** [07-testing/beta-testing](../../07-testing/beta-testing/) — Beta program design and exit criteria
- **Depends on:** [05-development/frontend](../../05-development/frontend/) — A working product to onboard into
- **Feeds into:** [08-launch/early-adopters](../early-adopters/) — Best beta users become champions
- **Pairs with:** [14-retention/user-onboarding](../../14-retention/user-onboarding/) — Onboarding patterns refined during beta
- **Informs:** [08-launch/public-release](../public-release/) — Beta learnings shape launch readiness
