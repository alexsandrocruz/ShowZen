# Feature Prioritization: ShowZen

## Feature Inventory

### Complete Feature List
| # | Feature | Source | Category |
|---|---|---|---|
| 1 | Multi-artist Agenda | PRD / Vision | Core |
| 2 | Conflict Detection | PRD / Client Pain | Core |
| 3 | Automated PDF Proposal | PRD / Client Request | Growth |
| 4 | BRL Tax Calculation | PRD / Finance | Infrastructure |
| 5 | Internal Commissions | PRD / Finance | Infrastructure |
| 6 | CRM Pipeline | PRD / CRM | Core |
| 7 | Dashboard KPIs | PRD / Analytics | Polish |
| 8 | Regional Heatmap | PRD / Analytics | Polish |
| 9 | Multi-user Roles | PRD / Auth | Infrastructure |
| 10| Mobile UI View | Vision | Growth |

## RICE Scoring

| Feature | Reach (1-10) | Impact (1-3) | Confidence (%) | Effort (weeks) | RICE Score | Rank |
|---|---|---|---|---|---|---|
| Multi-artist Agenda | 10 | 3 | 100% | 2 | 15.0 | 1 |
| Conflict Detection | 10 | 3 | 90% | 1 | 27.0 | 1* |
| PDF Proposals | 8 | 2 | 80% | 2 | 6.4 | 4 |
| Tax/Comm Automation | 7 | 2 | 90% | 2 | 6.3 | 5 |
| CRM Pipeline | 9 | 2 | 85% | 2 | 7.65 | 3 |
| Dashboard KPIs | 6 | 1 | 70% | 3 | 1.4 | 8 |

## MoSCoW Categorization

### Must Have (MVP)
| Feature | Why It's a Must | Effort |
|---|---|---|
| Multi-artist Agenda | The central value proposition of the system. | 2 weeks |
| Conflict Detection | Solves the primary pain point of scheduling errors. | 1 week |
| Basic CRM (Artists/Clients)| Required data entities for creating events. | 1 week |
| BRL Finance Core | Essential for the client who already paid for the module. | 2 weeks |

### Should Have
| Feature | Value Add | Effort |
|---|---|---|
| PDF Proposal Gen | Saves hours of manual work for the sales team. | 2 weeks |
| Internal Commissions | Key for agency management of staff. | 1 week |

### Could Have
| Feature | Benefit | Effort |
|---|---|---|
| Dashboard Analytics | Useful for long-term strategy but not for day-to-day operations. | 3 weeks |
| Heatmap | Visual "wow" factor for presentations. | 1 week |

### Won't Have (Defer)
| Feature | Why Cut | Revisit When |
|---|---|---|
| Native Mobile App | PWA/Responsive is sufficient and faster to build. | Q4 2026 |

## Priority Stack Rank (Final)
| Rank | Feature | RICE Score | MoSCoW | Sprint |
|---|---|---|---|---|
| 1 | Multi-artist Agenda | 15.0 | Must | Sprint 1 |
| 2 | Conflict Detection | 27.0 | Must | Sprint 1 |
| 3 | CRM Basic Registration | 8.0 | Must | Sprint 2 |
| 4 | BRL Finance Automations | 6.3 | Must | Sprint 2 |
| 5 | PDF Proposals | 6.4 | Should | Sprint 3 |
| 6 | Internal Commissions | 5.0 | Should | Sprint 3 |

## Dependencies
```
[CRM Basic] → [Event Booking] → [Multi-artist Agenda]
                              → [Conflict Detection]
[BRL Finance] → [PDF Proposals]
```
