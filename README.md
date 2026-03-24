# FlowFund — Fund with Proof, Not Faith

> A decentralized milestone-based funding platform built on Stellar & Soroban

![Uptime](https://img.shields.io/badge/uptime-100%25-brightgreen)
![Network](https://img.shields.io/badge/network-Stellar%20Testnet-blue)
![License](https://img.shields.io/badge/license-MIT-purple)

## Live Demo
👉 [https://flowfund-level6.vercel.app](https://flowfund-level6.vercel.app)

## What is FlowFund?
FlowFund releases payments only when milestones are delivered and verified — trustless, transparent, and on-chain. Creators submit proof, funders approve, and XLM is released automatically.

## Features
- Milestone-based escrow on Stellar/Soroban
- Gasless transactions via Fee Bump sponsorship
- Real-time metrics dashboard
- Sentry error monitoring
- UptimeRobot uptime monitoring
- Supabase real-time database

## Tech Stack
| Layer | Technology |
|---|---|
| Smart Contract | Rust + Soroban |
| Frontend | React + Vite |
| Database | Supabase (PostgreSQL) |
| Blockchain | Stellar Testnet |
| Monitoring | Sentry + UptimeRobot |
| Deployment | Vercel |

## Getting Started

### Prerequisites
- Node.js 18+
- Rust + Soroban CLI
- Freighter Wallet browser extension

### Installation
```bash
# Clone the repo
git clone https://github.com/sayali19425-gif/flowfund-level6.git
cd flowfund-level6

# Install frontend dependencies
cd frontend
npm install

# Copy env file
cp .env.example .env
# Fill in your values in .env
```

### Environment Variables
```env
VITE_SPONSOR_SECRET=your_sponsor_secret_key
VITE_SPONSOR_PUBLIC=your_sponsor_public_key
VITE_HORIZON_URL=https://horizon-testnet.stellar.org
VITE_STELLAR_NETWORK=testnet
VITE_SENTRY_DSN=your_sentry_dsn
```

### Run locally
```bash
cd frontend
npm run dev
```

Visit `http://localhost:5173`

## How it works

1. **Creator** connects Freighter wallet and creates a project with milestones
2. **Funder** funds the project with XLM
3. **Creator** submits proof for each milestone
4. **Funder** approves — XLM released automatically
5. All transactions are gasless via Fee Bump sponsorship

## Advanced Feature — Fee Sponsorship
FlowFund implements Stellar Fee Bump transactions so users never pay gas fees. The sponsor account covers all transaction fees transparently.

## Monitoring
- Error tracking: [Sentry](https://sentry.io)
- Uptime monitoring: [UptimeRobot](https://uptimerobot.com)
- Database indexes on `creator`, `created_at`, `funded`, `completed_at`

## Security
See [SECURITY.md](./SECURITY.md) for full security checklist.

## Architecture
See [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md) for system design.

## License
MIT