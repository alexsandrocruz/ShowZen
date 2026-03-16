---
department: 02-validation
subfolder: demand-testing
priority: P1
stage: validation
estimated_time: "1-2 weeks"
requires:
  - 01-idea/problem-discovery
  - 01-idea/niche-selection
---

# Demand Testing

## Overview

This folder is for running **structured experiments** to measure demand for your product. Unlike customer interviews (qualitative) or landing pages (single-metric), demand testing is about designing rigorous experiments with clear hypotheses, measurable outcomes, and pre-committed success thresholds.

Think of demand testing as the scientific method applied to startup validation. You form a hypothesis, design an experiment, define what success looks like *before* running it, execute the test, and analyze the results objectively.

The three most common demand experiments:
1. **Ad-based tests** — Run paid ads to measure click-through and conversion rates
2. **Content-based tests** — Publish content about the problem and measure engagement
3. **Concierge/manual tests** — Deliver the solution manually to test if people value the outcome

## Questions to Answer

1. **What is your primary hypothesis?** State it as a falsifiable claim (e.g., "At least 5% of freelance designers who see an ad about automated invoicing will click to learn more").
2. **How will you test this hypothesis?** Paid ads, organic content, manual outreach, concierge service?
3. **What is your success threshold?** The specific number that means "validated." Define this BEFORE running the test.
4. **What's your test budget?** In dollars and time.
5. **What's the minimum sample size for meaningful data?** At least 200-500 impressions for ad tests, 10-20 users for concierge.
6. **How long will you run the test?** Time-box it to avoid indefinite tinkering.
7. **What will you do with the results?** Define the decision tree: if success → X, if failure → Y, if ambiguous → Z.

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# Demand Testing: [Your SaaS Name]

## Experiment Log

### Experiment 1: [Name]

#### Hypothesis
> [Falsifiable statement: "We believe that [audience] will [action] when presented with [stimulus], at a rate of at least [threshold]."]

#### Method
- **Type:** [Paid ad / Organic content / Concierge / Fake door / Smoke test]
- **Channel:** [Google Ads / Facebook / Reddit / LinkedIn / Twitter / Direct]
- **Target audience:** [Specific targeting criteria]
- **What they see:** [Ad copy, content piece, or offer description]
- **What action we're measuring:** [Click, signup, purchase, reply]

#### Test Design
| Parameter | Value |
|---|---|
| Budget | $[X] |
| Duration | [N] days |
| Target impressions/reach | [N] |
| Minimum sample for significance | [N] |

#### Success Criteria (defined before test)
| Outcome | Threshold | Decision |
|---|---|---|
| Strong signal | [Metric] ≥ [X] | Proceed to build |
| Moderate signal | [Metric] between [X] and [Y] | Run another experiment |
| Weak signal | [Metric] < [Y] | Pivot or abandon |

#### Ad/Content Variants (if applicable)
| Variant | Headline | Body | CTA |
|---|---|---|---|
| A | | | |
| B | | | |

#### Results (fill after test)
- **Impressions:** [N]
- **Clicks:** [N] (CTR: [X]%)
- **Conversions:** [N] (CVR: [X]%)
- **Cost per conversion:** $[X]
- **Qualitative observations:** [What you noticed]
- **Decision:** [Proceed / Iterate / Pivot]

---

### Experiment 2: [Name]
[Same structure — run multiple experiments to triangulate]

---

## Experiment Summary

| # | Experiment | Hypothesis | Result | Signal Strength |
|---|---|---|---|---|
| 1 | | | Confirmed / Rejected | Strong / Moderate / Weak |
| 2 | | | | |
| 3 | | | | |

## Key Learnings
1. [Learning that changes or confirms your approach]
2. [Learning about messaging, audience, or willingness to act]
3. [Unexpected insight from the data]

## Overall Demand Verdict
> [Based on all experiments: Is there sufficient demand to proceed? What confidence level?]
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Google Ads** | Search intent-based demand testing | Pay per click (~$1-5/click) |
| **Facebook/Meta Ads** | Interest and demographic targeting | Pay per impression/click |
| **Reddit Ads** | Niche community targeting | $5/day minimum |
| **LinkedIn Ads** | B2B professional targeting | Pay per click (~$5-15/click) |
| **Google Analytics 4** | Track conversions from experiments | Free |
| **Hotjar** | Understand behavior on landing pages | Free / $32/mo |
| **Optimizely / VWO** | A/B testing frameworks | $50/mo+ |

**Frameworks:** Lean Startup Experiment Board, GV Design Sprint, Strategyzer Testing Business Ideas

## Agent Instructions

When populating this folder for a founder:

1. Read all completed `01-idea/` and `02-validation/` documents
2. Design 2-3 experiments appropriate for the founder's budget and stage
3. Write falsifiable hypotheses — not vague hopes; include specific thresholds
4. Define success criteria BEFORE the experiment section (this prevents post-hoc rationalization)
5. Choose channels where the target niche is most reachable (from niche-selection research)
6. Include specific ad copy or content briefs — not just "write an ad"
7. For low-budget founders ($0-100), emphasize organic and concierge experiments
8. For funded founders ($500+), include paid ad experiments with A/B variants
9. Leave Results sections blank — they get filled after experiments run
10. Include a decision tree for each possible outcome

## Example Output (Abbreviated)

```markdown
# Demand Testing: InvoiceBot

### Experiment 1: Reddit Ad Test

#### Hypothesis
> We believe that freelance designers on r/freelanceDesigners who see an ad about automated Figma-to-invoice will click at a rate of at least 3% CTR and sign up at 8%+ of clicks.

#### Test Design
| Parameter | Value |
|---|---|
| Budget | $150 |
| Duration | 7 days |
| Target impressions | 5,000 |

#### Success Criteria
| Outcome | Threshold | Decision |
|---|---|---|
| Strong | CTR ≥ 4%, signup ≥ 10% | Build MVP immediately |
| Moderate | CTR 2-4%, signup 5-10% | Test different messaging |
| Weak | CTR < 2% | Revisit problem framing |
```

## Cross-References

- **Depends on:** [01-idea/problem-discovery](../../01-idea/problem-discovery/) and [01-idea/niche-selection](../../01-idea/niche-selection/)
- **Related:** [02-validation/landing-page-test](../landing-page-test/) — Landing page is the conversion target for ad experiments
- **Related:** [09-acquisition/seo-wins](../../09-acquisition/seo-wins/) — Content experiments may reveal SEO opportunities
- **Feeds into:** [03-planning/mvp-scope](../../03-planning/mvp-scope/) — Experiment results shape what to build
