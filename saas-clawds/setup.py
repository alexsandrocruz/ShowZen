#!/usr/bin/env python3
"""
SaaS Playbook — Interactive Setup Script

Run this script to personalize the entire SaaS playbook for your startup.
It will ask about your company, then walk through each department to generate
your operating documents.

Usage:
    python3 setup.py

Requirements:
    Python 3.8+ (no external dependencies)
"""

import os
import sys
import json
import textwrap
from pathlib import Path
from datetime import datetime

REPO_ROOT = Path(__file__).parent.resolve()

DEPARTMENTS = [
    ("01-idea", "Idea", [
        "problem-discovery", "market-research", "niche-selection",
        "competitor-analysis", "opportunity-mapping"
    ]),
    ("02-validation", "Validation", [
        "customer-interviews", "landing-page-test", "waitlist",
        "pre-sales", "demand-testing"
    ]),
    ("03-planning", "Planning", [
        "product-roadmap", "feature-prioritization", "mvp-scope",
        "tech-stack", "development-plan"
    ]),
    ("04-design", "Design", [
        "wireframes", "ui-design", "ux-flows",
        "prototype", "design-system"
    ]),
    ("05-development", "Development", [
        "frontend", "backend", "apis",
        "database", "authentication", "integrations"
    ]),
    ("06-infrastructure", "Infrastructure", [
        "cloud-hosting", "devops", "ci-cd",
        "monitoring", "security"
    ]),
    ("07-testing", "Testing", [
        "unit-testing", "integration-testing", "bug-fixing",
        "performance-testing", "beta-testing"
    ]),
    ("08-launch", "Launch", [
        "landing-page", "product-hunt", "beta-users",
        "early-adopters", "public-release"
    ]),
    ("09-acquisition", "Acquisition", [
        "seo-wins", "content-marketing", "social-media",
        "cold-email", "influencer-outreach", "affiliate-marketing"
    ]),
    ("10-distribution", "Distribution", [
        "directories", "saas-marketplaces", "communities",
        "partnerships", "integrations"
    ]),
    ("11-conversion", "Conversion", [
        "sales-funnel", "free-trial", "freemium-model",
        "pricing-strategy", "checkout-optimization"
    ]),
    ("12-revenue", "Revenue", [
        "subscriptions", "upsells", "add-ons",
        "annual-plans", "enterprise-deals"
    ]),
    ("13-analytics", "Analytics", [
        "user-tracking", "funnel-analysis", "cohort-analysis",
        "kpi-dashboard", "ab-testing"
    ]),
    ("14-retention", "Retention", [
        "user-onboarding", "email-automation", "customer-support",
        "feature-adoption", "churn-reduction"
    ]),
    ("15-growth", "Growth", [
        "referral-programs", "community-building", "product-led-growth",
        "viral-loops", "expansion-strategy"
    ]),
    ("16-scaling", "Scaling", [
        "automation", "hiring", "systems",
        "global-expansion", "exit-strategy"
    ]),
    ("17-legal", "Legal & Compliance", [
        "incorporation", "terms-and-privacy", "contracts",
        "intellectual-property", "compliance"
    ]),
    ("18-finance", "Finance & Unit Economics", [
        "financial-modeling", "unit-economics", "bookkeeping",
        "billing-operations", "fundraising"
    ]),
    ("19-sales", "Sales", [
        "sales-process", "demo-playbook", "proposals-and-contracts",
        "crm-setup", "sales-hiring"
    ]),
    ("20-customer-success", "Customer Success", [
        "health-scoring", "onboarding-program", "quarterly-business-reviews",
        "expansion-playbook", "churn-prevention"
    ]),
    ("21-product-management", "Product Management", [
        "feedback-loops", "product-market-fit", "release-management",
        "roadmap-communication", "product-ops"
    ]),
    ("22-brand-and-positioning", "Brand & Positioning", [
        "brand-identity", "messaging-framework", "voice-and-tone",
        "competitive-positioning", "brand-assets"
    ]),
    ("23-documentation", "Documentation", [
        "user-docs", "api-docs", "changelog",
        "internal-docs", "developer-guides"
    ]),
    ("24-competitive-intelligence", "Competitive Intelligence", [
        "market-monitoring", "win-loss-analysis", "feature-gap-tracking",
        "pricing-intelligence", "battlecards"
    ]),
    ("25-data-and-ai", "Data & AI Strategy", [
        "data-architecture", "ai-features", "data-governance",
        "ai-costs", "training-data"
    ]),
    ("26-people-and-culture", "People & Culture", [
        "culture-values", "performance-management", "compensation",
        "remote-work", "team-health"
    ]),
]

