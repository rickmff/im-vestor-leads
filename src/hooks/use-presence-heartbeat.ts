"use client";

import { useEffect } from "react";
import { heartbeat } from "@/app/messages/presence.actions";

const HEARTBEAT_INTERVAL_MS = 60_000;

export function usePresenceHeartbeat(enabled = true) {
	useEffect(() => {
		if (!enabled) return;
		if (typeof document === "undefined") return;

		const tick = () => {
			if (document.hidden) return;
			void heartbeat();
		};

		tick();
		const id = window.setInterval(tick, HEARTBEAT_INTERVAL_MS);
		return () => window.clearInterval(id);
	}, [enabled]);
}
