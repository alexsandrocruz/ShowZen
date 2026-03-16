---
department: 25-data-and-ai
subfolder: training-data
priority: P2
stage: growth
estimated_time: "2-4 weeks"
requires: ["25-data-and-ai/ai-features", "25-data-and-ai/data-governance"]
---

# Training Data

## Overview

This folder is for **training data strategy** — data sourcing, labeling, synthetic data, and quality assurance. If you build custom models or fine-tune, you need a plan for training data.

## Questions to Answer

1. **Do you need custom training data?** (Fine-tuning? Custom model?)
2. **Where does training data come from?** (Product usage? Manual? Synthetic?)
3. **Do you need labeling?** (Human-labeled? Self-supervised?)
4. **What's your labeling process?** (In-house? Outsourced? Tool?)
5. **Do you use synthetic data?** (LLM-generated? Augmentation?)
6. **What's your quality assurance process?** (Validation, audit?)
7. **What are the governance considerations?** (PII, consent, bias?)

## Output Template

Create a `README.md` in this folder with:

```markdown
# Training Data: [Your SaaS Name]

## Training Data Needs
| Model/Feature | Data Need | Source | Volume |
|---|---|---|---|
| [Custom classifier] | Labeled examples | Product + label | 1K+ |
| [Fine-tuned LLM] | Domain examples | Internal docs, support | 10K+ |
| [Recommendation] | Implicit signals | Product events | Streaming |

## Data Sourcing
| Source | Data | Consent/Governance |
|---|---|---|
| Product usage | Events, interactions | Terms, anonymize |
| Support tickets | Q&A pairs | Internal only |
| Manual collection | Labeled dataset | |
| Synthetic | LLM-generated | Quality check |
| Public datasets | | License check |

## Labeling Process
| Step | Owner | Tool |
|---|---|---|
| Data collection | | |
| Labeling guidelines | | |
| Labeling | In-house / Contractor | |
| Quality review | | |
| Validation set | | |

## Synthetic Data
| Use Case | Method | Quality Check |
|---|---|---|
| [e.g., Few-shot examples] | GPT-4 generated | Human sample |
| [e.g., Augmentation] | Paraphrase, augment | Validation accuracy |
| | | |

## Quality Assurance
- **Validation set:** X% held out
- **Inter-rater reliability:** (If human labels)
- **Bias check:** [Demographic, edge cases]
- **Refresh cadence:** 
```

## Recommended Tools & Resources

| Tool | Purpose | Cost |
|---|---|---|
| **Label Studio** | Data labeling | Open-source |
| **Scale AI** | Labeling service | $ |
| **Snorkel** | Programmatic labeling | $ |
| **OpenAI fine-tuning** | Fine-tune GPT | $ |
| **Hugging Face** | Datasets, models | Free |
| **Weights & Biases** | Experiment tracking | Free tier |

## Agent Instructions

1. Read [25-data-and-ai/ai-features](../ai-features/) for custom model needs
2. Read [25-data-and-ai/data-governance](../data-governance/) for PII, consent
3. List training data needs per model/feature
4. Document data sourcing (product, manual, synthetic)
5. Define labeling process (guidelines, tool, QA)
6. Document synthetic data use (if any) with quality checks
7. Define QA process (validation set, bias check)
8. Cross-ref [17-legal/terms-and-privacy](../../17-legal/terms-and-privacy/) for consent

## Cross-References

- [25-data-and-ai/ai-features](../ai-features/) — AI use cases
- [25-data-and-ai/data-governance](../data-governance/) — PII, consent
- [17-legal/terms-and-privacy](../../17-legal/terms-and-privacy/) — Data use terms
