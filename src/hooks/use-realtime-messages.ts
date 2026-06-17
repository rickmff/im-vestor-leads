"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabase/client";

type RealtimeMessageRow = {
	id: string;
	conversation_id: string;
	sender_id: string;
	content: string;
	created_at: string;
	read_at: string | null;
};

export function useRealtimeMessages(
	conversationId: string | null,
	onInsert: (row: RealtimeMessageRow) => void,
) {
	useEffect(() => {
		if (!conversationId) return;
		const channel = supabase
			.channel(`messages:${conversationId}`)
			.on(
				"postgres_changes",
				{
					event: "INSERT",
					schema: "public",
					table: "messages",
					filter: `conversation_id=eq.${conversationId}`,
				},
				(payload) => onInsert(payload.new as RealtimeMessageRow),
			)
			.subscribe();
		return () => {
			supabase.removeChannel(channel);
		};
	}, [conversationId, onInsert]);
}
