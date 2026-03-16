---
department: 06-infrastructure
subfolder: devops
priority: P0
stage: development
estimated_time: "2-4 days"
requires:
  - 06-infrastructure/cloud-hosting
  - 05-development/backend
---

# DevOps & Deployment Automation

## Overview

This folder documents your deployment process, infrastructure-as-code setup, environment management, and operational runbooks. DevOps is the bridge between writing code and running code — the automation and practices that make shipping reliable, repeatable, and fast.

The goal is simple: `git push` to main should result in code running in production within minutes, with zero manual steps, zero downtime, and easy rollback if something goes wrong. Everything else in this folder serves that goal.

## Questions to Answer

Before generating the output document, the founder should answer:

1. **What's your deployment strategy?** Blue/green, canary, rolling updates, or just replace-and-restart?
2. **Do you use containers?** Docker, and if so, are you running on Kubernetes, ECS, or a managed platform?
3. **Do you use infrastructure-as-code?** Terraform, Pulumi, SST, CDK, or manual provisioning?
4. **How many environments do you have?** Local → staging → production? Any feature preview environments?
5. **How do you manage environment-specific configuration?** .env files, secrets manager, config service?
6. **What's your rollback procedure?** Revert commit, redeploy previous image, feature flag toggle?
7. **Who can deploy to production?** Any developer, only leads, only CI?
8. **How long does a deploy take?** From merge to live — what's the current and target time?

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# DevOps & Deployment: [Your SaaS Name]

## Deployment Overview
| Attribute | Value |
|---|---|
| Strategy | Blue/green / Rolling / Replace |
| Trigger | Merge to main / Manual / Tag |
| Deploy time | ___ minutes (merge → live) |
| Rollback time | ___ minutes |
| Zero-downtime | Yes / No |

## Environment Matrix
| Environment | URL | Branch | Auto-deploy | Secrets Source |
|---|---|---|---|---|
| Local | localhost:3000 | any | N/A | .env.local |
| Staging | staging.app.com | staging | Yes | Doppler/SSM |
| Production | app.com | main | Yes | Doppler/SSM |

## Deployment Runbook

### Standard Deploy
1. Developer merges PR to `main`
2. CI runs tests (must pass)
3. Docker image built and pushed to registry
4. Platform pulls new image and deploys
5. Health check confirms new version is serving
6. Old version drained and terminated

### Hotfix Deploy
1. Create branch from `main`
2. Fix, test locally, push
3. PR with `hotfix` label (skips non-critical checks)
4. Merge and deploy (same pipeline, expedited review)

### Rollback Procedure
1. Identify the issue (monitoring alert, user report)
2. Decision: rollback or hotfix? (If P0 → rollback immediately)
3. [Specific rollback command or process]
4. Verify rollback via health checks
5. Post-mortem within 24 hours

## Infrastructure as Code
| Resource | Tool | Config Location |
|---|---|---|
| | | |

## Container Strategy
- Base image: [e.g., node:20-alpine]
- Image size target: [< 200MB]
- Registry: [GitHub Container Registry / ECR / Docker Hub]

## Secrets Management
| Environment | Tool | Access |
|---|---|---|
| Local | .env.local (gitignored) | Developer machine |
| Staging | [Doppler / AWS SSM] | CI + app runtime |
| Production | [Doppler / AWS SSM] | CI + app runtime |
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Docker** | Container runtime and image building | Free |
| **GitHub Container Registry** | Docker image storage | Free for public |
| **Terraform** | Infrastructure as code (multi-cloud) | Free |
| **Pulumi** | IaC with real programming languages | Free tier |
| **SST** | Infrastructure framework for serverless/containers on AWS | Free |
| **Doppler** | Secrets management across environments | Free tier |
| **Kamal** | Zero-downtime deploys to any server (from 37signals) | Free |

## Agent Instructions

When populating this folder for a founder:

1. Read `company-profile.md` for stage and team size
2. Read `06-infrastructure/cloud-hosting` for the hosting platform — deployment strategy depends on this
3. Read `05-development/backend` for the runtime and build process
4. Ask the 8 questions above if not answered
5. For managed platforms (Vercel, Railway), the deployment section is simple — document the git-push workflow
6. For cloud providers (AWS, GCP), include IaC templates or configuration references
7. Create a complete deployment runbook with numbered steps for standard, hotfix, and rollback scenarios
8. Document the environment matrix with URLs, branches, and secrets sources
9. If using Docker, specify the base image, multi-stage build strategy, and image size targets
10. Define who can deploy and what approvals are needed for each environment

## Example Output (Abbreviated)

```markdown
# DevOps & Deployment: TaskFlow

## Deployment Overview
| Attribute | Value |
|---|---|
| Strategy | Rolling (Railway managed) |
| Trigger | Merge to main (auto-deploy) |
| Deploy time | ~3 minutes |
| Rollback time | ~1 minute (redeploy previous) |
| Zero-downtime | Yes (Railway health checks) |

## Environment Matrix
| Environment | URL | Branch | Auto-deploy | Secrets |
|---|---|---|---|---|
| Local | localhost:3000 | any | N/A | .env.local |
| Staging | staging.taskflow.app | staging | Yes | Doppler |
| Production | app.taskflow.app | main | Yes | Doppler |
```

## Cross-References

- **Depends on:** [06-infrastructure/cloud-hosting](../cloud-hosting/) — Where deploys target
- **Depends on:** [05-development/backend](../../05-development/backend/) — What's being deployed
- **Pairs with:** [06-infrastructure/ci-cd](../ci-cd/) — CI pipeline that triggers deploys
- **Monitored by:** [06-infrastructure/monitoring](../monitoring/) — Post-deploy health verification
- **Secured by:** [06-infrastructure/security](../security/) — Secrets management and access control
