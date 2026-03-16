---
department: 07-testing
subfolder: bug-fixing
priority: P1
stage: development
estimated_time: "1-2 days"
requires:
  - 06-infrastructure/monitoring
---

# Bug Tracking, Triage & Resolution

## Overview

This folder documents your bug tracking process — how bugs are reported, prioritized, assigned, and resolved. Every product has bugs. What separates good teams from chaotic ones isn't the absence of bugs, it's having a system to handle them efficiently.

Without a defined triage process, bugs either pile up into an overwhelming backlog or get fixed in random order based on who shouts loudest. A severity matrix and SLA framework ensures critical bugs get fixed in hours while cosmetic issues don't derail your sprint.

## Questions to Answer

Before generating the output document, the founder should answer:

1. **What tool will you use for bug tracking?** Linear, Jira, GitHub Issues, Shortcut, or something else?
2. **How are bugs reported?** In-app feedback widget, support tickets, internal QA, monitoring alerts?
3. **What are your severity levels?** How many tiers and what defines each?
4. **What are your SLA targets?** Time to acknowledge and time to resolve per severity level?
5. **Who triages incoming bugs?** Dedicated person, rotating duty, or the team lead?
6. **Do you require root cause analysis?** For all bugs, only for P0/P1, or never?
7. **Do you write regression tests for every bug fix?** Always, for critical bugs, or case-by-case?
8. **How do you track bug metrics?** Bug creation rate, resolution time, reopen rate?

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# Bug Tracking & Resolution Process: [Your SaaS Name]

## Bug Tracking Setup
| Attribute | Value |
|---|---|
| Tool | Linear / GitHub Issues / Jira |
| Reporting channels | In-app widget, support email, monitoring alerts |
| Triage owner | [Role / person] |
| Triage cadence | [Daily standup / continuous] |

## Severity Matrix
| Severity | Definition | Example | SLA (Acknowledge) | SLA (Resolve) |
|---|---|---|---|---|
| P0 — Critical | Service down or data loss/corruption | API returns 500 for all users | 15 min | 4 hours |
| P1 — High | Major feature broken, no workaround | Can't create new projects | 1 hour | 24 hours |
| P2 — Medium | Feature broken, workaround exists | CSV export fails but JSON works | 4 hours | 1 week |
| P3 — Low | Minor issue, cosmetic, or edge case | Button misaligned on Safari | 1 day | Next sprint |
| P4 — Trivial | Nit / polish | Typo in tooltip | Backlog | Best effort |

## Bug Report Template
```
**Title:** [Short, descriptive title]
**Severity:** P0 / P1 / P2 / P3 / P4
**Reporter:** [Name / email]
**Environment:** [Production / Staging / Local] — [Browser / OS]
**Steps to Reproduce:**
1.
2.
3.
**Expected Behavior:** [What should happen]
**Actual Behavior:** [What actually happens]
**Screenshots/Video:** [Attach if available]
**Error Logs:** [Paste relevant logs or Sentry link]
```

## Triage Workflow
1. **Report** — Bug submitted via any channel → lands in triage queue
2. **Triage** — Triage owner assigns severity, labels, and owner
3. **Reproduce** — Engineer reproduces the bug in staging
4. **Root Cause** — Identify why the bug exists (for P0/P1: mandatory)
5. **Fix** — Implement fix with regression test
6. **Review** — PR reviewed with extra scrutiny on affected area
7. **Deploy** — Fix deployed (P0: hotfix path, others: normal release)
8. **Verify** — Reporter confirms the fix resolves the issue
9. **Close** — Bug marked as resolved with RCA notes

## Bug Metrics
| Metric | Target | Measured |
|---|---|---|
| Mean time to acknowledge | < 2 hours | Weekly |
| Mean time to resolve (P0) | < 4 hours | Weekly |
| Mean time to resolve (P1) | < 24 hours | Weekly |
| Bug reopen rate | < 5% | Monthly |
| Bugs created per week | Trending down | Weekly |

## Root Cause Analysis Template
| Field | Value |
|---|---|
| Bug ID | |
| Summary | |
| Root cause | |
| Why it wasn't caught | |
| Fix description | |
| Regression test added | Yes / No |
| Preventive action | |
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Linear** | Fast, modern issue tracking | Free tier |
| **GitHub Issues** | Built-in issue tracking (if using GitHub) | Free |
| **Jira** | Enterprise issue tracking | Free tier (10 users) |
| **Sentry** | Auto-capture errors with stack traces and user context | Free tier |
| **BetterBugs / Jam** | Screen recording + console logs for bug reports | Free tier |
| **Canny** | User-facing bug and feature request board | Free tier |

## Agent Instructions

When populating this folder for a founder:

1. Read `company-profile.md` for team size and stage (solo founder → simpler process)
2. Read `06-infrastructure/monitoring` for alerting setup — alerts feed into bug triage
3. Ask the 8 questions above if not answered
4. Recommend Linear for startups (fast, keyboard-driven) or GitHub Issues if they want minimal tooling
5. Define severity levels calibrated to the product (what counts as "critical" depends on the product)
6. Set SLA targets that are realistic for the team size — a solo founder can't respond in 15 min at 3 AM
7. Create a bug report template with all required fields
8. Design a triage workflow with specific roles and handoff points
9. Include bug metrics with concrete targets and measurement frequency
10. Add a root cause analysis template for P0/P1 bugs

## Example Output (Abbreviated)

```markdown
# Bug Tracking: TaskFlow

## Severity Matrix
| Severity | Definition | Example | Acknowledge | Resolve |
|---|---|---|---|---|
| P0 | Service-wide outage | Dashboard blank for all users | 15 min | 4 hours |
| P1 | Core feature broken | Task creation returns error | 1 hour | 24 hours |
| P2 | Non-core feature broken | Filter doesn't persist on refresh | 4 hours | 1 sprint |
| P3 | Cosmetic / edge case | Avatar doesn't load on slow connections | 1 day | Backlog |
```

## Cross-References

- **Depends on:** [06-infrastructure/monitoring](../../06-infrastructure/monitoring/) — Alerts that generate bug reports
- **Pairs with:** [07-testing/unit-testing](../unit-testing/) — Regression tests for every bug fix
- **Pairs with:** [07-testing/integration-testing](../integration-testing/) — E2E tests to prevent regressions
- **Supports:** [08-launch/beta-testing](../../08-launch/beta-users/) — Beta users report bugs through this process
- **Informs:** [14-retention/customer-support](../../14-retention/customer-support/) — Support team escalates bugs here
