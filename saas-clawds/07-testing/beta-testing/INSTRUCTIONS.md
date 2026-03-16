---
department: 07-testing
subfolder: beta-testing
priority: P1
stage: pre-launch
estimated_time: "3-5 days"
requires:
  - 05-development/frontend
  - 05-development/backend
  - 07-testing/unit-testing
---

# Beta Testing Program

## Overview

This folder documents your structured beta testing program — how you recruit beta testers, onboard them, collect feedback, and use their insights to improve the product before public launch. Beta testing is the bridge between "it works in development" and "it works for real people."

Automated tests verify that code does what you intended. Beta testing reveals whether what you intended is actually what users need. It surfaces UX confusion, missing features, confusing terminology, and workflow gaps that no amount of unit testing can find.

## Questions to Answer

Before generating the output document, the founder should answer:

1. **How many beta testers do you want?** 10-20 for focused feedback, 50-100 for broader validation, 500+ for stress testing?
2. **What are your selection criteria?** Matches target persona, technical savviness, willing to give feedback?
3. **How long will the beta program run?** 2 weeks, 4 weeks, rolling?
4. **What feedback channels will you use?** In-app surveys, dedicated Slack/Discord, scheduled calls, feedback widget?
5. **What are your beta exit criteria?** No P0/P1 bugs, NPS > X, feature completeness, specific user actions?
6. **What incentives do you offer beta testers?** Free access, lifetime discount, early adopter badge, swag?
7. **How will you measure beta success?** Activation rate, feature adoption, NPS, bug reports, retention?
8. **Will beta users carry over to paid, or start fresh?** Data migration vs. clean slate?

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# Beta Testing Program: [Your SaaS Name]

## Program Overview
| Attribute | Value |
|---|---|
| Beta cohort size | [Number] |
| Duration | [X weeks] |
| Start date | [Date] |
| Exit criteria | [Specific conditions to end beta] |
| Incentive | [What beta testers receive] |

## Beta User Selection Criteria
| Criterion | Requirement | Why |
|---|---|---|
| Matches target persona | [Specific: role, company size] | Core users give relevant feedback |
| Willing to give feedback | Commits to weekly survey or call | Passive testers aren't useful |
| Tolerant of bugs | Understands this is pre-release | Avoids negative word-of-mouth |
| Technical comfort | [Low / Medium / High] | Matches product's target audience |
| Diversity | Mix of use cases and company sizes | Avoid building for one user |

## Feedback Collection Plan
| Channel | Frequency | Purpose |
|---|---|---|
| In-app feedback widget | Always on | Real-time bug reports and reactions |
| Weekly survey (5 questions) | Weekly | Structured satisfaction tracking |
| 1:1 user interview (15 min) | Bi-weekly | Deep qualitative insights |
| Dedicated Slack/Discord channel | Always on | Community discussion and peer support |
| Usage analytics | Continuous | Behavioral data on feature adoption |

## Weekly Survey Template
1. On a scale of 1-10, how useful was [Product] this week?
2. What did you accomplish with [Product] this week?
3. What was the most frustrating part of your experience?
4. What feature do you wish existed?
5. Would you recommend [Product] to a colleague? (NPS)

## Beta Success Metrics
| Metric | Target | Measurement |
|---|---|---|
| Activation rate | > 70% | Users who complete core action / total signups |
| Weekly active rate | > 50% | Users active this week / total beta users |
| NPS score | > 30 | Weekly survey question #5 |
| P0/P1 bugs | 0 open | Bug tracker |
| Feature requests collected | > 20 | Feedback channels |

## Beta Exit Criteria
- [ ] No open P0 or P1 bugs
- [ ] NPS > [target score]
- [ ] Core flow (signup → value moment) works for > 95% of users
- [ ] At least [X] users have used the product for [Y] weeks
- [ ] Feedback incorporated into at least 1 iteration cycle
- [ ] Performance targets met under beta load

## Beta User Agreement (Summary)
- Product is pre-release and may have bugs
- Data may be reset before public launch (if applicable)
- Feedback may be used anonymously in marketing
- Beta access is free; pricing begins at public launch
- Testers agree to [weekly survey / availability for interviews]

## Beta Retrospective Template
| Category | Findings |
|---|---|
| Top positive feedback | |
| Top complaints / frustrations | |
| Most requested features | |
| Unexpected use cases | |
| Bugs found and fixed | |
| Changes made during beta | |
| Decision: Ready for launch? | Yes / No — with reasons |
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Canny** | Feature request and feedback board | Free tier |
| **Intercom** | In-app messaging and surveys | Free tier for startups |
| **Slack / Discord** | Beta community channel | Free |
| **Typeform** | Weekly feedback surveys | Free tier |
| **PostHog** | Product analytics (feature adoption, funnels) | Free tier |
| **TestFlight** | iOS beta distribution | Free |
| **BetaList** | Beta user recruitment | Free listing |

## Agent Instructions

When populating this folder for a founder:

1. Read `company-profile.md` for target persona, stage, and team size
2. Read `01-idea/problem-discovery` for the core problem — beta testers validate this
3. Ask the 8 questions above if not answered
4. Size the beta cohort appropriately: 10-20 for B2B, 50-200 for B2C
5. Define selection criteria that match the product's target persona
6. Design a feedback collection plan with both quantitative (surveys) and qualitative (interviews) channels
7. Set concrete exit criteria with specific numeric targets
8. Include a beta user agreement covering data, expectations, and transition to paid
9. Create a beta retrospective template for post-beta analysis
10. Cross-reference with the launch plan — beta results feed directly into launch readiness

## Example Output (Abbreviated)

```markdown
# Beta Testing Program: TaskFlow

## Program Overview
| Attribute | Value |
|---|---|
| Cohort size | 25 users |
| Duration | 4 weeks |
| Exit criteria | 0 P0 bugs, NPS > 35, > 70% weekly active |
| Incentive | Free Pro plan for 6 months post-launch |

## Beta Exit Criteria
- [x] No open P0 bugs (2 found and fixed during beta)
- [x] NPS: 42 (target was > 35)
- [x] Core flow works for 96% of users
- [ ] 3 of 25 users inactive — schedule exit interviews
```

## Cross-References

- **Depends on:** [05-development](../../05-development/) — A working product to test
- **Depends on:** [07-testing/unit-testing](../unit-testing/) — Baseline quality before exposing to users
- **Feeds into:** [08-launch/beta-users](../../08-launch/beta-users/) — Beta user management and onboarding
- **Feeds into:** [08-launch/early-adopters](../../08-launch/early-adopters/) — Best beta testers become early adopters
- **Informs:** [08-launch/public-release](../../08-launch/public-release/) — Beta results determine launch readiness
