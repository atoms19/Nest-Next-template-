import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function DashNavbar() {
	return (
		<nav className="flex w-full justify-between items-center p-4">
			<div className="text-lg font-semibold">Dashboard</div>
			<div className="ml-auto flex gap-x-4">

				<Button variant="outline" asChild>
					<Link href="/api/auth/logout">
					logout
					</Link>
				</Button>
			</div>
		</nav>
	)
}
