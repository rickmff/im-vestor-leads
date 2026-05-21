-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ENTREPRENEUR', 'INVESTOR');

-- CreateEnum
CREATE TYPE "Sector" AS ENUM ('TECHNOLOGY', 'HEALTHCARE', 'FINTECH', 'EDTECH', 'CLEANTECH', 'ECOMMERCE', 'SAAS', 'AGRITECH', 'PROPTECH', 'BIOTECH');

-- CreateEnum
CREATE TYPE "InvestmentRange" AS ENUM ('10K-50K', '50K-200K', '200K-500K', '500K-1M', '1M-5M', '5M+');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "clerkId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "country" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'ENTREPRENEUR',
    "referralCode" TEXT NOT NULL,
    "referredByCode" TEXT,
    "investmentCapacity" "InvestmentRange",
    "sectors" "Sector"[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_clerkId_key" ON "users"("clerkId");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_referralCode_key" ON "users"("referralCode");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_referredByCode_fkey" FOREIGN KEY ("referredByCode") REFERENCES "users"("referralCode") ON DELETE SET NULL ON UPDATE CASCADE;
