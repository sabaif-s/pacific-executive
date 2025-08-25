"use client";
import React from 'react';
import Image from 'next/image';
import TeamCard from './utils/TeamCard';
import { teamMembers } from './json/TeamData';
import { PhoneOutlined,MailOutlined,LinkedinOutlined} from '@ant-design/icons';
import FollowersCard from './utils/FollowersCard';
import ButtonWithIcon from './utils/ButtonWithIcon';

const  OurTeam = () => {
    return (
        <div className='w-full relative overflow-hidden'>
            <div
  className='w-[60%] swing-slow aspect-square absolute -top-[37%] left-[5%] z-10  rounded-full'
  style={{ backgroundColor: 'rgba(20, 94, 140, 1)' }}
></div>
    <div
  className='w-[16%] swing-slow aspect-square absolute -top-[7%] -left-[1%] z-0  rounded-full'
  style={{ backgroundColor: 'rgba(20, 94, 140, 1)' }}
></div>
   <div
  className='w-[60%] swing-slow aspect-square absolute -top-[37%] -right-[10%]  rounded-full'
  style={{ backgroundColor: 'rgba(20, 94, 140, 0.8)' }}
></div>

        <section className='w-full min-h-screen box-border relative z-100  flex flex-col pb-20 ' >
            <div style={{ backgroundColor: 'rgba(20, 94, 140, 0.9)' }} className='w-full  pt-[7.3%] flex flex-col items-center pb-[1.6%] '>
              <Image
              src={"/images/recruitment-1-1.webp"}
              width={64}
              height={64}
              />
              <span className='mt-[8] text-[50px] text-white font-[300] ' >
                 Our Team
              </span>
            </div>
            <div className='w-full bg-[#145E8C] 2xl:px-[14%] px-8 py-[7.5%]' >

           
            <div className="flex flex-wrap w-full justify-between ">
      {teamMembers.map((member, index) => (
        <TeamCard key={index} member={member} />
      ))}
    </div>
    <div  className='px-4 flex justify-between items-center mb-2' >
     <div className='flex items-start' >
       <div className='w-[28px] h-[28px] p-2 flex justify-center items-center rounded-full bg-white' >
      <PhoneOutlined style={{ fontSize: "18px", color: "#2F8CFF",rotate:"90deg" }} />
       </div>
       <div className='flex flex-col ml-2 text-white font-bold xl:text-[20px] ' >
              <span>
              (310) 878-3272
              </span>
              <span>
                    (310) 878-3CPA
              </span>
       </div>
     </div>
     
     <div className='flex items-start' >
       <div className='w-[28px] h-[28px] p-2 flex justify-center items-center rounded-full bg-white' >
      <MailOutlined style={{ fontSize: "18px", color: "#2F8CFF", }} />
       </div>
       <div className='flex flex-col ml-2 text-white font-bold xl:text-[20px] ' >
              <span>
              info@pacificexecutives.com
              </span>
       </div>
     </div>
      <div className='flex items-start' >
       <div className='w-[28px] h-[28px] p-2 flex justify-center items-center rounded-full bg-white' >
      <LinkedinOutlined style={{ fontSize: "18px", color: "#2F8CFF", }} />
       </div>
       <div className='flex flex-col ml-2 text-white font-bold xl:text-[20px] ' >
              <span>
              FOLLOW US ON LINKEDIN
              </span>
       </div>
     </div>
    </div>
    <div className='w-[90%] flex justify-end mb-20' >
     <FollowersCard count={12417} />
    </div>
    <div className='w-full flex justify-center' >
              <ButtonWithIcon text={"Book an Appointment Today!"} textColor='#7cb43a' bgColor='white' hoverBgColor='white' hoverTextColor='#7cb43a' />
    </div>
     </div>
        </section>
         </div>
    );
};

export default  OurTeam;