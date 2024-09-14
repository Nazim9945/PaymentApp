import React from 'react'
import { Button } from '@repo/ui/button'
export default function Home() {
  return (
    <div>
      <div className="bg-blue-100 text-3xl hover:text-red-800 p-3">Home</div>
      <Button appName='user-app'>Hi, from user-app</Button>
    </div>
  );
}
