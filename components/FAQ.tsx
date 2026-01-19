"use client";

import React, { useState } from 'react';

// Assets from Figma
const imgGeneralQuestions = "/assets/faq/general-questions.svg";
const imgPaymentPrivacy = "/assets/faq/payment-privacy.svg";
const imgReturnOrders = "/assets/faq/return-orders.svg";
const imgArrowDown = "/assets/faq/arrow-down.svg";
const imgArrowRight = "/assets/faq/arrow-right.svg";

const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("General Questions");
  
  const categories = [
    {
      name: "General Questions",
      icon: imgGeneralQuestions,
    },
    {
      name: "Payment & Privacy",
      icon: imgPaymentPrivacy,
    },
    {
      name: "Return & Orders",
      icon: imgReturnOrders,
    }
  ];

  const questionsMap: Record<string, { question: string; answer: string }[]> = {
    "General Questions": [
      {
        question: "Is this website a safe place to buy and sell items?",
        answer: "Yes, absolutely! We use secure escrow services to ensure that both buyers and sellers are protected during every transaction."
      },
      {
        question: "How does selling items on your website work?",
        answer: "List your item, wait for a buyer, and once sold, our automated system or support team will guide you."
      },
      {
        question: "How do I receive my money after selling?",
        answer: "Funds are credited to your account wallet immediately after the transaction is confirmed."
      },
      {
        question: "Why do you need my information during checkout or selling?",
        answer: "We require basic information to verify your identity and prevent fraud."
      },
      {
        question: "What items or games can I buy and sell here?",
        answer: "We currently support Murder Mystery 2 (MM2), Tower Defense Simulator, and Adopt Me items."
      }
    ],
    "Payment & Privacy": [
       {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, and various cryptocurrencies."
      },
      {
        question: "Is my personal information secure?",
        answer: "Yes, we use industry-standard encryption to protect your data."
      }
    ],
    "Return & Orders": [
      {
        question: "Can I cancel my order?",
        answer: "Orders can be cancelled before the trade is initiated. Once the trade has started, cancellations are subject to review."
      },
      {
        question: "What if I don't receive my item?",
        answer: "Our escrow system protects you. If you don't receive your item, you will be fully refunded."
      }
    ]
  };

  return (
    <section className="w-full px-4 lg:px-12 relative z-10" style={{ fontFamily: "Geist, sans-serif" }}>
      <div className="max-w-[1292px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-[68px]">
          <h2 className="text-white text-[48px] font-bold leading-[60px] tracking-[-0.96px]">
            Frequently Asked <span className="text-[#f24a4a]">Questions</span>
          </h2>
        </div>

        {/* Main Layout: Sidebar + Content */}
        <div className="flex flex-col lg:flex-row gap-[93px]">
          
          {/* Sidebar */}
          <div className="flex flex-col gap-[8px] w-full lg:w-[200px] shrink-0">
             {categories.map((cat) => (
               <button
                 key={cat.name}
                 onClick={() => setActiveCategory(cat.name)}
                 className={`
                   relative h-[107px] w-full rounded-[10.4px] border transition-all duration-300
                   flex flex-col items-center justify-center gap-2
                   ${activeCategory === cat.name 
                     ? 'bg-[#521313] border-[#f24a4a]' 
                     : 'bg-[#04080c] border-[#2a2a2a] hover:border-[#f24a4a]/50'}
                 `}
               >
                 {/* Icon Box */}
                 <div className={`
                    w-[48px] h-[48px] rounded-[14.4px] flex items-center justify-center
                    ${activeCategory === cat.name ? 'bg-[#f24a4a]' : 'bg-[#521313]'}
                 `}>
                    <img src={cat.icon} alt="" className="w-[24px] h-[24px]" />
                 </div>
                 
                 {/* Label */}
                 <span className={`text-[14px] font-medium leading-[20px] ${activeCategory === cat.name ? 'text-white' : 'text-[#99a1af]'}`}>
                   {cat.name}
                 </span>
               </button>
             ))}
          </div>

          {/* Questions Area */}
          <div className="flex-1">
             <h3 className="text-white text-[20px] font-bold leading-[28px] mb-[39px]">
               {activeCategory} FAQs
             </h3>
             
             <div className="flex flex-col gap-[16px]">
               {questionsMap[activeCategory]?.map((item, index) => (
                 <div 
                   key={index}
                   className="bg-[#04080c] border border-[#2a2a2a] rounded-[10.4px] px-[24px] min-h-[59px] flex items-center justify-between cursor-pointer hover:border-[#f24a4a]/50 transition-colors group"
                 >
                   <p className="text-white text-[16px] leading-[24px] font-normal py-4">
                     {item.question}
                   </p>
                   <img 
                     src={index % 2 === 0 ? imgArrowDown : imgArrowRight} 
                     alt="toggle" 
                     className="w-[20px] h-[20px]" 
                   />
                 </div>
               ))}
             </div>
          </div>

        </div>

        {/* Footer Text */}
        <div className="mt-[120px] text-center">
           <p className="text-[#fafafa] text-[14.5px] font-bold leading-[24px] mb-[-4px]">More Questions?</p>
           <a href="#" className="text-[#f24a4a] text-[14px] font-bold leading-[24px] underline decoration-solid">Contact Us</a>
           
           <div className="mt-[36px]">
             <p className="text-white text-[18px] font-bold leading-[28px] mb-[14px]">
               We are not affiliated with Roblox Corporation or any of its trademarks
             </p>
             <p className="text-[#99a1af] text-[12.3px] font-normal leading-[20px] max-w-[745px] mx-auto">
               Our services are not the same as, similar or equivalent to Roblox Corporation’s products and services, and we are not sponsored, affiliated, approved, or authorized by Roblox Corporation in any way.
             </p>
           </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;