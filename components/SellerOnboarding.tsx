"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SellerOnboarding() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState('');

  const handleConnect = () => {
    // Simulate connection
    router.push('/seller/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#080c12] flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-white text-3xl font-bold mb-2">Seller Onboarding</h1>
          <p className="text-[#9ca3af]">Connect your Roblox account to start selling</p>
        </div>

        {/* Status Cards - Centered */}
        <div className="flex justify-center mb-8">
          {/* Roblox Account */}
          <div className="bg-[#04080c] border border-[#1d2535] rounded-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <span className="text-[#3b82f6]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" /><path d="M4 6v12c0 1.1.9 2 2 2h14v-4" /><path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z" /></svg>
                </span>
                <h3 className="text-white font-bold text-lg">Roblox Account</h3>
              </div>
              <div className="w-6 h-6 rounded-full bg-[#ef4545]/20 flex items-center justify-center border border-[#ef4545]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ef4545" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              </div>
            </div>
            <p className="text-[#9ca3af] text-sm">Connect your Roblox account to deliver items</p>
          </div>
        </div>

        {/* Connect Form */}
        <div className="bg-[#04080c] border border-[#1d2535] rounded-xl p-8">
          <h2 className="text-white text-xl font-bold text-center mb-8">Connect Roblox Account</h2>
          
          <div className="space-y-6 max-w-xl mx-auto">
            <div>
              <label className="block text-[#9ca3af] text-sm font-medium mb-2">Roblox Username</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your Roblox username"
                className="w-full bg-[#080c12] border border-[#1d2535] rounded-lg h-12 px-4 text-white focus:border-[#ed4c5c] outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-[#9ca3af] text-sm font-medium mb-2">Roblox User ID</label>
              <input 
                type="text" 
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Enter your Roblox User ID"
                className="w-full bg-[#080c12] border border-[#1d2535] rounded-lg h-12 px-4 text-white focus:border-[#ed4c5c] outline-none transition-colors"
              />
              <p className="text-[#9ca3af] text-xs mt-2 text-center">You can find your User ID on your Roblox profile page</p>
            </div>

            <button 
              onClick={handleConnect}
              className="w-full h-12 text-white font-bold rounded-lg transition-all hover:opacity-90 active:scale-[0.98]"
              style={{
                background: "linear-gradient(to right, #ed4c5c, #ff4457)"
              }}
            >
              Connect Roblox Account
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}