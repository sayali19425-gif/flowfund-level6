# FlowFund Architecture

## System Overview
```
User Browser
     │
     ▼
React Frontend (Vite)
     │
     ├── Supabase (PostgreSQL) — project data
     ├── Stellar Horizon API — blockchain transactions  
     └── Soroban Smart Contract — milestone escrow logic
```

## Components

### Smart Contract (contract/)
- Built with Rust + Soroban SDK
- Runs on Stellar Testnet
- Handles: create_project, submit_milestone, approve_milestone, reject_milestone

### Frontend (frontend/)
- React + Vite
- Pages: Home, Creator, Funder, History, Dashboard, Gasless Send
- Real-time updates via Supabase subscriptions

### Fee Sponsorship
- Sponsor account pays all XLM fees
- User signs inner transaction
- Sponsor wraps in FeeBumpTransaction
- Users pay zero gas fees

### Database (Supabase)
- Table: projects
- Indexes: creator, created_at, funded, completed_at
- Real-time subscriptions for live updates

## Data Flow

1. Creator creates project → saved to Supabase + Soroban contract
2. Funder funds project → Stellar payment transaction
3. Creator submits milestone proof → Supabase update
4. Funder approves → XLM released via Soroban contract
5. All transactions wrapped in Fee Bump → gasless for users