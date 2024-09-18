"use client";
import React from "react";
import { Appbar } from "@repo/ui/appbar";
import { signIn, signOut, useSession } from "next-auth/react";
import  { useRouter } from "next/navigation";


export default function Appclient() {
  const session = useSession();
  const router=useRouter()
  const handle=async()=>{
    try {
        await signOut();
       router.push('/api/auth/signin')
    } catch (error) {
        console.log("problem: ",error)
    }
  }
  return (
    <div>
      <Appbar
        onSignIn={signIn}
        onSignOut={handle}
        isLoggedIn={session.status}
      />

      {JSON.stringify(session)}
    </div>
  );
}
