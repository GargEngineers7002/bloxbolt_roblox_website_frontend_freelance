import React from 'react';

const TrustedBy: React.FC = () => {
  return (
    <section className="w-full min-h-[487px] px-4 lg:px-12 relative z-10 bg-[#04080c] flex items-center">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          
          <div className="max-w-2xl">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
              Trusted by over <span className="text-[#EF4545]">5,000+</span> Satisfied Customers
            </h2>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              Join thousands of players who rely on our services for safe and fast in-game transactions. <br className="hidden md:block" />
              From casual players to passionate collectors, our community chooses us for reliability, quality, and trust. Check out some of our amazing supporters below.
            </p>
          </div>

          {/* You could add a marquee of avatars or logos here if available */}
          
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
