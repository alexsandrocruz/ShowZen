---
department: 17-legal
subfolder: compliance
priority: P1
stage: post-launch
estimated_time: "2-6 weeks"
requires: ["17-legal/terms-and-privacy", "06-infrastructure/security"]
---

# Compliance

## Overview

This folder is for **regulatory and compliance frameworks** — GDPR, CCPA, SOC 2, HIPAA, PCI-DSS, or industry-specific requirements. Compliance is a competitive advantage: enterprise buyers and regulated industries require it.

## Questions to Answer

1. **Who are your customers?** (B2B, B2C, enterprise, regulated industries?)
2. **Do you process EU/UK personal data?** (GDPR applies)
3. **Do you process California residents' data?** (CCPA applies)
4. **Do you need SOC 2?** (Type I, Type II — required by many enterprises)
5. **Do you handle health data?** (HIPAA — BAA required)
6. **Do you process payment cards directly?** (PCI-DSS — or delegate to Stripe?)
7. **Are there industry-specific regulations?** (fintech, edtech, etc.)
8. **What's your compliance roadmap?** (Prioritize by customer demand)

## Output Template

Create a `README.md` in this folder with:

```markdown
# Compliance: [Your SaaS Name]

## Compliance Matrix
| Framework | Applicable? | Status | Target Date | Owner |
|---|---|---|---|---|
| GDPR | | | | |
| CCPA | | | | |
| SOC 2 Type I | | | | |
| SOC 2 Type II | | | | |
| HIPAA | | | | |
| PCI-DSS | | | | |
| [Industry-specific] | | | | |

## GDPR Readiness
- [ ] Legal basis for processing documented
- [ ] Privacy Policy updated
- [ ] Cookie consent implemented
- [ ] Data subject request process (access, deletion, portability)
- [ ] DPA available for B2B customers
- [ ] Subprocessor list maintained
- [ ] Data retention policy documented

## SOC 2 Readiness
- [ ] Security policies documented
- [ ] Access controls and least privilege
- [ ] Incident response plan
- [ ] Vendor risk assessment process
- [ ] Auditor selected
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Vanta** | SOC 2, HIPAA compliance automation | $20k+/yr |
| **Drata** | Compliance automation, audit prep | $20k+/yr |
| **Secureframe** | Compliance as a service | $15k+/yr |
| **OneTrust** | Privacy management, consent | Enterprise |
| **Legal counsel** | Compliance strategy, audit support | $300-500/hr |

## Agent Instructions

1. Read `company-profile.md` for target customers and markets
2. Read [17-legal/terms-and-privacy](../terms-and-privacy/) for data practices
3. Determine GDPR applicability (EU users = yes)
4. Determine SOC 2 need (enterprise B2B = likely)
5. Document compliance roadmap with priorities and owners
6. Cross-ref [06-infrastructure/security](../../06-infrastructure/security/) for security controls

## Cross-References

- [17-legal/terms-and-privacy](../terms-and-privacy/) — Privacy policy, DPA
- [06-infrastructure/security](../../06-infrastructure/security/) — Security controls
- [12-revenue/enterprise-deals](../../12-revenue/enterprise-deals/) — Enterprise security questionnaires
