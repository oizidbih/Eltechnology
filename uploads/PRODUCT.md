# Product

## Register

product

## Users

Enterprise decision-makers, operations leads, C-suite, and employees across functions. Context: desktop work sessions, often mid-task or mid-meeting. Users range from executives needing a high-level command view to employees interacting with their assigned agent to get work done.

## Product Purpose

NawaahOS is an agentic operating system that replaces forms, workflows, and conventional enterprise software with intelligent domain agents. Every function — HR, finance, projects, compliance — is owned by an agent that learns, adapts, and acts. The operating model shifts from human-fills-form to human-directs-agent. Success looks like: users delegate confidently, agents deliver without hand-holding, and the organization runs faster with less friction.

## Brand Personality

Calm authority. Familiar, not foreign. Frictionless.

Three words: **quiet, capable, inevitable**.

Emotionally: users should feel served without being overwhelmed. The interface should feel like something they already know how to use — closer to ChatGPT than to SAP. Nothing to learn, nothing to fear, everything already in the right place.

## Anti-references

- SAP, Salesforce, ServiceNow, Oracle — dense, form-heavy, label-everywhere UIs
- Monday.com, Jira, ClickUp — card grids, color-coded status noise, workflow diagrams
- Any UI where the first instinct is "where do I click?" rather than "what do I want?"
- Dashboards built from identical metric cards with icons and explainer text

## Design Principles

1. **Agent-first hierarchy.** The agent is the primary surface; settings, forms, and menus are secondary. The chat/command interface takes precedence visually and spatially.
2. **Familiar over novel.** Borrow from interfaces users already trust (ChatGPT, Notion, Linear). Introduce nothing that requires explanation.
3. **Serve without overwhelming.** Show only what is needed for the current moment. Progressive disclosure over information density.
4. **One voice, one surface.** Each agent owns its domain. The UI reflects that containment — no sprawl, no multi-panel confusion.
5. **Invisible infrastructure.** Automation, compliance, and data pipelines should be felt, not seen. Surface outcomes, not mechanisms.

## Accessibility & Inclusion

- WCAG AA compliance required
- RTL layout support required (Arabic locale is active in the codebase — `i18n.ar` must be fully supported)
- Reduced motion: respect `prefers-reduced-motion`
- Color contrast minimum 4.5:1 for body text, 3:1 for UI components
