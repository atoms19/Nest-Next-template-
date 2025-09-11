"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

export const TanstackProvider =({children}:Readonly<{children:React.ReactNode}>)=>{
  const client=new QueryClient()

  return (<QueryClientProvider client={client}>
	 {children}
  </QueryClientProvider>)
}
