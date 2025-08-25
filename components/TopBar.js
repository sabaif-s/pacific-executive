// components/TopBar.js
"use client";

import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
import { FacebookFilled, TwitterOutlined, InstagramFilled } from "@ant-design/icons";

export default function TopBar() {
  return (
    <div className="bg-[#145e8c] text-white text-sm z-1000 fixed flex items-center h-12 top-0 w-full">
      <div className="container w-full mx-4 flex flex-start gap-4 items-center h-10 px-2">
        {/* Contact Info */}
        <div className="flex space-x-4 items-center">
          <div className="flex items-center gap-1">
            <PhoneOutlined  style={{ transform: 'rotate(90deg)',fontSize:"16px",fontWeight:"600" }} />
            <span className="text-white font-semibold text-base text-3xl-custom" >(310) 878-3272 | (310) 878-3CPA</span>
          </div>
          <div className="flex items-center gap-1">
            <MailOutlined style={{ fontSize:"16px",fontWeight:"600" }} />
            <span className="text-3xl-custom text-base" style={{ fontFamily: 'Verdana, sans-serif', fontWeight: 600 }} >info@pacificexecutives.com</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 items-center text-lg">
          <FacebookFilled className="hover:text-gray-300 cursor-pointer text-3xl-custom " />
          <TwitterOutlined className="hover:text-gray-300 cursor-pointer text-3xl-custom " />
          <InstagramFilled className="hover:text-gray-300 cursor-pointer text-3xl-custom " />
        </div>
      </div>
    </div>
  );
}
