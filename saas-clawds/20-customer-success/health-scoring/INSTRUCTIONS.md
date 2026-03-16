---
department: 20-customer-success
subfolder: health-scoring
priority: P0
stage: post-launch
estimated_time: "2-4 days"
requires: ["13-analytics/user-tracking", "14-retention/feature-adoption"]
---

# Health Scoring

## Overview

This folder is for **customer health metrics and scoring** — defining what "healthy" looks like, building risk signals, and creating a model that predicts churn before it happens. Health scores drive proactive outreach.

## Questions to Answer

1. **What behaviors correlate with retention?** (Login frequency, feature usage, support tickets?)
2. **What are negative signals?** (Declining usage, support escalations, payment failures?)
3. **How do you score health?** (0–100? Red/yellow/green? Composite?)
4. **What data do you have?** (Product usage, support, billing, NPS?)
5. **How often do you refresh health scores?** (Daily, weekly?)
6. **Who acts on low health scores?** (CSM, support, sales?)
7. **What's your "critical" threshold?** (Immediate outreach)

## Output Template

Create a `README.md` in this folder with:

```markdown
# Health Scoring: [Your SaaS Name]

## Health Score Model
- **Scale:** 0–100 (or Red/Yellow/Green)
- **Refresh:** Weekly
- **Owner:** [CS / Support / Automated]

## Positive Signals (Increase Score)
| Signal | Weight | Source |
|---|---|---|
| Daily/weekly login | | Product |
| Key feature usage | | Product |
| NPS/CSAT response | | Survey |
| Expansion interest | | Sales/CS |
| Advocate behavior | | Community, referrals |

## Negative Signals (Decrease Score)
| Signal | Weight | Source |
|---|---|---|
| No login in 7/14/30 days | | Product |
| Support ticket escalation | | Support |
| Failed payment | | Billing |
| Contract renewal in 90 days + low usage | | |
| Champion left company | | CRM |

## Score Thresholds
| Score | Label | Action |
|---|---|---|
| 80–100 | Healthy | Monitor, nurture advocacy |
| 50–79 | At-risk | Proactive outreach, check-in |
| 0–49 | Critical | Immediate intervention, save play |
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **ChurnZero** | Health scoring, triggers | $599+/mo |
| **Vitally** | CS platform, health + playbooks | $ |
| **Gainsight** | Enterprise CS | Enterprise |
| **Custom (PostHog, Amplitude)** | Build your own | Variable |
| **Spreadsheet** | Manual scoring | Free |

## Agent Instructions

1. Read [13-analytics/user-tracking](../../13-analytics/user-tracking/) for available events
2. Read [14-retention/feature-adoption](../../14-retention/feature-adoption/) for key features
3. Define 5–7 positive and negative signals from product + support + billing
4. Create 3-tier health model (healthy, at-risk, critical)
5. Define actions per tier
6. Cross-ref [14-retention/churn-reduction](../../14-retention/churn-reduction/) for save plays

## Cross-References

- [14-retention/churn-reduction](../../14-retention/churn-reduction/) — Save plays for at-risk
- [13-analytics/user-tracking](../../13-analytics/user-tracking/) — Usage data
- [20-customer-success/churn-prevention](../churn-prevention/) — Intervention playbook
