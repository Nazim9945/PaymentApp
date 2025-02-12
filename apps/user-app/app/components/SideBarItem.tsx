"use client"
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

interface Props{
    href:string,
    title:string,
    icon:React.ReactNode
}
const SideBarItem = ({href,title,icon}:Props) => {
      const pathname = usePathname();
      const router=useRouter()
      const checked=pathname===href
  return (
    <div
      className={`flex ${checked ? "text-[#6a51a6]" : "text-slate-500"}  cursor-pointer  p-2 pl-8`} onClick={()=>{router.push(href)}}
    >
      <div className="pr-2">{icon}</div>
      <div className="">{title}</div>
    </div>
  );
}

export default SideBarItem