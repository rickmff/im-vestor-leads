"use client";

import {
	BellIcon,
	BoldIcon,
	CalendarIcon,
	CreditCardIcon,
	ItalicIcon,
	MailIcon,
	SearchIcon,
	SettingsIcon,
	TerminalIcon,
	UnderlineIcon,
	UserIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { toast } from "sonner";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import {
	Alert,
	AlertAction,
	AlertDescription,
	AlertTitle,
} from "@/components/ui/alert";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
	Avatar,
	AvatarFallback,
	AvatarGroup,
	AvatarGroupCount,
	AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
	Combobox,
	ComboboxContent,
	ComboboxEmpty,
	ComboboxInput,
	ComboboxItem,
	ComboboxList,
} from "@/components/ui/combobox";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from "@/components/ui/command";
import {
	ContextMenu,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuSeparator,
	ContextMenuShortcut,
	ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "@/components/ui/empty";
import {
	Field,
	FieldDescription,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from "@/components/ui/input-group";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from "@/components/ui/input-otp";
import {
	Item,
	ItemActions,
	ItemContent,
	ItemDescription,
	ItemMedia,
	ItemTitle,
} from "@/components/ui/item";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { Label } from "@/components/ui/label";
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarTrigger,
} from "@/components/ui/menubar";
import {
	NativeSelect,
	NativeSelectOption,
} from "@/components/ui/native-select";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { Toaster } from "@/components/ui/sonner";
import { Spinner } from "@/components/ui/spinner";
import { Switch } from "@/components/ui/switch";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

function Section({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col gap-4 border-b border-border py-8">
			<h2 className="text-lg font-semibold tracking-tight">{title}</h2>
			<div className="flex flex-wrap items-start gap-4">{children}</div>
		</section>
	);
}

const FRAMEWORKS = ["Next.js", "Remix", "Astro", "SvelteKit", "Nuxt"];

const chartConfig = {
	desktop: { label: "Desktop", color: "var(--chart-1)" },
	mobile: { label: "Mobile", color: "var(--chart-2)" },
} satisfies ChartConfig;

const chartData = [
	{ month: "Jan", desktop: 186, mobile: 80 },
	{ month: "Feb", desktop: 305, mobile: 200 },
	{ month: "Mar", desktop: 237, mobile: 120 },
	{ month: "Apr", desktop: 73, mobile: 190 },
	{ month: "May", desktop: 209, mobile: 130 },
];

export default function ComponentsTestPage() {
	const [date, setDate] = useState<Date | undefined>(new Date());

	return (
		<TooltipProvider>
			<div className="mx-auto w-full max-w-5xl px-6 py-12">
				<header className="flex flex-col gap-2 pb-4">
					<h1 className="text-3xl font-bold tracking-tight">UI Components</h1>
					<p className="text-muted-foreground">
						Visual test page rendering every component in{" "}
						<Kbd>src/components/ui</Kbd>.
					</p>
				</header>

				<Section title="Button">
					<Button>Default</Button>
					<Button variant="secondary">Secondary</Button>
					<Button variant="destructive">Destructive</Button>
					<Button variant="outline">Outline</Button>
					<Button variant="ghost">Ghost</Button>
					<Button variant="link">Link</Button>
					<Button size="sm">Small</Button>
					<Button size="lg">Large</Button>
					<Button size="icon" aria-label="settings">
						<SettingsIcon />
					</Button>
					<Button disabled>
						<Spinner />
						Loading
					</Button>
				</Section>

				<Section title="Badge">
					<Badge>Default</Badge>
					<Badge variant="secondary">Secondary</Badge>
					<Badge variant="destructive">Destructive</Badge>
					<Badge variant="outline">Outline</Badge>
					<Badge variant="ghost">Ghost</Badge>
				</Section>

				<Section title="Spinner & Skeleton">
					<Spinner className="size-6" />
					<div className="flex items-center gap-3">
						<Skeleton className="size-10 rounded-full" />
						<div className="flex flex-col gap-2">
							<Skeleton className="h-4 w-32" />
							<Skeleton className="h-4 w-24" />
						</div>
					</div>
				</Section>

				<Section title="Input & Textarea">
					<div className="flex w-full max-w-sm flex-col gap-2">
						<Label htmlFor="email">Email</Label>
						<Input id="email" type="email" placeholder="you@example.com" />
					</div>
					<div className="flex w-full max-w-sm flex-col gap-2">
						<Label htmlFor="msg">Message</Label>
						<Textarea id="msg" placeholder="Type your message..." />
					</div>
				</Section>

				<Section title="Input Group & OTP">
					<InputGroup className="max-w-xs">
						<InputGroupAddon>
							<SearchIcon />
						</InputGroupAddon>
						<InputGroupInput placeholder="Search..." />
						<InputGroupAddon align="inline-end">
							<InputGroupButton>Go</InputGroupButton>
						</InputGroupAddon>
					</InputGroup>
					<InputOTP maxLength={6}>
						<InputOTPGroup>
							<InputOTPSlot index={0} />
							<InputOTPSlot index={1} />
							<InputOTPSlot index={2} />
						</InputOTPGroup>
						<InputOTPSeparator />
						<InputOTPGroup>
							<InputOTPSlot index={3} />
							<InputOTPSlot index={4} />
							<InputOTPSlot index={5} />
						</InputOTPGroup>
					</InputOTP>
				</Section>

				<Section title="Native Select & Select">
					<NativeSelect defaultValue="apple">
						<NativeSelectOption value="apple">Apple</NativeSelectOption>
						<NativeSelectOption value="banana">Banana</NativeSelectOption>
						<NativeSelectOption value="cherry">Cherry</NativeSelectOption>
					</NativeSelect>
					<Select defaultValue="apple">
						<SelectTrigger className="w-40">
							<SelectValue placeholder="Pick a fruit" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="apple">Apple</SelectItem>
							<SelectItem value="banana">Banana</SelectItem>
							<SelectItem value="cherry">Cherry</SelectItem>
						</SelectContent>
					</Select>
				</Section>

				<Section title="Combobox">
					<Combobox items={FRAMEWORKS}>
						<ComboboxInput placeholder="Search framework..." className="w-56" />
						<ComboboxContent>
							<ComboboxEmpty>No framework found.</ComboboxEmpty>
							<ComboboxList>
								{FRAMEWORKS.map((f) => (
									<ComboboxItem key={f} value={f}>
										{f}
									</ComboboxItem>
								))}
							</ComboboxList>
						</ComboboxContent>
					</Combobox>
				</Section>

				<Section title="Checkbox, Radio, Switch, Toggle">
					<Label className="flex items-center gap-2">
						<Checkbox defaultChecked />
						Accept terms
					</Label>
					<RadioGroup defaultValue="one" className="w-auto">
						<Label className="flex items-center gap-2">
							<RadioGroupItem value="one" />
							Option one
						</Label>
						<Label className="flex items-center gap-2">
							<RadioGroupItem value="two" />
							Option two
						</Label>
					</RadioGroup>
					<Label className="flex items-center gap-2">
						<Switch defaultChecked />
						Airplane mode
					</Label>
					<Toggle aria-label="Toggle bold">
						<BoldIcon />
					</Toggle>
					<ToggleGroup defaultValue={["bold"]}>
						<ToggleGroupItem value="bold" aria-label="Bold">
							<BoldIcon />
						</ToggleGroupItem>
						<ToggleGroupItem value="italic" aria-label="Italic">
							<ItalicIcon />
						</ToggleGroupItem>
						<ToggleGroupItem value="underline" aria-label="Underline">
							<UnderlineIcon />
						</ToggleGroupItem>
					</ToggleGroup>
				</Section>

				<Section title="Slider & Progress">
					<Slider defaultValue={[50]} className="w-64" />
					<Progress value={60} className="w-64" />
				</Section>

				<Section title="Field">
					<FieldGroup className="max-w-sm">
						<Field>
							<FieldLabel htmlFor="username">Username</FieldLabel>
							<Input id="username" placeholder="shadcn" />
							<FieldDescription>This is your public name.</FieldDescription>
						</Field>
					</FieldGroup>
				</Section>

				<Section title="Avatar">
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<AvatarGroup>
						<Avatar>
							<AvatarFallback>AB</AvatarFallback>
						</Avatar>
						<Avatar>
							<AvatarFallback>CD</AvatarFallback>
						</Avatar>
						<AvatarGroupCount>+3</AvatarGroupCount>
					</AvatarGroup>
				</Section>

				<Section title="Alert">
					<Alert className="max-w-md">
						<TerminalIcon />
						<AlertTitle>Heads up!</AlertTitle>
						<AlertDescription>
							You can add components to your app using the CLI.
						</AlertDescription>
						<AlertAction>
							<Button size="sm" variant="ghost">
								Undo
							</Button>
						</AlertAction>
					</Alert>
					<Alert variant="destructive" className="max-w-md">
						<TerminalIcon />
						<AlertTitle>Error</AlertTitle>
						<AlertDescription>Something went wrong.</AlertDescription>
					</Alert>
				</Section>

				<Section title="Card">
					<Card className="w-80">
						<CardHeader>
							<CardTitle>Create project</CardTitle>
							<CardDescription>Deploy in one click.</CardDescription>
							<CardAction>
								<Button size="icon" variant="ghost" aria-label="settings">
									<SettingsIcon />
								</Button>
							</CardAction>
						</CardHeader>
						<CardContent>
							<Input placeholder="Project name" />
						</CardContent>
						<CardFooter className="justify-between">
							<Button variant="outline">Cancel</Button>
							<Button>Deploy</Button>
						</CardFooter>
					</Card>
				</Section>

				<Section title="Item">
					<Item variant="outline" className="w-80">
						<ItemMedia variant="icon">
							<UserIcon />
						</ItemMedia>
						<ItemContent>
							<ItemTitle>Jane Doe</ItemTitle>
							<ItemDescription>jane@example.com</ItemDescription>
						</ItemContent>
						<ItemActions>
							<Button size="sm" variant="outline">
								View
							</Button>
						</ItemActions>
					</Item>
				</Section>

				<Section title="Empty">
					<Empty className="w-80 border">
						<EmptyHeader>
							<EmptyMedia variant="icon">
								<MailIcon />
							</EmptyMedia>
							<EmptyTitle>No messages</EmptyTitle>
							<EmptyDescription>
								You have no new messages right now.
							</EmptyDescription>
						</EmptyHeader>
						<EmptyContent>
							<Button size="sm">Refresh</Button>
						</EmptyContent>
					</Empty>
				</Section>

				<Section title="Accordion">
					<Accordion className="w-96">
						<AccordionItem>
							<AccordionTrigger>Is it accessible?</AccordionTrigger>
							<AccordionContent>
								Yes. It adheres to the WAI-ARIA design pattern.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem>
							<AccordionTrigger>Is it styled?</AccordionTrigger>
							<AccordionContent>
								Yes, with Tailwind and design tokens.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</Section>

				<Section title="Collapsible">
					<Collapsible className="w-80">
						<CollapsibleTrigger
							render={<Button variant="outline">Toggle details</Button>}
						/>
						<CollapsibleContent className="mt-2 rounded-md border p-3 text-sm">
							Hidden content revealed on toggle.
						</CollapsibleContent>
					</Collapsible>
				</Section>

				<Section title="Tabs">
					<Tabs defaultValue="account" className="w-96">
						<TabsList>
							<TabsTrigger value="account">Account</TabsTrigger>
							<TabsTrigger value="password">Password</TabsTrigger>
						</TabsList>
						<TabsContent value="account" className="pt-2">
							Manage your account here.
						</TabsContent>
						<TabsContent value="password" className="pt-2">
							Change your password here.
						</TabsContent>
					</Tabs>
				</Section>

				<Section title="Overlays: Dialog, Sheet, Drawer, Alert Dialog">
					<Dialog>
						<DialogTrigger render={<Button variant="outline">Dialog</Button>} />
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Edit profile</DialogTitle>
								<DialogDescription>
									Make changes to your profile here.
								</DialogDescription>
							</DialogHeader>
							<Input placeholder="Name" />
							<DialogFooter>
								<DialogClose
									render={<Button variant="outline">Cancel</Button>}
								/>
								<Button>Save</Button>
							</DialogFooter>
						</DialogContent>
					</Dialog>

					<Sheet>
						<SheetTrigger render={<Button variant="outline">Sheet</Button>} />
						<SheetContent>
							<SheetHeader>
								<SheetTitle>Sheet title</SheetTitle>
								<SheetDescription>Slide-in panel content.</SheetDescription>
							</SheetHeader>
							<SheetFooter>
								<SheetClose render={<Button>Done</Button>} />
							</SheetFooter>
						</SheetContent>
					</Sheet>

					<Drawer>
						<DrawerTrigger asChild>
							<Button variant="outline">Drawer</Button>
						</DrawerTrigger>
						<DrawerContent>
							<DrawerHeader>
								<DrawerTitle>Drawer title</DrawerTitle>
								<DrawerDescription>Bottom drawer content.</DrawerDescription>
							</DrawerHeader>
							<DrawerFooter>
								<DrawerClose asChild>
									<Button>Done</Button>
								</DrawerClose>
							</DrawerFooter>
						</DrawerContent>
					</Drawer>

					<AlertDialog>
						<AlertDialogTrigger
							render={<Button variant="destructive">Delete</Button>}
						/>
						<AlertDialogContent>
							<AlertDialogHeader>
								<AlertDialogTitle>Are you sure?</AlertDialogTitle>
								<AlertDialogDescription>
									This action cannot be undone.
								</AlertDialogDescription>
							</AlertDialogHeader>
							<AlertDialogFooter>
								<AlertDialogCancel>Cancel</AlertDialogCancel>
								<AlertDialogAction>Continue</AlertDialogAction>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialog>
				</Section>

				<Section title="Popover, Hover Card, Tooltip">
					<Popover>
						<PopoverTrigger
							render={<Button variant="outline">Popover</Button>}
						/>
						<PopoverContent className="w-64">
							<p className="text-sm">Popover content goes here.</p>
						</PopoverContent>
					</Popover>

					<HoverCard>
						<HoverCardTrigger
							render={<Button variant="link">@shadcn</Button>}
						/>
						<HoverCardContent className="w-64">
							The React framework component library.
						</HoverCardContent>
					</HoverCard>

					<Tooltip>
						<TooltipTrigger
							render={<Button variant="outline">Hover me</Button>}
						/>
						<TooltipContent>Helpful tooltip</TooltipContent>
					</Tooltip>
				</Section>

				<Section title="Menus: Dropdown, Context, Menubar, Navigation">
					<DropdownMenu>
						<DropdownMenuTrigger
							render={<Button variant="outline">Open menu</Button>}
						/>
						<DropdownMenuContent>
							<DropdownMenuLabel>My Account</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								<UserIcon />
								Profile
								<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<CreditCardIcon />
								Billing
							</DropdownMenuItem>
							<DropdownMenuItem variant="destructive">Log out</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>

					<ContextMenu>
						<ContextMenuTrigger className="flex h-20 w-48 items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
							Right-click here
						</ContextMenuTrigger>
						<ContextMenuContent>
							<ContextMenuItem>
								Back
								<ContextMenuShortcut>⌘[</ContextMenuShortcut>
							</ContextMenuItem>
							<ContextMenuSeparator />
							<ContextMenuItem>Reload</ContextMenuItem>
						</ContextMenuContent>
					</ContextMenu>

					<Menubar>
						<MenubarMenu>
							<MenubarTrigger>File</MenubarTrigger>
							<MenubarContent>
								<MenubarItem>
									New Tab
									<MenubarShortcut>⌘T</MenubarShortcut>
								</MenubarItem>
								<MenubarSeparator />
								<MenubarItem>Share</MenubarItem>
							</MenubarContent>
						</MenubarMenu>
						<MenubarMenu>
							<MenubarTrigger>Edit</MenubarTrigger>
							<MenubarContent>
								<MenubarItem>Undo</MenubarItem>
								<MenubarItem>Redo</MenubarItem>
							</MenubarContent>
						</MenubarMenu>
					</Menubar>

					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
								<NavigationMenuContent>
									<div className="grid w-64 gap-1 p-1">
										<NavigationMenuLink>Introduction</NavigationMenuLink>
										<NavigationMenuLink>Installation</NavigationMenuLink>
									</div>
								</NavigationMenuContent>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</Section>

				<Section title="Command">
					<Command className="w-80 rounded-lg border">
						<CommandInput placeholder="Type a command..." />
						<CommandList>
							<CommandEmpty>No results found.</CommandEmpty>
							<CommandGroup heading="Suggestions">
								<CommandItem>
									<CalendarIcon />
									Calendar
								</CommandItem>
								<CommandItem>
									<SearchIcon />
									Search
									<CommandShortcut>⌘S</CommandShortcut>
								</CommandItem>
							</CommandGroup>
							<CommandSeparator />
							<CommandGroup heading="Settings">
								<CommandItem>
									<SettingsIcon />
									Settings
								</CommandItem>
							</CommandGroup>
						</CommandList>
					</Command>
				</Section>

				<Section title="Breadcrumb & Pagination">
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink href="#">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink href="#">Components</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>Test</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
					<Pagination>
						<PaginationContent>
							<PaginationItem>
								<PaginationPrevious href="#" />
							</PaginationItem>
							<PaginationItem>
								<PaginationLink href="#">1</PaginationLink>
							</PaginationItem>
							<PaginationItem>
								<PaginationLink href="#" isActive>
									2
								</PaginationLink>
							</PaginationItem>
							<PaginationItem>
								<PaginationEllipsis />
							</PaginationItem>
							<PaginationItem>
								<PaginationNext href="#" />
							</PaginationItem>
						</PaginationContent>
					</Pagination>
				</Section>

				<Section title="Table">
					<Table className="max-w-md">
						<TableCaption>Recent invoices.</TableCaption>
						<TableHeader>
							<TableRow>
								<TableHead>Invoice</TableHead>
								<TableHead>Status</TableHead>
								<TableHead className="text-right">Amount</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell>INV001</TableCell>
								<TableCell>
									<Badge variant="secondary">Paid</Badge>
								</TableCell>
								<TableCell className="text-right">$250.00</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>INV002</TableCell>
								<TableCell>
									<Badge variant="outline">Pending</Badge>
								</TableCell>
								<TableCell className="text-right">$150.00</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</Section>

				<Section title="Calendar">
					<Calendar
						mode="single"
						selected={date}
						onSelect={setDate}
						className="rounded-md border"
					/>
				</Section>

				<Section title="Chart">
					<ChartContainer config={chartConfig} className="h-52 w-full max-w-xl">
						<BarChart accessibilityLayer data={chartData}>
							<CartesianGrid vertical={false} />
							<XAxis dataKey="month" tickLine={false} axisLine={false} />
							<ChartTooltip content={<ChartTooltipContent />} />
							<Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
							<Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
						</BarChart>
					</ChartContainer>
				</Section>

				<Section title="Carousel">
					<Carousel className="w-full max-w-xs">
						<CarouselContent>
							{[1, 2, 3, 4, 5].map((n) => (
								<CarouselItem key={n} className="basis-1/3">
									<div className="flex h-24 items-center justify-center rounded-md border text-2xl font-semibold">
										{n}
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</Section>

				<Section title="Scroll Area & Aspect Ratio">
					<ScrollArea className="h-40 w-56 rounded-md border p-3">
						<div className="flex flex-col gap-2 text-sm">
							{Array.from({ length: 20 }, (_, i) => `row-${i + 1}`).map(
								(row) => (
									<div key={row}>Scrollable {row}</div>
								),
							)}
						</div>
					</ScrollArea>
					<div className="w-72">
						<AspectRatio ratio={16 / 9} className="rounded-md border bg-muted">
							<div className="flex size-full items-center justify-center text-sm text-muted-foreground">
								16 / 9
							</div>
						</AspectRatio>
					</div>
				</Section>

				<Section title="Resizable">
					<ResizablePanelGroup
						orientation="horizontal"
						className="h-40 max-w-md rounded-md border"
					>
						<ResizablePanel defaultSize={50}>
							<div className="flex h-full items-center justify-center p-4 text-sm">
								Left
							</div>
						</ResizablePanel>
						<ResizableHandle withHandle />
						<ResizablePanel defaultSize={50}>
							<div className="flex h-full items-center justify-center p-4 text-sm">
								Right
							</div>
						</ResizablePanel>
					</ResizablePanelGroup>
				</Section>

				<Section title="Separator & Kbd">
					<div className="flex items-center gap-3 text-sm">
						<span>Docs</span>
						<Separator orientation="vertical" className="h-4" />
						<span>Source</span>
					</div>
					<KbdGroup>
						<Kbd>⌘</Kbd>
						<Kbd>K</Kbd>
					</KbdGroup>
				</Section>

				<Section title="Sonner (toast)">
					<Button
						variant="outline"
						onClick={() =>
							toast("Event created", {
								description: "Sunday, December 03, 2023 at 9:00 AM",
								action: { label: "Undo", onClick: () => {} },
							})
						}
					>
						<BellIcon />
						Show toast
					</Button>
				</Section>
			</div>
			<Toaster />
		</TooltipProvider>
	);
}
