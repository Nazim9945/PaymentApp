"use client"
interface bank{
  id:number,
  url:string,
  name:string
}
interface Props{
  onSetSelect:(value:string)=>void,
  bankapi:bank[]
}

export const Selectinputform = ({bankapi,onSetSelect}:Props) => {
 

  return (
    <div>
     <select onChange={e=>{onSetSelect(e.target.value)}} className="border">
      {bankapi.map(bank=>{
        return <option key={bank.id} value={bank.id}>{bank.name}</option>
      })}
     </select>
    </div>
  );
};
