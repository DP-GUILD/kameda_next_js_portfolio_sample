'use client';

import React from 'react';
import Image from 'next/image';

const VideoBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0">
      {/* Fallback background color */}
      <div className="absolute inset-0 bg-gray-100"></div>
      
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/cafe_programming_bg.jpg"
          alt="Cafe programming background"
          fill
          priority
          quality={100}
          className="object-cover"
        />
      </div>
      
      {/* Semi-transparent overlay for text readability */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
    </div>
  );
};

export default VideoBackground;
