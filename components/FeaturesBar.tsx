import React from "react";

const FeaturesBar: React.FC = () => {
  const features = [
    {
      title: "List or Buy Items",
      description: "Easily list your items and let buyers come to you.",
      icon: (
        <svg
          width="22"
          height="18"
          viewBox="0 0 22 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.5806 13.8592H7.09677C6.31329 13.8592 5.67742 14.5897 5.67742 15.4897C5.67742 16.3897 6.31329 17.1202 7.09677 17.1202H20.5806C21.3641 17.1202 22 16.3897 22 15.4897C22 14.5897 21.3641 13.8592 20.5806 13.8592ZM20.5806 7.33722H7.09677C6.31329 7.33722 5.67742 8.06768 5.67742 8.96771C5.67742 9.86774 6.31329 10.5982 7.09677 10.5982H20.5806C21.3641 10.5982 22 9.86774 22 8.96771C22 8.06768 21.3641 7.33722 20.5806 7.33722ZM7.09677 4.07623H20.5806C21.3641 4.07623 22 3.34577 22 2.44574C22 1.54571 21.3641 0.815247 20.5806 0.815247H7.09677C6.31329 0.815247 5.67742 1.54571 5.67742 2.44574C5.67742 3.34577 6.31329 4.07623 7.09677 4.07623ZM2.12903 13.0439C0.953097 13.0439 0 14.1388 0 15.4897C0 16.8405 0.953097 17.9354 2.12903 17.9354C3.30497 17.9354 4.25806 16.8405 4.25806 15.4897C4.25806 14.1388 3.30497 13.0439 2.12903 13.0439ZM2.12903 6.52197C0.953097 6.52197 0 7.61685 0 8.96771C0 10.3186 0.953097 11.4135 2.12903 11.4135C3.30497 11.4135 4.25806 10.3186 4.25806 8.96771C4.25806 7.61685 3.30497 6.52197 2.12903 6.52197ZM2.12903 0C0.953097 0 0 1.09488 0 2.44574C0 3.7966 0.953097 4.89148 2.12903 4.89148C3.30497 4.89148 4.25806 3.7966 4.25806 2.44574C4.25806 1.09488 3.30497 0 2.12903 0Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      title: "Instant Offers\n& Listings",
      description:
        "Receive alerts as soon as someone is interested in your items.",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1_138)">
            <path
              d="M11.2327 2.75322C11.1554 2.75107 11.0778 2.75 11 2.75C6.44365 2.75 2.75 6.44365 2.75 11C2.75 15.5563 6.44365 19.25 11 19.25C15.5563 19.25 19.25 15.5563 19.25 11C19.25 10.9222 19.2489 10.8446 19.2468 10.7673L21.6758 8.3383C21.8875 9.1906 22 10.0822 22 11C22 17.0752 17.0752 22 11 22C4.92486 22 0 17.0752 0 11C0 4.92486 4.92486 0 11 0C11.9178 0 12.8094 0.11241 13.6617 0.324213L11.2327 2.75322Z"
              fill="white"
            />
            <path
              d="M5.5 10.9999C5.5 8.43716 7.25281 6.28377 9.625 5.67322V8.61784C8.80303 9.09332 8.25 9.98206 8.25 10.9999C8.25 12.5187 9.48122 13.7499 11 13.7499C12.0179 13.7499 12.9066 13.1969 13.3821 12.3749H16.3267C15.7161 14.7471 13.5628 16.5 11 16.5C7.96243 16.5 5.5 14.0375 5.5 10.9999Z"
              fill="white"
            />
            <path
              d="M19.2501 2.75L17.8751 0L13.7501 4.125V6.30546L10.7153 9.34022L12.6599 11.2848L15.6946 8.25H17.8751L22.0001 4.125L19.2501 2.75Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_138">
              <rect width="22" height="22" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      title: "Secure Payments &  Transactions",
      description: "Secure transactions with fraud prevention.",
      icon: (
        <svg
          width="20"
          height="22"
          viewBox="0 0 20 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.75 0C6.17627 0 3.25 2.81372 3.25 6.25V9.375C1.44727 9.375 0 10.7666 0 12.5V20.3125C0 21.1792 0.723632 21.875 1.625 21.875H17.875C18.7764 21.875 19.5 21.1792 19.5 20.3125V12.5C19.5 10.7666 18.0527 9.375 16.25 9.375V6.25C16.25 2.81372 13.3237 0 9.75 0ZM9.75 3.125C11.5781 3.125 13 4.49219 13 6.25V9.375H6.5V6.25C6.5 4.49219 7.92188 3.125 9.75 3.125Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      title: "Fast Delivery",
      description: "Automated and immediate delivery of sold items.",
      icon: (
        <svg
          width="29"
          height="19"
          viewBox="0 0 29 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.32475 14.6689C8.3204 14.6689 7.50342 15.486 7.50342 16.4904C7.50342 17.495 8.3204 18.312 9.32475 18.312C10.3293 18.312 11.1463 17.495 11.1463 16.4904C11.1463 15.486 10.3293 14.6689 9.32475 14.6689Z"
            fill="white"
          />
          <path
            d="M22.8597 14.6689C21.8553 14.6689 21.0383 15.486 21.0383 16.4904C21.0383 17.495 21.8553 18.312 22.8597 18.312C23.8642 18.312 24.6812 17.495 24.6812 16.4904C24.6812 15.486 23.8642 14.6689 22.8597 14.6689Z"
            fill="white"
          />
          <path
            d="M27.4155 8.00996L27.4076 5.69064C27.4057 5.15898 26.9743 4.72876 26.4425 4.72876H24.9946L24.1743 8.00996H27.4155Z"
            fill="white"
          />
          <path
            d="M24.2 1.17435C24.2635 0.888553 24.1938 0.589471 24.0107 0.36128C23.8275 0.132892 23.5505 0 23.2578 0H8.13074C7.67826 0 7.28662 0.314118 7.18868 0.755758L7.00267 1.59236H4.94592C4.41298 1.59236 3.98081 2.02443 3.98081 2.55737C3.98081 3.09031 4.41298 3.52248 4.94592 3.52248H6.57363L6.11802 5.57317H2.55747C2.02434 5.57317 1.59236 6.00544 1.59236 6.53828C1.59236 7.07131 2.02434 7.50338 2.55747 7.50338H5.68918L5.23338 9.55418H0.965104C0.432168 9.55418 0 9.98635 0 10.5193C0 11.0522 0.432168 11.4844 0.965104 11.4844H4.80443L4.00386 15.0869C3.94049 15.3726 4.01001 15.6718 4.19309 15.9001C4.37627 16.1285 4.65318 16.2613 4.94592 16.2613H5.58089C5.69972 14.299 7.33329 12.7389 9.32482 12.7389C11.3164 12.7389 12.95 14.299 13.0689 16.2613H19.1158C19.202 14.8406 20.0823 13.631 21.3175 13.0715L24.2 1.17435Z"
            fill="white"
          />
          <path
            d="M28.8174 9.9302C28.6779 9.73687 28.4734 9.60505 28.2455 9.55408H23.7884L22.9915 12.7419C24.9182 12.8087 26.4801 14.3352 26.6029 16.2477C26.9437 16.1899 27.2422 15.9509 27.3586 15.5999L28.9511 10.7987C29.0485 10.5044 28.9988 10.1815 28.8174 9.9302Z"
            fill="white"
          />
        </svg>
      ),
    },
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
              background:
                "linear-gradient(90deg, rgba(48, 29, 29, 0.4) 0%, rgba(150, 91, 91, 0.2) 100%)",
              border: "1px solid",
              borderImage:
                "linear-gradient(0deg, rgba(86, 52, 52, 0) 0%, rgba(188, 113, 113, 1) 100%) 1",
            }}
          >
            {/* Icon Box - Figma: First card x: 37, y: 20, width: 47, height: 47, rounded-[12px] */}
            <div
              className="absolute top-[20px] left-[37px] w-[47px] h-[47px] rounded-[12px] bg-[#EF4545] flex items-center justify-center"
              style={{
                border: "0px solid",
                borderImage:
                  "linear-gradient(0deg, rgba(86, 52, 52, 0) 0%, rgba(188, 113, 113, 1) 100%) 1",
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
                top:
                  index === 0
                    ? "30px"
                    : index === 1
                      ? "20px"
                      : index === 2
                        ? "27px"
                        : "27px",
                left:
                  index === 0
                    ? "107px"
                    : index === 1
                      ? "107px"
                      : index === 2
                        ? "107px"
                        : "107px",
                width:
                  index === 0
                    ? "300px"
                    : index === 1
                      ? "190px"
                      : index === 2
                        ? "356px"
                        : "300px",
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
                color:
                  index === 0 || index === 2 || index === 3
                    ? "#C5C5C5"
                    : "#FFFFFF",
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
