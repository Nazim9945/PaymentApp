import React from 'react'
enum onRampStatus{
  Success,
  Failure,
  Processing
}
interface onRamp{
  time:Date,
  amount:number,
  status:onRampStatus,
  provider:string
}
interface Props{
  onrampdetails:onRamp[]
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
                
                <div className={`text-sm ${t.status==='Processing' && "text-red-800 italic"}`}>{t.status}</div>
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