import React from 'react';

const  Background = () => {
    return (
         <div className='w-full relative overflow-hidden h-screen'>
            <div
  className='w-[60%] swing-slow aspect-square absolute -top-[37%] left-[5%] z-10  rounded-full'
  style={{ backgroundColor: 'rgba(20, 94, 140, 1)' }}></div>
    <div
  className='w-[16%] swing-slow aspect-square absolute -top-[7%] -left-[1%] z-0  rounded-full'
  style={{ backgroundColor: 'rgba(20, 94, 140, 1)' }}></div>
   <div
  className='w-[60%] swing-slow aspect-square absolute -top-[37%] -right-[10%]  rounded-full'
  style={{ backgroundColor: 'rgba(20, 94, 140, 0.8)' }}></div>
</div>
    );
};

export default  Background;