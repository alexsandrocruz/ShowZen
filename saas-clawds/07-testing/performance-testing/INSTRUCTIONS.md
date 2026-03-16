---
department: 07-testing
subfolder: performance-testing
priority: P1
stage: development
estimated_time: "2-3 days"
requires:
  - 05-development/backend
  - 06-infrastructure/cloud-hosting
  - 06-infrastructure/monitoring
---

# Performance Testing

## Overview

This folder documents your performance testing strategy — how you measure, benchmark, and optimize the speed and scalability of your application. Performance isn't a feature, it's a tax on every feature. Every extra second of load time increases bounce rates, decreases conversion, and frustrates your paying customers.

Performance testing answers two critical questions: "Is it fast enough right now?" and "Will it survive a traffic spike?" You need both a performance budget (acceptable baselines for everyday use) and load tests (simulated traffic to find breaking points).

## Questions to Answer

Before generating the output document, the founder should answer:

1. **What's your expected load?** Peak concurrent users, requests per second, daily active users?
2. **What are your performance SLAs?** Target response time (p50, p95, p99), time to interactive, largest contentful paint?
3. **What are the known bottlenecks?** Database queries, external API calls, file processing, computation?
4. **What load testing tool will you use?** k6, Artillery, Locust, JMeter?
5. **Do you have a performance budget?** Bundle size limits, API response time limits?
6. **When do you run performance tests?** Before launch, quarterly, on architecture changes, in CI?
7. **What environments do you test against?** Staging (production-like), dedicated perf environment?
8. **What's your budget for performance tooling?** Free/OSS, or paid APM tools?

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# Performance Testing Plan: [Your SaaS Name]

## Performance Targets
| Metric | Target | Red Line | Measured By |
|---|---|---|---|
| API p50 response time | < 100ms | > 300ms | APM |
| API p95 response time | < 300ms | > 1,000ms | APM |
| API p99 response time | < 1,000ms | > 3,000ms | APM |
| Time to Interactive (TTI) | < 2s | > 5s | Lighthouse |
| Largest Contentful Paint (LCP) | < 1.5s | > 3s | Lighthouse |
| Bundle size (JS) | < 200KB gzipped | > 400KB | Build output |
| Database query time (avg) | < 50ms | > 200ms | Query logs |

## Load Test Scenarios
| Scenario | Virtual Users | Duration | Ramp-Up | Target |
|---|---|---|---|---|
| Baseline | 10 VU | 5 min | Instant | Establish normal metrics |
| Expected load | 100 VU | 15 min | 2 min ramp | Verify target performance |
| Peak load | 500 VU | 10 min | 3 min ramp | Confirm no errors under peak |
| Stress test | 1,000+ VU | 10 min | 5 min ramp | Find the breaking point |
| Soak test | 100 VU | 2 hours | Instant | Check for memory leaks |

## Performance Budget
| Asset | Budget | Current |
|---|---|---|
| Total JS bundle | 200KB gzipped | __KB |
| Total CSS | 50KB gzipped | __KB |
| Largest image | 200KB | __KB |
| API response (p95) | 300ms | __ms |
| Time to first byte | 200ms | __ms |

## Key Endpoints to Test
| Endpoint | Method | Expected Load | Target p95 |
|---|---|---|---|
| GET /api/health | GET | Constant | < 50ms |
| POST /api/auth/login | POST | 10 req/s peak | < 200ms |
| GET /api/[resources] | GET | 50 req/s peak | < 300ms |
| POST /api/[resources] | POST | 20 req/s peak | < 500ms |

## Optimization Checklist
- [ ] Enable gzip/brotli compression
- [ ] Implement database query caching (Redis)
- [ ] Add database indexes for slow queries (see EXPLAIN output)
- [ ] Enable CDN for static assets
- [ ] Implement code splitting and lazy loading
- [ ] Optimize images (WebP, responsive sizes)
- [ ] Connection pooling for database
- [ ] N+1 query detection and resolution
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **k6** | Scriptable load testing (JavaScript) | Free / Cloud paid |
| **Artillery** | Load testing with YAML config | Free tier |
| **Lighthouse** | Frontend performance auditing | Free (Chrome DevTools) |
| **WebPageTest** | Detailed frontend performance analysis | Free |
| **Clinic.js** | Node.js performance diagnostics | Free |
| **pganalyze / EXPLAIN** | PostgreSQL query analysis | Free / Paid |
| **Bundlephobia** | Check npm package sizes before installing | Free |

## Agent Instructions

When populating this folder for a founder:

1. Read `company-profile.md` for expected user base and growth targets
2. Read `05-development/backend` for the tech stack and known performance considerations
3. Read `06-infrastructure/cloud-hosting` for infrastructure limits and scaling strategy
4. Read `06-infrastructure/monitoring` for existing performance baselines
5. Ask the 8 questions above if not answered
6. Set performance targets calibrated to the product type (real-time collaboration needs < 100ms, content CMS is fine at < 500ms)
7. Design load test scenarios with realistic virtual user counts based on expected traffic
8. Define a performance budget with specific limits for bundle size, response time, and web vitals
9. Identify the top 5-10 endpoints to load test based on expected traffic patterns
10. Include an optimization checklist with the most impactful improvements for the tech stack

## Example Output (Abbreviated)

```markdown
# Performance Testing Plan: TaskFlow

## Performance Targets
| Metric | Target | Red Line |
|---|---|---|
| API p50 | < 80ms | > 250ms |
| API p95 | < 250ms | > 800ms |
| LCP | < 1.5s | > 3s |
| JS bundle | < 180KB gzipped | > 350KB |

## Load Test Scenarios
| Scenario | VUs | Duration | Target |
|---|---|---|---|
| Baseline | 10 | 5 min | Establish metrics |
| Expected | 200 | 15 min | Match expected daily peak |
| Stress | 1,000 | 10 min | Find ceiling before errors |
```

## Cross-References

- **Depends on:** [05-development/backend](../../05-development/backend/) — Services and endpoints to test
- **Depends on:** [06-infrastructure/cloud-hosting](../../06-infrastructure/cloud-hosting/) — Infrastructure capacity
- **Depends on:** [06-infrastructure/monitoring](../../06-infrastructure/monitoring/) — Performance baselines and dashboards
- **Informs:** [06-infrastructure/cloud-hosting](../../06-infrastructure/cloud-hosting/) — Scaling triggers and thresholds
- **Supports:** [08-launch/public-release](../../08-launch/public-release/) — Performance readiness for launch
