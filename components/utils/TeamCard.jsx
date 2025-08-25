"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  MailOutlined,
  PhoneOutlined,
  LinkedinOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";

const TeamCard = ({ member }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // update every time it enters/leaves viewport
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`w-[48%] flex flex-col justify-start mb-8 transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      {/* Name + Role */}
      <Link
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="xl:text-[50px] text-[32px] font-bold cursor-pointer text-white leading-tight"
      >
        {member.name}, <br /> {member.role}
      </Link>

      {/* Contact Icons */}
      <div className="flex justify-start items-center space-x-4 mb-8 mt-2">
        <Link href={`mailto:${member.email}`}>
          <MailOutlined
            style={{ fontSize: "18px", color: "#0D9EC2" }}
            className={`cursor-pointer transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            } hover:scale-110`}
          />
        </Link>

        <Link href={`tel:${member.phone}`} target="_blank" rel="noopener noreferrer">
          <PhoneOutlined
            style={{ fontSize: "18px", color: "#0D9EC2" }}
            className={`cursor-pointer transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            } hover:scale-110`}
          />
        </Link>

        <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
          <LinkedinOutlined
            style={{ fontSize: "18px", color: "#0D9EC2" }}
            className={`cursor-pointer transition-all duration-500 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            } hover:scale-110`}
          />
        </Link>

        <Link href={member.appointment} target="_blank" rel="noopener noreferrer">
          <ScheduleOutlined
            style={{ fontSize: "18px", color: "#0D9EC2" }}
            className={`cursor-pointer transition-all duration-500 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            } hover:scale-110`}
          />
        </Link>
      </div>

      {/* Bio */}
      <span
        className={`text-white xl:text-2xl text-[16px] transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {member.bio}
      </span>
    </div>
  );
};

export default TeamCard;
