---
department: 13-analytics
subfolder: ab-testing
priority: P1
stage: post-launch (requires traffic and a baseline to test against)
estimated_time: 3-4 hours for framework, ongoing per experiment
requires:
  - 13-analytics/user-tracking
  - 13-analytics/funnel-analysis
---

# A/B Testing — Running Controlled Experiments to Optimize Product and Growth

## Overview

This folder contains your experimentation framework — the discipline of making decisions based on evidence rather than opinions. A/B testing (and its variants) lets you compare two or more approaches and measure which one performs better with statistical confidence. It's how the best SaaS companies systematically improve every metric.

Without a testing culture, you ship what feels right. With one, you ship what's proven to work. The companies that run the most experiments learn the fastest, and learning speed is the ultimate competitive advantage.

## Questions to Answer

Before running experiments, the founder needs to answer:

1. **What should you test first?** (Prioritize high-traffic, high-impact areas: onboarding, pricing page, activation flow, key feature UX. Don't A/B test your 404 page.)
2. **What sample size do you need for reliable results?** (Depends on your baseline conversion rate, minimum detectable effect, and traffic. Use a sample size calculator — most tests need 1,000-10,000 users per variant.)
3. **What statistical significance threshold will you use?** (Standard: 95% confidence / p < 0.05. For high-stakes decisions like pricing: 99%.)
4. **How long should tests run?** (Minimum: 1-2 full business cycles, typically 2-4 weeks. Never call a test early — the "peeking problem" inflates false positives.)
5. **How do you avoid the peeking problem?** (Either: don't check results until the test is complete, or use sequential testing methods that account for continuous monitoring.)
6. **Who can launch experiments?** (Product team only? Any team? Approval required? What's the governance model?)
7. **How do you handle conflicting tests?** (Mutual exclusion? Layered experiments? Traffic allocation management?)

## Output Template

Generate a comprehensive experimentation framework with these sections:

### 1. A/B Test Plan Template

| Field | Value |
|---|---|
| **Test Name** | |
| **Hypothesis** | If we [change], then [metric] will [improve/increase/decrease] because [reasoning] |
| **Primary Metric** | The one metric this test is trying to improve |
| **Secondary Metrics** | Other metrics to monitor for unintended effects |
| **Guardrail Metrics** | Metrics that must NOT degrade (e.g., error rate, support tickets) |
| **Control (A)** | Description of the current experience |
| **Variant (B)** | Description of the proposed change |
| **Traffic Split** | 50/50 (default) or other allocation |
| **Target Sample Size** | N per variant (calculate using baseline rate and MDE) |
| **Estimated Duration** | X weeks based on current traffic |
| **Statistical Method** | Frequentist (fixed-horizon) or Bayesian |
| **Significance Threshold** | 95% confidence (default) |
| **Decision Criteria** | Ship B if primary metric improves by ≥X% at significance |
| **Owner** | |
| **Start Date** | |
| **End Date** | |

### 2. Experiment Backlog (Prioritized)

| Priority | Area | Hypothesis | Est. Impact | Est. Effort | ICE Score |
|---|---|---|---|---|---|
| 1 | Onboarding | Guided wizard > blank state for activation | High | Medium | 8 |
| 2 | Pricing page | Annual toggle default > monthly default for revenue | High | Low | 9 |
| 3 | Signup | Social login reduces signup friction | Medium | Low | 7 |
| 4 | Activation | Progress bar increases onboarding completion | Medium | Low | 7 |
| 5 | Emails | Personalized subject lines improve open rate | Medium | Low | 6 |

ICE = Impact × Confidence × Ease (each 1-10, averaged)

### 3. Statistical Rigor Guidelines

**Sample Size Calculator Inputs:**
- Baseline conversion rate (current)
- Minimum Detectable Effect (MDE) — the smallest improvement worth detecting (typically 5-20%)
- Statistical significance level (α = 0.05)
- Statistical power (1-β = 0.80)

**Anti-Patterns to Avoid:**
- Peeking at results before the test reaches full sample size
- Calling a test "winner" at 80% confidence
- Running tests for less than one full week (day-of-week effects)
- Testing too many variants at once without enough traffic
- Ignoring guardrail metrics
- Cherry-picking secondary metrics after seeing results

### 4. Experimentation Culture Guide

- **Everyone can propose experiments** — use the backlog template
- **Hypotheses are required** — no "let's just try it"
- **Celebrate learning, not just wins** — a well-run test that shows no difference is valuable
- **Share results publicly** — weekly experiment review meeting
- **Document everything** — every test gets a write-up regardless of outcome
- **Kill losing tests fast** — if a variant is clearly losing on guardrail metrics, stop early

### 5. Test Result Documentation Template

| Field | Value |
|---|---|
| **Test Name** | |
| **Duration** | X weeks |
| **Sample Size** | N control, N variant |
| **Primary Metric Result** | Control: X%, Variant: Y%, Δ: Z% |
| **Statistical Significance** | p = X.XX, confidence = X% |
| **Secondary Metrics** | (table of results) |
| **Guardrail Metrics** | (all green / any concerns?) |
| **Decision** | Ship / Don't ship / Iterate |
| **Key Learning** | What did we learn? |
| **Next Steps** | |

## Recommended Tools

| Tool | Purpose | Pricing |
|---|---|---|
| **PostHog** | Feature flags + A/B testing (open-source) | Free tier (generous) |
| **LaunchDarkly** | Feature flags with experimentation | $10/mo+ |
| **Statsig** | Feature gates and experiments with auto-analysis | Free to 1M events |
| **GrowthBook** | Open-source A/B testing platform | Free (self-hosted) |
| **Split.io** | Feature delivery with experimentation | Free tier available |
| **Optimizely** | Enterprise experimentation platform | Contact for pricing |
| **Evan Miller Calculator** | Free sample size calculator | Free (evanmiller.org) |

## Agent Instructions

When populating this folder, the AI agent should:

1. Read `company-profile.md` to understand the product, traffic levels, and current stage
2. Read `13-analytics/user-tracking/README.md` for available events to use as test metrics
3. Read `13-analytics/funnel-analysis/README.md` for funnel drop-offs that are test candidates
4. Create 5-10 experiment ideas prioritized by ICE score, specific to the product
5. Design the A/B test plan template with all required fields
6. Write statistical rigor guidelines appropriate to the product's traffic level
7. Draft an experimentation culture guide
8. Recommend a testing tool based on stage and engineering resources
9. Output everything as `README.md` in this folder

## Example Output (Snippet)

```markdown
## Experiment #007 — Guided Onboarding Wizard

**Hypothesis:** If we replace the blank state with a 3-step guided wizard, activation rate will increase by ≥15% because new users need structure to reach their first success.

| Metric | Control | Variant | Δ | p-value |
|---|---|---|---|---|
| Activation rate (7-day) | 28.4% | 36.1% | +7.7pp (+27%) | 0.003 |
| Time to activation | 4.2 days | 1.8 days | -57% | <0.001 |
| Day-30 retention | 31.2% | 34.8% | +3.6pp | 0.11 (not sig) |

**Decision:** Ship the wizard. Primary metric improved significantly. Retention trending positive but needs more data — will monitor in the next cohort analysis.
```

## Cross-References

- `13-analytics/user-tracking` — experiments depend on accurately tracked metrics
- `13-analytics/funnel-analysis` — funnel drop-offs are the best source of experiment ideas
- `14-retention/user-onboarding` — onboarding is the highest-impact area for early experiments
- `11-conversion/pricing-strategy` — pricing experiments require extra statistical rigor
- `15-growth/product-led-growth` — PLG optimization relies on continuous experimentation
