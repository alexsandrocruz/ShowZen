---
department: 08-launch
subfolder: public-release
priority: P0
stage: launch
estimated_time: "3-5 days"
requires:
  - 08-launch/landing-page
  - 08-launch/beta-users
  - 06-infrastructure/monitoring
  - 06-infrastructure/security
  - 07-testing/integration-testing
---

# Public Release & Go-Live

## Overview

This folder contains your go-live checklist and launch day runbook — the comprehensive plan for opening your product to the public. Public release is the highest-stakes moment in your SaaS journey so far. It's not just about flipping a switch; it's about coordinating technical readiness, marketing, support, and operations into a single smooth event.

The difference between a smooth launch and a disaster is preparation. Products that launch well don't wing it — they have a checklist, a runbook, a war room, and a rollback plan. This folder is your insurance policy against launch day chaos.

## Questions to Answer

Before generating the output document, the founder should answer:

1. **What's your launch date?** Firm date, or flexible based on readiness criteria?
2. **Is this a soft launch or hard launch?** Gradual rollout vs. big-bang public announcement?
3. **What's your PR and marketing plan?** Blog post, social media, press outreach, paid ads?
4. **Is your infrastructure ready for a traffic spike?** What's your expected peak and can you handle 3x that?
5. **Is customer support ready?** Who handles support on launch day? What's the response time SLA?
6. **What's your rollback plan?** If something catastrophic happens, how do you revert?
7. **What are your launch success metrics?** Signups, activation, revenue, uptime?
8. **Who is the launch day "war room" team?** Engineering, marketing, support — who's on call?

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# Go-Live Plan: [Your SaaS Name]

## Launch Overview
| Attribute | Value |
|---|---|
| Launch date | [Date] |
| Launch type | Soft launch / Hard launch |
| Expected traffic spike | [Number] visitors in first 24h |
| War room channel | [Slack channel / video call link] |
| Rollback decision owner | [Name/role] |

## Go-Live Checklist

### Technical Readiness (14+ days before)
- [ ] All P0 and P1 bugs resolved
- [ ] Performance testing completed — handles 3x expected traffic
- [ ] Database backups verified and tested
- [ ] SSL certificates valid and auto-renewing
- [ ] CDN configured and caching correctly
- [ ] Error tracking (Sentry) configured and tested
- [ ] Uptime monitoring configured with correct endpoints
- [ ] Health check endpoint returns 200
- [ ] Rate limiting configured on auth and API endpoints
- [ ] CORS configured for production domains
- [ ] Environment variables set for production
- [ ] Database migrations applied and verified
- [ ] Search engine indexing enabled (robots.txt, sitemap)
- [ ] 404 and error pages designed and deployed

### Security Readiness (7+ days before)
- [ ] OWASP Top 10 checklist reviewed
- [ ] Dependency vulnerabilities scanned (0 critical)
- [ ] Secrets rotated for production
- [ ] Admin access restricted and audited
- [ ] Data encryption at rest and in transit verified
- [ ] Privacy policy and terms of service published
- [ ] Cookie consent banner implemented (if needed)
- [ ] GDPR data export/deletion flow tested

### Payment & Billing (7+ days before)
- [ ] Stripe (or payment provider) switched from test to live mode
- [ ] Webhook endpoints receiving and processing live events
- [ ] All pricing tiers created and tested
- [ ] Subscription upgrade/downgrade flows tested
- [ ] Invoice emails sending correctly
- [ ] Tax configuration set up (Stripe Tax, etc.)
- [ ] Refund process documented

### Marketing Readiness (3-7 days before)
- [ ] Landing page content finalized and deployed
- [ ] Blog launch announcement drafted
- [ ] Social media posts scheduled
- [ ] Email to waitlist/beta users drafted
- [ ] Product Hunt launch prepared (if applicable)
- [ ] Press kit / media page ready (if doing PR)
- [ ] Analytics tracking verified (GA4, PostHog, etc.)
- [ ] UTM parameters configured for all launch links
- [ ] OG images and meta tags correct for social sharing

### Support Readiness (1-3 days before)
- [ ] Help docs / knowledge base published
- [ ] Support email or chat configured and tested
- [ ] FAQ section on landing page complete
- [ ] Canned responses drafted for common questions
- [ ] Support team briefed on known issues and workarounds
- [ ] Escalation path defined (support → engineering)

