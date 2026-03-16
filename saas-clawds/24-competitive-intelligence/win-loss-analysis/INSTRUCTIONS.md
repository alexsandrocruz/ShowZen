---
department: 24-competitive-intelligence
subfolder: win-loss-analysis
priority: P0
stage: post-launch
estimated_time: "2-3 days"
requires: ["19-sales/sales-process", "11-conversion/sales-funnel"]
---

# Win-Loss Analysis

## Overview

This folder is for **post-deal interviews** — interviewing won and lost opportunities to understand why you won or lost. Win/loss analysis is the highest-signal competitive intel.

## Questions to Answer

1. **Who conducts win/loss interviews?** (Sales? Product? Dedicated?)
2. **When do you interview?** (Within 2 weeks of close?)
3. **What questions do you ask?** (Why us? Why not? Competitors?)
4. **How do you record and analyze?** (CRM? Spreadsheet? Gong?)
5. **What's your interview rate?** (Target: 30%+ of closed deals)
6. **How do you tag wins/losses in CRM?** (Reason, competitor?)
7. **How often do you synthesize?** (Monthly? Quarterly?)

## Output Template

Create a `README.md` in this folder with:

```markdown
# Win-Loss Analysis: [Your SaaS Name]

## Program Overview
- **Owner:** 
- **Interview rate target:** 30%+ of closed (won + lost)
- **Timing:** Within 2 weeks of decision
- **Duration:** 15-20 min

## Interview Script

### For Wins
1. What was the main reason you chose us?
2. What other options did you consider?
3. What almost made you choose someone else?
4. What could we have done better?
5. Who was the champion? Decision maker?

### For Losses
1. What was the main reason you didn't choose us?
2. Who did you choose? Why?
3. What would have had to change for you to choose us?
4. What did we do well?
5. Any feedback for our team?

## CRM Tagging
| Field | Values | Purpose |
|---|---|---|
| Outcome | Won, Lost | |
| Win/Loss reason | [Picklist] | Primary reason |
| Competitor | [If lost to competitor] | |
| Champion | Contact | |
| Notes | Free text | Key quotes |

## Win/Loss Reasons (Picklist)
**Wins:** Price, features, ease of use, support, trust, referral
**Losses:** Price, missing feature, chose competitor, no decision, timing, champion left

## Synthesis Cadence
| Cadence | Output | Audience |
|---|---|---|
| Monthly | Win/loss summary | Sales, Product |
| Quarterly | Deep dive + themes | Leadership |
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Gong / Chorus** | Call recording, analysis | $1k+/mo |
| **CRM** | Tagging, pipeline | $ |
| **Spreadsheet** | Win/loss log | Free |
| **Wynter** | Message testing | $ |
| **Cloze** | Relationship intelligence | $ |

## Agent Instructions

1. Read [19-sales/sales-process](../../19-sales/sales-process/) for pipeline stages
2. Create interview script for wins and losses (5 questions each)
3. Define CRM fields for win/loss tagging (outcome, reason, competitor)
4. Create picklist for win/loss reasons
5. Document synthesis cadence (monthly summary, quarterly deep dive)
6. Cross-ref [24-competitive-intelligence/battlecards](../battlecards/) for battlecard updates from losses
7. Cross-ref [21-product-management/feedback-loops](../../21-product-management/feedback-loops/) for product feedback from losses

## Cross-References

- [19-sales/sales-process](../../19-sales/sales-process/) — Pipeline, CRM
- [24-competitive-intelligence/battlecards](../battlecards/) — Update from loss reasons
- [21-product-management/feedback-loops](../../21-product-management/feedback-loops/) — Product feedback