STAGE_LABELS = {
    "1": "idea",
    "2": "building",
    "3": "launched",
    "4": "growing",
    "5": "scaling",
}

DEPARTMENT_QUESTIONS = {
    "01-idea": [
        ("What specific problem have you observed that needs solving?", "problem"),
        ("Who experiences this problem most acutely? Describe them.", "target_persona"),
        ("How are people currently solving this problem (workarounds)?", "current_solutions"),
        ("What's your unique insight or unfair advantage?", "unique_insight"),
    ],
    "02-validation": [
        ("Have you talked to potential customers yet? How many?", "customer_conversations"),
        ("What's the strongest signal of demand you've seen so far?", "demand_signal"),
        ("Would you be willing to pre-sell before building?", "presell_willingness"),
    ],
    "03-planning": [
        ("What are the top 3 features your MVP absolutely must have?", "mvp_features"),
        ("What's your target timeline for launching the MVP?", "mvp_timeline"),
        ("Do you have a preferred tech stack, or are you open?", "tech_preference"),
    ],
    "04-design": [
        ("Do you have a designer, or will you be doing design yourself?", "design_resource"),
        ("Are there products whose design you admire and want to emulate?", "design_inspiration"),
        ("What's more important right now: speed or polish?", "design_priority"),
    ],
    "05-development": [
        ("Are you a technical founder, or do you need to hire developers?", "technical_capability"),
        ("Will this be a web app, mobile app, desktop app, or API?", "platform"),
        ("Do you need real-time features (chat, notifications, collaboration)?", "realtime_needs"),
    ],
    "06-infrastructure": [
        ("Do you have a cloud provider preference (AWS, GCP, Azure, etc.)?", "cloud_preference"),
        ("What's your expected user scale in the first 6 months?", "expected_scale"),
        ("Are there compliance requirements (HIPAA, SOC2, GDPR)?", "compliance_needs"),
    ],
    "07-testing": [
        ("How important is quality vs. speed at your current stage?", "quality_priority"),
        ("Do you plan to have dedicated QA, or will developers test?", "qa_approach"),
    ],
    "08-launch": [
        ("Do you have a launch date in mind?", "launch_date"),
        ("What communities or platforms will you launch on?", "launch_platforms"),
        ("Do you already have an audience or email list?", "existing_audience"),
    ],
    "09-acquisition": [
        ("What's your primary acquisition channel strategy?", "primary_channel"),
        ("What's your customer acquisition cost (CAC) budget?", "cac_budget"),
        ("Are you going inbound (content/SEO) or outbound (sales/email)?", "acquisition_approach"),
    ],
    "10-distribution": [
        ("Are there marketplaces or directories relevant to your niche?", "relevant_marketplaces"),
        ("What communities does your target customer hang out in?", "target_communities"),
        ("Are there complementary products you could integrate with?", "integration_partners"),
    ],
    "11-conversion": [
        ("Will you offer a free trial, freemium plan, or paid-only?", "conversion_model"),
        ("What's your target price point?", "target_price"),
        ("How long is your typical sales cycle?", "sales_cycle"),
    ],
    "12-revenue": [
        ("What's your target MRR in 12 months?", "mrr_target"),
        ("Will you offer monthly, annual, or both billing cycles?", "billing_cycles"),
        ("Are you targeting SMB, mid-market, or enterprise?", "market_segment"),
    ],
    "13-analytics": [
        ("What's your #1 north star metric?", "north_star_metric"),
        ("What analytics tools are you currently using or considering?", "analytics_tools"),
    ],
    "14-retention": [
        ("What does 'success' look like for your users?", "user_success"),
        ("How will users get support (chat, email, self-service, phone)?", "support_channels"),
        ("What's your target monthly churn rate?", "churn_target"),
    ],
    "15-growth": [
        ("Is there a natural way for your product to spread virally?", "viral_potential"),
        ("Will you build a community around your product?", "community_plan"),
        ("What's your biggest growth lever right now?", "growth_lever"),
    ],
    "16-scaling": [
        ("What's your 3-year vision for the company?", "three_year_vision"),
        ("When do you plan to start hiring?", "hiring_timeline"),
        ("What's your end goal: acquisition, IPO, or lifestyle business?", "exit_goal"),
    ],
    "17-legal": [
        ("Have you incorporated yet? What entity type?", "incorporation_status"),
        ("Do you have Terms of Service and Privacy Policy?", "terms_status"),
        ("What compliance frameworks apply? (GDPR, SOC2, etc.)", "compliance_needs"),
    ],
    "18-finance": [
        ("What's your monthly burn rate and runway?", "burn_runway"),
        ("Do you have unit economics documented? (LTV, CAC)", "unit_economics"),
        ("Are you raising? If so, what round?", "fundraising_status"),
    ],
    "19-sales": [
        ("What's your sales motion? (Self-serve, sales-led, hybrid?)", "sales_motion"),
        ("What's your average deal size and sales cycle?", "deal_metrics"),
        ("Do you have a CRM? Which one?", "crm_tool"),
    ],
    "20-customer-success": [
        ("Do you have a customer health scoring model?", "health_scoring"),
        ("Do you run QBRs for key accounts?", "qbr_cadence"),
        ("Who owns expansion and churn prevention?", "cs_ownership"),
    ],
    "21-product-management": [
        ("How do you collect and prioritize feature feedback?", "feedback_process"),
        ("How do you measure product-market fit?", "pmf_measurement"),
        ("What's your release cadence and process?", "release_process"),
    ],
    "22-brand-and-positioning": [
        ("Do you have a formal brand identity and style guide?", "brand_identity"),
        ("What's your positioning vs. top competitors?", "positioning"),
        ("Do you have a voice and tone guide for content?", "voice_tone"),
    ],
    "23-documentation": [
        ("Where do user docs and help center live?", "user_docs"),
        ("Do you have API docs? (If applicable)", "api_docs"),
        ("How do you maintain internal runbooks?", "internal_docs"),
    ],
    "24-competitive-intelligence": [
        ("How do you track competitor moves?", "competitor_tracking"),
        ("Do you run win/loss interviews?", "win_loss"),
        ("Do you have sales battlecards?", "battlecards"),
    ],
    "25-data-and-ai": [
        ("Do you have a data warehouse or pipeline?", "data_architecture"),
        ("What AI/ML features are you building or considering?", "ai_features"),
        ("How do you manage AI costs?", "ai_costs"),
    ],
    "26-people-and-culture": [
        ("What are your company values? How are they documented?", "values"),
        ("What's your performance review process?", "performance_process"),
        ("What's your remote work policy?", "remote_policy"),
    ],
}


