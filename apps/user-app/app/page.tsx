"use client"
import React from 'react'
import { Appbar } from '@repo/ui/appbar';
import { signIn,signOut, useSession } from 'next-auth/react';

export default  function Home() {
  const session=useSession()
  return (
    <div>
    <Appbar onSignIn={signIn} onSignOut={signOut} isLoggedIn={session.status}/>
     
      {JSON.stringify(session)}
    </div>
  );
}
