"use client";

import { MessageSquareIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getMyUserId } from "@/app/messages/notifications.actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useUnreadCount } from "@/hooks/use-unread-count";

export function MessagesNavButton() {
	const [userId, setUserId] = useState<string | null>(null);
	const pathname = usePathname();
	const { count, setCount, refresh } = useUnreadCount(userId);

	useEffect(() => {
		void getMyUserId().then((r) => {
			if (r.ok) setUserId(r.data);
		});
	}, []);

	useEffect(() => {
		if (pathname?.startsWith("/messages")) {
			setCount(0);
			void refresh();
		}
	}, [pathname, setCount, refresh]);

	return (
		<Link
			href="/messages"
			aria-label="Messages"
			className="relative inline-flex"
		>
			<Button variant="ghost" size="icon" render={<span />}>
				<MessageSquareIcon className="size-4" />
			</Button>
			{count > 0 ? (
				<Badge className="pointer-events-none absolute -top-1 -right-1 h-4 min-w-4 justify-center rounded-full px-1 text-[10px]">
					{count > 99 ? "99+" : count}
				</Badge>
			) : null}
		</Link>
	);
}
