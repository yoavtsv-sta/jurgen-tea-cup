# Jurgen Tea Cup Co.

The perfect tea cup for Jurgen.

## Quick start (< 10 minutes)

**Prerequisites:** Node.js 20+, npm 10+

```bash
# 1. Clone the repo
git clone <repo-url>
cd jurgen-tea-cup

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Done.

## Scripts

| Command         | Description                        |
| --------------- | ---------------------------------- |
| `npm run dev`   | Start local dev server at :3000    |
| `npm run build` | Production build                   |
| `npm start`     | Start production server            |
| `npm test`      | Run Jest tests                     |
| `npm run lint`  | Run ESLint                         |

## CI/CD

Every push triggers the **CI** workflow (`.github/workflows/ci.yml`):

1. Lint
2. Type-check
3. Tests
4. Production build

Merges to `main` also trigger the **Deploy** workflow (`.github/workflows/deploy.yml`):

- Staging deploy → `staging-jurgen-tea-cup.vercel.app`
- Production deploy → `jurgen-tea-cup.vercel.app` (after staging passes)

### Required GitHub secrets

Set these in **Settings → Secrets and variables → Actions**:

| Secret               | Where to get it                          |
| -------------------- | ---------------------------------------- |
| `VERCEL_TOKEN`       | vercel.com → Account → Settings → Tokens |
| `VERCEL_ORG_ID`      | vercel.com → Team → Settings → General   |
| `VERCEL_PROJECT_ID`  | vercel.com → Project → Settings → General|

## Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Testing:** Jest + React Testing Library
- **Hosting:** Vercel (staging + production)
- **CI:** GitHub Actions
