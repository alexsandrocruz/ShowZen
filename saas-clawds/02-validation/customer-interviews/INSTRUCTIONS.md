---
department: 02-validation
subfolder: customer-interviews
priority: P0
stage: validation
estimated_time: "1-2 weeks"
requires:
  - 01-idea/problem-discovery
  - 01-idea/niche-selection
---

# Customer Interviews

## Overview

This folder is for planning, conducting, and synthesizing **problem interviews** with potential customers. Customer interviews are the highest-ROI validation activity you can do — 10 good interviews will teach you more than 10,000 landing page visitors.

The goal is NOT to pitch your idea. The goal is to understand how your target customers experience the problem today, what they've tried, and what they'd pay for. Follow *The Mom Test* methodology: never tell people about your idea, ask about their life instead.

**Key rules:**
- Ask about the past, not hypothetical futures ("Tell me about the last time you..." not "Would you use...")
- Listen for specific behaviors, not opinions
- Follow the emotion — when someone gets animated, dig deeper
- Bad news is good data

## Questions to Answer (Before Interviewing)

1. **Who specifically will you interview?** Job title, industry, company size — from your niche selection.
2. **How many interviews do you need?** Minimum 10, ideally 15-20 for pattern recognition.
3. **How will you recruit interviewees?** Cold outreach, warm intros, communities, social media, paid recruitment.
4. **What are your 3-5 core hypotheses to test?** What do you believe that, if wrong, would change your plan?
5. **What does a "successful" insight look like?** What would make you more confident? What would make you pivot?
6. **How will you compensate interviewees?** Gift cards, free access, their time alone, nothing?

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# Customer Interviews: [Your SaaS Name]

## Interview Plan

### Target Interviewees
- **Persona:** [From niche selection]
- **Target count:** [N] interviews
- **Recruitment channels:** [List specific channels]
- **Compensation:** [What you're offering]

### Hypotheses to Test
| # | Hypothesis | Status (Confirmed/Rejected/Unclear) |
|---|---|---|
| H1 | [Target customers experience X problem at least weekly] | |
| H2 | [They currently spend $Y/mo on workarounds] | |
| H3 | [The biggest pain point is Z, not W] | |
| H4 | [They would pay $N/mo for a solution] | |

## Interview Script

### Opening (2 min)
- Thank them for their time
- "I'm researching how [persona] handles [problem area]. No product to show — just want to learn from your experience."

### Context Questions (5 min)
- "Tell me about your role and what a typical week looks like."
- "How does [problem area] fit into your workflow?"

### Problem Exploration (15 min)
- "Walk me through the last time you dealt with [problem]. What happened?"
- "What was the hardest part about that?"
- "How often does this come up?"
- "What did you try to solve it?"
- "How much time/money does this cost you?"

### Current Solutions (5 min)
- "What tools or processes do you currently use for this?"
- "What do you like about them? What frustrates you?"
- "Have you looked for alternatives? What happened?"

### Value & Willingness to Pay (3 min)
- "If something could [solve the core problem], how would that change your work?"
- "What would that be worth to you — in time saved or money?"

### Closing (2 min)
- "Is there anything else about [problem area] I should know?"
- "Would you be open to a follow-up conversation?"
- "Can you introduce me to others who deal with this?"

## Interview Notes Template
| Field | Details |
|---|---|
| **Interviewee** | [Name, title, company] |
| **Date** | [Date] |
| **Channel** | [How recruited] |
| **Key quotes** | [Direct quotes that stand out] |
| **Pain level (1-10)** | [Their rating or your assessment] |
| **Current solution** | [What they use today] |
| **Willingness to pay** | [Signals observed] |
| **Surprises** | [Anything unexpected] |
| **Follow-up needed?** | [Yes/No — what?] |

## Insights Synthesis

### Pattern Summary (fill after completing interviews)
- **Interviews completed:** [N] of [target]
- **Strongest pain point:** [Theme that emerged across multiple interviews]
- **Most common workaround:** [What people actually use]
- **Willingness to pay:** [Range and confidence level]
- **Unexpected insight:** [Something you didn't expect to hear]
- **Hypothesis results:** [Which confirmed, which rejected]

### Key Quotes Wall
| Quote | Interviewee | Context |
|---|---|---|
| "[Exact quote]" | [Name/role] | [Situation] |
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Calendly** | Schedule interview slots | Free / $10/mo |
| **Zoom / Google Meet** | Conduct remote interviews | Free |
| **Otter.ai** | Auto-transcribe interviews | Free / $16.99/mo |
| **Notion / Google Sheets** | Organize notes and synthesize patterns | Free |
| **Grain** | Record, clip, and share interview highlights | Free / $19/mo |
| **User Interviews** | Recruit participants from specific demographics | $45-$100/participant |

**Must-read:** *The Mom Test* by Rob Fitzpatrick — the definitive guide to customer conversations.

## Agent Instructions

When populating this folder for a founder:

1. Read `company-profile.md`, `01-idea/problem-discovery/README.md`, and `01-idea/niche-selection/README.md`
2. Customize the interview script with the founder's specific problem area and target persona
3. Define 4-6 testable hypotheses based on the assumptions made in problem-discovery
4. Suggest 3-5 specific recruitment channels based on where the target niche congregates
5. Tailor the problem exploration questions to the specific domain (not generic)
6. Leave the synthesis section as a template — it gets filled after interviews are done
7. Include a reminder about The Mom Test principles at the top of the script
8. Recommend a specific compensation strategy based on the target persona (executives need different treatment than freelancers)

## Example Output (Abbreviated)

```markdown
# Customer Interviews: InvoiceBot

### Hypotheses to Test
| # | Hypothesis | Status |
|---|---|---|
| H1 | Freelance designers spend 5+ hours/month on invoicing | Confirmed (avg 6.2 hrs) |
| H2 | Late payments are the #1 invoicing frustration | Rejected — it's creating invoices, not chasing them |
| H3 | They'd pay $20-30/mo for a purpose-built solution | Confirmed (sweet spot: $25/mo) |

### Key Quotes Wall
| Quote | Who | Context |
|---|---|---|
| "I literally dread the end of the month" | Sarah, freelance UI designer | Describing her invoicing routine |
| "FreshBooks is like using a sledgehammer to hang a picture" | Mike, brand designer | On why he still uses spreadsheets |
```

## Cross-References

- **Depends on:** [01-idea/problem-discovery](../../01-idea/problem-discovery/) and [01-idea/niche-selection](../../01-idea/niche-selection/)
- **Feeds into:** [02-validation/landing-page-test](../landing-page-test/) — Interview language informs landing page copy
- **Related:** [01-idea/opportunity-mapping](../../01-idea/opportunity-mapping/) — Interview insights may update opportunity thesis
- **Related:** [03-planning/mvp-scope](../../03-planning/mvp-scope/) — Interview insights define what to build first
