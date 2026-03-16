---
department: 13-analytics
subfolder: user-tracking
priority: P0
stage: pre-launch (implement before launch, iterate after)
estimated_time: 4-6 hours initial setup, ongoing refinement
requires:
  - 05-development/frontend
  - 05-development/backend
  - 06-infrastructure/security
---

# User Tracking — Behavioral Analytics Implementation

## Overview

This folder contains your event tracking plan — the foundation of every analytics decision you'll make. User tracking answers the most important question in SaaS: *what are users actually doing in your product?* Without behavioral data, you're making decisions based on gut feel. With it, you can see exactly where users struggle, what features drive retention, and which paths lead to conversion.

Good tracking is invisible to users but transformative for your team. Bad tracking means missing data, inconsistent naming, and months of wasted effort cleaning up a mess. Get this right from day one.

## Questions to Answer

Before implementing tracking, the founder needs to answer:

1. **What are the 10-15 critical events to track at launch?** (Don't track everything — start with the events that map to your activation, retention, and revenue milestones.)
2. **What is your user identification strategy?** (Anonymous ID before signup → merge with user ID after signup? How do you handle multiple devices?)
3. **What data privacy regulations apply?** (GDPR, CCPA, HIPAA? What consent mechanism do you need? Cookie banner requirements?)
4. **What are your event naming conventions?** (Object-Action format like `project_created`? Noun-verb? CamelCase or snake_case? Consistency matters more than the specific convention.)
5. **Client-side vs. server-side tracking — what goes where?** (UI interactions = client-side. Business logic events like payment or subscription changes = server-side. Some events need both.)
6. **Where does the data live?** (Third-party tool only? Replicate to your own data warehouse? What's the long-term data strategy?)
7. **Who needs access to analytics data?** (Engineering? Product? Marketing? Everyone? Role-based access?)
8. **What is your data retention policy?** (How long do you keep raw event data? Aggregated data?)

## Output Template

Generate a comprehensive tracking plan with these sections:

### 1. Event Tracking Plan

| Event Name | Category | Description | Properties | Trigger | Client/Server |
|---|---|---|---|---|---|
| `user_signed_up` | Lifecycle | User completes registration | `method` (email/google/github), `referral_source` | Registration complete | Server |
| `onboarding_step_completed` | Onboarding | User completes an onboarding step | `step_name`, `step_number`, `time_spent_seconds` | Step completion | Client |
| `feature_used` | Engagement | User engages with a core feature | `feature_name`, `context`, `first_time` | Feature interaction | Client |
| `upgrade_initiated` | Revenue | User begins the upgrade flow | `current_plan`, `target_plan`, `trigger_location` | Click upgrade CTA | Client |
| `payment_completed` | Revenue | Subscription payment processed | `plan`, `amount`, `currency`, `interval` | Webhook from Stripe | Server |

### 2. User Identification Spec

- Anonymous ID assignment strategy (first visit)
- User ID format and assignment (post-signup)
- Identity merge/alias rules (anonymous → known user)
- Group/organization identification (for B2B)
- Cross-device identity resolution approach

### 3. Event Properties Standard

Define global properties attached to every event:
- `timestamp`, `user_id`, `anonymous_id`, `session_id`
- `platform` (web/ios/android), `app_version`, `browser`, `os`
- `plan_type`, `account_age_days`, `company_id` (for B2B)

### 4. Privacy Compliance Checklist

- [ ] Cookie consent banner implemented
- [ ] Analytics opt-out mechanism available
- [ ] PII excluded from event properties (no emails, names, or IPs in events)
- [ ] Data processing agreement signed with analytics provider
- [ ] Data retention policy defined and configured
- [ ] Privacy policy updated to reflect tracking
- [ ] GDPR data deletion workflow tested

### 5. Data Architecture

- Event collection layer (SDK/API)
- Event routing/pipeline (Segment, RudderStack, or direct)
- Analytics tool(s) for exploration
- Data warehouse for long-term storage and custom queries
- Data governance and access controls

## Recommended Tools

| Tool | Purpose | Pricing |
|---|---|---|
| **Segment** | Event routing and customer data platform | Free tier, then $120/mo+ |
| **PostHog** | Open-source product analytics (self-host option) | Free tier (generous), cloud $0+/mo |
| **Mixpanel** | Product analytics with powerful funnels and retention | Free to 20M events/mo |
| **Amplitude** | Enterprise product analytics | Free tier, then $49+/mo |
| **Google Analytics 4** | Web analytics and basic events | Free |
| **RudderStack** | Open-source alternative to Segment | Free self-hosted |
| **BigQuery / Snowflake** | Data warehouse for raw event storage | Usage-based |

## Agent Instructions

When populating this folder, the AI agent should:

1. Read `company-profile.md` to understand the product, features, and target customer
2. Read `05-development/frontend/README.md` and `05-development/backend/README.md` for the tech stack
3. Read `06-infrastructure/security/README.md` for privacy and compliance requirements
4. Design 10-15 critical events mapped to the product's activation and retention milestones
5. Define user identification strategy (anonymous → known, multi-device)
6. Establish event naming conventions with examples
7. Create the privacy compliance checklist customized to applicable regulations
8. Recommend a tracking stack based on stage and budget (e.g., PostHog for bootstrapped, Segment + Mixpanel for funded)
9. Output everything as `README.md` in this folder

## Example Output (Snippet)

```markdown
## Core Event Tracking Plan

### Lifecycle Events
| Event | Properties | Trigger |
|---|---|---|
| `user_signed_up` | method, referral_source, utm_params | Registration complete |
| `user_activated` | activation_criteria_met, days_since_signup | First project created |
| `subscription_started` | plan, interval, trial | Payment processed |

### Naming Convention
- Format: `object_action` in snake_case
- Objects: user, project, document, team, subscription, invoice
- Actions: created, updated, deleted, viewed, exported, shared
- Examples: `project_created`, `document_exported`, `team_member_invited`
```

## Cross-References

- `06-infrastructure/security` — privacy compliance requirements shape what you can track
- `14-retention/feature-adoption` — feature tracking data drives adoption analysis
- `13-analytics/funnel-analysis` — funnels are built from the events defined here
- `13-analytics/kpi-dashboard` — KPIs are computed from tracked events
- `13-analytics/cohort-analysis` — cohorts are segmented using event and user properties
