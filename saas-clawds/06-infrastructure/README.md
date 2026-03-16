# 06 — Infrastructure: Keeping Your Product Running

> Infrastructure is the invisible backbone of your SaaS. Users never see it — until it breaks. This department is about making sure it doesn't.

## Purpose

Great code is worthless if it's not deployed, monitored, and secured. The Infrastructure department covers everything between "it works on my machine" and "it works for 10,000 paying customers at 3 AM on a Saturday." These aren't glamorous decisions, but they're the difference between a SaaS that scales and one that crumbles under its first traffic spike.

Early-stage founders often skip infrastructure planning. Don't. A few hours of setup now saves weeks of firefighting later.

| Subfolder | What You'll Produce | Priority |
|---|---|---|
| [cloud-hosting](./cloud-hosting/) | Infrastructure architecture, cost projections, scaling plan | P0 |
| [devops](./devops/) | Deployment runbook, environment configs, rollback procedures | P0 |
| [ci-cd](./ci-cd/) | CI/CD pipeline specification, merge requirements, deploy checklist | P0 |
| [monitoring](./monitoring/) | Monitoring setup, alert definitions, incident response playbook | P1 |
| [security](./security/) | Security checklist, data handling policy, compliance plan | P1 |

## How to Work Through This Department

**Build the foundation, then add observability and hardening:**

1. **Cloud Hosting** — Decide where your code runs and how much it costs
2. **DevOps** — Automate how code gets from your laptop to production
3. **CI/CD** — Ensure every change is tested before it ships
4. **Monitoring** — See what's happening in production before users complain
5. **Security** — Harden everything and prepare for the worst

## Time Estimate

| Approach | Time |
|---|---|
| Managed platforms (Vercel, Railway) | 1–2 days setup |
| Cloud provider (AWS, GCP) with basic IaC | 1–2 weeks |
| Full production-grade infrastructure | 3–6 weeks |

## Key Principle

**Automate ruthlessly, but start simple.** A $7/month Railway deployment is perfectly fine for your first 100 users. Don't build Kubernetes clusters when a single Dockerfile will do. Scale your infrastructure complexity with your revenue, not your ambition.

## What Success Looks Like

When you finish this department, you should have:
- **Automated deployments** — `git push` to main triggers a deploy
- **Environment parity** — staging mirrors production
- **Visibility** — you know when something breaks before your users tell you
- **Security basics** — HTTPS, secrets management, dependency scanning
- **A cost model** — you know what infrastructure costs and when costs will jump

## Prerequisites

- [03-planning/tech-stack](../03-planning/tech-stack/) — Hosting and infrastructure tool decisions
- [05-development](../05-development/) — A codebase to deploy

## Next Step

With infrastructure in place, move to [07-testing](../07-testing/) to verify quality, then [08-launch](../08-launch/) to ship to real users.
