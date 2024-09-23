import React from 'react'
interface Props{
  amount:number,
  locked:number
}
const BalanceComponent = async ({amount,locked}:Props) => {
  
  return (
    <div className='p-2'>
      <div className='border-b'>Balance</div>
      <div className="flex justify-between items-center border-b">
        <div>Unblocked Balance</div>
        <div>{amount/100} INR</div>
      </div>
      <div className="flex justify-between items-center border-b">
        <div>Total Locked Balance </div>
        <div>{locked} INR</div>
      </div>
      <div className="flex justify-between items-center border-b">
        <div>Total Balance</div>
        <div>{(amount/100) + locked} INR</div>
      </div>
    </div>
  );
}

export default BalanceComponent