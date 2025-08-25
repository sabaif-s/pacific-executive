"use client";
import React, { useState } from "react";
import Image from "next/image";
import ButtonWithIcon from "./utils/ButtonWithIcon";

export default function HomeSecondSection() {
 

  return (
    <section className="flex flex-col md:flex-row items-start justify-end gap-10 pr-2 2xl:pl-20 xl:mb-20 mb-0 xl:py-12 py-4 w-full relative -top-40 z-100 ">
      <div className="md:w-[40%] text-gray-700 flex flex-col gap-4 items-start justify-center relative top-12 leading-relaxed">
        <Image
          src="/images/icon-4.webp"
          alt="Icon"
          width={64}
          height={64}
          className="object-cover"
        />
        <p className="2xl:text-[34px] xl:text-[22px] text-lg font-[400] ">
         With more than 35 years of experience connecting companies and professionals, the team at Pacific Executive Search has the experience and an extensive network of connections within the Los Angeles Accounting and Finance industry. More importantly, we are dedicated to helping you achieve your team and/or career goals.
        </p>
        <div>
          <ButtonWithIcon text={"Meet Our Partners"} />
        </div>
      </div>

      {/* Right Side: Image with curved border */}
      <div className="md:w-[50%] relative">
        <div className="relative overflow-hidden  w-full aspect-3/2">
          <Image
            src="/images/top1-min.webp"
            alt="Los Angeles"
            fill
            className="object-cover rounded-[40px_2px_2px_200px]  "
          />
        </div>
        <div className="absolute inset-0 rounded-[40px_0px_0px_200px] border-l-[30px] border-[#155E8C] pointer-events-none"></div>
      </div>
    </section>
  );
}