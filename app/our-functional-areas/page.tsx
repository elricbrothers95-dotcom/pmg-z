import Header from '@/components/Header';
import Link from 'next/link';
import Image from 'next/image';

export default function OurFunctionalAreas() {
  return (
    <main className="relative w-full min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="depth-container w-full pt-24 pb-16 px-4">
        <div className="max-w-[1440px] mx-auto">
          {/* Hero Section */}
          <div className="flex flex-col items-center justify-center text-center pt-12 pb-8">
            {/* Main Heading */}
            <h1
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: '50px',
                lineHeight: '46px',
                letterSpacing: '0%',
                color: '#14358A',
                marginBottom: '24px',
              }}
            >
              Functional Mastery. Executed.
            </h1>

            {/* Subtitle */}
            <p
              className="mb-8"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontSize: '32px',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#333333',
                maxWidth: '1258px',
                padding: '0 1rem',
              }}
            >
              We deliver bespoke solutions that reject generalized frameworks. Expect measurable, tangible business improvements and significant ROI precisely aligned with your strategic, high-stakes objectives.
            </p>

            {/* CTA Button */}
            <Link
              href="#why-pmg"
              className="inline-block rounded-xl px-8 py-4 text-white font-semibold transition-all hover:opacity-90 hover:scale-105"
              style={{
                background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
                fontSize: 'clamp(0.875rem, 1.2vw, 1.125rem)', // 14px to 18px responsive
                boxShadow: '0 4px 14px rgba(106, 54, 255, 0.3)',
              }}
            >
              See why PMG is the right choice
            </Link>
          </div>

          {/* Functional Areas Section */}
          <div className="flex flex-col items-center justify-center text-center pt-16 pb-8">
            {/* Section Heading */}
            <h2 
              className="font-bold mb-6"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 'clamp(2rem, 3.5vw, 3rem)', // 32px to 48px responsive
                lineHeight: '1.05',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              Our Functional Areas
            </h2>

            {/* Description */}
            <p 
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(1.125rem, 1.8vw, 1.875rem)', // 18px to 30px responsive
                lineHeight: '1.4',
                color: '#333333',
                maxWidth: '1100px',
                padding: '0 1rem',
              }}
            >
              We deploy world-class expertise to deliver a range of services uniquely tailored to your complex requirements.
            </p>
          </div>

          {/* Functional Areas Cards Section - 2-3-2 Layout */}
          <div className="flex flex-col gap-6 mt-12 px-4 max-w-[1300px] mx-auto w-full">
            
            {/* Row 1: 2 Cards */}
            <div className="flex flex-col md:flex-row justify-center gap-6 w-full">
              {/* Operations & Strategy */}
              <div
                className="depth-card rounded-xl p-6 w-full md:w-[48%] lg:w-[400px]"
                style={{
                  border: '3px solid #14358A',
                  minHeight: '237px',
                }}
              >
                <div className="h-full flex flex-col">
                  <div className="bg-[#14358A] rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <Image 
                      src="/table.png" 
                      alt="Operations & Strategy" 
                      width={24} 
                      height={24}
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                  </div>
                  <h3 
                    className="font-bold mb-2"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: 'clamp(1.375rem, 1.8vw, 1.8125rem)',
                      lineHeight: '1.05',
                      letterSpacing: '-0.03em',
                      color: '#14358A',
                    }}
                  >
                    Operations & Strategy
                  </h3>
                  <p 
                    className="mb-4"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: 'clamp(0.875rem, 1vw, 1rem)',
                      lineHeight: '1.4',
                      color: '#68718B',
                    }}
                  >
                    Efficiency Engineered, Excellence Delivered.
                  </p>
                  <button 
                    className="mt-auto text-left font-semibold hover:opacity-80 transition-opacity flex items-center gap-1"
                    style={{
                      color: '#14358A',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 'clamp(1rem, 1.3vw, 1.32rem)',
                    }}
                  >
                    Explore Strategic solutions <span>›</span>
                  </button>
                </div>
              </div>

              {/* People & Organizations */}
              <div
                className="depth-card rounded-xl p-6 w-full md:w-[48%] lg:w-[400px]"
                style={{
                  border: '3px solid #14358A',
                  minHeight: '237px',
                }}
              >
                <div className="h-full flex flex-col">
                  <div className="bg-[#14358A] rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <Image 
                      src="/every-user.png" 
                      alt="People & Organizations" 
                      width={24} 
                      height={24}
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                  </div>
                  <h3 
                    className="font-bold mb-2"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: 'clamp(1.375rem, 1.8vw, 1.8125rem)',
                      lineHeight: '1.05',
                      letterSpacing: '-0.03em',
                      color: '#14358A',
                    }}
                  >
                    People & Organizations
                  </h3>
                  <p 
                    className="mb-4"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: 'clamp(0.875rem, 1vw, 1rem)',
                      lineHeight: '1.4',
                      color: '#68718B',
                    }}
                  >
                    We solve the "People Tax" on your P&L.
                  </p>
                  <button 
                    className="mt-auto text-left font-semibold hover:opacity-80 transition-opacity flex items-center gap-1"
                    style={{
                      color: '#14358A',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 'clamp(1rem, 1.3vw, 1.32rem)',
                    }}
                  >
                    Explore Strategic solutions <span>›</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Row 2: 3 Cards */}
            <div className="flex flex-col md:flex-row justify-center gap-6 w-full">
              {/* Customer Experience */}
              <div
                className="depth-card rounded-xl p-6 w-full md:w-[32%] lg:w-[400px]"
                style={{
                  border: '3px solid #14358A',
                  minHeight: '237px',
                }}
              >
                <div className="h-full flex flex-col">
                  <div className="bg-[#14358A] rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <Image 
                      src="/heart-rate.png" 
                      alt="Customer Experience" 
                      width={24} 
                      height={24}
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                  </div>
                  <h3 
                    className="font-bold mb-2"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: 'clamp(1.375rem, 1.8vw, 1.8125rem)',
                      lineHeight: '1.05',
                      letterSpacing: '-0.03em',
                      color: '#14358A',
                    }}
                  >
                    Customer Experience
                  </h3>
                  <p 
                    className="mb-4"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: 'clamp(0.875rem, 1vw, 1rem)',
                      lineHeight: '1.4',
                      color: '#68718B',
                    }}
                  >
                    Engineering high-retention, high-value journeys.
                  </p>
                  <button 
                    className="mt-auto text-left font-semibold hover:opacity-80 transition-opacity flex items-center gap-1"
                    style={{
                      color: '#14358A',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 'clamp(1rem, 1.3vw, 1.32rem)',
                    }}
                  >
                    Explore Strategic solutions <span>›</span>
                  </button>
                </div>
              </div>

              {/* Mergers & Acquisitions */}
              <div
                className="depth-card rounded-xl p-6 w-full md:w-[32%] lg:w-[400px]"
                style={{
                  border: '3px solid #14358A',
                  minHeight: '237px',
                }}
              >
                <div className="h-full flex flex-col">
                  <div className="bg-[#14358A] rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <Image 
                      src="/cooperative-handshake.png" 
                      alt="Mergers & Acquisitions" 
                      width={24} 
                      height={24}
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                  </div>
                  <h3 
                    className="font-bold mb-2"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: 'clamp(1.375rem, 1.8vw, 1.8125rem)',
                      lineHeight: '1.05',
                      letterSpacing: '-0.03em',
                      color: '#14358A',
                    }}
                  >
                    Mergers & Acquisitions
                  </h3>
                  <p 
                    className="mb-4"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: 'clamp(0.875rem, 1vw, 1rem)',
                      lineHeight: '1.4',
                      color: '#68718B',
                    }}
                  >
                    Realizing the synergies that others leave on the table.
                  </p>
                  <button 
                    className="mt-auto text-left font-semibold hover:opacity-80 transition-opacity flex items-center gap-1"
                    style={{
                      color: '#14358A',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 'clamp(1rem, 1.3vw, 1.32rem)',
                    }}
                  >
                    Explore Strategic solutions <span>›</span>
                  </button>
                </div>
              </div>

              {/* Branding & Marketing */}
              <div
                className="depth-card rounded-xl p-6 w-full md:w-[32%] lg:w-[400px]"
                style={{
                  border: '3px solid #14358A',
                  minHeight: '237px',
                }}
              >
                <div className="h-full flex flex-col">
                  <div className="bg-[#14358A] rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <Image 
                      src="/speaker-one.png" 
                      alt="Branding & Marketing" 
                      width={24} 
                      height={24}
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                  </div>
                  <h3 
                    className="font-bold mb-2"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: 'clamp(1.375rem, 1.8vw, 1.8125rem)',
                      lineHeight: '1.05',
                      letterSpacing: '-0.03em',
                      color: '#14358A',
                    }}
                  >
                    Branding & Marketing
                  </h3>
                  <p 
                    className="mb-4"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: 'clamp(0.875rem, 1vw, 1rem)',
                      lineHeight: '1.4',
                      color: '#68718B',
                    }}
                  >
                    Crafting Identities That Captivate.
                  </p>
                  <button 
                    className="mt-auto text-left font-semibold hover:opacity-80 transition-opacity flex items-center gap-1"
                    style={{
                      color: '#14358A',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 'clamp(1rem, 1.3vw, 1.32rem)',
                    }}
                  >
                    Explore Strategic solutions <span>›</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Row 3: 2 Cards */}
            <div className="flex flex-col md:flex-row justify-center gap-6 w-full">
              {/* BPO & Fractional Talent */}
              <div
                className="depth-card rounded-xl p-6 w-full md:w-[48%] lg:w-[400px]"
                style={{
                  border: '3px solid #14358A',
                  minHeight: '237px',
                }}
              >
                <div className="h-full flex flex-col">
                  <div className="bg-[#14358A] rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <Image 
                      src="/click.png" 
                      alt="BPO & Fractional Talent" 
                      width={24} 
                      height={24}
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                  </div>
                  <h3 
                    className="font-bold mb-2"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: 'clamp(1.375rem, 1.8vw, 1.8125rem)',
                      lineHeight: '1.05',
                      letterSpacing: '-0.03em',
                      color: '#14358A',
                    }}
                  >
                    BPO & Fractional Talent
                  </h3>
                  <p 
                    className="mb-4"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: 'clamp(0.875rem, 1vw, 1rem)',
                      lineHeight: '1.4',
                      color: '#68718B',
                    }}
                  >
                    Scaling your infrastructure without scaling your overhead.
                  </p>
                  <button 
                    className="mt-auto text-left font-semibold hover:opacity-80 transition-opacity flex items-center gap-1"
                    style={{
                      color: '#14358A',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 'clamp(1rem, 1.3vw, 1.32rem)',
                    }}
                  >
                    Explore Strategic solutions <span>›</span>
                  </button>
                </div>
              </div>

              {/* Crisis & Transition Management */}
              <div
                className="depth-card rounded-xl p-6 w-full md:w-[48%] lg:w-[400px]"
                style={{
                  border: '3px solid #14358A',
                  minHeight: '237px',
                }}
              >
                <div className="h-full flex flex-col">
                  <div className="bg-[#14358A] rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <Image 
                      src="/earth.png" 
                      alt="Crisis & Transition Management" 
                      width={24} 
                      height={24}
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                  </div>
                  <h3 
                    className="font-bold mb-2"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: 'clamp(1.375rem, 1.8vw, 1.8125rem)',
                      lineHeight: '1.05',
                      letterSpacing: '-0.03em',
                      color: '#14358A',
                    }}
                  >
                    Crisis & Transition Management
                  </h3>
                  <p 
                    className="mb-4"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: 'clamp(0.875rem, 1vw, 1rem)',
                      lineHeight: '1.4',
                      color: '#68718B',
                    }}
                  >
                    Navigating Uncertainty, Delivering Stability.
                  </p>
                  <button 
                    className="mt-auto text-left font-semibold hover:opacity-80 transition-opacity flex items-center gap-1"
                    style={{
                      color: '#14358A',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 'clamp(1rem, 1.3vw, 1.32rem)',
                    }}
                  >
                    Explore Strategic solutions <span>›</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ready for a Definitive Path to Transformation Section */}
      <div className="depth-container relative z-10 py-16 lg:py-24 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-20 relative">
          {/* Section Heading */}
          <h2 
            className="text-center font-poppins font-semibold mb-8 lg:mb-12"
            style={{
              fontSize: 'clamp(32px, 3.5vw, 50px)',
              lineHeight: '1.1',
              color: '#14358A'
            }}
          >
            Ready for a Definitive Path to Transformation?
          </h2>

          {/* Description */}
          <p 
            className="text-center font-montserrat font-normal mb-12 lg:mb-16 mx-auto"
            style={{
              fontSize: 'clamp(20px, 2vw, 30px)',
              lineHeight: '1.4',
              color: '#333333',
              maxWidth: '1082px'
            }}
          >
            PMG's expertise translates directly into superior results. Explore our structured engagement models, ensuring the right expertise is delivered in a way that aligns perfectly with your growth goals.
          </p>

          {/* Solution Cards Grid - Top Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10 mb-6 lg:mb-8 xl:mb-10 max-w-[1200px] mx-auto">
            {/* Out-of-the-Box Solutions Card */}
            <div 
              className="depth-card rounded-[10px] p-6 lg:p-8 relative"
              style={{
                border: '3px solid #14358A',
                minHeight: '335px',
              }}
            >
              {/* Icon */}
              <div 
                className="w-16 h-16 rounded-[10px] flex items-center justify-center mb-6"
                style={{ background: '#14358A' }}
              >
                <img src="/cube-three.png" alt="Out-of-the-Box Solutions" className="w-10 h-10" />
              </div>

              {/* Title */}
              <h3 
                className="font-dm-sans font-bold mb-2"
                style={{
                  fontSize: 'clamp(24px, 2vw, 29px)',
                  lineHeight: '1.05',
                  letterSpacing: '-0.03em',
                  color: '#14358A'
                }}
              >
                Out-of-the-Box Solutions
              </h3>

              {/* Subtitle */}
              <p 
                className="font-dm-sans mb-4"
                style={{
                  fontSize: '16px',
                  lineHeight: '1.4',
                  color: '#68718B'
                }}
              >
                Simple · Affordable · Self-Directed
              </p>

              {/* Description */}
              <p 
                className="font-dm-sans mb-6"
                style={{
                  fontSize: '18px',
                  lineHeight: '1.67',
                  color: '#68718B',
                  marginBottom: 'auto'
                }}
              >
                Pre-packaged, technology-enabled offerings designed to rapidly address common industry challenges and deliver immediate value.
              </p>

              {/* CTA Link */}
              <a 
                href="#"
                className="font-inter font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                style={{
                  fontSize: '21px',
                  lineHeight: '1.43',
                  color: '#14358A'
                }}
              >
                Explore Strategic solutions
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="#14358A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* Bespoke Solutions Card */}
            <div 
              className="depth-card rounded-[10px] p-6 lg:p-8 relative"
              style={{
                border: '3px solid #14358A',
                minHeight: '335px',
              }}
            >
              {/* Icon */}
              <div 
                className="w-16 h-16 rounded-[10px] flex items-center justify-center mb-6"
                style={{ background: '#14358A' }}
              >
                <img src="/pencil.png" alt="Bespoke Solutions" className="w-10 h-10" />
              </div>

              {/* Title */}
              <h3 
                className="font-dm-sans font-bold mb-2"
                style={{
                  fontSize: 'clamp(24px, 2vw, 29px)',
                  lineHeight: '1.05',
                  letterSpacing: '-0.03em',
                  color: '#14358A'
                }}
              >
                Bespoke Solutions
              </h3>

              {/* Subtitle */}
              <p 
                className="font-dm-sans mb-4"
                style={{
                  fontSize: '16px',
                  lineHeight: '1.4',
                  color: '#68718B'
                }}
              >
                Custom · Flexible · Fully Supported
              </p>

              {/* Description */}
              <p 
                className="font-dm-sans mb-6"
                style={{
                  fontSize: '18px',
                  lineHeight: '1.67',
                  color: '#68718B'
                }}
              >
                Tailored to your specific, complex needs. Our custom solutions are managed hands-on by our world-class expert team, ensuring high-impact innovation.
              </p>

              {/* CTA Link */}
              <a 
                href="#"
                className="font-inter font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                style={{
                  fontSize: '21px',
                  lineHeight: '1.43',
                  color: '#14358A'
                }}
              >
                Explore Strategic solutions
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="#14358A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Solution Cards Grid - Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10 max-w-[1200px] mx-auto">
            {/* Active Management Solutions Card */}
            <div 
              className="depth-card rounded-[10px] p-6 lg:p-8 relative"
              style={{
                border: '3px solid #14358A',
                minHeight: '335px',
              }}
            >
              {/* Icon */}
              <div 
                className="w-16 h-16 rounded-[10px] flex items-center justify-center mb-6"
                style={{ background: '#14358A' }}
              >
                <img src="/right-user.png" alt="Active Management Solutions" className="w-10 h-10" />
              </div>

              {/* Title */}
              <h3 
                className="font-dm-sans font-bold mb-2"
                style={{
                  fontSize: 'clamp(24px, 2vw, 29px)',
                  lineHeight: '1.05',
                  letterSpacing: '-0.03em',
                  color: '#14358A'
                }}
              >
                Active Management Solutions
              </h3>

              {/* Subtitle */}
              <p 
                className="font-dm-sans mb-4"
                style={{
                  fontSize: '16px',
                  lineHeight: '1.4',
                  color: '#68718B'
                }}
              >
                Proactive · Expert-Led · Fully Managed
              </p>

              {/* Description */}
              <p 
                className="font-dm-sans mb-6"
                style={{
                  fontSize: '18px',
                  lineHeight: '1.67',
                  color: '#68718B'
                }}
              >
                We don't just consult—we actively manage critical functions. PMG leads hands-on, end-to-end solution delivery with full accountability for results.
              </p>

              {/* CTA Link */}
              <a 
                href="#"
                className="font-inter font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                style={{
                  fontSize: '21px',
                  lineHeight: '1.43',
                  color: '#14358A'
                }}
              >
                Explore Strategic solutions
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="#14358A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* Equity Engagements Card */}
            <div 
              className="depth-card rounded-[10px] p-6 lg:p-8 relative"
              style={{
                border: '3px solid #14358A',
                minHeight: '335px',
              }}
            >
              {/* Icon */}
              <div 
                className="w-16 h-16 rounded-[10px] flex items-center justify-center mb-6"
                style={{ background: '#14358A' }}
              >
                <img src="/efferent-four.png" alt="Equity Engagements" className="w-10 h-10" />
              </div>

              {/* Title */}
              <h3 
                className="font-dm-sans font-bold mb-2"
                style={{
                  fontSize: 'clamp(24px, 2vw, 29px)',
                  lineHeight: '1.05',
                  letterSpacing: '-0.03em',
                  color: '#14358A'
                }}
              >
                Equity Engagements
              </h3>

              {/* Subtitle */}
              <p 
                className="font-dm-sans mb-4"
                style={{
                  fontSize: '16px',
                  lineHeight: '1.4',
                  color: '#68718B'
                }}
              >
                Aligned · Scalable · Capital-Efficient
              </p>

              {/* Description */}
              <p 
                className="font-dm-sans mb-6"
                style={{
                  fontSize: '18px',
                  lineHeight: '1.67',
                  color: '#68718B'
                }}
              >
                Access top-tier strategy and execution without draining vital cash reserves. PMG invests proprietary expertise for equity, directly aligning our success with your maximized outcomes.
              </p>

              {/* CTA Link */}
              <a 
                href="#"
                className="font-inter font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                style={{
                  fontSize: '21px',
                  lineHeight: '1.43',
                  color: '#14358A'
                }}
              >
                Explore Strategic solutions
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="#14358A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Unsure Which Solution Fits Section */}
      <div className="relative z-10 py-16 lg:py-20" style={{ background: '#EBF7FF' }}>
        <div className="mx-auto px-6 lg:px-12 text-center">
          {/* Heading */}
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '105%',
              letterSpacing: '-3%',
              textAlign: 'center',
              color: '#14358A',
              marginBottom: '24px',
            }}
          >
            Unsure which solution fits your business?
          </h2>

          {/* Description */}
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: '32px',
              lineHeight: '135%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#333333',
              maxWidth: '1196px',
              margin: '0 auto 48px auto',
            }}
          >
            Our proprietary Solutions Assessment Tool helps you pinpoint the perfect, expert-backed strategy for your unique challenges.
          </p>

          {/* CTA Button */}
          <button
            className="hover:opacity-90 transition-all"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '20px',
              lineHeight: '140%',
              color: '#FFFFFF',
              background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
              borderRadius: '10px',
              width: '319px',
              height: '65px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Find your ideal solution
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10" style={{ background: 'linear-gradient(83.95deg, #1B45B4 3%, #1C2792 96.84%)', minHeight: '431px' }}>
        <div className="max-w-[1440px] mx-auto px-20 py-20">
          <div className="grid grid-cols-5 gap-16">
            {/* Logo Column */}
            <div className="flex items-start">
              <img
                src="/pmg-logo-footer.png"
                alt="PMG Logo"
                style={{ width: '151px', height: '145px', objectFit: 'contain' }}
              />
            </div>

            {/* What we Do Column */}
            <div>
              <h3
                className="text-white mb-4"
                style={{
                  fontFamily: "'Trade Gothic LT Std', sans-serif",
                  fontWeight: 700,
                  fontSize: '25px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}
              >
                What we Do
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Our Services</a></li>
                <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Our Solutions</a></li>
                <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Rebuilding from within</a></li>
                <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Why Consulting?</a></li>
              </ul>
            </div>

            {/* Our Content Column */}
            <div>
              <h3
                className="text-white mb-4"
                style={{
                  fontFamily: "'Trade Gothic LT Std', sans-serif",
                  fontWeight: 700,
                  fontSize: '25px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}
              >
                Our Content
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>FAQs</a></li>
                <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Insights & Innovations</a></li>
                <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Community Programs</a></li>
              </ul>
              <h3
                className="text-white mt-8 mb-4"
                style={{
                  fontFamily: "'Trade Gothic LT Std', sans-serif",
                  fontWeight: 700,
                  fontSize: '25px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}
              >
                Working with PMG
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Careers</a></li>
                <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Licensing</a></li>
              </ul>
            </div>

            {/* Our Models Column */}
            <div>
              <h3
                className="text-white mb-4"
                style={{
                  fontFamily: "'Trade Gothic LT Std', sans-serif",
                  fontWeight: 700,
                  fontSize: '25px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}
              >
                Our Models
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Sector Convergence Model</a></li>
                <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>I-O Enterprise Architecture</a></li>
                <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Bussiness Value-Unit Model</a></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3
                className="text-white mb-4"
                style={{
                  fontFamily: "'Trade Gothic LT Std', sans-serif",
                  fontWeight: 700,
                  fontSize: '25px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}
              >
                Legal
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Privacy & Cookie Policy</a></li>
                <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Hiring & Equal Opportunity</a></li>
                <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>AI & Data Ethics Statement</a></li>
                <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Anti-Modern Slavery Policy</a></li>
                <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Intellectual Property</a></li>
                <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Regionalization Policy</a></li>
                <li><a href="#" className="text-white hover:opacity-100 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', opacity: 0.7, display: 'block' }}>Digital Terms of Use</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
