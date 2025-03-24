'use client';

import React from 'react';

const VideoBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0">
      {/* Fallback background color */}
      <div className="absolute inset-0 bg-gray-100"></div>
      
      {/* Static background image that simulates the cafe programming scene */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundImage: `url('/images/cafe_programming_bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0
        }}
      ></div>
      
      {/* Semi-transparent overlay for text readability */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
    </div>
  );
};

export default VideoBackground;
