---
department: 23-documentation
subfolder: user-docs
priority: P0
stage: post-launch
estimated_time: "2-4 weeks"
requires: ["04-design/ux-flows", "14-retention/user-onboarding"]
---

# User Docs

## Overview

This folder is for **user-facing documentation** — help center structure, getting started guides, feature documentation, and FAQs. User docs reduce support load and improve self-service.

## Questions to Answer

1. **Where will your help center live?** (Subdomain? In-app? Both?)
2. **What's the structure?** (By feature? By task? By role?)
3. **What are the top 20 articles you need?** (Support-driven)
4. **Do you have getting started guides?** (By user type?)
5. **How do you keep docs in sync with product?** (Per-release review?)
6. **Do you use screenshots/videos?** (Tools? Process?)
7. **How do users find docs?** (Search? In-app links? Support handoff?)

## Output Template

Create a `README.md` in this folder with:

```markdown
# User Docs: [Your SaaS Name]

## Help Center
- **URL:** [docs.yoursaas.com or help.yoursaas.com]
- **Tool:** [Notion, Intercom, GitBook, Docusaurus, etc.]
- **Search:** [Built-in / Algolia / etc.]
- **In-app links:** [Contextual help?]

## Structure
| Section | Purpose | Example Articles |
|---|---|---|
| Getting Started | Onboarding | Sign up, First project, Invite team |
| Core Features | Feature guides | [Feature A], [Feature B] |
| Billing & Account | Account management | Upgrade, cancel, billing |
| Integrations | Third-party connections | Zapier, API |
| FAQ | Common questions | Top 10 FAQs |
| Troubleshooting | Error resolution | Common errors |

## Top 20 Articles (Prioritized)
1. 
2. 
3. 
... (support ticket analysis drives this)

## Getting Started by Role
| Role | Guide | Link |
|---|---|---|
| [Admin] | Full setup | |
| [User] | Quick start | |
| [Viewer] | Read-only overview | |

## Doc Maintenance
- **Owner:** 
- **Review cadence:** Per release / Monthly
- **Screenshot tool:** 
- **Video tool:** 
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Intercom** | Help center + support | $74+/mo |
| **Zendesk** | Help center | $55+/mo |
| **GitBook** | Docs, developer-friendly | Free tier / $ |
| **Notion** | Simple docs | Free |
| **Docusaurus** | Open-source docs site | Free |
| **Coda** | Interactive docs | Free tier |
| **Loom** | Video walkthroughs | Free tier |
| **Clearbit** | Screenshot tool | $ |

## Agent Instructions

1. Read [04-design/ux-flows](../../04-design/ux-flows/) for key flows to document
2. Read [14-retention/user-onboarding](../../14-retention/user-onboarding/) for getting started
3. Read [14-retention/customer-support](../../14-retention/customer-support/) for top support topics
4. Create 5-6 section structure (Getting Started, Features, Billing, Integrations, FAQ)
5. List top 20 articles (derive from support FAQs, onboarding steps)
6. Define maintenance process (owner, cadence)
7. Cross-ref [21-product-management/release-management](../../21-product-management/release-management/) for doc updates per release

## Cross-References

- [14-retention/customer-support](../../14-retention/customer-support/) — Support drives doc topics
- [14-retention/user-onboarding](../../14-retention/user-onboarding/) — Getting started
- [21-product-management/release-management](../../21-product-management/release-management/) — Release → doc update
