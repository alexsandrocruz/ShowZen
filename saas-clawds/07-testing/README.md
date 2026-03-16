# 07 — Testing: Making Your Product Bulletproof

> Shipping fast is good. Shipping broken code is catastrophic. This department is about building the confidence to deploy on a Friday afternoon.

## Purpose

Testing isn't a phase — it's a discipline that runs through your entire development lifecycle. This department helps you set up the right testing strategy for your stage. You don't need 100% code coverage on day one, but you do need to know that your critical paths work and your users' data is safe.

The cost of fixing a bug grows exponentially the later you find it. A bug caught in a unit test costs minutes. The same bug caught by a customer costs hours of support, potential churn, and reputation damage.

| Subfolder | What You'll Produce | Priority |
|---|---|---|
| [unit-testing](./unit-testing/) | Unit test plan, coverage targets, test naming conventions | P0 |
| [integration-testing](./integration-testing/) | Integration test plan, critical flow test matrix | P0 |
| [bug-fixing](./bug-fixing/) | Bug tracking process, severity matrix, triage workflow | P1 |
| [performance-testing](./performance-testing/) | Performance test plan, load scenarios, performance budget | P1 |
| [beta-testing](./beta-testing/) | Beta program plan, user agreement, feedback survey | P1 |

## How to Work Through This Department

**Layer your testing pyramid from bottom to top:**

1. **Unit Testing** — Test individual functions and components in isolation
2. **Integration Testing** — Test components working together and end-to-end flows
3. **Bug Fixing** — Establish your triage and resolution process
4. **Performance Testing** — Verify your app handles real-world load
5. **Beta Testing** — Put the product in front of real humans and collect feedback

## Time Estimate

| Approach | Time |
|---|---|
| Basic testing setup (unit + critical E2E) | 2–4 days |
| Comprehensive testing infrastructure | 1–2 weeks |
| Full QA process with beta program | 3–6 weeks |

## Key Principle

**Test what matters most first.** Your signup flow, payment processing, and core value loop should have rock-solid test coverage. That settings page with 3 toggles? It can wait. Prioritize tests by business impact, not code coverage percentage.

## What Success Looks Like

When you finish this department, you should have:
- **Automated tests** that run on every pull request
- **Coverage on critical paths** — signup, core features, payments
- **A bug triage process** so nothing falls through the cracks
- **Performance baselines** so you know when things get slower
- **Real user feedback** from a structured beta program

## Prerequisites

- [05-development](../05-development/) — A codebase to test
- [06-infrastructure/ci-cd](../06-infrastructure/ci-cd/) — A pipeline to run tests automatically

## Next Step

With a tested, stable product, you're ready for [08-launch](../08-launch/) — shipping your product to the world.
