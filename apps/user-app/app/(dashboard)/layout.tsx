import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='flex '>
      <div className='border-r'>
        navbar
        </div>
     <div>{children}</div>
    </div>
  );
};

export default layout