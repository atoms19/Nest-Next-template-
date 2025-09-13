"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {z} from "zod";
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
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const loginSchema = z.object({
  email: z.email("Invalid email address"),
	password: z.string().min(6, "Password must be at least 6 characters"),
});



type LoginValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const loginMutation =useMutation({
	 mutationFn:async (data:LoginValues)=>{
		const res= await fetch('/api/auth/login',{
	 			method:'POST',
			headers:{
				'Content-Type':'application/json'
			},
			body:JSON.stringify(data)
		})
		if(!res.ok){
			throw new Error('Login failed');
		}
	 return res.json();
	 }
	 ,
    onSuccess:(data)=>{
			toast("Login successful:" + JSON.stringify(data));
			router.push('/dashboard');
		}
	 ,
	 onError:(error)=>{
			toast("Login failed:" + error);
	 }
		  
  })

  function onSubmit(values: LoginValues) {
	 loginMutation.mutate(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-sm mx-auto">
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

        <Button type="submit" className="w-full">
          Log In
        </Button>
      </form>
    </Form>
  );
}
