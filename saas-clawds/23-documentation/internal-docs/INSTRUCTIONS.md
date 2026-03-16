---
department: 23-documentation
subfolder: internal-docs
priority: P1
stage: post-launch
estimated_time: "1-2 weeks"
requires: ["05-development", "06-infrastructure"]
---

# Internal Docs

## Overview

This folder is for **internal documentation** — runbooks, architecture docs, ADRs (Architecture Decision Records), and team wikis. Internal docs preserve knowledge and enable onboarding.

## Questions to Answer

1. **Where do you store internal docs?** (Notion, Confluence, Wiki?)
2. **What runbooks do you need?** (Incident response, deployment, support?)
3. **Do you document architecture?** (System design, data flow?)
4. **Do you use ADRs?** (Architecture Decision Records)
5. **What's the doc structure?** (By team? By domain?)
6. **Who owns what?** (Doc ownership model?)
7. **How do you keep docs fresh?** (Review cadence?)

## Output Template

Create a `README.md` in this folder with:

```markdown
# Internal Docs: [Your SaaS Name]

## Documentation Hub
- **Tool:** [Notion, Confluence, Git, etc.]
- **URL:** 
- **Access:** [Internal only]

## Structure
| Section | Purpose | Owner |
|---|---|---|
| Engineering | Architecture, runbooks, ADRs | Eng |
| Product | Roadmap, specs, processes | Product |
| Operations | Incident, deployment, support | Ops |
| Company | Handbook, policies | People |

## Runbooks
| Runbook | Purpose | Owner |
|---|---|---|
| Incident response | Outage, breach | Ops |
| Deployment | Deploy to production | DevOps |
| Rollback | Revert release | DevOps |
| Support escalation | Level 2 handoff | Support |
| [Custom] | | |

## Architecture Docs
| Doc | Purpose |
|---|---|
| System overview | High-level architecture |
| Data flow | How data moves |
| Key services | Service map |
| [Custom] | |

## ADR (Architecture Decision Records)
| ADR | Decision | Date |
|---|---|---|
| 001 | [e.g., Use PostgreSQL] | |
| 002 | [e.g., Use Stripe for payments] | |
| 003 | | |

## Doc Ownership
- **Review cadence:** Quarterly
- **Outdated doc process:** Flag, update, or archive
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Notion** | Wiki, runbooks, flexible | Free |
| **Confluence** | Enterprise wiki | $5+/user |
| **Slite** | Team wiki | $ |
| **Git** | ADRs, technical docs | Free |
| **Loom** | Video runbooks | Free tier |
| **Scribe** | Process documentation | $ |

## Agent Instructions

1. Read [06-infrastructure/monitoring](../../06-infrastructure/monitoring/) for incident runbook
2. Read [06-infrastructure/ci-cd](../../06-infrastructure/ci-cd/) for deployment runbook
3. Read [14-retention/customer-support](../../14-retention/customer-support/) for support runbook
4. List 5-7 runbooks with owners
5. Document architecture doc structure (system, data flow, services)
6. Define ADR format and list 2-3 example decisions
7. Cross-ref [16-scaling/systems](../../16-scaling/systems/) for process docs

## Cross-References

- [06-infrastructure/monitoring](../../06-infrastructure/monitoring/) — Incident runbook
- [06-infrastructure/ci-cd](../../06-infrastructure/ci-cd/) — Deployment runbook
- [16-scaling/systems](../../16-scaling/systems/) — Process documentation