def clear_screen():
    os.system("cls" if os.name == "nt" else "clear")


def print_banner():
    banner = """
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║              🚀  SaaS Playbook — Setup Wizard  🚀           ║
║                                                              ║
║   The complete operating system for your SaaS company.       ║
║   Let's personalize it for your startup.                     ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
"""
    print(banner)


def ask(question, required=True, multiline=False):
    print(f"\n  {question}")
    if multiline:
        print("  (Enter a blank line when done)")
        lines = []
        while True:
            line = input("  > ")
            if line.strip() == "":
                if lines or not required:
                    break
                print("  (Please enter at least one line)")
                continue
            lines.append(line)
        return "\n".join(lines)
    else:
        while True:
            answer = input("  > ").strip()
            if answer or not required:
                return answer
            print("  (This field is required)")


def ask_choice(question, options):
    print(f"\n  {question}")
    for key, label in options.items():
        print(f"    {key}) {label}")
    while True:
        choice = input("  > ").strip()
        if choice in options:
            return choice
        print(f"  (Please enter one of: {', '.join(options.keys())})")


def generate_company_profile(profile):
    """Generate the company-profile.md at repo root."""
    content = f"""# Company Profile — {profile['name']}

> Generated by SaaS Playbook setup on {datetime.now().strftime('%Y-%m-%d')}

## Overview

**Company Name:** {profile['name']}
**Tagline:** {profile.get('tagline', 'TBD')}
**Founded:** {datetime.now().strftime('%Y')}

## Product Description

{profile['description']}

## Target Customer

{profile['target_customer']}

## Problem Statement

{profile['problem']}

## Solution

{profile['solution']}

## Revenue Model

{profile['revenue_model']}

## Current Stage

{STAGE_LABELS.get(profile['stage'], profile['stage']).title()}

## Team

**Team Size:** {profile['team_size']}
**Founder Technical?** {profile.get('technical', 'Unknown')}

## Budget & Runway

{profile['budget']}

## Key Differentiators

{profile.get('differentiators', 'TBD')}

---

*This profile is referenced by every department in the playbook. Update it as your company evolves.*
"""
    filepath = REPO_ROOT / "company-profile.md"
    filepath.write_text(content)
    print(f"\n  ✅ Created {filepath.relative_to(REPO_ROOT)}")
    return filepath


