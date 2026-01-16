"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Nav = () => {
  const pathname = usePathname();

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Faculty & Mentors', href: '/faculty' },
    { name: 'Community & Impact', href: '/community' },
    { name: 'Blog / Insights', href: '/blog' },
    { name: 'Contact Us', href: '/#contact' },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
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
          <div className="hidden md:flex items-center space-x-4">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm px-3 py-2 rounded-md transition-colors ${isActive
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
            <Link href="/admissions" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;