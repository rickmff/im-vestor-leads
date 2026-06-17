export const SECTORS = [
	"Technology",
	"Healthcare",
	"Fintech",
	"EdTech",
	"CleanTech",
	"E-Commerce",
	"SaaS",
	"AgriTech",
	"PropTech",
	"BioTech",
] as const;

export const COUNTRIES = [
	"Portugal",
	"Spain",
	"France",
	"Germany",
	"UK",
	"Italy",
	"Netherlands",
	"USA",
	"Brazil",
] as const;

export const VALUE_RANGES = [
	"€10K-€50K",
	"€50K-€200K",
	"€200K-€500K",
	"€500K-€1M",
	"€1M-€5M",
	"€5M+",
] as const;

export type ProjectMedia = {
	id: string;
	type: "photo" | "video";
	url: string;
	name: string;
};

export type Project = {
	id: string;
	eid: string;
	title: string;
	desc: string;
	sector: string;
	value: string;
	country: string;
	date: string;
	media: ProjectMedia[];
	hyperTrain: boolean;
};

export const PROJECTS: Project[] = [
	{
		id: "p1",
		eid: "e1",
		title: "AgroSense",
		desc: "IoT platform for precision agriculture monitoring with real-time soil and pest data analytics across distributed farms.",
		sector: "AgriTech",
		value: "€200K-€500K",
		country: "Portugal",
		date: "2026-01-15",
		media: [],
		hyperTrain: false,
	},
	{
		id: "p2",
		eid: "e2",
		title: "MedFlow",
		desc: "AI-powered clinical workflow automation reducing patient wait times in mid-size hospitals across Europe.",
		sector: "Healthcare",
		value: "€500K-€1M",
		country: "Portugal",
		date: "2026-02-01",
		media: [
			{
				id: "m-p2-1",
				type: "photo",
				url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
				name: "Medical workflow",
			},
			{
				id: "m-p2-2",
				type: "photo",
				url: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800",
				name: "Hospital tech",
			},
		],
		hyperTrain: true,
	},
	{
		id: "p3",
		eid: "e3",
		title: "LearnLoop",
		desc: "Adaptive learning platform using spaced repetition for corporate training and knowledge retention analytics.",
		sector: "EdTech",
		value: "€50K-€200K",
		country: "Spain",
		date: "2026-02-20",
		media: [],
		hyperTrain: false,
	},
	{
		id: "p4",
		eid: "e1",
		title: "GreenGrid",
		desc: "Decentralized energy trading platform for solar panel owners enabling peer-to-peer transactions.",
		sector: "CleanTech",
		value: "€200K-€500K",
		country: "Portugal",
		date: "2026-03-01",
		media: [],
		hyperTrain: false,
	},
	{
		id: "p5",
		eid: "e4",
		title: "PropMatch",
		desc: "Commercial real estate matching using foot traffic and demographic analytics for retail tenant placement.",
		sector: "PropTech",
		value: "€500K-€1M",
		country: "France",
		date: "2026-03-10",
		media: [
			{
				id: "m-p5-1",
				type: "photo",
				url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
				name: "Commercial property",
			},
		],
		hyperTrain: true,
	},
	{
		id: "p6",
		eid: "e5",
		title: "CodeNest",
		desc: "Developer collaboration with AI code review and real-time pair programming for distributed teams.",
		sector: "SaaS",
		value: "€50K-€200K",
		country: "Germany",
		date: "2026-03-15",
		media: [],
		hyperTrain: false,
	},
	{
		id: "p7",
		eid: "e6",
		title: "PayPulse",
		desc: "Embedded payments infrastructure letting marketplaces issue cards and split payouts in real time.",
		sector: "Fintech",
		value: "€1M-€5M",
		country: "UK",
		date: "2026-03-22",
		media: [
			{
				id: "m-p7-1",
				type: "photo",
				url: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800",
				name: "Payments dashboard",
			},
		],
		hyperTrain: true,
	},
	{
		id: "p8",
		eid: "e7",
		title: "BioSeedX",
		desc: "Gene-editing toolkit accelerating drought-resistant crop development for climate-stressed regions.",
		sector: "BioTech",
		value: "€5M+",
		country: "Netherlands",
		date: "2026-03-28",
		media: [],
		hyperTrain: true,
	},
	{
		id: "p9",
		eid: "e8",
		title: "ShopSphere",
		desc: "Headless commerce engine with built-in AI merchandising and one-click cross-border checkout.",
		sector: "E-Commerce",
		value: "€200K-€500K",
		country: "USA",
		date: "2026-04-02",
		media: [
			{
				id: "m-p9-1",
				type: "photo",
				url: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800",
				name: "Commerce analytics",
			},
		],
		hyperTrain: true,
	},
	{
		id: "p10",
		eid: "e9",
		title: "NeuroCare",
		desc: "Remote neurological monitoring wearable flagging early signs of cognitive decline for clinicians.",
		sector: "Healthcare",
		value: "€500K-€1M",
		country: "Italy",
		date: "2026-04-08",
		media: [],
		hyperTrain: true,
	},
	{
		id: "p11",
		eid: "e10",
		title: "CloudForge",
		desc: "Self-serve platform that provisions compliant cloud infrastructure from plain-language prompts.",
		sector: "Technology",
		value: "€50K-€200K",
		country: "Brazil",
		date: "2026-04-14",
		media: [],
		hyperTrain: true,
	},
];
