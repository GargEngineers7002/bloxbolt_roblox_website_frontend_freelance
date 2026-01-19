"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

// Assets
const imgEnPng = "/assets/navbar/en.png";
const imgSvg = "/assets/navbar/arrow.svg"; // Arrow/Icon
const imgGroup = "/assets/navbar/group.svg"; // Icon in button
const imgDiscord = "/assets/navbar/discord.svg";
const imgUser = "/assets/navbar/user.svg";

const Navbar: React.FC = () => {
  const { isLoggedIn, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    router.push('/');
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="w-full relative z-50">
      {/* Top Red Banner (Consistent for both states) */}
      <div className="bg-[#ed4c5c] h-[35px] w-full flex items-center justify-center">
        <p className="font-semibold text-[13px] text-white tracking-normal" style={{ fontFamily: "Changa, sans-serif" }}>
          SELL YOUR LIMITEDS & ROBLOX ITEMS SAFELY AND QUICKLY WITH BOXYTRADE
        </p>
      </div>

      {/* Main Navbar */}
      <nav className="bg-[#04080c] h-[80px] w-full flex items-center px-8 justify-between">
          
          {/* Center Navigation Links (Visible only when logged in) */}
          <div className="flex items-center gap-[30px] ml-[400px]">
            {isLoggedIn ? (
              <>
                <Link href="/" className="text-[#bfbfbf] text-[20px] font-medium hover:text-white" style={{ fontFamily: "Changa, sans-serif" }}>Home</Link>
                <Link href="/market" className="text-[#bfbfbf] text-[20px] font-medium hover:text-white" style={{ fontFamily: "Changa, sans-serif" }}>Market</Link>
                <Link href="#" className="text-[#bfbfbf] text-[20px] font-medium hover:text-white" style={{ fontFamily: "Changa, sans-serif" }}>Support</Link>
                <Link href="#" className="text-[#bfbfbf] text-[20px] font-medium hover:text-white" style={{ fontFamily: "Changa, sans-serif" }}>Affiliate</Link>
                <Link href="#" className="text-[#bfbfbf] text-[20px] font-medium hover:text-white" style={{ fontFamily: "Changa, sans-serif" }}>Claims</Link>
              </>
            ) : (
              // Spacer to maintain layout balance if needed, or just empty
              <div className="w-[1px]"></div> 
            )}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-[10px]">
            {/* Join Discord Button (Common) */}
            <button className="w-[189px] h-[46px] rounded-[8px] bg-gradient-to-r from-[#ed4c5c] to-[#ff4457] flex items-center justify-center gap-2 text-white font-semibold text-[14px]" style={{ fontFamily: "Changa, sans-serif" }}>
                <img src={imgDiscord} alt="Discord" className="w-[27px] h-[27px]" />
                <span>Join Discord!</span>
                <div className="w-[16px] h-[16px] relative">
                  <img src={imgGroup} alt="" className="w-full h-full object-contain" />
                </div>
            </button>

            {/* Language Selector (Common) */}
            <div className="w-[48px] h-[46px] bg-[#1d2535] rounded-l-[8px] flex items-center justify-center">
                <img src={imgEnPng} alt="EN" className="w-[28px] h-[28px] rounded-full object-cover" />
            </div>

            {/* Currency Selector (Common - Added to logged out for consistency) */}
            <div className="w-[71px] h-[46px] bg-[#1d2535] rounded-r-[8px] flex items-center justify-center gap-2 ml-[-5px]">
                <span className="text-white text-[14px] font-semibold" style={{ fontFamily: "Changa, sans-serif" }}>USD</span>
                <img src={imgSvg} alt="Arrow" className="w-[20px] h-[20px]" />
            </div>

            {/* Conditional Buttons */}
            {isLoggedIn ? (
              /* User Dropdown */
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-[146px] h-[46px] rounded-[8px] bg-[#1d2535] flex items-center justify-center gap-3 text-white font-semibold text-[14px] hover:bg-[#2a3245] transition-colors" 
                  style={{ fontFamily: "Changa, sans-serif" }}
                >
                    <img src={imgUser} alt="User" className="w-[20px] h-[20px]" />
                    <span>Profile</span>
                    <img src={imgSvg} alt="Arrow" className={`w-[14px] h-[14px] transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 top-[55px] w-[200px] bg-[#1d2535] rounded-[8px] shadow-lg border border-[#2a3245] overflow-hidden flex flex-col z-50">
                    <Link 
                      href="/profile" 
                      className="px-4 py-3 text-white hover:bg-[#2a3245] transition-colors text-left"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Profile
                    </Link>
                    <Link 
                      href="/seller/onboarding" 
                      className="px-4 py-3 text-white hover:bg-[#2a3245] transition-colors text-left"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Seller Dashboard
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="px-4 py-3 text-[#ed4c5c] hover:bg-[#2a3245] transition-colors text-left font-bold border-t border-[#2a3245]"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Login/Register Buttons (Adapted to new design) */
              <>
                <Link 
                  href="/login"
                  className="w-[100px] h-[46px] rounded-[8px] bg-[#1d2535] flex items-center justify-center text-white font-semibold text-[14px] hover:bg-[#2a3245] transition-colors"
                  style={{ fontFamily: "Changa, sans-serif" }}
                >
                  Login
                </Link>

                <Link 
                  href="/register"
                  className="w-[120px] h-[46px] rounded-[8px] bg-gradient-to-r from-[#ed4c5c] to-[#ff4457] flex items-center justify-center text-white font-semibold text-[14px] hover:opacity-90 transition-opacity"
                  style={{ fontFamily: "Changa, sans-serif" }}
                >
                  Register
                </Link>
              </>
            )}
          </div>
      </nav>
    </div>
  );
};

export default Navbar;