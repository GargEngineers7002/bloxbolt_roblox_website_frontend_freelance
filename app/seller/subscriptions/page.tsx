"use client";

import React from 'react';

// Assets
const imgImage = "/assets/seller/image.png";
const imgImage1 = "/assets/seller/image1.png";
const imgImage2 = "/assets/seller/image2.png";

export default function SubscriptionsPage() {
  return (
    <div>
      <h2 className="text-white text-[18px] font-bold mb-8" style={{ fontFamily: "Geist, sans-serif" }}>Subscriptions</h2>
      
      <div className="w-full h-[171px] rounded-[4px] mb-[16px] p-[29px] flex flex-col justify-center" 
           style={{ background: "linear-gradient(159deg, rgba(4, 4, 12, 1) 40%, rgba(48, 17, 17, 1) 100%)" }}>
        <h1 className="text-white text-[24px] font-bold uppercase mb-4" style={{ fontFamily: "Geist, sans-serif" }}>BloxBolt Premium Membership</h1>
        <p className="text-[#737983] text-[16px] leading-[1.2]" style={{ fontFamily: "Geist, sans-serif" }}>
          Upgrade your Adurite account to receive a variety of perks and<br/>bonuses to enhance your selling experience
        </p>
      </div>

      <div className="grid grid-cols-2 gap-[24px]">
        {/* Standard Plan */}
        <div className="bg-gradient-to-t from-[rgba(160,160,180,0.17)] to-transparent rounded-[12px] p-[22px] min-h-[400px]">
           <h3 className="text-white text-[22px] font-bold mb-2">Standard</h3>
           <p className="text-[#737983] text-[16px] mb-12">Basic Membership</p>
           
           <div className="flex items-baseline gap-2 mb-8">
             <span className="text-white text-[56px] font-bold">$0</span>
             <span className="text-white text-[16px]">/ Month</span>
           </div>

           <div className="flex flex-col gap-4">
             <div className="flex items-center gap-4">
               <img src={imgImage} alt="" className="w-[32px] h-[32px]" />
               <span className="text-white text-[16px] font-medium">Limiteds 10% Fee</span>
             </div>
             <div className="flex items-center gap-4">
               <img src={imgImage} alt="" className="w-[32px] h-[32px]" />
               <span className="text-white text-[16px] font-medium">In Game Items 7% Fee</span>
             </div>
             <div className="flex items-center gap-4">
               <img src={imgImage} alt="" className="w-[32px] h-[32px]" />
               <span className="text-white text-[16px] font-medium">24/7 Access to Support</span>
             </div>
           </div>

           <p className="text-white text-[16px] font-bold text-center mt-12">You currently have this plan</p>
        </div>

        {/* Premium Plan */}
        <div className="bg-[rgba(255,15,19,0.1)] border border-[rgba(255,202,202,0.5)] backdrop-blur-[17px] rounded-[12px] p-[22px] min-h-[400px] relative overflow-hidden">
           {/* Abstract Background Decoration */}
           <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-red-500/20 blur-[80px] pointer-events-none"></div>

           <h3 className="text-white text-[22px] font-bold mb-2 relative z-10">Premium</h3>
           <p className="text-white text-[16px] mb-12 relative z-10">Perfect for high-volume sellers</p>
           
           <div className="flex items-baseline gap-2 mb-8 relative z-10">
             <span className="text-white text-[56px] font-bold">$10.20</span>
             <span className="text-white text-[16px]">/ Month</span>
           </div>

           <div className="flex flex-col gap-4 relative z-10">
             <div className="flex items-center gap-4">
               <img src={imgImage1} alt="" className="w-[32px] h-[32px]" />
               <span className="text-white text-[16px] font-medium">Limiteds 7% Fee, 5% Fee for PayPal and Stripe</span>
             </div>
             <div className="flex items-center gap-4">
               <img src={imgImage2} alt="" className="w-[32px] h-[32px]" />
               <span className="text-white text-[16px] font-medium">In Game Items 7% Fee</span>
             </div>
           </div>

           <button className="w-full h-[48px] bg-white rounded-[4px] text-[#ff3b4e] text-[16px] font-bold mt-12 relative z-10">
             Purchase Now
           </button>
        </div>
      </div>
    </div>
  );
}
