---
department: 20-customer-success
subfolder: onboarding-program
priority: P0
stage: post-launch
estimated_time: "2-3 days"
requires: ["14-retention/user-onboarding", "04-design/ux-flows"]
---

# Onboarding Program

## Overview

This folder is for the **structured onboarding journey** for new customers — post-sale. Distinct from [14-retention/user-onboarding] (in-product UX), this is the human-led or programmatic touchpoints: kickoff calls, success milestones, check-ins. Especially critical for high-touch/enterprise.

## Questions to Answer

1. **What's your onboarding model?** (Fully automated, hybrid, high-touch?)
2. **What are the first 30/60/90 day milestones?** (Time to first value)
3. **Do you have a kickoff call?** (Who runs it? Agenda?)
4. **What emails/sequences run during onboarding?**
5. **How do you measure onboarding success?** (Activation metric?)
6. **When do you hand off from onboarding to "steady state" CS?**
7. **What's different for enterprise vs SMB?** (If applicable)

## Output Template

Create a `README.md` in this folder with:

```markdown
# Onboarding Program: [Your SaaS Name]

## Onboarding Model
- **SMB/Self-serve:** [Fully automated / Light touch]
- **Mid-market:** [Hybrid - kickoff + automated]
- **Enterprise:** [High-touch, dedicated CSM]

## First 30 Days
| Day | Milestone | Touchpoint | Owner |
|---|---|---|---|
| 0 | Signup / Contract signed | Welcome email | Product/CS |
| 1 | Account setup | Kickoff call (if high-touch) | CS |
| 3 | First key action | In-app checklist | Product |
| 7 | Check-in | Email or call | CS |
| 14 | Mid-check | Usage review | CS |
| 30 | Onboarding complete | Success review | CS |

## Kickoff Call Agenda (High-Touch)
1. Intro and roles
2. Goals for using [product]
3. Success metrics
4. Setup walkthrough
5. Q&A
6. Next steps and timeline

## Success Milestones
- **Day 7:** [First value moment - e.g., first report exported]
- **Day 30:** [Core workflow adopted]
- **Day 90:** [Power user behaviors]
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **ChurnZero / Vitally** | Onboarding playbooks | $ |
| **Customer.io / Intercom** | Lifecycle emails | $ |
| **Appcues / Pendo** | In-app onboarding | $ |
| **Loom** | Async video walkthroughs | Free tier |
| **Notion** | Onboarding docs, checklists | Free |

## Agent Instructions

1. Read [14-retention/user-onboarding](../../14-retention/user-onboarding/) for in-product flow
2. Read [04-design/ux-flows](../../04-design/ux-flows/) for key user flows
3. Define 30/60/90 day milestones aligned with "aha moment"
4. Create touchpoint calendar (email, call, in-app)
5. Differentiate SMB (automated) vs enterprise (high-touch)
6. Cross-ref [14-retention/email-automation](../../14-retention/email-automation/) for email sequences

## Cross-References

- [14-retention/user-onboarding](../../14-retention/user-onboarding/) — In-product onboarding UX
- [14-retention/email-automation](../../14-retention/email-automation/) — Onboarding emails
- [20-customer-success/health-scoring](../health-scoring/) — Early health signals
