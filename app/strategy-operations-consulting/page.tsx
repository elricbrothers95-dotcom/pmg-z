'use client';

import Header from '@/components/Header';

export default function StrategyOperationsConsulting() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 pt-[142px] pb-24 text-center">

        {/* Subheading */}
        <p
          className="mb-4"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 700,
            fontSize: '29px',
            lineHeight: '105%',
            letterSpacing: '-0.03em',
            color: '#14358A',
          }}
        >
          Strategy & Operations Consulting
        </p>

        {/* Main Heading */}
        <h1
          className="mb-6"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: '50px',
            lineHeight: '46px',
            letterSpacing: '0%',
            textAlign: 'center',
            color: '#14358A',
            maxWidth: '1224px',
            margin: '0 auto 24px auto',
          }}
        >
          Transforming Systems into High-Yield Assets.
        </h1>

        {/* Description */}
        <p
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 400,
            fontSize: '32px',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            color: '#333333',
            maxWidth: '1258px',
            margin: '0 auto',
          }}
        >
          We transform inefficient processes into predictable, high-yield assets. PMG provides the systems-driven strategy and execution required to align your operations perfectly with your growth strategy, guaranteeing maximum returns and sustained competitive advantage.
        </p>
      </div>

      {/* How We Help Section */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 py-16">
        <h2
          className="text-center mb-12"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: '50px',
            lineHeight: '46px',
            letterSpacing: '0%',
            color: '#14358A',
          }}
        >
          How We Help
        </h2>

        {/* Cards Grid - 3 columns x 4 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1140px] mx-auto">
          {/* Capital Excellence */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="mb-6">
              <img
                src="/help-capital-excellence.png"
                alt="Capital Excellence"
                style={{ width: '64px', height: '64px' }}
              />
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '29px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              Capital Excellence
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Maximize ROI by leveraging expert strategies for optimal resource allocation and flawless project execution across the portfolio.
            </p>
          </div>

          {/* Cost Management */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="mb-6">
              <img
                src="/help-cost-management.png"
                alt="Cost Management"
                style={{ width: '64px', height: '64px' }}
              />
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '29px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              Cost Management
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Achieve sustainable cost reduction without compromising operational quality or competitive edge.
            </p>
          </div>

          {/* Enterprise Architecture & Workflow Management */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="mb-6">
              <img
                src="/help-enterprise-architecture.png"
                alt="Enterprise Architecture"
                style={{ width: '64px', height: '64px' }}
              />
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '29px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              Enterprise Architecture & Workflow Management
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Design and implement robust enterprise architecture to ensure seamless, scalable operations and strategic alignment.
            </p>
          </div>

          {/* Facility & Resource Management */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="mb-6">
              <img
                src="/help-facility-resource.png"
                alt="Facility & Resource Management"
                style={{ width: '64px', height: '64px' }}
              />
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '29px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              Facility & Resource Management
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Optimize physical resources and facility management for peak efficiency and significant fixed-cost reduction.
            </p>
          </div>

          {/* Lean, Six Sigma, Agile, or Sector Convergence */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="mb-6">
              <img
                src="/help-lean-sigma.png"
                alt="Lean, Six Sigma, Agile"
                style={{ width: '64px', height: '64px' }}
              />
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '29px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              Lean, Six Sigma, Agile, or Sector Convergence
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Apply industry-leading methodologies (Lean, Six Sigma, Agile) to eliminate waste and accelerate time-to-market.
            </p>
          </div>

          {/* Multi-unit Strategy */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="mb-6">
              <img
                src="/help-multi-unit-strategy.png"
                alt="Multi-unit Strategy"
                style={{ width: '64px', height: '64px' }}
              />
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '29px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              Multi-unit Strategy
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Synchronize complex, multi-unit operations with a cohesive strategy that guarantees consistency and maximizes performance across all locations.
            </p>
          </div>

          {/* Operations Scalability */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="mb-6">
              <img
                src="/help-operations-scalability.png"
                alt="Operations Scalability"
                style={{ width: '64px', height: '64px' }}
              />
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '29px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              Operations Scalability
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Future-proof your business by developing scalable systems and processes capable of supporting exponential growth.
            </p>
          </div>

          {/* Performance Metrics & KPI Optimization */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="mb-6">
              <img
                src="/help-performance-metrics.png"
                alt="Performance Metrics"
                style={{ width: '64px', height: '64px' }}
              />
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '29px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              Performance Metrics & KPI Optimization
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Refine and optimize KPIs and performance metrics to ensure organizational accountability and guarantee measurable success.
            </p>
          </div>

          {/* Risk & Crisis Management */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="mb-6">
              <img
                src="/help-risk-crisis.png"
                alt="Risk & Crisis Management"
                style={{ width: '64px', height: '64px' }}
              />
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '29px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              Risk & Crisis Management
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Safeguard continuity with proactive risk assessments and proven crisis management strategies tailored for market resilience.
            </p>
          </div>

          {/* Supply Chain & Procurement */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="mb-6">
              <img
                src="/help-supply-chain.png"
                alt="Supply Chain & Procurement"
                style={{ width: '64px', height: '64px' }}
              />
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '29px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              Supply Chain & Procurement
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Transform the supply chain into a competitive advantage via streamlined logistics and expert, cost-efficient procurement.
            </p>
          </div>

          {/* Technology Integration */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="mb-6">
              <img
                src="/help-technology-integration.png"
                alt="Technology Integration"
                style={{ width: '64px', height: '64px' }}
              />
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '29px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              Technology Integration
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Seamlessly integrate cutting-edge technologies (AI/Automation) to enhance operational efficiency and accelerate competitive advantage.
            </p>
          </div>

          {/* Product Development */}
          <div
            className="bg-white p-6 rounded-[10px] flex flex-col"
            style={{
              border: '3px solid #14358A',
              minHeight: '257px',
            }}
          >
            <div className="mb-6">
              <img
                src="/help-product-development.png"
                alt="Product Development"
                style={{ width: '64px', height: '64px' }}
              />
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '29px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              Product Development
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '140%',
                color: '#68718B',
              }}
            >
              Accelerate the product journey from concept to market with innovative strategies and processes engineered for immediate customer alignment.
            </p>
          </div>
        </div>
      </div>

      {/* Our Approach Section */}
      <div style={{ backgroundColor: '#fff', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Title */}
          <h2
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: '50px',
              lineHeight: '105%',
              color: '#14358A',
              textAlign: 'center',
              marginBottom: '24px',
            }}
          >
            Our Approach
          </h2>

          {/* Description */}
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: '25px',
              lineHeight: '140%',
              color: '#333',
              textAlign: 'center',
              maxWidth: '1000px',
              margin: '0 auto 60px',
            }}
          >
            Our approach is a unique blend of deep functional expertise and rigorous systems thinking. We solve complex problems by drawing on successful cross-sector strategies, identifying hidden value, and crafting customized execution roadmaps.
          </p>

          {/* Top two steps */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '60px',
              marginBottom: '0',
            }}
          >
            {/* Step 1 */}
            <div style={{ flex: 1, textAlign: 'center' }}>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '27px',
                  lineHeight: '105%',
                  color: '#14358A',
                  letterSpacing: '-0.81px',
                  marginBottom: '12px',
                }}
              >
                Uncover Strategic Growth Avenues
              </h3>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '20px',
                  lineHeight: '140%',
                  color: '#333',
                  margin: 0,
                }}
              >
                We identify emerging market trends and cross-sectoral opportunities to develop compelling strategies for long-term dominance.
              </p>
            </div>

            {/* Step 2 */}
            <div style={{ flex: 1, textAlign: 'center' }}>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '27px',
                  lineHeight: '105%',
                  color: '#14358A',
                  letterSpacing: '-0.81px',
                  marginBottom: '12px',
                }}
              >
                Develop a Resilient Strategic Roadmap
              </h3>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '20px',
                  lineHeight: '140%',
                  color: '#333',
                  margin: 0,
                }}
              >
                We create a clear and actionable roadmap that can withstand market volatility and position your organization for long-term success.
              </p>
            </div>
          </div>

          {/* SVG Roadmap */}
          <svg
            viewBox="0 0 1200 440"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '100%', height: 'auto', display: 'block', margin: '40px 0' }}
          >
            {/* Horizontal line */}
            <line x1="80" y1="200" x2="1120" y2="200" stroke="#14358A" strokeWidth="10" strokeLinecap="round" />

            {/* Circle 1 (left) - with number */}
            <circle cx="230" cy="200" r="35" fill="white" stroke="#14358A" strokeWidth="10" />
            <text x="230" y="200" textAnchor="middle" dominantBaseline="central" fill="#14358A" fontSize="40" fontWeight="600" fontFamily="Poppins, sans-serif">1</text>

            {/* Circle 2 (center) - with number */}
            <circle cx="570" cy="200" r="35" fill="white" stroke="#14358A" strokeWidth="10" />
            <text x="570" y="200" textAnchor="middle" dominantBaseline="central" fill="#14358A" fontSize="40" fontWeight="600" fontFamily="Poppins, sans-serif">2</text>

            {/* Circle 3 (right) - with number */}
            <circle cx="910" cy="200" r="35" fill="white" stroke="#14358A" strokeWidth="10" />
            <text x="910" y="200" textAnchor="middle" dominantBaseline="central" fill="#14358A" fontSize="40" fontWeight="600" fontFamily="Poppins, sans-serif">3</text>

            {/* Left up-branch: from circle 1 curving UP-LEFT to endpoint dot */}
            <path d="M230,165 C230,108 155,50 80,35" fill="none" stroke="#14358A" strokeWidth="10" strokeLinecap="round" />
            <circle cx="80" cy="35" r="18" fill="#14358A" stroke="#14358A" strokeWidth="10" />

            {/* Right up-branch: from Y-junction between circles 2-3, curving UP-RIGHT to endpoint dot */}
            <path d="M720,200 C735,122 905,58 1110,35" fill="none" stroke="#14358A" strokeWidth="10" strokeLinecap="round" />
            <circle cx="1110" cy="35" r="18" fill="#14358A" stroke="#14358A" strokeWidth="10" />

            {/* Down branch: from circle 3 curving DOWN to endpoint dot */}
            <path d="M910,235 C910,318 848,382 782,405" fill="none" stroke="#14358A" strokeWidth="10" strokeLinecap="round" />
            <circle cx="782" cy="405" r="18" fill="#14358A" stroke="#14358A" strokeWidth="10" />
          </svg>

          {/* Step 3 - centered below SVG */}
          <div
            style={{
              textAlign: 'center',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            <h3
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '27px',
                lineHeight: '105%',
                color: '#14358A',
                letterSpacing: '-0.81px',
                marginBottom: '12px',
              }}
            >
              Empower Your Organization for the Future
            </h3>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '140%',
                color: '#333',
                margin: 0,
              }}
            >
              We provide strategic guidance, leadership development, and organizational change management to ensure successful execution.
            </p>
          </div>
        </div>
      </div>

      {/* A Multi-Faceted Approach to Success Section */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side - Capability Pills */}
          <div className="flex flex-col gap-4">
            {/* Vertical Line */}
            <div className="relative pl-8">
              <div
                className="absolute left-0 top-0 h-full"
                style={{
                  width: '4px',
                  background: '#14358A',
                  borderRadius: '2px',
                }}
              />

              {/* Product Lifecycle Management */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="flex items-center rounded-full overflow-hidden"
                  style={{ background: '#14358A' }}
                >
                  <div className="w-[72px] h-[72px] flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="3" width="7" height="7" stroke="white" strokeWidth="2"/>
                      <rect x="14" y="3" width="7" height="7" stroke="white" strokeWidth="2"/>
                      <rect x="3" y="14" width="7" height="7" stroke="white" strokeWidth="2"/>
                      <rect x="14" y="14" width="7" height="7" stroke="white" strokeWidth="2"/>
                    </svg>
                  </div>
                  <span
                    className="pr-8"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '25px',
                      lineHeight: '100%',
                      color: '#FFFFFF',
                    }}
                  >
                    Product Lifecycle Management
                  </span>
                </div>
              </div>

              {/* Capital Excellence */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="flex items-center rounded-full overflow-hidden"
                  style={{ background: '#14358A' }}
                >
                  <div className="w-[72px] h-[72px] flex items-center justify-center">
                    <img
                      src="/icons/paintbrush.png"
                      alt="Capital Excellence"
                      style={{ width: '32px', height: '32px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                    />
                  </div>
                  <span
                    className="pr-8"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '25px',
                      lineHeight: '100%',
                      color: '#FFFFFF',
                    }}
                  >
                    Capital Excellence
                  </span>
                </div>
              </div>

              {/* Data-Driven Insights */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="flex items-center rounded-full overflow-hidden"
                  style={{ background: '#14358A' }}
                >
                  <div className="w-[72px] h-[72px] flex items-center justify-center">
                    <img
                      src="/icons/cursor-click.png"
                      alt="Data-Driven Insights"
                      style={{ width: '32px', height: '32px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                    />
                  </div>
                  <span
                    className="pr-8"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '25px',
                      lineHeight: '100%',
                      color: '#FFFFFF',
                    }}
                  >
                    Data-Driven Insights
                  </span>
                </div>
              </div>

              {/* KPI Optimization */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="flex items-center rounded-full overflow-hidden"
                  style={{ background: '#14358A' }}
                >
                  <div className="w-[72px] h-[72px] flex items-center justify-center">
                    <img
                      src="/icons/rocket-launch.png"
                      alt="KPI Optimization"
                      style={{ width: '32px', height: '32px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                    />
                  </div>
                  <span
                    className="pr-8"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '25px',
                      lineHeight: '100%',
                      color: '#FFFFFF',
                    }}
                  >
                    KPI Optimization
                  </span>
                </div>
              </div>

              {/* Lean Six Sigma */}
              <div className="flex items-center gap-4">
                <div
                  className="flex items-center rounded-full overflow-hidden"
                  style={{ background: '#14358A' }}
                >
                  <div className="w-[72px] h-[72px] flex items-center justify-center">
                    <img
                      src="/icons/wrench.png"
                      alt="Lean Six Sigma"
                      style={{ width: '32px', height: '32px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                    />
                  </div>
                  <span
                    className="pr-8"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '25px',
                      lineHeight: '100%',
                      color: '#FFFFFF',
                    }}
                  >
                    Lean Six Sigma
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 max-w-[715px]">
            <h2
              className="mb-6"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '50px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              A Multi-Faceted Approach to Success
            </h2>

            <p
              className="mb-8"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontSize: '25px',
                lineHeight: '140%',
                color: '#333333',
                textAlign: 'right',
              }}
            >
              Our team isn't limited to a single sector; our strength lies in our industry-agnostic expertise. By assembling a diverse group of experts with proven track records across various fields, we can apply a multi-faceted approach to every challenge. This unique blend of experience and methodology allows us to:
            </p>

            {/* Bullet Point 1 */}
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 mt-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 6L15 12L9 18" stroke="#14358A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6L10 12L4 18" stroke="#14358A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 400,
                  fontSize: '25px',
                  lineHeight: '140%',
                  color: '#333333',
                }}
              >
                Develop truly innovative strategies by leveraging best practices and successful models from a wide range of industries, not just your own.
              </p>
            </div>

            {/* Bullet Point 2 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 6L15 12L9 18" stroke="#14358A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6L10 12L4 18" stroke="#14358A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 400,
                  fontSize: '25px',
                  lineHeight: '140%',
                  color: '#333333',
                }}
              >
                Deliver unparalleled operational efficiency by drawing from the collective wisdom of proven leaders who have solved similar problems in different contexts.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Link */}
        <div className="text-center mt-12">
          <a
            href="/why-functional-consulting"
            className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '30px',
              lineHeight: '30px',
              color: '#14358A',
              textDecoration: 'none',
            }}
          >
            Learn Why Functional Consulting Creates Better Outcomes
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="#14358A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      {/* The Principle of Least Change Section */}
      <div
        className="relative w-full py-20"
        style={{
          backgroundImage: 'url(/principle-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-[1196px] mx-auto px-4 text-center">
          <p
            className="mb-4"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '30px',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
            }}
          >
            The Principle of Least Change
          </p>

          <h2
            className="mb-8"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
            }}
          >
            Maximum Impact. Minimal Disruption.
          </h2>

          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: '32px',
              lineHeight: '135%',
              color: '#FFFFFF',
            }}
          >
            The most effective solution is not the one that changes the most, but the one that achieves your vision with the highest degree of surgical precision. We do not believe in change for the sake of change. We identify the smallest and most strategic adjustments required to unlock exponential value.
          </p>
        </div>
      </div>

      {/* Ready to unlock your organization's full potential CTA Section */}
      <div
        className="relative w-full py-20"
        style={{
          background: 'linear-gradient(180deg, #EBF7FF 0%, #D9ECFA 100%)',
        }}
      >
        <div className="max-w-[1440px] mx-auto px-4 text-center">
          <h2
            className="mb-6"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
            }}
          >
            Ready to unlock your organization's full potential?
          </h2>

          <p
            className="mb-10"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: '32px',
              lineHeight: '135%',
              color: '#333333',
              maxWidth: '1196px',
              margin: '0 auto 2.5rem auto',
            }}
          >
            Let us help you develop and execute a winning strategy that drives sustainable growth and positions your organization for long-term success.
          </p>

          <button
            className="text-white font-bold hover:opacity-90 transition-opacity"
            style={{
              background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
              borderRadius: '10px',
              width: '319px',
              height: '65px',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '20px',
              lineHeight: '140%',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              padding: '16px 32px',
            }}
          >
            Request a Consultation
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-20" style={{ background: '#1B45B4' }}>
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div>
              <img src="/pmg-logo.png" alt="PMG Logo" style={{ width: 'auto', height: '80px', objectFit: 'contain' }} />
            </div>
            <div>
              <h3 className="text-white mb-6" style={{ fontFamily: 'Trade Gothic LT Std, sans-serif', fontWeight: 700, fontSize: '25px', lineHeight: '100%' }}>What we Do</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Our Services</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Our Solutions</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Rebuilding from within</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Why Consulting?</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white mb-6" style={{ fontFamily: 'Trade Gothic LT Std, sans-serif', fontWeight: 700, fontSize: '25px', lineHeight: '100%' }}>Our Content</h3>
              <ul className="space-y-4 mb-10">
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>FAQs</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Insights & Innovations</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Community Programs</a></li>
              </ul>
              <h3 className="text-white mb-6" style={{ fontFamily: 'Trade Gothic LT Std, sans-serif', fontWeight: 700, fontSize: '25px', lineHeight: '100%' }}>Working with PMG</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Careers</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Licensing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white mb-6" style={{ fontFamily: 'Trade Gothic LT Std, sans-serif', fontWeight: 700, fontSize: '25px', lineHeight: '100%' }}>Our Models</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Sector Convergence Model</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>I-O Enterprise Architecture</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Business Value-Unit Model</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white mb-6" style={{ fontFamily: 'Trade Gothic LT Std, sans-serif', fontWeight: 700, fontSize: '25px', lineHeight: '100%' }}>Legal</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Privacy & Cookie Policy</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Hiring & Equal Opportunity</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>AI & Data Ethics Statement</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Anti-Modern Slavery Policy</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Intellectual Property</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Regionalization Policy</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', display: 'block' }}>Digital Terms of Use</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
