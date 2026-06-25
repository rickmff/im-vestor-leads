import { redirect } from "next/navigation";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { getOrCreateUser } from "@/lib/user";
import { ProfileForm } from "./profile-form";
import { Wallet } from "./wallet";

export default async function ProfilePage() {
	const user = await getOrCreateUser();
	if (!user) redirect("/sign-in");

	return (
		<div className="mx-auto flex w-full max-w-2xl flex-col gap-6 px-4 py-12">
			<Card>
				<CardHeader>
					<CardTitle>Your profile</CardTitle>
					<CardDescription>
						Manage your account details. Investor fields appear when you select
						the Investor role.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<ProfileForm
						initial={{
							name: user.name ?? "",
							email: user.email,
							country: user.country ?? "",
							role: user.role,
							investmentCapacity: user.investmentCapacity,
							sectors: user.sectors,
							referralCode: user.referralCode,
						}}
					/>
				</CardContent>
			</Card>

			<Wallet
				pokes={user.pokes}
				leadCredits={user.leadCredits}
				subscriptionPlan={user.subscriptionPlan}
				subscriptionStatus={user.subscriptionStatus}
				canManageBilling={Boolean(user.stripeCustomerId)}
			/>
		</div>
	);
}
