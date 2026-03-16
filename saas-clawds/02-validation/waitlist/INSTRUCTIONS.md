---
department: 02-validation
subfolder: waitlist
priority: P1
stage: validation
estimated_time: "3-5 days (setup) + ongoing"
requires:
  - 01-idea/problem-discovery
  - 02-validation/landing-page-test
---

# Waitlist

## Overview

This folder is for building and managing a **pre-launch waitlist** that measures genuine demand and creates a launch audience. A waitlist is more than an email list — it's a commitment signal, a community seed, and a launch weapon.

The best waitlists don't just collect emails. They create engagement loops: referral incentives, progress updates, early feedback opportunities, and a sense of being part of something before it launches. Every person on your waitlist is a potential Day 1 user, beta tester, and word-of-mouth advocate.

**Benchmark expectations:** A healthy waitlist converts 20-40% to active users on launch. A dead email dump converts 2-5%.

## Questions to Answer

1. **What's your target waitlist size before launch?** 100? 500? 5,000? (Be realistic for your niche size.)
2. **What incentives will you offer for joining?** Early access, lifetime discount, founding member perks, free tier extension.
3. **Will you use a referral mechanic?** "Move up the list by inviting friends" — effective but adds complexity.
4. **How will you keep waitlist members engaged?** Weekly updates? Behind-the-scenes content? Surveys?
5. **What will you learn from waitlist members?** Will you survey them? Interview top referrers?
6. **What's your launch trigger?** Launch at N signups? On a specific date? When MVP is ready?
7. **How will you segment the waitlist?** By use case, company size, referral count, engagement level?

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# Waitlist Strategy: [Your SaaS Name]

## Waitlist Goals
- **Target size:** [N] signups before launch
- **Timeline:** [Start date] → [Target date]
- **Conversion target:** [X]% of waitlist → active users at launch

## Waitlist Mechanics

### Signup Flow
1. Visitor lands on [landing page URL]
2. Enters email → [confirmation page / referral page]
3. Receives welcome email with [position number / referral link / next steps]
4. [Optional] Referral page shows unique link + position on waitlist

### Incentive Structure
| Tier | Requirement | Reward |
|---|---|---|
| Everyone | Sign up | Early access before public launch |
| Referrer | Invite 3 friends who sign up | [Lifetime discount / extended trial] |
| Super Referrer | Invite 10+ friends | [Founding member status / free year] |
| VIP | Top 50 by referral count | [Beta access + direct founder access] |

### Data Collection
Collect at signup:
- Email (required)
- [Optional field 1: Role/job title]
- [Optional field 2: Company size]
- [Optional field 3: Primary use case]

## Communication Plan

### Email Sequence
| Email | Timing | Subject | Purpose |
|---|---|---|---|
| Welcome | Immediate | "You're in! Here's what's next" | Confirm signup, share referral link |
| Update 1 | Week 1 | "Building in public: [milestone]" | Build excitement, show progress |
| Update 2 | Week 3 | "Quick question about [use case]" | Gather feedback, segment list |
| Pre-launch | 1 week before | "We're almost ready — [teaser]" | Build anticipation |
| Launch | Launch day | "You're in. Let's go." | Activate waitlist members |

### Content Strategy Between Signups
- [Weekly / biweekly] build-in-public updates
- Screenshots and sneak peeks of the product
- Polls asking waitlist members to vote on features
- "Founding member" stories highlighting why people signed up

## Tracking & Metrics

| Metric | Tool | Target |
|---|---|---|
| Total signups | [Platform] | [N] |
| Weekly growth rate | [Platform] | [X]% week-over-week |
| Referral rate | [Platform] | [X]% of signups refer at least 1 person |
| Email open rate | [Email tool] | ≥40% |
| Email click rate | [Email tool] | ≥8% |

## Results (fill after launch)
- **Final waitlist size:** [N]
- **Conversion to active users:** [N] ([X]%)
- **Top acquisition channel:** [Channel]
- **Key learning:** [Insight]
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **GetWaitlist** | Referral-enabled waitlist with built-in mechanics | Free / $20/mo |
| **LaunchRock** | Simple waitlist landing pages | Free |
| **Viral Loops** | Referral/viral waitlist mechanics | $49/mo |
| **Mailchimp** | Email collection and sequences | Free up to 500 contacts |
| **ConvertKit** | Creator-focused email with automation | Free up to 1,000 contacts |
| **Tally** | Free form builder for data collection | Free |

## Agent Instructions

When populating this folder for a founder:

1. Read `company-profile.md` and completed validation documents
2. Set a realistic waitlist target based on niche size (not arbitrary round numbers)
3. Design an incentive structure appropriate for the audience — B2B audiences value access, B2C values discounts
4. Create a specific email sequence with subject lines tailored to the product
5. Recommend a tool stack based on budget: GetWaitlist for referral mechanics, ConvertKit + Tally for simple collection
6. Define a communication cadence that's sustainable for the founder's bandwidth
7. Include specific metrics with targets, not vague "track engagement"
8. Leave the Results section as a template for post-launch fill-in

## Example Output (Abbreviated)

```markdown
# Waitlist Strategy: InvoiceBot

## Waitlist Goals
- **Target:** 500 signups before launch
- **Timeline:** March 15 → May 1 (6 weeks)
- **Conversion target:** 30% → 150 active users at launch

### Incentive Structure
| Tier | Requirement | Reward |
|---|---|---|
| Early Bird | Sign up | Free for first 3 months (then $25/mo) |
| Referrer | 3 friend signups | Free for 6 months |
| Founding Designer | Top 25 referrers | Free for life + name in credits |
```

## Cross-References

- **Depends on:** [02-validation/landing-page-test](../landing-page-test/) — Waitlist lives on or links from landing page
- **Feeds into:** [08-launch/beta-users](../../08-launch/beta-users/) — Waitlist becomes your beta user pool
- **Related:** [14-retention/email-automation](../../14-retention/email-automation/) — Waitlist email sequences evolve into retention emails
- **Related:** [15-growth/viral-loops](../../15-growth/viral-loops/) — Referral mechanics from waitlist can scale post-launch
