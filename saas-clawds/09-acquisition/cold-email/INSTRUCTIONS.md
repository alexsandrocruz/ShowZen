---
department: 09-acquisition
subfolder: cold-email
priority: P1
stage: post-launch
estimated_time: 3-4 hours initial setup, ongoing weekly
requires:
  - 11-conversion/sales-funnel
  - 03-planning/product-roadmap
---

# Cold Email — Outbound Campaigns to Reach Prospects Directly

## Overview

This folder contains your cold email outreach strategy — the plan for reaching potential customers directly through targeted, personalized email campaigns. Cold email is the fastest way to fill your pipeline when inbound channels haven't ramped up yet. Done well, it's a predictable, scalable lead generation engine. Done poorly, it's spam.

The difference is relevance, personalization, and providing genuine value. Every cold email should make the recipient think "this person actually understands my problem."

## Questions to Answer

Before generating the cold email strategy, the founder needs to answer:

1. **What is your Ideal Customer Profile (ICP)?** (Industry, company size, role/title, tech stack, pain signals — be as specific as possible)
2. **Where will you source leads?** (LinkedIn Sales Navigator, Apollo, industry databases, event attendee lists, job board signals)
3. **How long should your email sequence be?** (Typically 4-6 emails over 2-3 weeks works best)
4. **What is your personalization approach?** (Fully manual, semi-automated with AI, or templated with dynamic fields?)
5. **What is your follow-up cadence?** (Days between emails? When to stop?)
6. **Are you compliant with email regulations?** (CAN-SPAM for US, GDPR for EU, CASL for Canada — this is non-negotiable)
7. **What is your reply handling process?** (Who responds to positive replies? How fast? What's the handoff to sales/demo?)
8. **What daily sending volume are you targeting?** (New domains should start at 20-30/day and ramp up)

## Output Template

Generate a comprehensive cold email strategy with these sections:

### 1. ICP Definition
- Firmographic criteria (industry, size, revenue, geography)
- Demographic criteria (title, seniority, department)
- Technographic criteria (tools they use, tech stack signals)
- Pain signals (hiring for X role, using competitor, recently funded, etc.)
- Anti-ICP: who to explicitly exclude

### 2. Lead Sourcing Plan
- Primary lead sources ranked by quality
- Lead enrichment process (finding emails, verifying, adding context)
- Target: number of qualified leads per week
- Lead scoring criteria

### 3. Email Sequence Templates
Write a 5-email sequence:
- **Email 1 (Day 0):** Pain-focused opener — identify their problem, hint at the solution
- **Email 2 (Day 3):** Value-add — share a relevant resource, case study, or insight
- **Email 3 (Day 7):** Social proof — mention similar companies using the product
- **Email 4 (Day 11):** Different angle — approach the problem from a new perspective
- **Email 5 (Day 16):** Breakup email — last touch, make it easy to reply

### 4. A/B Testing Plan
- Subject line tests (question vs. statement, short vs. long)
- Opening line tests (personalized vs. pain-focused)
- CTA tests (meeting request vs. question vs. resource share)
- Sending time tests (morning vs. afternoon, weekday vs. weekend)

### 5. Reply Handling Playbook
- Response categories: positive, interested, objection, not now, unsubscribe
- Template responses for each category
- SLA: respond to positive replies within 2 hours
- Demo booking process

### 6. Domain & Deliverability Setup
- Dedicated sending domain (not your main domain)
- SPF, DKIM, DMARC configuration
- Warm-up schedule (2-4 weeks before full campaigns)
- Sending limits and ramp-up plan

## Recommended Tools

| Tool | Purpose | Pricing |
|---|---|---|
| **Apollo.io** | Lead database, sequencing, and enrichment | Free–$49+/mo |
| **Lemlist** | Cold email sequences with personalization | $39+/mo |
| **Instantly** | High-volume cold email with deliverability tools | $30+/mo |
| **Hunter.io** | Email finding and verification | Free–$49+/mo |
| **Clay** | Lead enrichment and data waterfall | $149+/mo |
| **Warmbox / Mailreach** | Email warm-up for deliverability | $15+/mo |
| **Calendly** | Meeting scheduling for positive replies | Free–$10+/mo |

## Agent Instructions

When populating this folder, the AI agent should:

1. Read `company-profile.md` to understand the product, target customer, and value proposition
2. Define a detailed ICP with firmographic, demographic, and technographic criteria
3. Write a 5-email cold outreach sequence tailored to the specific product and ICP
4. Include subject lines, preview text, and body copy for each email
5. Create an A/B testing plan with 3 variables to test in the first month
6. Include a reply handling playbook with template responses
7. Add a deliverability setup checklist
8. Reference `11-conversion/sales-funnel` for how cold email leads enter the funnel
9. Output everything as `README.md` in this folder

## Example Output (Snippet)

```markdown
## Email 1 — Pain-Focused Opener

**Subject:** Quick question about [specific pain point]
**Preview text:** Noticed [personalization detail]...

Hi {first_name},

I noticed {company} is {personalization — e.g., "scaling the engineering team based on your recent job posts"}.

Most {ICP title}s I talk to at this stage are struggling with {specific pain} — specifically {detail that shows you understand}.

We built [Product] to solve exactly this. {One-sentence value prop with a specific result — e.g., "Teams like [Similar Company] cut their onboarding time from 3 weeks to 3 days."}.

Worth a 15-min chat to see if it's a fit?

{Signature}

---
**Sending rules:** Mon-Thu, 8-10am recipient's timezone
**Follow-up if no reply:** 3 days
```

## Cross-References

- `11-conversion/sales-funnel` — cold email is a top-of-funnel feeder for your sales process
- `09-acquisition/content-marketing` — use content as value-add in email sequences
- `13-analytics/funnel-analysis` — track cold email → demo → close conversion rates
- `14-retention/email-automation` — different from cold email but shares deliverability infrastructure
