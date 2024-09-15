"use client"
import { signIn, signOut, useSession } from 'next-auth/react';


export default function buttongrp() {
  const session=useSession()
  return (
    <div className='flex gap-2 w-40 '>
      <button onClick={() => signIn()}>signin</button>
      <button onClick={() => signOut()}>signOut</button>
      {JSON.stringify(session)}
    </div>
  );
}
