# Stripe Shop Setup

How to create the shop products in Stripe and wire them to this app.

## 1. Get your API keys

1. Stripe Dashboard → toggle **Test mode** (top-right) while developing.
2. **Developers → API keys**.
3. Copy into `.env`:
   - **Secret key** (`sk_test_…`) → `STRIPE_SECRET_KEY`
   - **Publishable key** (`pk_test_…`) → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`

## 2. Create the products + prices

For each product below: **Product catalog → + Add product**, set the name,
choose the pricing type, set amount in **EUR**, save, then open the price and
copy its **Price ID** (`price_…`) into the matching `.env` var.

| Product name        | Pricing type             | Amount (EUR) | `.env` var                          |
| ------------------- | ------------------------ | ------------ | ----------------------------------- |
| Monthly Membership  | Recurring · Monthly      | 19.99        | `STRIPE_PRICE_SUBSCRIPTION_MONTHLY` |
| Annual Membership   | Recurring · Yearly       | 179.88       | `STRIPE_PRICE_SUBSCRIPTION_ANNUAL`  |
| 3 Pokes             | One-time                 | 39.99        | `STRIPE_PRICE_POKE_PACK_3`          |
| 5 Pokes             | One-time                 | 49.99        | `STRIPE_PRICE_POKE_PACK_5`          |
| 10 Pokes            | One-time                 | 69.99        | `STRIPE_PRICE_POKE_PACK_10`         |
| 1 Lead Credit       | One-time                 | 24.99        | `STRIPE_PRICE_LEAD_CREDIT`          |

> Copy the **Price ID** (`price_…`), not the Product ID (`prod_…`).
> The amounts above are the display labels in the shop UI — the amount actually
> charged is whatever the Stripe price says, so keep them in sync (or edit the
> labels in `src/lib/stripe.ts`).

To change the catalog (add/remove products, rename, re-price), edit
`SHOP_PRODUCTS` in `src/lib/stripe.ts` and add a matching env var in
`src/env.ts` + `.env.example`.

## 3. Set up the webhook

The webhook confirms payments server-side. Endpoint: `POST /api/stripe/webhook`.

**Local development** (Stripe CLI):

```bash
stripe login
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

The CLI prints a signing secret (`whsec_…`) → put it in `STRIPE_WEBHOOK_SECRET`.

**Production:** Developers → Webhooks → **Add endpoint**
→ URL `https://<your-domain>/api/stripe/webhook`
→ select events `checkout.session.completed`,
`customer.subscription.updated`, `customer.subscription.deleted`
→ copy the endpoint's signing secret into `STRIPE_WEBHOOK_SECRET`.

## 4. Test

1. `bun dev`, sign in, open `/shop`.
2. Click **Buy now** → Stripe Checkout.
3. Test card: `4242 4242 4242 4242`, any future expiry, any CVC/postal code.
4. After paying you return to `/shop?checkout=success`.

## Fulfillment (granting the purchase)

The webhook (`src/app/api/stripe/webhook/route.ts`) verifies the signature and
credits the buyer based on `productId` (see `PRODUCT_GRANTS` in
`src/lib/stripe.ts`): poke packs add pokes, lead credit adds a credit, and
memberships set `subscriptionPlan`. Duplicate deliveries are deduped via the
`processed_stripe_events` table, so retries never double-grant.

This needs new DB columns (`pokes`, `leadCredits`, `subscriptionPlan`,
`subscriptionStatus`, `stripeCustomerId`) plus the dedup table. Apply the
migration before going live:

```bash
bunx prisma migrate deploy   # applies prisma/migrations/*_shop_fulfillment
```

Recurring memberships grant their initial pokes on
`checkout.session.completed`. Per-cycle top-ups (e.g. "5 pokes/month") are not
handled yet — add an `invoice.paid` handler when you need them.
