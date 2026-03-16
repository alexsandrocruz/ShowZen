---
department: 25-data-and-ai
subfolder: ai-features
priority: P1
stage: post-launch
estimated_time: "2-3 days"
requires: ["03-planning/product-roadmap", "21-product-management/feedback-loops"]
---

# AI Features

## Overview

This folder is for **AI/ML feature strategy** — what AI capabilities to build, build vs buy, model selection, and prioritization. AI features should solve real problems, not be AI for AI's sake.

## Questions to Answer

1. **What AI use cases make sense for your product?** (Summarization, classification, generation?)
2. **Build vs buy?** (Custom model vs OpenAI, Anthropic, etc.)
3. **What models are you considering?** (GPT-4, Claude, open-source?)
4. **What's the AI feature roadmap?** (P0, P1, P2)
5. **What data do you need for AI?** (Training, context, prompts?)
6. **What are the risks?** (Accuracy, bias, cost, latency?)
7. **How do you measure AI feature success?** (Adoption, accuracy, ROI?)

## Output Template

Create a `README.md` in this folder with:

```markdown
# AI Features: [Your SaaS Name]

## AI Use Cases
| Use Case | Problem | Approach | Priority |
|---|---|---|---|
| [e.g., Smart summaries] | Users spend time reading | LLM summarization | P0 |
| [e.g., Auto-categorize] | Manual tagging | Classification model | P1 |
| [e.g., Chat support] | Support volume | LLM + RAG | P2 |

## Build vs Buy
| Use Case | Approach | Rationale |
|---|---|---|
| [Use case 1] | Buy (OpenAI API) | Fast, no ML expertise |
| [Use case 2] | Build (fine-tuned) | Proprietary data, differentiation |
| [Use case 3] | Hybrid | Base model + RAG |

## Model Selection
| Use Case | Model | Provider | Why |
|---|---|---|---|
| Text generation | GPT-4 / Claude | OpenAI / Anthropic | Quality, API |
| Embeddings | text-embedding-3 | OpenAI | Semantic search |
| Open-source | Llama, Mistral | Self-hosted | Cost, data control |
| [Custom] | | | |

## AI Roadmap
| Quarter | Feature | Status |
|---|---|---|
| Q1 | [First AI feature] | |
| Q2 | | |
| Q3 | | |
| Q4 | | |

## Success Metrics
| Feature | Metric |
|---|---|
| [AI feature] | Adoption %, accuracy, time saved |
| | |
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **OpenAI API** | GPT-4, embeddings | Pay per token |
| **Anthropic** | Claude | Pay per token |
| **Vercel AI SDK** | LLM integration | Free |
| **LangChain** | LLM orchestration | Free |
| **Hugging Face** | Open-source models | Free |
| **Replicate** | Model hosting | Pay per run |
| **Fireworks** | Fast open-source API | $ |

## Agent Instructions

1. Read [03-planning/product-roadmap](../../03-planning/product-roadmap/) for product direction
2. Read [21-product-management/feedback-loops](../../21-product-management/feedback-loops/) for AI feature requests
3. List 3-5 AI use cases with problem and approach
4. Document build vs buy per use case (recommend: buy/API for speed)
5. Select models (GPT-4/Claude for text, embeddings for search)
6. Create AI roadmap (P0 in Q1, P1/P2 later)
7. Define success metrics per feature
8. Cross-ref [25-data-and-ai/ai-costs](../ai-costs/) for cost implications

## Cross-References

- [25-data-and-ai/ai-costs](../ai-costs/) — Cost management
- [25-data-and-ai/training-data](../training-data/) — Training data for custom models
- [03-planning/product-roadmap](../../03-planning/product-roadmap/) — Roadmap alignment
