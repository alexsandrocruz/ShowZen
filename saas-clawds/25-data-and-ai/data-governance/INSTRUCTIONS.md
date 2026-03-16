---
department: 25-data-and-ai
subfolder: data-governance
priority: P1
stage: post-launch
estimated_time: "2-3 days"
requires: ["17-legal/terms-and-privacy", "17-legal/compliance"]
---

# Data Governance

## Overview

This folder is for **data governance** — data classification, access controls, retention policies, and PII handling. Governance ensures data is handled correctly for compliance and security.

## Questions to Answer

1. **What data do you classify?** (Public, internal, confidential, PII?)
2. **Who has access to what?** (Role-based access? Least privilege?)
3. **What's your data retention policy?** (How long do you keep data?)
4. **How do you handle PII?** (Encryption, masking, minimization?)
5. **Do you have a data deletion process?** (User request, account deletion?)
6. **How do you handle data for AI training?** (Opt-in? Anonymized?)
7. **What's your data residency?** (EU, US, multi-region?)

## Output Template

Create a `README.md` in this folder with:

```markdown
# Data Governance: [Your SaaS Name]

## Data Classification
| Level | Definition | Examples |
|---|---|---|
| Public | Can share externally | Marketing site, blog |
| Internal | Company only | Roadmap, financials |
| Confidential | Need-to-know | Customer data, PII |
| Restricted | Highly sensitive | Payment, health data |

## Access Control
| Role | Access |
|---|---|
| All employees | Internal |
| Engineering | DB, logs (masked PII) |
| Support | Customer data (with approval) |
| Finance | Billing data |
| [Custom] | |

## Retention Policy
| Data Type | Retention | Deletion Process |
|---|---|---|
| User accounts | Active + 30 days | Account deletion request |
| Event data | 2 years | Automated purge |
| Billing records | 7 years | Legal requirement |
| Support tickets | 3 years | |
| Logs | 90 days | |

## PII Handling
- **Encryption:** At rest, in transit
- **Masking:** Logs, support (partial)
- **Minimization:** Collect only needed
- **Deletion:** Within 30 days of request
- **AI training:** [Opt-in / Anonymized / No PII]

## Data Residency
| Region | Data stored | Compliance |
|---|---|---|
| US | | |
| EU | | GDPR |
| [Other] | | |
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Vanta / Drata** | Compliance, access reviews | $ |
| **OneTrust** | Privacy management | Enterprise |
| **BigID** | Data discovery, PII | $ |
| **Manual** | Policy docs, spreadsheets | Free |

## Agent Instructions

1. Read [17-legal/terms-and-privacy](../../17-legal/terms-and-privacy/) for privacy commitments
2. Read [17-legal/compliance](../../17-legal/compliance/) for GDPR, CCPA
3. Define 4-level classification (public, internal, confidential, restricted)
4. Document access by role (least privilege)
5. Create retention policy by data type
6. Document PII handling (encryption, masking, deletion)
7. Define data residency (EU for GDPR)
8. Cross-ref [06-infrastructure/security](../../06-infrastructure/security/) for technical controls

## Cross-References

- [17-legal/terms-and-privacy](../../17-legal/terms-and-privacy/) — Privacy policy
- [17-legal/compliance](../../17-legal/compliance/) — GDPR, CCPA
- [06-infrastructure/security](../../06-infrastructure/security/) — Security controls
