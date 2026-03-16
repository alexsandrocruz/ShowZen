---
department: 17-legal
subfolder: terms-and-privacy
priority: P0
stage: pre-launch
estimated_time: "1-2 weeks"
requires: ["01-idea", "05-development/authentication"]
---

# Terms and Privacy

## Overview

This folder is for your **Terms of Service (ToS)**, **Privacy Policy**, **Cookie Policy**, **EULA**, and **DPA** (Data Processing Agreement). These documents protect your business, inform users of their rights, and are required for GDPR, CCPA, and most app store listings.

## Questions to Answer

1. **What data do you collect from users?** (PII, usage data, payment info, etc.)
2. **Where is user data stored and processed?** (regions, subprocessors)
3. **Do you use cookies or similar tech?** What for? (analytics, auth, ads)
4. **Do you sell user data?** (If no, state it clearly)
5. **What's your data retention policy?** How long do you keep user data after account deletion?
6. **Do you offer a DPA for enterprise customers?** (Required for GDPR compliance)
7. **Who handles support for privacy requests?** (access, deletion, portability)

## Output Template

Create a `README.md` in this folder with:

```markdown
# Terms and Privacy: [Your SaaS Name]

## Document Status
| Document | Status | Last Reviewed | Location |
|---|---|---|---|
| Terms of Service | | | |
| Privacy Policy | | | |
| Cookie Policy | | | |
| EULA (if applicable) | | | |
| DPA (Data Processing Agreement) | | | |

## Data Collection Summary
- **PII collected:** 
- **Usage data collected:** 
- **Third-party subprocessors:** 
- **Data residency:** 
- **Retention policy:** 

## Compliance Checklist
- [ ] ToS linked at signup and in footer
- [ ] Privacy Policy accessible and up to date
- [ ] Cookie consent (GDPR) if using non-essential cookies
- [ ] DPA available for enterprise/EEA customers
- [ ] Data deletion process documented
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Termly** | ToS, Privacy, Cookie policy generators | Free / $10/mo |
| **iubenda** | GDPR-compliant policies | $27+/mo |
| **Termly / PrivacyPolicies.com** | Customizable templates | Free-$99 |
| **Legal counsel** | Custom terms for complex products | $300-500/hr |

## Agent Instructions

1. Read `company-profile.md` and [05-development/authentication](../../05-development/authentication/) for data flows
2. Document what data is collected (auth, analytics, payment, etc.)
3. List subprocessors (Stripe, analytics, email, hosting)
4. Recommend data residency based on target market (EU = GDPR)
5. Flag if DPA is needed for B2B/enterprise
6. Cross-ref [17-legal/compliance](../compliance/) for GDPR/CCPA specifics

## Cross-References

- [17-legal/compliance](../compliance/) — GDPR, CCPA, regulatory details
- [05-development/authentication](../../05-development/authentication/) — Auth data, sessions
- [06-infrastructure/security](../../06-infrastructure/security/) — Data security measures
