import { RightOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

const ButtonWithIcon = ({
  text,
  bgColor = '#145e8c',
  textColor = '#ffffff',
  hoverBgColor = '#7CB43A',
  hoverTextColor = '#ffffff',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`font-medium py-4 px-6 text-center cursor-pointer rounded-full flex items-center gap-3 
        transition-all duration-300 transform relative overflow-hidden
        ${isHovered ? 'scale-105 shadow-lg' : 'scale-100 shadow-md'}
      `}
      style={{
        backgroundColor: isHovered ? hoverBgColor : bgColor,
        color: isHovered ? hoverTextColor : textColor,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className={`transition-all duration-300 ${
          isHovered ? 'translate-x-1' : 'translate-x-0'
        }`}
      >
        {text}
      </span>
      <span
        className={`transition-all duration-300 ease-out flex items-center ${
          isHovered ? 'opacity-100 translate-x-1' : 'opacity-0 -translate-x-4'
        }`}
      >
        <RightOutlined />
      </span>
    </button>
  );
};

export default ButtonWithIcon;
