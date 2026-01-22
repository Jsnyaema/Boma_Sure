# Boma-Sure MVP Setup Guide

## Quick Start for Developers

### 1. Prerequisites
- **Node.js**: 16+ (install with [nvm](https://github.com/nvm-sh/nvm))
- **Bun Package Manager** (recommended, or use npm/yarn)
- **Git**: For cloning the repository

### 2. Get a Free Gemini API Key

The AI Succession Counselor requires a free Google Gemini API key.

1. Visit [Google AI Studio](https://aistudio.google.com/apikey)
2. Click "Create API Key"
3. Select or create a Google Cloud project
4. Copy the generated API key

### 3. Clone & Setup

```bash
# Clone the repository
git clone <YOUR_GIT_URL>
cd boma-sure

# Install dependencies
bun install

# Create environment file
cp .env.example .env.local

# Edit .env.local and add your Gemini API key
# VITE_GEMINI_API_KEY=your_key_here
```

### 4. Run the Application

```bash
# Start development server
bun run dev

# Opens at http://localhost:5173
```

### 5. Test the AI Counselor

1. Open the Counselor page in the app
2. Try one of the suggested questions or ask your own
3. The AI will provide guidance on Kenyan inheritance law

## Features Implemented

### ✅ Phase 1: Complete
- Project branding and README
- Frontend structure with React + TypeScript
- Component library setup (shadcn-ui)
- Responsive design with Tailwind CSS
- Framer Motion animations

### ✅ Phase 2: AI Counselor (MVP)
- **Gemini Integration**: Uses Google's free-tier Gemini API
- **Conversation History**: Maintains context across messages
- **Kenyan Succession Focus**: System prompt trained on:
  - Law of Succession Act (Kenya)
  - M-Pesa asset succession
  - Probate and Letters of Administration
  - Sacco beneficiary designation
  - Land succession and titles
- **Error Handling**: Clear error messages if API key is missing

## Project Structure

```
src/
├── components/
│   ├── counselor/
│   │   └── ChatInterface.tsx      # AI chat component
│   ├── dashboard/                 # Dashboard components (coming soon)
│   ├── assets/                    # Asset management (coming soon)
│   └── ui/                        # shadcn-ui components
├── services/
│   └── geminiService.ts           # Gemini API integration
├── pages/
│   ├── Counselor.tsx              # Counselor page
│   ├── Dashboard.tsx              # Main dashboard
│   └── Index.tsx                  # Landing page
└── App.tsx
```

## Available Commands

```bash
# Development
bun run dev           # Start dev server
bun run build         # Production build
bun run preview       # Preview production build

# Testing
bun run test          # Run tests once
bun run test:watch    # Run tests in watch mode

# Code Quality
bun run lint          # Check for linting errors
```

## Environment Variables

Create a `.env.local` file with:

```
VITE_GEMINI_API_KEY=your_api_key_here
```

The app will warn you if this is missing when you try to use the counselor.

## AI Counselor Capabilities

The Succession Counselor can help with:

### M-Pesa Claims
- Step-by-step process to claim funds after death
- Required documents and timelines
- Where to visit and what to bring

### Probate Process
- Explanation of Kenya's probate system
- Timeline expectations (6-12 months typical)
- Cost estimates (court + advocate fees)
- When you need probate vs. letters of administration

### Sacco Beneficiaries
- How to designate beneficiaries
- Required documentation
- Nomination form processes
- Distribution percentages

### Land Succession
- Title transfer process
- Land Registry requirements
- Land Control Board role
- Required documents checklist

### General Succession Law
- Kenya Law of Succession Act overview
- Intestate succession rules
- Asset inventory and documentation
- Timeline for various processes

## Troubleshooting

### "API key not configured" Error
1. Check you have `.env.local` file in the root directory
2. Verify the file contains: `VITE_GEMINI_API_KEY=your_key`
3. Restart the dev server with `bun run dev`

### Chat Not Responding
1. Check browser console for error messages
2. Verify Gemini API key is valid at [AI Studio](https://aistudio.google.com/apikey)
3. Check internet connection
4. Try a simple question first: "What is probate?"

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules bun.lockb
bun install
bun run dev
```

## Next Phases (Planned)

### Phase 3: Sacco Pilot
- Document vault storage
- Successor verification
- Liveness monitoring integration

### Phase 4: UFAA Integration
- API bridge with Unclaimed Financial Assets Authority
- Automated asset discovery
- Claim status tracking

### Phase 5: Land Integration
- ArdhiSasa API integration
- Automated land title verification
- Transfer process automation

## Security Notes

This MVP focuses on UX and functionality. Production deployment will require:

- 🔒 Encryption of all asset metadata
- 🔐 ISO 27001 certification
- 📋 Kenya Data Protection Act compliance
- 🌍 GDPR compliance for diaspora users
- 🔑 Secure credential management (AWS Secrets Manager)

## Support

For issues:
1. Check the README.md
2. Review this setup guide
3. Check browser console for error messages
4. Verify Gemini API key configuration

## Contributing

This is an MVP demo. To contribute:
1. Create a feature branch
2. Make your changes
3. Test locally with `bun run dev`
4. Submit a pull request

---

**Built for Kenyan families navigating digital inheritance** ❤️
