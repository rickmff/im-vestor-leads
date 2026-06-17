import "server-only";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function requireAdmin() {
	const { userId: clerkId } = await auth();
	if (!clerkId) return null;
	const me = await prisma.user.findUnique({
		where: { clerkId },
		select: { id: true, role: true },
	});
	if (me?.role !== "ADMIN") return null;
	return me;
}
