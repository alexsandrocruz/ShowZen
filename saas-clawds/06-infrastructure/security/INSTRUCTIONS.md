---
department: 06-infrastructure
subfolder: security
priority: P1
stage: development
estimated_time: "3-5 days"
requires:
  - 05-development/authentication
  - 06-infrastructure/cloud-hosting
---

# Security, Compliance & Vulnerability Management

## Overview

This folder documents your security posture — the hardening practices, compliance requirements, vulnerability management, and incident response plans that protect your users' data and your business. Security isn't a feature you add later. It's a property of how you build from the start.

A single data breach can kill a SaaS startup. Beyond the financial cost, the trust damage is often unrecoverable. The good news: most SaaS security failures come from a small set of well-known mistakes (OWASP Top 10). Addressing these systematically puts you ahead of 90% of startups.

## Questions to Answer

Before generating the output document, the founder should answer:

1. **What compliance frameworks do you need?** SOC 2, GDPR, HIPAA, PCI-DSS, or none yet?
2. **What data do you store and how sensitive is it?** PII, payment info, health data, business data?
3. **What's your encryption strategy?** Data at rest, data in transit, application-level encryption?
4. **Do you plan to do penetration testing?** At launch, quarterly, annually? Internal or third-party?
5. **How do you manage dependencies and vulnerabilities?** Automated scanning, manual review, both?
6. **What's your access control model?** Who has production access? How is it audited?
7. **Do you have a responsible disclosure / bug bounty program?** Or will you create one?
8. **What's your data backup and recovery strategy?** In case of ransomware, accidental deletion, or corruption?

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# Security Posture: [Your SaaS Name]

## Security Overview
| Attribute | Status |
|---|---|
| Compliance target | SOC 2 Type I / GDPR / None yet |
| Encryption at rest | Yes / No |
| Encryption in transit | TLS 1.3 |
| Pen testing | [Planned / Completed / Not yet] |
| Bug bounty | [Active / Planned / Not yet] |

## OWASP Top 10 Checklist
| # | Risk | Status | Implementation |
|---|---|---|---|
| A01 | Broken Access Control | ✅ / ⚠️ / ❌ | [How you address it] |
| A02 | Cryptographic Failures | | |
| A03 | Injection | | |
| A04 | Insecure Design | | |
| A05 | Security Misconfiguration | | |
| A06 | Vulnerable Components | | |
| A07 | Auth Failures | | |
| A08 | Data Integrity Failures | | |
| A09 | Logging & Monitoring Failures | | |
| A10 | SSRF | | |

## Data Classification
| Data Type | Classification | Encryption | Retention | Access |
|---|---|---|---|---|
| User emails | PII | At rest + transit | Account lifetime | App + admin |
| Passwords | Secret | Hashed (argon2/bcrypt) | Account lifetime | Nobody (hashed) |
| Payment info | PCI | Handled by Stripe | N/A (tokenized) | Stripe only |
| User content | Business | At rest + transit | Account lifetime | User + team |

## Dependency Vulnerability Management
- Scanner: [Dependabot / Snyk / GitHub security alerts]
- Review cadence: [Weekly / On alert]
- Patch SLA: Critical within 24h, High within 7d, Medium within 30d

## Production Access Control
| Access Level | Who | How | Audit |
|---|---|---|---|
| Database (read) | CTO, Lead Engineer | Bastion host / Supabase dashboard | Logged |
| Database (write) | CTO only | Migration scripts only | PR reviewed |
| Hosting console | CTO, Lead Engineer | SSO + MFA | Provider audit log |
| Secrets manager | CI, CTO | Service account / MFA | Access logged |

## Security Incident Response Plan
1. **Detection** — Alert from monitoring, user report, or vulnerability disclosure
2. **Containment** — Isolate affected systems, revoke compromised credentials
3. **Assessment** — Determine scope, affected data, and root cause
4. **Notification** — Inform affected users within [72 hours / as required by law]
5. **Remediation** — Patch the vulnerability, restore from backup if needed
6. **Post-mortem** — Document and publish incident report, update security controls
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Dependabot** | Automated dependency vulnerability scanning | Free (GitHub) |
| **Snyk** | Dependency and container security scanning | Free tier |
| **OWASP ZAP** | Open-source web app security scanner | Free |
| **Vanta** | SOC 2 / HIPAA / GDPR compliance automation | $$$  (post-revenue) |
| **Drata** | Compliance automation platform | $$$ (post-revenue) |
| **AWS Security Hub / GuardDuty** | Cloud security monitoring | Pay-as-you-go |
| **1Password / Bitwarden** | Team password and secrets management | $4/user/mo |

**References:** OWASP Top 10, CIS Benchmarks, SOC 2 Trust Service Criteria

## Agent Instructions

When populating this folder for a founder:

1. Read `company-profile.md` for target customers (enterprise → compliance needs), data sensitivity, and stage
2. Read `05-development/authentication` for the auth implementation and security practices
3. Read `06-infrastructure/cloud-hosting` for the infrastructure to secure
4. Ask the 8 questions above if not answered
5. Complete the OWASP Top 10 checklist with product-specific mitigations
6. Classify all data types the product stores with sensitivity levels and handling rules
7. For pre-revenue startups, focus on free tools (Dependabot, OWASP ZAP) not enterprise platforms
8. Define production access control with the principle of least privilege
9. Write a security incident response plan with specific notification timelines
10. If targeting enterprise customers, outline a SOC 2 readiness roadmap (even if months away)

## Example Output (Abbreviated)

```markdown
# Security Posture: TaskFlow

## OWASP Top 10 Checklist (partial)
| # | Risk | Status | Implementation |
|---|---|---|---|
| A01 | Broken Access Control | ✅ | Clerk handles auth; row-level security via org_id on all queries |
| A03 | Injection | ✅ | Prisma ORM parameterizes all queries; Zod validates all input |
| A06 | Vulnerable Components | ✅ | Dependabot enabled, auto-merge for patch updates |
| A07 | Auth Failures | ✅ | Clerk handles rate limiting, brute force protection, MFA |
```

## Cross-References

- **Depends on:** [05-development/authentication](../../05-development/authentication/) — Auth security implementation
- **Depends on:** [06-infrastructure/cloud-hosting](../cloud-hosting/) — Infrastructure to secure
- **Pairs with:** [06-infrastructure/monitoring](../monitoring/) — Security event detection
- **Informs:** [05-development/apis](../../05-development/apis/) — Rate limiting and input validation
- **Supports:** [08-launch/public-release](../../08-launch/public-release/) — Security readiness for launch
