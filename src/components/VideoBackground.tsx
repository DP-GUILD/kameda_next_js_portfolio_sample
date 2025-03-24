'use client';

import React from 'react';

const VideoBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0">
      {/* Fallback background color */}
      <div className="absolute inset-0 bg-gray-100"></div>
      
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
      >
        <source src="/videos/cafe_programming.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Semi-transparent overlay for text readability */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
    </div>
  );
};

export default VideoBackground;
