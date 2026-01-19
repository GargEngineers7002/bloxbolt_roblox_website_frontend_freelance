"use client";

import React from "react";
import Link from "next/link";
import FeaturesBar from "@/components/FeaturesBar";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import TrustedBy from "@/components/TrustedBy";
import FAQ from "@/components/FAQ";
import { useAuth } from "@/context/AuthContext";

// Assets (Local)
const imgVector = "/assets/general/hero-vector.svg";
const imgImage14 = "/assets/general/hero-bg.png";
const imgPlayButtonBg = "/assets/general/play-button-accent.png";
const imgPlayIcon = "/assets/general/play-icon.svg";

export default function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <main className="min-h-screen bg-[#080c12] text-white relative overflow-x-hidden font-geist">
      
      {/* --- Hero Section Backgrounds --- */}
      <div className="absolute top-0 left-0 w-full h-[1839px] z-0 pointer-events-none">
         <img src={imgVector} alt="" className="w-full h-full object-cover opacity-100" />
      </div>

      <div className="absolute top-0 left-0 w-full h-[843px] z-0 pointer-events-none" 
           style={{ background: "linear-gradient(57.34deg, rgba(246, 70, 70, 0.44) 66.95%, rgba(144, 41, 41, 0) 71.1%)" }} 
      />

      <div className="absolute top-0 left-[-19px] w-full h-[849px] z-0 pointer-events-none mix-blend-hard-light opacity-50">
         <img src={imgImage14} alt="" className="w-full h-full object-cover" />
      </div>
      
      {/* --- Decorative Lines --- */}
      <div className="absolute top-[843px] left-0 w-full h-[6px] bg-gradient-to-r from-[#ff3b3b] to-transparent via-[#89282800] z-0" />
      
      {/* --- Hero Content --- */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto min-h-[1080px]">
        
        {/* Main Title */}
        <div className="absolute top-[128px] left-[478px] w-[1020px]">
          <h1 className="text-[64px] font-extrabold leading-[1.076]" style={{ fontFamily: "Geist, sans-serif", fontWeight: 800 }}>
            Your <span className="text-[#ff4c4c]">Items</span>, Ready to <span className="text-[#ff4c4c]">Buy</span> or <span className="text-[#ff4c4c]">Sell</span> <br />
            {"            "}in Just a <span className="text-[#ff4c4c]">Few Clicks</span>.
          </h1>
        </div>

        {/* Subtitle */}
        <div className="absolute top-[300px] left-[585px] w-[740px]">
          <p className="text-[24px] font-medium leading-[1.076]" style={{ fontFamily: "Geist, sans-serif" }}>
            Sell your Murder Mystery 2 and Tower Defense items with ease! <br />
            Get the best prices and reach a wide audience on our platform.
          </p>
        </div>

        {/* CTA Button Group */}
        <div className="absolute top-[418px] left-[793px] w-[395px] h-[90px]">
           {/* Background Decorative Image */}
           <div className="absolute top-0 left-[282px] w-[113px] h-[81px]">
             <img src={imgPlayButtonBg} alt="" className="w-full h-full object-contain" />
           </div>
           
           {/* Link Wrapper */}
           <Link 
             href={isLoggedIn ? "/market" : "/register"}
             className="absolute top-[29px] left-0 w-[270px] h-[61px] bg-[#ef4545] rounded-[21px] flex items-center justify-start pl-[20px] gap-4 hover:opacity-90 transition-opacity"
             style={{ border: "1px solid transparent" }}
           >
             <div className="w-[27px] h-[28px] overflow-hidden relative">
               <img src={imgPlayIcon} alt="Play" className="w-full h-full object-contain" />
             </div>
             <span className="text-[20px] font-extrabold leading-[1.076] text-white" style={{ fontFamily: "Geist, sans-serif" }}>
               Start Trading Now!
             </span>
           </Link>
        </div>

        {/* Features Bar */}
        <div className="absolute top-[602px] left-0 w-full z-20 pointer-events-none"> 
           <div className="pointer-events-auto">
             <FeaturesBar />
           </div>
        </div>

        {/* Why Choose Us */}
        <div className="absolute top-[915px] left-[80px] right-[84px]">
           <WhyChooseUs />
        </div>

        {/* How It Works */}
        <div className="absolute top-[1730px] w-full">
           <HowItWorks />
        </div>

        {/* Trusted By */}
        <div className="absolute top-[2920px] w-full">
           <TrustedBy />
        </div>

        {/* FAQ */}
        <div className="absolute top-[3489px] w-full">
           <FAQ />
        </div>

      </div>

      <div className="h-[3300px] w-full pointer-events-none opacity-0"></div>
    </main>
  );
}
