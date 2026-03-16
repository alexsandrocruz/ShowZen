---
department: 23-documentation
subfolder: changelog
priority: P1
stage: post-launch
estimated_time: "1-2 days"
requires: ["21-product-management/release-management"]
---

# Changelog

## Overview

This folder is for **release notes and changelog** — format, versioning strategy, where it's published, and how users are notified. A good changelog builds trust and keeps users informed.

## Questions to Answer

1. **Where do you publish the changelog?** (Dedicated page? In-app? Email?)
2. **What format do you use?** (Added, Changed, Fixed, etc.)
3. **How do you version?** (Semantic? Date-based? "Release 42"?)
4. **How do you notify users?** (Email? In-app banner? Both?)
5. **Who writes release notes?** (PM? Dev? Both?)
6. **Do you have a template?** (Per release?)
7. **Do you segment by user?** (All users vs. power users?)

## Output Template

Create a `README.md` in this folder with:

```markdown
# Changelog: [Your SaaS Name]

## Changelog Location
- **URL:** [changelog.yoursaas.com or /changelog]
- **Tool:** [Beamer, Headway, Notion, custom]
- **In-app:** [Yes / No - where?]
- **Email:** [Yes / No - to whom?]

## Format
| Category | Description | Example |
|---|---|---|
| Added | New features | "New: Bulk export to CSV" |
| Changed | Changes to existing | "Updated: Dashboard loading 2x faster" |
| Fixed | Bug fixes | "Fixed: Login on Safari" |
| Deprecated | Soon to be removed | "Deprecated: Old API v1" |
| Removed | Removed features | "Removed: Legacy report" |
| Security | Security updates | "Security: Updated dependencies" |

## Versioning
- **Strategy:** [Semantic v1.2.3 / Date 2024-01-15 / Release #42]
- **Frequency:** [Weekly / Bi-weekly / Monthly]
- **Current version:** 

## Notification Plan
| Channel | Trigger | Audience |
|---|---|---|
| In-app | Every release | All users |
| Email | Major release | All / Segment |
| Slack/Community | Every release | Community |
| Blog | Major release | Public |

## Release Notes Template
**## [Version] - [Date]**
### Added
- 
### Changed
- 
### Fixed
- 
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Beamer** | In-app changelog, notifications | $49+/mo |
| **Headway** | Changelog + notifications | $49+/mo |
| **Changeset** | Changelog from git | Free |
| **Notion** | Simple changelog page | Free |
| **Custom** | Markdown + static site | Free |

## Agent Instructions

1. Read [21-product-management/release-management](../../21-product-management/release-management/) for release process
2. Choose format (Added, Changed, Fixed standard)
3. Define versioning (semantic or date-based)
4. Document notification plan (in-app, email, segment)
5. Create release notes template
6. Recommend changelog tool (Beamer, Headway, or custom)
7. Cross-ref [14-retention/email-automation](../../14-retention/email-automation/) for release email sequence

## Cross-References

- [21-product-management/release-management](../../21-product-management/release-management/) — Release process
- [14-retention/email-automation](../../14-retention/email-automation/) — Release emails
- [09-acquisition/content-marketing](../../09-acquisition/content-marketing/) — Blog for major releases
