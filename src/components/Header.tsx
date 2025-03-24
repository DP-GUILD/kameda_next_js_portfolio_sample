'use client';

import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <div className="text-xl font-bold">Portfolio</div>
          <ul className="flex space-x-8">
            <li>
              <Link href="#about" className="text-gray-800 hover:text-gray-600 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#works" className="text-gray-800 hover:text-gray-600 transition-colors">
                Works
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-gray-800 hover:text-gray-600 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
