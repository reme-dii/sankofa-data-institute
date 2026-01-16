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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <p className="text-lg text-gray-700 mb-8">
                Have questions about our programs? Interested in partnerships?
                Want to join our community? We'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mt-1 mr-4 shrink-0">
                    <FaEnvelope className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-gray-700">wonderbediako@gmail.com</p>
                    <p className="text-sm text-gray-500">General inquiries and partnerships</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mt-1 mr-4 shrink-0">
                    <FaPhone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <p className="text-gray-700">+233 24 438 7424 / 050 522 3732</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM GMT</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mt-1 mr-4 shrink-0">
                    <FaMapMarkerAlt className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Address</h4>
                    <p className="text-gray-700">
                      Sankofa Data Institute<br />
                      ROSA Street, GE<br />
                      Accra, Ghana
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mt-1 mr-4 shrink-0">
                    <FaLinkedin className="w-5 h-5 text-[#0077b5]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/company/sankofa-data-institute"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Sankofa Data Institute
                    </a>
                    <p className="text-sm text-gray-500">Follow us for updates</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
              <p className="text-gray-700 mb-6">
                Prefer to use our online form?{' '}
                <a
                  href="https://forms.gle/ZRn1Qi9LD8HvJ3cU8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Click here to fill out our Google contact form
                </a>
                .
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="admissions">Admissions Inquiry</option>
                    <option value="partnerships">Partnership Opportunities</option>
                    <option value="corporate">Corporate Training</option>
                    <option value="media">Media Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us how we can help you..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
