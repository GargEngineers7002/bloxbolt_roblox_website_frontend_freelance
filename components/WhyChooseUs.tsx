import React from 'react';

const WhyChooseUs: React.FC = () => {
  const cards = [
    {
      title: "Thousands of Trades Completed",
      description: "Don't just take our word for it—our reputation speaks for itself!\n\nThousands of trades have been successfully completed by satisfied sellers and buyers from all over the world.\n\nJoin a community of trusted users who exchange their favorite items with confidence.",
      // Figma: bg-[rgba(14,37,20,0.43)] border border-[rgba(61,255,136,0.53)]
      className: "bg-[rgba(14,37,20,0.43)] border border-[rgba(61,255,136,0.53)]",
      icon: (
        // Using the SVG from Figma (imgSvg1) conceptually - keeping current icon for now but styling it
        <div className="w-[72px] h-[72px] rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </div>
      )
    },
    {
      title: "Instant Trading",
      description: "We pride ourselves on fast transactions. With our automated system, you can buy or sell your items instantly, anytime.\n\n96% of transactions are completed within minutes.\n\nQuick, secure, and reliable.",
      // Figma: bg-[#250e0e] border border-[rgba(255,56,56,0.53)]
      className: "bg-[#250e0e] border border-[rgba(255,56,56,0.53)]",
      icon: (
        <div className="w-[72px] h-[72px] rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
        </div>
      )
    },
    {
      title: "24/7 support Support",
      description: "Need help or have a question? Our friendly team is available 24/7 to assist you with anything, anytime, anywhere.\n\nWe are real people, here to ensure your trading experience is smooth and hassle-free.\n\nGet support quickly and easily—whether you're buying, selling, or just browsing.",
      // Figma: bg-[#0f1827] border border-[rgba(5,63,255,0.53)]
      className: "bg-[#0f1827] border border-[rgba(5,63,255,0.53)]",
      icon: (
        <div className="w-[72px] h-[72px] rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </div>
      )
    }
  ];

  return (
    <section className="w-full px-4 lg:px-12 relative z-10">
      <div className="max-w-[1920px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-white text-[32px] md:text-[40px] font-bold mb-6 leading-[1.3em]"
            style={{ fontFamily: "Geist, sans-serif", fontWeight: 700 }}
          >
            Why Choose <span className="text-[#ff6161]">BloxBolt</span>
          </h2>
          <p 
            className="text-[#999999] max-w-4xl mx-auto text-sm md:text-[14px] font-medium leading-normal whitespace-pre-line"
            style={{ fontFamily: "Geist, sans-serif" }}
          >
            Enjoy fast, secure, and easy trading for all your favorite Roblox items. Whether you’re buying or selling, our platform ensures a seamless experience{"\n"}
            with unbeatable prices and top-notch service. Our dedicated team is always here to help!
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className={`${card.className} rounded-[24px] p-10 flex flex-col justify-center gap-6 min-h-[478px] hover:translate-y-[-5px] transition-transform duration-300`}
              style={{ fontFamily: "Geist, sans-serif" }}
            >
              {/* Icon */}
              <div className="mb-2">
                {card.icon}
              </div>
              
              {/* Content */}
              <div>
                <h3 
                  className="text-white font-bold text-[20px] mb-4"
                  style={{ fontFamily: "Geist, sans-serif", fontWeight: 700 }}
                >
                  {card.title}
                </h3>
                <div 
                  className="text-[#ccc9c9] text-[18px] leading-[28px] whitespace-pre-wrap font-medium"
                  style={{ fontFamily: "Geist, sans-serif" }}
                >
                  {card.description}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
