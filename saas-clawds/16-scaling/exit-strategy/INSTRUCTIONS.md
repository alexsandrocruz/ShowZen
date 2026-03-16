---
department: 16-scaling
subfolder: exit-strategy
priority: P2
stage: any (think about it early, plan seriously at scale)
estimated_time: 3-5 hours for initial framework, revisit annually
requires:
  - 12-revenue/subscriptions
  - 13-analytics/kpi-dashboard
---

# Exit Strategy — Planning the Long-Term Endgame

## Overview

This folder contains your exit planning document — the strategy for the long-term endgame of your SaaS company. This is the final folder in the playbook, and it's here for a reason: everything you've built in the previous 15 departments leads to this. Whether you're building to sell, building to IPO, or building a lifestyle business that generates cash forever, having clarity on your destination shapes every decision along the way.

Exit planning isn't about wanting to sell tomorrow. It's about understanding that the *way* you build the company determines your options later. A company with clean financials, low founder-dependency, documented processes, and strong metrics has every option open. A company that's a tangled mess of undocumented hacks with revenue trapped in the founder's personal relationships has none.

## Questions to Answer

Before building an exit strategy, the founder needs to answer:

1. **What is your end goal?** (Acquisition by a larger company? IPO? Build a profitable, cash-flowing business you run indefinitely? Merge with a competitor? Each path has different implications for how you build.)
2. **What is your timeline?** (Planning to exit in 3-5 years? 7-10 years? No specific timeline? The timeline affects fundraising, growth rate, and hiring decisions.)
3. **Who are the potential acquirers?** (Strategic acquirers in your space — larger companies that would benefit from your product, technology, or customer base. Private equity firms looking for profitable SaaS. Identify 10-20 names.)
4. **What metrics drive valuation in your category?** (For SaaS: ARR growth rate, net revenue retention, gross margin, rule of 40, LTV:CAC. For different exit types, different metrics dominate.)
5. **What would make you sell?** (A specific price? A specific acquirer? Burnout? Market timing? Know your triggers so you can negotiate from strength, not desperation.)
6. **What is your "walk away" number?** (The minimum price at which you'd accept an acquisition. Consider: taxes, investor liquidation preferences, and personal financial goals.)
7. **What creates "acquirability"?** (Clean data room, low founder-dependency, strong team, documented processes, no legal liabilities, clean cap table.)

## Output Template

Generate a comprehensive exit planning document with these sections:

### 1. Exit Path Analysis

| Path | Description | Typical Multiple | Timeline | Best When |
|---|---|---|---|---|
| Strategic acquisition | Larger company buys you for product/tech/customers | 5-15x ARR | 3-7 years | Product fills a gap in acquirer's offering |
| Private equity | PE firm buys for cash flow optimization | 3-8x ARR | 5-10 years | Profitable, stable, moderate growth |
| IPO | Public listing for maximum valuation | 15-30x ARR | 7-12 years | $100M+ ARR, high growth, large TAM |
| Lifestyle business | Keep running, pay yourself well | N/A (cash flow) | Indefinite | Profitable, sustainable, enjoyable to run |
| Acqui-hire | Acquired primarily for the team | $1-3M per engineer | 1-3 years | Strong team, weak product-market fit |
| Merger | Combine with a complementary company | Varies | 3-7 years | Synergies create value neither has alone |

### 2. Acquirer Target List

| Company | Why They'd Buy Us | Strategic Fit | Estimated Range | Contact Strategy |
|---|---|---|---|---|
| [Company A] | Fill product gap in [area] | High | $XM-YM | Build relationship at conferences |
| [Company B] | Acquire customer base in [segment] | Medium | $XM-YM | Warm intro through investor |
| [Company C] | Competitive threat — buy vs. build | High | $XM-YM | Respond to inbound interest |
| [PE Firm A] | Profitable SaaS in growing market | Medium | $XM-YM | Maintain broker relationships |
| [PE Firm B] | Roll-up play in [category] | Medium | $XM-YM | Investment banker intro |

### 3. Valuation Drivers Checklist

| Driver | Current State | Target | Impact on Valuation |
|---|---|---|---|
| ARR | $X | $Y (by exit timeline) | Primary driver of multiple |
| ARR growth rate | X% YoY | >40% (for premium multiple) | Higher growth = higher multiple |
| Net Revenue Retention | X% | >110% | Proves expansion and stickiness |
| Gross margin | X% | >75% | Standard for software SaaS |
| Rule of 40 | X (growth + margin) | >40% | Combined health metric |
| LTV:CAC ratio | X:1 | >3:1 | Proves efficient growth |
| Logo churn | X% | <5% annual | Lower churn = more predictable |
| Customer concentration | Top customer = X% of revenue | <10% per customer | Reduces risk for acquirer |
| Team size and quality | X people | — | Strong team = smooth transition |
| Founder dependency | [High/Medium/Low] | Low | Critical for acquisition |

### 4. Due Diligence Prep List

Start preparing these well before any exit process:

**Financial**
- [ ] Clean monthly financial statements (P&L, balance sheet, cash flow)
- [ ] Revenue recognition properly done (ASC 606 compliant)
- [ ] Subscription metrics independently verifiable (Stripe dashboard, ChartMogul)
- [ ] Customer contracts organized and accessible
- [ ] Cap table clean and up to date (on Carta or similar)
- [ ] Tax filings current and clean

**Legal**
- [ ] All IP properly assigned to the company (not founders personally)
- [ ] Employee/contractor agreements include IP assignment clauses
- [ ] No outstanding lawsuits or legal threats
- [ ] Customer data processing agreements in place
- [ ] Terms of service and privacy policy current
- [ ] Open-source license compliance verified

**Technical**
- [ ] Codebase clean, documented, and version-controlled
- [ ] No critical single-points-of-failure (bus factor > 1)
- [ ] Infrastructure documented and reproducible
- [ ] Security audit completed within last 12 months
- [ ] No known critical security vulnerabilities

**Operational**
- [ ] Key processes documented (SOPs)
- [ ] Team can operate without founder for 2+ weeks
- [ ] Customer relationships distributed across team (not founder-only)
- [ ] Vendor contracts transferable

### 5. Founder Vesting and Cap Table Review

| Question | Answer |
|---|---|
| Founder vesting schedule | [Fully vested / X% vested / Y years remaining] |
| Total option pool | [X% of company] |
| Unissued options | [X% remaining in pool] |
| Investor preferences | [Liquidation preferences, participation rights] |
| Minimum proceeds for founder | [Calculate: exit price - preferences - taxes] |
| 409A valuation current | [Yes/No — must be within 12 months] |

### 6. Exit Timeline Framework

| Phase | Timeframe | Actions |
|---|---|---|
| Build mode | Now — 2-3 years | Focus on growth, metrics, team, and processes |
| Prep mode | 12-18 months before | Clean up financials, reduce founder dependency, prep data room |
| Explore mode | 6-12 months before | Build acquirer relationships, engage banker if needed |
| Process mode | 3-6 months | Run the process: LOI → due diligence → negotiation → close |
| Transition | 0-12 months post-close | Earn-out period, knowledge transfer, integration support |

## Recommended Tools

| Tool | Purpose | Pricing |
|---|---|---|
| **Carta** | Cap table management and 409A valuations | $100+/mo |
| **PitchBook** | Market intelligence and comparable transactions | Enterprise pricing |
| **Crunchbase** | Research potential acquirers and market activity | Free tier, $29+/mo |
| **DocSend** | Data room for due diligence documents | $10+/mo |
| **ChartMogul** | SaaS metrics dashboard for investors/acquirers | $100+/mo |
| **Investment bankers** | Run acquisition process (for $10M+ exits) | 2-5% of transaction |
| **M&A attorneys** | Legal counsel for transactions | Hourly ($300-800) |

## Agent Instructions

When populating this folder, the AI agent should:

1. Read `company-profile.md` to understand the founder's goals, stage, funding, and runway
2. Read `12-revenue/subscriptions/README.md` for current revenue model and metrics
3. Read `13-analytics/kpi-dashboard/README.md` for the key metrics being tracked
4. Determine the most likely exit path based on the founder's goals and stage
5. Research and list 10-15 potential acquirers relevant to the product's market
6. Build the valuation drivers checklist with current state and targets
7. Create the due diligence prep list customized to the company's situation
8. Review the cap table structure and calculate founder proceeds at various exit prices
9. Design the exit timeline framework
10. Output everything as `README.md` in this folder

## Example Output (Snippet)

```markdown
## Exit Scenario Analysis — [Product]

**Most likely path:** Strategic acquisition in 4-5 years
**Target ARR at exit:** $5-10M
**Expected multiple:** 8-12x ARR (based on category comps)
**Expected valuation range:** $40M-$120M

### Proceeds Waterfall at $60M Exit

| Line Item | Amount |
|---|---|
| Gross exit price | $60,000,000 |
| Less: investor preferences (1x liquidation) | ($4,000,000) |
| Remaining for common | $56,000,000 |
| Founder stake (35%) | $19,600,000 |
| Less: federal + state tax (~35%) | ($6,860,000) |
| **Founder net proceeds** | **$12,740,000** |

### Top 5 Potential Acquirers
1. [Company A] — adjacent product, overlapping customer base, raised $200M
2. [Company B] — competitor in adjacent space, acquisitive history
3. [Company C] — platform play, acquiring point solutions
4. [Company D] — PE-backed, doing roll-ups in our category
5. [Company E] — strategic interest shown at conference in Q3
```

## Cross-References

- `12-revenue/subscriptions` — ARR and revenue metrics are the primary valuation drivers
- `13-analytics/kpi-dashboard` — the metrics acquirers and investors examine
- `16-scaling/systems` — documented processes increase acquirability
- `16-scaling/hiring` — team quality and structure affect exit options
- `03-planning/product-roadmap` — roadmap and vision influence strategic acquirer interest
