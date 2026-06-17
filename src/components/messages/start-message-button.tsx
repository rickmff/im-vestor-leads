"use client";

import { MessageSquareIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";
import { startConversationFromProfile } from "@/app/messages/start.actions";
import { Button } from "@/components/ui/button";

type Props = {
	targetUserId: string;
	label?: string;
	variant?: "default" | "outline" | "secondary" | "ghost";
};

export function StartMessageButton({
	targetUserId,
	label = "Send message",
	variant = "default",
}: Props) {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();

	const onClick = () => {
		startTransition(async () => {
			const result = await startConversationFromProfile({ targetUserId });
			if (!result.ok) {
				toast.error(result.error);
				return;
			}
			router.push(`/messages?c=${result.data.conversationId}`);
		});
	};

	return (
		<Button variant={variant} onClick={onClick} disabled={isPending}>
			<MessageSquareIcon className="mr-2 size-4" />
			{isPending ? "Opening…" : label}
		</Button>
	);
}
