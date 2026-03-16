---
department: 16-scaling
subfolder: global-expansion
priority: P2
stage: post-product-market-fit (expand internationally only when domestic market is strong)
estimated_time: 6-8 hours for planning, multi-month execution
requires:
  - 15-growth/expansion-strategy
  - 12-revenue/subscriptions
  - 06-infrastructure/security
---

# Global Expansion — Expanding the Business Internationally

## Overview

This folder contains your international expansion playbook — the operational plan for taking your SaaS product to new countries and regions. International expansion is one of the largest growth levers available to SaaS companies, but it's also one of the most complex. It touches everything: product (localization), engineering (data residency), legal (compliance), finance (multi-currency billing and tax), marketing (local positioning), and support (multilingual help).

The key insight: international expansion isn't just translation. It's adaptation. What works in the US market may not work in Japan or Germany. Pricing expectations differ. Payment methods differ. Privacy regulations differ. Support expectations differ. Success requires deep respect for local markets.

## Questions to Answer

Before expanding internationally, the founder needs to answer:

1. **What are your target markets and in what order?** (Common sequence: English-speaking → Western Europe → Asia-Pacific → LatAm → Rest of world. But follow demand signals — if 15% of signups are from Germany, that's a signal.)
2. **What localization is required?** (Full product translation? Marketing site only? Help center? Partial localization with English fallback?)
3. **What payment methods does each region require?** (Credit cards work in the US. But Netherlands needs iDEAL, Germany needs SEPA, Brazil needs PIX/Boleto, India needs UPI. Payment method support directly affects conversion.)
4. **What are the legal and tax implications?** (VAT/GST collection, data residency requirements, GDPR in EU, privacy laws in Brazil/India/China, entity structure for tax optimization.)
5. **Can you support customers in multiple languages?** (At minimum: English help center with machine translation. Ideally: native-language support for top markets during their business hours.)
6. **Where does user data need to live?** (EU data residency requirements under GDPR, data localization laws in Russia/China/India. Do you need region-specific infrastructure?)
7. **What is the pricing strategy for each market?** (Purchasing Power Parity pricing? Same price globally? Regional pricing tiers? How do you handle currency fluctuations?)

## Output Template

Generate a comprehensive international expansion playbook with these sections:

### 1. Market Prioritization Matrix

| Market | Current Demand Signal | TAM | Localization Effort | Compliance Complexity | Payment Complexity | Priority | Timeline |
|---|---|---|---|---|---|---|---|
| UK / Australia / Canada | X% of signups | $XM | Low (English) | Low | Low (cards) | P0 | Q1 |
| Germany | X% of signups | $XM | Medium (translation) | Medium (GDPR) | Medium (SEPA) | P1 | Q2 |
| France | X% of signups | $XM | Medium (translation) | Medium (GDPR) | Medium | P1 | Q2 |
| Japan | Growth in signups | $XM | High (CJK) | Medium | High (konbini) | P2 | Q3 |
| Brazil | Inbound requests | $XM | Medium (Portuguese) | Medium (LGPD) | High (PIX/Boleto) | P2 | Q4 |

### 2. Localization Checklist

**Product Localization:**
- [ ] UI strings externalized for translation (i18n framework)
- [ ] Date, time, and number formatting localized
- [ ] Currency display and input localized
- [ ] RTL (right-to-left) layout support if targeting Arabic/Hebrew markets
- [ ] Timezone-aware features
- [ ] Character encoding support (Unicode/UTF-8 throughout)

**Marketing Localization:**
- [ ] Marketing site translated and culturally adapted (not just machine translated)
- [ ] SEO keywords researched in target language
- [ ] Hreflang tags implemented for multi-language SEO
- [ ] Social proof localized (local customer logos, case studies)
- [ ] Local domain or subdomain (de.product.com or product.de)

**Support Localization:**
- [ ] Top 10 help center articles translated
- [ ] Support available in local language (or clear English-only policy)
- [ ] Support hours cover local business hours

### 3. Compliance-by-Country Matrix

| Requirement | US | EU (GDPR) | UK | Brazil (LGPD) | Japan (APPI) | India (DPDP) |
|---|---|---|---|---|---|---|
| Data privacy law | Various state laws | GDPR | UK GDPR | LGPD | APPI | DPDP Act |
| Consent required | Varies | Yes (explicit) | Yes | Yes | Yes | Yes |
| Data residency | No | Preferred (not required) | No | No (but DPA required) | No | Proposed |
| Breach notification | Varies | 72 hours | 72 hours | Reasonable time | Required | Required |
| DPO required | No | If large-scale processing | Same as EU | Yes | No | Yes (>threshold) |
| Tax collection | Sales tax (by state) | VAT | VAT | ISS/ICMS | JCT (10%) | GST (18%) |

### 4. International Pricing Strategy

| Approach | Description | Pros | Cons |
|---|---|---|---|
| Same price (USD) globally | One price for everyone | Simple | Unfair to lower-income markets |
| Purchasing Power Parity (PPP) | Adjusted pricing by country | Fair, higher conversion | Revenue dilution, arbitrage risk |
| Regional tiers | 3-4 price bands by region | Balance of fairness and simplicity | Still imprecise |
| Local currency, same value | Price in local currency, equivalent to USD base | Better UX, no currency confusion | FX risk, maintenance |

### 5. Payment Methods by Region

| Region | Primary Methods | Tool |
|---|---|---|
| US / Canada | Credit/debit cards, ACH | Stripe |
| UK | Cards, Direct Debit | Stripe |
| EU (SEPA zone) | Cards, SEPA Direct Debit, iDEAL (NL), Bancontact (BE) | Stripe, Mollie |
| Germany | SEPA, Giropay, Klarna | Stripe |
| Brazil | PIX, Boleto, Cards | Stripe, Ebanx |
| Japan | Cards, Konbini, Bank transfer | Stripe |
| India | UPI, Cards, Netbanking | Stripe India, Razorpay |
| Australia | Cards, BECS Direct Debit | Stripe |

### 6. International Support Model

| Tier | Coverage | Languages | Hours | Cost |
|---|---|---|---|---|
| Tier 1 (launch) | English only, self-serve docs | English | 24/7 async | Low |
| Tier 2 (traction) | English + machine-translated docs | English + top 3 languages | Business hours (expanded) | Medium |
| Tier 3 (scale) | Native-language support agents | English + 3-5 languages | Follow-the-sun coverage | High |

## Recommended Tools

| Tool | Purpose | Pricing |
|---|---|---|
| **Stripe** | International payments, 135+ currencies | Transaction fees |
| **Paddle** | Merchant of Record — handles tax, compliance, and payments globally | Transaction fees |
| **Lokalise** | Translation management platform | $120+/mo |
| **Phrase** | Localization workflow and TMS | $25+/mo |
| **Wise (TransferWise)** | International payroll and transfers | Low FX fees |
| **Deel** | International hiring and contractor management | $49+/contractor/mo |
| **Crowdin** | Open-source localization platform | Free for open source, $40+/mo |

## Agent Instructions

When populating this folder, the AI agent should:

1. Read `company-profile.md` to understand the current market, customer geography, and product type
2. Read `15-growth/expansion-strategy/README.md` for the strategic expansion plan
3. Read `12-revenue/subscriptions/README.md` for the billing model and pricing
4. Read `06-infrastructure/security/README.md` for data privacy and compliance posture
5. Analyze signup data (if available) to identify top international demand signals
6. Create the market prioritization matrix ranked by demand, effort, and opportunity
7. Build the localization checklist customized to the product
8. Create the compliance matrix for target markets
9. Recommend a pricing strategy for international markets
10. Design the phased international support model
11. Output everything as `README.md` in this folder

## Example Output (Snippet)

```markdown
## International Expansion — Phase 1: English-Speaking Markets

**Target:** UK, Canada, Australia
**Timeline:** Q2 2025
**Investment:** ~20 hours of engineering (currency display, timezone handling)

### Checklist
- [x] Multi-currency display (GBP, CAD, AUD)
- [x] Stripe configured for UK, CA, AU
- [ ] Marketing site — localized pricing pages
- [ ] Help center — timezone references updated
- [ ] Support — coverage extended to UK business hours

### Phase 1 Results (Month 1)
| Market | Signups | Conversion Rate | MRR |
|---|---|---|---|
| UK | 89 | 4.2% | $1,870 |
| Canada | 45 | 3.8% | $980 |
| Australia | 31 | 4.5% | $720 |
| **Total** | **165** | **4.1%** | **$3,570** |

Conversion rates comparable to US (4.3%), confirming product-market fit extends to English-speaking markets.
```

## Cross-References

- `15-growth/expansion-strategy` — strategic expansion planning feeds into operational execution here
- `12-revenue/subscriptions` — international billing, multi-currency, and tax implications
- `06-infrastructure/security` — data residency and privacy compliance
- `16-scaling/hiring` — international hiring for local support and operations
- `11-conversion/pricing-strategy` — international pricing strategy
