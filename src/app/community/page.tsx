export default function Community() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Community & Impact</h1>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Our Community</h2>
          <p className="text-lg text-gray-700 mb-8">
            Sankofa Data Institute is more than an educational institution – we're building a vibrant
            community of data science professionals, innovators, and changemakers across Africa and beyond.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2,500+</div>
              <h3 className="text-xl font-semibold mb-4">Alumni Network</h3>
              <p className="text-gray-700">
                Graduates working at leading companies and organizations worldwide,
                driving data-driven innovation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">150+</div>
              <h3 className="text-xl font-semibold mb-4">Active Members</h3>
              <p className="text-gray-700">
                Current students and recent graduates participating in community events
                and collaborative projects.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">25+</div>
              <h3 className="text-xl font-semibold mb-4">Chapters</h3>
              <p className="text-gray-700">
                Local chapters across major African cities hosting meetups,
                workshops, and networking events.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Community Programs</h2>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Sankofa Data Science Meetups</h3>
              <p className="text-gray-700 mb-4">
                Monthly meetups in cities across Africa featuring guest speakers, technical talks,
                and networking opportunities. Past speakers include data scientists from Google,
                Microsoft, and local tech companies.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Networking</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Technical Talks</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Free</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Hackathons & Data Challenges</h3>
              <p className="text-gray-700 mb-4">
                Quarterly hackathons focusing on real-world problems in healthcare, agriculture,
                finance, and governance. Winners receive mentorship, funding opportunities,
                and potential job offers.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Competition</span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Prizes</span>
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Impact</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Mentorship Program</h3>
              <p className="text-gray-700 mb-4">
                Connect with experienced data professionals for career guidance, project feedback,
                and industry insights. Our mentorship program pairs mentees with mentors based
                on career goals and interests.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Career Development</span>
                <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">1-on-1</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Free</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Social Impact Initiatives</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Data for Development</h3>
              <p className="text-gray-700 mb-4">
                Partnering with NGOs and government agencies to provide data science solutions
                for pressing challenges in healthcare, education, and economic development.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• Malaria prediction models for health ministries</li>
                <li>• Agricultural yield optimization for farmers</li>
                <li>• Education analytics for policy makers</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Women in Data Science</h3>
              <p className="text-gray-700 mb-4">
                Dedicated programs to increase female participation in data science,
                including scholarships, mentorship, and networking opportunities.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• 40% female enrollment in our programs</li>
                <li>• Annual women-only hackathons</li>
                <li>• Leadership development workshops</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Join Our Community</h2>
          <p className="text-lg text-gray-700 mb-8">
            Connect with fellow data enthusiasts, share knowledge, and contribute to Africa's data revolution.
          </p>
          <div className="space-x-4">
            <a href="#" className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700">
              Join Meetup Group
            </a>
            <a href="#" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50">
              View Events
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}