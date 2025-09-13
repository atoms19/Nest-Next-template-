import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { AvatarImage } from "@radix-ui/react-avatar";
import EditProfileForm from "app/components/forms/editProfileForm";
import { TanstackProvider } from "app/components/tanstackProvider";
import { PenBoxIcon } from "lucide-react";

export default function page() {
  
	return (
		<main className="p-9">
		  <h1 className="text-2xl font-bold mb-4">Profile</h1>
		  <div className="flex gap-x-10 items-center">
		  <Avatar className="w-24 h-24">
			 <AvatarImage src=""/>
			 <AvatarFallback>VVD</AvatarFallback>
		  </Avatar>
		  <div className="py-10">
				  <p className="mb-2"><strong>Name:</strong> vishal v devan</p>

				  <p className="mb-2"><strong>Email:</strong></p>
		  </div>
		  </div>
		 <Button className="" variant={"outline"}>edit profile <PenBoxIcon/> </Button>
		 <TanstackProvider>
		 <EditProfileForm/>
		 </TanstackProvider>
		</main>)

}
