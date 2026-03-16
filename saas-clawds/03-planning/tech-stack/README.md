# Tech Stack: ShowZen

## Stack Summary

| Layer | Choice | Rationale |
|---|---|---|
| **Framework** | **ABP.io (v8+)** | Professional Enterprise-grade framework; provides Auth, Audit, Localization, and Modular architecture Out-of-the-box. |
| **Frontend** | **React 18+** | Industry standard; high productivity; modular. Located in `.Web.Public.React`. |
| **Backend** | **.NET 8 (C#)** | High performance; type-safe; robust dependency injection. Located in `.HttpApi.Host`. |
| **Database** | **PostgreSQL** | Reliable; powerful JSON capabilities; excellent support in ABP.io. |
| **Styling** | **Tailwind CSS / Vanilla CSS** | Rapid UI development with standard tokens. |
| **State Mgt** | **Zustand / React Query** | Lightweight and performant state management for React. |
| **PDF Engine** | **QuestPDF or PDFMake** | High-quality PDF generation for proposals. |
| **Hosting** | **Vercel (FE) & Azure/Linux (BE)** | Professional infra for high-availability. |

## Detailed Decisions

### Frontend
- **Framework:** React 18 with Vite for development speed.
- **Styling:** Vanilla CSS (per user preference for flexibility) + Tailwind for utility-first layouts.
- **Logic:** Integrated with ABP.io via generated Proxies/Clients.

### Backend
- **Framework:** ABP Framework (.NET). This is a strategic choice for SaaS as it handles Multi-tenancy, Permissions, and Background Jobs natively.
- **API style:** RESTful Web APIs.

### Database
- **Primary database:** PostgreSQL (Managed).
- **ORM:** Entity Framework Core (EF Core) via ABP.io.

## Cost Projection

| Stage | Monthly Cost | Breakdown |
|---|---|---|
| Development | ~$50 | Managed DB (Small) + Backend Hosting. |
| Launch (1-5 offices)| ~$150 | Scaling App Service + Database. |
| Growth (20+ offices)| ~$500 | High-Availability setup + CDN + Storage. |

## Tech Debt Acknowledgments
| Decision | Why It's OK For Now | When to Revisit |
|---|---|---|
| Monolithic Deployment | ABP.io Monolith is faster to develop and deploy than microservices. | When traffic exceeds 10k concurrent users. |
| No Mobile App (Native) | Responsive Web handles current road management needs. | When offline-first features become priority. |
