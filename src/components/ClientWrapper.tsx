'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import components on the client side
const VideoBackground = dynamic(() => import('./VideoBackground'), { ssr: false });
const Header = dynamic(() => import('./Header'), { ssr: false });

export default function ClientWrapper() {
  return (
    <>
      <VideoBackground />
      <Header />
    </>
  );
}
