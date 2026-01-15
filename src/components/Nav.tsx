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
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">About Us</Link>
            <Link href="/programs" className="text-gray-700 hover:text-gray-900">Programs</Link>
            <Link href="/admissions" className="text-gray-700 hover:text-gray-900">Admissions</Link>
            <Link href="/faculty" className="text-gray-700 hover:text-gray-900">Faculty & Mentors</Link>
            <Link href="/community" className="text-gray-700 hover:text-gray-900">Community & Impact</Link>
            <Link href="/blog" className="text-gray-700 hover:text-gray-900">Blog / Insights</Link>
            <a href="https://docs.google.com/forms/d/YOUR_FORM_ID/viewform" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">Contact Us</a>
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