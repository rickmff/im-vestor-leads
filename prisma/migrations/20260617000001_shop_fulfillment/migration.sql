-- Shop / Stripe fulfillment fields on users
ALTER TABLE "users" ADD COLUMN "pokes" INTEGER NOT NULL DEFAULT 1;
ALTER TABLE "users" ADD COLUMN "leadCredits" INTEGER NOT NULL DEFAULT 0;
ALTER TABLE "users" ADD COLUMN "subscriptionPlan" TEXT;
ALTER TABLE "users" ADD COLUMN "subscriptionStatus" TEXT;
ALTER TABLE "users" ADD COLUMN "stripeCustomerId" TEXT;

CREATE UNIQUE INDEX "users_stripeCustomerId_key" ON "users"("stripeCustomerId");

-- Idempotency guard for Stripe webhook deliveries
CREATE TABLE "processed_stripe_events" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "processed_stripe_events_pkey" PRIMARY KEY ("id")
);