### Final Pre-Launch (Day before)
- [ ] Staging environment matches production
- [ ] Smoke tests pass on production
- [ ] Team briefed on launch day roles and timeline
- [ ] War room channel created and team invited
- [ ] Rollback procedure reviewed and ready
- [ ] Personal devices charged and ready (it'll be a long day)

## Launch Day Runbook

### T-1 Hour
- [ ] Verify all systems are green (monitoring dashboard)
- [ ] Confirm deployment is current and stable
- [ ] Open war room channel, confirm team is online

### T-0 (Launch)
- [ ] Remove beta gates / feature flags (if using gradual rollout)
- [ ] Publish blog post
- [ ] Send email to waitlist
- [ ] Post on social media
- [ ] Submit to Product Hunt (if applicable)
- [ ] Monitor dashboards in real-time

### T+1 Hour
- [ ] Check error rates — any spike?
- [ ] Check signup flow — people converting?
- [ ] Check infrastructure — CPU, memory, DB connections normal?
- [ ] Respond to first support queries and social mentions

### T+4 Hours
- [ ] Review signup numbers against targets
- [ ] Address any reported issues
- [ ] Post a social media update with early traction

### T+24 Hours
- [ ] Compile launch day metrics
- [ ] Send "thank you" to support team
- [ ] Plan post-launch fixes for any issues discovered
- [ ] Schedule team retrospective

## Rollback Plan
| Trigger | Action | Owner | Time |
|---|---|---|---|
| API error rate > 10% | Revert to previous deploy | Engineering lead | < 5 min |
| Payment processing broken | Enable maintenance mode, hotfix | Engineering lead | < 30 min |
| Data corruption detected | Halt writes, restore from backup | CTO | < 1 hour |

## Launch Success Metrics
| Metric | Target (Day 1) | Target (Week 1) |
|---|---|---|
| Signups | | |
| Activated users | | |
| Paid conversions | | |
| Uptime | 99.9% | 99.9% |
| Support response time | < 2 hours | < 4 hours |
| NPS (from onboarding survey) | > 30 | > 30 |
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **LaunchDarkly / Flipt** | Feature flags for gradual rollout | Free tier |
| **BetterStack / Instatus** | Public status page | Free tier |
| **Intercom / Crisp** | Live chat for launch day support | Free tier |
| **PostHog** | Real-time signup and activation tracking | Free tier |
| **Slack** | War room coordination | Free |
| **Resend / Loops** | Launch email to waitlist | Free tier |

## Agent Instructions

When populating this folder for a founder:

1. Read `company-profile.md` for launch stage, team size, and product type
2. Read `06-infrastructure/monitoring` for monitoring setup — ensure alerts are configured pre-launch
3. Read `06-infrastructure/security` for security readiness items
4. Read `07-testing/integration-testing` for test coverage of critical flows
5. Read `08-launch/landing-page` for marketing readiness
6. Ask the 8 questions above if not answered
7. Customize the 60+ item go-live checklist to the founder's specific tech stack and product
8. Create a launch day runbook with specific time blocks and responsibilities
9. Define the rollback plan with concrete triggers, actions, and time expectations
10. Set launch success metrics with Day 1 and Week 1 targets based on the founder's acquisition channels

## Example Output (Abbreviated)

```markdown
# Go-Live Plan: TaskFlow

## Launch Overview
| Attribute | Value |
|---|---|
| Launch date | Tuesday, April 15, 2025 |
| Launch type | Coordinated (PH + social + email) |
| Expected traffic | 3,000 visitors in 24h |
| War room | #taskflow-launch in Slack |

## Launch Success Metrics
| Metric | Day 1 Target | Week 1 Target |
|---|---|---|
| Signups | 300 | 800 |
| Activated (created a project) | 150 | 500 |
| Paid conversions | 10 | 40 |
| Uptime | 100% | 99.9% |
```

## Cross-References

- **Depends on:** [08-launch/landing-page](../landing-page/) — The page traffic lands on
- **Depends on:** [08-launch/beta-users](../beta-users/) — Beta learnings incorporated
- **Depends on:** [06-infrastructure/monitoring](../../06-infrastructure/monitoring/) — Alerting configured pre-launch
- **Depends on:** [06-infrastructure/security](../../06-infrastructure/security/) — Security hardening complete
- **Depends on:** [07-testing/integration-testing](../../07-testing/integration-testing/) — Critical flows tested
- **Triggers:** [09-acquisition](../../09-acquisition/) — Post-launch growth channels activate
- **Triggers:** [14-retention/user-onboarding](../../14-retention/user-onboarding/) — New users enter onboarding
