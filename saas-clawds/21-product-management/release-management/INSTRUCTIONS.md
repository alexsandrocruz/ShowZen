---
department: 21-product-management
subfolder: release-management
priority: P1
stage: post-launch
estimated_time: "1-2 days"
requires: ["06-infrastructure/ci-cd", "07-testing/integration-testing"]
---

# Release Management

## Overview

This folder is for **release process, changelogs, feature flags, and rollout strategy** — how you ship software predictably and communicate changes to users. Good release management reduces risk and builds trust.

## Questions to Answer

1. **What's your release cadence?** (Weekly, bi-weekly, monthly? Continuous?)
2. **What's your release process?** (Branch, test, deploy, verify?)
3. **Do you use feature flags?** (LaunchDarkly, Unleash?)
4. **How do you write release notes?** (Format, audience, channel?)
5. **What's your rollout strategy?** (All at once? Canary? Percentage?)
6. **How do you handle rollbacks?** (Automated? Manual? Runbook?)
7. **Who approves production releases?** (Auto after tests? Manual gate?)

## Output Template

Create a `README.md` in this folder with:

```markdown
# Release Management: [Your SaaS Name]

## Release Cadence
- **Frequency:** [Weekly / Bi-weekly / Monthly]
- **Day:** [e.g., Tuesday]
- **Cutoff for release:** [e.g., Monday EOD for Tuesday deploy]

## Release Process
| Step | Owner | Tool/Action |
|---|---|---|
| Code complete | Dev | PR merged to main |
| QA / Smoke test | QA/Dev | Staging validation |
| Feature flag (if applicable) | Dev | LaunchDarkly |
| Deploy to production | DevOps | CI/CD |
| Post-deploy verification | DevOps | Health check, smoke |
| Changelog updated | PM/Dev | [Changelog tool] |
| Release notes published | PM | [Destination] |

## Feature Flag Strategy
- **Tool:** [LaunchDarkly / Unleash / Custom]
- **When to use:** [New feature, risky change, gradual rollout]
- **Default:** Off until validated
- **Rollout:** 10% → 50% → 100% or instant

## Changelog Format
- **Location:** [URL - e.g., changelog.yoursaas.com]
- **Format:** [Category: Description. Optional link.]
- **Categories:** Added, Changed, Fixed, Deprecated, Removed
- **Audience:** Users, internal, both

## Rollback Process
- **Trigger:** [Error rate, user report, manual]
- **Action:** [Revert deploy, disable flag, rollback DB]
- **Owner:** [DevOps / On-call]
- **Runbook:** [Link]
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **LaunchDarkly** | Feature flags | $10+/mo |
| **Unleash** | Open-source feature flags | Free |
| **Linear / Jira** | Release tracking | $ |
| **Changeset** | Changelog generation | Free |
| **Beamer / Headway** | In-app changelog | $ |
| **GitHub Actions** | CI/CD, deploy | Free tier |

## Agent Instructions

1. Read [06-infrastructure/ci-cd](../../06-infrastructure/ci-cd/) for deploy pipeline
2. Read [07-testing/integration-testing](../../07-testing/integration-testing/) for test gates
3. Define release cadence and cutoff
4. Document release process (6–8 steps)
5. Recommend feature flag tool and rollout strategy
6. Define changelog format and categories
7. Document rollback process and runbook link
8. Cross-ref [23-documentation/changelog](../../23-documentation/changelog/) for changelog

## Cross-References

- [06-infrastructure/ci-cd](../../06-infrastructure/ci-cd/) — Deploy pipeline
- [23-documentation/changelog](../../23-documentation/changelog/) — Changelog location
- [07-testing/integration-testing](../../07-testing/integration-testing/) — Release gate
