---
department: 10-distribution
subfolder: directories
priority: P0
stage: post-launch (submit immediately after public release)
estimated_time: 4-6 hours initial submissions, ongoing monthly
requires:
  - 08-launch/landing-page
  - 08-launch/public-release
---

# Directories — SaaS Directories & Review Sites

## Overview

This folder contains your directory listing strategy — the plan for getting your product listed on every relevant SaaS directory, review site, and software comparison platform. Directory listings are one of the highest-leverage, lowest-effort distribution tactics in SaaS. Once submitted, they generate passive, high-intent traffic indefinitely.

Buyers actively search these sites when evaluating software. A strong listing with real reviews can be the deciding factor between you and a competitor.

## Questions to Answer

Before generating the directory strategy, the founder needs to answer:

1. **Which software categories does your product fit into?** (Most directories organize by category — pick 2-3 primary categories)
2. **Do you want to invest in paid/featured listings?** (G2 and Capterra offer paid placements — these can be very effective for competitive categories)
3. **What is your review generation strategy?** (How will you get happy customers to leave reviews? Timing, incentives, process)
4. **What makes your listing copy compelling?** (Key differentiators, unique features, specific outcomes for customers)
5. **Do you have screenshots, demo videos, and customer logos ready?** (Rich listings convert dramatically better)
6. **What competitive listings should you study?** (Look at how top competitors present themselves on these platforms)

## Output Template

Generate a comprehensive directory strategy with these sections:

### 1. Directory Submission Tracker

Submit to these directories (prioritized by traffic and relevance):

**Tier 1 — High-Traffic Review Sites (submit first)**
| # | Directory | URL | Category | Free/Paid | Status |
|---|---|---|---|---|---|
| 1 | G2 | g2.com | Software reviews | Free + paid options | |
| 2 | Capterra | capterra.com | Software comparison | Free + paid ($2-15/click) | |
| 3 | TrustRadius | trustradius.com | Enterprise software reviews | Free | |
| 4 | GetApp | getapp.com | SaaS discovery | Free + paid | |
| 5 | Software Advice | softwareadvice.com | Software recommendations | Free + paid | |
| 6 | Product Hunt | producthunt.com | New product launches | Free | |

**Tier 2 — SaaS-Specific Directories**
| # | Directory | URL | Notes |
|---|---|---|---|
| 7 | AlternativeTo | alternativeto.net | "Alternatives to X" positioning |
| 8 | SaaSHub | saashub.com | SaaS discovery and alternatives |
| 9 | SaaSWorthy | saasworthy.com | SaaS ratings and reviews |
| 10 | Crozdesk | crozdesk.com | Business software reviews |
| 11 | SourceForge | sourceforge.net | Software directory with reviews |
| 12 | Slashdot | slashdot.org/software | Tech software listings |
| 13 | SoftwareSuggest | softwaresuggest.com | India-focused software reviews |
| 14 | GoodFirms | goodfirms.co | Software reviews and ratings |

**Tier 3 — General & Niche Directories**
| # | Directory | URL | Notes |
|---|---|---|---|
| 15 | BetaList | betalist.com | Early-stage startup listings |
| 16 | Launching Next | launchingnext.com | Startup directory |
| 17 | Startup Stash | startupstash.com | Curated startup resources |
| 18 | SideProjectors | sideprojectors.com | Side projects and startups |
| 19 | BetaPage | betapage.co | Beta product listings |
| 20 | Startups.fyi | startups.fyi | Startup tools directory |
| 21 | ToolPilot | toolpilot.ai | AI/SaaS tools directory |
| 22 | There's An AI For That | theresanaiforthat.com | AI tools (if applicable) |
| 23 | Futurepedia | futurepedia.io | AI tools directory |
| 24 | AppSumo Marketplace | appsumo.com | Lifetime deal marketplace |
| 25 | Indie Hackers Products | indiehackers.com/products | Indie maker community |
| 26 | MicroConf Connect | microconf.com | SaaS founder community |
| 27 | Crunchbase | crunchbase.com | Startup database |
| 28 | AngelList | angel.co | Startup profiles |
| 29 | F6S | f6s.com | Startup programs and listings |
| 30 | Stack Overflow (if dev tool) | stackoverflow.com/teams | Developer tool discovery |
| 31 | StackShare (if dev tool) | stackshare.io | Tech stack discovery |

### 2. Listing Copy Template
- **One-liner:** (10 words that explain what you do)
- **Short description:** (50-100 words for directory listings)
- **Long description:** (200-400 words for detailed profiles)
- **Key features:** (5-8 bullet points)
- **Use cases:** (3-4 specific scenarios)
- **Customer quote:** (testimonial for social proof)

### 3. Review Generation Strategy
- Timing: ask for reviews after "aha moment" or successful outcome
- Email template for requesting reviews
- In-app prompt design (non-intrusive)
- Review response strategy (respond to every review — positive and negative)
- Target: 10 reviews in first 3 months, 50+ within a year

### 4. Listing Optimization Calendar
- Monthly: check and update all listings
- Quarterly: refresh screenshots and feature lists
- After every major release: update listings with new features
- Respond to all new reviews within 48 hours

## Recommended Tools

| Tool | Purpose | Pricing |
|---|---|---|
| **G2** | Top B2B software review platform | Free listing + paid options |
| **Capterra** | Software comparison and PPC | Free listing + paid PPC |
| **TrustRadius** | Enterprise-focused reviews | Free |
| **GetApp** | SaaS discovery platform | Free + paid |
| **Software Advice** | Software recommendations | Free + paid |
| **Airtable / Notion** | Track submissions and status | Free–$10+/mo |

## Agent Instructions

When populating this folder, the AI agent should:

1. Read `company-profile.md` to understand the product category and stage
2. Select the most relevant 20-30 directories from the master list based on the product type
3. Write listing copy in three lengths (one-liner, short, long)
4. Generate 5-8 key feature bullet points from the product description
5. Create 3 use case descriptions for directory profiles
6. Write a review request email template
7. Build a submission tracker with status columns
8. Create a monthly optimization checklist
9. Output everything as `README.md` in this folder

## Example Output (Snippet)

```markdown
## Listing Copy

### One-liner
Async standup tool that replaces daily meetings for remote teams.

### Short Description (for directory listings)
[Product] is an async standup and check-in platform built for remote and hybrid teams. Replace your daily standup meetings with structured async updates that keep everyone aligned without interrupting deep work. Features include automated reminders, Slack/Teams integration, mood tracking, and goal-linked updates. Used by 500+ remote teams.

### Key Features
- Async standup updates with customizable templates
- Slack and Microsoft Teams integration
- Automated reminders based on team timezone
- Analytics dashboard with participation trends
- Goal tracking linked to daily updates
- Threaded discussions on updates
```

## Cross-References

- `08-launch/product-hunt` — Product Hunt is both a launch platform and an ongoing directory listing
- `09-acquisition/seo-wins` — directory listings provide valuable backlinks for SEO
- `11-conversion/sales-funnel` — directory traffic enters your funnel at the consideration stage
- `10-distribution/saas-marketplaces` — marketplaces are a step beyond directories (they involve integration)
