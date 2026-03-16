---
department: 25-data-and-ai
subfolder: ai-costs
priority: P1
stage: post-launch
estimated_time: "1-2 days"
requires: ["25-data-and-ai/ai-features", "11-conversion/pricing-strategy"]
---

# AI Costs

## Overview

This folder is for **managing AI costs** — token budgets, compute costs, usage monitoring, and optimization. AI can burn budget fast; track and optimize from day one.

## Questions to Answer

1. **What's your AI budget?** (Monthly? Per feature?)
2. **What are your main cost drivers?** (API tokens? Compute? Embeddings?)
3. **How do you monitor AI spend?** (Dashboards? Alerts?)
4. **What's your cost per user/session?** (If AI is core feature)
5. **How do you optimize?** (Caching? Smaller models? Batching?)
6. **Do you pass AI costs to customers?** (Usage-based pricing?)
7. **What's your cost alert threshold?** (Alert when spend > X)

## Output Template

Create a `README.md` in this folder with:

```markdown
# AI Costs: [Your SaaS Name]

## Cost Drivers
| Driver | Provider | Current Spend | Budget |
|---|---|---|---|
| LLM API (GPT-4/Claude) | OpenAI/Anthropic | | |
| Embeddings | OpenAI | | |
| Vector DB | Pinecone/Weaviate | | |
| Compute (if self-hosted) | | | |
| [Other] | | | |

## Cost per Unit
| Feature | Cost per Call/User | Notes |
|---|---|---|
| [AI feature 1] | $X per 1K tokens | |
| [AI feature 2] | | |
| Embeddings | $X per 1M tokens | |

## Budget & Alerts
| Budget | Monthly | Alert at |
|---|---|---|
| Total AI | $X | 80%, 100% |
| Per feature | | |
| Per customer (if usage-based) | | |

## Optimization Strategies
| Strategy | Savings | Implementation |
|---|---|---|
| Caching (semantic) | 30-50% | Redis, memoization |
| Smaller models (where possible) | 5-10x | GPT-3.5 vs GPT-4 |
| Prompt optimization | 20-30% | Shorter prompts |
| Batching | 10-20% | Batch API calls |
| Rate limits | | Prevent abuse |

## Cost Attribution
- **By feature:** 
- **By customer:** (If usage-based pricing)
- **By team:** 
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **OpenAI usage dashboard** | Token tracking | Built-in |
| **Anthropic usage** | Token tracking | Built-in |
| **Langfuse** | LLM observability, cost | Open-source / $ |
| **Helicone** | LLM proxy, cost tracking | Free tier |
| **Portkey** | LLM gateway, cost | $ |
| **Spreadsheet** | Manual tracking | Free |

## Agent Instructions

1. Read [25-data-and-ai/ai-features](../ai-features/) for AI use cases
2. Read [11-conversion/pricing-strategy](../../11-conversion/pricing-strategy/) for usage-based pricing
3. List cost drivers (LLM API, embeddings, vector DB, compute)
4. Estimate cost per unit (tokens, calls) from provider pricing
5. Set budget and alert thresholds
6. Document 4-5 optimization strategies
7. Define cost attribution (by feature, customer if usage-based)
8. Cross-ref [18-finance/financial-modeling](../../18-finance/financial-modeling/) for AI in financial model

## Cross-References

- [25-data-and-ai/ai-features](../ai-features/) — AI use cases
- [11-conversion/pricing-strategy](../../11-conversion/pricing-strategy/) — Pass-through pricing
- [18-finance/financial-modeling](../../18-finance/financial-modeling/) — Cost projection
