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

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Our faculty comprises distinguished experts from top-tier technology companies and renowned academic institutions.
              With a wealth of experience in data science, machine learning, and AI ethics, they bring a blend of rigorous theoretical knowledge and practical industry insights to the classroom.
              We are dedicated to providing world-class education that empowers students to solve real-world challenges.
            </p>
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