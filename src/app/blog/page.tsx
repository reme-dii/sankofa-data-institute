export default function Blog() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Blog / Insights</h1>

        <section className="mb-16">
          <p className="text-lg text-gray-700 text-center mb-12">
            Stay updated with the latest trends, insights, and stories from the world of data science
            and analytics, with a focus on African innovation and global impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">January 15, 2026</div>
                <h2 className="text-xl font-semibold mb-3">The Rise of AI in African Healthcare</h2>
                <p className="text-gray-700 mb-4">
                  How machine learning is revolutionizing healthcare delivery across the continent,
                  from disease prediction to telemedicine solutions.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Read More →</a>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-green-400 to-blue-500"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">January 10, 2026</div>
                <h2 className="text-xl font-semibold mb-3">Data Science Skills Gap in Africa</h2>
                <p className="text-gray-700 mb-4">
                  An analysis of the current data science talent landscape and strategies
                  for building a robust workforce.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Read More →</a>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-500"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">January 5, 2026</div>
                <h2 className="text-xl font-semibold mb-3">Sustainable Agriculture Through Data</h2>
                <p className="text-gray-700 mb-4">
                  How data analytics is helping African farmers optimize yields,
                  reduce waste, and adapt to climate change.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Read More →</a>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">December 28, 2025</div>
                <h2 className="text-xl font-semibold mb-3">Women Leading Data Innovation</h2>
                <p className="text-gray-700 mb-4">
                  Spotlight on African women data scientists breaking barriers and
                  driving innovation in their communities.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Read More →</a>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-red-400 to-pink-500"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">December 20, 2025</div>
                <h2 className="text-xl font-semibold mb-3">FinTech Revolution in Africa</h2>
                <p className="text-gray-700 mb-4">
                  How data science is powering the next generation of financial services,
                  from mobile banking to credit scoring.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Read More →</a>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-indigo-400 to-purple-500"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">December 15, 2025</div>
                <h2 className="text-xl font-semibold mb-3">Building Ethical AI Systems</h2>
                <p className="text-gray-700 mb-4">
                  Best practices for developing responsible AI solutions that serve
                  African communities and respect cultural contexts.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Read More →</a>
              </div>
            </article>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Categories</h2>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-gray-700">Machine Learning</a>
            <a href="#" className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-gray-700">Data Visualization</a>
            <a href="#" className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-gray-700">Career Development</a>
            <a href="#" className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-gray-700">Industry Insights</a>
            <a href="#" className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-gray-700">Ethics & Policy</a>
            <a href="#" className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-gray-700">African Innovation</a>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Subscribe to Our Newsletter</h2>
          <p className="text-lg text-gray-700 mb-8">
            Get the latest insights and updates delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-r-md hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}