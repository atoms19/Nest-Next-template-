import SignupForm from "app/components/forms/signupForm";
import { TanstackProvider } from "app/components/tanstackProvider";
import Link from "next/link";

export default function Page() {
	return (<div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
		<div className="w-full max-w-sm">
		   <div className="py-10">
			<h1 className="text-3xl font-semibold">Create an account</h1>
			<p className="text-muted-foreground">Please sign up to get started</p>
			</div>
			<TanstackProvider>
				<SignupForm />
			</TanstackProvider>
			<div className="mt-6 text-center text-muted-foreground">
			   already have an account? <Link href="/login" className="underline text-primary">login</Link>
			 </div>
		</div>
	</div>
	)
}
