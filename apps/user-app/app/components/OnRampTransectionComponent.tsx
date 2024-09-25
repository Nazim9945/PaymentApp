import React from 'react'

interface onRamp {
  time: Date;
  amount: number;
  status:any;//type???
  provider: string;
}
interface Props{
  onrampdetails:onRamp[]
}
enum OnRampStatus {
  Success,
  Failure,
  Processing,
}
const OnRampTransectionComponent = ({onrampdetails}:Props) => {
  onrampdetails=onrampdetails.reverse()
  
  return (
    <div>
      <div className="border-b text-xl font-semibold">Recent Transection</div>

      <div>
        {
          onrampdetails.length ? onrampdetails.map((t,i) => (
             <div key={i} className="flex justify-between items-center border-b ">
              <div>
                <div className="font-semibold">Recieved INR</div>
                <div>{t.time.toDateString()}</div>
                
                <div className={`text-sm ${t.status===OnRampStatus.Processing && "text-red-800 italic"}`}>{t.status}</div>
              </div>
              <div>+ Rs {t.amount / 100}</div>
            </div>
          )):<div className='flex justify-between items-center p-2'>
            <div className='text-xl italic'>No Recent Transection</div>
          </div>
        }
      </div>
    </div>
  );
}

export default OnRampTransectionComponent