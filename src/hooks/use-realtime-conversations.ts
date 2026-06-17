"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabase/client";

type RealtimeMessageRow = {
	id: string;
	conversation_id: string;
	sender_id: string;
	content: string;
	created_at: string;
};

export function useRealtimeConversations(
	conversationIds: string[],
	onIncomingMessage: (row: RealtimeMessageRow) => void,
) {
	const key = conversationIds.slice().sort().join(",");

	useEffect(() => {
		if (!key) return;
		const ids = key.split(",");
		const channel = supabase
			.channel(`conversations-list:${key}`)
			.on(
				"postgres_changes",
				{
					event: "INSERT",
					schema: "public",
					table: "messages",
					filter: `conversation_id=in.(${ids.join(",")})`,
				},
				(payload) => onIncomingMessage(payload.new as RealtimeMessageRow),
			)
			.subscribe();
		return () => {
			supabase.removeChannel(channel);
		};
	}, [key, onIncomingMessage]);
}
