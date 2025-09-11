import SignupForm from "app/components/forms/signupForm";
import { TanstackProvider } from "app/components/tanstackProvider";

export default function Page() {
	return (<div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
		<div className="w-full max-w-sm">
			<TanstackProvider>
				<SignupForm />
			</TanstackProvider>
		</div>
	</div>
	)
}
