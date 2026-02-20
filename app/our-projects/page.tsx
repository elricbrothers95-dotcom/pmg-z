'use client';

import Header from '@/components/Header';
import { useState } from 'react';

export default function OurProjects() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filterOptions = [
    'Strategy & Operations',
    'People & Organizations',
    'Customer Experience',
    'M&A',
    'Branding & Marketing',
    'BPO & Fractional Talent',
    'Crisis & Transition',
  ];

  const projects: any[] = []; // Empty array - no projects to display

  const filteredProjects = selectedFilters.length === 0
    ? projects
    : projects.filter(project =>
        selectedFilters.some(filter => project.categories.includes(filter))
      );

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 pt-[142px] pb-12">
        <h1
          className="text-center mb-12"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: '50px',
            lineHeight: '46px',
            color: '#14358A',
          }}
        >
          Our Projects
        </h1>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {filterOptions.map((filter) => {
            const isSelected = selectedFilters.includes(filter);
            return (
              <button
                key={filter}
                onClick={() => {
                  setSelectedFilters(prev =>
                    isSelected
                      ? prev.filter(f => f !== filter)
                      : [...prev, filter]
                  );
                }}
                className="px-6 py-2 rounded-full transition-all"
                style={{
                  background: isSelected ? '#14358A' : '#F0F0F0',
                  color: isSelected ? '#FFFFFF' : '#333333',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Filter Projects Text */}
        <div className="text-center mb-8">
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '100%',
              color: '#000000',
            }}
          >
            Filter Projects
          </p>
        </div>

        {/* No Projects Message */}
        <div className="text-center py-20">
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: '25px',
              lineHeight: '100%',
              color: '#000000',
            }}
          >
            No projects match the selected filters.
          </p>
        </div>
      </div>

      {/* Global Network Section */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 py-20">
        <h2
          className="text-center mb-8"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 700,
            fontSize: '50px',
            lineHeight: '105%',
            letterSpacing: '-0.03em',
            color: '#14358A',
          }}
        >
          Global Network and Strategic Engagements
        </h2>

        <p
          className="text-center mb-16 mx-auto"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 400,
            fontSize: '30px',
            lineHeight: '140%',
            color: '#333333',
            maxWidth: '1201px',
          }}
        >
          Beyond our direct client engagements, PMG is a trusted strategic partner providing essential domain expertise and services across the global professional and startup ecosystem.
        </p>

        {/* Partnership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
          {/* White-Label Consulting Support */}
          <div
            className="bg-white p-8 rounded-lg"
            style={{ border: '3px solid #14358A' }}
          >
            <h3
              className="mb-4"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '24px',
                lineHeight: '110%',
                letterSpacing: '-0.03em',
                color: '#000000',
              }}
            >
              White-Label Consulting Support
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
              We serve as a confidential, white-label partner to two of the "Big 4" global consulting firms, providing critical technical and specialized support on sensitive projects. This allows these organizations to leverage our unique expertise under their own brand to ensure the highest quality outcomes.
            </p>
          </div>

          {/* Ecosystem and Advisory Partnerships */}
          <div
            className="bg-white p-8 rounded-lg"
            style={{ border: '3px solid #14358A' }}
          >
            <h3
              className="mb-4"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '24px',
                lineHeight: '110%',
                letterSpacing: '-0.03em',
                color: '#000000',
              }}
            >
              Ecosystem and Advisory Partnerships
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
              We are proud ecosystem partners with one of the world's most successful startup accelerators, Y Combinator, focusing our services on supporting their emerging incubator projects rather than working with the accelerator directly.
            </p>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="flex justify-center items-center gap-12 mt-16 flex-wrap">
          <img src="/image 21.png" alt="Partner Logo" style={{ height: '80px', width: 'auto', objectFit: 'contain' }} />
          <img src="/image 22.png" alt="Partner Logo" style={{ height: '80px', width: 'auto', objectFit: 'contain' }} />
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
