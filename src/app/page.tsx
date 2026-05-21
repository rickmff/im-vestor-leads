import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="flex flex-1 items-center justify-center">
			<Button render={<Link href="/components" />} nativeButton={false} size="lg">
				View UI components
			</Button>
		</div>
	);
}
