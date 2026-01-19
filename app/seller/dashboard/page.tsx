"use client";

import React from 'react';

export default function SellerDashboard() {
  return (
    <div className="grid grid-cols-2 gap-[24px]">
      {/* Transactions Today */}
      <div className="bg-[#04080c] h-[391px] rounded-[4px] flex flex-col items-center justify-center relative">
        <h3 className="text-white text-[18px] font-bold absolute top-[40px] left-[50%] -translate-x-1/2" style={{ fontFamily: "Geist, sans-serif" }}>Transactions Today</h3>
        <span className="text-white text-[48px] font-extrabold" style={{ fontFamily: "Geist, sans-serif" }}>0</span>
      </div>

      {/* Today's Revenue */}
      <div className="bg-[#04080c] h-[391px] rounded-[4px] flex flex-col items-center justify-center relative">
        <h3 className="text-white text-[18px] font-bold absolute top-[40px] left-[50%] -translate-x-1/2" style={{ fontFamily: "Geist, sans-serif" }}>Today’s Revenue</h3>
        <span className="text-white text-[48px] font-extrabold" style={{ fontFamily: "Geist, sans-serif" }}>$0.00</span>
      </div>
      
      {/* Recent Orders Section (from node 5:1056 lower part) */}
      <div className="col-span-2 mt-[24px]">
         <h2 className="text-white text-[18px] font-bold uppercase mb-2" style={{ fontFamily: "Geist, sans-serif" }}>recent orders</h2>
         <p className="text-[#737983] text-[18px] mb-6" style={{ fontFamily: "Geist, sans-serif" }}>Most recent orders today, in GMT.</p>
         
         <div className="bg-[#04080c] h-[78px] rounded-[4px] flex items-center px-[22px]">
            <div className="w-full grid grid-cols-[1fr_1fr_1fr_1fr_1fr] text-white text-[20px] font-bold" style={{ fontFamily: "Geist, sans-serif" }}>
               <span>Tracking ID</span>
               <span className="text-center">Item</span>
               <span className="text-center">Price</span>
               <span className="text-center">Fee</span>
               <span className="text-right">Date</span>
            </div>
         </div>
      </div>
    </div>
  );
}
