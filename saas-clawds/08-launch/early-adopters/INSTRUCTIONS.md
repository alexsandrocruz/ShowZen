---
department: 08-launch
subfolder: early-adopters
priority: P1
stage: launch
estimated_time: "2-3 days"
requires:
  - 08-launch/beta-users
---

# Early Adopter Program

## Overview

This folder documents how you identify, cultivate, and activate your early adopters — the small group of passionate users who become your product's first evangelists. Early adopters aren't just customers; they're co-creators who shape your product, provide testimonials, refer peers, and defend you in public forums.

The difference between a beta user and an early adopter is emotional investment. Beta users try your product. Early adopters champion it. Your job is to identify which beta users have that spark and give them reasons to amplify it.

## Questions to Answer

Before generating the output document, the founder should answer:

1. **How do you identify your champions?** Usage frequency, feedback quality, organic referrals, NPS score?
2. **What does your early adopter program look like?** Exclusive Slack channel, advisory board, ambassador title?
3. **What rewards do early adopters receive?** Lifetime discount, free tier, early access to features, swag?
4. **How will you collect testimonials?** Written quotes, video testimonials, case studies?
5. **Do you want case studies?** How many, and what format (blog post, PDF, landing page section)?
6. **How do early adopters influence your roadmap?** Advisory calls, priority feature requests, voting?
7. **What referral mechanism do early adopters use?** Unique referral links, invite codes, word of mouth?
8. **How do you publicly recognize early adopters?** Wall of fame, community badges, social shoutouts?

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# Early Adopter Program: [Your SaaS Name]

## Program Overview
| Attribute | Value |
|---|---|
| Program name | [e.g., "Founding Members", "Pioneer Program"] |
| Target size | [10-50 people] |
| Entry criteria | [How users qualify] |
| Rewards | [What they receive] |
| Duration | [Ongoing / time-limited] |

## Champion Identification Criteria
| Signal | Weight | How to Measure |
|---|---|---|
| Weekly active usage | High | Analytics: logged in 4+ days/week |
| Unprompted feedback | High | Emails, support tickets with suggestions |
| Referrals | Very High | Invited others without being asked |
| NPS 9-10 (Promoter) | High | Survey response |
| Public praise | Very High | Tweeted, posted, or reviewed positively |
| Community participation | Medium | Active in Slack/Discord |

## Testimonial Collection Plan
| Type | Target | Template | Use |
|---|---|---|---|
| Written quote | 10 | "[Product] helps me [outcome] by [mechanism]" | Landing page |
| Video testimonial | 3 | 60-90 sec, structured questions | Landing page, ads |
| Case study | 2 | Problem → Solution → Results (with metrics) | Sales collateral, blog |
| G2/Capterra review | 5 | Guided review with specific prompts | Social proof, SEO |

## Testimonial Request Template
> Hey [Name],
>
> You've been one of our most active users and your feedback has directly shaped [specific feature]. Would you be willing to share a quick quote about your experience? It would mean the world to us.
>
> Here's a simple format:
> "Before [Product], I struggled with [problem]. Now, [Product] helps me [outcome]. The biggest difference is [specific benefit]."
>
> Totally fine to modify — just want it in your words. I can also hop on a 15-min call if that's easier.
>
> As a thank you, [reward].

## Case Study Template
```markdown
# How [Company] [achieved outcome] with [Your Product]

## The Challenge
- [Company background — size, industry, role of interviewee]
- [Specific problem they faced]
- [What they tried before]

## The Solution
- [How they found your product]
- [How they use it — specific workflows]
- [Key features that made the difference]

## The Results
- [Metric 1: e.g., "Saved 5 hours per week"]
- [Metric 2: e.g., "Reduced task completion time by 40%"]
- [Quote from the user]
```

## Referral Mechanism
| Method | Implementation | Incentive |
|---|---|---|
| Referral link | Unique URL per user | [1 month free / credit per referral] |
| Invite codes | Limited-use codes for exclusivity | [Early access for invitees] |
| Social sharing | Pre-written tweets/posts | [Public recognition] |

## Early Adopter Engagement Calendar
| Week | Activity |
|---|---|
| 1 | Welcome to program, exclusive Slack/Discord invite |
| 2 | 1:1 call — deep feedback session |
| 3 | Early access to upcoming feature |
| 4 | Testimonial request |
| 6 | Case study interview (for top champions) |
| 8 | Referral program launch to this group first |
| Ongoing | Monthly "insider update" email with roadmap preview |
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Testimonial.to** | Collect video and text testimonials with a simple link | Free tier |
| **Senja** | Testimonial collection and display widgets | Free tier |
| **Canny** | Feature request voting (let champions influence roadmap) | Free tier |
| **ReferralCandy / Rewardful** | Referral program management | Varies |
| **Slack / Discord** | Private early adopter community | Free |
| **Loom** | Record and share product updates with champions | Free tier |

## Agent Instructions

When populating this folder for a founder:

1. Read `company-profile.md` for product type, target customer, and stage
2. Read `08-launch/beta-users` for the beta user base — early adopters come from here
3. Read `01-idea/problem-discovery` for the problem statement — testimonials should reference this pain
4. Ask the 8 questions above if not answered
5. Design champion identification criteria based on behavioral signals specific to the product
6. Write the testimonial request email using the founder's actual product name and a realistic feature example
7. Create a case study template with prompts specific to the product's value proposition
8. Plan a referral mechanism appropriate for the product type (B2B: invite codes; B2C: referral links)
9. Build an engagement calendar with specific activities over the first 8 weeks
10. Include at least 3 different testimonial types with where each will be used

## Example Output (Abbreviated)

```markdown
# Early Adopter Program: TaskFlow

## Program Overview
| Attribute | Value |
|---|---|
| Program name | TaskFlow Founders Club |
| Target size | 25 users |
| Entry criteria | Active 4+ days/week, NPS 9-10, or organic referral |
| Rewards | Lifetime 50% discount on any plan, "Founding Member" badge |

## Champion Identification
Top 5 champions from beta (by engagement):
1. Sarah K. (Acme Co) — uses daily, submitted 12 feature requests, referred 2 colleagues
2. Marcus L. (StartupXYZ) — NPS 10, wrote unsolicited LinkedIn post about TaskFlow
3. Priya R. (DesignStudio) — active in Slack, helps other users troubleshoot
```

## Cross-References

- **Depends on:** [08-launch/beta-users](../beta-users/) — Beta program feeds champion candidates
- **Feeds into:** [08-launch/landing-page](../landing-page/) — Testimonials and social proof for the landing page
- **Feeds into:** [15-growth/referral-programs](../../15-growth/referral-programs/) — Referral mechanics at scale
- **Feeds into:** [15-growth/community-building](../../15-growth/community-building/) — Champions seed the community
- **Informs:** [03-planning/product-roadmap](../../03-planning/product-roadmap/) — Champion feedback shapes priorities
