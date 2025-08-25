"use client";
import React, { useState } from "react";
import PerspectiveCard from "./utils/PerspectiveCard";
import { perspectiveData } from "./json/PerspectiveData";
import AccountingCard from "./utils/AccountingCard";
import ButtonWithIcon from "./utils/ButtonWithIcon";
import { perspectiveData2 } from "./json/PerspectiveData2";

export default function HomeThirdSection() {

  return (
    <section className="flex flex-col bg-[#F1F5F7] flex-col  rounded-[160px_0px_0px_0px] py-[4.2%] w-full 2xl:px-[14.4%] px-4 z-100 pb-20 ">
        <div className="w-full h-80 py-[1.6%] flex flex-col items-center mb-20" >
           <span className="text-[50px] font-[600] " >
                   For Professionals
           </span>
            <span className="text-[50px]  font-[600] " >
                   Seeking New
           </span>
            <span className="text-[50px]  font-[600] " >
                Opportunities
           </span>
           <span className="font-[300] text-[20px]" >
           The team at Pacific Executive Search can help you maximize
           </span>
            <span className="font-[300] text-[20px]" >
           your search and bring you closer to your goals, whatever
           </span>
            <span className="font-[300] text-[20px]" >
           they may be. We will work with you to create a search that is
           </span>
            <span className="font-[300] text-[20px] " >
           customized to your goals and your needs.
           </span>
        </div>
         <div className="bg-gray-100 flex items-center justify-between flex-row w-full mb-10">
            {perspectiveData.map((card, index) => (
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
           <div className="bg-gray-100 flex items-center justify-between flex-row w-full mb-10">
      <AccountingCard />
      <AccountingCard
  title="Audit"
  description="Internal Controls, Sarbanes Oxley Analysts, Regulatory Compliance. Internal Audit can also be an effective stepping stone from Public Accounting into an Operations position at large organizations."
  buttonText="View Opportunities"
/>
<AccountingCard
  title="Finance"
  description="Corporate FP&A from the SFA level through Manager and Director to VP. Investment Banking and Private Equity roles from Analyst up through VP/Director. Business Analyst and Data Analyst."
  buttonText="View Opportunities"
/>
    </div>
      <div className="bg-gray-100 flex items-center justify-between flex-row w-full mb-10">
      <AccountingCard 
        title="Investment Operations"
  description="Financial Services industry positions in Back Office, Middle Office, and Front Office support. Investment Fund Compliance, Trade Execution and Fund Accounting"
  buttonText="View Opportunities"
      />
      <AccountingCard
  title="Operational Accounting"
  description="Accounts Payable (A/P), Accounts Receivable (A/R), and Payroll"
  buttonText="View Opportunities"
/>
<AccountingCard
  title="Senior Accountant"
  description=" Staff, Senior, and Supervisor of Accounting positions. When transitioning from Big 4 Public Accounting, a Senior Accounting position in industry can give you experience to be more competitive for a Manager or Assistant Controller roles. To check other jobs click here! or jobs of same category as this"
  buttonText="View Opportunities"
/>
    </div>
    <div className="flex justify-center w-full my-4" >
   <ButtonWithIcon text={"View All Opportunities"} />
    </div>
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
         <div className="bg-gray-100 flex items-center justify-between flex-row w-full mb-10">
            {perspectiveData2.map((card, index) => (
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
   

    </section>
  );
}