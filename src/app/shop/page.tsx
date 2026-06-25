import { auth } from "@clerk/nextjs/server";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { SHOP_PRODUCTS } from "@/lib/stripe";
import { ShopClient } from "./shop-client";

export const metadata: Metadata = {
	title: "Shop",
	description: "Buy pokes, lead credits and memberships.",
};

export default async function ShopPage() {
	const { userId } = await auth();
	if (!userId) redirect("/sign-in");

	return (
		<main className="mx-auto w-full max-w-6xl px-4 py-10">
			<header className="mb-8 space-y-2">
				<h1 className="font-bold text-3xl tracking-tight">Shop</h1>
				<p className="text-muted-foreground">
					Buy pokes, unlock leads, or upgrade your membership.
				</p>
			</header>
			<ShopClient products={SHOP_PRODUCTS} />
		</main>
	);
}
