"use client";

import React, { useState } from 'react';
import { createItem } from '@/lib/actions/items';
import { CreateItemInput } from '@/lib/validations';
import { useAuth } from '@/context/AuthContext';

export default function ListItemsPage() {
  const { user, isLoggedIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isLoggedIn || !user?.id) {
      setMessage("You must be logged in to list an item.");
      return;
    }

    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const itemData: CreateItemInput = {
      name: formData.get("name") as string,
      game: formData.get("game") as string,
      robux_price: parseInt(formData.get("robux_price") as string),
      price: parseFloat(formData.get("price") as string),
      description: formData.get("description") as string,
      category: formData.get("category") as string,
      image: formData.get("image") as string || undefined,
    };

    const result = await createItem(user.id, itemData);
    if (result.success) {
      setMessage("Item listed successfully!");
      (e.target as HTMLFormElement).reset();
    } else {
      setMessage("Error: " + result.error);
    }
    setLoading(false);
  };

  return (
    <div className="bg-[#04080c] min-h-[500px] rounded-[18px] p-8 text-white border border-[#1d2535]">
      <h1 className="text-2xl font-bold mb-6" style={{ fontFamily: "Changa, sans-serif" }}>List New Item</h1>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <div className="flex flex-col gap-1">
          <label className="text-[14px] text-[#999]">Item Name</label>
          <input name="name" required className="bg-[#1d2535] border border-[#313131] rounded-[8px] h-[40px] px-3 outline-none focus:border-[#ed4c5c]" />
        </div>
        
        <div className="flex flex-col gap-1">
          <label className="text-[14px] text-[#999]">Game</label>
          <select name="game" required className="bg-[#1d2535] border border-[#313131] rounded-[8px] h-[40px] px-3 outline-none focus:border-[#ed4c5c]">
            <option value="Blox Fruits">Blox Fruits</option>
            <option value="Pets Go">Pets Go</option>
            <option value="Limiteds">Limiteds</option>
            <option value="Anime Vanguards">Anime Vanguards</option>
          </select>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col gap-1 flex-1">
            <label className="text-[14px] text-[#999]">Robux Value</label>
            <input name="robux_price" type="number" required className="bg-[#1d2535] border border-[#313131] rounded-[8px] h-[40px] px-3 outline-none focus:border-[#ed4c5c]" />
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <label className="text-[14px] text-[#999]">Price (USD)</label>
            <input name="price" type="number" step="0.01" required className="bg-[#1d2535] border border-[#313131] rounded-[8px] h-[40px] px-3 outline-none focus:border-[#ed4c5c]" />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-[14px] text-[#999]">Description</label>
          <textarea name="description" className="bg-[#1d2535] border border-[#313131] rounded-[8px] min-h-[80px] p-3 outline-none focus:border-[#ed4c5c]" />
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="bg-[#ed4c5c] h-[45px] rounded-[13px] font-bold text-white mt-4 disabled:opacity-50"
        >
          {loading ? "Listing..." : "List Item"}
        </button>

        {message && <p className={`text-center mt-4 ${message.includes("Error") ? "text-red-500" : "text-green-500"}`}>{message}</p>}
      </form>
    </div>
  );
}
