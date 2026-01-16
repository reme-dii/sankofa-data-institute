export default function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">About Sankofa Data Institute</h1>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            At Sankofa Data Institute, our mission is to democratize data science education across Africa,
            empowering the next generation of data scientists, analysts, and innovators to drive economic
            growth and social impact on the continent.
          </p>
          <p className="text-lg text-gray-700">
            We believe that data is the key to unlocking Africa's potential, and we're committed to
            providing accessible, high-quality training that bridges the skills gap in data science.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Our Vision</h2>
          <p className="text-lg text-gray-700 mb-6">
            To be the leading data science institute in Africa, recognized globally for excellence in
            education, research, and innovation in data science and analytics.
          </p>
          <p className="text-lg text-gray-700">
            We envision a future where African data scientists lead in solving global challenges,
            from healthcare and agriculture to finance and governance.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
          <p className="text-lg text-gray-700 mb-6">
            Founded in 2024, Sankofa Data Institute emerged from the recognition that while Africa
            generates vast amounts of data, there was a critical shortage of skilled professionals
            to analyze and leverage this data for development.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Named after the Akan word "Sankofa" meaning "go back and get it," our institute embodies
            the principle of learning from the past to build a better future. We draw inspiration
            from traditional African wisdom while embracing cutting-edge technology.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Dr. Amara Nwosu</h3>
              <p className="text-gray-600">Founder & CEO</p>
              <p className="text-sm text-gray-500 mt-2">Former Data Scientist at Google, PhD in Statistics</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Prof. Kofi Mensah</h3>
              <p className="text-gray-600">Academic Director</p>
              <p className="text-sm text-gray-500 mt-2">Professor of Data Science, University of Ghana</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Ms. Zainab Adebayo</h3>
              <p className="text-gray-600">Head of Partnerships</p>
              <p className="text-sm text-gray-500 mt-2">Former UN Data Analyst, MBA from Harvard</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}