import Header from '@/components/Header';

export default function Home() {
  return (
    <main
      className="relative w-full min-h-screen overflow-x-hidden"
    >
      {/* Hero Section with Background Image */}
      <div 
        className="hero-section relative w-full min-h-screen"
        style={{
          backgroundImage: 'url(/hero-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#1e3a8a'
        }}
      >
        {/* Header */}
        <Header />

        {/* Hero Content - Centered */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4" style={{ minHeight: '100vh', paddingTop: '100px' }}>
        {/* Main Heading */}
        <h1 
          className="text-center text-white font-bold"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '60px',
            fontWeight: 700,
            lineHeight: '110%',
            letterSpacing: '-3%',
            maxWidth: '760px',
            marginBottom: '20px'
          }}
        >
          Strategy is Intention.
          <br />
          Execution is Reality.
        </h1>

        {/* Description */}
        <p 
          className="text-center"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: '135%',
            maxWidth: '820px',
            color: '#FFFFFF',
            marginBottom: '40px',
            opacity: 0.95
          }}
        >
          PMG bridges the gap between high-level blueprints and verifiable enterprise value.
          We do not just advise from the sidelines. We provide the embedded leadership 
          and functional mastery required to turn strategic goals into measurable ROI
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-5 flex-wrap">
          {/* Primary Button */}
          <button 
            className="rounded-[10px] text-white hover:opacity-90 transition-opacity"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '18px',
              lineHeight: '135%',
              background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
              padding: '20px 40px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Request a Private Executive Briefing
          </button>

          {/* Secondary Button */}
          <button 
            className="rounded-[10px] text-white border border-white hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '18px',
              lineHeight: '135%',
              padding: '20px 40px',
              background: 'transparent',
              cursor: 'pointer'
            }}
          >
            Explore Strategic solutions
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      </div>

      {/* What We Can Do Section */}
      <div className="relative z-10 bg-white pt-24 pb-16">
        {/* Trusted Text */}
        <p 
          className="text-center font-montserrat font-medium mb-12 uppercase tracking-wide"
          style={{
            fontSize: '14px',
            lineHeight: '100%',
            color: '#6B7280',
            maxWidth: '765px',
            margin: '0 auto 3rem auto'
          }}
        >
          Trusted as a strategic partner to global leaders, accelerators, and the "Big 4."
        </p>

        {/* Section Heading */}
        <h2 
          className="text-center font-poppins font-semibold mb-8"
          style={{
            fontSize: '50px',
            lineHeight: '46px',
            color: '#14358A',
            marginBottom: '2rem'
          }}
        >
          What we can do for you?
        </h2>

        {/* Description */}
        <p 
          className="text-center font-montserrat font-medium mb-12"
          style={{
            fontSize: '32px',
            lineHeight: '100%',
            color: '#333333',
            maxWidth: '1342px',
            margin: '0 auto 3rem auto',
            padding: '0 2rem'
          }}
        >
          PMG bridges the gap between high-level blueprints and verifiable enterprise value. We do not just advise from the sidelines. We provide the embedded leadership and functional mastery required to turn strategic goals into measurable ROI
        </p>

        {/* Services List */}
        <div className="max-w-[1353px] mx-auto" style={{ marginTop: '3rem' }}>
          {/* Service Items */}
          <div className="overflow-hidden" style={{ borderRadius: '56px', boxShadow: '20px 20px 40px 0px rgba(112, 129, 136, 0.2)', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
            {/* Crisis & Transition Management */}
            <div 
              className="flex items-center justify-between px-12"
              style={{ background: 'linear-gradient(90deg, #1B45B4 0%, #1C2792 100%)', height: '156px', borderBottom: '1px solid white' }}
            >
              <div className="flex items-center gap-4">
                <img src="/arrow-icon.png" alt="Arrow" style={{ width: '24px', height: '24px' }} />
                <span className="text-white" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '30px', lineHeight: '120%' }}>Crisis & Transition Management</span>
              </div>
              <span className="text-white" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '30px', lineHeight: '60%' }}>Navigating Uncertainty, Delivering Stability.</span>
            </div>

            {/* Mergers & Acquisitions */}
            <div 
              className="flex items-center justify-between px-12"
              style={{ background: 'linear-gradient(90deg, #1B45B4 0%, #1C2792 100%)', height: '156px', borderBottom: '1px solid white' }}
            >
              <div className="flex items-center gap-4">
                <img src="/arrow-icon.png" alt="Arrow" style={{ width: '24px', height: '24px' }} />
                <span className="text-white" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '30px', lineHeight: '120%' }}>Mergers & Acquisitions</span>
              </div>
              <span className="text-white" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '30px', lineHeight: '60%' }}>Realizing the synergies that others leave on the table.</span>
            </div>

            {/* Branding & Marketing */}
            <div 
              className="flex items-center justify-between px-12"
              style={{ background: 'linear-gradient(90deg, #1B45B4 0%, #1C2792 100%)', height: '156px', borderBottom: '1px solid white' }}
            >
              <div className="flex items-center gap-4">
                <img src="/arrow-icon.png" alt="Arrow" style={{ width: '24px', height: '24px' }} />
                <span className="text-white" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '30px', lineHeight: '120%' }}>Branding & Marketing</span>
              </div>
              <span className="text-white" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '30px', lineHeight: '60%' }}>Crafting Identities That Captivate.</span>
            </div>

            {/* BPO & Fractional Talent */}
            <div 
              className="flex items-center justify-between px-12"
              style={{ background: 'linear-gradient(90deg, #1B45B4 0%, #1C2792 100%)', height: '156px', borderBottom: '1px solid white' }}
            >
              <div className="flex items-center gap-4">
                <img src="/arrow-icon.png" alt="Arrow" style={{ width: '24px', height: '24px' }} />
                <span className="text-white" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '30px', lineHeight: '120%' }}>BPO & Fractional Talent</span>
              </div>
              <span className="text-white" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '30px', lineHeight: '60%' }}>Scaling your infrastructure without scaling your overhead.</span>
            </div>

            {/* Custom Experience */}
            <div 
              className="flex items-center justify-between px-12"
              style={{ background: 'linear-gradient(90deg, #1B45B4 0%, #1C2792 100%)', height: '156px', borderBottom: '1px solid white' }}
            >
              <div className="flex items-center gap-4">
                <img src="/arrow-icon.png" alt="Arrow" style={{ width: '24px', height: '24px' }} />
                <span className="text-white" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '30px', lineHeight: '120%' }}>Custom Experience</span>
              </div>
              <span className="text-white" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '30px', lineHeight: '60%' }}>Engineering high-retention, high-value journey</span>
            </div>

            {/* People & Organizations */}
            <div 
              className="flex items-center justify-between px-12"
              style={{ background: 'linear-gradient(90deg, #1B45B4 0%, #1C2792 100%)', height: '156px', borderBottom: '1px solid white' }}
            >
              <div className="flex items-center gap-4">
                <img src="/arrow-icon.png" alt="Arrow" style={{ width: '24px', height: '24px' }} />
                <span className="text-white" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '30px', lineHeight: '120%' }}>People & Organizations</span>
              </div>
              <span className="text-white" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '30px', lineHeight: '60%' }}>We solve the "People Tax" on P&L.</span>
            </div>

            {/* Operations & Strategy */}
            <div 
              className="flex items-center justify-between px-12"
              style={{ background: 'linear-gradient(90deg, #1B45B4 0%, #1C2792 100%)', height: '156px' }}
            >
              <div className="flex items-center gap-4">
                <img src="/arrow-icon.png" alt="Arrow" style={{ width: '24px', height: '24px' }} />
                <span className="text-white" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '30px', lineHeight: '120%' }}>Operations & Strategy</span>
              </div>
              <span className="text-white" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '30px', lineHeight: '60%' }}>Efficiency Engineering. Excellence Delivered</span>
            </div>

            {/* Explore More Button */}
            <div 
              className="flex items-center justify-center py-8"
              style={{ 
                background: '#AC5FE6',
                boxShadow: '20px 20px 40px 0px rgba(112, 129, 136, 0.2)',
                borderTop: '1px solid white'
              }}
            >
              <button 
                className="text-white font-montserrat font-medium text-lg flex items-center gap-3 hover:bg-white/10 transition-all"
                style={{
                  border: '1px solid white',
                  borderRadius: '50px',
                  padding: '10px 24px'
                }}
              >
                Explore more services
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 13L13 1M13 1H5M13 1V9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Partner with PMG Section */}
      <div className="relative z-10 bg-white py-24">
        {/* Section Heading */}
        <h2 
          className="text-center font-poppins font-bold mb-6"
          style={{
            fontSize: '50px',
            lineHeight: '120%',
            color: '#14358A',
          }}
        >
          Why Partner with PMG?
        </h2>

        {/* Description */}
        <p 
          className="text-center font-montserrat font-normal mb-24"
          style={{
            fontSize: '32px',
            lineHeight: '40px',
            color: '#465052',
            width: '918px',
            margin: '0 auto 6rem auto'
          }}
        >
          Because results matter more than reports. We focus on quality first, consistently outperforming the industry.
        </p>

        {/* Stats Row */}
        <div 
          className="flex justify-center items-center px-4"
          style={{ 
            maxWidth: '1140px', 
            margin: '0 auto',
            gap: '0'
          }}
        >
          {/* Stat 1 - 22x */}
          <div className="flex flex-col items-center" style={{ width: '280px' }}>
            <img 
              src="/icon-box-1.png" 
              alt="ROI Icon" 
              style={{ width: '100px', height: '100px', marginBottom: '28px', objectFit: 'contain' }}
            />
            <p 
              className="font-poppins font-semibold"
              style={{ 
                fontSize: '28px', 
                lineHeight: '34px', 
                color: '#14358A',
                marginBottom: '8px'
              }}
            >
              22x
            </p>
            <p 
              className="font-poppins font-normal"
              style={{ 
                fontSize: '18px', 
                lineHeight: '27px', 
                color: '#000000'
              }}
            >
              Average client ROI
            </p>
          </div>

          {/* Arrow 1 */}
          <div className="flex items-center justify-center" style={{ width: '140px', marginTop: '-60px' }}>
            <img 
              src="/stat-arrow.png" 
              alt="Arrow" 
              style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
            />
          </div>

          {/* Stat 2 - 95% */}
          <div className="flex flex-col items-center" style={{ width: '280px' }}>
            <img 
              src="/icon-box-2.png" 
              alt="Resolution Icon" 
              style={{ width: '100px', height: '100px', marginBottom: '28px', objectFit: 'contain' }}
            />
            <p 
              className="font-poppins font-semibold"
              style={{ 
                fontSize: '28px', 
                lineHeight: '34px', 
                color: '#14358A',
                marginBottom: '8px'
              }}
            >
              95%
            </p>
            <p 
              className="font-poppins font-normal"
              style={{ 
                fontSize: '18px', 
                lineHeight: '27px', 
                color: '#000000'
              }}
            >
              On time resolution
            </p>
          </div>

          {/* Arrow 2 */}
          <div className="flex items-center justify-center" style={{ width: '140px', marginTop: '-60px' }}>
            <img 
              src="/stat-arrow.png" 
              alt="Arrow" 
              style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
            />
          </div>

          {/* Stat 3 - 14% */}
          <div className="flex flex-col items-center" style={{ width: '280px' }}>
            <img 
              src="/icon-box-3.png" 
              alt="Recidivism Icon" 
              style={{ 
                width: '80px', 
                height: '80px', 
                marginBottom: '28px',
                marginTop: '10px',
                borderRadius: '10px',
                objectFit: 'contain'
              }}
            />
            <p 
              className="font-poppins font-semibold"
              style={{ 
                fontSize: '28px', 
                lineHeight: '34px', 
                color: '#14358A',
                marginBottom: '8px'
              }}
            >
              14%
            </p>
            <p 
              className="font-poppins font-normal text-center"
              style={{ 
                fontSize: '18px', 
                lineHeight: '27px', 
                color: '#000000'
              }}
            >
              1-Year Client Recidivism
            </p>
          </div>
        </div>
      </div>

      {/* Our Work Section */}
      <div className="relative z-10 bg-white py-20">
        {/* Section Heading */}
        <h2 
          className="text-center font-bold mb-6"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '48px',
            lineHeight: '105%',
            letterSpacing: '-0.03em',
            color: '#14358A',
          }}
        >
          Our Work
        </h2>

        {/* Description */}
        <p 
          className="text-center font-montserrat font-normal mb-16"
          style={{
            fontSize: '30px',
            lineHeight: '140%',
            color: '#333333',
            maxWidth: '1082px',
            margin: '0 auto 4rem auto',
            padding: '0 2rem'
          }}
        >
          Our work supports strategy, operations, & transformation—equipping financial leaders with the tools to deliver meaningful change.
        </p>

        {/* Cards Grid */}
        <div className="max-w-[1312px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 - Policy & Strategy Development */}
            <div 
              className="bg-white rounded-[10px] p-8"
              style={{
                border: '3px solid #14358A',
                minHeight: '260px'
              }}
            >
              {/* Icon */}
              <div 
                className="w-16 h-16 rounded-[10px] flex items-center justify-center mb-6"
                style={{ background: '#14358A' }}
              >
                <img src="/icons/policy-strategy.png" alt="Policy & Strategy" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
              </div>

              {/* Title */}
              <h3 
                className="font-bold mb-3"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '29px',
                  lineHeight: '105%',
                  letterSpacing: '-0.03em',
                  color: '#14358A'
                }}
              >
                Policy & Strategy Development
              </h3>

              {/* Description */}
              <p 
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '15px',
                  lineHeight: '140%',
                  color: '#68718B'
                }}
              >
                Design ambitious yet practical policies and strategies to support economic growth, improve public service delivery, and maximize long-term societal impact.
              </p>
            </div>

            {/* Card 2 - Operational Efficiency */}
            <div 
              className="bg-white rounded-[10px] p-8"
              style={{
                border: '3px solid #14358A',
                minHeight: '260px'
              }}
            >
              {/* Icon */}
              <div 
                className="w-16 h-16 rounded-[10px] flex items-center justify-center mb-6"
                style={{ background: '#14358A' }}
              >
                <img src="/icons/operational-efficiency.png" alt="Operational Efficiency" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
              </div>

              {/* Title */}
              <h3 
                className="font-bold mb-3"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '29px',
                  lineHeight: '105%',
                  letterSpacing: '-0.03em',
                  color: '#14358A'
                }}
              >
                Operational Efficiency
              </h3>

              {/* Description */}
              <p 
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '15px',
                  lineHeight: '140%',
                  color: '#68718B'
                }}
              >
                Support efficiency initiatives through process optimization, performance measurement, and resource allocation, enabling departments to do more with less.
              </p>
            </div>

            {/* Card 3 - Digital Government & Service Transformation */}
            <div 
              className="bg-white rounded-[10px] p-8"
              style={{
                border: '3px solid #14358A',
                minHeight: '260px'
              }}
            >
              {/* Icon */}
              <div 
                className="w-16 h-16 rounded-[10px] flex items-center justify-center mb-6"
                style={{ background: '#14358A' }}
              >
                <img src="/icons/digital-government.png" alt="Digital Government" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
              </div>

              {/* Title */}
              <h3 
                className="font-bold mb-3"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '29px',
                  lineHeight: '105%',
                  letterSpacing: '-0.03em',
                  color: '#14358A'
                }}
              >
                Digital Government & Service Transformation
              </h3>

              {/* Description */}
              <p 
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '15px',
                  lineHeight: '140%',
                  color: '#68718B'
                }}
              >
                Design and implement digital platforms, data strategies, and user-centered services to significantly improve citizen accessibility and satisfaction.
              </p>
            </div>

            {/* Card 4 - Public Infrastructure & Capital Projects */}
            <div 
              className="bg-white rounded-[10px] p-8"
              style={{
                border: '3px solid #14358A',
                minHeight: '260px'
              }}
            >
              {/* Icon */}
              <div 
                className="w-16 h-16 rounded-[10px] flex items-center justify-center mb-6"
                style={{ background: '#14358A' }}
              >
                <img src="/icons/infrastructure.png" alt="Infrastructure" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
              </div>

              {/* Title */}
              <h3 
                className="font-bold mb-3"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '29px',
                  lineHeight: '105%',
                  letterSpacing: '-0.03em',
                  color: '#14358A'
                }}
              >
                Public Infrastructure & Capital Projects
              </h3>

              {/* Description */}
              <p 
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '15px',
                  lineHeight: '140%',
                  color: '#68718B'
                }}
              >
                Advise on the planning, financing, and delivery of major infrastructure projects, ensuring maximum public value is delivered on time and on budget.
              </p>
            </div>

            {/* Card 5 - Fiscal & Financial Management */}
            <div 
              className="bg-white rounded-[10px] p-8"
              style={{
                border: '3px solid #14358A',
                minHeight: '260px'
              }}
            >
              {/* Icon */}
              <div 
                className="w-16 h-16 rounded-[10px] flex items-center justify-center mb-6"
                style={{ background: '#14358A' }}
              >
                <img src="/icons/fiscal-management.png" alt="Fiscal Management" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
              </div>

              {/* Title */}
              <h3 
                className="font-bold mb-3"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '29px',
                  lineHeight: '105%',
                  letterSpacing: '-0.03em',
                  color: '#14358A'
                }}
              >
                Fiscal & Financial Management
              </h3>

              {/* Description */}
              <p 
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '15px',
                  lineHeight: '140%',
                  color: '#68718B'
                }}
              >
                Advise on fiscal strategy, budget optimization, and cost reduction to ensure long-term financial sustainability while maintaining critical service quality.
              </p>
            </div>

            {/* Card 6 - Workforce & Organizational Transformation */}
            <div 
              className="bg-white rounded-[10px] p-8"
              style={{
                border: '3px solid #14358A',
                minHeight: '260px'
              }}
            >
              {/* Icon */}
              <div 
                className="w-16 h-16 rounded-[10px] flex items-center justify-center mb-6"
                style={{ background: '#14358A' }}
              >
                <img src="/icons/workforce.png" alt="Workforce" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
              </div>

              {/* Title */}
              <h3 
                className="font-bold mb-3"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '29px',
                  lineHeight: '105%',
                  letterSpacing: '-0.03em',
                  color: '#14358A'
                }}
              >
                Workforce & Organizational Transformation
              </h3>

              {/* Description */}
              <p 
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '15px',
                  lineHeight: '140%',
                  color: '#68718B'
                }}
              >
                Strengthen workforce strategies, enhance training, and build organizational cultures that promote innovation and internal accountability.
              </p>
            </div>

            {/* Card 7 - Program Evaluation & Impact Measurement */}
            <div 
              className="bg-white rounded-[10px] p-8"
              style={{
                border: '3px solid #14358A',
                minHeight: '260px'
              }}
            >
              {/* Icon */}
              <div 
                className="w-16 h-16 rounded-[10px] flex items-center justify-center mb-6"
                style={{ background: '#14358A' }}
              >
                <img src="/icons/program-evaluation.png" alt="Program Evaluation" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
              </div>

              {/* Title */}
              <h3 
                className="font-bold mb-3"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '29px',
                  lineHeight: '105%',
                  letterSpacing: '-0.03em',
                  color: '#14358A'
                }}
              >
                Program Evaluation & Impact Measurement
              </h3>

              {/* Description */}
              <p 
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '15px',
                  lineHeight: '140%',
                  color: '#68718B'
                }}
              >
                Design and implement frameworks to rigorously measure program outcomes, evaluate efficacy, and ensure government investments deliver meaningful community impact.
              </p>
            </div>

            {/* Card 8 - Stakeholder Engagement & Public Consultation */}
            <div 
              className="bg-white rounded-[10px] p-8"
              style={{
                border: '3px solid #14358A',
                minHeight: '260px'
              }}
            >
              {/* Icon */}
              <div 
                className="w-16 h-16 rounded-[10px] flex items-center justify-center mb-6"
                style={{ background: '#14358A' }}
              >
                <img src="/icons/stakeholder-engagement.png" alt="Stakeholder Engagement" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
              </div>

              {/* Title */}
              <h3 
                className="font-bold mb-3"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '29px',
                  lineHeight: '105%',
                  letterSpacing: '-0.03em',
                  color: '#14358A'
                }}
              >
                Stakeholder Engagement & Public Consultation
              </h3>

              {/* Description */}
              <p 
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '15px',
                  lineHeight: '140%',
                  color: '#68718B'
                }}
              >
                Facilitate transparent dialogue and public consultation to build trust and ensure policy decisions are informed by diverse citizen and stakeholder perspectives.
              </p>
            </div>

            {/* Card 9 - Procurement & Sourcing Modernization */}
            <div 
              className="bg-white rounded-[10px] p-8"
              style={{
                border: '3px solid #14358A',
                minHeight: '260px'
              }}
            >
              {/* Icon */}
              <div 
                className="w-16 h-16 rounded-[10px] flex items-center justify-center mb-6"
                style={{ background: '#14358A' }}
              >
                <img src="/icons/procurement.png" alt="Procurement" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
              </div>

              {/* Title */}
              <h3 
                className="font-bold mb-3"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '29px',
                  lineHeight: '105%',
                  letterSpacing: '-0.03em',
                  color: '#14358A'
                }}
              >
                Procurement & Sourcing Modernization
              </h3>

              {/* Description */}
              <p 
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '15px',
                  lineHeight: '140%',
                  color: '#68718B'
                }}
              >
                Reform procurement processes to enhance transparency, achieve greater value for money, and support strategic goals like economic development and sustainability.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Traditional Consulting is Broken Section */}
      <div className="relative z-10 bg-white py-20">
        {/* Section Heading */}
        <h2 
          className="text-center font-poppins font-semibold mb-6"
          style={{
            fontSize: '50px',
            lineHeight: '46px',
            color: '#14358A',
            maxWidth: '809px',
            margin: '0 auto 1.5rem auto'
          }}
        >
          Traditional Consulting is Broken
        </h2>

        {/* Description */}
        <p 
          className="text-center font-montserrat font-medium mb-12"
          style={{
            fontSize: '32px',
            lineHeight: '150%',
            color: '#64748B',
            maxWidth: '1106px',
            margin: '0 auto 3rem auto',
            padding: '0 2rem'
          }}
        >
          The old model of consulting is failing. We built PMG to be different, focusing on execution and tangible results, not just slide decks and billable hours.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-5">
          <button 
            className="text-white font-poppins font-semibold hover:opacity-90 transition-opacity"
            style={{
              background: '#14358A',
              border: '2px solid #14358A',
              borderRadius: '82px',
              padding: '20px 50px',
              fontSize: '18px'
            }}
          >
            Explore Strategic solutions ›
          </button>

          <button 
            className="font-poppins font-semibold hover:bg-blue-50 transition-colors"
            style={{
              background: 'transparent',
              border: '2px solid #14358A',
              borderRadius: '82px',
              padding: '20px 50px',
              fontSize: '18px',
              color: '#14358A'
            }}
          >
            Request a demo
          </button>
        </div>
      </div>

      {/* What Our Clients Say Section */}
      <div className="relative z-10 bg-white py-20">
        {/* Section Heading */}
        <h2 
          className="text-center font-poppins font-semibold mb-6"
          style={{
            fontSize: '50px',
            lineHeight: '46px',
            color: '#14358A',
          }}
        >
          What Our Clients Say
        </h2>

        {/* Description */}
        <p 
          className="text-center font-montserrat font-normal mb-16"
          style={{
            fontSize: '32px',
            lineHeight: '36px',
            color: '#333333',
            maxWidth: '842px',
            margin: '0 auto 4rem auto'
          }}
        >
          Across industries and functions, world-class teams
          transform work with PMG.
        </p>

        {/* Testimonial Cards */}
        <div className="flex justify-center gap-8 mb-20 px-4">
          {/* Card 1 - Accenture */}
          <div 
            className="bg-white rounded-xl p-8"
            style={{
              width: '332px',
              minHeight: '431px',
              boxShadow: '0px 2.26px 12.06px 0px #EBEEFA'
            }}
          >
            <img src="/accenture.png" alt="Accenture" className="mb-6" style={{ height: '28px', objectFit: 'contain' }} />
            <p 
              className="font-poppins mb-6"
              style={{
                fontSize: '16px',
                lineHeight: '28px',
                color: '#333333'
              }}
            >
              "Generative AI tools like Writer can drive greater creativity. As we continue to expand the use of AI, the opportunities to enhance content creation, productivity and our entire marketing model are boundless."
            </p>
            <div>
              <p className="font-poppins font-semibold" style={{ fontSize: '16px', color: '#000000' }}>Jill Kramer</p>
              <p className="font-poppins" style={{ fontSize: '16px', lineHeight: '24px', color: '#000000' }}>Chief Marketing and Communications Officer</p>
            </div>
          </div>

          {/* Card 2 - Vanguard */}
          <div 
            className="bg-white rounded-xl p-8"
            style={{
              width: '332px',
              minHeight: '431px',
              boxShadow: '0px 2.26px 12.06px 0px #EBEEFA'
            }}
          >
            <img src="/vanguard.png" alt="Vanguard" className="mb-6" style={{ height: '28px', objectFit: 'contain' }} />
            <p 
              className="font-poppins mb-6"
              style={{
                fontSize: '16px',
                lineHeight: '28px',
                color: '#333333'
              }}
            >
              "Writer's full-stack platform enables Vanguard to combine the expertise, creativity, and knowledge of our teams with the latest advancements in generative AI technology, boosting productivity."
            </p>
            <div>
              <p className="font-poppins font-semibold" style={{ fontSize: '16px', color: '#000000' }}>Nitin Tandon</p>
              <p className="font-poppins" style={{ fontSize: '16px', lineHeight: '24px', color: '#000000' }}>Chief Information Officer</p>
            </div>
          </div>

          {/* Card 3 - Kenvue */}
          <div 
            className="bg-white rounded-xl p-8"
            style={{
              width: '332px',
              minHeight: '431px',
              boxShadow: '0px 2.26px 12.06px 0px #EBEEFA'
            }}
          >
            <img src="/kenvue.png" alt="Kenvue" className="mb-6" style={{ height: '28px', objectFit: 'contain' }} />
            <p 
              className="font-poppins mb-6"
              style={{
                fontSize: '16px',
                lineHeight: '28px',
                color: '#333333'
              }}
            >
              "Writer is onto something amazing. Their full-stack platform, deep customer-centricity, and high-touch approach to services truly sets them apart. Post our due diligence, partnering with Writer was an easy decision for us."
            </p>
            <div>
              <p className="font-poppins font-semibold" style={{ fontSize: '16px', color: '#000000' }}>Ajay Dhaul</p>
              <p className="font-poppins" style={{ fontSize: '16px', lineHeight: '24px', color: '#000000' }}>SVP of Data & Applied AI</p>
            </div>
          </div>
        </div>
      </div>

      {/* Operative Across All 4 Continents Section */}
      <div className="relative z-10 bg-white py-20">
        {/* Section Heading */}
        <h2 
          className="text-center font-poppins font-bold mb-8"
          style={{
            fontSize: '42px',
            lineHeight: '50px',
            color: '#14358A',
          }}
        >
          Operative across all 4 continents
        </h2>

        {/* Description */}
        <p 
          className="text-center font-montserrat font-normal mb-16"
          style={{
            fontSize: '32px',
            lineHeight: '40px',
            color: '#333333',
            maxWidth: '1121px',
            margin: '0 auto 4rem auto',
            padding: '0 2rem'
          }}
        >
          Complexity does not stop at borders. From the tech stacks of Silicon Valley to the sovereign shifts in the Middle East, PMG deploys wherever functional mastery is required.
        </p>

        {/* Stats Badges */}
        <div className="flex justify-center items-center gap-8 mb-16">
          {/* 65+ Global Hubs */}
          <div 
            className="flex flex-col items-center justify-center"
            style={{
              border: '1px solid #14358A',
              borderRadius: '40px',
              padding: '20px 50px',
              minWidth: '250px'
            }}
          >
            <p 
              className="font-dm-sans font-semibold"
              style={{
                fontSize: '50px',
                lineHeight: '140%',
                color: '#14358A',
                opacity: 0.9
              }}
            >
              65+
            </p>
            <p 
              className="font-dm-sans font-semibold"
              style={{
                fontSize: '30px',
                lineHeight: '140%',
                color: '#14358A'
              }}
            >
              Global Hubs
            </p>
          </div>

          {/* 24/7/365 Operational Support */}
          <div 
            className="flex flex-col items-center justify-center"
            style={{
              border: '1px solid #14358A',
              borderRadius: '40px',
              padding: '20px 50px',
              minWidth: '373px'
            }}
          >
            <p 
              className="font-dm-sans font-semibold"
              style={{
                fontSize: '50px',
                lineHeight: '140%',
                color: '#14358A',
                opacity: 0.9
              }}
            >
              24/7/365
            </p>
            <p 
              className="font-dm-sans font-semibold"
              style={{
                fontSize: '30px',
                lineHeight: '140%',
                color: '#14358A'
              }}
            >
              Operational Support
            </p>
          </div>
        </div>

        {/* World Map */}
        <div className="flex justify-center">
          <img 
            src="/world-map.png" 
            alt="World Map showing Global Hubs and Operational Support" 
            className="max-w-full h-auto"
            style={{ maxWidth: '980px', width: '100%' }}
          />
        </div>
      </div>

      {/* Seize Your Next Opportunity CTA Section */}
      <div className="relative z-10 py-20" style={{ background: '#EBF7FF' }}>
        <div className="max-w-4xl mx-auto text-center px-4">
          {/* Heading */}
          <h2 
            className="font-dm-sans font-bold mb-6"
            style={{
              fontSize: '48px',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A'
            }}
          >
            Seize your next opportunity
          </h2>

          {/* Description */}
          <p 
            className="font-dm-sans font-normal mb-8"
            style={{
              fontSize: '18px',
              lineHeight: '135%',
              color: '#68718B',
              maxWidth: '563px',
              margin: '0 auto 2rem auto'
            }}
          >
            Connect with our executive team to solve your critical challenges
            and capitalize on opportunities for immediate, high-impact growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-5">
            <button 
              className="text-white font-dm-sans font-semibold rounded-[10px] hover:opacity-90 transition-opacity"
              style={{
                background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
                padding: '16px 32px',
                fontSize: '16px'
              }}
            >
              Request a demo
            </button>

            <button 
              className="font-dm-sans font-semibold rounded-[10px] hover:bg-purple-50 transition-colors"
              style={{
                background: 'transparent',
                border: '1px solid',
                borderImage: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
                borderImageSlice: 1,
                padding: '16px 32px',
                fontSize: '16px',
                color: '#6A36FF'
              }}
            >
              Try for free
            </button>
          </div>
        </div>
      </div>

      {/* Ready for a Definitive Path to Transformation Section */}
      <div className="relative z-10 bg-white py-16 lg:py-24 overflow-hidden">
        {/* Decorative Background Element */}
        <div 
          className="absolute right-0 top-0 w-[280px] lg:w-[300px] h-[100px] lg:h-[116px] opacity-100"
          style={{
            background: 'linear-gradient(277.47deg, rgba(0, 151, 254, 0) 8.72%, rgba(0, 151, 254, 0.86) 91.5%)'
          }}
        />

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
              className="bg-white rounded-[10px] p-6 lg:p-8 relative"
              style={{
                border: '3px solid #14358A',
                minHeight: '335px'
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
              className="bg-white rounded-[10px] p-6 lg:p-8 relative"
              style={{
                border: '3px solid #14358A',
                minHeight: '335px'
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
              className="bg-white rounded-[10px] p-6 lg:p-8 relative"
              style={{
                border: '3px solid #14358A',
                minHeight: '335px'
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
              className="bg-white rounded-[10px] p-6 lg:p-8 relative"
              style={{
                border: '3px solid #14358A',
                minHeight: '335px'
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
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
          {/* Heading */}
          <h2 
            className="font-dm-sans font-bold mb-6 lg:mb-8"
            style={{
              fontSize: 'clamp(32px, 3.3vw, 48px)',
              lineHeight: '1.05',
              letterSpacing: '-0.03em',
              color: '#14358A'
            }}
          >
            Unsure which solution fits your business?
          </h2>

          {/* Description */}
          <p 
            className="font-montserrat font-normal mb-10 lg:mb-12 mx-auto"
            style={{
              fontSize: 'clamp(20px, 2.2vw, 32px)',
              lineHeight: '1.35',
              color: '#333333',
              maxWidth: '1196px'
            }}
          >
            Our proprietary Solutions Assessment Tool helps you pinpoint the perfect, expert-backed strategy for your unique challenges.
          </p>

          {/* CTA Button */}
          <button 
            className="text-white font-dm-sans font-bold rounded-[10px] hover:opacity-90 transition-all transform hover:scale-105"
            style={{
              background: 'linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)',
              padding: '16px 32px',
              fontSize: 'clamp(18px, 1.4vw, 20px)',
              lineHeight: '1.4',
              minWidth: '280px'
            }}
          >
            Find your ideal solution
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-20" style={{ background: '#1B45B4' }}>
        <div className="max-w-7xl mx-auto px-20">
          <div className="grid grid-cols-5 gap-16">
            {/* Logo Column */}
            <div>
              <h2 className="text-white mb-2" style={{ fontSize: '38px', lineHeight: '100%' }}>
                <span className="logo-text">PMG</span> <span style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 700, letterSpacing: '-0.02em' }}>Consulting</span>
              </h2>
              <p className="font-dm-sans font-normal" style={{ fontSize: '20px', lineHeight: '135%', color: '#FFFFFF', opacity: 0.7 }}>
                Driving Industries Forward
              </p>
            </div>

            {/* What we Do Column */}
            <div>
              <h3 className="text-white font-trade-gothic font-bold text-[25px] mb-4" style={{ lineHeight: '100%' }}>
                What we Do
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '150%', display: 'block' }}>Our Services</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '150%', display: 'block' }}>Our Solutions</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '150%', display: 'block' }}>Rebuilding from within</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '150%', display: 'block' }}>Why Consulting?</a></li>
              </ul>
            </div>

            {/* Our Content Column */}
            <div>
              <h3 className="text-white font-trade-gothic font-bold text-[25px] mb-4" style={{ lineHeight: '100%' }}>
                Our Content
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '150%', display: 'block' }}>FAQs</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '150%', display: 'block' }}>Insights & Innovations</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '150%', display: 'block' }}>Community Programs</a></li>
              </ul>
              <h3 className="text-white font-trade-gothic font-bold text-[25px] mt-8 mb-4" style={{ lineHeight: '100%' }}>
                Working with PMG
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '150%', display: 'block' }}>Careers</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '150%', display: 'block' }}>Licensing</a></li>
              </ul>
            </div>

            {/* Our Models Column */}
            <div>
              <h3 className="text-white font-trade-gothic font-bold text-[25px] mb-4" style={{ lineHeight: '100%' }}>
                Our Models
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '150%', display: 'block' }}>Sector Convergence Model</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '150%', display: 'block' }}>I-O Enterprise Architecture</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '150%', display: 'block' }}>Bussiness Value-Unit Model</a></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="text-white font-trade-gothic font-bold text-[25px] mb-4" style={{ lineHeight: '100%' }}>
                Legal
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '150%', display: 'block' }}>Privacy & Cookie Policy</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '150%', display: 'block' }}>Hiring & Equal Opportunity</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '150%', display: 'block' }}>AI & Data Ethics Statement</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '150%', display: 'block' }}>Anti-Modern Slavery Policy</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '150%', display: 'block' }}>Intellectual Property</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '150%', display: 'block' }}>Regionalization Policy</a></li>
                <li><a href="#" className="text-white font-montserrat font-medium text-[20px] opacity-70 hover:opacity-100 transition-opacity" style={{ lineHeight: '150%', display: 'block' }}>Digital Terms of Use</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
