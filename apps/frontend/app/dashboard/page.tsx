import DashNavbar from "app/components/dashboard/navbar";
import { MessageBox } from "app/components/messageBox";
import { TanstackProvider } from "app/components/tanstackProvider";

export default function Home(){

  return (
	 <main className="">
	 <DashNavbar/>
	 <TanstackProvider>
		<MessageBox/>
	 </TanstackProvider>
	 </main>
	)
}
