import React from 'react'
import PerspectiveCard from '@/components/utils/PerspectiveCard'
import { HireData } from '@/components/json/HireData'
import Background from '@/components/utils/Background'

function  HireTalent() {
  return (
    <div className='w-full relative top-38 flex flex-col items-center' >
        <div className='my-[30px] w-full flex justify-center items-center' >
          <div className='flex flex-col items-center' >
               <span className='text-[50px] font-bold' >
              Hire Talent
             </span>
             <div className='w-[50%] border-b-2 border-[#b1d28a]' >

             </div>
          </div>
        </div>
         <div className="flex flex-col bg-[#F1F5F7] items-center justify-center  rounded-[160px_0px_0px_0px] py-[4.2%] w-full px-[14.4%] z-100 pb-20 ">
           <div className="w-full h-80 py-[1.6%] flex flex-col items-center mb-20" >
           <span className="text-[50px] font-[600] " >
                   For Companies
           </span>
            <span className="text-[50px]  font-[600] " >
                   Seeking New
           </span>
            <span className="text-[50px]  font-[600] " >
                Professionals
           </span>
           <span className="font-[300] text-[20px]" >
           Let the team at Pacific Executive Search help you build your
           </span>
            <span className="font-[300] text-[20px]" >
           Accounting and Finance team.
           </span>
        </div>
         </div>
          <div className="bg-gray-100 flex items-center justify-between flex-row w-full mb-10 px-[14.4%] pb-20">
            {HireData.map((card, index) => (
        <PerspectiveCard
          key={index}
          iconPath={card.iconPath}
          imagePath={card.imagePath}
          title={card.title}
          note={card.note}
          buttonText={card.buttonText}
        />
      ))}
         </div>
         <Background/>
    </div>
  )
}

export default  HireTalent