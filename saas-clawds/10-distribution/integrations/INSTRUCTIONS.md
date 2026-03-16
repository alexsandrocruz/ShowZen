---
department: 10-distribution
subfolder: integrations
priority: P1
stage: post-launch (start planning during development)
estimated_time: 2-3 hours strategy, weeks-months per integration build
requires:
  - 05-development/integrations
  - 03-planning/tech-stack
---

# Integrations — Become Part of Your Users' Existing Workflows

## Overview

This folder contains your integration strategy from a distribution perspective — how building integrations with other tools makes your product more discoverable, more valuable, and stickier. While `05-development/integrations` covers the technical build, this folder covers the business strategy: which integrations to build, why, and how they drive growth.

Integrations serve double duty: they make your product better for existing users AND they create new distribution channels (marketplace listings, co-marketing with partners, "works with X" positioning).

## Questions to Answer

Before generating the integration strategy, the founder needs to answer:

1. **What are the most-requested integrations from your users or prospects?** (Survey data, support tickets, sales objections — what are people asking for?)
2. **Should you build native integrations or use middleware?** (Native = deeper but expensive. Zapier/Make = faster but shallower.)
3. **What integration depth is needed?** (Read-only sync? Bi-directional data flow? Embedded UI? Webhooks?)
4. **What is the maintenance burden per integration?** (API versioning, breaking changes, support overhead)
5. **Which integrations serve as distribution channels?** (Marketplace listings, partner co-marketing, "built on X" programs)
6. **What is your integration development capacity?** (How many integrations can you build and maintain per quarter?)

## Output Template

Generate a comprehensive integration strategy with these sections:

### 1. Integration Roadmap
| Phase | Integration | Type | Distribution Value | Eng Effort | Timeline |
|---|---|---|---|---|---|
| Phase 1 | Zapier | Middleware | Listed in Zapier directory | 1-2 weeks | Month 1 |
| Phase 1 | Slack | Native | Slack App Directory listing | 2-4 weeks | Month 1-2 |
| Phase 2 | HubSpot | Native | HubSpot Marketplace listing | 4-6 weeks | Month 3-4 |
| Phase 2 | Jira | Native | Atlassian Marketplace listing | 3-4 weeks | Month 3-4 |
| Phase 3 | Salesforce | Native | AppExchange listing | 6-8 weeks | Month 5-6 |

### 2. Build vs. Middleware Decision Framework
| Factor | Build Native | Use Middleware (Zapier/Make) |
|---|---|---|
| User experience | Deep, seamless | Basic, functional |
| Engineering cost | High (2-8 weeks) | Low (1-3 days) |
| Maintenance cost | Ongoing | Minimal |
| Distribution value | Marketplace listing | Zapier directory listing |
| Data sync | Real-time, bi-directional | Trigger-based, often one-way |
| **Best for** | Top 3-5 integrations | Everything else |

### 3. Integration Specification Template
For each integration, document:
- **Purpose:** why this integration, what user workflow it enables
- **Data flow:** what data moves where (diagram)
- **Auth method:** OAuth 2.0, API key, etc.
- **Endpoints required:** which APIs you need to call
- **User-facing UI:** settings page, configuration options
- **Error handling:** what happens when the integration breaks
- **Documentation:** user-facing setup guide

### 4. Integration Launch Checklist
- [ ] Integration built and tested in sandbox
- [ ] User-facing documentation written
- [ ] Marketplace listing created (if applicable)
- [ ] Announcement blog post drafted
- [ ] Email to existing users who requested this integration
- [ ] Social media announcement planned
- [ ] Partner notified and co-marketing coordinated
- [ ] Analytics tracking in place (adoption, usage, errors)

### 5. Integration Metrics
- **Adoption rate:** % of users who activate each integration
- **Retention impact:** do users with integrations churn less? (almost always yes)
- **Marketplace traffic:** signups from marketplace listings
- **Support tickets:** integration-related support volume

## Recommended Tools

| Tool | Purpose | Pricing |
|---|---|---|
| **Zapier** | No-code integration middleware | Free to list |
| **Make (Integromat)** | Alternative integration middleware | Free to list |
| **Merge.dev** | Unified API for building integrations at scale | Custom pricing |
| **Paragon** | Embedded integration platform for SaaS | Custom pricing |
| **Tray.io** | Enterprise integration platform | Custom pricing |
| **Postman** | API testing for integration development | Free–$14+/mo |

## Agent Instructions

When populating this folder, the AI agent should:

1. Read `company-profile.md` to understand the product and target customer's tool stack
2. Read `05-development/integrations` for technical integration architecture (if populated)
3. Identify the top 10 integrations users would expect, ranked by demand and distribution value
4. Create a phased integration roadmap spanning 6 months
5. Apply the build vs. middleware decision framework to each integration
6. Write one detailed integration specification as an example
7. Build an integration launch checklist
8. Define metrics for measuring integration success
9. Output everything as `README.md` in this folder

## Example Output (Snippet)

```markdown
## Integration Roadmap — [Async Standup Tool]

### Phase 1: Foundation (Month 1-2)
| Integration | Strategy | Distribution Channel |
|---|---|---|
| Zapier | Middleware | Zapier directory (6M+ users) |
| Slack | Native bot | Slack App Directory (30M+ DAU) |
| Microsoft Teams | Native bot | Teams App Store |

### Phase 2: Workflow Depth (Month 3-4)
| Integration | Strategy | Distribution Channel |
|---|---|---|
| Jira | Native (bi-directional) | Atlassian Marketplace |
| Linear | Native (read + write) | Linear integrations page |
| Notion | Native (sync) | Notion integrations gallery |

### Slack Integration — Specification

**Purpose:** Let users submit standups and receive summaries directly in Slack.
**Data flow:** Slack ↔ [Product]. User submits standup via Slack slash command or modal → syncs to product dashboard. Summary posted to team channel.
**Auth:** Slack OAuth 2.0 (workspace-level install)
**User-facing UI:** /standup slash command, standup modal, summary message in channel, settings in product dashboard
```

## Cross-References

- `05-development/integrations` — the technical implementation of integrations
- `10-distribution/saas-marketplaces` — marketplace listings are the distribution payoff of building integrations
- `10-distribution/partnerships` — integration partners often become strategic partners
- `14-retention/feature-adoption` — integration adoption is a key engagement and retention metric
