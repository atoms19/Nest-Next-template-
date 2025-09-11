"use client"

import { useQuery } from "@tanstack/react-query"

export const MessageBox=()=>{
  const {data,isLoading,error} = useQuery({
	 queryKey:["message"],
	 queryFn:async()=>{
		 const res=await fetch("/api")
		 if(!res.ok) throw new Error("Network response was not ok")
		 return res.json()
	 }
  })



  	return <div style={{border:"1px solid black",padding:"10px",margin:"10px"}}>
	{isLoading && <p>Loading...</p>}
	{error && <p style={{color:"red"}}>Error: {(error as Error).message}</p>}
		{data && <p>Message from server: {data.message}</p>}
	</div>
}
