import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/messages/display-name";
import { cn } from "@/lib/utils";

type UserAvatarProps = {
	name: string;
	imageUrl?: string | null;
	isOnline?: boolean;
	size?: "sm" | "md" | "lg";
	className?: string;
};

const sizeClass = {
	sm: "size-8",
	md: "size-10",
	lg: "size-12",
};

export function UserAvatar({
	name,
	imageUrl,
	isOnline,
	size = "md",
	className,
}: UserAvatarProps) {
	return (
		<div className={cn("relative inline-block shrink-0", className)}>
			<Avatar className={sizeClass[size]}>
				{imageUrl ? <AvatarImage src={imageUrl} alt={name} /> : null}
				<AvatarFallback>{getInitials(name) || "?"}</AvatarFallback>
			</Avatar>
			{isOnline ? (
				<span className="absolute right-0 bottom-0 size-2.5 rounded-full border-2 border-card bg-emerald-500" />
			) : null}
		</div>
	);
}
