# 13 — Analytics

> The nervous system of your SaaS — without measurement, everything is guesswork.

Analytics is where intuition meets evidence. Data-driven decisions separate successful SaaS companies from failed ones. Every department in this playbook produces outcomes that should be measured, tracked, and optimized. This department gives you the infrastructure and frameworks to do exactly that.

The goal isn't to track everything — it's to track the *right* things, build the *right* dashboards, and create a culture where decisions are backed by data, not opinions.

## Why This Matters

Most SaaS founders fly blind for too long. They "feel" like things are going well, but they can't tell you their activation rate, their week-2 retention, or which acquisition channel has the best LTV:CAC ratio. Analytics fixes this. It turns vague feelings into precise numbers, and precise numbers into better decisions.

## Subfolders

| Folder | What It Covers | Priority |
|---|---|---|
| `user-tracking/` | Behavioral analytics implementation — what users do in your product | P0 — foundation for everything else |
| `funnel-analysis/` | Mapping and measuring conversion funnels end-to-end | P0 |
| `cohort-analysis/` | Analyzing user behavior by groups over time | P1 |
| `kpi-dashboard/` | Defining and visualizing the metrics that matter most | P0 |
| `ab-testing/` | Running controlled experiments to optimize decisions | P1 |

## How to Work Through This Department

1. **Set up user tracking first** — you can't analyze what you don't measure
2. **Define your KPI dashboard** — know what metrics matter before you drown in data
3. **Map your funnels** — identify where users drop off in critical journeys
4. **Build cohort analysis** — understand retention and behavior over time
5. **Start A/B testing** — once you have data, start running experiments to improve it

## Key Metrics to Track

- **Activation Rate** — percentage of signups who reach the "aha moment"
- **DAU/WAU/MAU** — Daily, Weekly, Monthly Active Users
- **Feature Adoption Rate** — percentage of users using key features
- **Funnel Conversion Rates** — step-by-step conversion through critical journeys
- **Retention Curves** — Day 1, Day 7, Day 30 retention by cohort
- **Experiment Velocity** — number of A/B tests run per month

## Cross-References

- `06-infrastructure/monitoring` — system-level metrics complement product analytics
- `11-conversion/sales-funnel` — conversion funnels feed directly into funnel analysis
- `14-retention/` — retention metrics are built on analytics infrastructure
- `12-revenue/subscriptions` — revenue metrics depend on proper tracking
- `15-growth/product-led-growth` — PLG requires deep product analytics
