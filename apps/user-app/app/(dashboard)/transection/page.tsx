import React from 'react'
import AddMoneyComponent from '../../components/AddMoneyComponent';
import BalanceComponent from '../../components/BalanceComponent';
import OnRampTransectionComponent from '../../components/OnRampTransectionComponent';
import { authoption } from '../../lib/authoption';
import { getServerSession } from 'next-auth';
import prisma from '@repo/prismadb/client';
export const getBalance=async()=>{
  const session=await getServerSession(authoption)
  const balanceDetails = await prisma.balance.findFirst({
    where: {
      userId: Number(session.user.id),
    },
  });
  return {
    amount:balanceDetails?.amount || 0,
    locked:balanceDetails?.locked|| 0
  }
}
async function getOnRampTransactions() {
  const session = await getServerSession(authoption);
  const txns = await prisma.onRampTransaction.findMany({
    where: {
      userId: Number(session?.user?.id),
    },
  });
  return txns.map((t) => ({
    time: t.startTime,
    amount: t.amount,
    status: t.status,
    provider: t.provider,
  }));
}
const page = async() => {
  const {amount,locked}=await getBalance();
  const onrampdetails=await getOnRampTransactions();
  return (
    <div>
      <div className='text-xl font-semibold p-2 border'>Transection</div>
      <div className='grid grid-cols-2'>
        <div className='cols-span-1 border'>
          <AddMoneyComponent />
        </div>
        <div className='cols-span-1 border'>
          <BalanceComponent amount={amount} locked={locked}/>
          <OnRampTransectionComponent onrampdetails={onrampdetails}/>
        </div>
      </div>
    </div>
  );
}
export default page
