---
department: 16-scaling
subfolder: automation
priority: P1
stage: post-launch (automate as you grow, not before)
estimated_time: 4-6 hours initial audit, ongoing implementation
requires: []
---

# Automation — Eliminating Repetitive Work Across Every Department

## Overview

This folder contains your automation strategy — the systematic identification and elimination of manual, repetitive processes that don't scale with headcount. Every task you do manually today becomes a bottleneck tomorrow. Automation isn't about replacing people; it's about freeing them to do work that requires judgment, creativity, and human connection.

The rule of thumb: if you do something more than twice and it follows the same steps each time, it should be automated. Start with the processes that are most time-consuming, most error-prone, or most critical to customer experience. The ROI of automation compounds — time saved today is time saved every day forever.

## Questions to Answer

Before building an automation strategy, the founder needs to answer:

1. **What takes the most manual time in your current workflow?** (Common answers: customer onboarding follow-ups, invoice generation, support ticket routing, lead qualification, data entry, reporting, deployment.)
2. **What is most error-prone when done manually?** (Manual data entry, billing calculations, permission management, deployment steps — where do humans make mistakes?)
3. **What scales poorly with headcount?** (If you 10x your customers, which processes require 10x more people? Those are automation candidates.)
4. **What is the ROI of automating each process?** (Hours saved per week × hourly cost × 52 weeks = annual savings. Compare to automation build/buy cost.)
5. **What should NOT be automated?** (Customer escalations, strategic decisions, relationship-building, creative work. Not everything benefits from automation.)
6. **What is your automation stack?** (No-code tools like Zapier for quick wins? Custom scripts for complex workflows? Workflow orchestration for mission-critical processes?)

## Output Template

Generate a comprehensive automation strategy with these sections:

### 1. Automation Audit

| Process | Department | Current Time/Week | Error Rate | Scales with | Automation Approach | Est. ROI |
|---|---|---|---|---|---|---|
| New user welcome sequence | Retention | 3 hrs | Low | Signups | Email automation tool | Save 150 hrs/yr |
| Invoice generation | Revenue | 2 hrs | Medium | Customers | Stripe auto-invoicing | Save 100 hrs/yr |
| Support ticket routing | Support | 1 hr | High | Tickets | Rule-based routing | Save 50 hrs/yr + fewer errors |
| Weekly metrics report | Analytics | 4 hrs | Low | — | Scheduled dashboard export | Save 200 hrs/yr |
| Deployment to production | Development | 1 hr | High | Releases | CI/CD pipeline | Save 50 hrs/yr + reliability |
| Lead qualification | Sales | 5 hrs | Medium | Leads | PQL scoring + auto-routing | Save 250 hrs/yr |
| Content publishing | Marketing | 2 hrs | Low | Content volume | CMS scheduling + social automation | Save 100 hrs/yr |

### 2. Automation Roadmap by Quarter

| Quarter | Automations | Tools | Impact |
|---|---|---|---|
| Q1 | Email sequences, invoice generation, CI/CD | Customer.io, Stripe, GitHub Actions | Save 10 hrs/week |
| Q2 | Support routing, weekly reports, PQL scoring | Helpdesk rules, Metabase, custom | Save 12 hrs/week |
| Q3 | Content scheduling, onboarding workflows, alerting | CMS, Zapier, PagerDuty | Save 8 hrs/week |
| Q4 | Custom workflow automation for complex multi-step processes | n8n/Temporal | Save 15 hrs/week |

### 3. Automation Decision Framework

| Factor | Automate | Don't Automate |
|---|---|---|
| Frequency | Done daily or more | Done once a quarter |
| Complexity | Simple, rule-based steps | Requires nuanced judgment |
| Error impact | Errors cause real damage | Errors are easily caught |
| Scalability | Volume grows with business | Fixed regardless of growth |
| Human touch | No relationship value | Human interaction matters |

### 4. Automation Stack Recommendation

| Layer | Tool | Use Case | Cost |
|---|---|---|---|
| No-code automation | Zapier / Make | Connecting SaaS tools, simple workflows | $20-50/mo |
| Custom scripts | Python / Node.js | Data processing, custom business logic | Engineering time |
| Workflow orchestration | n8n (self-hosted) or Temporal | Complex multi-step workflows | Free (self-hosted) |
| CI/CD | GitHub Actions / GitLab CI | Code deployment and testing | Free tier available |
| Email automation | Customer.io / Loops | Lifecycle and transactional emails | $50-100/mo |
| Monitoring/alerting | PagerDuty / Grafana | Automated incident detection and routing | $20+/mo |

### 5. Automation Documentation Template

For each automated process:

| Field | Value |
|---|---|
| **Process name** | |
| **Trigger** | What starts this automation |
| **Steps** | Numbered list of automated actions |
| **Tool(s)** | What tools are involved |
| **Owner** | Who maintains this automation |
| **Failure mode** | What happens if it breaks |
| **Monitoring** | How do you know it's working |
| **Manual fallback** | How to do it manually if automation fails |
| **Last reviewed** | Date of last review/update |

## Recommended Tools

| Tool | Purpose | Pricing |
|---|---|---|
| **Zapier** | No-code automation between 6,000+ apps | Free tier, $19.99+/mo |
| **Make (Integromat)** | Visual automation builder with complex logic | Free tier, $9+/mo |
| **n8n** | Open-source workflow automation (self-hostable) | Free (self-hosted), $20+/mo |
| **Temporal** | Durable workflow orchestration for critical processes | Open-source, cloud available |
| **GitHub Actions** | CI/CD and repository automation | Free for public repos |
| **Retool** | Internal tool builder for custom automation UIs | Free tier, $10+/mo |

## Agent Instructions

When populating this folder, the AI agent should:

1. Read `company-profile.md` to understand the team size, stage, and current tools
2. Read README files across all departments to identify manual processes mentioned
3. Build the automation audit by listing processes from every department
4. Score each process on time saved, error reduction, and scalability
5. Prioritize into a quarterly roadmap starting with highest-ROI items
6. Recommend an automation stack appropriate to the team's technical level
7. Create the automation documentation template
8. Output everything as `README.md` in this folder

## Example Output (Snippet)

```markdown
## Automation Impact Dashboard — Q1

| Automation | Status | Hours Saved/Week | Error Reduction |
|---|---|---|---|
| Welcome email sequence | ✅ Live | 3.5 hrs | N/A |
| Stripe auto-invoicing | ✅ Live | 2 hrs | Eliminated manual errors |
| CI/CD pipeline | ✅ Live | 1.5 hrs | Zero failed manual deploys |
| Support ticket routing | 🔄 Building | Est. 2 hrs | Est. -80% misrouted tickets |
| Weekly metrics report | 📋 Planned | Est. 4 hrs | N/A |

**Total hours saved this quarter:** ~145 hours (~$7,250 at $50/hr)
**Total investment:** ~40 hours of engineering + $89/mo in tools
**ROI:** 3.6x in first quarter, increasing as automations compound
```

## Cross-References

- All departments — automation applies to every area of the business
- `06-infrastructure/ci-cd` — CI/CD is the automation foundation for development
- `14-retention/email-automation` — email automation is a specific, critical automation
- `06-infrastructure/monitoring` — monitoring automation detects issues before humans do
- `13-analytics/kpi-dashboard` — automated reporting feeds the dashboard
