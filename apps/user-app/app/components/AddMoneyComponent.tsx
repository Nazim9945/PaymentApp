"use client"
import { Button } from '@repo/ui/button'
import {Inputform} from '@repo/ui/inputform'
import { Selectinputform } from '@repo/ui/selectinputform'

import React, { useState } from 'react'
import { addonRamp } from '../lib/actions/Addonramp'
const bankapi = [
  { id: 1, url: "https://netbanking.hdfcbank.com", name: "Hdfc" },
  { id: 2, url: "https://www.axisbank.com/", name: "Axis" },
];
const AddMoneyComponent = () => {
  const [amount,setAmount]=useState(0)
  const [setId, setSelectId] = useState(bankapi[0]?.id) ;
  const bankurlname=bankapi.find(u=>setId===u.id)
  
 
  return (
    <div>
        <div className='text-xl'>Add Money</div>
        <div>
            <Inputform onSet={value=>{
              setAmount(Number(value))
            }}/>
            <Selectinputform bankapi={bankapi} onSetSelect={id=>{
              setSelectId(Number(id))
            }}/>
            <Button onclick={async()=>{
              await addonRamp(amount,bankurlname?.name || "")
              console.log(bankurlname?.url)
              window.location.href=bankurlname?.url || ""
            }} title='Add Money'/>
        </div>
    </div>
  )
}

export default AddMoneyComponent