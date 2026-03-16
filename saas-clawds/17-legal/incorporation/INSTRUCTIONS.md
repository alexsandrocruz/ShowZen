---
department: 17-legal
subfolder: incorporation
priority: P0
stage: pre-launch
estimated_time: "1-2 weeks"
requires: ["01-idea"]
---

# Incorporation

## Overview

This folder is for documenting your **business entity structure** — the legal form of your company, jurisdiction, formation documents, and governance. Incorporation is the foundation of everything else: you can't sign contracts, raise money, or hire employees without a proper entity.

## Questions to Answer

1. **What entity type will you use?** (LLC, C-Corp, S-Corp, etc.) Why?
2. **In which jurisdiction will you incorporate?** (Delaware, your home state, etc.)
3. **Have you filed formation documents?** If not, what's the timeline?
4. **Who are the founders and what are their equity splits?**
5. **Is there a vesting schedule?** (4-year with 1-year cliff is standard)
6. **Who has signing authority?** What decisions require board approval?
7. **Do you have a registered agent?** For service of process?

## Output Template

Create a `README.md` in this folder with:

```markdown
# Incorporation: [Your SaaS Name]

## Entity Structure
- **Entity type:** 
- **Jurisdiction:** 
- **Date of formation:** 
- **EIN/Tax ID:** 

## Founders & Equity
| Founder | Role | Equity % | Vesting |
|---|---|---|---|
| | | | |

## Governance
- **Registered agent:** 
- **Authorized signatories:** 
- **Board composition:** 
- **Major decisions requiring board approval:** 

## Formation Checklist
- [ ] File formation documents
- [ ] Obtain EIN
- [ ] Open business bank account
- [ ] Adopt bylaws/operating agreement
- [ ] Issue founder shares
- [ ] Set up cap table (Carta, Pulley, etc.)
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Stripe Atlas** | Incorporation + bank + tax ID | $500 one-time |
| **Clerky** | Formation + 83(b), compliance | $299+ |
| **Carta / Pulley** | Cap table management | Free tier / $500+ |
| **Legal counsel** | Custom structures, complex cases | $300-500/hr |

## Agent Instructions

1. Read `company-profile.md` for founder names and product
2. Ask incorporation questions above if not in profile
3. Default: Delaware C-Corp for VC-backed; LLC for bootstrapped
4. Fill template with specific answers — no generic placeholders
5. Cross-ref [18-finance/fundraising](../../18-finance/fundraising/) for cap table alignment

## Cross-References

- [18-finance/fundraising](../../18-finance/fundraising/) — Cap table, investors, term sheets
- [17-legal/contracts](../contracts/) — Signing authority for contracts
- [26-people-and-culture/compensation](../../26-people-and-culture/compensation/) — Equity for employees
