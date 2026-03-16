---
department: 02-validation
subfolder: landing-page-test
priority: P0
stage: validation
estimated_time: "3-5 days"
requires:
  - 01-idea/problem-discovery
  - 01-idea/niche-selection
---

# Landing Page Test

## Overview

This folder is for creating a **test landing page** to measure real-world interest in your product before it exists. A landing page test converts vague "that sounds cool" into measurable data — click-through rates, email signups, and scroll behavior tell you whether your positioning resonates.

You're not building your final website. You're building a **measurement instrument** — a single page designed to answer one question: "When I describe this product to my target audience, do they take action?"

The page should describe the problem, present your solution, and have a single clear call-to-action. No product needs to exist yet.

## Questions to Answer

1. **What is your primary headline?** The one sentence that stops the right person in their tracks.
2. **What is the call-to-action?** "Join the waitlist"? "Get early access"? "Start free trial"?
3. **What defines success?** What conversion rate would validate the idea? (Benchmark: 5-10% email signup from targeted traffic is strong.)
4. **Where will you drive traffic from?** Organic social, communities, paid ads, cold outreach?
5. **How much traffic do you need?** Minimum 200-500 visitors for statistically meaningful data.
6. **What's your traffic budget?** $0 (organic only), $100-500 (test budget), $500+ (serious test)?
7. **How long will you run the test?** 1 week minimum, 2-4 weeks ideal.

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# Landing Page Test: [Your SaaS Name]

## Test Objective
> Validate that [target audience] is interested in [core value proposition] by measuring [primary metric].

## Page Brief

### Headline
> [Primary headline — clear, benefit-driven, speaks to the pain]

### Subheadline
> [Supporting line — adds specificity or credibility]

### Key Benefits (3-4 bullets)
- [Benefit 1: Pain → Solution framing]
- [Benefit 2: Specific outcome with numbers if possible]
- [Benefit 3: Differentiator from alternatives]
- [Benefit 4: Risk reversal or trust signal]

### Social Proof
- [Testimonial, stat, logo, or "Built by [credible founder background]"]

### Call-to-Action
- **Primary CTA:** [Button text]
- **What happens on click:** [Email capture, Stripe checkout, Calendly link]
- **Secondary CTA (optional):** [e.g., "See how it works" → demo video]

### Above-the-Fold Checklist
- [ ] Problem is immediately clear
- [ ] Solution benefit is specific (not generic)
- [ ] CTA is visible without scrolling
- [ ] Target audience knows "this is for me" in 5 seconds

## Traffic Plan

| Channel | Method | Budget | Expected Visitors |
|---|---|---|---|
| [Reddit/Twitter/LinkedIn] | [Organic posts in relevant communities] | $0 | [100-300] |
| [Google Ads] | [Exact-match keywords for problem] | [$X] | [X] |
| [Facebook/Instagram Ads] | [Interest targeting for persona] | [$X] | [X] |
| [Direct outreach] | [Email/DM to target personas] | $0 | [50-100] |

## Success Metrics

| Metric | Target | How to Measure |
|---|---|---|
| Unique visitors | [N] minimum | Google Analytics |
| Email signup rate | ≥[X]% | [Tool] / GA events |
| CTA click-through rate | ≥[X]% | Hotjar / GA |
| Bounce rate | ≤[X]% | Google Analytics |
| Time on page | ≥[X] seconds | Google Analytics |
| Scroll depth | ≥[X]% reach bottom | Hotjar |

## Test Timeline
| Day | Activity |
|---|---|
| Day 1 | Build and deploy landing page |
| Day 2-3 | Begin driving traffic (organic channels) |
| Day 3-5 | Launch paid traffic (if budgeted) |
| Day 7 | First data check — adjust if bounce rate > 80% |
| Day 14 | Final analysis — make go/no-go decision |

## Results (fill after test)
- **Total visitors:** [N]
- **Email signups:** [N] ([X]%)
- **Top traffic source:** [Channel]
- **Key insight:** [What you learned]
- **Decision:** [Proceed / Pivot / Iterate]
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Carrd** | Dead-simple one-page site builder | Free / $19/yr |
| **Unbounce** | Landing page builder with A/B testing | $99/mo |
| **Webflow** | More design control, CMS capabilities | Free / $14/mo |
| **Google Analytics 4** | Traffic and conversion tracking | Free |
| **Hotjar** | Heatmaps, scroll maps, session recordings | Free / $32/mo |
| **Plausible** | Privacy-friendly analytics (simple dashboard) | $9/mo |
| **Mailchimp / ConvertKit** | Collect and manage email signups | Free / $13/mo |

## Agent Instructions

When populating this folder for a founder:

1. Read `company-profile.md` and all completed `01-idea/` and `02-validation/customer-interviews/` documents
2. Draft a headline using the language from customer interviews (or problem discovery if interviews aren't done)
3. Write benefit bullets that address specific pains identified in research — not generic value props
4. Recommend a CTA based on stage: waitlist email for early stage, pre-order for higher confidence
5. Build a realistic traffic plan based on the founder's budget and where their niche congregates
6. Set specific success thresholds (not ranges) with rationale for each metric
7. Suggest a specific tool stack based on budget: Carrd for $0 budget, Webflow for more control
8. Leave the Results section blank — it's filled after the test runs

## Example Output (Abbreviated)

```markdown
# Landing Page Test: InvoiceBot

## Headline
> Stop spending Sunday nights on invoices. InvoiceBot turns your Figma hours into beautiful invoices — automatically.

## Key Benefits
- Track time inside Figma — no separate timer needed
- Generate branded invoices that match your portfolio aesthetic
- Get paid 2x faster with automated follow-ups and online payment links

## Success Metrics
| Metric | Target | Tool |
|---|---|---|
| Unique visitors | 500 minimum | Plausible |
| Email signup rate | ≥8% | ConvertKit |
| Bounce rate | ≤60% | Plausible |
```

## Cross-References

- **Depends on:** [01-idea/problem-discovery](../../01-idea/problem-discovery/) — Pain language fuels the headline
- **Related:** [02-validation/waitlist](../waitlist/) — Landing page feeds into waitlist strategy
- **Related:** [08-launch/landing-page](../../08-launch/landing-page/) — Test learnings inform your real launch page
- **Related:** [09-acquisition/seo-wins](../../09-acquisition/seo-wins/) — SEO may be a long-term traffic source
