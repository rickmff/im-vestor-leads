type DisplayableUser = {
	name?: string | null;
	email?: string | null;
};

export function getDisplayName(user: DisplayableUser | null | undefined) {
	if (!user) return "Unknown user";
	if (user.name && user.name.trim().length > 0) return user.name;
	if (user.email) return user.email;
	return "Unknown user";
}

export function getInitials(name: string) {
	const parts = name.trim().split(/\s+/).slice(0, 2);
	return parts
		.map((p) => p[0]?.toUpperCase() ?? "")
		.join("")
		.slice(0, 2);
}
