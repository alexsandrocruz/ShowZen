---
department: 20-customer-success
subfolder: quarterly-business-reviews
priority: P1
stage: growth
estimated_time: "1-2 days"
requires: ["13-analytics/kpi-dashboard", "12-revenue/upsells"]
---

# Quarterly Business Reviews

## Overview

This folder is for **QBR (Quarterly Business Review) templates** — structured meetings with key accounts to review usage, success metrics, ROI, and expansion opportunities. QBRs strengthen relationships and uncover upsell moments.

## Questions to Answer

1. **Who gets QBRs?** (All customers? Enterprise only? Above $X ACV?)
2. **How often?** (Quarterly standard; some do bi-annually for SMB)
3. **Who runs them?** (CSM, account manager, founder?)
4. **What's on the agenda?** (Usage review, ROI, roadmap, expansion?)
5. **How do you prepare?** (Usage report, health score, expansion ideas?)
6. **What follow-up do you send?** (Summary, action items, next steps?)
7. **How do you track QBR outcomes?** (Expansion, renewal risk, NPS?)

## Output Template

Create a `README.md` in this folder with:

```markdown
# QBR Program: [Your SaaS Name]

## QBR Eligibility
- **Tier:** [Enterprise / Mid-market / All paid]
- **ACV threshold:** $X+
- **Cadence:** Quarterly
- **Owner:** CSM / Account Manager

## QBR Agenda (60 min)
| Section | Time | Content |
|---|---|---|
| Recap & goals | 5 min | Last quarter outcomes |
| Usage review | 15 min | Key metrics, adoption, trends |
| ROI / Business impact | 10 min | Value delivered, outcomes |
| Product roadmap | 10 min | What's coming, feedback |
| Expansion / Next quarter | 15 min | Upsell opportunities, goals |
| Q&A / Action items | 5 min | Next steps, owners |

## Pre-QBR Prep Checklist
- [ ] Pull usage report (last 90 days)
- [ ] Health score current
- [ ] Identify expansion opportunities
- [ ] Prepare ROI story
- [ ] Share agenda 48h before

## Post-QBR
- [ ] Send meeting summary within 24h
- [ ] Log in CRM (outcomes, next steps)
- [ ] Schedule follow-up if expansion discussed
- [ ] Update health score if risk surfaced
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Vitally / ChurnZero** | QBR tracking, templates | $ |
| **Gong / Chorus** | Call recording, insights | $1k+/mo |
| **Looker / Metabase** | Usage reports for QBR | $ |
| **Google Slides / Pitch** | QBR deck template | Free / $ |

## Agent Instructions

1. Read [13-analytics/kpi-dashboard](../../13-analytics/kpi-dashboard/) for metrics to show
2. Read [12-revenue/upsells](../../12-revenue/upsells/) for expansion opportunities
3. Create 60-minute QBR agenda with 6 sections
4. Document pre- and post-QBR checklist
5. Define eligibility (ACV threshold, tier)
6. Cross-ref [20-customer-success/expansion-playbook](../expansion-playbook/) for expansion discussion

## Cross-References

- [20-customer-success/expansion-playbook](../expansion-playbook/) — Expansion opportunities
- [12-revenue/upsells](../../12-revenue/upsells/) — Upsell triggers
- [13-analytics/kpi-dashboard](../../13-analytics/kpi-dashboard/) — Metrics to present
