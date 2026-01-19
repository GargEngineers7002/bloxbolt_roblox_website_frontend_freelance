import React from 'react';

const FeaturesBar: React.FC = () => {
  const features = [
    {
      title: "List or Buy Items",
      description: "Easily list your items and let buyers come to you.",
      icon: (
        <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="2" y1="5" x2="22" y2="5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <line x1="2" y1="11" x2="22" y2="11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <line x1="2" y1="17" x2="22" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <line x1="2" y1="5" x2="2.01" y2="5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <line x1="2" y1="11" x2="2.01" y2="11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <line x1="2" y1="17" x2="2.01" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Instant Offers\n& Listings",
      description: "Receive alerts as soon as someone is interested in your items.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 5.67L10.83 11L5.5 16.33" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10.72 0L21.28 11L10.72 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Secure Payments &  Transactions",
      description: "Secure transactions with fraud prevention.",
      icon: (
        <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3.25" y="1.56" width="19.5" height="21.88" rx="2" fill="white"/>
        </svg>
      )
    },
    {
      title: "Fast Delivery",
      description: "Automated and immediate delivery of sold items.",
      icon: (
        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 14.67C7.5 15.42 8.17 16.09 8.92 16.09C9.67 16.09 10.34 15.42 10.34 14.67C10.34 13.92 9.67 13.25 8.92 13.25C8.17 13.25 7.5 13.92 7.5 14.67Z" fill="white"/>
          <path d="M21.04 14.67C21.04 15.42 21.71 16.09 22.46 16.09C23.21 16.09 23.88 15.42 23.88 14.67C23.88 13.92 23.21 13.25 22.46 13.25C21.71 13.25 21.04 13.92 21.04 14.67Z" fill="white"/>
          <rect x="0" y="5.34" width="24.22" height="16.26" rx="2" fill="white"/>
        </svg>
      )
    }
  ];

  // Figma: x: 117, y: 703, width: 1699, height: 167 - Pixel perfect positioning
  return (
    <div className="relative z-20 w-full min-h-[167px]">
      <div className="absolute top-0 left-[117px] w-[1699px] h-[167px] flex gap-[43px]">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="w-[374px] h-[167px] rounded-[21px] relative overflow-hidden"
            style={{
              background: "linear-gradient(90deg, rgba(48, 29, 29, 0.4) 0%, rgba(150, 91, 91, 0.2) 100%)",
              border: "1px solid",
              borderImage: "linear-gradient(0deg, rgba(86, 52, 52, 0) 0%, rgba(188, 113, 113, 1) 100%) 1",
            }}
          >
            {/* Icon Box - Figma: First card x: 37, y: 20, width: 47, height: 47, rounded-[12px] */}
            <div 
              className="absolute top-[20px] left-[37px] w-[47px] h-[47px] rounded-[12px] bg-[#EF4545] flex items-center justify-center"
              style={{
                border: "1px solid",
                borderImage: "linear-gradient(0deg, rgba(86, 52, 52, 0) 0%, rgba(188, 113, 113, 1) 100%) 1",
              }}
            >
              {feature.icon}
            </div>
            
            {/* Title - Figma: First card x: 107, y: 30, width: 300, height: 40, 24px font, 800 weight, 1.076 line height */}
            <h3 
              className="absolute text-white font-extrabold text-[24px] leading-[1.076]"
              style={{ 
                fontFamily: "Geist, sans-serif",
                fontWeight: 800,
                whiteSpace: "pre-line",
                top: index === 0 ? "30px" : index === 1 ? "20px" : index === 2 ? "27px" : "27px",
                left: index === 0 ? "107px" : index === 1 ? "107px" : index === 2 ? "107px" : "107px",
                width: index === 0 ? "300px" : index === 1 ? "190px" : index === 2 ? "356px" : "300px"
              }}
            >
              {feature.title}
            </h3>
            
            {/* Description - Figma: First card x: 37, y: 98, width: 300, height: 40, 16px font, 700 weight */}
            <p 
              className="absolute text-[16px] leading-[1.076]"
              style={{ 
                fontFamily: "Geist, sans-serif",
                fontWeight: 700,
                top: "98px",
                left: "37px",
                width: "300px",
                color: index === 0 || index === 2 || index === 3 ? "#C5C5C5" : "#FFFFFF"
              }}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesBar;
