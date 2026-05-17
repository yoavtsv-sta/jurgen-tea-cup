# Jurgen Tea Cup Co.

Product landing page + Stripe Checkout for jurgenteacup.com.

## Quick start (< 10 minutes)

**Prerequisites:** Node.js 20+, npm 10+

```bash
# 1. Clone the repo
git clone <repo-url>
cd jurgen-tea-cup

# 2. Install dependencies
npm install

# 3. Copy env and fill in keys
cp .env.example .env.local

# 4. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Done.

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_STRIPE_PAYMENT_LINK_URL` | Stripe Payment Link URL (from Stripe Dashboard) |
| `STRIPE_SECRET_KEY` | Stripe secret key (for webhook verification) |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret |
| `RESEND_API_KEY` | Resend API key |
| `RESEND_FROM_EMAIL` | Verified sender email address |

See `.env.example` for full instructions.

## Stripe Setup

1. Create product + Payment Link in Stripe Dashboard — price €48, collect email
2. Copy link URL to `NEXT_PUBLIC_STRIPE_PAYMENT_LINK_URL`
3. Add webhook endpoint: `https://your-domain.com/api/webhooks/stripe`, event: `checkout.session.completed`
4. Copy signing secret to `STRIPE_WEBHOOK_SECRET`

## Test Webhooks Locally

```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
stripe trigger checkout.session.completed
```

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
