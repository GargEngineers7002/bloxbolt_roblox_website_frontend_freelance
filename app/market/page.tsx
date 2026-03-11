"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { getItems } from '@/lib/actions/items';
import { Item } from '@prisma/client';

interface DisplayItem {
  name: string;
  price: number;
  displayPrice: string;
  robux: string;
  image: string;
  isNew: boolean;
}

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
  const [searchQuery, setSearchQuery] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(15000);
  const [dbItems, setDbItems] = useState<DisplayItem[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await getItems();
      if (result.success && result.data && result.data.length > 0) {
        setDbItems(result.data.map((item: Item) => ({
          name: item.name,
          price: item.price,
          displayPrice: `${item.price} $`,
          robux: item.robux_price.toLocaleString(),
          image: item.image || imgSilverEmperor,
          isNew: item.isNew
        })));
      }
    };
    fetchItems();
  }, []);

  const games = [
    { name: "Limiteds", img: imgPetsGo }, 
    { name: "Blox Fruits", img: imgBloxFruits },
    { name: "Grow a Garden", img: imgGrowGarden },
    { name: "Steal a Brainrot", img: imgStealBrainrot },
    { name: "Plants vs Brainrot", img: imgPlants },
    { name: "Blue Lock: Rivals", img: imgBlueLock },
    { name: "Anime Vanguards", img: imgAnime },
  ];

  const allItems = useMemo(() => {
    return dbItems.length > 0 ? dbItems : [];
  }, [dbItems]);

  const filteredItems = useMemo(() => {
    return allItems.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = item.price >= minPrice && item.price <= maxPrice;
      return matchesSearch && matchesPrice;
    });
  }, [searchQuery, minPrice, maxPrice, allItems]);

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, Math.min(Number(e.target.value), maxPrice - 1));
    setMinPrice(value);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(15000, Math.max(Number(e.target.value), minPrice + 1));
    setMaxPrice(value);
  };

  const clearAll = () => {
    setSearchQuery("");
    setMinPrice(0);
    setMaxPrice(15000);
  };

  return (
    <div className="min-h-screen bg-[#080c12] pt-[40px] pb-20">
      <div className="max-w-[1600px] mx-auto px-4 flex gap-[30px]">
        
        {/* Sidebar */}
        <aside className="w-[284px] shrink-0 flex flex-col gap-[12px]">
          
          {/* Search Bar */}
          <div className="bg-[#04080c] h-[38px] rounded-[10px] flex items-center px-4 justify-between border border-[#1d2535] focus-within:border-[#ed4c5c] transition-colors">
             <input 
               type="text"
               placeholder="Search"
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="bg-transparent text-white text-[11px] font-bold outline-none w-full placeholder:text-[rgba(170,171,173,0.52)]"
             />
             <img src={imgSearch} alt="Search" className="w-[14px] h-[14px] shrink-0" />
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
             
             {/* Slider */}
             <div className="relative h-[8px] bg-[#1d2535] rounded-full mb-6 flex items-center">
               <div 
                 className="absolute h-full bg-[#ed4c5c] rounded-full"
                 style={{ 
                   left: `${(minPrice / 15000) * 100}%`, 
                   right: `${100 - (maxPrice / 15000) * 100}%` 
                 }}
               ></div>
               <input 
                 type="range"
                 min="0"
                 max="15000"
                 value={minPrice}
                 onChange={handleMinPriceChange}
                 className="absolute w-full appearance-none bg-transparent pointer-events-none cursor-pointer 
                   [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[14px] [&::-webkit-slider-thumb]:h-[14px] [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow
                   [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-[14px] [&::-moz-range-thumb]:h-[14px] [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:shadow"
                 style={{ zIndex: minPrice > 7500 ? 5 : 3 }}
               />
               <input 
                 type="range"
                 min="0"
                 max="15000"
                 value={maxPrice}
                 onChange={handleMaxPriceChange}
                 className="absolute w-full appearance-none bg-transparent pointer-events-none cursor-pointer 
                   [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[14px] [&::-webkit-slider-thumb]:h-[14px] [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow
                   [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-[14px] [&::-moz-range-thumb]:h-[14px] [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:shadow"
                 style={{ zIndex: maxPrice < 7500 ? 5 : 3 }}
               />
             </div>

             {/* Inputs */}
             <div className="flex items-center justify-between gap-2">
               <div className="bg-[#1d2535] h-[36px] rounded-[6px] flex items-center px-2 w-full justify-between focus-within:ring-1 focus-within:ring-[#ed4c5c]">
                 <span className="text-white text-[14px] font-semibold">$</span>
                 <input 
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(Math.max(0, Math.min(Number(e.target.value), maxPrice)))}
                    className="bg-transparent text-white text-[14px] font-medium outline-none w-full text-right [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                 />
               </div>
               <span className="text-[#1d2535]">-</span>
               <div className="bg-[#1d2535] h-[36px] rounded-[6px] flex items-center px-2 w-full justify-between focus-within:ring-1 focus-within:ring-[#ed4c5c]">
                 <span className="text-white text-[14px] font-semibold">$</span>
                 <input 
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Math.min(15000, Math.max(Number(e.target.value), minPrice)))}
                    className="bg-transparent text-white text-[14px] font-medium outline-none w-full text-right [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                 />
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
          <button className="bg-[#080c12] border border-[#313131] h-[43px] rounded-[13px] text-white text-[12px] font-bold" onClick={clearAll}>Clear all</button>

          <div className="mt-8 text-center text-[12px] text-[#6b7685] font-bold">
            © 2020-2025 <span className="font-extrabold text-[#7a8aa3]">BloxBolt</span> All Rights Reserved
          </div>

        </aside>

        {/* Main Content */}
        <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[24px] auto-rows-min">
           {filteredItems.length > 0 ? (
             filteredItems.map((item, index) => (
               <div key={index} className="bg-[#04080c] rounded-[18px] p-[20px] flex flex-col items-center relative h-[354px]">
                 {/* Badge */}
                 {item.isNew && (
                   <div className="absolute top-[21px] left-[20px] bg-[#ed4c5c] w-[46px] h-[25px] rounded-[7px] flex items-center justify-center">
                     <span className="text-white text-[15px] font-semibold" style={{ fontFamily: "Changa, sans-serif" }}>New</span>
                   </div>
                 )}
                 
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
                     <span className="text-white text-[15px] font-bold">{item.displayPrice}</span>
                   </div>
                 </div>
               </div>
             ))
           ) : (
             <div className="col-span-full flex flex-col items-center justify-center py-20 text-[#6b7685]">
               <p className="text-xl font-bold mb-2">No items found</p>
               <p>Try searching for something else</p>
             </div>
           )}
        </main>

      </div>
    </div>
  );
}
