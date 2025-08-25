// components/Home.js
import React from 'react';
import "../app/globals.css";
import Image from 'next/image';

const Home = () => {
  return (
    <>
    <div className="absolute top-0 left-0 h-screen w-full overflow-hidden ">
      {/* Video Background */}
    
    </div>
      <div className="relative top-50 items-center justify-center flex flex-col gap-2  px-0 w-full">
        <div className="relative w-[12.45%] aspect-[1.5/1]">
  <Image
    src="/images/WhiteTextImage.webp"
    alt="Pacific Executive Search"
    fill
    className="object-contain"
    priority 
  />
</div>
      {/* Text Content */}
      <div className=" relative z-100  w-full flex flex-col text-[50px] items-center justify-start text-white text-center">
        <span>
            Executive Recruiting for
        </span>
        <span>
            Accounting and Finance
        </span>
        <span>
            Serving Greater Los Angeles
        </span>
      </div>
      </div>
     <div className='absolute w-full bottom-40 rounded-br-[40%] left-4 border-r-50 border-[#145E8C]  z-20' >
      </div>
      <div className='absolute w-full  bottom-40 rounded-br-[40%] left-5 border-r-20 z-30 border-[#7CB43A] ' >
   
      </div>
      <div className='w-full h-screen absolute left-0 bottom-40 overflow-hidden rounded-br-[38%] z-50' >
         <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full object-cover"
      >
        <source src="/video/pacific-video-original.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
       
     </>
  );
};

export default Home;