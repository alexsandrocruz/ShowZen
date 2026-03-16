---
department: 12-revenue
subfolder: enterprise-deals
priority: P2
stage: growth stage (when enterprise inbound starts)
estimated_time: 6-8 hours initial playbook, ongoing per deal
requires:
  - 11-conversion/pricing-strategy
  - 12-revenue/subscriptions
  - 06-infrastructure/security
---

# Enterprise Deals — Landing Large Contracts with Custom Terms

## Overview

This folder contains your enterprise sales playbook — the strategy for closing large contracts with companies that have more complex needs, longer buying cycles, and higher expectations. Enterprise deals are fundamentally different from self-serve SaaS: they involve multiple stakeholders, formal procurement processes, security reviews, legal negotiations, and custom pricing.

One enterprise deal can be worth 10-50x a self-serve customer, but closing one takes 10-50x the effort. The question isn't whether to pursue enterprise — it's when you're ready. You need product maturity, security compliance, and the capacity to support enterprise-grade requirements before you start selling to them.

## Questions to Answer

Before building the enterprise playbook, the founder needs to answer:

1. **What enterprise features does your product need?** (SSO/SAML, role-based access, audit logs, data residency, SLA, dedicated support, custom integrations)
2. **What are the security and compliance requirements?** (SOC 2, GDPR, HIPAA, ISO 27001, penetration testing, DPA — which are required for your market?)
3. **What custom SLAs will you offer?** (Uptime guarantee, support response times, data backup, disaster recovery)
4. **What is your legal process?** (Can you handle MSAs, DPAs, custom terms? Do you have legal counsel?)
5. **What is your POC (Proof of Concept) process?** (Free enterprise trial? Limited pilot? Sandbox environment?)
6. **What is your enterprise pricing model?** (Per-seat with volume discounts? Custom quotes? Minimum contract value?)
7. **Who handles enterprise sales?** (Founder-led initially? Dedicated AE? Sales engineer support?)
8. **What is your target enterprise deal size?** (Minimum contract value to justify the sales effort — typically $10K+ ARR)

## Output Template

Generate a comprehensive enterprise sales playbook with these sections:

### 1. Enterprise Feature Checklist
| Feature | Status | Required By | Priority |
|---|---|---|---|
| SSO / SAML | | Most enterprises | P0 |
| Role-based access control (RBAC) | | All enterprises | P0 |
| Audit logs | | Security-conscious orgs | P0 |
| SOC 2 Type II compliance | | US enterprise | P0 |
| GDPR compliance | | EU enterprise | P0 |
| Custom data retention policies | | Regulated industries | P1 |
| Dedicated support channel | | All enterprises | P1 |
| Custom integrations / API | | Tech-savvy enterprises | P1 |
| Data residency options | | EU, government | P2 |
| HIPAA compliance | | Healthcare | P2 (if applicable) |
| On-premise / VPC deployment | | High-security orgs | P2 |
| Custom SLA | | All enterprises | P1 |

### 2. Enterprise Sales Process
| Stage | Activities | Duration | Exit Criteria |
|---|---|---|---|
| Discovery | Intro call, needs assessment, stakeholder mapping | 1-2 weeks | ICP confirmed, budget identified |
| Demo | Custom demo tailored to their use case | 1 week | Champion identified, next meeting booked |
| Technical Eval | POC/pilot, security review, integration assessment | 2-4 weeks | Technical approval from IT/security |
| Proposal | Custom pricing, SOW, legal review | 1-2 weeks | Budget approval from decision maker |
| Negotiation | Contract terms, MSA, DPA, legal back-and-forth | 2-4 weeks | Signed contract |
| Onboarding | Implementation, training, go-live | 2-4 weeks | Active usage confirmed |
| **Total:** | | **8-16 weeks** | |

### 3. Security Questionnaire Responses
Pre-written answers to the most common enterprise security questions:
- Where is data stored? (Region, provider, encryption)
- What is your backup and disaster recovery process?
- Do you have SOC 2 Type II certification?
- How do you handle incident response?
- What is your data retention and deletion policy?
- Do you support SSO/SAML? Which providers?
- Do you perform regular penetration testing?
- What is your employee security training process?

