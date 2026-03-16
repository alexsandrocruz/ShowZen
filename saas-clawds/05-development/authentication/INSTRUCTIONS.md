---
department: 05-development
subfolder: authentication
priority: P0
stage: development
estimated_time: "2-3 days"
requires:
  - 05-development/backend
  - 05-development/database
---

# Authentication & Authorization

## Overview

This folder documents your authentication architecture, authorization model, and security practices for user identity. Authentication (who are you?) and authorization (what can you do?) are the most security-critical parts of your application. A breach here doesn't just cause bugs — it causes lawsuits, data leaks, and destroyed trust.

Don't build auth from scratch unless you have a very specific reason to. Modern auth providers handle password hashing, token rotation, MFA, OAuth flows, and a dozen other things you don't want to maintain. Your time is better spent on your product's core value.

## Questions to Answer

Before generating the output document, the founder should answer:

1. **What authentication methods will you support?** Email/password, OAuth (Google, GitHub, etc.), magic links, passwordless, SSO?
2. **Are you using an auth provider or building custom?** Clerk, Auth0, Supabase Auth, NextAuth, Firebase Auth, or custom?
3. **Do you need multi-factor authentication (MFA)?** At launch or later? For all users or just admins?
4. **What's your session strategy?** JWTs (stateless), server-side sessions (stateful), or hybrid?
5. **What roles and permissions does your app need?** Admin, member, viewer? Per-resource permissions?
6. **Do you need team/organization support?** Can users belong to multiple orgs? Who can invite others?
7. **How do you handle password reset and account recovery?** Email-based? Time-limited tokens?
8. **Do enterprise customers need SAML/SSO?** If so, when — at launch or as an enterprise tier feature?

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# Authentication & Authorization: [Your SaaS Name]

## Auth Overview
| Attribute | Value |
|---|---|
| Auth provider | Clerk / Auth0 / Supabase Auth / Custom |
| Methods supported | Email/password, Google OAuth, Magic links |
| Session type | JWT / Server-side sessions |
| MFA | Yes/No (and when) |
| SSO/SAML | Planned for enterprise tier |

## Authentication Flows

### Signup Flow
1. User enters email + password (or clicks "Sign in with Google")
2. [Verification step — email confirmation, etc.]
3. [Account creation — what gets created in your DB]
4. [Redirect — where does the user land after signup]

### Login Flow
1. [Credentials submission]
2. [Token/session creation]
3. [Redirect to dashboard]

### Password Reset Flow
1. [User requests reset]
2. [Email with time-limited token]
3. [Password update and session invalidation]

## Permission Matrix
| Action | Admin | Member | Viewer |
|---|---|---|---|
| View dashboard | ✅ | ✅ | ✅ |
| Create resources | ✅ | ✅ | ❌ |
| Invite team members | ✅ | ❌ | ❌ |
| Manage billing | ✅ | ❌ | ❌ |
| Delete organization | ✅ | ❌ | ❌ |

## Token/Session Management
- Token lifetime: [e.g., 15 min access token, 7 day refresh token]
- Refresh strategy: [Silent refresh, refresh token rotation]
- Storage: [httpOnly cookies, secure storage]
- Revocation: [How to invalidate sessions on password change, etc.]

## Security Checklist
- [ ] Passwords hashed with bcrypt/argon2 (never stored in plain text)
- [ ] HTTPS enforced on all endpoints
- [ ] CSRF protection on session-based auth
- [ ] Rate limiting on login/signup endpoints
- [ ] Account lockout after N failed attempts
- [ ] Tokens stored in httpOnly secure cookies (not localStorage)
- [ ] Sensitive actions require re-authentication
- [ ] OAuth state parameter validated to prevent CSRF
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Clerk** | Drop-in auth with UI components, SSO, MFA | Free tier / $25/mo |
| **Auth0** | Enterprise-grade auth provider | Free tier |
| **Supabase Auth** | Postgres-based auth integrated with Supabase | Free tier |
| **NextAuth.js (Auth.js)** | Self-hosted auth for Next.js apps | Free |
| **Firebase Auth** | Google's auth service with wide OAuth support | Free tier |
| **Lucia** | Lightweight, self-hosted auth library | Free |
| **OWASP Auth Cheat Sheet** | Security best practices reference | Free |

## Agent Instructions

When populating this folder for a founder:

1. Read `company-profile.md` for product type, target customer (B2B needs teams/SSO, B2C often doesn't)
2. Read `05-development/backend` and `05-development/database` for the tech stack
3. Ask the 8 questions above if not answered
4. Recommend an auth provider over custom implementation for teams under 10 engineers
5. Design the permission matrix around the product's actual features (from MVP scope)
6. If B2B, include org/team membership and invitation flows
7. Include complete flows for signup, login, password reset, and OAuth
8. Fill in the security checklist with product-specific items
9. If enterprise pricing exists, plan SSO/SAML support timeline
10. Document token lifetimes and refresh strategies with security rationale

## Example Output (Abbreviated)

```markdown
# Authentication & Authorization: TaskFlow

## Auth Overview
| Attribute | Value |
|---|---|
| Auth provider | Clerk |
| Methods | Email/password, Google OAuth |
| Session type | JWT (short-lived) + refresh token |
| MFA | Planned for v2 (TOTP) |
| SSO/SAML | Enterprise tier (Q3) |

## Permission Matrix
| Action | Owner | Admin | Member | Viewer |
|---|---|---|---|---|
| Create projects | ✅ | ✅ | ✅ | ❌ |
| Delete projects | ✅ | ✅ | ❌ | ❌ |
| Manage members | ✅ | ✅ | ❌ | ❌ |
| View analytics | ✅ | ✅ | ✅ | ✅ |
| Manage billing | ✅ | ❌ | ❌ | ❌ |
```

## Cross-References

- **Depends on:** [05-development/backend](../backend/) — Middleware that enforces auth
- **Depends on:** [05-development/database](../database/) — User and session tables
- **Consumed by:** [05-development/apis](../apis/) — Every protected endpoint uses this
- **Consumed by:** [05-development/frontend](../frontend/) — Login/signup UI and route protection
- **Hardened by:** [06-infrastructure/security](../../06-infrastructure/security/) — Security policies and auditing
