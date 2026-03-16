---
department: 01-idea
subfolder: niche-selection
priority: P0
stage: idea
estimated_time: "2-3 days"
requires:
  - 01-idea/problem-discovery
  - 01-idea/market-research
---

# Niche Selection

## Overview

This folder is for choosing a **specific, defensible niche** to start in. The biggest mistake first-time SaaS founders make is trying to serve everyone. Your niche is your beachhead — a small enough market that you can dominate, but large enough to build a real business.

Think of it as choosing which beach to land on, not which continent to conquer. Slack started as an internal tool for a gaming company. Shopify started serving snowboard shops. The niche is your launchpad, not your ceiling.

A great niche has five qualities: intense pain, ability to pay, easy to reach, low competition, and room to expand.

## Questions to Answer

1. **Which customer segment feels this problem most acutely?** Not just "who has it" — who *can't sleep at night* because of it?
2. **Why target this segment first?** What makes them ideal for your first 100 customers?
3. **How large is this niche?** Number of potential customers and estimated revenue potential.
4. **Can you reach them efficiently?** Do they congregate somewhere (communities, events, platforms)?
5. **What's the competitive density in this niche?** Is anyone specifically serving them, or are they an afterthought for generalist tools?
6. **What's their ability and willingness to pay?** Budget size, existing spend, purchasing authority.
7. **Is there an expansion path from this niche?** Can you grow into adjacent segments later?

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# Niche Selection: [Your SaaS Name]

## Chosen Niche
> [One sentence: We're starting by serving [specific segment] who need [specific capability].]

## Why This Niche

### Niche Scoring Matrix

| Criteria | Weight | Niche A: [Name] | Niche B: [Name] | Niche C: [Name] |
|---|---|---|---|---|
| Pain intensity (1-10) | 25% | | | |
| Ability to pay (1-10) | 20% | | | |
| Accessibility / reachability (1-10) | 20% | | | |
| Competition level (10=low) (1-10) | 15% | | | |
| Growth potential (1-10) | 10% | | | |
| Domain expertise / affinity (1-10) | 10% | | | |
| **Weighted Score** | **100%** | | | |

### Niche A: [Winner] — Deep Dive

- **Who they are:** [Specific description]
- **How many exist:** [Number + source]
- **Where they congregate:** [Communities, platforms, events]
- **Average budget for this type of tool:** [$X/mo]
- **Current solutions they use:** [Tools, workarounds]
- **Why existing solutions fail them:** [Specific gaps]

## Expansion Path
```
[Niche A] → [Adjacent segment B] → [Broader market C]
 Year 1         Year 2-3              Year 3+
```

## Risks & Mitigations
| Risk | Likelihood | Mitigation |
|---|---|---|
| Niche too small to sustain growth | | |
| Niche needs change over time | | |
| Competitor enters niche | | |

## Validation Plan
- [ ] Confirm niche pain through [X] customer interviews
- [ ] Test messaging resonance with [channel]
- [ ] Verify willingness to pay with [method]
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **SparkToro** | Audience research — find where your niche hangs out | Free / $50/mo |
| **Google Keyword Planner** | Search volume for niche-specific terms | Free (with Ads account) |
| **Facebook Audience Insights** | Demographic and interest data | Free |
| **LinkedIn Sales Navigator** | Count and filter professional segments | $99/mo |
| **Subreddit Stats** | Size and activity of niche Reddit communities | Free |

**Books:** *Crossing the Chasm* by Geoffrey Moore, *Obviously Awesome* by April Dunford

## Agent Instructions

When populating this folder for a founder:

1. Read `company-profile.md`, `01-idea/problem-discovery/README.md`, and `01-idea/market-research/README.md`
2. Identify 3-5 potential niche segments from the market research
3. Score each niche using the scoring matrix with specific evidence for each rating
4. Recommend a winner with clear rationale — don't hedge with "it depends"
5. Map the expansion path showing how the niche leads to a larger market
6. Document where the chosen niche congregates (specific communities, subreddits, Slack groups, conferences)
7. List 3+ risks specific to the chosen niche and concrete mitigations
8. Create a validation plan with specific actions and success criteria

## Example Output (Abbreviated)

```markdown
# Niche Selection: InvoiceBot

## Chosen Niche
> We're starting by serving freelance web designers (solo, US-based, earning $50K-$150K/year) who need automated invoicing with time-tracking integration.

### Niche Scoring
| Criteria | Weight | Freelance Designers | Agencies (5-20) | Consultants |
|---|---|---|---|---|
| Pain intensity | 25% | 9 | 7 | 6 |
| Ability to pay | 20% | 7 | 9 | 8 |
| Accessibility | 20% | 9 | 5 | 4 |
| Competition (10=low) | 15% | 6 | 4 | 5 |
| Growth potential | 10% | 7 | 8 | 7 |
| Domain expertise | 10% | 8 | 6 | 5 |
| **Weighted Score** | | **7.85** | **6.55** | **5.85** |
```

## Cross-References

- **Depends on:** [01-idea/problem-discovery](../problem-discovery/) and [01-idea/market-research](../market-research/)
- **Feeds into:** [01-idea/competitor-analysis](../competitor-analysis/) — Analyze competitors within the chosen niche
- **Related:** [09-acquisition/content-marketing](../../09-acquisition/content-marketing/) — Content strategy targets this niche
- **Related:** [11-conversion/pricing-strategy](../../11-conversion/pricing-strategy/) — Pricing calibrated to niche's ability to pay
