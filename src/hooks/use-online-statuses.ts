"use client";

import { useEffect, useState } from "react";
import { getOnlineStatuses } from "@/app/messages/presence.actions";

const POLL_INTERVAL_MS = 2 * 60 * 1000;

export function useOnlineStatuses(userIds: string[]) {
	const key = userIds.slice().sort().join(",");
	const [statuses, setStatuses] = useState<Record<string, boolean>>({});

	useEffect(() => {
		if (!key) {
			setStatuses({});
			return;
		}

		const ids = key.split(",");
		let cancelled = false;
		const fetchStatuses = async () => {
			const result = await getOnlineStatuses({ userIds: ids });
			if (cancelled) return;
			if (result.ok) setStatuses(result.data);
		};

		void fetchStatuses();
		const id = window.setInterval(fetchStatuses, POLL_INTERVAL_MS);
		return () => {
			cancelled = true;
			window.clearInterval(id);
		};
	}, [key]);

	return statuses;
}
