"use client";

import React from 'react';

// Assets
const imgBloxFruits = "/assets/market/blox-fruits-logo.webp";
const imgGrowGarden = "/assets/market/grow-a-garden-logo.webp";
const imgStealBrainrot = "/assets/market/steal-brainrot-logo.webp";
const imgPlants = "/assets/market/plants-vs-brainrot-logo.webp";
const imgBlueLock = "/assets/market/blue-lock-logo.webp";
const imgAnime = "/assets/market/anime-vanguards-logo.webp";
const imgPetsGo = "/assets/market/pets-go-logo.webp";
const imgSilverEmperor = "/assets/market/silver-emperor.png";
const imgSearch = "/assets/market/search.svg";
const imgCaret = "/assets/market/caret.svg";
const imgGroup3 = "/assets/market/group3.svg";

export default function MarketPage() {
  const games = [
    { name: "Limiteds", img: imgPetsGo }, // Using Pets Go img for limiteds as per design context order? Actually limiteds is separate. Figma context has 1:902 link with pets-go-logo for "Limiteds"? No, 1:902 says "Limiteds" text but uses "pets-go-logo". I'll follow that.
    { name: "Blox Fruits", img: imgBloxFruits },
    { name: "Grow a Garden", img: imgGrowGarden },
    { name: "Steal a Brainrot", img: imgStealBrainrot },
    { name: "Plants vs Brainrot", img: imgPlants },
    { name: "Blue Lock: Rivals", img: imgBlueLock },
    { name: "Anime Vanguards", img: imgAnime },
  ];

  const items = Array(8).fill({
    name: "Super Super Happy Face",
    price: "1699 $",
    robux: "789 000",
    image: imgSilverEmperor
  });

  return (
    <div className="min-h-screen bg-[#080c12] pt-[40px] pb-20">
      <div className="max-w-[1600px] mx-auto px-4 flex gap-[30px]">
        
        {/* Sidebar */}
        <aside className="w-[284px] shrink-0 flex flex-col gap-[12px]">
          
          {/* Search Bar */}
          <div className="bg-[#04080c] h-[38px] rounded-[10px] flex items-center px-4 justify-between border border-[#1d2535]">
             <span className="text-[rgba(170,171,173,0.52)] text-[11px] font-bold">Search</span>
             <img src={imgSearch} alt="Search" className="w-[14px] h-[14px]" />
          </div>

          {/* Game List */}
          <div className="flex flex-col gap-[12px]">
            {games.map((game, i) => (
              <div key={i} className="bg-[rgba(29,37,53,0.25)] border border-[rgba(29,37,53,0.55)] h-[50px] rounded-[12px] flex items-center px-[10px] relative overflow-hidden group hover:bg-[rgba(29,37,53,0.4)] transition-colors cursor-pointer">
                <div className="w-[34px] h-[34px] rounded-[8px] overflow-hidden shrink-0">
                  <img src={game.img} alt={game.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-white text-[14px] font-semibold ml-[10px]" style={{ fontFamily: "Changa, sans-serif" }}>{game.name}</span>
                <div className="absolute right-[10px] w-[28px] h-[28px] bg-[#1d2535] rounded-[8px] flex items-center justify-center">
                   <img src={imgGroup3} alt=">" className="w-[14px] h-[14px] opacity-50 group-hover:opacity-100" />
                </div>
              </div>
            ))}
          </div>

          {/* Filters - Price Range */}
          <div className="bg-transparent border border-[#1d2535] rounded-[8px] p-[14px] mt-[20px]">
             <div className="flex items-center justify-center gap-2 mb-4 relative">
               <span className="text-[#809bb5] text-[14px] font-bold" style={{ fontFamily: "Changa, sans-serif" }}>Price Range</span>
               <img src={imgCaret} alt="" className="w-[20px] h-[20px] absolute right-0" />
             </div>
             {/* Slider Mock */}
             <div className="relative h-[8px] bg-[#1d2535] rounded-full mb-6">
               <div className="absolute left-0 right-0 top-0 bottom-0 bg-[#ed4c5c] rounded-full mx-4"></div>
               <div className="absolute left-4 top-1/2 -translate-y-1/2 w-[14px] h-[14px] bg-white rounded-full shadow cursor-pointer"></div>
               <div className="absolute right-4 top-1/2 -translate-y-1/2 w-[14px] h-[14px] bg-white rounded-full shadow cursor-pointer"></div>
             </div>
             {/* Inputs */}
             <div className="flex items-center justify-between gap-2">
               <div className="bg-[#1d2535] h-[36px] rounded-[6px] flex items-center px-2 w-full justify-between">
                 <span className="text-white text-[14px] font-semibold">$</span>
                 <span className="text-white text-[14px] font-medium">0.00</span>
               </div>
               <span className="text-[#1d2535]">-</span>
               <div className="bg-[#1d2535] h-[36px] rounded-[6px] flex items-center px-2 w-full justify-between">
                 <span className="text-white text-[14px] font-semibold">$</span>
                 <span className="text-white text-[14px] font-medium">541.60</span>
               </div>
             </div>
          </div>

          {/* Filters - Payment Method */}
          <div className="bg-transparent border border-[#1d2535] rounded-[8px] p-[14px]">
             <div className="flex items-center justify-center gap-2 mb-4 relative">
               <span className="text-[#809bb5] text-[14px] font-bold" style={{ fontFamily: "Changa, sans-serif" }}>Payment Method</span>
               <img src={imgCaret} alt="" className="w-[20px] h-[20px] absolute right-0" />
             </div>
             <div className="flex flex-col gap-3">
               <div className="flex items-center justify-between cursor-pointer">
                 <span className="text-white text-[14px] font-semibold ml-8">All</span>
                 <div className="w-[24px] h-[24px] bg-[#ed4c5c] rounded-[8px] flex items-center justify-center">
                   <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
                 </div>
               </div>
               <div className="flex items-center justify-between cursor-pointer">
                 <span className="text-white text-[14px] font-semibold ml-8">Crypto</span>
                 <div className="w-[24px] h-[24px] border border-[#ed4c5c] rounded-[8px]"></div>
               </div>
             </div>
          </div>

          {/* Buttons */}
          <button className="bg-[#ed4c5c] h-[43px] rounded-[13px] text-white text-[12px] font-bold mt-[20px]">Confirm</button>
          <button className="bg-[#080c12] border border-[#313131] h-[43px] rounded-[13px] text-white text-[12px] font-bold">Clear all</button>

          <div className="mt-8 text-center text-[12px] text-[#6b7685] font-bold">
            © 2020-2025 <span className="font-extrabold text-[#7a8aa3]">BloxBolt</span> All Rights Reserved
          </div>

        </aside>

        {/* Main Content */}
        <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[24px] auto-rows-min">
           {items.map((item, index) => (
             <div key={index} className="bg-[#04080c] rounded-[18px] p-[20px] flex flex-col items-center relative h-[354px]">
               {/* Badge */}
               <div className="absolute top-[21px] left-[20px] bg-[#ed4c5c] w-[46px] h-[25px] rounded-[7px] flex items-center justify-center">
                 <span className="text-white text-[15px] font-semibold" style={{ fontFamily: "Changa, sans-serif" }}>New</span>
               </div>
               
               {/* Image */}
               <div className="w-[150px] h-[150px] mt-[40px] mb-[20px] relative">
                 <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
               </div>

               {/* Title */}
               <h3 className="text-white text-[16px] font-bold text-center mb-[20px]" style={{ fontFamily: "Changa, sans-serif" }}>{item.name}</h3>

               <div className="w-full h-[1px] bg-[#999] mb-[20px]"></div>

               {/* Details */}
               <div className="w-full flex justify-between px-4">
                 <div className="flex flex-col gap-1">
                   <span className="text-[#999] text-[15px] font-bold">Robux</span>
                   <span className="text-white text-[15px] font-bold">{item.robux}</span>
                 </div>
                 <div className="flex flex-col gap-1 text-right">
                   <span className="text-[#999] text-[15px] font-bold">Price</span>
                   <span className="text-white text-[15px] font-bold">{item.price}</span>
                 </div>
               </div>
             </div>
           ))}
        </main>

      </div>
    </div>
  );
}
