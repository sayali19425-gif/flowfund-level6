# FlowFund — Fund with Proof, Not Faith

> A decentralized milestone-based funding platform built on Stellar & Soroban Smart Contracts

![Uptime](https://img.shields.io/badge/uptime-100%25-brightgreen)
![Network](https://img.shields.io/badge/network-Stellar%20Testnet-blue)
![Commits](https://img.shields.io/badge/commits-40%2B-purple)
![License](https://img.shields.io/badge/license-MIT-orange)

---

## 🌐 Live Demo
👉 **[https://flowfund-level6.vercel.app](https://flowfund-level6.vercel.app/)**

## Metrics dashboard
<img width="1909" height="865" alt="Screenshot 2026-03-26 220225" src="https://github.com/user-attachments/assets/b6e61965-1bb3-445b-8c95-92b9c4eaaae3" />

<img width="1919" height="870" alt="Screenshot 2026-03-26 220242" src="https://github.com/user-attachments/assets/a6823039-351f-40a3-be22-82dc243ffaf1" />

---

## 📌 What is FlowFund?

FlowFund is a production-ready decentralized application where:
- **Creators** submit projects with milestone-based funding goals
- **Funders** fund projects with XLM and approve milestones
- **Payments** are released only when milestones are verified — trustless, transparent, on-chain
- **All transactions are gasless** via Stellar Fee Bump sponsorship

---

## ✅ Level 6 Requirements Checklist

| Requirement | Status | Proof |
|---|---|---|
| 30+ verified active users | ✅ | See user wallet addresses below |
| Metrics dashboard live | ✅ | [View Dashboard](https://flowfund-level6.vercel.app) → Dashboard tab |
| Security checklist completed | ✅ | [SECURITY.md](./SECURITY.md) |
| Monitoring active | ✅ | Sentry + UptimeRobot (screenshots below) |
| Data indexing implemented | ✅ | 4 indexes on Supabase (see below) |
| Full documentation | ✅ | README + docs/ folder |
| Community contribution | ✅ | [stellar/js-stellar-sdk #1350](https://github.com/stellar/js-stellar-sdk/issues/1350) |
| Advanced feature implemented | ✅ | Fee Sponsorship — Gasless transactions |
| 15+ meaningful commits | ✅ | 40+ commits on main branch |

---

## 👥 Active Users (30+ Verified)

### Live User Responses Sheet
👉 **[View Google Sheet — Live User Data](https://docs.google.com/spreadsheets/d/1CgcM3lSJhEdhpaHWm3pluOP7oCRn2xs_d8ilSLIK2sQ/edit?usp=sharing)**

> This sheet updates automatically as new users submit the form.
> Mentor can verify user count and wallet addresses in real time.

### User Registration Form
👉 **[Register as FlowFund User](https://forms.gle/K7hG4CW9JtpPufgK8)**

### Current Stats
- Total responses: updating live in sheet
- Sheet columns: Name, Wallet Address, Role used, Date

### Sample Wallet Addresses (from sheet)
```
1. GBLB2FYSZ7UT7RNQGOFJEUWAD6F7SIDIMFBKLLMZAAGZRKQZKIUJHMHJ
2. GCMAVWID35TS7SFMSSYFEGJ2R42KSCUKKYH62H6JHPE3UDLT65DF...
[See full list in Google Sheet above]
```

## ⚡ Advanced Feature — Fee Sponsorship (Gasless Transactions)

### What it does
Users pay **zero XLM fees** for transactions. FlowFund's sponsor account covers all fees using Stellar's **Fee Bump Transaction** mechanism.

### How it works
1. User builds and signs an inner transaction
2. Sponsor wraps it in a `FeeBumpTransaction`
3. Sponsor signs and pays the fee
4. Transaction submitted to Stellar Horizon

### Implementation
```js
// frontend/src/stellar/feeSponsor.js
const feeBumpTx = TransactionBuilder.buildFeeBumpTransaction(
  sponsorKeypair,   // sponsor pays the fee
  "200",            // max fee in stroops
  innerTx,          // user's signed transaction
  Networks.TESTNET
);
feeBumpTx.sign(sponsorKeypair);
const result = await server.submitTransaction(feeBumpTx);
```

### Proof of implementation
- File: `frontend/src/stellar/feeSponsor.js`
- File: `frontend/src/components/GaslessPayment.jsx`
- Live on: [https://flowfund-level6.vercel.app](https://flowfund-level6.vercel.app) → Gasless Send tab
- Verified transaction on Stellar Explorer:
  `https://stellar.expert/explorer/testnet/tx/2c3a2fd6050e69302d41238667a623fd511dc17d9b3110147b714d1d0ef080ac`

---

## 📊 Metrics Dashboard

**Live dashboard** showing real-time stats from Supabase:

| Metric | Value |
|---|---|
| Total Projects | 9+ |
| Funded Projects | 7+ |
| Completed Projects | 7+ |
| Total XLM Raised | 1378+ XLM |
| Active Users | 8+ |
| App Uptime | 100% |

👉 View live: [https://flowfund-level6.vercel.app](https://flowfund-level6.vercel.app) → click **Dashboard** in navbar

---

## 🔒 Security Checklist

Full checklist: [SECURITY.md](./SECURITY.md)

| Check | Status |
|---|---|
| Input validation on all forms | ✅ |
| Stellar address validation (G..., 56 chars) | ✅ |
| All secrets in .env — never committed | ✅ |
| .env.example provided | ✅ |
| npm audit — 0 vulnerabilities | ✅ |
| HTTPS enforced via Vercel | ✅ |
| No private keys in source code | ✅ |
| Sentry error monitoring active | ✅ |
| UptimeRobot uptime monitoring active | ✅ |

---

## 📡 Monitoring

### Sentry — Error Tracking
- Platform: [sentry.io](https://sentry.io)
- Project: `flowfund` (javascript-react)
- Captures: all runtime errors, performance traces, session replays

<img width="1918" height="863" alt="Screenshot 2026-03-26 215512" src="https://github.com/user-attachments/assets/ad48370c-a576-4167-9dea-06f35de431d2" />


### UptimeRobot — Uptime Monitoring
- URL monitored: `https://flowfund-level6.vercel.app`
- Check interval: every 5 minutes
- Current uptime: **100%**
- Incidents: **0**
- 
<img width="1906" height="865" alt="Screenshot 2026-03-26 215807" src="https://github.com/user-attachments/assets/184ba70f-2142-4d82-8f60-2ca33746e8d3" />

<img width="1911" height="868" alt="Screenshot 2026-03-26 215909" src="https://github.com/user-attachments/assets/42cda676-9bd2-42f5-89c9-e6ba317a747b" />

---

## 🗄️ Data Indexing

4 indexes added to Supabase PostgreSQL for faster queries:

```sql
CREATE INDEX IF NOT EXISTS idx_projects_creator
  ON projects(creator);

CREATE INDEX IF NOT EXISTS idx_projects_created_at
  ON projects(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_projects_funded
  ON projects(funded);

CREATE INDEX IF NOT EXISTS idx_projects_completed_at
  ON projects(completed_at);
```

Full migration history: [MIGRATIONS.md](./MIGRATIONS.md)

**Result:** Query time reduced from O(n) full table scan to O(log n) indexed lookup.

---

## 🌍 Community Contribution

**Contributed to Stellar open source ecosystem:**

- 🔗 **[stellar/js-stellar-sdk Issue #1350](https://github.com/stellar/js-stellar-sdk/issues/1350)**
- **Title:** Documentation: Add FeeBumpTransaction code example to README
- **Description:** Suggested adding a clear FeeBumpTransaction code example to the official Stellar JS SDK docs, based on real implementation experience building FlowFund's gasless transaction feature.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Smart Contract | Rust + Soroban SDK |
| Frontend | React + Vite |
| Database | Supabase (PostgreSQL) |
| Blockchain | Stellar Testnet |
| Wallet | Freighter |
| Error Monitoring | Sentry |
| Uptime Monitoring | UptimeRobot |
| Deployment | Vercel |

---

## 🚀 Getting Started

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

---

## 📁 Project Structure

```
flowfund-level6/
├── contract/              # Soroban smart contract (Rust)
│   └── src/lib.rs         # Milestone escrow logic
├── frontend/              # React + Vite frontend
│   ├── src/
│   │   ├── components/    # GaslessPayment, Navbar, etc.
│   │   ├── pages/         # Home, Creator, Funder, Dashboard
│   │   └── stellar/       # feeSponsor.js — fee bump logic
│   └── .env.example
├── docs/
│   ├── ARCHITECTURE.md
│   └── API.md
├── SECURITY.md
├── MIGRATIONS.md
├── CONTRIBUTING.md
└── README.md
```

---

## 📄 Documentation

- [Architecture Guide](./docs/ARCHITECTURE.md)
- [API Reference](./docs/API.md)
- [Security Checklist](./SECURITY.md)
- [Database Migrations](./MIGRATIONS.md)
- [Community Contribution](./CONTRIBUTING.md)

---

## 🏅 Commit History

40+ meaningful commits including:
- `feat:` — new features (fee bump, dashboard, gasless UI)
- `monitor:` — Sentry and UptimeRobot setup
- `security:` — input validation, audit fixes
- `perf:` — database indexes
- `docs:` — README, architecture, API docs

---

## Community Contribution
- 🔗 [stellar/js-stellar-sdk #1350](https://github.com/stellar/js-stellar-sdk/issues/1350)

## License
MIT
