"use client";

import { SignInButton, SignUpButton, useClerk, useUser } from "@clerk/nextjs";
import { LogOutIcon, MoonIcon, SunIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

import { MessagesNavButton } from "@/components/messages/messages-nav-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LanguageSwitcher } from "@/components/ui/language-switcher";

export const Header = () => {
	const router = useRouter();
	const { user, isSignedIn, isLoaded } = useUser();
	const { signOut } = useClerk();
	const { resolvedTheme, setTheme } = useTheme();

	return (
		<header className="mx-auto mb-12 w-full max-w-6xl rounded-3xl border border-border bg-card px-4 py-4 md:rounded-full md:px-6 lg:px-8">
			<div className="flex items-center justify-between">
				{/* Logo */}
				<Link
					href="/"
					className="flex items-center gap-3 transition-all duration-300 hover:scale-105"
				>
					<Image
						src="/logo/imvestor.png"
						alt="Im-Vestor"
						width={24}
						height={24}
					/>
					<span className="hidden text-xl font-bold text-foreground md:block">
						Im-Vestor-Leads
					</span>
				</Link>

				{/* Right side */}
				{isLoaded && isSignedIn ? (
					<div className="flex items-center gap-1">
						<MessagesNavButton />
						<DropdownMenu>
							<DropdownMenuTrigger
								render={
									<Button
										variant="ghost"
										className="flex items-center gap-2"
									/>
								}
							>
								<span className="hidden md:inline">{user?.firstName}</span>
								<Avatar className="size-6">
									<AvatarImage src={user?.imageUrl} alt="Profile" />
									<AvatarFallback>
										<UserIcon className="size-4" />
									</AvatarFallback>
								</Avatar>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuItem onClick={() => router.push("/profile")}>
									<UserIcon className="mr-2 size-4" />
									Profile
								</DropdownMenuItem>
								<DropdownMenuItem
									onClick={() =>
										setTheme(resolvedTheme === "dark" ? "light" : "dark")
									}
								>
									{resolvedTheme === "dark" ? (
										<SunIcon className="mr-2 size-4" />
									) : (
										<MoonIcon className="mr-2 size-4" />
									)}
									{resolvedTheme === "dark" ? "Light mode" : "Dark mode"}
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem
									variant="destructive"
									onClick={() => signOut({ redirectUrl: "/" })}
								>
									<LogOutIcon className="mr-2 size-4" />
									Sign out
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				) : (
					<div className="flex items-center gap-2">
						<LanguageSwitcher />
						<SignInButton>
							<Button variant="ghost" size="sm">
								Sign in
							</Button>
						</SignInButton>
						<SignUpButton>
							<Button size="sm">Sign up</Button>
						</SignUpButton>
					</div>
				)}
			</div>
		</header>
	);
};
