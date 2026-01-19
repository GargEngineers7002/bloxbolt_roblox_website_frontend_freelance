"use client";

import React from 'react';

// Assets
const imgTwitter = "/assets/footer/twitter.svg";
const imgDiscord = "/assets/footer/discord.svg";
const imgTikTok = "/assets/footer/tiktok.svg";
const imgYouTube = "/assets/footer/youtube.svg";
const imgFlag = "/assets/footer/flag.svg";
const imgArrow = "/assets/footer/arrow.svg";
const imgPayment = "/assets/footer/payment-methods.svg";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#04080c] text-[#99a1af] py-[56px] relative z-10" style={{ fontFamily: "Geist, sans-serif" }}>
      <div className="max-w-[1536px] mx-auto px-4 lg:px-[192px]">
        
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24 mb-[60px]">
          
          {/* Left Column */}
          <div className="lg:w-[483px] flex flex-col gap-6">
            <div className="text-[14px] leading-[20px] font-normal">
              <p className="mb-0">BloxCart operates independently and is not affiliated with, associated</p>
              <p className="mb-0">with, or endorsed by Uplift Games LLC or Roblox Corporation. We are not</p>
              <p className="mb-0">authorized, endorsed, or sponsored by Uplift Games LLC or Roblox</p>
              <p className="mb-0">Corporation. We are an independent marketplace site. All &quot;Adopt Me&quot;</p>
              <p>trademarks are owned by Uplift Games LLC.</p>
            </div>
            
            <div className="text-[14px] leading-[20px] font-normal">
              <p className="mb-0">© 2025 BloxCart - Not affiliated in any way with Roblox Corporation or</p>
              <p>any of its trademarks.</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-[12px] mt-4">
              <div className="w-[72px] h-[48px] bg-[#f24a4a] rounded-[8px] flex items-center justify-center hover:opacity-90 cursor-pointer">
                <img src={imgTwitter} alt="Twitter" className="w-[24px] h-[24px]" />
              </div>
              <div className="w-[72px] h-[48px] bg-[#f24a4a] rounded-[8px] flex items-center justify-center hover:opacity-90 cursor-pointer">
                <img src={imgDiscord} alt="Discord" className="w-[24px] h-[24px]" />
              </div>
              <div className="w-[72px] h-[48px] bg-[#f24a4a] rounded-[8px] flex items-center justify-center hover:opacity-90 cursor-pointer">
                <img src={imgTikTok} alt="TikTok" className="w-[24px] h-[24px]" />
              </div>
              <div className="w-[72px] h-[48px] bg-[#f24a4a] rounded-[8px] flex items-center justify-center hover:opacity-90 cursor-pointer">
                <img src={imgYouTube} alt="YouTube" className="w-[24px] h-[24px]" />
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="flex-1 flex justify-between gap-8">
            
            {/* Social Media */}
            <div className="w-[111px]">
               <h3 className="text-white text-[18px] font-bold leading-[28px] mb-[12px]">Social Media</h3>
               <ul className="flex flex-col gap-[16px] text-[16px] leading-[24px]">
                 <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">TikTok</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
               </ul>
            </div>

            {/* Support */}
            <div className="w-[85px]">
               <h3 className="text-white text-[18px] font-bold leading-[28px] mb-[12px]">Support</h3>
               <ul className="flex flex-col gap-[16px] text-[16px] leading-[24px]">
                 <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Trust Pilot</a></li>
               </ul>
            </div>

            {/* Resources */}
            <div className="w-[92px]">
               <h3 className="text-white text-[18px] font-bold leading-[28px] mb-[12px]">Resources</h3>
               <ul className="flex flex-col gap-[16px] text-[16px] leading-[24px]">
                 <li><a href="#" className="hover:text-white transition-colors">Blogs</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Affiliates</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Claim Order</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Tutorial</a></li>
               </ul>
            </div>

            {/* Legal */}
            <div className="w-[129px]">
               <h3 className="text-white text-[18px] font-bold leading-[28px] mb-[12px]">Legal</h3>
               <ul className="flex flex-col gap-[16px] text-[16px] leading-[24px]">
                 <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
               </ul>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t-[1.5px] border-[#202331] w-full mb-[53px]" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Language Selector */}
          <div className="w-[185px] h-[59px] bg-[#0a141d] border border-[#3f2e2e] rounded-[12px] flex items-center px-4 relative cursor-pointer hover:border-gray-500 transition-colors">
             <div className="w-[32px] h-[32px] rounded-full overflow-hidden mr-3">
               <img src={imgFlag} alt="Spanish" className="w-full h-full object-cover" />
             </div>
             <span className="text-white text-[16px] font-bold leading-[24px]">Spanish</span>
             <img src={imgArrow} alt="arrow" className="w-[20px] h-[20px] absolute right-4 top-1/2 -translate-y-1/2" />
          </div>

          {/* Payment Methods */}
          <div className="w-[389px]">
            <img src={imgPayment} alt="Payment Methods" className="w-full h-auto" />
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
