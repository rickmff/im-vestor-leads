import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { SignInForm } from "./sign-in-form";

export default function SignInPage() {
	return (
		<div className="mx-auto flex w-full max-w-md flex-1 items-center px-4 py-12">
			<Card className="w-full">
				<CardHeader>
					<CardTitle>Sign in</CardTitle>
					<CardDescription>Welcome back to IM-VESTOR LEADS.</CardDescription>
				</CardHeader>
				<CardContent>
					<SignInForm />
				</CardContent>
			</Card>
		</div>
	);
}
