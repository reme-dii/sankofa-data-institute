export default function Faculty() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Faculty & Mentors</h1>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Our Expert Instructors</h2>
          <p className="text-lg text-gray-700 mb-8">
            Learn from industry leaders and academic experts with decades of experience in data science,
            machine learning, and analytics. Our faculty brings real-world expertise to the classroom.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-center mb-2">Dr. Sarah Johnson</h3>
              <p className="text-gray-600 text-center mb-4">Lead Instructor - Machine Learning</p>
              <p className="text-sm text-gray-700 mb-4">
                Former Principal Data Scientist at Netflix. PhD in Computer Science from MIT.
                Expert in deep learning and recommendation systems.
              </p>
              <div className="text-center">
                <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Python</span>
                <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs ml-2">TensorFlow</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-center mb-2">Prof. Michael Chen</h3>
              <p className="text-gray-600 text-center mb-4">Statistics & Data Analysis</p>
              <p className="text-sm text-gray-700 mb-4">
                Professor at Stanford University. Author of "Modern Statistical Methods for Data Science".
                Specializes in Bayesian statistics and experimental design.
              </p>
              <div className="text-center">
                <span className="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">R</span>
                <span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs ml-2">Statistics</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-center mb-2">Ms. Amina Hassan</h3>
              <p className="text-gray-600 text-center mb-4">Data Visualization & Business Intelligence</p>
              <p className="text-sm text-gray-700 mb-4">
                Data Visualization Lead at Google. Masters in Information Design from RISD.
                Expert in Tableau, Power BI, and D3.js.
              </p>
              <div className="text-center">
                <span className="inline-block bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">Tableau</span>
                <span className="inline-block bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs ml-2">D3.js</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-center mb-2">Dr. James Wilson</h3>
              <p className="text-gray-600 text-center mb-4">Big Data & Cloud Computing</p>
              <p className="text-sm text-gray-700 mb-4">
                Former AWS Solutions Architect. PhD in Distributed Systems.
                Expert in Hadoop, Spark, and cloud architectures.
              </p>
              <div className="text-center">
                <span className="inline-block bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">AWS</span>
                <span className="inline-block bg-teal-100 text-teal-800 px-2 py-1 rounded-full text-xs ml-2">Spark</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-center mb-2">Prof. Fatima Al-Zahra</h3>
              <p className="text-gray-600 text-center mb-4">Ethics in Data Science</p>
              <p className="text-sm text-gray-700 mb-4">
                Professor of Ethics and Technology at Oxford. Author of "Ethical AI in Practice".
                Focuses on responsible AI and data privacy.
              </p>
              <div className="text-center">
                <span className="inline-block bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs">Ethics</span>
                <span className="inline-block bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs ml-2">Policy</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-center mb-2">Mr. David Thompson</h3>
              <p className="text-gray-600 text-center mb-4">Data Engineering</p>
              <p className="text-sm text-gray-700 mb-4">
                Senior Data Engineer at Airbnb. Expert in data pipelines, ETL processes,
                and database design. 10+ years in industry.
              </p>
              <div className="text-center">
                <span className="inline-block bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full text-xs">SQL</span>
                <span className="inline-block bg-lime-100 text-lime-800 px-2 py-1 rounded-full text-xs ml-2">Airflow</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Industry Mentors</h2>
          <p className="text-lg text-gray-700 mb-8">
            Our students receive guidance from experienced professionals working at leading
            tech companies, startups, and organizations across various industries.
          </p>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Mentorship Program</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold mb-4">1-on-1 Career Guidance</h4>
                <p className="text-gray-700">
                  Personalized mentorship sessions covering career planning, resume building,
                  interview preparation, and industry insights.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">Project Reviews</h4>
                <p className="text-gray-700">
                  Regular code reviews and project feedback from industry experts to ensure
                  portfolio-quality work and real-world best practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Join Our Teaching Team</h2>
          <p className="text-lg text-gray-700 mb-8">
            We're always looking for passionate educators and industry experts to join our faculty.
          </p>
          <a href="/contact" className="bg-green-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-700">
            Apply to Teach
          </a>
        </section>
      </div>
    </div>
  );
}