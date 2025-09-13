import type { NextRequest } from "next/server"


//this is my karma i expect nothing 

export default async function middleware(req: NextRequest){
       
  req.cookies.get('authentication') 
  
  if(req.nextUrl.pathname.startsWith('/dashboard')){
	 		const token=req.cookies.get('access_token')?.value
		   const res = await fetch(req.nextUrl.origin+'/api/auth/verify',{
			  method:'POST',
			  headers:{
				  'Content-Type':'application/json'
			 },
			 body:JSON.stringify({token})
		  })
		  console.log(await res.json())

		  if(!res.ok){
			  return Response.redirect(new URL('/login',req.nextUrl.origin))
		  }
		
	 }
  }

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
