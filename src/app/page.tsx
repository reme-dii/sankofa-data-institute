import Link from 'next/link';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import HeroBackground from '../components/HeroBackground';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20 min-h-[600px] flex items-center overflow-hidden">
        <HeroBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering Africa Through Data Science
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Sankofa Data Institute provides world-class training in data science and analytics,
            bridging the gap between African talent and global opportunities.
          </p>
          <div className="space-x-4">
            <Link href="/admissions" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-md font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg">
              Apply Now
            </Link>
            <Link href="/programs" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-md font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg">
              Explore Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-6 rounded-lg shadow-md text-white">
              <h3 className="text-xl font-semibold mb-4">Data Science Bootcamp</h3>
              <p className="text-white/90 mb-4">Intensive 12-week program covering Python, machine learning, and data visualization.</p>
              <Link href="/programs" className="text-white font-medium hover:underline">Learn More →</Link>
            </div>
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-6 rounded-lg shadow-md text-white">
              <h3 className="text-xl font-semibold mb-4">Analytics Certification</h3>
              <p className="text-white/90 mb-4">Professional certification in business analytics and data-driven decision making.</p>
              <Link href="/programs" className="text-white font-medium hover:underline">Learn More →</Link>
            </div>
            <div className="bg-gradient-to-br from-orange-400 to-red-500 p-6 rounded-lg shadow-md text-white">
              <h3 className="text-xl font-semibold mb-4">Corporate Training</h3>
              <p className="text-white/90 mb-4">Customized training solutions for organizations across Africa.</p>
              <Link href="/programs" className="text-white font-medium hover:underline">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-600">Students Trained</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">5</div>
              <p className="text-gray-600">Partner Organizations</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <p className="text-gray-600">Employment Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">3+</div>
              <p className="text-gray-600">Countries Reached</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <p className="text-lg text-gray-700">
                Have questions about our programs? Interested in partnerships?
                Want to join our community? We'd love to hear from you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                  <FaEnvelope className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Email</h4>
                <p className="text-gray-700">wonderbediako@gmail.com</p>
                <p className="text-sm text-gray-500 mt-1">General inquiries</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                  <FaPhone className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Phone</h4>
                <p className="text-gray-700">+233 24 438 7424</p>
                <p className="text-gray-700">050 522 3732</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-600">
                  <FaMapMarkerAlt className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Address</h4>
                <p className="text-gray-700">
                  Sankofa Data Institute<br />
                  ROSA Street, GE<br />
                  Accra, Ghana
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-[#0077b5]">
                  <FaLinkedin className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-lg mb-2">LinkedIn</h4>
                <a
                  href="https://www.linkedin.com/company/sankofa-data-institute"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Sankofa Data Institute
                </a>
                <p className="text-sm text-gray-500 mt-1">Follow us</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
