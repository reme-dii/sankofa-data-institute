import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
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
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-700">wonderbediako@gmail.com</p>
                  <p className="text-sm text-gray-500">General inquiries and partnerships</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mt-1 mr-4 shrink-0">
                  <FaPhone className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-gray-700">+233 24 438 7424 / 050 522 3732</p>
                  <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM GMT</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mt-1 mr-4 shrink-0">
                  <FaMapMarkerAlt className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Address</h3>
                  <p className="text-gray-700">
                    Sankofa Data Institute<br />
                    ROSA Street, GE<br />
                    Accra, Ghana
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/sankofa-data-institute" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#0077b5] text-white rounded-full flex items-center justify-center hover:bg-[#006097] transition-colors">
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <p className="text-gray-700 mb-6">
              Prefer to use our online form?{' '}
              <a
                href="https://docs.google.com/forms/d/YOUR_FORM_ID/viewform"
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
    </div>
  );
}