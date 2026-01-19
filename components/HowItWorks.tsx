import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "1",
      title: "Browse and Purchase",
      content: (
        <>
          <p className="mb-8">Browse through our marketplace and select the Roblox items you wish to buy or sell.</p>
          <p>Initiate the trade when you find the item you want.</p>
        </>
      )
    },
    {
      number: "2",
      title: "Secure Payment Process",
      titleColor: "text-[#f24a4a]",
      titleParts: ["Secure", " Payment", " Process"], // "Secure" and "Process" are white, "Payment" is red? No wait.
      // Figma text: "Secure" (white), " Payment" (default/red?), " Process" (white).
      // Actually Figma says: "Secure" (white), " Payment" (default text color of parent p?), " Process" (white).
      // The parent p has color #f24a4a (red). So "Payment" is red.
      content: (
        <>
          <p className="mb-8">Once the trade is initiated, a ticket opens on Discord where you and the seller can communicate.</p>
          <p>The payment is held securely in escrow by us, ensuring protection for both parties during the transaction.</p>
        </>
      )
    },
    {
      number: "3",
      title: "Trade and Confirmation",
      content: (
        <>
          <p className="mb-8">Once you connect on Roblox, the seller will give the item to the buyer.</p>
          <p>After the item is confirmed, we release the payment to the seller and deduct a small transaction fee.</p>
        </>
      )
    },
    {
      number: "4",
      title: "Transaction Fees",
      content: (
        <>
          <p className="mb-4">We offer two account types with different fee structures:</p>
          <div className="mb-6">
             <p className="text-[20px]">Non Premium <span className="text-[#f14949]">Accounts</span></p>
             <p className="text-[20px] mt-2">10% Commission per transaction.</p>
             <p className="text-[20px]">Secure transactions, 24/7 support, and fast payments.</p>
          </div>
          <div>
             <p className="text-[20px]">Premium <span className="text-[#f14949]">Accounts</span></p>
             <p className="text-[20px] mt-2">5% Commission per transaction.</p>
             <p className="text-[20px]">Enjoy lower fees, priority support, and additional perks for serious traders.</p>
          </div>
        </>
      )
    }
  ];

  return (
    <section className="w-full px-4 lg:px-12 relative z-10">
      <div className="max-w-[1920px] mx-auto">
        
        <div className="text-center mb-16">
          <h2 
            className="text-white text-[40px] font-bold mb-4"
            style={{ fontFamily: "Geist, sans-serif" }}
          >
            How <span className="text-[#ff6161]">BloxBolt</span> Works
          </h2>
          <p 
            className="text-[#999] text-[14px] font-medium max-w-[1055px] mx-auto leading-normal whitespace-pre-line"
            style={{ fontFamily: "Geist, sans-serif" }}
          >
            {`Enjoy lightning - fast delivery, unbeatable prices, and a safe, secure shopping experience for all your\nfavorite Roblox item. Our dedicated support team is always here to help!`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[28px] max-w-[1452px] mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`bg-[#04080c] border border-[rgba(243,243,243,0.31)] rounded-[38px] relative overflow-hidden p-10
                ${index === 3 ? 'min-h-[479px] row-span-2 md:row-span-1 h-auto md:h-[527px]' : 'h-[351px]'}
              `}
              style={{ fontFamily: "Geist, sans-serif" }}
            >
              {/* Number Badge */}
              <div className="absolute top-0 left-[287px] w-[89px] h-[89px] bg-[#080c12] rounded-[38px] flex items-center justify-center -translate-y-1/2">
                 {/* This wrapper seems to be what Figma does for the cutout look, but sticking out? 
                     Actually looking at Figma: 
                     "bg-[#080c12] left-[287px] rounded-[38px] size-[89px] top-0"
                     And the number is inside it? No, the number is next to it?
                     Wait, the Figma JSON says:
                     div bg-[#080c12] ... top-0
                     div bg-gradient ... top-[14px] ...
                     p "1" ... top-[18px]
                     
                     The #080c12 div is likely a "mask" or background spacer to blend with the page background?
                     Actually, the page background is #080c12 (from layout). So this div just sits on top of the card border?
                     Yes, it creates a "cutout" effect on the top border.
                 */}
              </div>
              
              {/* The Actual Badge */}
              <div 
                className="absolute left-[304px] top-[14px] w-[55px] h-[58px] rounded-[20px] flex items-center justify-center z-10"
                style={{ background: "linear-gradient(to bottom, #ef4545, #ff5e5e)" }}
              >
                  <span className="text-white font-extrabold text-[32px] leading-none">{step.number}</span>
              </div>

              <div className="mt-16 text-center md:text-left md:pl-[30px] md:pr-[30px]">
                {/* Custom Title Handling for Card 2 */}
                {index === 1 ? (
                   <h3 className="text-[#f24a4a] font-bold text-[32px] mb-8 leading-none">
                     <span className="text-white">Secure</span> Payment <span className="text-white">Process</span>
                   </h3>
                ) : index === 0 ? (
                   <h3 className="text-white font-bold text-[32px] mb-8 leading-none">
                     <span className="text-[#f24a4a]">Browse</span> and <span className="text-[#f85353]">Purchase</span>
                   </h3>
                ) : index === 2 ? (
                   <h3 className="text-white font-bold text-[32px] mb-8 leading-none">
                     <span className="text-[#f34b4b]">Trade</span> and <span className="text-[#f34a4a]">Confirmation</span>
                   </h3>
                ) : (
                   <h3 className="text-white font-bold text-[32px] mb-8 leading-none">
                     Transaction <span className="text-[#f24b4b]">Fees</span>
                   </h3>
                )}
                
                <div className="text-white text-[20px] font-bold leading-[1.746]">
                   {step.content}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;