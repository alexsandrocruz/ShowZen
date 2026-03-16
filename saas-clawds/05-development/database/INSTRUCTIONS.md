---
department: 05-development
subfolder: database
priority: P0
stage: development
estimated_time: "2-4 days"
requires:
  - 03-planning/tech-stack
  - 03-planning/mvp-scope
---

# Database Design & Data Strategy

## Overview

This folder contains your database schema design, entity relationships, migration strategy, and data management plan. Your database is the single source of truth for your entire product. Every feature, every query, every report depends on getting this right.

Schema design mistakes are the most expensive to fix later. Adding a column is trivial. Realizing your core entities are modeled wrong after 10,000 users have data in the system? That's a multi-week migration with downtime risk. Spend the time upfront to model your domain accurately.

## Questions to Answer

Before generating the output document, the founder should answer:

1. **SQL or NoSQL?** PostgreSQL, MySQL, MongoDB, or something else? What's the primary reason for your choice?
2. **What ORM or query builder will you use?** Prisma, Drizzle, SQLAlchemy, TypeORM, raw SQL?
3. **What are your core entities?** Users, teams/orgs, the primary resource your product manages, billing, etc.
4. **How do you handle multi-tenancy?** Shared database with tenant column, schema-per-tenant, or database-per-tenant?
5. **What's your migration strategy?** ORM-managed migrations, manual SQL scripts, or a migration tool?
6. **How will you handle backups?** Automated snapshots, point-in-time recovery, off-site backups?
7. **What's your data retention policy?** How long do you keep user data, logs, and analytics?
8. **Do you need full-text search?** If so, built-in (Postgres) or a separate search engine (Algolia, Typesense)?

## Output Template

Create a `README.md` in this folder with the following structure:

```markdown
# Database Design: [Your SaaS Name]

## Database Overview
| Attribute | Value |
|---|---|
| Database | PostgreSQL 16 / MongoDB 7 / etc. |
| ORM | Prisma / Drizzle / etc. |
| Hosting | Supabase / PlanetScale / RDS / etc. |
| Multi-tenancy | Shared DB with org_id column |

## Core Entities

### Users
| Column | Type | Constraints | Description |
|---|---|---|---|
| id | uuid | PK, default gen | |
| email | varchar(255) | unique, not null | |
| name | varchar(255) | not null | |
| org_id | uuid | FK → orgs.id | |
| role | enum | not null | admin, member, viewer |
| created_at | timestamp | default now() | |

### [Primary Resource — e.g., Projects, Campaigns, etc.]
| Column | Type | Constraints | Description |
|---|---|---|---|

## Entity Relationship Summary
- A User belongs to one Organization
- An Organization has many Users
- An Organization has many [Resources]
- A [Resource] belongs to one Organization

## Indexes
| Table | Columns | Type | Rationale |
|---|---|---|---|
| users | email | unique | Login lookups |
| [resources] | org_id, created_at | composite | Listing by org, sorted by date |

## Migration Strategy
- Tool: [Prisma Migrate / Drizzle Kit / Alembic]
- Process: [How migrations are created, reviewed, and applied]
- Rollback: [How to revert a bad migration]

## Backup Strategy
| Aspect | Plan |
|---|---|
| Frequency | |
| Retention | |
| Recovery time objective (RTO) | |
| Recovery point objective (RPO) | |
| Testing | [How often you test restores] |

## Data Lifecycle
| Data Type | Retention Period | Deletion Method |
|---|---|---|
| User accounts | Until deleted by user | Soft delete → hard delete after 30 days |
| Activity logs | 90 days | Automatic purge |
| Backups | 30 days | Rolling deletion |
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **PostgreSQL** | Relational database — the gold standard for SaaS | Free |
| **Supabase** | Hosted Postgres with auth, storage, and realtime | Free tier |
| **PlanetScale** | Serverless MySQL with branching workflow | Free tier |
| **Prisma** | TypeScript ORM with migrations and type-safe queries | Free |
| **Drizzle ORM** | Lightweight TypeScript ORM, SQL-like syntax | Free |
| **MongoDB Atlas** | Managed NoSQL database | Free tier |
| **pgAdmin / TablePlus** | Database GUI client | Free / $89 |

**References:** *Designing Data-Intensive Applications* by Martin Kleppmann

## Agent Instructions

When populating this folder for a founder:

1. Read `company-profile.md` to understand the product domain
2. Read `03-planning/mvp-scope` for the features that imply database entities
3. Read `03-planning/tech-stack` for any pre-existing database decisions
4. Ask the 8 questions above if not answered
5. Design the schema around the product's core domain — identify all entities from the MVP feature list
6. Define at least 5 core tables/collections with full column definitions
7. Document all foreign key relationships and constraints
8. Include indexes with clear rationale (never index without a query pattern to justify it)
9. Plan for multi-tenancy from day one — even if there's only one "org" initially
10. Include a backup strategy with specific RTO/RPO targets

## Example Output (Abbreviated)

```markdown
# Database Design: TaskFlow

## Core Entities

### tasks
| Column | Type | Constraints | Description |
|---|---|---|---|
| id | uuid | PK | Task identifier |
| title | varchar(500) | not null | Task title |
| status | enum | not null, default 'todo' | todo, in_progress, done |
| assignee_id | uuid | FK → users.id, nullable | Assigned team member |
| project_id | uuid | FK → projects.id, not null | Parent project |
| due_date | timestamp | nullable | Optional deadline |
| created_at | timestamp | default now() | |

## Indexes
| Table | Columns | Type | Rationale |
|---|---|---|---|
| tasks | project_id, status | composite | Dashboard: tasks by project filtered by status |
| tasks | assignee_id, due_date | composite | "My tasks" sorted by deadline |
```

## Cross-References

- **Depends on:** [03-planning/tech-stack](../../03-planning/tech-stack/) — Database technology choice
- **Depends on:** [03-planning/mvp-scope](../../03-planning/mvp-scope/) — Features that define entities
- **Feeds into:** [05-development/backend](../backend/) — Models and data access layer
- **Feeds into:** [05-development/apis](../apis/) — Endpoints mirror database resources
- **Backed up via:** [06-infrastructure/cloud-hosting](../../06-infrastructure/cloud-hosting/) — Backup and recovery infra
