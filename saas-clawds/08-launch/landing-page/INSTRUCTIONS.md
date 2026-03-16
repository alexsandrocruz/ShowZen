---
department: 08-launch
subfolder: landing-page
priority: P0
stage: pre-launch
estimated_time: "3-5 days"
requires:
  - 01-idea/problem-discovery
  - 04-design/ui-design
---

# Landing Page

## Overview

This folder contains the content brief, section plan, and SEO metadata for your product's landing page. Your landing page is your digital storefront — for most visitors, it's the first and only impression they'll get. It must answer three questions in under 5 seconds: "What is this?", "Is it for me?", and "What do I do next?"

A high-converting landing page isn't about clever design — it's about clear messaging. The best landing pages take the exact language their target customers use to describe their problem and reflect it back to them, followed by an obvious solution and a low-friction call to action.

## Questions to Answer

Before generating the output document, the founder should answer:

1. **What's your one-line value proposition?** If someone reads only the headline, do they understand the benefit?
2. **What goes above the fold?** Headline, subheadline, CTA, screenshot/demo, social proof?
3. **What social proof do you have?** Testimonials, user count, logos, press mentions, metrics?
4. **What are your primary and secondary CTAs?** "Start free trial", "Book a demo", "Join waitlist"?
5. **What are your target SEO keywords?** What would your ideal customer Google to find you?
6. **How will you handle pricing on the landing page?** Show pricing, link to pricing page, or hide until signup?
7. **Do you have a demo or product screenshots?** Video demo, interactive demo, or static screenshots?
8. **What objections do potential customers have?** Price, complexity, switching cost, security? How does the page address them?

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# Landing Page Content Brief: [Your SaaS Name]

## Page Metadata
| Attribute | Value |
|---|---|
| URL | yourapp.com |
| Title tag | [60 chars max] |
| Meta description | [155 chars max] |
| Primary keyword | |
| Secondary keywords | |
| OG image | [Description of social share image] |

## Section-by-Section Plan

### Section 1: Hero (Above the Fold)
- **Headline:** [Value proposition — what do you do?]
- **Subheadline:** [Who is it for and what's the benefit?]
- **CTA:** [Primary action button text]
- **Visual:** [Screenshot, demo video, or illustration]
- **Social proof snippet:** [e.g., "Trusted by 500+ teams" or "4.9★ on G2"]

### Section 2: Problem Agitation
- **Pain points** (3 bullet points the target customer feels)
- **"Sound familiar?"** — empathy-building copy

### Section 3: Solution Overview
- **How it works** (3 steps or key features with icons)
- **Product screenshot** showing the core value in action

### Section 4: Feature Highlights
- Feature 1: [Name] — [One-sentence benefit]
- Feature 2: [Name] — [One-sentence benefit]
- Feature 3: [Name] — [One-sentence benefit]

### Section 5: Social Proof
- **Testimonials** (2-3 with name, role, company, photo)
- **Logos** of notable customers (if available)
- **Metrics:** "X users", "Y tasks completed", "Z hours saved"

### Section 6: Pricing Preview (Optional)
- Summary of plans or "Free to start — upgrade anytime"

### Section 7: FAQ
| Question | Answer |
|---|---|
| | |
| | |
| | |

### Section 8: Final CTA
- Repeat headline with urgency
- Primary CTA button
- Secondary CTA (e.g., "Book a demo" or "See it in action")

## Conversion Optimization Notes
- Page load time target: < 2 seconds
- Mobile-optimized: Yes (mobile-first design)
- A/B test candidates: [Headline variants, CTA text, hero image vs. video]
- Analytics: [Track CTA clicks, scroll depth, time on page]

## SEO Strategy
| Element | Content |
|---|---|
| H1 | [Matches primary keyword intent] |
| H2s | [Feature/benefit sections with secondary keywords] |
| Internal links | [Blog, docs, pricing, about] |
| Schema markup | [Organization, SoftwareApplication, FAQ] |
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Next.js / Astro** | Fast, SEO-friendly static site | Free |
| **Framer** | No-code landing page builder with animations | Free tier |
| **Webflow** | Visual web builder with CMS | Free tier |
| **Carrd** | Ultra-simple one-page sites | Free / $19/yr |
| **Vercel** | Hosting with edge functions and analytics | Free tier |
| **Hotjar / PostHog** | Heatmaps, session recordings, scroll tracking | Free tier |
| **Ahrefs / Ubersuggest** | Keyword research for SEO targeting | Free tier / $12/mo |

**References:** Julian Shapiro's *Landing Page Guide*, Harry Dry's *Marketing Examples*, Stripe's landing page

## Agent Instructions

When populating this folder for a founder:

1. Read `company-profile.md` for product name, description, target customer, and positioning
2. Read `01-idea/problem-discovery` for the problem statement — the landing page must reflect this pain
3. Read `04-design/ui-design` for visual direction and brand guidelines
4. Ask the 8 questions above if not answered
5. Write the headline and subheadline using the customer's language (from problem discovery), not technical jargon
6. Plan every section of the page with specific content, not placeholders
7. Include 3 FAQ items addressing the top objections for this product type
8. Set up SEO metadata with realistic keyword targets (check search volume if possible)
9. Include conversion optimization notes — what to A/B test first
10. Cross-reference pricing strategy to decide how pricing appears on the landing page

## Example Output (Abbreviated)

```markdown
# Landing Page Content Brief: TaskFlow

### Section 1: Hero
- **Headline:** "Stop losing tasks in Slack threads and spreadsheets"
- **Subheadline:** "TaskFlow gives small teams a simple way to track work — without the complexity of Jira or the chaos of shared docs."
- **CTA:** "Start free — no credit card required"
- **Visual:** 4-second looping video of task creation → assignment → completion

### Section 2: Problem Agitation
- Tasks scattered across Slack, email, and spreadsheets
- No visibility into what's done, stuck, or overdue
- Spent more time tracking work than doing work

### Section 5: Social Proof
- "We switched from Notion and saved 3 hours per week per person." — Sarah K., Ops Lead at Acme Co
```

## Cross-References

- **Depends on:** [01-idea/problem-discovery](../../01-idea/problem-discovery/) — Problem statement drives messaging
- **Depends on:** [04-design/ui-design](../../04-design/ui-design/) — Visual design and brand identity
- **Pairs with:** [09-acquisition/seo-wins](../../09-acquisition/seo-wins/) — SEO strategy for organic traffic
- **Links to:** [11-conversion/pricing-strategy](../../11-conversion/pricing-strategy/) — Pricing section content
- **Feeds into:** [11-conversion/sales-funnel](../../11-conversion/sales-funnel/) — Top of funnel conversion
