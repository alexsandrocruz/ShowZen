---
department: 06-infrastructure
subfolder: ci-cd
priority: P0
stage: development
estimated_time: "1-3 days"
requires:
  - 05-development/backend
  - 05-development/frontend
  - 07-testing/unit-testing
---

# CI/CD Pipeline

## Overview

This folder documents your continuous integration and continuous deployment pipeline — the automated process that tests, builds, and ships every code change. CI/CD is the single highest-leverage DevOps investment you can make. It catches bugs before they reach production, enforces code quality standards, and eliminates the "it works on my machine" problem.

A good CI pipeline should be fast enough that developers don't context-switch while waiting (under 10 minutes), reliable enough that failures are signal not noise, and comprehensive enough to catch real issues.

## Questions to Answer

Before generating the output document, the founder should answer:

1. **What CI/CD provider will you use?** GitHub Actions, GitLab CI, CircleCI, Buildkite, or platform-native (Vercel)?
2. **What must pass before a PR can merge?** Tests, linting, type checking, build, security scan?
3. **What's the deploy trigger?** Merge to main, Git tag, manual approval, or automatic?
4. **How many environments does your pipeline support?** Preview → staging → production?
5. **Do you need preview deployments?** A unique URL for every PR?
6. **What's your acceptable pipeline duration?** Under 5 min, under 10 min, under 15 min?
7. **Do you need any special build steps?** Database migrations, asset compilation, Docker builds?
8. **How do you handle flaky tests?** Retry policy, quarantine, auto-skip?

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# CI/CD Pipeline: [Your SaaS Name]

## Pipeline Overview
| Attribute | Value |
|---|---|
| CI provider | GitHub Actions / GitLab CI / etc. |
| Target pipeline time | < 8 minutes |
| Merge requirements | Tests pass, lint clean, 1 approval |
| Deploy trigger | Merge to main |
| Preview deploys | Yes / No |

## Pipeline Stages

### Pull Request Pipeline
```
[Push to branch]
  → Lint + Format Check (30s)
  → Type Check (30s)
  → Unit Tests (2-3 min)
  → Integration Tests (3-5 min)
  → Build (1-2 min)
  → Preview Deploy (1-2 min) [optional]
  → Security Scan (1 min)
```

### Deploy Pipeline (on merge to main)
```
[Merge to main]
  → Build production artifacts (1-2 min)
  → Run database migrations (30s)
  → Deploy to staging (1-2 min)
  → Smoke tests on staging (1 min)
  → Deploy to production (1-2 min)
  → Post-deploy health check (30s)
```

## PR Merge Checklist
- [ ] All CI checks pass (green)
- [ ] At least 1 code review approval
- [ ] No unresolved review comments
- [ ] Branch is up-to-date with main
- [ ] No `console.log` or debug statements
- [ ] New features have test coverage
- [ ] Database migrations are reversible

## Pipeline Configuration Reference
[Paste or link to your CI config file — .github/workflows/ci.yml, etc.]

## Caching Strategy
| Cache | Key | Estimated Savings |
|---|---|---|
| Node modules | hash of lockfile | 30-60s |
| Build cache | hash of source files | 30-60s |
| Docker layers | hash of Dockerfile | 1-2 min |

## Pipeline Optimization Tips
- [Parallelize independent jobs]
- [Use caching aggressively]
- [Only run slow tests on affected code paths]
- [Use smaller CI runner images]
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **GitHub Actions** | CI/CD integrated with GitHub | 2,000 free min/mo |
| **GitLab CI** | CI/CD integrated with GitLab | 400 free min/mo |
| **CircleCI** | Dedicated CI/CD with parallelism | Free tier |
| **Buildkite** | Self-hosted agents, cloud orchestration | Free tier (up to 3) |
| **Turborepo** | Monorepo build caching and task orchestration | Free |
| **Depot** | Fast Docker builds with caching | Free tier |
| **Codecov** | Test coverage reporting and PR comments | Free for open source |

## Agent Instructions

When populating this folder for a founder:

1. Read `company-profile.md` for team size (solo devs have simpler CI needs)
2. Read `05-development/backend` and `05-development/frontend` for the build tools and test frameworks
3. Read `07-testing/unit-testing` for the test commands to include in CI
4. Ask the 8 questions above if not answered
5. Default to GitHub Actions unless the founder has a strong reason for another provider
6. Design the PR pipeline with specific timing estimates for each stage
7. Define merge requirements (what must pass to merge a PR)
8. Include caching configuration to keep pipeline under 10 minutes
9. If using a monorepo, include path-based filtering (only test what changed)
10. Provide a starter workflow file (GitHub Actions YAML) if using GitHub

## Example Output (Abbreviated)

```markdown
# CI/CD Pipeline: TaskFlow

## Pipeline Overview
| Attribute | Value |
|---|---|
| CI provider | GitHub Actions |
| Target pipeline time | < 7 minutes |
| Merge requirements | Tests, lint, type-check, 1 approval |
| Deploy trigger | Merge to main (auto) |
| Preview deploys | Yes (Vercel) |

### Pull Request Pipeline
```
[Push] → Lint (20s) → Type Check (25s) → Unit Tests (2 min) → E2E Tests (4 min) → Build (1 min)
```
Total: ~7 minutes (parallelized where possible)
```

## Cross-References

- **Depends on:** [05-development/backend](../../05-development/backend/) — Build and test commands
- **Depends on:** [05-development/frontend](../../05-development/frontend/) — Build and test commands
- **Depends on:** [07-testing/unit-testing](../../07-testing/unit-testing/) — Tests that run in CI
- **Pairs with:** [06-infrastructure/devops](../devops/) — Deployment automation triggered by CI
- **Secured by:** [06-infrastructure/security](../security/) — Security scans in pipeline