def generate_department_doc(dept_id, dept_name, profile, answers):
    """Generate a README.md in the department folder summarizing the department plan."""
    answers_section = ""
    for q, key in DEPARTMENT_QUESTIONS.get(dept_id, []):
        if key in answers:
            answers_section += f"### {q}\n\n{answers[key]}\n\n"

    content = f"""# {dept_name} — {profile['name']}

> Department plan generated by SaaS Playbook setup on {datetime.now().strftime('%Y-%m-%d')}

## Company Context

**Product:** {profile['name']} — {profile['description'][:200]}
**Stage:** {STAGE_LABELS.get(profile['stage'], profile['stage']).title()}
**Target Customer:** {profile['target_customer']}

## Department Answers

{answers_section}

## Subfolders

Each subfolder contains an `INSTRUCTIONS.md` with detailed guidance. Work through them in order:

"""
    for dept_path, name, subfolders in DEPARTMENTS:
        if dept_path == dept_id:
            for sf in subfolders:
                content += f"- [`{sf}/`]({sf}/) — See INSTRUCTIONS.md\n"
            break

    content += f"""
## Next Steps

1. Work through each subfolder's INSTRUCTIONS.md
2. Generate the documents specified in each instruction file
3. Review and customize the generated content
4. Update this README as plans evolve

---

*Part of the [SaaS Playbook](../README.md) for {profile['name']}.*
"""
    dept_folder = REPO_ROOT / dept_id
    filepath = dept_folder / "README.md"
    filepath.write_text(content)
    print(f"  ✅ Created {filepath.relative_to(REPO_ROOT)}")


def run_department(dept_id, dept_name, profile):
    """Run the interactive Q&A for a department."""
    questions = DEPARTMENT_QUESTIONS.get(dept_id, [])
    if not questions:
        return {}

    print(f"\n{'='*60}")
    print(f"  📂 {dept_name}")
    print(f"{'='*60}")
    print(f"\n  Let's plan the {dept_name.lower()} department for {profile['name']}.")

    answers = {}
    for question, key in questions:
        answers[key] = ask(question, required=False)
        if not answers[key]:
            answers[key] = "To be determined"

    return answers


