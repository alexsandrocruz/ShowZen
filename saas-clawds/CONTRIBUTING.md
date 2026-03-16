# Contributing to SaaS Playbook

Thank you for helping make SaaS Playbook better for every founder.

## How to Contribute

### Improving Instruction Files

The most valuable contributions improve the `INSTRUCTIONS.md` files in each subfolder. Good improvements include:

- **Better templates** — more actionable, more specific fill-in sections
- **Real-world examples** — anonymized examples from actual SaaS companies
- **Additional resources** — links to tools, articles, frameworks that help founders
- **Clearer questions** — better prompts that help founders (and AI agents) produce better output
- **Industry-specific variations** — templates for B2B vs B2C, vertical SaaS, API-first, etc.

### Adding New Subfolders

If you think a department is missing a critical subfolder:

1. Open an issue explaining what's missing and why it matters
2. Include a draft `INSTRUCTIONS.md` for the new subfolder
3. Submit a PR with the new folder and instruction file

### Fixing Bugs in the Setup Script

The `setup.py` script should work on Python 3.8+ with no external dependencies. If you find a bug:

1. Describe the issue (OS, Python version, error message)
2. Submit a PR with the fix

### Translations

We welcome translations of instruction files. Create a folder structure like:

```
translations/
├── es/          # Spanish
├── fr/          # French
├── de/          # German
├── ja/          # Japanese
├── zh/          # Chinese
└── pt/          # Portuguese
```

## Guidelines

- Keep language clear and actionable — founders are busy
- Every template section should be fillable by an AI agent without ambiguity
- Include YAML frontmatter in all `INSTRUCTIONS.md` files
- Test your changes with at least one AI agent (Cursor, Copilot, ChatGPT, etc.)
- No promotional content or affiliate links

## Pull Request Process

1. Fork the repository
2. Create a feature branch (`git checkout -b improve/seo-instructions`)
3. Make your changes
4. Test with an AI agent if applicable
5. Submit a PR with a clear description of what you improved and why

## Code of Conduct

Be kind, be helpful, be constructive. We're all building something together.
