"use client";

import React from 'react';

export default function ChargebackPage() {
  return (
    <div className="bg-[#04080c] min-h-[117px] rounded-[4px] p-[22px]">
      <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] text-white text-[20px] font-bold mb-4" style={{ fontFamily: "Geist, sans-serif" }}>
          <span>Tracking ID</span>
          <span>Buyer ID</span>
          <span>Item</span>
          <span>Price</span>
          <span>Fee</span>
          <span>IP</span>
          <span className="text-right">Date</span>
      </div>
      <div className="text-center text-white/80 text-[16px] mt-8">No disputes found.</div>
    </div>
  );
}
