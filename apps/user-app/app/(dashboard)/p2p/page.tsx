"use client"
import { Button } from '@repo/ui/button';
import { Inputform } from '@repo/ui/inputform';
import React, { useState } from 'react'
import { p2ptransfer } from '../../lib/actions/p2ptransfer';

const page = () => {
  const[Amount,setAmount]=useState(0)
  const[Enternumber,setNumber]=useState("")
  return (
    <div>
      <div>P2P Transfer</div>
      <div className='border'>
        <div>Send</div>
        <Inputform
          title="Number"
          placeholder="Number..."
          required={true}
          onSet={(value) => {
            setNumber(value);
          }}
        />
        <Inputform
          title="Amount"
          placeholder="Amount..."
          required={true}
          onSet={(value) => {
            setAmount(Number(value));
          }}
        />
        <Button onclick={async()=>{
          await p2ptransfer(Enternumber,Amount*100)
          console.log("sent it",Amount,Enternumber)
        }} title='Send'/>
      </div>
    </div>
  );
}

export default page