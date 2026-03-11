"use client";

import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const { user, isLoggedIn, isLoading } = useAuth();
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#080c12] pt-[40px] pb-20 flex justify-center items-center">
        <div className="text-white text-2xl font-bold animate-pulse">Loading...</div>
      </div>
    );
  }

  if (!isLoggedIn) {
    router.push('/');
    return null;
  }

  const joinDate = user?.createdAt 
    ? new Date(user.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : "Unknown Date";

  return (
    <div className="min-h-screen bg-[#080c12] pt-[40px] pb-20 flex justify-center">
      <div className="w-[1477px] bg-[#04080c] rounded-[22px] p-[64px] relative">
        
        {/* Header */}
        <h1 className="text-white text-[40px] font-bold mb-[54px]" style={{ fontFamily: "Geist, sans-serif" }}>Your Details</h1>

        {/* Section 1: Overview */}
        <div className="mb-[64px]">
          <h2 className="text-white text-[24px] font-bold mb-[44px]" style={{ fontFamily: "Geist, sans-serif" }}>Overview</h2>
          
          <div className="grid grid-cols-[125px_1fr_auto] gap-y-[30px] items-center">
            {/* Name */}
            <span className="text-[#666a71] text-[22px] font-bold" style={{ fontFamily: "Geist, sans-serif" }}>Name</span>
            <span className="text-white text-[22px] font-bold" style={{ fontFamily: "Geist, sans-serif" }}>{user?.name || "No name set"}</span>
            <button className="text-[#ed4c5c] text-[22px] font-bold underline" style={{ fontFamily: "Geist, sans-serif" }}>EDIT</button>

            {/* Email */}
            <span className="text-[#666a71] text-[22px] font-bold" style={{ fontFamily: "Geist, sans-serif" }}>Email</span>
            <span className="text-white text-[22px] font-bold" style={{ fontFamily: "Geist, sans-serif" }}>{user?.email}</span>
            <button className="text-[#ed4c5c] text-[22px] font-bold underline uppercase" style={{ fontFamily: "Geist, sans-serif" }}>Change EMAIL</button>

            {/* Role */}
            <span className="text-[#666a71] text-[22px] font-bold" style={{ fontFamily: "Geist, sans-serif" }}>Role</span>
            <span className="text-white text-[22px] font-bold uppercase" style={{ fontFamily: "Geist, sans-serif" }}>{user?.role || "USER"}</span>
            <div />

            {/* Balance */}
            <span className="text-[#666a71] text-[22px] font-bold" style={{ fontFamily: "Geist, sans-serif" }}>Balance</span>
            <span className="text-white text-[22px] font-bold" style={{ fontFamily: "Geist, sans-serif" }}>${user?.balance?.toFixed(2) || "0.00"}</span>
            <button className="text-[#ed4c5c] text-[22px] font-bold underline uppercase" style={{ fontFamily: "Geist, sans-serif" }}>Deposit</button>
          </div>
        </div>

        <div className="w-full h-px bg-[#d9d9d9] opacity-30 rounded-full mb-[64px]"></div>

        {/* Section 2: Preferences */}
        <div className="mb-[64px]">
          <h2 className="text-white text-[24px] font-bold mb-[44px]" style={{ fontFamily: "Geist, sans-serif" }}>Preferences</h2>
          
          <div className="grid grid-cols-[125px_1fr] gap-y-[30px] items-center">
            <span className="text-[#666a71] text-[22px] font-bold" style={{ fontFamily: "Geist, sans-serif" }}>Language</span>
            <span className="text-white text-[22px] font-bold" style={{ fontFamily: "Geist, sans-serif" }}>English</span>

            <span className="text-[#666a71] text-[22px] font-bold" style={{ fontFamily: "Geist, sans-serif" }}>Currency</span>
            <span className="text-white text-[22px] font-bold" style={{ fontFamily: "Geist, sans-serif" }}>USD</span>
          </div>
        </div>

        <div className="w-full h-px bg-[#d9d9d9] opacity-30 rounded-full mb-[64px]"></div>

        <div className="text-[#666a71] text-[22px]" style={{ fontFamily: "Geist, sans-serif" }}>
          User since {joinDate}
        </div>

      </div>
    </div>
  );
}
