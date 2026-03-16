---
department: 08-launch
subfolder: product-hunt
priority: P1
stage: launch
estimated_time: "3-5 days"
requires:
  - 08-launch/landing-page
  - 04-design/ui-design
---

# Product Hunt Launch

## Overview

This folder contains your Product Hunt launch playbook — the timeline, assets, messaging, and coordination plan for a successful Product Hunt debut. A well-executed Product Hunt launch can deliver hundreds to thousands of signups in a single day, generate backlinks for SEO, and establish credibility in the tech community.

But Product Hunt isn't magic. The products that do well prepare for weeks in advance, build a support network, and have a polished product and compelling story. A sloppy, last-minute launch often does more harm than good — you get one shot at a first launch.

## Questions to Answer

Before generating the output document, the founder should answer:

1. **What day do you plan to launch?** (Tuesday–Thursday tend to perform best. Avoid holidays and major tech events.)
2. **Do you have a hunter?** (A well-known hunter can boost initial visibility, but isn't required.)
3. **What's your tagline?** (60 characters max — the single line that appears below your product name.)
4. **What's your maker comment?** (The first comment from you — the backstory and why you built this.)
5. **What assets do you need?** Gallery images (1270x760), logo, video/GIF demo?
6. **Who is your support team?** Friends, communities, social followers who'll upvote and comment early?
7. **What's your promotional plan?** Email list, social media, communities, direct outreach?
8. **Do you have a special offer for Product Hunt visitors?** Extended trial, discount, exclusive feature?

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# Product Hunt Launch Plan: [Your SaaS Name]

## Launch Overview
| Attribute | Value |
|---|---|
| Launch date | [Date — Tuesday–Thursday] |
| Launch time | 12:01 AM PT (start of PH day) |
| Hunter | [Name or self-launch] |
| Tagline | [60 chars max] |
| Product Hunt URL | [To be created] |
| Special offer | [PH-exclusive deal] |

## Asset Checklist
- [ ] Logo (240x240, PNG, no rounded corners)
- [ ] Gallery images (1270x760, 3-5 images showing key features)
- [ ] Product demo GIF/video (< 60 seconds, shows core value)
- [ ] Maker avatar (professional headshot)
- [ ] Topics selected (3-5 relevant PH topics)

## Maker Comment Draft
> Hey Product Hunt! 👋 I'm [Name], the maker of [Product].
>
> **Why I built this:**
> [2-3 sentences about the problem you experienced or observed]
>
> **What it does:**
> [2-3 sentences about the product — focus on benefits, not features]
>
> **Where we are:**
> [Stage — launched today, been in beta with X users, etc.]
>
> **Special offer for PH:**
> [Exclusive deal for Product Hunt visitors]
>
> I'd love your feedback — especially on [specific area]. Drop a comment
> and I'll reply to every single one. 🙏

## Launch Timeline

### 2 Weeks Before
- [ ] Finalize product — fix all P0/P1 bugs
- [ ] Create all visual assets (gallery, logo, video)
- [ ] Write tagline and description (A/B test with friends)
- [ ] Draft maker comment
- [ ] Identify and reach out to hunter (if using one)
- [ ] Build support list (50+ people who'll engage on launch day)

### 1 Week Before
- [ ] Schedule social media posts for launch day
- [ ] Draft email to your list announcing the launch
- [ ] Prepare "launch day" page or banner on your website
- [ ] Test product stability under expected load
- [ ] Prepare direct messages to supporters (personalized, not copy-paste)

### Launch Day (Day 0)
- [ ] Submit at 12:01 AM PT (or have hunter submit)
- [ ] Post maker comment immediately
- [ ] Send email to list with direct PH link
- [ ] Post on social media (Twitter/X, LinkedIn, relevant communities)
- [ ] Send DMs to supporters with personal ask (not "please upvote" — "would love your thoughts on...")
- [ ] Reply to every comment within 30 minutes
- [ ] Monitor analytics and fix any issues immediately
- [ ] Post an update comment at midday with traction/stats

### Day 1-3 (Post-Launch)
- [ ] Follow up on social media with results
- [ ] Thank supporters publicly
- [ ] Handle influx of signups and support requests
- [ ] Publish "How we launched on Product Hunt" blog post
- [ ] Add "Featured on Product Hunt" badge to website

## Support Team
| Name/Channel | Audience Size | Ask |
|---|---|---|
| [Friend/Colleague] | N/A | Comment + upvote on launch morning |
| [Twitter/X] | [Followers] | Share launch post |
| [Email list] | [Subscribers] | Direct link email |
| [Slack/Discord community] | [Members] | Share in relevant channel |

## Success Metrics
| Metric | Target |
|---|---|
| Final rank | Top 5 of the day |
| Upvotes | 200+ |
| Comments | 50+ |
| Website visits | 2,000+ |
| Signups | 200+ |
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Product Hunt** | Launch platform | Free |
| **Ship by Product Hunt** | Pre-launch page and subscriber collection | Free |
| **Typefully** | Schedule and optimize Twitter/X threads | Free tier |
| **Canva** | Create gallery images and social assets | Free tier |
| **Loom** | Record quick product demo video | Free tier |
| **Tally** | Collect feedback post-launch | Free |

**References:** *How to Launch on Product Hunt* guide (producthunt.com), Lenny's Newsletter PH analysis

## Agent Instructions

When populating this folder for a founder:

1. Read `company-profile.md` for product name, description, and positioning
2. Read `08-launch/landing-page` for messaging alignment — PH tagline should match landing page headline
3. Read `04-design/ui-design` for brand assets to use in gallery images
4. Ask the 8 questions above if not answered
5. Write a specific maker comment draft using the founder's actual story and product
6. Create a day-by-day timeline with concrete tasks (not vague reminders)
7. Help build the support team list — suggest where the founder's audience hangs out
8. Set realistic success metrics based on product category (dev tools vs. B2C differ widely)
9. Include the special offer strategy — PH visitors expect some exclusivity
10. Plan for the post-launch window (Day 1-3) — this is where most founders drop the ball

## Example Output (Abbreviated)

```markdown
# Product Hunt Launch Plan: TaskFlow

## Launch Overview
| Attribute | Value |
|---|---|
| Launch date | Tuesday, April 15, 2025 |
| Tagline | "Simple task tracking for teams who hate project management tools" |
| Special offer | 50% off Pro plan for first year (PH exclusive) |

## Maker Comment Draft
> Hey PH! I'm Alex, a former PM who spent more time updating Jira than actually doing work. TaskFlow is the task tracker I wish existed — simple enough for a 5-person team, powerful enough to replace your spreadsheet chaos. We've been in beta with 25 teams for 4 weeks and the #1 feedback is "why didn't this exist sooner?" Try it free — and PH folks get 50% off Pro for a year. What do you think?
```

## Cross-References

- **Depends on:** [08-launch/landing-page](../landing-page/) — Where PH traffic lands
- **Depends on:** [04-design/ui-design](../../04-design/ui-design/) — Visual assets for the launch
- **Follows:** [08-launch/beta-users](../beta-users/) — Beta feedback refines the product before PH
- **Feeds into:** [08-launch/early-adopters](../early-adopters/) — PH users become early adopters
- **Amplified by:** [09-acquisition/social-media](../../09-acquisition/social-media/) — Social promotion on launch day
