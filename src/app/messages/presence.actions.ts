"use server";

import { auth } from "@clerk/nextjs/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const ONLINE_THRESHOLD_MS = 2 * 60 * 1000;

type ActionResult<T> = { ok: true; data: T } | { ok: false; error: string };

export async function heartbeat(): Promise<ActionResult<{ ok: true }>> {
	const { userId: clerkId } = await auth();
	if (!clerkId) return { ok: false, error: "Not authenticated" };

	await prisma.user.update({
		where: { clerkId },
		data: { lastSeenAt: new Date() },
	});
	return { ok: true, data: { ok: true } };
}

const getStatusesSchema = z.object({
	userIds: z.array(z.string().min(1)).max(100),
});

export async function getOnlineStatuses(
	input: z.input<typeof getStatusesSchema>,
): Promise<ActionResult<Record<string, boolean>>> {
	const parsed = getStatusesSchema.safeParse(input);
	if (!parsed.success) return { ok: false, error: "Invalid input" };

	const { userId: clerkId } = await auth();
	if (!clerkId) return { ok: false, error: "Not authenticated" };

	if (parsed.data.userIds.length === 0) return { ok: true, data: {} };

	const users = await prisma.user.findMany({
		where: { id: { in: parsed.data.userIds } },
		select: { id: true, lastSeenAt: true },
	});

	const cutoff = Date.now() - ONLINE_THRESHOLD_MS;
	const out: Record<string, boolean> = {};
	for (const u of users) {
		out[u.id] = u.lastSeenAt ? u.lastSeenAt.getTime() > cutoff : false;
	}
	return { ok: true, data: out };
}
