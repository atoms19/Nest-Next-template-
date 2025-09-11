import { MessageBox } from "./components/messageBox";
import { TanstackProvider } from "./components/tanstackProvider"

export default function Home() {
	return (
		<div>
		  <h1>Welcome to my app!</h1>
		  <TanstackProvider>
		  <MessageBox/>
		  </TanstackProvider>
			<p>This is the home page.</p>
		</div>
	);
}
