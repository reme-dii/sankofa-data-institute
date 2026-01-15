export default function Admissions() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Admissions</h1>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-4">Submit Application</h3>
              <p className="text-gray-700">Complete our online application form with your background information and motivation statement.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-4">Review & Interview</h3>
              <p className="text-gray-700">Our admissions team reviews applications and conducts interviews to assess fit and potential.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-4">Receive Decision</h3>
              <p className="text-gray-700">Successful applicants receive offers within 2-4 weeks of completing the interview process.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Eligibility Requirements</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Data Science Bootcamp</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Age 18 or older</li>
              <li>High school diploma or equivalent</li>
              <li>Basic computer literacy</li>
              <li>Strong motivation to learn data science</li>
              <li>Commitment to 20+ hours per week</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-6">Analytics Certification</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Age 21 or older</li>
              <li>Bachelor's degree or 2+ years work experience</li>
              <li>Basic understanding of statistics</li>
              <li>Current employment or professional experience</li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Scholarships & Financial Aid</h2>
          <p className="text-lg text-gray-700 mb-6">
            We are committed to making our programs accessible. We offer scholarships and payment plans
            to ensure talented individuals from all backgrounds can participate.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Merit-Based Scholarships</h3>
              <p className="text-gray-700 mb-4">Full and partial scholarships awarded based on academic excellence and potential impact.</p>
              <p className="text-sm text-gray-500">Up to 50% of tuition covered</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Need-Based Aid</h3>
              <p className="text-gray-700 mb-4">Financial assistance for applicants demonstrating financial need.</p>
              <p className="text-sm text-gray-500">Flexible payment plans available</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Ready to Apply?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Join our community of data science professionals shaping Africa's future.
          </p>
          <a href="#" className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700">
            Start Application
          </a>
        </section>
      </div>
    </div>
  );
}