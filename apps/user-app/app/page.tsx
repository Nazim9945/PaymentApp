import React from 'react'
import { Button } from '@repo/ui/button'
import { getServerSession } from 'next-auth';
import { authoption } from './lib/authoption';
import Buttongrp from '@repo/ui/buttongrp';
export default async function Home() {
  const session=await getServerSession(authoption)
  return (
    <div>
      <div className="bg-blue-100 text-3xl hover:text-red-800 p-3">Home</div>
      <Button appName="user-app">Hi, from user-app</Button>
      <Buttongrp/>
      {JSON.stringify(session)}
    </div>
  );
}
