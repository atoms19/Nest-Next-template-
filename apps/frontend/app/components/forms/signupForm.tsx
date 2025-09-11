
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";

const signupSchema = z
	.object({
		name: z.string().max(100, { message: "Name must be less than 100 characters" }),
		email: z.email({ message: "Invalid email address" }),
		password: z.string().min(6, { message: "Password must be at least 6 characters" }),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"], // field that will get the error
	});

type SignupValues = z.infer<typeof signupSchema>;

export default function SignupForm() {
	const signUpMutation = useMutation({
		mutationFn: async (values: SignupValues) => {
			const res = await fetch("/api/user/create", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ name: values.name, email: values.email, password: values.password })
			})
			if (!res.ok) {
				throw new Error("Failed to sign up");
			}
		},
		onSuccess:()=>{
		  			alert("User signed up successfully");
		},
		onError:(error)=>{
		  			alert((error as Error).message);
		}



	})


	const form = useForm<SignupValues>({
		resolver: zodResolver(signupSchema),
		defaultValues: {
		  name:"",
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	function onSubmit(values: SignupValues) {
    signUpMutation.mutate(values);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-sm mx-auto">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>username</FormLabel>
							<FormControl>
								<Input type="name" placeholder="user_name" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input type="email" placeholder="you@example.com" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input type="password" placeholder="password" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="confirmPassword"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Confirm Password</FormLabel>
							<FormControl>
								<Input type="password" placeholder="confirm password" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit" className="w-full">
					Sign Up
				</Button>
			</form>
		</Form>
	);
}
