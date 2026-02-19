'use client';

import Header from '@/components/Header';

export default function CustomerExperienceConsulting() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 pt-[142px] pb-24 text-center">
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
          Customer Experience Consulting
        </p>

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
          Building Industry-Defining Customer Experiences
        </h1>

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
          We treat Customer Experience as a direct driver of revenue, retention, and cost-efficiency. We engineer seamless, personalized interactions that build lasting loyalty and drive sustainable growth.
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1140px] mx-auto">
          {[
            {
              icon: '/icons/change-communication.png',
              title: 'Agent Training & Continuous Development',
              desc: 'Implement continuous agent training and tools to guarantee delivery of exceptional service and drive operational efficiency.',
            },
            {
              icon: '/icons/hris-implementation.png',
              title: 'AI & Service Automation',
              desc: 'Drive immediate efficiency and reduce support costs using cutting-edge AI and service automation solutions.',
            },
            {
              icon: '/icons/hr-analytics.png',
              title: 'Customer Advocacy & Referral Programs',
              desc: 'Architect high-ROI customer advocacy and referral programs that guarantee organic growth and reduce acquisition costs.',
            },
            {
              icon: '/icons/hr-service-delivery.png',
              title: 'Customer Experience Design',
              desc: 'Craft exceptional, data-informed customer experiences using innovative design strategies that maximize engagement and loyalty.',
            },
            {
              icon: '/icons/org-structure.png',
              title: 'Customer Journey Mapping',
              desc: 'Precisely map the customer journey to eliminate friction and boost long-term retention and loyalty.',
            },
            {
              icon: '/icons/leadership-development.png',
              title: 'Customer Lifecycle Management',
              desc: 'Strategically manage the customer lifecycle, from acquisition to retention, to maximize customer lifetime value (CLV).',
            },
            {
              icon: '/icons/performance-management.png',
              title: 'Customer Persona Development',
              desc: 'Build detailed, validated customer profiles to personalize interactions and enhance marketing ROI and effectiveness.',
            },
            {
              icon: '/icons/change-measurement.png',
              title: 'Customer Retention Strategies',
              desc: 'Implement proven retention strategies designed to significantly increase loyalty, repeat business, and subscription rates.',
            },
            {
              icon: '/icons/resistance-management.png',
              title: 'Customer Self-Service Solutions',
              desc: 'Empower customers with self-service solutions that reduce support volume and improve first-contact resolution rates.',
            },
            {
              icon: '/icons/skills-training.png',
              title: 'Customer Support Excellence Programs',
              desc: 'Establish best-in-class support systems that maximize issue resolution speed and enhance customer satisfaction (CSAT).',
            },
            {
              icon: '/icons/succession-planning.png',
              title: 'Data Analytics & Reporting',
              desc: 'Provide actionable data-driven insights and reporting from customer behavior trends to inform high-stakes strategic decisions.',
            },
            {
              icon: '/icons/workforce-planning.png',
              title: 'Digital Engagement & Experience',
              desc: 'Drive deep customer engagement via innovative digital strategies, including UX design and mobile optimization.',
            },
            {
              icon: '/icons/hr-analytics.png',
              title: 'Omnichannel Communication & Integration',
              desc: 'Guarantee a seamless, consistent customer experience across all physical and digital communication channels.',
            },
            {
              icon: '/icons/performance-management.png',
              title: 'Predictive Analytics',
              desc: 'Anticipate customer needs and preferences using predictive analytics to secure a competitive edge and drive proactive service.',
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-[10px] flex flex-col"
              style={{ border: '3px solid #14358A', minHeight: '257px' }}
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#14358A] rounded-lg flex-shrink-0">
                <img
                  src={card.icon}
                  alt={card.title}
                  style={{ width: '24px', height: '24px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
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
                  textAlign: 'left',
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '140%',
                  color: '#68718B',
                  textAlign: 'left',
                }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Approach Section */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 py-20">
        <div className="text-center mb-12">
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
            Our Approach
          </h2>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: '30px',
              lineHeight: '140%',
              color: '#333333',
              maxWidth: '1201px',
              margin: '0 auto',
            }}
          >
            Our approach is a unique blend of deep customer experience expertise and human-centred design principles. We draw insights from a vast array of successful customer experiences across industries, identifying best practices and innovative solutions that deliver exceptional results.
          </p>
        </div>

        <div className="relative max-w-[1200px] mx-auto mt-16">
          {/* Top Row */}
          <div className="grid grid-cols-2 gap-16 mb-12">
            <div className="text-center">
              <h3
                className="mb-3"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '27px',
                  lineHeight: '105%',
                  letterSpacing: '-0.03em',
                  color: '#14358A',
                }}
              >
                Uncover Employee Pain Points
              </h3>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '20px',
                  lineHeight: '140%',
                  color: '#333333',
                }}
              >
                We conduct thorough assessments to understand employee needs, motivations, and challenges.
              </p>
            </div>

            <div className="text-center">
              <h3
                className="mb-3"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '27px',
                  lineHeight: '105%',
                  letterSpacing: '-0.03em',
                  color: '#14358A',
                }}
              >
                Measure and Optimize Performance
              </h3>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '20px',
                  lineHeight: '140%',
                  color: '#333333',
                }}
              >
                We track key metrics, such as customer satisfaction, loyalty, and Net Promoter Score (NPS), to measure the impact of our interventions and continually improve the customer experience.
              </p>
            </div>
          </div>

          {/* Roadmap Image */}
          <div className="relative flex items-center justify-center mb-12">
            <img
              src="/people-approach-roadmap.png"
              alt="Approach Roadmap"
              style={{ width: '100%', maxWidth: '1030px', height: 'auto' }}
            />
          </div>

          {/* Bottom Box */}
          <div className="text-center max-w-[600px] mx-auto">
            <h3
              className="mb-3"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '27px',
                lineHeight: '105%',
                letterSpacing: '-0.03em',
                color: '#14358A',
              }}
            >
              Design Customer-Centric Solutions
            </h3>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '140%',
                color: '#333333',
              }}
            >
              We develop innovative solutions that address customer needs and create seamless, enjoyable experiences.
            </p>
          </div>
        </div>
      </div>

      {/* A Multi-Faceted Approach to Success Section */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side - Capability Pills */}
          <div className="flex flex-col gap-4">
            <div className="relative pl-8">
              <div
                className="absolute left-0 top-0 h-full"
                style={{ width: '4px', background: '#14358A', borderRadius: '2px' }}
              />

              {[
                {
                  icon: null,
                  label: 'Product Lifecycle Management',
                  svg: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="3" width="7" height="7" stroke="white" strokeWidth="2"/>
                      <rect x="14" y="3" width="7" height="7" stroke="white" strokeWidth="2"/>
                      <rect x="3" y="14" width="7" height="7" stroke="white" strokeWidth="2"/>
                      <rect x="14" y="14" width="7" height="7" stroke="white" strokeWidth="2"/>
                    </svg>
                  ),
                },
                { icon: '/icons/paintbrush.png', label: 'Capital Excellence', svg: null },
                { icon: '/icons/cursor-click.png', label: 'Data-Driven Insights', svg: null },
                { icon: '/icons/rocket-launch.png', label: 'KPI Optimization', svg: null },
                { icon: '/icons/wrench.png', label: 'Lean Six Sigma', svg: null },
              ].map((pill, idx, arr) => (
                <div key={idx} className={`flex items-center gap-4 ${idx < arr.length - 1 ? 'mb-4' : ''}`}>
                  <div
                    className="flex items-center rounded-full overflow-hidden"
                    style={{ background: '#14358A' }}
                  >
                    <div className="w-[72px] h-[72px] flex items-center justify-center">
                      {pill.svg ? pill.svg : (
                        <img
                          src={pill.icon!}
                          alt={pill.label}
                          style={{ width: '32px', height: '32px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                        />
                      )}
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
                      {pill.label}
                    </span>
                  </div>
                </div>
              ))}
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
              Creating Exceptional Customer Journeys
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
              Our team isn't confined to a single industry; we've assembled a diverse group of experts with a proven track record of success in creating exceptional customer experiences across sectors. This unique blend of experience and expertise allows us to think beyond traditional channels.
            </p>

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
                Develop innovative solutions by leveraging best practices from diverse industries to craft unique and engaging experiences that delight your customers.
              </p>
            </div>

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
                Deliver unparalleled customer-centricity from the collective wisdom of leaders who have successfully built loyal customer bases and driven brand advocacy.
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

      {/* CTA Section */}
      <div
        className="relative w-full py-20"
        style={{ background: 'linear-gradient(180deg, #EBF7FF 0%, #D9ECFA 100%)' }}
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
            Ready to Convert Customer Loyalty into Measurable Growth?
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
            Let us help you develop and execute a winning customer experience strategy that drives business growth and creates lasting customer loyalty.
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
              <img src="/PMG_Logo-removebg-preview 11.png" alt="PMG Logo" className="mb-6 h-12" />
            </div>
            {[
              { heading: 'What we Do', items: ['Strategy & Operations', 'People & Organizations', 'Customer Experience', 'M&A', 'Branding & Marketing', 'BPO & Fractional Talent', 'Crisis & Transition'] },
              { heading: 'Our Content', items: ['Featured Articles', 'Case Studies', 'White Papers', 'Webinars', 'Podcast'] },
              { heading: 'Our Models', items: ['Out-of-the-Box', 'Bespoke Solutions', 'Active Management', 'Equity Engagements'] },
              { heading: 'Legal', items: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'] },
            ].map((col) => (
              <div key={col.heading}>
                <h3
                  className="mb-4"
                  style={{ fontFamily: 'Trade Gothic LT Std, sans-serif', fontWeight: 700, fontSize: '25px', lineHeight: '100%', color: '#FFFFFF' }}
                >
                  {col.heading}
                </h3>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="hover:opacity-80 transition-opacity"
                        style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '100%', color: '#FFFFFF', textDecoration: 'none' }}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-white/20 text-center">
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '16px', color: '#FFFFFF' }}>
              © 2024 PMG. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
