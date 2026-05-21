import { InvestmentRange, Sector, UserRole } from "@/generated/prisma/enums";

export const ROLE_LABELS: Record<UserRole, string> = {
	[UserRole.ENTREPRENEUR]: "Entrepreneur",
	[UserRole.INVESTOR]: "Investor",
};

export const SECTOR_LABELS: Record<Sector, string> = {
	[Sector.TECHNOLOGY]: "Technology",
	[Sector.HEALTHCARE]: "Healthcare",
	[Sector.FINTECH]: "Fintech",
	[Sector.EDTECH]: "EdTech",
	[Sector.CLEANTECH]: "CleanTech",
	[Sector.ECOMMERCE]: "E-Commerce",
	[Sector.SAAS]: "SaaS",
	[Sector.AGRITECH]: "AgriTech",
	[Sector.PROPTECH]: "PropTech",
	[Sector.BIOTECH]: "BioTech",
};

export const INVESTMENT_RANGE_LABELS: Record<InvestmentRange, string> = {
	[InvestmentRange.R_10K_50K]: "€10K–€50K",
	[InvestmentRange.R_50K_200K]: "€50K–€200K",
	[InvestmentRange.R_200K_500K]: "€200K–€500K",
	[InvestmentRange.R_500K_1M]: "€500K–€1M",
	[InvestmentRange.R_1M_5M]: "€1M–€5M",
	[InvestmentRange.R_5M_PLUS]: "€5M+",
};

export const ROLES = Object.values(UserRole);
export const SECTORS = Object.values(Sector);
export const INVESTMENT_RANGES = Object.values(InvestmentRange);

export const COUNTRIES = [
	"Portugal",
	"Spain",
	"France",
	"Germany",
	"UK",
	"Italy",
	"Netherlands",
	"USA",
	"Brazil",
] as const;
