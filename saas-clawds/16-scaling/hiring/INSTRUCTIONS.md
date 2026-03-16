---
department: 16-scaling
subfolder: hiring
priority: P1
stage: post-product-market-fit (hire to scale, not to find PMF)
estimated_time: 5-7 hours initial plan, ongoing execution
requires:
  - 03-planning/development-plan
  - 12-revenue/subscriptions
---

# Hiring — Building the Team That Builds the Company

## Overview

This folder contains your hiring strategy — the plan for building the team that takes you from founder-does-everything to a real organization. Hiring is the highest-leverage and highest-risk activity in scaling. A great early hire accelerates everything. A bad early hire slows everything down and is painful to undo.

In the early stages, every hire should be a "force multiplier" — someone who doesn't just do a job but elevates the entire company. You're not filling roles on an org chart; you're finding people who can own entire functions and figure out problems you haven't even identified yet.

## Questions to Answer

Before building a hiring plan, the founder needs to answer:

1. **What are your first 5 hires, in order?** (Most common for SaaS: first engineer, first designer, first marketer/growth, first customer success, first sales. But it depends on your bottleneck.)
2. **What is your hiring timeline?** (When does each role need to start? What triggers hiring — revenue milestones, workload thresholds, or planned growth?)
3. **What is your compensation strategy?** (Market rate? Below-market + equity? Above-market, no equity? Remote premium or discount? What equity pool have you reserved?)
4. **Remote, hybrid, or in-person?** (This is a fundamental constraint on your talent pool, culture, and operating rhythm. Decide early.)
5. **What are your culture values?** (Not aspirational posters — the actual behaviors you reward and penalize. These should guide every hiring decision.)
6. **What does your interview process look like?** (Stages, assessments, timeline. The best candidates are off the market in 10-14 days. A slow process loses them.)
7. **How will you compete for talent as a startup?** (Mission, equity upside, autonomy, growth opportunity, flexibility — what's your pitch to someone leaving a FAANG salary?)

## Output Template

Generate a comprehensive hiring strategy with these sections:

### 1. Hiring Plan by Quarter

| Quarter | Role | Level | Priority | Trigger | Compensation Range |
|---|---|---|---|---|---|
| Q1 | Full-stack Engineer | Senior | P0 | Product roadmap requires faster shipping | $X-Y + Z% equity |
| Q1 | Customer Success / Support | Mid | P0 | Support taking >2 hrs/day of founder time | $X-Y + Z% equity |
| Q2 | Growth / Marketing | Mid-Senior | P1 | Ready to scale acquisition channels | $X-Y + Z% equity |
| Q2 | Designer (Product) | Mid | P1 | UX quality limiting conversion | $X-Y + Z% equity |
| Q3 | Second Engineer | Mid | P1 | First engineer is bottleneck | $X-Y + Z% equity |
| Q4 | Sales (if B2B) | Mid | P2 | Enterprise inbound exceeds founder capacity | $X base + commission + Z% equity |

### 2. Job Description Templates

For each of the first 5 roles, include:

**[Role Title]**
| Section | Content |
|---|---|
| About the company | 2-3 sentences on mission and stage |
| About the role | What they'll own and why it matters |
| What you'll do | 4-6 specific responsibilities |
| What we're looking for | 4-6 requirements (skills + traits) |
| Nice to have | 2-3 bonus qualifications |
| Compensation | Range + equity + benefits |
| Why join us | The pitch — mission, stage, growth |

### 3. Org Chart Evolution

**Stage 1: Founder + First 2 Hires**
```
Founder (CEO — does everything else)
├── Engineer #1 (owns product development)
└── Support/CS #1 (owns customer experience)
```

**Stage 2: Team of 5-7**
```
Founder (CEO — strategy, sales, fundraising)
├── Engineering Lead
│   └── Engineer #2
├── Growth/Marketing
├── Designer
└── Customer Success
```

**Stage 3: Team of 10-15**
```
Founder (CEO)
├── VP Engineering
│   ├── Engineers (3-4)
│   └── Designer
├── VP Growth
│   ├── Marketing
│   └── Sales
└── VP Customer
    ├── Support (2)
    └── Success
```

### 4. Interview Process

| Stage | Duration | Assessor | Purpose |
|---|---|---|---|
| 1. Application review | 2 days | Hiring manager | Screen for basic fit |
| 2. Intro call | 30 min | Founder | Culture fit, motivation, high-level skills |
| 3. Technical/skills assessment | 1-2 hours | Peer or hiring manager | Can they do the job? Take-home or live. |
| 4. Deep dive interview | 60 min | Founder + team | Values alignment, working style, problem-solving |
| 5. Reference check | 30 min × 2 | Founder | Verify claims, uncover concerns |
| 6. Offer | Same day as final interview | Founder | Move fast — best candidates have options |

**Total timeline target: application to offer in 10 business days.**

### 5. Culture Document Draft

| Value | What It Means | How We Hire For It |
|---|---|---|
| Ownership | Take responsibility for outcomes, not just tasks | Ask: "Tell me about a time you owned something end-to-end" |
| Speed | Ship fast, iterate, don't over-engineer | Assessment: time-boxed practical exercise |
| Transparency | Share context, give direct feedback, admit mistakes | Interview: how they handle giving and receiving feedback |
| Customer obsession | Start with the customer problem, work backward | Ask: "How would you approach understanding our customers?" |
| Resourcefulness | Figure it out with whatever's available | Ask: "Tell me about a time you had to work with limited resources" |

### 6. Equity Framework

| Role | Stage | Equity Range | Vesting |
|---|---|---|---|
| First engineer | Pre-seed / Seed | 1-3% | 4-year vest, 1-year cliff |
| First marketer | Seed | 0.5-1.5% | 4-year vest, 1-year cliff |
| First CS/support | Seed | 0.25-0.75% | 4-year vest, 1-year cliff |
| Senior hire (VP-level) | Series A | 0.5-2% | 4-year vest, 1-year cliff |
| IC hire (post-Series A) | Series A+ | 0.05-0.25% | 4-year vest, 1-year cliff |

Reserve 10-15% of equity for the employee option pool.

## Recommended Tools

| Tool | Purpose | Pricing |
|---|---|---|
| **Ashby** | Modern ATS for startups | $300+/mo |
| **Lever** | ATS with CRM for relationship-based recruiting | Contact for pricing |
| **Greenhouse** | Enterprise-grade ATS | $6,000+/yr |
| **LinkedIn Recruiter** | Candidate sourcing | $170+/mo per seat |
| **Wellfound (AngelList)** | Startup-focused job board | Free to post |
| **Carta** | Equity management and cap table | $100+/mo |
| **Deel / Remote.com** | International hiring and payroll | $49+/employee/mo |

## Agent Instructions

When populating this folder, the AI agent should:

1. Read `company-profile.md` to understand the team size, stage, budget, and growth plans
2. Read `03-planning/development-plan/README.md` for the engineering roadmap (informs technical hiring)
3. Read `12-revenue/subscriptions/README.md` for revenue to understand hiring budget
4. Design the hiring plan by quarter with specific roles, levels, and triggers
5. Write job description templates for the first 3-5 roles
6. Create the org chart evolution (current → 5-person → 10-person → 15-person)
7. Define the interview process with timeline targets
8. Draft the culture document with values and interview questions
9. Include the equity framework with ranges by role and stage
10. Output everything as `README.md` in this folder

## Example Output (Snippet)

```markdown
## Hiring Plan — 2025

| Role | Start | Salary | Equity | Status |
|---|---|---|---|---|
| Senior Full-Stack Engineer | Q1 | $145K | 1.5% | 🔍 Actively hiring |
| Customer Success Lead | Q1 | $85K | 0.5% | 📋 JD drafted |
| Growth Marketer | Q2 | $110K | 0.75% | ⏳ Waiting for Q1 revenue target |
| Product Designer | Q2 | $120K | 0.5% | ⏳ After first engineer ships v2 |
| Engineer #2 | Q3 | $135K | 0.75% | ⏳ Triggered by >500 users |

**Burn Impact:** +$41K/mo at full team → runway decreases from 18 to 11 months. Plan to raise seed round in Q2 to extend runway.
```

## Cross-References

- `03-planning/development-plan` — engineering roadmap drives technical hiring needs
- `16-scaling/systems` — SOPs enable new hires to onboard faster
- `16-scaling/automation` — automation reduces headcount needs for certain functions
- `14-retention/customer-support` — support hiring plan lives in both places
- `12-revenue/subscriptions` — revenue determines hiring budget
