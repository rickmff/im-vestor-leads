"use client";

import { useCallback, useEffect, useState } from "react";
import { getNotificationsUnreadCount } from "@/app/messages/notifications.actions";
import { useRealtimeNotifications } from "./use-realtime-notifications";

export function useUnreadCount(userId: string | null) {
	const [count, setCount] = useState(0);

	const refresh = useCallback(async () => {
		const result = await getNotificationsUnreadCount();
		if (result.ok) setCount(result.data);
	}, []);

	useEffect(() => {
		if (!userId) {
			setCount(0);
			return;
		}
		void refresh();
	}, [userId, refresh]);

	useRealtimeNotifications(
		userId,
		useCallback(() => {
			setCount((c) => c + 1);
		}, []),
	);

	return { count, refresh, setCount };
}
