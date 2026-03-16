---
department: 07-testing
subfolder: unit-testing
priority: P0
stage: development
estimated_time: "2-3 days"
requires:
  - 05-development/frontend
  - 05-development/backend
---

# Unit Testing

## Overview

This folder documents your unit testing strategy — the framework, conventions, coverage targets, and patterns for testing individual functions, components, and modules in isolation. Unit tests are the fastest, cheapest, and most numerous tests in your test pyramid. They catch regressions in seconds, not minutes.

Unit tests aren't about proving your code works perfectly. They're about catching the moment your code *stops* working — especially after refactoring, dependency updates, or new features that touch existing logic. A good unit test suite lets you change code with confidence instead of fear.

## Questions to Answer

Before generating the output document, the founder should answer:

1. **What testing framework will you use?** Jest, Vitest, Pytest, Go testing, Mocha? Why?
2. **What's your coverage target?** 80%? 90%? Or "critical paths only"?
3. **Are you practicing TDD?** Write tests first, or test after implementation?
4. **How do you handle mocking?** Built-in mocks, MSW for API mocking, dependency injection?
5. **What's your test naming convention?** `it('should ...')`, `test('[function] [scenario] [expected]')`, BDD-style?
6. **Do you have snapshot tests?** For component rendering, API responses?
7. **How fast should your test suite run?** Under 30 seconds? Under 2 minutes?
8. **What triggers test runs?** On save (watch mode), pre-commit hook, CI only?

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# Unit Testing Plan: [Your SaaS Name]

## Testing Stack
| Layer | Tool | Purpose |
|---|---|---|
| Test runner | Vitest / Jest / Pytest | Execute tests |
| Assertions | Built-in / Chai | Verify expected outcomes |
| Component testing | React Testing Library | Test UI components |
| API mocking | MSW / nock | Mock external HTTP calls |
| Snapshot testing | Built-in | Catch unintended UI changes |

## Coverage Targets
| Area | Target | Rationale |
|---|---|---|
| Business logic (services) | 90% | Core value — bugs here lose money |
| API route handlers | 80% | User-facing — bugs here block users |
| UI components | 70% | Critical interactions, not every div |
| Utilities / helpers | 95% | Pure functions — easy to test, high reuse |
| Overall | 80% | Balanced target for early stage |

## Test Naming Convention
```
describe('[Module/Component]', () => {
  it('[action] [scenario] [expected result]', () => {
    // Example: "creates a task when given valid input"
    // Example: "throws an error when title is empty"
  });
});
```

## Test File Organization
```
src/
├── services/
│   ├── billing.ts
│   └── billing.test.ts        ← Co-located tests
├── components/
│   ├── TaskCard.tsx
│   └── TaskCard.test.tsx       ← Co-located tests
└── __tests__/                  ← Integration-level tests (optional)
```

## Mocking Strategy
- **External APIs:** Use MSW (Mock Service Worker) to intercept HTTP calls
- **Database:** Use in-memory test database or mock the data access layer
- **Time:** Use `vi.useFakeTimers()` for time-dependent logic
- **Environment:** Use `.env.test` for test-specific configuration

## What to Test vs. What to Skip
| Test | Skip |
|---|---|
| Business logic and calculations | Framework internals (React rendering engine) |
| Input validation and error handling | Third-party library behavior |
| State transitions | Simple getters/setters with no logic |
| Edge cases (empty input, max values) | Styling and CSS (use visual regression tools) |
| Permission checks | Auto-generated code |

## Coverage Report Template
| Module | Statements | Branches | Functions | Lines |
|---|---|---|---|---|
| services/billing | _% | _% | _% | _% |
| services/auth | _% | _% | _% | _% |
| components/Dashboard | _% | _% | _% | _% |
| **Total** | _% | _% | _% | _% |
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Vitest** | Fast unit test runner (Vite-native) | Free |
| **Jest** | Popular JS test runner with rich ecosystem | Free |
| **React Testing Library** | Test components by user behavior, not implementation | Free |
| **MSW** | Mock HTTP requests at the network level | Free |
| **Pytest** | Python testing framework with rich plugins | Free |
| **Codecov** | Coverage reporting and PR integration | Free for open source |
| **Wallaby.js** | Real-time test feedback in your editor | $16/mo |

**References:** *Testing JavaScript* by Kent C. Dodds, Google Testing Blog, *The Art of Unit Testing* by Roy Osherove

## Agent Instructions

When populating this folder for a founder:

1. Read `company-profile.md` for product type and complexity
2. Read `05-development/frontend` and `05-development/backend` for the tech stack — this determines testing frameworks
3. Ask the 8 questions above if not answered
4. Select testing frameworks compatible with the existing tech stack (Vitest for Vite projects, Jest for CRA, Pytest for Python)
5. Set coverage targets that are realistic for the founder's stage — 80% overall is a good starting point
6. Define a test naming convention and enforce it in the document
7. Include concrete examples of what to test and what to skip for this specific product
8. Document the mocking strategy with specific tools for each mock type
9. Include a test file organization strategy (co-located vs. `__tests__` directory)
10. Cross-reference with CI/CD pipeline to show where tests run automatically

## Example Output (Abbreviated)

```markdown
# Unit Testing Plan: TaskFlow

## Testing Stack
| Layer | Tool | Purpose |
|---|---|---|
| Test runner | Vitest | Native Vite support, fast HMR in tests |
| Component tests | React Testing Library | Test user interactions, not DOM structure |
| API mocking | MSW 2.0 | Intercept fetch calls for task CRUD |
| Coverage | v8 (via Vitest) | Built-in coverage with branch tracking |

## Coverage Targets
| Area | Target | Current |
|---|---|---|
| services/ | 90% | 87% |
| components/ (interactive) | 75% | 72% |
| lib/utils | 95% | 93% |
| Overall | 80% | 79% |
```

## Cross-References

- **Depends on:** [05-development/frontend](../../05-development/frontend/) — Components and hooks to test
- **Depends on:** [05-development/backend](../../05-development/backend/) — Services and models to test
- **Runs in:** [06-infrastructure/ci-cd](../../06-infrastructure/ci-cd/) — Automated test execution on every PR
- **Complements:** [07-testing/integration-testing](../integration-testing/) — E2E tests for full user flows
- **Informs:** [07-testing/bug-fixing](../bug-fixing/) — Failed tests surface bugs to triage
