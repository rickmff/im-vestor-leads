"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
	type ConversationListItem,
	getConversations,
} from "@/app/messages/actions";
import { ChatPanel } from "@/components/messages/chat-panel";
import { ConversationList } from "@/components/messages/conversation-list";
import { useOnlineStatuses } from "@/hooks/use-online-statuses";
import { usePresenceHeartbeat } from "@/hooks/use-presence-heartbeat";
import { useRealtimeConversations } from "@/hooks/use-realtime-conversations";
import { cn } from "@/lib/utils";

type Props = {
	myUserId: string;
	initialConversationId: string | null;
};

export function MessagesView({ myUserId, initialConversationId }: Props) {
	const [conversations, setConversations] = useState<
		ConversationListItem[] | null
	>(null);
	const [selectedId, setSelectedId] = useState<string | null>(
		initialConversationId,
	);

	usePresenceHeartbeat();

	const refreshConversations = useCallback(async () => {
		const result = await getConversations();
		if (result.ok) setConversations(result.data);
	}, []);

	useEffect(() => {
		void refreshConversations();
	}, [refreshConversations]);

	const conversationIds = useMemo(
		() => conversations?.map((c) => c.id) ?? [],
		[conversations],
	);
	useRealtimeConversations(conversationIds, () => {
		void refreshConversations();
	});

	const otherIds = useMemo(
		() =>
			(conversations ?? [])
				.map((c) => c.other?.id)
				.filter((id): id is string => !!id),
		[conversations],
	);
	const onlineStatuses = useOnlineStatuses(otherIds);

	const selected = useMemo(
		() => conversations?.find((c) => c.id === selectedId) ?? null,
		[conversations, selectedId],
	);

	const onMarkedAsRead = useCallback(() => {
		void refreshConversations();
	}, [refreshConversations]);

	return (
		<div className="grid h-full grid-cols-1 gap-4 rounded-2xl border border-border bg-card p-3 md:grid-cols-[320px_1fr]">
			<aside
				className={cn(
					"min-h-0 border-border md:border-r md:pr-3",
					selectedId ? "hidden md:flex md:flex-col" : "flex flex-col",
				)}
			>
				<ConversationList
					conversations={conversations}
					selectedId={selectedId}
					onSelect={setSelectedId}
					onlineStatuses={onlineStatuses}
				/>
			</aside>

			<section
				className={cn(
					"min-h-0",
					selectedId ? "flex flex-col" : "hidden md:flex md:flex-col",
				)}
			>
				{selected ? (
					<ChatPanel
						key={selected.id}
						conversationId={selected.id}
						myUserId={myUserId}
						other={selected.other}
						isOtherOnline={
							selected.other ? !!onlineStatuses[selected.other.id] : false
						}
						onBack={() => setSelectedId(null)}
						onMarkedAsRead={onMarkedAsRead}
					/>
				) : (
					<div className="flex h-full items-center justify-center text-center text-sm text-muted-foreground">
						Select a conversation to start messaging.
					</div>
				)}
			</section>
		</div>
	);
}
