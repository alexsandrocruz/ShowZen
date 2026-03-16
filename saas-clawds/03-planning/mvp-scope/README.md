# MVP Scope: ShowZen

## MVP Definition
> ShowZen lets artistic managers automate their agenda and financial workflow for multiple artists, preventing conflicts and generating professional proposals in minutes.

## Core Value Hypothesis
> We believe that artistic management offices will adopt ShowZen because it solves the catastrophic risk of scheduling conflicts and the manual drudgery of proposal generation better than shared spreadsheets and WhatsApp groups.

## Feature Scope

### ✅ MUST HAVE (In the MVP)
| Feature | Why It's Essential | Effort | Acceptance Criteria |
|---|---|---|---|
| Multi-artist Calendar | Core visualization for the manager. | Medium | View color-coded events for multiple artists in one grid. |
| Conflict Detection | Primary risk-reduction feature. | Small | Alert user if a new event overlaps with an existing one for the same artist. |
| Automatic PDF Proposal | Key time-saver and professionalization. | Medium | Generate a branded PDF with event details and artist info. |
| BRL Finance Core | Required for contract validation. | Medium | Calculate taxes and commissions based on the cache value. |

### ⏳ NICE TO HAVE (Post-MVP)
| Feature | Why It's Deferred | Build When |
|---|---|---|
| Dashboard Analytics | Useful but not operational for v1. | After first 3 clients are onboarded. |
| Mobile App | Responsive web covers current needs. | When user count exceeds 50. |

### ❌ CUT (Explicitly excluded)
| Feature | Why It's Cut | Hurts to Cut? |
|---|---|---|
| Logistics Module | Complex; requires many external integrations. | Yes |
| Split Payment | High regulatory and technical effort for v1. | No |

### 🤝 MANUAL/CONCIERGE (Human-powered for now)
| Process | Automated Later? | Manual Effort |
|---|---|---|
| Onboarding Artists | Yes, in v2 | 15 min per artist (setting up logo, colors, bio) |
| Tech Support | Yes, via help center | Real-time via WhatsApp/Intercom |

## User Stories (MVP Only)

### Epic: Agenda Management
- As a Manager, I want to see a combined view of all my artists' shows so I can identify gaps in the tour.
- As a Manager, I want to be alerted when I try to book two shows for the same artist at the same time.
- As a Manager, I want to filter the agenda by artist and status (Lead, Confirmed).

### Epic: Commercial Flow
- As a Booking Agent, I want to fill out a form with event details and immediately generate a PDF proposal.
- As a Manager, I want to see a financial breakdown (Tax, Commission) for every show proposal.

## MVP Success Criteria
| Metric | Target | Timeframe | How Measured |
|---|---|---|---|
| Active Artists Managed| 5+ | 4 weeks post-launch | Database check |
| Proposals Generated | 20+ | 4 weeks post-launch | Audit logs |
| Customer Satisfaction | High (No conflicts) | Continuous | Direct feedback (Divina Providência) |

## Build Timeline
- **Week 1:** Data model (ABP.io), Artist/Client registration UI.
- **Week 2:** Multi-artist calendar view with basic event booking.
- **Week 3:** Conflict detection logic and PDF generation engine.
- **Week 4:** Financial automation logic and UI polish.
- **Week 5:** Deployment to staging, validation with client, and Go-live.
