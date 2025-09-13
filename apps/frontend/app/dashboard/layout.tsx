import DashNavbar from "app/components/dashboard/navbar";

export default function layout({children}:Readonly<{children:React.ReactNode}>){

  return (<main>
			   <DashNavbar/>
				{children}
			</main>)

}
