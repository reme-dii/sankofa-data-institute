import Link from 'next/link';

export default function Programs() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Programs</h1>

        <section className="mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-3xl font-semibold mb-6">Data Science Bootcamp</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our flagship 12-week intensive program designed for beginners and intermediate learners.
              Master Python, statistics, machine learning, and data visualization.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Python programming fundamentals</li>
                  <li>Data manipulation with Pandas</li>
                  <li>Machine learning algorithms</li>
                  <li>Data visualization with Matplotlib and Seaborn</li>
                  <li>SQL for data querying</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Program Details</h3>
                <ul className="text-gray-700 space-y-2">
                  <li><strong>Duration:</strong> 12 weeks</li>
                  <li><strong>Format:</strong> Online with live sessions</li>
                  <li><strong>Prerequisites:</strong> Basic math and computer skills</li>
                  <li><strong>Cost:</strong> $2,500 (scholarships available)</li>
                </ul>
              </div>
            </div>
            <Link href="/admissions" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
              Apply Now
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-3xl font-semibold mb-6">Analytics Certification Program</h2>
            <p className="text-lg text-gray-700 mb-6">
              Professional certification for working professionals seeking to enhance their analytics skills.
              Focus on business intelligence, data-driven decision making, and advanced analytics techniques.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Topics</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Business intelligence tools (Tableau, Power BI)</li>
                  <li>Statistical analysis and hypothesis testing</li>
                  <li>Predictive modeling</li>
                  <li>Data storytelling and communication</li>
                  <li>Ethics in data analytics</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Program Details</h3>
                <ul className="text-gray-700 space-y-2">
                  <li><strong>Duration:</strong> 8 weeks</li>
                  <li><strong>Format:</strong> Part-time, evenings/weekends</li>
                  <li><strong>Prerequisites:</strong> 2+ years work experience</li>
                  <li><strong>Cost:</strong> $1,800</li>
                </ul>
              </div>
            </div>
            <Link href="/admissions" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
              Apply Now
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-6">Corporate Training Solutions</h2>
            <p className="text-lg text-gray-700 mb-6">
              Customized training programs designed specifically for organizations. We work with
              companies across Africa to build data capabilities and drive digital transformation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Services Include</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Custom curriculum development</li>
                  <li>On-site and virtual training</li>
                  <li>Data strategy consulting</li>
                  <li>Team skill assessments</li>
                  <li>Post-training support</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Industries Served</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Financial services</li>
                  <li>Healthcare</li>
                  <li>Agriculture and agribusiness</li>
                  <li>Telecommunications</li>
                  <li>Government and NGOs</li>
                </ul>
              </div>
            </div>
            <Link href="/contact" className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700">
              Partner With Us
            </Link>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Join thousands of professionals who have advanced their careers through our programs.
          </p>
          <Link href="/admissions" className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700">
            Start Your Application
          </Link>
        </section>
      </div>
    </div>
  );
}