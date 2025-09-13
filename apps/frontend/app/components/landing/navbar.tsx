
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {GlobeIcon} from "lucide-react"
export function Navbar() {
  return (
    <header className="w-full flex justify-between px-4 py-5 lg:px-6">
      <Link className="flex items-center justify-center" href="#">
        <GlobeIcon className="h-6 w-6" />

        <span className="sr-only">Acme Inc</span>
      </Link>

      <nav className="flex items-center gap-x-4">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Features
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Pricing
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Contact
        </Link>
        <Link href="/login">
          <Button>Login</Button>
        </Link>
        <Link href="/signup">
          <Button variant="secondary">Sign Up</Button>
        </Link>
      </nav>
    </header>
  );
}


