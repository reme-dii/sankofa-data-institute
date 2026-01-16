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
                  <li><strong>Cost:</strong> ₵2,500 (scholarships available)</li>
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
                  <li><strong>Cost:</strong> ₵1,800</li>
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

        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-center">Survey Organisation & Management</h2>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Professional Field Survey Solutions</h3>
              <p className="text-lg text-gray-700 mb-6">
                From study design to cleaned final dataset — we handle every stage of your survey project.
              </p>
              <a href="https://forms.gle/ZRn1Qi9LD8HvJ3cU8" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 inline-block">
                Get a Free Quote
              </a>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Quick Overview</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <li>• Questionnaire design & digital tool programming</li>
                <li>• Field team recruitment, training & supervision</li>
                <li>• Real-time field data collection management</li>
                <li>• Rigorous data cleaning & quality control</li>
                <li>• Advanced data analysis & insightful reporting</li>
                <li>• Academic, NGO, market research, development projects</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">What We Offer</h3>
              <h4 className="text-lg font-medium mb-4">Survey Lifecycle – End-to-End Services</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h5 className="font-semibold mb-2">Research Design & Planning</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Study design consultation (quantitative / mixed-methods)</li>
                    <li>• Sampling strategy & sample size calculation</li>
                    <li>• Questionnaire development (paper + digital)</li>
                    <li>• Instrument pre-testing & validation</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Digital Data Collection Setup</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Programming on KoboToolbox, ODK Central, SurveyCTO, CommCare</li>
                    <li>• Google/Microsoft Forms when appropriate</li>
                    <li>• Multi-language support & logic implementation</li>
                    <li>• Field testing & debugging</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h5 className="font-semibold mb-2">Fieldwork Organisation & Management</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Recruitment & training of enumerators/supervisors</li>
                    <li>• Field logistics planning & daily monitoring</li>
                    <li>• Real-time data quality checks</li>
                    <li>• Field team performance tracking & back-checks</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Data Cleaning & Quality Assurance</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Comprehensive data auditing & cleaning protocol</li>
                    <li>• Consistency checks, outlier detection</li>
                    <li>• Variable labeling, value labeling & codebook creation</li>
                    <li>• Final cleaned dataset ready for analysis</li>
                  </ul>
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-2">Data Analysis & Reporting</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Descriptive & inferential statistical analysis</li>
                  <li>• Advanced techniques (regression, factor analysis, etc.)</li>
                  <li>• Clear, publication-ready tables & visualizations</li>
                  <li>• Academic-style write-up / policy brief / dashboard</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Project Types We Work With</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="text-gray-700 space-y-1">
                  <li>• Academic Research (Theses, Dissertations, Journal Papers)</li>
                  <li>• Program Evaluations & Impact Studies</li>
                  <li>• Baseline / Endline Surveys</li>
                </ul>
                <ul className="text-gray-700 space-y-1">
                  <li>• Market & Consumer Research</li>
                  <li>• Monitoring & Evaluation (M&E) Systems</li>
                  <li>• NGO / Development Partner Field Studies</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Why Work With Us?</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• 100% focus on data quality & scientific rigor</li>
                <li>• Transparent fieldwork progress reporting</li>
                <li>• Experience with both small-scale & large-scale surveys (50 – 10,000+ respondents)</li>
                <li>• Strict confidentiality & ethical data handling</li>
                <li>• Fast turnaround without compromising quality</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Survey Project?</h3>
              <p className="text-lg text-gray-700 mb-6">
                Whether you already have a clear plan or need help from scratch…<br />
                We're here to make your data collection smooth, reliable and stress-free.
              </p>
              <div className="space-x-4">
                <a href="https://forms.gle/ZRn1Qi9LD8HvJ3cU8" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 inline-block font-semibold">
                  REQUEST A QUOTE / DISCUSS YOUR PROJECT
                </a>
                <button className="bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-700">
                  See Recent Survey Projects
                </button>
              </div>
            </div>
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