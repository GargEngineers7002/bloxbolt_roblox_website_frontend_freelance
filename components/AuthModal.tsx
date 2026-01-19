"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

// Assets
const imgGoogle = "/assets/general/google-icon.png";
const imgLine = "/assets/general/line.svg";

interface AuthModalProps {
  initialView?: "login" | "register";
}

const AuthModal: React.FC<AuthModalProps> = ({ initialView = "login" }) => {
  const [view, setView] = useState<"login" | "register">(initialView);
  const { login } = useAuth();
  const router = useRouter();

  const handleAuth = () => {
    login();
    router.back();
  };

  return (
    <div className="w-[562px] h-[772px] bg-[#04080c] rounded-[36px] relative overflow-hidden flex flex-col items-center pt-[38px] px-[75px]">
      
      {/* Tabs */}
      <div className="flex w-full justify-between items-center mb-[30px] relative">
        <button 
          onClick={() => setView("register")}
          className={`flex-1 text-center text-[18px] font-bold leading-[1.685] ${view === "register" ? "text-white" : "text-white/50"}`}
          style={{ fontFamily: "Geist, sans-serif" }}
        >
          Register
        </button>
        <button 
          onClick={() => setView("login")}
          className={`flex-1 text-center text-[18px] font-bold leading-[1.685] ${view === "login" ? "text-white" : "text-white/50"}`}
          style={{ fontFamily: "Geist, sans-serif" }}
        >
          Login
        </button>
        
        {/* Animated Line - Simplified for now, just toggling position based on view */}
        <div className="absolute bottom-[-10px] left-0 w-full h-[4px]">
           <div className={`w-[50%] h-full bg-[#EF4545] transition-transform duration-300 ${view === "login" ? "translate-x-full" : "translate-x-0"}`} />
           {/* The Figma asset is a specific line image, but a CSS border/div is cleaner. 
               Figma uses 'imgGroup39917' which looks like a gradient line. 
               Let's try to replicate the look or use the asset if it's special.
               The asset is just a red line? Let's use the asset for pixel perfection if possible, 
               but CSS transition is better for the tab switch animation. 
               Let's stick to CSS for the tab indicator to ensure it works interactively.
           */}
        </div>
      </div>
      
      <div className="w-full h-[1px] bg-gray-800 mb-[40px]"></div>

      {/* Form Fields */}
      <div className="w-full flex flex-col gap-[20px]">
        
        {/* Email */}
        <div className="flex flex-col gap-[8px]">
          <label className="text-white text-[14px] leading-[1.685]" style={{ fontFamily: "Geist, sans-serif" }}>
            {view === "login" ? "Email or Username*" : "Email*"}
          </label>
          <input 
            type="text" 
            placeholder={view === "login" ? "Enter Email or Username" : "Enter Email"}
            className="w-full h-[49px] bg-[#010407] rounded-[5px] text-white px-4 placeholder:text-white/30 text-[14px] focus:outline-none focus:ring-1 focus:ring-[#ed4c5c]"
            style={{ fontFamily: "Geist, sans-serif" }}
          />
        </div>

        {/* Username (Register only) */}
        {view === "register" && (
          <div className="flex flex-col gap-[8px]">
            <label className="text-white text-[14px] leading-[1.685]" style={{ fontFamily: "Geist, sans-serif" }}>
              Username*
            </label>
            <input 
              type="text" 
              placeholder="Enter Username"
              className="w-full h-[49px] bg-[#010407] rounded-[5px] text-white px-4 placeholder:text-white/30 text-[14px] focus:outline-none focus:ring-1 focus:ring-[#ed4c5c]"
              style={{ fontFamily: "Geist, sans-serif" }}
            />
          </div>
        )}

        {/* Password */}
        <div className="flex flex-col gap-[8px]">
          <label className="text-white text-[14px] leading-[1.685]" style={{ fontFamily: "Geist, sans-serif" }}>
            Password*
          </label>
          <input 
            type="password" 
            placeholder="Enter Password"
            className="w-full h-[49px] bg-[#010407] rounded-[5px] text-white px-4 placeholder:text-white/30 text-[14px] focus:outline-none focus:ring-1 focus:ring-[#ed4c5c]"
            style={{ fontFamily: "Geist, sans-serif" }}
          />
        </div>

        {/* Forgot Password */}
        <div className="flex justify-end">
          <Link href="#" className="text-white text-[12px] underline leading-[1.685]" style={{ fontFamily: "Geist, sans-serif" }}>
            Forgot Password?
          </Link>
        </div>

        {/* Action Button */}
        <button 
          onClick={handleAuth}
          className="w-full h-[49px] bg-[#ed4c5c] rounded-[5px] text-white text-[16px] font-bold mt-[10px] hover:opacity-90 transition-opacity" 
          style={{ fontFamily: "Geist, sans-serif" }}
        >
          {view === "login" ? "Login" : "Register"}
        </button>

        {/* Divider */}
        <div className="text-center text-white text-[12px] leading-[1.685] mt-[10px]" style={{ fontFamily: "Geist, sans-serif" }}>
          or continue with
        </div>

        {/* Google Button */}
        <button className="w-full h-[50px] border border-white rounded-[5px] flex items-center justify-center gap-3 mt-[10px] hover:bg-white/5 transition-colors">
          <img src={imgGoogle} alt="Google" className="w-[15px] h-[15px]" />
          <span className="text-white text-[16px] font-bold" style={{ fontFamily: "Geist, sans-serif" }}>Google</span>
        </button>

      </div>
    </div>
  );
};

export default AuthModal;
