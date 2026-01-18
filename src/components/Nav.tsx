"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Nav = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Faculty & Mentors', href: '/faculty' },
    { name: 'Community & Impact', href: '/community' },
    { name: 'Blog / Insights', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none md:hidden"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            <Link href="/" className="flex items-center text-xl font-bold text-gray-900">
              <Image
                src="/logo.png"
                alt="Sankofa Data Institute Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              Sankofa Data Institute
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs px-2 py-2 rounded-md transition-colors ${isActive
                    ? 'text-blue-600 font-semibold bg-blue-50'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className="flex items-center">
            <Link href="/admissions" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm">
              Apply Now
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === link.href
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;