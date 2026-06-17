import { redirect } from "next/navigation";
import { requireAdmin } from "./_admin-guard";
import { listAllConversations, listBannedWords } from "./actions";
import { AdminConversationsView } from "./conversations-view";

export default async function AdminConversationsPage() {
	const admin = await requireAdmin();
	if (!admin) redirect("/");

	const [convosResult, wordsResult] = await Promise.all([
		listAllConversations({}),
		listBannedWords(),
	]);

	return (
		<div className="mx-auto w-full max-w-6xl px-4 py-8">
			<h1 className="mb-6 text-2xl font-bold">Conversations moderation</h1>
			<AdminConversationsView
				initialConversations={convosResult.ok ? convosResult.data.items : []}
				initialBannedWords={wordsResult.ok ? wordsResult.data : []}
			/>
		</div>
	);
}
