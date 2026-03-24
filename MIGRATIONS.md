# Database Migrations

## Indexes added for Level 6 performance optimization

Date: 2026-03-24

### Why indexes?
Queries on `projects` table were doing full table scans.
Adding indexes reduces query time from O(n) to O(log n).

### Indexes created

| Index | Column | Purpose |
|---|---|---|
| idx_projects_creator | creator | Fast lookup by wallet address |
| idx_projects_created_at | created_at DESC | Fast date sorting |
| idx_projects_funded | funded | Fast funded project filtering |
| idx_projects_completed_at | completed_at | Fast completion filtering |

### SQL run on Supabase
```sql
CREATE INDEX IF NOT EXISTS idx_projects_creator ON projects(creator);
CREATE INDEX IF NOT EXISTS idx_projects_created_at ON projects(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_projects_funded ON projects(funded);
CREATE INDEX IF NOT EXISTS idx_projects_completed_at ON projects(completed_at);
```