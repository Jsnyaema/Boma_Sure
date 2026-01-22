# Boma-Sure: Digital Legacy Vault & Succession Platform

**Team**: Daraja Nexus | **Category**: WealthTech / Social Impact | **Theme**: Digital Inheritance & Generational Wealth Preservation

---

## Problem Statement

In Kenya, an estimated **KES 62 Billion** sits dormant in Unclaimed Financial Assets (UFAA)—primarily M-Pesa balances, Sacco deposits, and insurance payouts—whose owners have passed away. The core issue is "Digital Invisibility" after death: families remain unaware of digital assets or lack the access credentials to retrieve them. Kenya's legal succession process is slow, expensive, and paper-reliant, often taking years to resolve. This delay forces families into immediate poverty despite having assets, systematically destroying generational wealth among the emerging middle class and "sandwich generation."

## Solution

**Boma-Sure** is a digital "Legacy Vault" and AI-mediated succession platform that bridges digital assets and legal inheritance. Users securely map their financial ecosystem—mobile money accounts, bank details, land titles, Sacco memberships—and designate verified Successors.

### Core Innovation: AI-Mediated Dead Man's Switch

Unlike static wills, Boma-Sure uses **liveness monitoring** (via Google Identity) to track user activity. Upon prolonged inactivity, the system initiates a compassionate, AI-guided protocol. The **"Digital Executor"** (powered by Gemini AI) reaches out to designated successors, providing step-by-step guidance through Kenyan legal hurdles and asset recovery—transforming a traumatic process into a structured, manageable transition.

## Key Features

- **Legacy Vault**: Secure centralized storage for financial asset maps and documents
- **Successor Designation**: Verified beneficiary management with role-based access
- **Liveness Monitoring**: Activity-based "Dead Man's Switch" triggering succession protocol
- **AI Succession Counselor**: Gemini-powered advisor for Kenyan inheritance law guidance
- **Document Management**: Encrypted storage for titles, IDs, and succession documents
- **Automated Legal Guidance**: Step-by-step roadmaps for M-Pesa claims, probate, Sacco transfers, and land succession

## Technology Stack

- **Frontend**: React + TypeScript, Vite, Tailwind CSS, shadcn-ui, Framer Motion
- **AI**: Google Gemini API (free tier) for Succession Counselor
- **Authentication**: Google Identity Services
- **Security**: Encryption for sensitive data
- **Cloud**: AWS S3 (planned), Google Cloud services

## Quick Start

### Prerequisites
- Node.js 16+ (install with [nvm](https://github.com/nvm-sh/nvm))
- Bun package manager (or npm/yarn)
- Google Gemini API Key ([get free key](https://aistudio.google.com/apikey))

### Installation

```sh
# Clone repository
git clone <YOUR_GIT_URL>
cd boma-sure

# Install dependencies
bun install

# Set up environment
cp .env.example .env.local
# Add your VITE_GEMINI_API_KEY to .env.local

# Start development server
bun run dev
```

The application will open at `http://localhost:5173`

## Development

```sh
# Build for production
bun run build

# Preview production build
bun run preview

# Run tests
bun run test

# Run tests in watch mode
bun run test:watch

# Lint code
bun run lint
```

## Project Roadmap

| Phase | Objective | Status |
|-------|-----------|--------|
| **Phase 1** | Secure document vault & successor designation | ✓ In Progress |
| **Phase 2** | AI Succession Counselor integration | ✓ In Progress |
| **Phase 3** | Pilot with 100 Sacco members | Planned |
| **Phase 4** | UFAA API integration for automated asset searches | Planned |
| **Phase 5** | ArdhiSasa land title verification integration | Planned |

## Impact Model

**B2C**: Tiered annual subscription for vault maintenance (KES 1,000/year)

**B2B**: Partnerships with Life Insurance providers and Saccos to reduce unclaimed benefits burden and provide value-added member services

**Social Impact**: Preservation of generational wealth, empowerment of widows and orphans with legal standing to claim rightful assets

## Getting Help

The AI Succession Counselor in the app provides guidance on:
- M-Pesa fund claims after death
- Kenya's Probate process (Law of Succession Act)
- Sacco beneficiary designation
- Land succession and title transfer
- Document requirements for each process

Ask natural questions—the counselor speaks English and Swahili.

## Architecture Notes

- Responsive design optimized for mobile (Kenyan mobile-first usage)
- Framer Motion animations for compassionate UX
- Structured, accessible form components for sensitive information
- Real-time chat interface for counselor interaction

## Security & Compliance

This MVP follows security best practices for handling inheritance data. Production deployment will require:
- ISO 27001 certification
- Encryption of all asset metadata
- Compliance with Kenya's Data Protection Act
- GDPR compliance for diaspora users

## Future Partnerships

We seek collaboration with:
- **Legal-Tech Experts**: Refine automated legal roadmaps
- **Insurance Companies**: API integration for claim automation
- **Kenyan Judiciary**: Compliance with evolving digital standards
- **UFAA**: Asset discovery automation

---

**Built with ❤️ for Kenyan families**
