import Link from "next/link";
import { ProfileDropdown } from "./profile-drowpdown";
export default function DashNavbar() {
	return (
		<nav className="flex w-full justify-between items-center p-4">
			<div className="text-lg font-semibold">Dashboard</div>
			<div className="ml-auto flex gap-x-4">
			<ProfileDropdown/>
			</div>
		</nav>
	)
}
