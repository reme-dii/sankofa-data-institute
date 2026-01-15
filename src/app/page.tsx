import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering Africa Through Data Science
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Sankofa Data Institute provides world-class training in data science and analytics,
            bridging the gap between African talent and global opportunities.
          </p>
          <div className="space-x-4">
            <Link href="/admissions" className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100">
              Apply Now
            </Link>
            <Link href="/programs" className="border border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600">
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
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Data Science Bootcamp</h3>
              <p className="text-gray-600 mb-4">Intensive 12-week program covering Python, machine learning, and data visualization.</p>
              <Link href="/programs" className="text-blue-600 hover:text-blue-800">Learn More →</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Analytics Certification</h3>
              <p className="text-gray-600 mb-4">Professional certification in business analytics and data-driven decision making.</p>
              <Link href="/programs" className="text-blue-600 hover:text-blue-800">Learn More →</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Corporate Training</h3>
              <p className="text-gray-600 mb-4">Customized training solutions for organizations across Africa.</p>
              <Link href="/programs" className="text-blue-600 hover:text-blue-800">Learn More →</Link>
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
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-600">Partner Organizations</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <p className="text-gray-600">Employment Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <p className="text-gray-600">Countries Reached</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Data Science Journey?</h2>
          <p className="text-xl mb-8">Join our community of innovators shaping Africa's data future.</p>
          <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100">
            Partner With Us
          </Link>
        </div>
      </section>
    </div>
  );
}
