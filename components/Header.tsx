'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const isAboutPage = pathname === '/about';
  const isYourIndustryPage = pathname === '/your-industry';
  const isFunctionalAreasPage = pathname === '/our-functional-areas';
  const isSolutionsPage = pathname === '/our-solutions';
  const isLightPage = isAboutPage || isYourIndustryPage || isFunctionalAreasPage || isSolutionsPage;

  const textColor = isLightPage ? 'text-black' : 'text-white';
  const logoTextColor = isLightPage ? 'text-[#000000]' : 'text-white'; // purely black for logo text on light pages
  const chevronColor = isLightPage ? '#000000' : 'white';

  const navItems = [
    { name: 'About', hasDropdown: false, href: '/about' },
    { name: 'Your Industry', hasDropdown: false, href: '/your-industry' },
    { name: 'Our functional areas', hasDropdown: false, href: '/our-functional-areas' },
    { name: 'Our Solutions', hasDropdown: false, href: '/our-solutions' },
    { name: 'Insights', hasDropdown: true, href: '#' },
    { name: 'Contact Us', hasDropdown: false, href: '#contact' },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-[1440px] mx-auto relative" style={{ height: '100px' }}>
        {/* Logo Icon */}
        <div className="absolute" style={{ top: '23px', left: '85px' }}>
          <Image
            src="/logo.png"
            alt="PMG Logo Icon"
            width={53}
            height={51}
            priority
          />
        </div>

        {/* PMG Text */}
        <div
          className={`absolute ${logoTextColor} logo-text text-center`}
          style={{
            top: '32px',
            left: '140px',
            fontSize: '35px',
            lineHeight: '100%',
          }}
        >
          PMG
        </div>

        {/* Navigation - Centered Group */}
        <nav className="absolute flex items-center gap-16" style={{ top: '38px', left: '50%', transform: 'translateX(-50%)' }}>
          {navItems.map((item, index) => {
            const isActive = (item.name === 'About' && isAboutPage) ||
                            (item.name === 'Your Industry' && isYourIndustryPage) ||
                            (item.name === 'Our functional areas' && isFunctionalAreasPage) ||
                            (item.name === 'Our Solutions' && isSolutionsPage);

            return (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.hasDropdown ? (
                  <button className={`nav-text flex items-center gap-1 ${textColor} hover:opacity-80 transition-opacity whitespace-nowrap`}>
                    {item.name}
                    <svg
                      width="9"
                      height="6"
                      viewBox="0 0 9 6"
                      fill="none"
                    >
                      <path
                        d="M1 1.5L4.5 4.5L8 1.5"
                        stroke={chevronColor}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`nav-text flex items-center gap-1 hover:opacity-80 transition-opacity whitespace-nowrap ${isActive ? 'bg-[#cbdbf6] text-black px-4 py-1 rounded-[20px]' : textColor}`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
