---
department: 14-retention
subfolder: feature-adoption
priority: P1
stage: post-launch (requires launched product with usage data)
estimated_time: 3-5 hours initial framework, ongoing optimization
requires:
  - 13-analytics/user-tracking
  - 14-retention/user-onboarding
---

# Feature Adoption — Driving Usage of Features That Predict Retention

## Overview

This folder contains your feature adoption strategy — the systematic approach to ensuring users discover, try, and habitually use the features that make them stick. Feature adoption is the bridge between onboarding (getting started) and retention (staying long-term). Users who use more features churn less — but only if those features deliver real value.

Not all features are equal. Some are "sticky" — they correlate strongly with long-term retention. Others are nice-to-have but don't move the needle. Your job is to identify which features matter most and then build systems to drive adoption of those specific features.

## Questions to Answer

Before building a feature adoption strategy, the founder needs to answer:

1. **Which features correlate with retention?** (Analyze your data: users who use Feature X retain at 2x the rate of those who don't. These are your "sticky features." If you don't have data yet, hypothesize based on which features deliver the most value.)
2. **What does "adopted" mean for each feature?** (Used once? Used 3 times? Used weekly? Define a clear adoption threshold for each feature you want to drive.)
3. **What is the current adoption rate for each key feature?** (What percentage of active users have used each feature? Where are the biggest gaps between "available" and "used"?)
4. **What is your in-app guidance strategy?** (Tooltips? Modals? Slideouts? Contextual banners? How do you introduce features without being annoying?)
5. **How do you announce new features?** (In-app notification? Email? Changelog? Blog post? All of the above? What's the process and who owns it?)
6. **How do you handle feature discovery for different user segments?** (A power user and a new user need different guidance. How do you segment?)

## Output Template

Generate a comprehensive feature adoption plan with these sections:

### 1. Feature Adoption Scorecard

| Feature | % Users Adopted | Adoption Threshold | Retention Correlation | Priority |
|---|---|---|---|---|
| [Core feature 1] | _% | Used ≥3 times | High (2x retention) | P0 |
| [Core feature 2] | _% | Used ≥1 time/week | High (1.8x retention) | P0 |
| [Feature 3] | _% | Configured once | Medium (1.3x retention) | P1 |
| [Feature 4] | _% | Used ≥1 time | Low | P2 |
| [Feature 5] | _% | Integrated with ≥1 tool | Medium (1.5x retention) | P1 |

### 2. Adoption Funnel per Feature

For each priority feature:

| Stage | Metric | Current | Target |
|---|---|---|---|
| **Aware** | Seen feature in UI or announcement | _% | _% |
| **Tried** | Used feature at least once | _% | _% |
| **Adopted** | Meets adoption threshold | _% | _% |
| **Habitual** | Uses feature regularly (weekly+) | _% | _% |

### 3. In-App Guidance Plan

| Feature | Trigger | Guidance Type | Content | Dismiss Logic |
|---|---|---|---|---|
| [Feature 1] | User completes onboarding | Tooltip | "Try [feature] to [benefit]" | Dismiss after click or 3 views |
| [Feature 2] | User visits related page | Slideout | "Did you know? [Feature] can..." | Dismiss after interaction |
| [Feature 3] | 7 days since signup, not used | Banner | "[Feature] saves teams 3 hours/week" | Dismiss after click or 7 days |
| New feature | Release day | Modal | "New: [Feature] — here's what it does" | Dismiss on close |

### 4. Feature Announcement Process

| Step | When | Channel | Owner |
|---|---|---|---|
| Internal QA | Before release | Internal team | Product |
| Changelog entry | Release day | In-app changelog | Product |
| In-app announcement | Release day | Modal / banner | Product |
| Email announcement | Release day +1 | Lifecycle email | Marketing |
| Blog post | Release day +1 | Blog | Content |
| Social media | Release day +1 | Twitter, LinkedIn | Marketing |

### 5. Feature Education Content Plan

| Feature | Content Type | Title | Format | Status |
|---|---|---|---|---|
| [Feature 1] | Tutorial | Getting started with [Feature] | Help article + video | |
| [Feature 1] | Use case | How [Customer] uses [Feature] to [outcome] | Blog post | |
| [Feature 2] | Tutorial | Set up [Feature] in 3 minutes | Interactive guide | |
| [Feature 3] | Webinar | Power user workshop: [Feature] deep dive | Live webinar | |

### 6. Adoption Experimentation Ideas

| Experiment | Hypothesis | Metric |
|---|---|---|
| Feature prompt timing | Prompt at moment of relevance > generic timing | Feature trial rate |
| Social proof in prompts | "80% of teams use this" increases adoption | Feature trial rate |
| Template with feature pre-built | Templates that showcase the feature | Feature adoption rate |
| Empty state messaging | Better empty state → higher feature exploration | Feature discovery rate |

## Recommended Tools

| Tool | Purpose | Pricing |
|---|---|---|
| **Pendo** | In-app guides, analytics, and feature adoption tracking | Contact for pricing |
| **Appcues** | No-code in-app experiences and announcements | $249+/mo |
| **Chameleon** | Targeted in-app tours and tooltips | $279+/mo |
| **Intercom** | In-app messaging and product tours | $39+/mo |
| **PostHog** | Feature flag + analytics for adoption measurement | Free tier (generous) |
| **Canny** | Feature request tracking and changelogs | Free tier, $79+/mo |

## Agent Instructions

When populating this folder, the AI agent should:

1. Read `company-profile.md` to understand the product features and value proposition
2. Read `13-analytics/user-tracking/README.md` for the event tracking plan to measure feature usage
3. Read `14-retention/user-onboarding/README.md` for the onboarding flow that introduces features
4. Identify 5-7 key features and hypothesize which correlate with retention
5. Define adoption thresholds for each feature (what counts as "adopted")
6. Build the adoption funnel framework (aware → tried → adopted → habitual)
7. Design the in-app guidance plan with specific triggers and content
8. Create the feature announcement process
9. Output everything as `README.md` in this folder

## Example Output (Snippet)

```markdown
## Feature Adoption Scorecard — January 2025

| Feature | Adoption Rate | Target | Retention Impact | Action |
|---|---|---|---|---|
| Board view | 72% | 80% | 2.1x retention | On track — continue |
| Integrations | 18% | 40% | 1.8x retention | ⚠️ Gap — new guidance needed |
| Templates | 34% | 50% | 1.5x retention | Launch in-app prompt |
| Team sharing | 45% | 60% | 1.9x retention | Add to onboarding checklist |
| Automations | 8% | 20% | 2.3x retention | ⚠️ Highest ROI — prioritize |

**Top Priority:** Drive automation adoption from 8% → 20%. Users who set up automations have 2.3x retention, making this the highest-leverage feature to promote.
```

## Cross-References

- `13-analytics/user-tracking` — feature usage events power the adoption scorecard
- `14-retention/user-onboarding` — onboarding is the first opportunity to introduce features
- `14-retention/churn-reduction` — low feature adoption is a leading indicator of churn
- `13-analytics/ab-testing` — test different approaches to driving adoption
- `04-design/ux-flows` — feature discoverability is a UX design problem
