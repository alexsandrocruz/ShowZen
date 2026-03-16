---
department: 15-growth
subfolder: community-building
priority: P1
stage: post-launch (start small, grow with user base)
estimated_time: 4-6 hours initial setup, ongoing daily/weekly effort
requires:
  - 08-launch/public-release
  - 09-acquisition/social-media
---

# Community Building — Creating a Gathering Place for Your Users and Advocates

## Overview

This folder contains your community strategy — the plan for building a group of users, advocates, and enthusiasts around your product. A community isn't just a support forum or a marketing channel. It's a durable asset that generates value in every direction: users help each other, share use cases, provide product feedback, create content, and recruit new customers through genuine advocacy.

The best SaaS communities become the product's moat. Competitors can copy features, but they can't copy a thriving community of passionate users who've built relationships and shared knowledge in your space.

## Questions to Answer

Before building a community, the founder needs to answer:

1. **What platform will host the community?** (Discord is great for real-time, developer audiences. Slack for professional/B2B. Circle for structured, owned communities. Discourse for long-form Q&A. Choose based on your audience's habits.)
2. **What is the community's primary purpose?** (Peer support? Networking? Education? Feature requests? Co-creation? A community needs a clear reason to exist beyond "talking about our product.")
3. **What is the content strategy?** (Who seeds the initial content? What types of posts drive engagement? How do you maintain activity between major product updates?)
4. **What is the moderation plan?** (Community guidelines, code of conduct, moderation tools, who moderates, how to handle bad actors.)
5. **How does the community feed back to the product?** (Feature request voting? Bug reports? Direct channel to the product team? How do users know their input was heard?)
6. **What's the growth strategy for the community?** (Invite at signup? Promote in-app? Launch event? How do you get to the first 100 members — the critical mass threshold?)
7. **How will you measure community health?** (Active members, messages per day, response rate, member satisfaction, community-sourced signups.)

## Output Template

Generate a comprehensive community strategy with these sections:

### 1. Community Strategy Document

| Element | Your Decision |
|---|---|
| **Platform** | [Discord / Slack / Circle / Discourse / Other] |
| **Primary purpose** | [Support / Networking / Education / Co-creation] |
| **Target audience** | [All users / Power users / Specific segment] |
| **Community name** | [e.g., "[Product] Community", "[Product] Builders"] |
| **Launch target** | [100 founding members by date] |
| **Long-term vision** | [What the community becomes in 12 months] |

### 2. Channel/Space Structure

| Channel | Purpose | Type | Moderation |
|---|---|---|---|
| #welcome | Introductions and community guidelines | Public | Light |
| #general | Open discussion | Public | Light |
| #help | Product support (community-powered) | Public | Active — ensure responses |
| #feature-requests | Ideas and votes | Public | Curated weekly |
| #showcase | Users share what they built | Public | Light — celebrate everything |
| #announcements | Product updates (team only posts) | Read-only | Team |
| #off-topic | Non-product chat to build relationships | Public | Light |
| #beta-testers | Early access to new features | Private | Invite only |

### 3. Launch Plan (First 100 Members)

| Week | Action | Target |
|---|---|---|
| Week 1 | Personal invites to most engaged users | 20 founding members |
| Week 2 | Announce in product + email to active users | 50 members |
| Week 3 | First community event (AMA, workshop, or office hours) | 75 members |
| Week 4 | Social media promotion + blog post | 100 members |
| Ongoing | In-app prompt for new users after activation | Continuous growth |

### 4. Content Calendar (First Month)

| Day | Content | Type | Owner |
|---|---|---|---|
| Mon | Product tip of the week | Post | Team |
| Tue | Community question / discussion prompt | Post | Community manager |
| Wed | User showcase (highlight a member's work) | Post | Community manager |
| Thu | Behind the scenes / roadmap update | Post | Founder |
| Fri | Fun/off-topic thread | Post | Community manager |

### 5. Moderation Guidelines

**Community Code of Conduct:**
- Be respectful and constructive
- No spam, self-promotion, or recruitment
- No harassment, discrimination, or hate speech
- Keep discussions on-topic in specific channels
- Disagreement is fine; personal attacks are not

**Moderation Actions:**
| Offense | First | Second | Third |
|---|---|---|---|
| Off-topic/spam | Move post + gentle reminder | Warning | 24h mute |
| Disrespectful | Warning + reminder of guidelines | 24h mute | Ban |
| Harassment | Immediate ban | — | — |

### 6. Community Health Metrics

| Metric | Definition | Healthy Target |
|---|---|---|
| Weekly Active Members (WAM) | Members who post or react ≥1 time/week | >30% of total |
| Messages per day | Total community messages | Growing week-over-week |
| Response rate | % of questions that get a response | >90% |
| Time to first response | How fast questions get answered | <4 hours (community-powered) |
| Member growth rate | New members per week | >5% week-over-week early on |
| NPS of community members | Satisfaction survey | >50 |
| Community-sourced signups | New users who came through community | Tracked and growing |

## Recommended Tools

| Tool | Purpose | Pricing |
|---|---|---|
| **Discord** | Real-time community (popular with dev/creator audiences) | Free |
| **Slack** | Professional community (B2B audiences) | Free tier, $7.25+/user/mo |
| **Circle** | Owned community platform with courses and spaces | $89+/mo |
| **Discourse** | Open-source forum for long-form Q&A | Free (self-hosted), $50+/mo |
| **Bettermode** | Community platform with product integrations | Free tier, $19+/mo |
| **Orbit** | Community analytics and member tracking | $200+/mo |
| **Common Room** | Community intelligence platform | Free tier available |

## Agent Instructions

When populating this folder, the AI agent should:

1. Read `company-profile.md` to understand the target customer and product type
2. Read `09-acquisition/social-media/README.md` for existing social presence
3. Read `10-distribution/communities/README.md` for community participation strategy
4. Recommend a platform based on the target audience's habits
5. Design the channel structure with clear purposes
6. Create the launch plan to reach 100 founding members
7. Build a content calendar for the first month
8. Write the community code of conduct and moderation guidelines
9. Define health metrics with targets
10. Output everything as `README.md` in this folder

## Example Output (Snippet)

```markdown
## Community Launch Plan — [Product] Builders

**Platform:** Discord (our audience is developers and technical founders)
**Goal:** 100 members in 4 weeks, 500 in 3 months

### Week 1 Results
| Metric | Value |
|---|---|
| Members joined | 34 |
| Messages sent | 187 |
| Questions asked | 12 |
| Questions answered (by community) | 9 (75%) |
| Top channel | #showcase (users love showing their work) |

**Key learning:** The #showcase channel is the biggest engagement driver. Users who post in showcase have 3x retention rate. Will promote this more heavily in onboarding.
```

## Cross-References

- `10-distribution/communities` — external community participation complements your owned community
- `09-acquisition/social-media` — social media drives awareness to the community
- `14-retention/customer-support` — community provides peer support that scales
- `15-growth/product-led-growth` — community amplifies PLG through shared use cases
- `14-retention/feature-adoption` — community is a channel for feature education
