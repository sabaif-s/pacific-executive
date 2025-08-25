"use client";
import React from "react";
import PerspectiveCard from "@/components/utils/PerspectiveCard";
import { HireData } from "@/components/json/HireData";
import Image from "next/image";
import { MailOutlined, PhoneOutlined, LinkedinOutlined } from "@ant-design/icons";
import { useInView, useInViewOnce } from "@/components/hooks/inView";

function HireTalent() {
  const [refHeading, inViewHeading] = useInViewOnce();
  const [refHireSection, inViewHireSection] = useInView();
  const [refContacts, inViewContacts] = useInView();

  return (
    <div className="w-full relative flex flex-col items-center">
      {/* Heading */}
      <div className="my-[30px] w-full flex justify-center items-center">
        <div
          ref={refHeading}
          className={`fade-in flex flex-col items-center ${
            inViewHeading ? "show" : ""
          }`}
        >
          <span className="text-[50px] font-bold">Hire Talent</span>
          <div className="w-[50%] border-b-2 border-[#b1d28a]"></div>
        </div>
      </div>

      {/* Info Section */}
      <div className="flex flex-col bg-[#F1F5F7] items-center justify-center rounded-[160px_0px_0px_0px] py-[4.2%] w-full px-[14.4%] z-100 pb-20">
        <div className="w-full h-80 py-[1.6%] flex flex-col items-center mb-20">
          <span className="text-[46px] font-[600]">For Companies</span>
          <span className="text-[46px] font-[600]">Seeking New</span>
          <span className="text-[46px] font-[600]">Professionals</span>
          <span className="font-[300] text-[20px]">
            Let the team at Pacific Executive Search help you build your
          </span>
          <span className="font-[300] text-[20px]">
            Accounting and Finance team.
          </span>
        </div>
      </div>

      {/* Perspective Cards */}
      <div className="bg-gray-100 flex flex-wrap justify-between w-full px-[14.4%] pb-20 gap-6">
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

      {/* Hire Section */}
      <section
        ref={refHireSection}
        className={`w-full min-h-screen box-border relative z-100 mb-0 flex flex-col pb-20 fade-in ${
          inViewHireSection ? "show" : ""
        }`}
      >
        <div
          style={{ backgroundColor: "#145E8C" }}
          className="w-full pt-[7.3%] flex flex-col items-center pb-[1.6%]"
        >
          <Image src="/images/HireImage.webp" alt="Hire Talent" height={64} width={64} />
          <span className="mt-20 text-white xl:text-[50px] mb-10">
            Looking to Hire Talent
          </span>
          <div className="w-full px-[14.4%] flex flex-col">
            <p
              className={`text-white ${
                inViewHireSection ? "fade-in show" : ""
              } text-2xl font-[500] mb-8`}
            >
              Welcome to Pacific Executive Search, a boutique recruiting firm
              that specializes in Accounting and Finance positions in Los
              Angeles. Our team of experts has a deep understanding of the
              industry to help our clients find top talent. We understand that
              hiring the right people is crucial to the success of any business.
              That’s why we take a personalized approach to recruiting, getting
              to know our clients and their unique needs so that we can find the
              perfect match. Our Specialization in Accounting and Finance allows
              us to stay ahead of the curve in a constantly evolving industry.
              We have a keen understanding of the latest trends and
              developments, and we use this knowledge to help our clients find
              the best candidates for their open positions. Our Expertise in
              recruiting sets us apart from our competitors. We have a proven
              track record of success and a deep understanding of the industry.
              Our team of experts are well-versed in the latest recruiting
              techniques and technologies, ensuring that we find the best
              candidates for our clients. At Pacific Executive Search, we also
              offer our clients a unique Perspective on the hiring process. We
              have a deep understanding of the motivations of the professionals
              we work with and can provide valuable insights and advice to help
              our clients make informed decisions. Whether you’re a small
              startup or a large corporation, we have the expertise and
              resources to help you find the talent you need to succeed. Contact
              us today to learn more about how we can help you find the best
              Accounting and Finance professionals in Los Angeles.
            </p>

            {/* Contact Info */}
            <div
              ref={refContacts}
              className={`${
                inViewContacts ? "translate-up" : "invisible"
              } px-4 w-full flex flex-wrap justify-between items-center mb-20 gap-6`}
            >
              <div className="flex items-start">
                <div className="w-[28px] h-[28px] p-2 flex justify-center items-center rounded-full bg-white">
                  <PhoneOutlined
                    style={{ fontSize: "18px", color: "#2F8CFF", rotate: "90deg" }}
                  />
                </div>
                <div className="flex flex-col ml-2 text-white font-bold xl:text-[20px]">
                  <span>(310) 878-3272</span>
                  <span>(310) 878-3CPA</span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-[28px] h-[28px] p-2 flex justify-center items-center rounded-full bg-white">
                  <MailOutlined style={{ fontSize: "18px", color: "#2F8CFF" }} />
                </div>
                <div className="flex flex-col ml-2 text-white font-bold xl:text-[20px]">
                  <span>info@pacificexecutives.com</span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-[28px] h-[28px] p-2 flex justify-center items-center rounded-full bg-white">
                  <LinkedinOutlined style={{ fontSize: "18px", color: "#2F8CFF" }} />
                </div>
                <div className="flex flex-col ml-2 text-white font-bold xl:text-[20px]">
                  <span>FOLLOW US ON LINKEDIN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed iframe */}
      <iframe
        src="https://outlook.office365.com/owa/calendar/RecruiterCall@pacificexecutives.com/bookings/s/9L8yUiMlVk6fXQeEaurQNQ2"
        name="myiFrame"
        scrolling="no"
        style={{
          border: "none",
          width: "100%",
          height: "1800px",
        }}
        allowFullScreen
      />
    </div>
  );
}

export default HireTalent;
