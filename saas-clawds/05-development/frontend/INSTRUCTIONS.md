---
department: 05-development
subfolder: frontend
priority: P0
stage: development
estimated_time: "3-5 days"
requires:
  - 03-planning/tech-stack
  - 04-design/design-system
---

# Frontend Architecture

## Overview

This folder documents your frontend architecture — the framework, component structure, state management, styling approach, and routing strategy that power everything your users see and interact with. A well-documented frontend architecture means any developer can clone the repo and understand the codebase within a day, not a week.

Your frontend is where design meets engineering. The decisions here directly affect perceived performance (how fast the app *feels*), developer velocity (how quickly you can ship features), and user experience quality.

## Questions to Answer

Before generating the output document, the founder should answer:

1. **What frontend framework are you using?** React/Next.js, Vue/Nuxt, Svelte/SvelteKit, or something else? Why?
2. **Is this a SPA, SSR, or static site?** What rendering strategy best serves your users?
3. **How will you manage state?** Local component state, Context, Zustand, Redux, Jotai — and what belongs in global vs. local state?
4. **What's your styling approach?** Tailwind, CSS Modules, styled-components, vanilla CSS? Do you have design tokens?
5. **What does your component hierarchy look like?** Pages → Layouts → Features → Shared components? Atomic design?
6. **How are you handling routing?** File-based routing? Protected routes? Dynamic segments?
7. **What's your responsive strategy?** Mobile-first? Breakpoints? Adaptive vs. responsive?
8. **How will you handle forms and validation?** React Hook Form, Formik, Zod, native validation?

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# Frontend Architecture: [Your SaaS Name]

## Stack Summary
| Layer | Choice | Rationale |
|---|---|---|
| Framework | | |
| Rendering | | |
| Styling | | |
| State management | | |
| Forms/Validation | | |
| Testing | | |

## Project Structure
```
src/
├── app/              # Routes and pages
├── components/
│   ├── ui/           # Reusable primitives (Button, Input, Modal)
│   ├── features/     # Feature-specific components
│   └── layouts/      # Page layouts and shells
├── hooks/            # Custom React hooks
├── lib/              # Utility functions and API clients
├── stores/           # State management
├── types/            # TypeScript type definitions
└── styles/           # Global styles and theme config
```

## Routing Plan
| Route | Page | Auth Required | Description |
|---|---|---|---|
| `/` | Landing | No | |
| `/dashboard` | Dashboard | Yes | |
| `/settings` | Settings | Yes | |

## State Management Strategy
- **Global state:** [What lives in global stores and why]
- **Server state:** [How you cache/sync server data — React Query, SWR, etc.]
- **Local state:** [What stays in component state]

## Component Guidelines
- [Naming conventions]
- [Props interface patterns]
- [Composition patterns]

## Performance Strategy
- [Code splitting approach]
- [Image optimization]
- [Bundle size targets]

## Responsive Breakpoints
| Name | Width | Target |
|---|---|---|
| mobile | < 640px | Phones |
| tablet | 640-1024px | Tablets |
| desktop | > 1024px | Laptops/monitors |
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Next.js** | React framework with SSR, routing, and API routes | Free |
| **Vite** | Lightning-fast dev server and build tool | Free |
| **Tailwind CSS** | Utility-first CSS framework | Free |
| **shadcn/ui** | Accessible, customizable component primitives | Free |
| **React Query (TanStack)** | Server state management and caching | Free |
| **Zustand** | Lightweight global state management | Free |
| **React Hook Form + Zod** | Performant forms with schema validation | Free |
| **Vercel** | Zero-config frontend deployment | Free tier |

**References:** Next.js documentation, Bulletproof React architecture guide, Josh Comeau's CSS-for-JS

## Agent Instructions

When populating this folder for a founder:

1. Read `company-profile.md` for product type, target users, and stage
2. Read `03-planning/tech-stack` for any pre-existing technology decisions
3. Read `04-design/design-system` for component patterns and design tokens
4. Ask the 8 questions above if not already answered
5. Generate a frontend architecture document tailored to the founder's specific product
6. Choose the simplest stack that meets the product requirements — don't over-engineer
7. Define a project structure with specific folder names and responsibilities
8. Include at least 5 key routes with authentication requirements
9. Document the state management strategy with concrete examples of what goes where
10. Set performance targets (bundle size, LCP, FID) appropriate for the product type

## Example Output (Abbreviated)

```markdown
# Frontend Architecture: TaskFlow

## Stack Summary
| Layer | Choice | Rationale |
|---|---|---|
| Framework | Next.js 14 (App Router) | SSR for landing pages, client rendering for app |
| Rendering | Hybrid (SSR + CSR) | SEO on marketing pages, speed on dashboard |
| Styling | Tailwind CSS + shadcn/ui | Rapid prototyping, consistent design system |
| State management | Zustand + React Query | Zustand for UI state, RQ for server cache |
| Forms | React Hook Form + Zod | Type-safe validation, minimal re-renders |
| Testing | Vitest + React Testing Library | Fast unit tests with DOM assertions |
```

## Cross-References

- **Depends on:** [03-planning/tech-stack](../../03-planning/tech-stack/) — Framework and tooling decisions
- **Depends on:** [04-design/design-system](../../04-design/design-system/) — Component patterns, tokens, and UI kit
- **Pairs with:** [05-development/apis](../apis/) — API contract that the frontend consumes
- **Tested by:** [07-testing/unit-testing](../../07-testing/unit-testing/) — Component and hook tests
