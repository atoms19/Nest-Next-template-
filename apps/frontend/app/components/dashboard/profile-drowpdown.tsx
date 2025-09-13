"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Link from "next/link";

export function ProfileDropdown() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Avatar>
					<AvatarImage />
					<AvatarFallback />
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>
					<Link href="/dashboard/profile">Profile</Link>
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => { 
					 fetch('/api/auth/logout')
					 .then(() => {
						window.location.reload()
					 })
				}}>
					logout
				</DropdownMenuItem>

			</DropdownMenuContent>
		</DropdownMenu>

	)
}
