
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Cta() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-primary/5 via-white to-secondary">
      <div className="container mx-auto px-4 text-center">
        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Ready to Find Your People?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Sign up today and start building authentic connections that last.
          </p>
        </div>
        <div className="mt-8">
          <Link href="/signup" className="" >
			 <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
