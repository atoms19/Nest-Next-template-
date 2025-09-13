"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";
export function Hero() {
  useEffect(()=>{


  })

	return (
		<section className="w-full h-dvh flex items-center bg-gradient-to-b from-primary-foreground via-white to-secondary ">
			<div className="mx-auto px-4">
				<div className="flex flex-col items-center text-center">
					<h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
					sample header 
					</h1>
					<p className="mt-4 max-w-xl text-lg text-gray-600 dark:text-gray-300">
						A fresh way to connect, chat, and discover people who share your interests.
					</p>
					<div className="mt-8 flex justify-center gap-4">
						<Link href="#">
							<Button>
								Get Started
							</Button>
						</Link>
						<Link href="#">
							<Button variant={"secondary"}>
							Learn More
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
