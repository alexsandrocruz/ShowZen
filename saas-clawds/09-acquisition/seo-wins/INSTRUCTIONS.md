---
department: 09-acquisition
subfolder: seo-wins
priority: P0
stage: post-launch (start pre-launch for best results)
estimated_time: 3-4 hours initial strategy, ongoing weekly
requires:
  - 03-planning/tech-stack
  - 08-launch/landing-page
---

# SEO Wins — Organic Search Strategy

## Overview

This folder contains your organic search strategy — the plan for ranking in Google (and other search engines) for the terms your target customers are searching. SEO is the highest-leverage acquisition channel for most SaaS companies because it compounds: content you publish today continues driving traffic for years.

Unlike paid ads that stop the moment you stop paying, SEO builds a moat. But it takes 3-6 months to see meaningful results, which is exactly why you should start now.

## Questions to Answer

Before generating the SEO strategy, the founder needs to answer:

1. **What are the top 10-20 keywords your ideal customer searches when looking for a solution like yours?** (Include both high-volume head terms and specific long-tail phrases)
2. **What content types rank on page 1 for your target keywords right now?** (Blog posts? Comparison pages? Tool pages? Listicles?)
3. **What is your competitors' domain authority?** (Check via Ahrefs or Moz — this tells you how hard it'll be to outrank them)
4. **What is your link-building strategy?** (Guest posts? HARO? Original research? Product-led link magnets?)
5. **What is your current technical SEO status?** (Page speed, mobile-friendly, crawl errors, sitemap, structured data)
6. **Do you need local SEO?** (If you serve specific geographies or have physical locations)
7. **What is your content production capacity?** (How many articles per week/month can you realistically publish?)
8. **Do you have any existing domain authority or content?** (Starting from zero vs. building on an existing base changes the strategy)

## Output Template

Generate a comprehensive SEO strategy document with these sections:

### 1. Keyword Strategy
- **Head terms** (high volume, high competition) — 5-10 keywords
- **Long-tail keywords** (lower volume, easier to rank) — 20-30 keywords
- **Keyword clusters** — group related keywords into topic clusters with a pillar page and supporting content
- **Search intent mapping** — categorize each keyword as informational, navigational, commercial, or transactional

### 2. Content Calendar for SEO
- Monthly content plan for the first 6 months
- Each piece mapped to a target keyword cluster
- Content type for each piece (how-to guide, comparison, listicle, tool page, case study)
- Word count targets and internal linking plan

### 3. Technical SEO Audit Checklist
- [ ] Page speed score (target: >90 on PageSpeed Insights)
- [ ] Mobile responsiveness
- [ ] XML sitemap submitted to Google Search Console
- [ ] Robots.txt configured correctly
- [ ] Structured data / schema markup
- [ ] HTTPS enabled
- [ ] No broken links or 404 errors
- [ ] Canonical URLs set
- [ ] Core Web Vitals passing
- [ ] Image optimization (WebP, lazy loading, alt tags)

### 4. Link Building Plan
- Target number of backlinks per month
- Link building tactics ranked by effort vs. impact
- Outreach template for guest posting
- List of target sites for backlinks
- Content formats that naturally attract links (original research, tools, templates)

### 5. Competitor SEO Analysis
- Top 3-5 competitors and their estimated organic traffic
- Keywords they rank for that you don't
- Content gaps — topics they haven't covered well
- Backlink gap — sites linking to them but not you

## Recommended Tools

| Tool | Purpose | Pricing |
|---|---|---|
| **Ahrefs** | Keyword research, backlink analysis, competitor analysis | $99+/mo |
| **SEMrush** | All-in-one SEO platform | $119+/mo |
| **Google Search Console** | Monitor your site's search performance | Free |
| **Surfer SEO** | On-page optimization and content scoring | $59+/mo |
| **Screaming Frog** | Technical SEO crawler and auditor | Free (500 URLs) / £199/yr |
| **Google Keyword Planner** | Keyword volume and competition data | Free |
| **Clearscope** | Content optimization for topical coverage | $170+/mo |

## Agent Instructions

When populating this folder, the AI agent should:

1. Read `company-profile.md` to understand the product, target customer, and problem solved
2. Generate 5-10 head keywords and 20-30 long-tail keywords based on the product category
3. Group keywords into 4-6 topic clusters, each with a pillar page idea
4. Create a 6-month content calendar with 2-4 SEO-focused pieces per month
5. Include a technical SEO checklist tailored to the founder's tech stack (from `03-planning/tech-stack`)
6. Research and list 10-15 competitor domains for backlink gap analysis
7. Suggest 5 link-building tactics ranked by founder effort level
8. Output the complete document as `README.md` in this folder

## Example Output (Snippet)

```markdown
## Keyword Clusters

### Cluster 1: Project Management for Remote Teams
- Pillar: "The Complete Guide to Remote Project Management" (target: 2,500 words)
- Supporting: "Best Remote Project Management Tools 2026" (comparison, 1,800 words)
- Supporting: "How to Run Async Standups" (how-to, 1,200 words)
- Supporting: "Remote Team Productivity Statistics" (data post, 1,500 words)
- Target keywords: remote project management, async standup tools, remote team productivity

### Month 1 Content Calendar
| Week | Title | Target Keyword | Type | Word Count |
|---|---|---|---|---|
| 1 | Complete Guide to Remote PM | remote project management | Pillar | 2,500 |
| 2 | Best Remote PM Tools 2026 | best remote PM tools | Comparison | 1,800 |
| 3 | How to Run Async Standups | async standup | How-to | 1,200 |
| 4 | Remote Team Stats You Need | remote team statistics | Data | 1,500 |
```

## Cross-References

- `09-acquisition/content-marketing` — SEO and content marketing are deeply intertwined; your content calendar should serve both
- `08-launch/landing-page` — your landing page is your most important page for branded search
- `13-analytics/kpi-dashboard` — track organic traffic, keyword rankings, and SEO-attributed signups
- `04-design/ux-flows` — site structure and navigation impact crawlability and user experience
