# DEMO INSTRUCTIONS - Boma-Sure MVP

## For Investors/Demo Audience

### What You'll See

A **digital legacy vault platform** with a working **AI Succession Counselor** that helps Kenyan families navigate inheritance law.

### Demo Flow (2-3 minutes)

1. **Landing Page** - Shows the problem (KES 62B in unclaimed assets) and solution
2. **Dashboard** - View asset cards, successor info, liveness status
3. **Counselor** - Ask about M-Pesa claims, probate, Sacco transfers, land succession
4. **AI Response** - Real-time answers powered by Gemini AI

### One-Time Setup (5 minutes)

```bash
# 1. Open terminal in project folder
cd w:\boma sure

# 2. Install dependencies
bun install

# 3. Get free Gemini API key:
#    → Visit https://aistudio.google.com/apikey
#    → Click "Create API Key"
#    → Copy the key

# 4. Configure environment
#    → Create file: .env.local
#    → Add line: VITE_GEMINI_API_KEY=your_key_here

# 5. Start the app
bun run dev

# → Opens at http://localhost:5173
```

### Demo Questions for the Counselor

Try asking these to show the AI's capabilities:

#### M-Pesa Claims
- "How do I claim M-Pesa funds after someone passes away?"
- "What documents do I need to claim M-Pesa?"
- "How long does M-Pesa succession take?"

#### Probate & Succession
- "What is the probate process in Kenya?"
- "How much does probate cost?"
- "What's the difference between probate and letters of administration?"

#### Sacco Beneficiaries
- "How do I add a beneficiary to my Sacco account?"
- "What forms do I need for Sacco succession?"

#### Land Succession
- "What's needed for land title succession?"
- "How does the land registry process work in Kenya?"
- "What is the Land Control Board?"

#### General
- "I don't know where my father's assets are, where do I start?"
- "How long does succession usually take in Kenya?"
- "Is there a simpler way to handle inheritance?"

### Key Features to Highlight

✅ **Problem-Focused**: Addresses KES 62B in unclaimed digital assets
✅ **AI-Powered**: Real-time guidance using Gemini API
✅ **Kenya-Specific**: Trained on Law of Succession Act
✅ **Compassionate UX**: Smooth animations, clear language
✅ **MVP Ready**: Works offline for non-AI features
✅ **Scalable**: Built for Sacco partnerships, UFAA integration

### What's Working Now

- ✅ Chat interface with real AI responses
- ✅ Suggested questions for first-time users
- ✅ Conversation history and context
- ✅ Error handling and clear messaging
- ✅ Responsive mobile-first design

### What's Coming (Phase 3+)

- 📋 Secure document vault
- 🔐 Successor designation & verification
- 💚 Liveness monitoring (dead man's switch)
- 🤖 Automated legal roadmaps
- 🔗 UFAA & ArdhiSasa API integration
- 📊 Dashboard with asset tracking
- 💰 Subscription management

### Tech Stack (Easy to Explain)

- **Frontend**: React + TypeScript (modern, fast, maintainable)
- **Styling**: Tailwind CSS + shadcn-ui (beautiful, accessible)
- **AI**: Google Gemini API (free tier, powerful LLM)
- **Hosting**: Vite (can deploy to Vercel, Netlify, AWS)

### Business Model

| Model | Details |
|-------|---------|
| **B2C** | KES 1,000/year subscription per user |
| **B2B** | API partnerships with Saccos, Insurance companies |
| **Impact** | Preserve generational wealth for 62B+ in unclaimed assets |

### For Investors

- **Problem**: KES 62 Billion dormant due to digital invisibility after death
- **Solution**: AI-mediated succession platform
- **Market**: 5M+ mobile money users in Kenya
- **Revenue**: B2C (individual) + B2B (institutional)
- **Ask**: $15K seed for security compliance, legal expertise

### If API Key Fails

The demo will still show:
1. Landing page with full content
2. Dashboard with mock data
3. Chat interface (with error message about API key)
4. All UI/UX working perfectly

### Resetting Between Demos

```bash
# Refresh the browser page to reset chat history
# Ctrl+R or Cmd+R (clears conversation)
```

### Questions You Might Get

**Q: How is this different from a regular will?**
A: Unlike static wills, this is a "dead man's switch" - it monitors activity and automatically guides successors through Kenyan legal processes.

**Q: What about security?**
A: This MVP focuses on UX validation. Production will have ISO 27001, encryption, and Kenya DPA compliance.

**Q: When can Saccos use this?**
A: Phase 3 includes Sacco pilot with 100 members (3-6 months out).

**Q: How do you handle private keys/PINs?**
A: AWS Secrets Manager encryption - users never share credentials directly.

---

**You're ready to demo! Good luck!** 🚀