def save_state(profile, completed_departments):
    """Save progress so the user can resume later."""
    state = {
        "profile": profile,
        "completed_departments": completed_departments,
        "last_updated": datetime.now().isoformat(),
    }
    state_file = REPO_ROOT / ".saas-playbook-state.json"
    state_file.write_text(json.dumps(state, indent=2))


def load_state():
    """Load saved progress."""
    state_file = REPO_ROOT / ".saas-playbook-state.json"
    if state_file.exists():
        return json.loads(state_file.read_text())
    return None


def main():
    clear_screen()
    print_banner()

    state = load_state()
    if state:
        print("  📋 Found saved progress from a previous session.")
        resume = ask("Resume where you left off? (yes/no)")
        if resume.lower() in ("yes", "y"):
            profile = state["profile"]
            completed = set(state["completed_departments"])
            print(f"\n  Resuming setup for {profile['name']}...")
        else:
            profile = None
            completed = set()
    else:
        profile = None
        completed = set()

    if profile is None:
        print("\n  Let's start by learning about your SaaS.\n")

        profile = {}
        profile["name"] = ask("What is the name of your SaaS company?")
        profile["description"] = ask(
            "Describe your product in your own words. What does it do?",
            multiline=True,
        )
        profile["target_customer"] = ask(
            "Who is your target customer? (e.g., 'small business owners', 'enterprise DevOps teams')"
        )
        profile["problem"] = ask(
            "What specific problem does it solve?",
            multiline=True,
        )
        profile["solution"] = ask(
            "How does your product solve this problem?",
            multiline=True,
        )
        profile["revenue_model"] = ask(
            "How do you plan to make money? (subscription, usage-based, freemium, etc.)"
        )
        profile["stage"] = ask_choice(
            "What stage are you at?",
            {
                "1": "Just an idea",
                "2": "Building the MVP",
                "3": "Launched, finding product-market fit",
                "4": "Growing, scaling acquisition",
                "5": "Scaling the business",
            },
        )
        profile["team_size"] = ask("What's your team size? (e.g., 'solo', '3 people', '15 people')")
        profile["budget"] = ask(
            "What's your budget/runway situation? (bootstrapped, pre-seed, seed, etc.)"
        )
        profile["differentiators"] = ask(
            "What makes you different from existing solutions?",
            multiline=True,
            required=False,
        )

        generate_company_profile(profile)
        completed = set()
        save_state(profile, list(completed))

    print(f"\n\n{'='*60}")
    print(f"  Now let's plan each department for {profile['name']}.")
    print(f"  You can skip any department by pressing Enter on all questions.")
    print(f"  Your progress is saved automatically.")
    print(f"{'='*60}")

    for dept_id, dept_name, subfolders in DEPARTMENTS:
        if dept_id in completed:
            print(f"\n  ⏭️  Skipping {dept_name} (already completed)")
            continue

        skip = ask(f"\nReady to plan {dept_name}? (yes/skip/quit)", required=False)
        if skip.lower() in ("quit", "q", "exit"):
            print(f"\n  💾 Progress saved. Run `python3 setup.py` to resume.\n")
            save_state(profile, list(completed))
            sys.exit(0)
        if skip.lower() in ("skip", "s", ""):
            print(f"  ⏭️  Skipping {dept_name}")
            continue

        answers = run_department(dept_id, dept_name, profile)
        generate_department_doc(dept_id, dept_name, profile, answers)
        completed.add(dept_id)
        save_state(profile, list(completed))

    print(f"\n\n{'='*60}")
    print(f"  🎉 Setup complete for {profile['name']}!")
    print(f"{'='*60}")
    print(f"""
  Your SaaS playbook is ready. Here's what to do next:

  1. Browse each department folder and read the INSTRUCTIONS.md files
  2. Use an AI agent to help you fill out the detailed documents:

     Tell your agent:
     "Read AGENTS.md and help me populate the remaining folders
      for {profile['name']}."

  3. Review and customize all generated content
  4. Commit your personalized playbook to your own private repo

  Happy building! 🚀
""")


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n  💾 Progress saved. Run `python3 setup.py` to resume.\n")
        sys.exit(0)
