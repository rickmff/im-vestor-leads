import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { SignUpForm } from "./sign-up-form";

export default function SignUpPage() {
	return (
		<div className="mx-auto w-full max-w-lg px-4 py-12">
			<Card>
				<CardHeader>
					<CardTitle>Create your account</CardTitle>
					<CardDescription>
						Join IM-VESTOR LEADS as an entrepreneur or investor.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<SignUpForm />
				</CardContent>
			</Card>
		</div>
	);
}
