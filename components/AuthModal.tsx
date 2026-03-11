"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import axios from "axios";

// Assets
const imgGoogle = "/assets/general/google-icon.png";

interface AuthModalProps {
  initialView?: "login" | "register";
}

const AuthModal: React.FC<AuthModalProps> = ({ initialView = "login" }) => {
  const [view, setView] = useState<"login" | "register">(initialView);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<{ email?: string; password?: string; username?: string }>({});
  
  const router = useRouter();

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const checkPasswordStrength = (password: string) => {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
    const minLength = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    
    if (!minLength) return "Password must be at least 8 characters long";
    if (!hasUpper || !hasLower) return "Password must contain both uppercase and lowercase letters";
    if (!hasNumber) return "Password must contain at least one number";
    return null;
  };

  const handleCredentialsAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setFieldErrors({});

    const errors: { email?: string; password?: string; username?: string } = {};

    // 1. Email Validation
    if (!email) {
        errors.email = "Email is required.";
    } else if (!validateEmail(email)) {
      errors.email = "Please enter a valid email address.";
    }

    // 2. Password Validation
    if (!password) {
        errors.password = "Password is required.";
    } else if (view === "register") {
        const passwordError = checkPasswordStrength(password);
        if (passwordError) {
            errors.password = passwordError;
        }
    }

    // 3. Username Validation (Register only)
    if (view === "register" && !username.trim()) {
        errors.username = "Username is required.";
    } else if (view === "register" && username.trim().length < 3) {
      errors.username = "Username must be at least 3 characters.";
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setIsLoading(false);
      return;
    }

    try {
      if (view === "register") {
        await axios.post("/api/register", {
          email,
          name: username,
          password,
        });
      }

      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid credentials. Try admin@example.com / password");
        setIsLoading(false);
      } else {
        // Successful login
        // 1. Force a refresh to update auth state
        router.refresh();
        // 2. Navigate to market. Using window.location.href can be a "brute force" way 
        // to ensure all parallel route slots are cleared if router.push is sticking.
        window.location.href = "/market";
      }
    } catch (err: any) {
      setError(err.response?.data || "An unexpected error occurred");
      setIsLoading(false);
    }
  };

  const handleGoogleAuth = () => {
    signIn("google", { callbackUrl: "/market" });
  };

  return (
    <div className="w-[562px] min-h-[700px] bg-[#04080c] rounded-[36px] relative overflow-hidden flex flex-col items-center pt-[38px] px-[75px] pb-[40px]">
      
      {/* Tabs */}
      <div className="flex w-full justify-between items-center mb-[30px] relative">
        <button 
          type="button"
          onClick={() => { setView("register"); setFieldErrors({}); setError(""); }}
          className={`flex-1 text-center text-[18px] font-bold leading-[1.685] ${view === "register" ? "text-white" : "text-white/50"}`}
          style={{ fontFamily: "Geist, sans-serif" }}
        >
          Register
        </button>
        <button 
          type="button"
          onClick={() => { setView("login"); setFieldErrors({}); setError(""); }}
          className={`flex-1 text-center text-[18px] font-bold leading-[1.685] ${view === "login" ? "text-white" : "text-white/50"}`}
          style={{ fontFamily: "Geist, sans-serif" }}
        >
          Login
        </button>
        
        <div className="absolute bottom-[-10px] left-0 w-full h-[4px]">
           <div className={`w-[50%] h-full bg-[#EF4545] transition-transform duration-300 ${view === "login" ? "translate-x-full" : "translate-x-0"}`} />
        </div>
      </div>
      
      <div className="w-full h-[1px] bg-gray-800 mb-[40px]"></div>

      {/* Form Fields */}
      <form onSubmit={handleCredentialsAuth} className="w-full flex flex-col gap-[20px]">
        
        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-500 text-[12px] p-3 rounded-md text-center">
            {error}
          </div>
        )}

        {/* Email */}
        <div className="flex flex-col gap-[8px]">
          <label className="text-white text-[14px] leading-[1.685]" style={{ fontFamily: "Geist, sans-serif" }}>
            Email*
          </label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            className={`w-full h-[49px] bg-[#010407] rounded-[5px] text-white px-4 placeholder:text-white/30 text-[14px] focus:outline-none focus:ring-1 ${fieldErrors.email ? 'ring-1 ring-red-500 shadow-[0_0_5px_rgba(239,69,69,0.5)]' : 'focus:ring-[#ed4c5c]'}`}
            style={{ fontFamily: "Geist, sans-serif" }}
          />
          {fieldErrors.email && <span className="text-red-500 text-[12px] mt-1">{fieldErrors.email}</span>}
        </div>

        {/* Username (Register only) */}
        {view === "register" && (
          <div className="flex flex-col gap-[8px]">
            <label className="text-white text-[14px] leading-[1.685]" style={{ fontFamily: "Geist, sans-serif" }}>
              Username*
            </label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
              className={`w-full h-[49px] bg-[#010407] rounded-[5px] text-white px-4 placeholder:text-white/30 text-[14px] focus:outline-none focus:ring-1 ${fieldErrors.username ? 'ring-1 ring-red-500 shadow-[0_0_5px_rgba(239,69,69,0.5)]' : 'focus:ring-[#ed4c5c]'}`}
              style={{ fontFamily: "Geist, sans-serif" }}
            />
            {fieldErrors.username && <span className="text-red-500 text-[12px] mt-1">{fieldErrors.username}</span>}
          </div>
        )}

        {/* Password */}
        <div className="flex flex-col gap-[8px]">
          <label className="text-white text-[14px] leading-[1.685]" style={{ fontFamily: "Geist, sans-serif" }}>
            Password*
          </label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className={`w-full h-[49px] bg-[#010407] rounded-[5px] text-white px-4 placeholder:text-white/30 text-[14px] focus:outline-none focus:ring-1 ${fieldErrors.password ? 'ring-1 ring-red-500 shadow-[0_0_5px_rgba(239,69,69,0.5)]' : 'focus:ring-[#ed4c5c]'}`}
            style={{ fontFamily: "Geist, sans-serif" }}
          />
          {fieldErrors.password && <span className="text-red-500 text-[12px] mt-1">{fieldErrors.password}</span>}
        </div>

        {/* Forgot Password */}
        <div className="flex justify-end">
          <Link href="#" className="text-white text-[12px] underline leading-[1.685]" style={{ fontFamily: "Geist, sans-serif" }}>
            Forgot Password?
          </Link>
        </div>

        {/* Action Button */}
        <button 
          type="submit"
          disabled={isLoading}
          className="w-full h-[49px] bg-[#ed4c5c] rounded-[5px] text-white text-[16px] font-bold mt-[10px] hover:opacity-90 transition-opacity disabled:opacity-50" 
          style={{ fontFamily: "Geist, sans-serif" }}
        >
          {isLoading ? "Processing..." : (view === "login" ? "Login" : "Register")}
        </button>

        {/* Divider */}
        <div className="text-center text-white text-[12px] leading-[1.685] mt-[10px]" style={{ fontFamily: "Geist, sans-serif" }}>
          or continue with
        </div>

        {/* Google Button */}
        <button 
          type="button"
          onClick={handleGoogleAuth}
          className="w-full h-[50px] border border-white rounded-[5px] flex items-center justify-center gap-3 mt-[10px] hover:bg-white/5 transition-colors"
        >
          <img src={imgGoogle} alt="Google" className="w-[15px] h-[15px]" />
          <span className="text-white text-[16px] font-bold" style={{ fontFamily: "Geist, sans-serif" }}>Google</span>
        </button>

      </form>
    </div>
  );
};

export default AuthModal;
