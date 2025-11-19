"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Import the Image component

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Background Gradient (Red to Light Red)
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#F03B28] to-[#FF6666] backdrop-blur-md shadow-lg">
      
      {/* 
        ULTRAWIDE FIX: 
        Changed 'max-w-7xl' to 'max-w-6xl'. 
        This pulls the edges in slightly so the logo and links aren't 
        stuck on the far edges of a wide monitor.
      */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          
          {/* Logo Section */}
          <Link
            href="/"
            className="group flex items-center gap-3 hover:scale-105 transition-transform duration-300"
          >
            {/* Image Container with white backdrop for contrast against red */}
            <div className="relative w-20 h-20  rounded-full  shadow-sm group-hover:shadow-md transition-all">
               {/* Ensure you have the file at public/branding/logo.png */}
               <Image 
                 src="/branding/479runclub_logo.png" 
                 alt="479 Run Club Logo"
                 fill
                 className="object-cover"
                 sizes="160px"
               />
            </div>

            {/* Text Logo */}
            <span className="text-xl font-bold text-gray-900 group-hover:shadow-md-rounded transition-all">
              479 Run Club
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-gray-900 font-bold relative group">
              <span className="relative z-10">About</span>
              {/* Dark hover effect instead of white */}
              <span className="absolute inset-0 bg-black/0 group-hover:bg-black/5 rounded-lg transition-all duration-300 -m-2 p-2"></span>
              {/* Black underline */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              href="/events"
              className="text-gray-900 font-bold relative group"
            >
              <span className="relative z-10">Events</span>
              <span className="absolute inset-0 bg-black/0 group-hover:bg-black/5 rounded-lg transition-all duration-300 -m-2 p-2"></span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 p-2 rounded-lg hover:bg-black/5 transition-colors focus:outline-none"
            >
              {isOpen ? (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-2 mt-2 bg-white/10 rounded-xl p-2 backdrop-blur-md border border-white/10">
              <Link
                href="/about"
                className="text-gray-900 font-bold hover:bg-black/5 px-4 py-3 rounded-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              <Link
                href="/events"
                className="text-gray-900 font-bold hover:bg-black/5 px-4 py-3 rounded-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                Events
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;