import React from 'react'
import SideBarItem from '../components/SideBarItem';

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="flex">
      <div className="w-72 border-r  border-slate-300 min-h-screen mr-4 pt-28">
        <SideBarItem
          href={"/dashboard"}
          title={"Dashboard"}
          icon={<DashboardIcon />}
        />
        <SideBarItem
          href={"/transection"}
          title={"Transection"}
          icon={<TransectionIcon />}
        />
        <SideBarItem href={"/p2p"} title={"P2P Transfer"} icon={<P2PIcon />} />
      </div>
      <div>{children}</div>
    </div>
  );
};

function DashboardIcon(){
  return (
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
  )

}
function TransectionIcon(){
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
</svg>
}

function P2PIcon(){
return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
    />
  </svg>
);

}

export default layout