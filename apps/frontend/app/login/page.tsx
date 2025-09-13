import { LoginForm } from "app/components/forms/loginForm";
import { TanstackProvider } from "app/components/tanstackProvider";
import Link from "next/link";

export default function Page() {
	return (<div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
		<div className="w-full max-w-sm">
		   <div className="py-10">
			<h1 className="text-2xl font-semibold">Welcome Back</h1>
			<p className="text-muted-foreground">Please sign in to your account</p>
			</div>
			<TanstackProvider>
				<LoginForm />
			</TanstackProvider>

			<div className="mt-6 text-center text-muted-foreground">
				  not a member? <Link href="/signup" className="underline text-primary">Sign up now</Link>
			</div>
		</div>
	</div>
	)
}
