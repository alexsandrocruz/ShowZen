# 🚀 SaaS Playbook

**The open-source operating system for building, launching, and scaling a SaaS company.**

Clone this repo. Run the setup. Let AI agents help you build every department of your startup — from first idea to global scale.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![AI Agent Ready](https://img.shields.io/badge/AI%20Agent-Ready-blue.svg)](#ai-agent-compatibility)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

> **⭐ If this helps you organize your SaaS, please star the repo.**
> **It helps other builders discover it.**

### Who is this for?

- **Solo founders** building their first (or next) SaaS
- **Indie hackers** who want structure without the overhead
- **AI-assisted startups** using agents to move faster across every department
- **Builders running multiple SaaS** who need a repeatable operating system

---

> **Inspired by** [@hridoyreh's viral tweet](https://x.com/hridoyreh/status/2031381494825103473) that laid out the complete SaaS company as a folder structure. This repo turns that original idea into a fully actionable, AI-agent-powered playbook that any founder can clone and run.

---

## Why This Exists

Building a SaaS is not just writing code. It's building an entire company — marketing, sales, support, analytics, infrastructure, hiring, and dozens of other departments that need structure from day one.

Most founders figure this out painfully, one crisis at a time.

**SaaS Playbook gives you the complete folder structure of a well-run SaaS company**, with detailed instructions in every folder so you (or your AI agent) can populate it with your specific plans, strategies, and documentation.

### What You Get

- **26 departments** covering the full SaaS lifecycle: Idea → Validation → Planning → Design → Development → Infrastructure → Testing → Launch → Acquisition → Distribution → Conversion → Revenue → Analytics → Retention → Growth → Scaling, plus Legal, Finance, Sales, Customer Success, Product Management, Brand, Documentation, Competitive Intelligence, Data & AI, and People & Culture
- **130+ structured subfolders**, each with detailed `INSTRUCTIONS.md` files
- **Interactive setup script** that personalizes everything to your startup
- **AI-agent native** — works with Cursor, GitHub Copilot, OpenAI Codex, Claude, and any LLM-powered coding agent
- **Battle-tested frameworks** — each folder contains proven templates, checklists, and strategies

---

## Quick Start

### Option 1: Interactive Setup (Recommended)

```bash
git clone https://github.com/vamshi4001/saas-clawds.git
cd saas-clawds
python3 setup.py
```

The setup script will:
1. Ask for your SaaS company name
2. Ask you to describe your product in your own words
3. Walk through each department, asking clarifying questions
4. Generate personalized documentation across all 130+ folders

### Option 2: Use with AI Agents

If you're using Cursor, Copilot Workspace, Codex, or any AI coding agent:

```bash
git clone https://github.com/vamshi4001/saas-clawds.git
cd saas-clawds
```

Then tell your agent:

> "Read the AGENTS.md file and help me populate this SaaS playbook for my startup [YOUR_IDEA]."

The agent will read the structured instructions in every folder and help you fill out your entire company operating system.

### Option 3: Manual

Browse the folders, read the `INSTRUCTIONS.md` files, and fill them out yourself. Each file tells you exactly what to write and provides templates.

---

## Repository Structure

```
saas-clawds/
│
├── 📂 01-idea/                    # Where it all starts
│   ├── problem-discovery/         # What pain point are you solving?
│   ├── market-research/           # How big is the opportunity?
│   ├── niche-selection/           # Who exactly are you building for?
│   ├── competitor-analysis/       # Who else is in this space?
│   └── opportunity-mapping/       # Where's the gap you can own?
│
├── 📂 02-validation/              # Prove it before you build it
│   ├── customer-interviews/       # Talk to real humans
│   ├── landing-page-test/         # Test demand with a page
│   ├── waitlist/                  # Build pre-launch momentum
│   ├── pre-sales/                 # Can you sell it before it exists?
│   └── demand-testing/            # Quantify the demand
│
├── 📂 03-planning/                # Blueprint the build
│   ├── product-roadmap/           # What are you building, and when?
│   ├── feature-prioritization/    # What matters most right now?
│   ├── mvp-scope/                 # What's the smallest useful thing?
│   ├── tech-stack/                # What tools and frameworks?
│   └── development-plan/          # Sprint plans and milestones
│
├── 📂 04-design/                  # Make it beautiful and usable
│   ├── wireframes/                # Low-fidelity layouts
│   ├── ui-design/                 # High-fidelity mockups
│   ├── ux-flows/                  # User journey maps
│   ├── prototype/                 # Clickable prototypes
│   └── design-system/             # Components, tokens, guidelines
│
├── 📂 05-development/             # Write the code
│   ├── frontend/                  # Client-side application
│   ├── backend/                   # Server-side logic
│   ├── apis/                      # API design and documentation
│   ├── database/                  # Schema, migrations, strategy
│   ├── authentication/            # Auth flows and security
│   └── integrations/              # Third-party connections
│
├── 📂 06-infrastructure/          # Keep it running
│   ├── cloud-hosting/             # Where does it live?
│   ├── devops/                    # Deployment automation
│   ├── ci-cd/                     # Build and deploy pipelines
│   ├── monitoring/                # Alerts, logs, observability
│   └── security/                  # Hardening and compliance
│
├── 📂 07-testing/                 # Make it bulletproof
│   ├── unit-testing/              # Test individual pieces
│   ├── integration-testing/       # Test pieces together
│   ├── bug-fixing/                # Track and squash bugs
│   ├── performance-testing/       # Load and stress testing
│   └── beta-testing/              # Real users, real feedback
│
├── 📂 08-launch/                  # Ship it to the world
│   ├── landing-page/              # Your storefront
│   ├── product-hunt/              # Launch on Product Hunt
│   ├── beta-users/                # Manage beta program
│   ├── early-adopters/            # Cultivate your first fans
│   └── public-release/            # Go-live checklist
│
├── 📂 09-acquisition/             # Get users in the door
│   ├── seo-wins/                  # Organic search strategy
│   ├── content-marketing/         # Blog, guides, resources
│   ├── social-media/              # Platform strategies
│   ├── cold-email/                # Outbound campaigns
│   ├── influencer-outreach/       # Leverage others' audiences
│   └── affiliate-marketing/       # Pay for performance
│
├── 📂 10-distribution/            # Be everywhere they look
│   ├── directories/               # SaaS directories and listings
│   ├── saas-marketplaces/         # App stores and marketplaces
│   ├── communities/               # Where your users hang out
│   ├── partnerships/              # Strategic alliances
│   └── integrations/              # Ecosystem connections
│
├── 📂 11-conversion/              # Turn visitors into customers
│   ├── sales-funnel/              # The path to purchase
│   ├── free-trial/                # Trial optimization
│   ├── freemium-model/            # Free tier strategy
│   ├── pricing-strategy/          # How to price your SaaS
│   └── checkout-optimization/     # Reduce friction at payment
│
├── 📂 12-revenue/                 # Make money sustainably
│   ├── subscriptions/             # Recurring revenue model
│   ├── upsells/                   # Expand existing accounts
│   ├── add-ons/                   # Additional paid features
│   ├── annual-plans/              # Lock in long-term revenue
│   └── enterprise-deals/          # Land big contracts
│
├── 📂 13-analytics/               # Measure everything
│   ├── user-tracking/             # Behavioral analytics
│   ├── funnel-analysis/           # Where do users drop off?
│   ├── cohort-analysis/           # How do user groups behave?
│   ├── kpi-dashboard/             # Your north star metrics
│   └── ab-testing/                # Test and optimize
│
├── 📂 14-retention/               # Keep them coming back
│   ├── user-onboarding/           # First-run experience
│   ├── email-automation/          # Lifecycle email sequences
│   ├── customer-support/          # Help desk and self-service
│   ├── feature-adoption/          # Drive usage of key features
│   └── churn-reduction/           # Stop the bleeding
│
├── 📂 15-growth/                  # Accelerate and compound
│   ├── referral-programs/         # Word-of-mouth engine
│   ├── community-building/        # Build your tribe
│   ├── product-led-growth/        # Let the product sell itself
│   ├── viral-loops/               # Built-in sharing mechanics
│   └── expansion-strategy/        # New markets and verticals
│
├── 📂 16-scaling/                 # From startup to scale-up
│   ├── automation/                # Automate repetitive work
│   ├── hiring/                    # Build the team
│   ├── systems/                   # Processes and SOPs
│   ├── global-expansion/          # Go international
│   └── exit-strategy/             # Acquisition, IPO, or lifestyle
│
├── 📂 17-legal/                   # Protect your business
│   ├── incorporation/             # Entity structure, formation
│   ├── terms-and-privacy/         # ToS, privacy policy, DPA
│   ├── contracts/                 # MSA, NDAs, vendor agreements
│   ├── intellectual-property/      # Trademarks, patents, OSS
│   └── compliance/               # GDPR, SOC2, HIPAA
│
├── 📂 18-finance/                 # Run the numbers
│   ├── financial-modeling/        # Revenue projections, runway
│   ├── unit-economics/            # LTV, CAC, payback
│   ├── bookkeeping/               # Chart of accounts, tax prep
│   ├── billing-operations/        # Payments, invoicing, dunning
│   └── fundraising/              # Pitch deck, investors, cap table
│
├── 📂 19-sales/                   # Close deals
│   ├── sales-process/             # Pipeline, qualification
│   ├── demo-playbook/             # Demos, objection handling
│   ├── proposals-and-contracts/   # Proposals, SOWs
│   ├── crm-setup/                 # CRM configuration
│   └── sales-hiring/              # Sales roles, comp plans
│
├── 📂 20-customer-success/        # Proactive retention & expansion
│   ├── health-scoring/            # Customer health metrics
│   ├── onboarding-program/        # Structured onboarding
│   ├── quarterly-business-reviews/ # QBRs, success metrics
│   ├── expansion-playbook/       # Upsells, champion ID
│   └── churn-prevention/          # At-risk intervention
│
├── 📂 21-product-management/      # Ongoing product discipline
│   ├── feedback-loops/            # Feature requests, synthesis
│   ├── product-market-fit/        # PMF surveys, retention
│   ├── release-management/        # Releases, changelog, flags
│   ├── roadmap-communication/     # Public roadmap
│   └── product-ops/               # Tooling, rituals
│
├── 📂 22-brand-and-positioning/   # Stand out
│   ├── brand-identity/            # Logo, colors, typography
│   ├── messaging-framework/       # Value props, positioning
│   ├── voice-and-tone/            # Writing style
│   ├── competitive-positioning/   # Differentiation
│   └── brand-assets/              # Logo files, templates
│
├── 📂 23-documentation/           # Knowledge that scales
│   ├── user-docs/                 # Help center, guides
│   ├── api-docs/                  # API reference
│   ├── changelog/                 # Release notes
│   ├── internal-docs/             # Runbooks, ADRs
│   └── developer-guides/          # Integration tutorials
│
├── 📂 24-competitive-intelligence/ # Stay ahead
│   ├── market-monitoring/         # Competitive tracking
│   ├── win-loss-analysis/         # Post-deal interviews
│   ├── feature-gap-tracking/      # Feature parity matrix
│   ├── pricing-intelligence/      # Competitor pricing
│   └── battlecards/               # Sales battlecards
│
├── 📂 25-data-and-ai/             # Build on data, scale with AI
│   ├── data-architecture/         # Pipeline, warehouse
│   ├── ai-features/               # AI/ML roadmap
│   ├── data-governance/           # Classification, retention
│   ├── ai-costs/                  # Token budgets, optimization
│   └── training-data/             # Data sourcing, labeling
│
├── 📂 26-people-and-culture/      # Build the team
│   ├── culture-values/            # Company values
│   ├── performance-management/   # Reviews, feedback
│   ├── compensation/             # Salary, equity, benefits
│   ├── remote-work/              # Remote policy, async
│   └── team-health/              # Engagement, burnout
│
├── setup.py                       # Interactive setup script
├── AGENTS.md                      # Instructions for AI agents
├── CONTRIBUTING.md                # How to contribute
├── LICENSE                        # MIT License
└── README.md                      # You are here
```

---

## AI Agent Compatibility

This repository is designed to be used with AI coding agents. Every folder contains structured `INSTRUCTIONS.md` files with:

- **Clear context** about the purpose of each folder
- **Specific questions** that need answers
- **Templates** with fill-in-the-blank sections
- **Output format specifications** so agents produce consistent results

### Supported Agents

The structured `AGENTS.md` and `INSTRUCTIONS.md` files work with any AI agent that can read files. Below is a comprehensive list of popular agents (including 2026 releases) that can leverage this playbook:

#### IDE & Editor Integrated

| Agent | How to Use |
|-------|-----------|
| **Cursor (Composer)** | Open the repo in Cursor. Tell Composer: "Read AGENTS.md and help me fill out this playbook for [your idea]." AI-native IDE with strong multi-file editing. |
| **GitHub Copilot / Copilot Workspace** | Point Copilot at the repo. Agents read AGENTS.md and INSTRUCTIONS.md automatically. Multi-model support (GPT-5, Claude), agent mode in VS Code and GitHub. |
| **Cline** | Open-source VS Code extension (Apache 2.0). 58K+ GitHub stars, 5M+ installs. Full MCP support, model-agnostic (Claude, GPT, Gemini, Ollama). Plan/Act mode—share AGENTS.md, iterate through departments. [github.com/cline/cline](https://github.com/cline/cline) |
| **Windsurf (Codeium Cascade)** | Agentic IDE with flow awareness. Cascade tracks edits, terminal, clipboard. Share AGENTS.md and iterate. Free tier + Pro. |
| **Amazon Q Developer** | VS Code, JetBrains. `/dev` agent for code changes, `/doc` for documentation. Add repo to context—point at AGENTS.md. Integrates with AWS. |
| **Kilo** | VS Code, JetBrains, CLI. Orchestrator Mode for parallel planning. Memory Bank for context. 1.5M+ users. |
| **Tabnine** | Enterprise assistant with Context Engine. Add repo to context; helps populate folders. Gartner 2025 Visionary. |
| **Sourcegraph Cody** | VS Code, JetBrains, web. Code graph for context. Point at AGENTS.md and work through departments. |
| **Codeium** | Free VS Code extension with unlimited completions. Best free option; also powers Windsurf IDE. |

#### CLI & Terminal Agents

| Agent | How to Use |
|-------|-----------|
| **Claude Code (Anthropic CLI)** | `claude` in repo. Terminal-first, powered by Claude Opus. Excels at complex refactors. Use AGENTS.md as `CLAUDE.md` content. |
| **Aider** | Run `aider` in repo root. Open-source, 75+ LLM providers. Creates repo maps, reads AGENTS.md, modifies files. Install: `pip install aider-chat` |
| **OpenAI Codex / ChatGPT Code Interpreter** | Share AGENTS.md and company-profile.md. Work through departments in conversation. |

#### Cloud & Platform Agents

| Agent | How to Use |
|-------|-----------|
| **AWS Kiro** | Agentic coding on Amazon Bedrock. Spec-driven development—prompts → specs, code, docs, tests. Understands system architecture. Add repo, point at AGENTS.md. [kiro.dev](https://kiro.dev) |
| **Bolt.new (StackBlitz)** | Browser-based. Import or paste repo. Claude Agent handles multi-file tasks—use for quick playbook population. |
| **Replit Agent** | Clone repo in Replit. Agent automates setup and file generation—instruct it to read AGENTS.md and populate folders. |

#### Enterprise & Open-Source Platforms

| Agent | How to Use |
|-------|-----------|
| **NVIDIA NemoClaw** | Open-source enterprise agent platform (launched GTC 2026). File reading, tool use, multi-agent collaboration, hardware-agnostic (NVIDIA, AMD, Intel). Privacy-first, no forced cloud. Point at repo—agents read structured markdown. [nemoclaw.bot](https://nemoclaw.bot/) |
| **Codegen** | "The OS for Code Agents"—orchestration for teams. Sandboxed execution, governance, cost analytics. Connect repo via GitHub; agents work through AGENTS.md with full context. For production agent workflows. [codegen.ai](https://codegen.ai) |
| **Devin / SWE-Agent** | Autonomous coding agents. Clone repo, instruct to read AGENTS.md first, then populate all folders. |
| **Databricks Genie Code** | For data-focused SaaS builders. Use for analytics, data pipeline, and AI department sections. |
| **Any MCP-Compatible Agent** | This repo works with Model Context Protocol. Any agent with file-read tools can consume AGENTS.md and INSTRUCTIONS.md. |

#### General LLM (ChatGPT, Claude, Gemini, DeepSeek, etc.)

| Agent | How to Use |
|-------|-----------|
| **Any LLM** | Copy AGENTS.md and company-profile.md into the chat. Work through departments sequentially. The structured templates produce consistent output. |

### Machine-Readable Metadata

Every `INSTRUCTIONS.md` file includes a YAML frontmatter block with:

```yaml
---
department: "acquisition"
subfolder: "seo-wins"
priority: "high"
stage: "post-launch"
estimated_time: "2-4 hours"
requires: ["01-idea", "03-planning"]
---
```

This allows agents to:
- Prioritize which folders to fill first
- Understand dependencies between departments
- Estimate total time to complete the playbook
- Skip sections that aren't relevant yet

---

## The SaaS Lifecycle

This playbook follows the natural lifecycle of a SaaS company:

```
IDEA → VALIDATE → PLAN → DESIGN → BUILD → DEPLOY → TEST → LAUNCH
                                                              ↓
SCALE ← GROW ← RETAIN ← ANALYZE ← MONETIZE ← CONVERT ← DISTRIBUTE ← ACQUIRE
```

Each stage builds on the previous one. The setup script guides you through them in order, but you can jump to any department at any time.

---

## Who This Is For

- **Solo founders** who need structure across every business function
- **Small teams** who want a shared operating system for their SaaS
- **AI-first builders** who use agents to accelerate every part of their business
- **Accelerator participants** who need to organize their thinking fast
- **Consultants** who advise SaaS startups and need a repeatable framework
- **Students** learning how SaaS businesses are structured

---

## Philosophy

1. **Structure enables speed.** You move faster when you know where everything goes.
2. **AI agents need context.** The better your documentation, the better your AI tools perform.
3. **Every department matters.** Code is 20% of a SaaS. The other 80% is everything else.
4. **Start messy, refine later.** Fill out what you can now. Come back and improve it.
5. **Open source wins.** The best playbook is one the community keeps improving.

---

## Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

Ways to contribute:
- Improve instruction files with better templates and examples
- Add real-world case studies to department folders
- Translate instructions to other languages
- Build integrations with specific AI agents
- Share your filled-out playbook as an anonymized example

---

## License

MIT License — see [LICENSE](LICENSE) for details. Use this for your startup, share it with friends, fork it for your accelerator.

---

## Star History

If this helped you, star the repo so other founders can find it too.

---

## Credits

The original concept of representing a SaaS company as a folder structure comes from [**@hridoyreh**](https://x.com/hridoyreh) and their [tweet](https://x.com/hridoyreh/status/2031381494825103473) that went viral for a good reason — it's a brilliantly simple way to think about all the moving pieces of a SaaS business.

This repository was created by [**Vamshi Vangapally**](https://vamshi4001.github.io), who took that idea and turned it into a fully executable, AI-agent-compatible playbook with detailed instructions, templates, and tooling so any founder can go from concept to company.

---

<p align="center">
  <b>Built for founders who move fast and build with AI.</b><br>
  <a href="https://github.com/vamshi4001/saas-clawds">⭐ Star this repo</a> · 
  <a href="https://github.com/vamshi4001/saas-clawds/issues">Report an issue</a> · 
  <a href="CONTRIBUTING.md">Contribute</a>
</p>
