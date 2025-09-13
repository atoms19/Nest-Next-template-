"use client"
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {z} from "zod";

const formSchema=z.object({

  file:z.instanceof(File).refine((file)=>{
  	 if(file){
		 return file.size<=5000000 && file.size >0
	 }
	 return false
},{message:"file size must be less than 5mb"})
})
type formtype = z.infer<typeof formSchema>

export default function EditProfileForm(){
  const editProfileMutation = useMutation({
		  mutationFn:async (formData:FormData)=>{
				let res= await fetch('/api/user/avatar',{
					    method:"PATCH",
						 body:formData,
				})
				console.log(res)
			 if(res.ok){
				  throw  new Error("failed to upload file")
			 }
		  },
		  onSuccess:()=>{
				toast("file upload successful",{
				   
				})
		  },
		  onError:(error)=>{
			 toast(error.message)
		  }
  })
  const form=useForm<formtype>({
	 resolver:zodResolver(formSchema),
  })
  
  const submit=(data:formtype)=>{
		const formData = new FormData()
		formData.append("file",data.file)
	   editProfileMutation.mutate(formData) 

  }

   return (
		  <Form {...form} >
			 <form onSubmit={form.handleSubmit(submit)} className="mt-4">
				  <FormField control={form.control} name="file" render={({field})=>(
				 <FormItem> 
						<FormLabel>choose a profile pic</FormLabel>
						<FormControl>
						    <div className="flex">
							 <Input className="max-w-md" type="file" onChange={(e)=>{
								const file = e.target.files?.[0]
								field.onChange(file)
							 }}/>
						    
				  <Button type="submit">upload</Button>
				  </div>
						</FormControl>
						<FormMessage/>
				  </FormItem>
				  )}/>

			 </form>
		  </Form>
	)

}