### 4. SOW (Statement of Work) Template
- Project scope and objectives
- Deliverables and timeline
- Pricing and payment terms
- Acceptance criteria
- Support and maintenance terms
- Change management process
- Termination clauses

### 5. Enterprise Pricing Calculator
| Variable | Value |
|---|---|
| Base price per user | $X/user/mo |
| Volume discount (50-100 users) | 10% |
| Volume discount (100-500 users) | 20% |
| Volume discount (500+ users) | Custom |
| Annual commitment discount | 15% |
| Minimum contract value | $10,000 ARR |
| Implementation fee | $2,000-10,000 one-time |
| Custom SLA fee | $500/mo |

### 6. Legal Templates
- Master Service Agreement (MSA) template
- Data Processing Agreement (DPA) template
- Service Level Agreement (SLA) template
- Non-Disclosure Agreement (NDA) template
- Order Form template

### 7. Enterprise Onboarding Playbook
- Dedicated onboarding manager assigned
- Kickoff call with stakeholders
- Custom configuration and setup
- Data migration assistance
- Admin training sessions
- End-user training sessions
- 30/60/90 day check-ins
- Go-live support

## Recommended Tools

| Tool | Purpose | Pricing |
|---|---|---|
| **Salesforce** | Enterprise CRM and pipeline management | $25+/mo |
| **HubSpot** | CRM with deal tracking and quoting | Free–$45+/mo |
| **PandaDoc** | Proposal and contract creation | $19+/mo |
| **DocuSign** | Electronic signatures for contracts | $10+/mo |
| **Vanta** | SOC 2 and compliance automation | $10K+/yr |
| **Drata** | Compliance automation platform | Custom pricing |
| **Gong** | Sales call recording and analysis | Custom pricing |
| **Loom** | Async video for demos and follow-ups | Free–$12.50/mo |

## Agent Instructions

When populating this folder, the AI agent should:

1. Read `company-profile.md` to understand the product, stage, and whether enterprise is relevant now
2. Read `06-infrastructure/security/README.md` for current security posture (if populated)
3. Read `11-conversion/pricing-strategy/README.md` for base pricing that enterprise builds on
4. Create an enterprise feature readiness checklist with status columns
5. Design a 6-stage enterprise sales process with timelines
6. Pre-write 10-15 security questionnaire responses based on the product
7. Create an enterprise pricing calculator with volume discounts
8. Draft SOW and SLA templates
9. Build an enterprise onboarding playbook with 30/60/90 milestones
10. Output everything as `README.md` in this folder

## Example Output (Snippet)

```markdown
## Enterprise Sales Process — [Async Standup Tool]

### Stage 1: Discovery Call
**Duration:** 30-45 minutes
**Attendees:** AE + prospect champion + 1-2 stakeholders

**Agenda:**
1. Understand their current standup/check-in process (10 min)
2. Identify pain points (time wasted in meetings, async challenges) (10 min)
3. Demo core product tailored to their team size (15 min)
4. Discuss timeline, budget, and decision process (10 min)

**Qualifying questions:**
- How many people would use this? (need 50+ for enterprise deal)
- What tools are you currently using? (competitor displacement?)
- Who else needs to approve this purchase?
- What is your timeline for implementation?
- Do you have security/compliance requirements?

### Enterprise Pricing — 200-Person Company
| Item | Calculation | Amount |
|---|---|---|
| 200 users × $11/user/mo (20% volume discount) | 200 × $11 × 12 | $26,400/yr |
| Annual commitment discount (15%) | -$3,960 | ($3,960) |
| Implementation fee | One-time | $5,000 |
| Custom SLA | $500/mo × 12 | $6,000/yr |
| **Year 1 Total** | | **$33,440** |
| **Year 2+ Total** | (no implementation fee) | **$28,440/yr** |
```

## Cross-References

- `06-infrastructure/security` — enterprise requires security compliance (SOC 2, GDPR)
- `11-conversion/pricing-strategy` — enterprise pricing extends the standard pricing model
- `12-revenue/subscriptions` — enterprise billing may require custom invoicing
- `12-revenue/annual-plans` — enterprise deals are almost always annual or multi-year
- `14-retention/customer-support` — enterprise customers expect dedicated support
