"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import type { ShopCategory, ShopProduct } from "@/lib/stripe";
import { confirmCheckout, createCheckoutSession } from "./actions";

async function confirmAndToast(sessionId: string) {
	for (let attempt = 0; attempt < 4; attempt++) {
		const res = await confirmCheckout(sessionId);
		if (res.status === "fulfilled") {
			toast.success("Payment confirmed — your balance is updated.");
			return;
		}
		if (res.status === "unpaid") {
			toast.error("Payment didn't go through. You weren't charged.");
			return;
		}
		if (res.status === "error") {
			toast.error("Couldn't confirm your purchase — contact support if charged.");
			return;
		}
		await new Promise((r) => setTimeout(r, 1500));
	}
	toast.info("Payment received — updating your balance, refresh in a moment.");
}

const SECTIONS: { category: ShopCategory; title: string }[] = [
	{ category: "subscription", title: "Memberships" },
	{ category: "pokes", title: "Pokes" },
	{ category: "leads", title: "Lead Credits" },
];

export function ShopClient({ products }: { products: ShopProduct[] }) {
	const [loadingId, setLoadingId] = useState<string | null>(null);

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const status = params.get("checkout");
		const sessionId = params.get("session_id");
		if (!status) return;
		window.history.replaceState(null, "", "/shop");
		if (status === "cancelled") {
			toast.info("Checkout cancelled.");
		} else if (status === "success" && sessionId) {
			void confirmAndToast(sessionId);
		}
	}, []);

	async function buy(product: ShopProduct) {
		setLoadingId(product.id);
		try {
			const result = await createCheckoutSession(product.id);
			if (result.ok) {
				window.location.href = result.url;
				return;
			}
			toast.error(result.error);
		} catch {
			toast.error("Something went wrong. Try again.");
		} finally {
			setLoadingId(null);
		}
	}

	return (
		<div className="space-y-10">
			{SECTIONS.map((section) => {
				const items = products.filter((p) => p.category === section.category);
				if (items.length === 0) return null;
				return (
					<section key={section.category} className="space-y-4">
						<h2 className="font-semibold text-muted-foreground text-sm uppercase tracking-wider">
							{section.title}
						</h2>
						<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
							{items.map((product) => {
								const unavailable = !product.priceId;
								const isLoading = loadingId === product.id;
								return (
									<Card key={product.id} className="flex flex-col">
										<CardHeader>
											<CardTitle>{product.name}</CardTitle>
											<CardDescription>{product.description}</CardDescription>
										</CardHeader>
										<CardContent className="flex-grow">
											<p className="font-bold text-2xl tracking-tight">
												{product.priceLabel}
											</p>
										</CardContent>
										<CardFooter>
											<Button
												className="w-full"
												disabled={unavailable || isLoading}
												onClick={() => buy(product)}
											>
												{unavailable
													? "Coming soon"
													: isLoading
														? "Processing…"
														: product.mode === "subscription"
															? "Subscribe"
															: "Buy now"}
											</Button>
										</CardFooter>
									</Card>
								);
							})}
						</div>
					</section>
				);
			})}
		</div>
	);
}
