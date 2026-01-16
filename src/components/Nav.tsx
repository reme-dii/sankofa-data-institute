import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Sankofa Data Institute
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-sm text-gray-700 hover:text-gray-900">Home</Link>
            <Link href="/about" className="text-sm text-gray-700 hover:text-gray-900">About Us</Link>
            <Link href="/programs" className="text-sm text-gray-700 hover:text-gray-900">Programs</Link>
            <Link href="/admissions" className="text-sm text-gray-700 hover:text-gray-900">Admissions</Link>
            <Link href="/faculty" className="text-sm text-gray-700 hover:text-gray-900">Faculty & Mentors</Link>
            <Link href="/community" className="text-sm text-gray-700 hover:text-gray-900">Community & Impact</Link>
            <Link href="/blog" className="text-sm text-gray-700 hover:text-gray-900">Blog / Insights</Link>
            <Link href="/#contact" className="text-sm text-gray-700 hover:text-gray-900">Contact Us</Link>
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