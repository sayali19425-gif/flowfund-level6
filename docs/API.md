# FlowFund API Reference

## Supabase Tables

### projects
| Column | Type | Description |
|---|---|---|
| id | int8 | Primary key |
| creator | text | Stellar wallet address |
| title | text | Project title |
| description | text | Project description |
| milestones | jsonb | Array of milestone objects |
| total_xlm | int8 | Total XLM amount |
| funded | boolean | Whether project is funded |
| completed_at | date | Completion date |
| created_at | date | Creation date |

## Stellar Operations

### Fee Bump Transaction
```js
// Wrap any transaction in a fee bump
const feeBumpTx = TransactionBuilder.buildFeeBumpTransaction(
  sponsorKeypair,  // pays the fee
  "200",           // max fee in stroops
  innerTx,         // user's signed transaction
  Networks.TESTNET
)
```

### Payment Operation
```js
Operation.payment({
  destination: recipientPublicKey,
  asset: Asset.native(),  // XLM
  amount: "10",
})
```

## Soroban Contract Functions

### create_project
```rust
pub fn create_project(
  env: Env,
  creator: Address,
  funder: Address,
  milestone_labels: Vec<String>,
  total_xlm: i128,
) -> u64
```

### submit_milestone
```rust
pub fn submit_milestone(
  env: Env,
  project_id: u64,
  milestone_idx: u32,
  proof_hash: String,
)
```

### approve_milestone
```rust
pub fn approve_milestone(
  env: Env,
  project_id: u64,
  milestone_idx: u32,
)
```

### get_project
```rust
pub fn get_project(env: Env, project_id: u64) -> Project
```