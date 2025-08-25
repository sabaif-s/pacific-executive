// components/PerspectiveCard.jsx
import Image from 'next/image';
import React from 'react';

const PerspectiveCard = ({ iconPath, imagePath, title, note, buttonText }) => {
  return (
    <div className="bg-white w-[29.6%] aspect-[0.448/1] rounded-2xl flex flex-col justify-start relative gap-2 shadow-md overflow-hidden 
      transition-all duration-500 hover:shadow-xl hover:rotate-1 hover:-rotate-x-2 hover:-translate-y-1 hover:scale-[1.01]">
      {/* Image */}
      <div className="relative aspect-[0.874/1] w-full overflow-hidden">
        <Image
          src={imagePath}
          alt="Perspective"
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <Image src={iconPath} alt="Perspective" width={64} height={64} />
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-[#145e8c]">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 xl:text-[16px] text-[12px] mb-4">
          {note}
        </p>
      </div>

      {/* Button */}
      <div className="w-full flex justify-center">
        <button className="bg-[#145e8c] cursor-pointer text-white absolute bottom-4 px-6 py-2 rounded-full 
          hover:bg-[#7cb43a] transition-all duration-300 hover:scale-105 shadow-md">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default PerspectiveCard;
