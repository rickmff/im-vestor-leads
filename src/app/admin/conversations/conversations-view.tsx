"use client";

import { format } from "date-fns";
import { TrashIcon } from "lucide-react";
import { useCallback, useEffect, useState, useTransition } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { getDisplayName } from "@/lib/messages/display-name";
import { cn } from "@/lib/utils";
import {
	type AdminConversationItem,
	type AdminMessageItem,
	addBannedWord,
	deleteMessage,
	getConversationMessagesAdmin,
	listAllConversations,
	removeBannedWord,
} from "./actions";

type BannedWord = { id: string; word: string; createdAt: Date };

type Props = {
	initialConversations: AdminConversationItem[];
	initialBannedWords: BannedWord[];
};

export function AdminConversationsView({
	initialConversations,
	initialBannedWords,
}: Props) {
	const [conversations, setConversations] =
		useState<AdminConversationItem[]>(initialConversations);
	const [search, setSearch] = useState("");
	const [selectedId, setSelectedId] = useState<string | null>(null);
	const [messages, setMessages] = useState<AdminMessageItem[] | null>(null);
	const [bannedWords, setBannedWords] =
		useState<BannedWord[]>(initialBannedWords);
	const [newWord, setNewWord] = useState("");
	const [wordPending, startWord] = useTransition();

	useEffect(() => {
		const q = search.trim();
		const t = window.setTimeout(async () => {
			const result = await listAllConversations({ search: q || undefined });
			if (result.ok) setConversations(result.data.items);
		}, 250);
		return () => window.clearTimeout(t);
	}, [search]);

	const openConversation = useCallback(async (id: string) => {
		setSelectedId(id);
		setMessages(null);
		const result = await getConversationMessagesAdmin({ conversationId: id });
		if (result.ok) setMessages(result.data);
	}, []);

	const onDeleteMessage = useCallback(async (messageId: string) => {
		const result = await deleteMessage({ messageId });
		if (!result.ok) {
			toast.error(result.error);
			return;
		}
		toast.success("Message deleted");
		setMessages((prev) =>
			prev ? prev.filter((m) => m.id !== messageId) : prev,
		);
	}, []);

	const onAddWord = useCallback(() => {
		const word = newWord.trim();
		if (!word) return;
		startWord(async () => {
			const result = await addBannedWord({ word });
			if (!result.ok) {
				toast.error(result.error);
				return;
			}
			setBannedWords((prev) => [
				{ id: result.data.id, word: result.data.word, createdAt: new Date() },
				...prev,
			]);
			setNewWord("");
		});
	}, [newWord]);

	const onRemoveWord = useCallback(async (id: string) => {
		const result = await removeBannedWord({ id });
		if (!result.ok) {
			toast.error(result.error);
			return;
		}
		setBannedWords((prev) => prev.filter((w) => w.id !== id));
	}, []);

	return (
		<div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
			<div className="grid grid-cols-1 gap-4 md:grid-cols-[320px_1fr]">
				<Card className="min-h-[60vh]">
					<CardHeader>
						<CardTitle className="text-base">Conversations</CardTitle>
					</CardHeader>
					<CardContent className="flex flex-col gap-2">
						<Input
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							placeholder="Search by name or email…"
						/>
						<ul className="flex flex-col gap-1 pt-2">
							{conversations.length === 0 ? (
								<li className="text-sm text-muted-foreground">
									No conversations.
								</li>
							) : (
								conversations.map((c) => {
									const isSelected = c.id === selectedId;
									return (
										<li key={c.id}>
											<button
												type="button"
												onClick={() => openConversation(c.id)}
												className={cn(
													"flex w-full flex-col gap-1 rounded-lg p-2 text-left hover:bg-accent",
													isSelected && "bg-accent",
												)}
											>
												<div className="flex items-center gap-2">
													{c.participants.map((p) => (
														<Badge key={p.id} variant="secondary">
															{getDisplayName(p)}
														</Badge>
													))}
												</div>
												<div className="text-xs text-muted-foreground">
													{c.messageCount} messages ·{" "}
													{format(c.updatedAt, "yyyy-MM-dd HH:mm")}
												</div>
											</button>
										</li>
									);
								})
							)}
						</ul>
					</CardContent>
				</Card>

				<Card className="min-h-[60vh]">
					<CardHeader>
						<CardTitle className="text-base">Messages</CardTitle>
					</CardHeader>
					<CardContent>
						{!selectedId ? (
							<p className="text-sm text-muted-foreground">
								Select a conversation to view its messages.
							</p>
						) : messages === null ? (
							<div className="flex flex-col gap-2">
								{["a", "b", "c", "d"].map((k) => (
									<Skeleton key={k} className="h-12 w-full" />
								))}
							</div>
						) : messages.length === 0 ? (
							<p className="text-sm text-muted-foreground">
								No messages in this conversation.
							</p>
						) : (
							<ul className="flex flex-col gap-3">
								{messages.map((m) => (
									<li
										key={m.id}
										className="group flex items-start gap-3 rounded-lg border border-border p-3"
									>
										<div className="flex flex-1 flex-col">
											<div className="flex items-baseline justify-between">
												<span className="text-sm font-medium">
													{getDisplayName(m.sender)}
												</span>
												<span className="text-[10px] text-muted-foreground">
													{format(m.createdAt, "yyyy-MM-dd HH:mm:ss")}
												</span>
											</div>
											<p className="mt-1 whitespace-pre-wrap text-sm">
												{m.content}
											</p>
										</div>
										<Button
											variant="ghost"
											size="icon"
											onClick={() => onDeleteMessage(m.id)}
										>
											<TrashIcon className="size-4" />
										</Button>
									</li>
								))}
							</ul>
						)}
					</CardContent>
				</Card>
			</div>

			<Card className="h-fit">
				<CardHeader>
					<CardTitle className="text-base">Banned words</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-col gap-3">
					<div className="flex gap-2">
						<Input
							value={newWord}
							onChange={(e) => setNewWord(e.target.value)}
							placeholder="Add a word…"
						/>
						<Button
							onClick={onAddWord}
							disabled={wordPending || newWord.trim().length < 2}
						>
							Add
						</Button>
					</div>
					<ul className="flex flex-col gap-1">
						{bannedWords.length === 0 ? (
							<li className="text-sm text-muted-foreground">No words yet.</li>
						) : (
							bannedWords.map((w) => (
								<li
									key={w.id}
									className="flex items-center justify-between rounded-md border border-border px-3 py-1.5 text-sm"
								>
									<span className="font-mono">{w.word}</span>
									<Button
										variant="ghost"
										size="icon"
										onClick={() => onRemoveWord(w.id)}
									>
										<TrashIcon className="size-3.5" />
									</Button>
								</li>
							))
						)}
					</ul>
				</CardContent>
			</Card>
		</div>
	);
}
