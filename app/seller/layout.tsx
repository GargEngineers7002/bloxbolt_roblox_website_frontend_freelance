"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SellerLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const tabs = [
    { name: "Dashboard", path: "/seller/dashboard" },
    { name: "List Items", path: "/seller/list-items" },
    { name: "Sales History", path: "/seller/sales-history" },
    { name: "Subscriptions", path: "/seller/subscriptions" },
    { name: "Chargeback Center", path: "/seller/chargeback" },
  ];

  if (pathname === '/seller/onboarding') {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-[#080c12] pt-[40px] pb-20 flex justify-center">
      <div className="w-[1518px] relative">
        <h1 className="text-white text-[32px] font-extrabold uppercase mb-[40px]" style={{ fontFamily: "Geist, sans-serif" }}>seller’s panel</h1>
        
        <div className="w-[240px] flex flex-col gap-[8px] absolute left-0 top-[98px]">
          {tabs.map((tab) => {
            const isActive = pathname === tab.path;
            return (
              <Link 
                key={tab.path} 
                href={tab.path}
                className={`
                  h-[61px] rounded-[4px] flex items-center justify-center text-[20px] font-bold transition-all
                  ${isActive 
                    ? "bg-[#04080c] text-white border-b-[1.5px] border-[#ed4c5c] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" 
                    : "bg-[#04080c] text-white/50 border-b-[1.5px] border-transparent hover:text-white"
                  }
                `}
                style={{ fontFamily: "Geist, sans-serif" }}
              >
                {tab.name}
              </Link>
            );
          })}
        </div>

        <div className="ml-[258px]">
          {children}
        </div>
      </div>
    </div>
  );
}
