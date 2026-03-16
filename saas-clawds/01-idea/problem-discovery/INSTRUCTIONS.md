---
department: 01-idea
subfolder: problem-discovery
priority: P0
stage: idea
estimated_time: "2-4 days"
requires: []
---

# Problem Discovery

## Overview

This folder is for identifying, documenting, and stress-testing the **core problem** your SaaS will solve. A well-defined problem is the single strongest predictor of startup success — founders who deeply understand the pain they're addressing build better products, write sharper copy, and close deals faster.

You're not looking for a mild inconvenience. You're looking for a problem that is **frequent**, **painful**, and **underserved** — one where people are already spending time, money, or emotional energy on broken workarounds.

## Questions to Answer

Before generating the output document, the founder should answer:

1. **What specific problem are you solving?** Describe it in plain language — no jargon, no product features. Just the pain.
2. **Who experiences this problem?** Be specific: job title, company size, industry, daily workflow.
3. **How painful is this problem on a scale of 1-10?** A "nice to fix" (3-4) won't sustain a business. You need a 7+.
4. **How frequently does the problem occur?** Daily? Weekly? Quarterly? (Daily/weekly problems build habits; quarterly problems are hard to sell.)
5. **What workarounds do people currently use?** Spreadsheets? Manual processes? Cobbled-together tools? Hiring someone?
6. **What do those workarounds cost?** In dollars, time, errors, or missed opportunities.
7. **Would someone pay to make this problem go away?** Have you seen evidence of willingness to pay (existing spend, complaints, RFPs)?
8. **How did you discover this problem?** Personal experience, customer conversations, industry observation, data?

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# Problem Discovery: [Your SaaS Name]

## Problem Statement
> [One sentence: Who has what problem, and what's the consequence?]

## Problem Deep Dive

### Who Has This Problem?
- **Primary persona:** [Job title, company size, industry]
- **Secondary persona:** [If applicable]
- **Estimated number of people with this problem:** [Number + source]

### Problem Characteristics
| Dimension | Rating | Evidence |
|---|---|---|
| Pain intensity (1-10) | | |
| Frequency | | |
| Willingness to pay | | |
| Urgency to solve | | |

### Current Workarounds
| Workaround | Cost/Time | Limitations |
|---|---|---|
| | | |
| | | |

### Root Cause Analysis
- **Why does this problem exist?**
- **Why hasn't it been solved well yet?**
- **What's changing that makes a new solution viable now?**

## Evidence Log
| Source | Date | Key Insight |
|---|---|---|
| [Reddit thread, interview, survey, etc.] | | |

## Ideal Solution (High Level)
> [2-3 sentences on what the ideal solution looks like — from the customer's perspective, not yours]
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Typeform / Google Forms** | Run problem validation surveys | Free / $25/mo |
| **Reddit / Twitter / LinkedIn** | Find communities discussing the problem | Free |
| **Google Trends** | Validate problem is growing, not shrinking | Free |
| **AnswerThePublic** | Discover what questions people ask about this space | Free / $99/mo |
| **SparkToro** | Find where your audience hangs out online | Free / $50/mo |

**Books:** *The Mom Test* by Rob Fitzpatrick, *Running Lean* by Ash Maurya

## Agent Instructions

When populating this folder for a founder:

1. Read `company-profile.md` for the founder's product description and target customer
2. Ask any of the 8 questions above that aren't already answered in the profile
3. Research the problem space using the founder's description — look for Reddit threads, forum posts, and review complaints that validate the pain
4. Fill in the template with specific, evidence-backed content (no placeholders)
5. Rate pain intensity, frequency, and willingness to pay based on available evidence
6. Document at least 3 current workarounds with their costs and limitations
7. Include a root cause analysis explaining why this problem persists
8. Cross-reference with `01-idea/market-research` for market sizing data

## Example Output (Abbreviated)

```markdown
# Problem Discovery: InvoiceBot

## Problem Statement
> Freelance designers spend 5+ hours per month manually creating, sending, and chasing invoices — losing an average of $2,400/year in unbilled time and late payments.

### Problem Characteristics
| Dimension | Rating | Evidence |
|---|---|---|
| Pain intensity | 8/10 | 73% of freelancers in survey cite invoicing as top admin pain |
| Frequency | Weekly | Average freelancer sends 8-12 invoices/month |
| Willingness to pay | High | $38/mo average spend on existing tools (FreshBooks, QuickBooks) |
| Urgency | Medium-High | Cash flow directly impacted by delayed invoicing |
```

## Cross-References

- **Next step:** [01-idea/market-research](../market-research/) — Size the market for this problem
- **Related:** [02-validation/customer-interviews](../../02-validation/customer-interviews/) — Validate the problem through direct conversations
- **Feeds into:** [01-idea/opportunity-mapping](../opportunity-mapping/) — Synthesize into an opportunity thesis
