---
department: 07-testing
subfolder: integration-testing
priority: P0
stage: development
estimated_time: "2-4 days"
requires:
  - 05-development/frontend
  - 05-development/backend
  - 05-development/apis
---

# Integration & End-to-End Testing

## Overview

This folder documents your integration and end-to-end (E2E) testing strategy — how you verify that different parts of your application work together correctly and that critical user flows complete successfully from start to finish. Unit tests prove functions work. Integration tests prove the product works.

E2E tests are your safety net for the flows that make or break your business: signup, the core value loop, payment, and account management. If your signup flow breaks and you have no E2E tests, you won't know until signups drop to zero.

## Questions to Answer

Before generating the output document, the founder should answer:

1. **What E2E testing framework will you use?** Playwright, Cypress, Selenium, or another?
2. **What are the 5-10 most critical user flows to test?** Signup, login, core action, payment, settings?
3. **How do you manage test data?** Seed database, factory functions, API fixtures, isolated test environments?
4. **Do you test against a real or mocked backend?** Full stack E2E, or frontend integration with mocked APIs?
5. **How do you handle test flakiness?** Retries, stable selectors, wait strategies?
6. **Do you run E2E tests in CI?** On every PR, only on main, on a schedule?
7. **Do you test across browsers?** Chromium only, or also Firefox and WebKit?
8. **Do you test responsive layouts?** Desktop, tablet, and mobile viewports?

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# Integration & E2E Testing Plan: [Your SaaS Name]

## Testing Stack
| Layer | Tool | Purpose |
|---|---|---|
| E2E framework | Playwright / Cypress | Browser automation |
| API testing | Supertest / Playwright API | Backend endpoint testing |
| Test data | Factory functions / seed scripts | Consistent test state |
| Visual regression | Playwright screenshots / Percy | Catch UI regressions |

## Critical Flow Test Matrix
| Flow | Steps | Priority | Automated |
|---|---|---|---|
| Signup | Visit → Enter email → Verify → Land on dashboard | P0 | ✅ / ❌ |
| Login | Visit → Enter credentials → Land on dashboard | P0 | |
| Core action | [The main thing users do in your product] | P0 | |
| Upgrade to paid | Settings → Plans → Enter card → Confirm | P0 | |
| Invite team member | Settings → Team → Invite → Verify email | P1 | |
| Password reset | Login → Forgot password → Email → Reset → Login | P1 | |
| Delete account | Settings → Danger zone → Confirm → Logged out | P1 | |

## Test Environment
| Attribute | Value |
|---|---|
| Environment | Dedicated test environment / Staging |
| Database | Seeded with test data / Ephemeral per-run |
| External APIs | Mocked / Sandboxed (Stripe test mode) |
| Auth | Test user accounts (pre-created) |

## Test Data Strategy
- **Before each test:** [Seed specific data or use API to create resources]
- **After each test:** [Cleanup or use isolated database per test]
- **Test users:** [Pre-created accounts with known credentials]
- **Payment testing:** [Stripe test mode with test card numbers]

## Selector Strategy
- Prefer `data-testid` attributes for stable selectors
- Fallback to accessible roles (`getByRole`, `getByLabel`)
- Never rely on CSS classes or DOM structure

## CI Integration
- Trigger: [On every PR / Only on main / Nightly]
- Parallelism: [Number of parallel workers]
- Retry policy: [Retry failed tests once before failing the run]
- Artifacts: [Screenshots and videos saved on failure]

## Test Reporting
| Metric | Target |
|---|---|
| Pass rate | > 98% (flaky tests are quarantined) |
| Suite runtime | < 10 minutes |
| Coverage of critical flows | 100% of P0 flows |
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Playwright** | Cross-browser E2E testing with auto-wait | Free |
| **Cypress** | Developer-friendly E2E testing with time travel debugging | Free tier |
| **Supertest** | HTTP assertion library for Node.js API testing | Free |
| **Faker.js** | Generate realistic test data | Free |
| **Docker Compose** | Spin up test dependencies (DB, Redis) locally | Free |
| **Playwright Test Reporter** | HTML test reports with trace viewer | Free |

## Agent Instructions

When populating this folder for a founder:

1. Read `company-profile.md` for the product's core value loop — this determines the most critical flows
2. Read `05-development/frontend` and `05-development/apis` for the routes and endpoints to test
3. Read `05-development/authentication` for the auth flows to include in E2E tests
4. Ask the 8 questions above if not answered
5. Default to Playwright unless the founder has a strong preference — it's the most capable modern E2E framework
6. Identify the 5-10 most critical user flows from the product's features and write them into the test matrix
7. Design a test data strategy that's isolated (tests don't interfere with each other)
8. Include Stripe test mode configuration if the product has payments
9. Set up the CI integration with parallel workers and failure artifacts
10. Define a selector strategy that avoids brittle tests

## Example Output (Abbreviated)

```markdown
# Integration & E2E Testing Plan: TaskFlow

## Critical Flow Test Matrix
| Flow | Steps | Priority | Automated |
|---|---|---|---|
| Signup | / → /signup → enter email/pw → verify → /dashboard | P0 | ✅ |
| Create task | /dashboard → "New Task" → fill form → submit → task appears | P0 | ✅ |
| Assign task | Task detail → assign dropdown → select member → saved | P0 | ✅ |
| Upgrade plan | /settings/billing → select Pro → Stripe checkout → /success | P0 | ✅ |
| Invite member | /settings/team → enter email → send → invite appears | P1 | ✅ |
```

## Cross-References

- **Depends on:** [05-development/frontend](../../05-development/frontend/) — Routes and components under test
- **Depends on:** [05-development/apis](../../05-development/apis/) — API endpoints tested
- **Depends on:** [05-development/authentication](../../05-development/authentication/) — Auth flows in E2E tests
- **Runs in:** [06-infrastructure/ci-cd](../../06-infrastructure/ci-cd/) — E2E tests in CI pipeline
- **Complements:** [07-testing/unit-testing](../unit-testing/) — Fine-grained tests for individual functions
