"use client";

export default function OurApproach() {
  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2
          className="text-center font-bold mb-6"
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: "50px",
            lineHeight: "105%",
            letterSpacing: "-1.5px",
            color: "#14358A",
          }}
        >
          Our Approach
        </h2>

        {/* Description */}
        <p
          className="text-center max-w-4xl mx-auto mb-16"
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: "16px",
            lineHeight: "160%",
            color: "#4A5568",
          }}
        >
          Our approach is a unique blend of deep functional expertise and rigorous
          systems thinking. We solve complex problems by drawing on successful cross-
          sector strategies, identifying hidden value, and crafting customized execution
          roadmaps.
        </p>

        {/* Roadmap Container */}
        <div className="relative w-full max-w-5xl mx-auto" style={{ minHeight: "450px" }}>
          {/* Step 1 - Top Left */}
          <div className="absolute left-[5%] top-0 w-56 text-center">
            <h3
              className="font-bold mb-2"
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "16px",
                color: "#14358A",
              }}
            >
              Uncover Strategic Growth Avenues
            </h3>
            <p
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "13px",
                lineHeight: "150%",
                color: "#6B7280",
              }}
            >
              We identify emerging market trends and cross-sectoral
              opportunities to develop compelling strategies for long-
              term dominance.
            </p>
          </div>

          {/* Step 2 - Top Right */}
          <div className="absolute right-0 top-0 w-56 text-center">
            <h3
              className="font-bold mb-2"
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "16px",
                color: "#14358A",
              }}
            >
              Develop a Resilient Strategic Roadmap
            </h3>
            <p
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "13px",
                lineHeight: "150%",
                color: "#6B7280",
              }}
            >
              We create a clear and actionable roadmap that can
              withstand market volatility and position your
              organization for long-term success.
            </p>
          </div>

          {/* Roadmap SVG - Matching Figma exactly */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[130px] w-full" style={{ maxWidth: "900px" }}>
            <svg
              viewBox="0 0 1000 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Main horizontal line from left edge to Circle 1 */}
              <path
                d="M0 100 L130 100"
                stroke="#14358A"
                strokeWidth="14"
                strokeLinecap="round"
              />
              
              {/* Branch curving up from Circle 1 */}
              <path
                d="M175 65 Q175 25 220 25"
                stroke="#14358A"
                strokeWidth="14"
                strokeLinecap="round"
                fill="none"
              />
              {/* Endpoint dot for first branch */}
              <circle cx="220" cy="25" r="12" fill="white" stroke="#14358A" strokeWidth="6" />
              
              {/* Main line from Circle 1 to Circle 2 */}
              <path
                d="M220 100 L380 100"
                stroke="#14358A"
                strokeWidth="14"
                strokeLinecap="round"
              />
              
              {/* Main line from Circle 2 to Circle 3 */}
              <path
                d="M470 100 L580 100"
                stroke="#14358A"
                strokeWidth="14"
                strokeLinecap="round"
              />
              
              {/* Branch curving up-right after Circle 2 toward top right */}
              <path
                d="M530 100 Q580 100 630 50 Q680 0 780 0"
                stroke="#14358A"
                strokeWidth="14"
                strokeLinecap="round"
                fill="none"
              />
              {/* Endpoint dot for upper right branch */}
              <circle cx="780" cy="0" r="12" fill="white" stroke="#14358A" strokeWidth="6" />
              
              {/* Branch curving down from Circle 3 */}
              <path
                d="M625 135 Q625 165 700 175 Q780 190 850 190"
                stroke="#14358A"
                strokeWidth="14"
                strokeLinecap="round"
                fill="none"
              />
              {/* Endpoint dot for bottom branch */}
              <circle cx="850" cy="190" r="12" fill="white" stroke="#14358A" strokeWidth="6" />
              
              {/* Main line continuing after Circle 3 */}
              <path
                d="M670 100 L1000 100"
                stroke="#14358A"
                strokeWidth="14"
                strokeLinecap="round"
              />
              
              {/* Circle 1 */}
              <circle cx="175" cy="100" r="45" fill="white" stroke="#14358A" strokeWidth="10" />
              <text
                x="175"
                y="112"
                textAnchor="middle"
                fill="#14358A"
                fontFamily="DM Sans, sans-serif"
                fontSize="32"
                fontWeight="600"
              >
                1
              </text>
              
              {/* Circle 2 */}
              <circle cx="425" cy="100" r="45" fill="white" stroke="#14358A" strokeWidth="10" />
              <text
                x="425"
                y="112"
                textAnchor="middle"
                fill="#14358A"
                fontFamily="DM Sans, sans-serif"
                fontSize="32"
                fontWeight="600"
              >
                2
              </text>
              
              {/* Circle 3 */}
              <circle cx="625" cy="100" r="45" fill="white" stroke="#14358A" strokeWidth="10" />
              <text
                x="625"
                y="112"
                textAnchor="middle"
                fill="#14358A"
                fontFamily="DM Sans, sans-serif"
                fontSize="32"
                fontWeight="600"
              >
                3
              </text>
            </svg>
          </div>

          {/* Step 3 - Bottom Right */}
          <div className="absolute right-[10%] bottom-0 w-64 text-center">
            <h3
              className="font-bold mb-2"
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "16px",
                color: "#14358A",
              }}
            >
              Empower Your Organization for the Future
            </h3>
            <p
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "13px",
                lineHeight: "150%",
                color: "#6B7280",
              }}
            >
              We provide strategic guidance, leadership
              development, and organizational change
              management to ensure successful execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
