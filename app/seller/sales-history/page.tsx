"use client";

import React from 'react';

export default function SalesHistoryPage() {
  return (
    <div>
      <h2 className="text-white text-[18px] font-bold mb-2" style={{ fontFamily: "Geist, sans-serif" }}>Past Transactions</h2>
      <p className="text-[#737983] text-[16px] mb-8" style={{ fontFamily: "Geist, sans-serif" }}>Orders history since the beginning</p>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-[24px] mb-[64px]">
        <div className="bg-[#04080c] h-[261px] rounded-[4px] flex flex-col items-center justify-center relative">
          <h3 className="text-white text-[18px] font-bold absolute top-[40px] left-[50%] -translate-x-1/2" style={{ fontFamily: "Geist, sans-serif" }}>Total sold</h3>
          <span className="text-white text-[48px] font-extrabold" style={{ fontFamily: "Geist, sans-serif" }}>$0.00 USD</span>
        </div>
        <div className="bg-[#04080c] h-[261px] rounded-[4px] flex flex-col items-center justify-center relative">
          <h3 className="text-white text-[18px] font-bold absolute top-[40px] left-[50%] -translate-x-1/2" style={{ fontFamily: "Geist, sans-serif" }}>Total transactions performed</h3>
          <span className="text-white text-[48px] font-extrabold" style={{ fontFamily: "Geist, sans-serif" }}>0</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-4">
        <button className="w-[129px] h-[32px] bg-[#ed4c5c] rounded-[4px] text-white text-[18px] flex items-center justify-center">Completed</button>
        <button className="w-[103px] h-[32px] bg-[#04080c] rounded-[4px] text-white text-[18px] flex items-center justify-center">Pending</button>
        <button className="w-[103px] h-[32px] bg-[#04080c] rounded-[4px] text-white text-[18px] flex items-center justify-center">Flagged</button>
      </div>

      {/* Table */}
      <div className="bg-[#04080c] min-h-[117px] rounded-[4px] p-[22px]">
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] text-white text-[20px] font-bold mb-4" style={{ fontFamily: "Geist, sans-serif" }}>
           <span>Tracking ID</span>
           <span>Buyer Name</span>
           <span>Buyer Email</span>
           <span>Buyer IP</span>
           <span>Buyer Account</span>
           <span>Item info</span>
           <span className="text-right">Price</span>
        </div>
        <div className="text-center text-white/80 text-[16px] mt-8">No sales found.</div>
      </div>
    </div>
  );
}
