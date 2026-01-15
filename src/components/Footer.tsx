import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sankofa Data Institute</h3>
            <p className="text-gray-300">Empowering Africa through data science education and innovation.</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/programs" className="text-gray-300 hover:text-white">Programs</Link></li>
              <li><Link href="/admissions" className="text-gray-300 hover:text-white">Admissions</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><Link href="/programs" className="text-gray-300 hover:text-white">Data Science Bootcamp</Link></li>
              <li><Link href="/programs" className="text-gray-300 hover:text-white">Analytics Certification</Link></li>
              <li><Link href="/programs" className="text-gray-300 hover:text-white">Corporate Training</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Contact</h4>
            <p className="text-gray-300">Email: info@sankofadata.org</p>
            <p className="text-gray-300">Phone: +1 (123) 456-7890</p>
            <div className="mt-4">
              <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">&copy; 2026 Sankofa Data Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;