export default function Education() {
  return (
    <section id="education" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Bachelor of Science in Computer Science & Engineering
                </h3>
                <p className="text-lg text-blue-700 font-semibold">
                  American International University-Bangladesh (AIUB)
                </p>
              </div>
              <div className="md:text-right mt-4 md:mt-0">
                <p className="text-sm text-gray-600 font-medium">2022 - 2026</p>
                <p className="text-sm text-gray-600">Dhaka, Bangladesh</p>
              </div>
            </div>
            
            <div className="border-t border-blue-200 pt-6">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 rounded-full p-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">
                    Current CGPA: <span className="text-green-600">3.91 / 4.0</span>
                  </p>
                  <p className="text-gray-600 text-sm">
                    Consistent academic excellence with focus on Machine Learning and Software Engineering
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-blue-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Areas of Study</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className="bg-white rounded-lg p-3 shadow-sm border border-blue-100">
                  <p className="text-sm font-medium text-gray-700">Data Structures & Algorithms</p>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm border border-blue-100">
                  <p className="text-sm font-medium text-gray-700">Machine Learning</p>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm border border-blue-100">
                  <p className="text-sm font-medium text-gray-700">Software Engineering</p>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm border border-blue-100">
                  <p className="text-sm font-medium text-gray-700">Database Systems</p>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm border border-blue-100">
                  <p className="text-sm font-medium text-gray-700">Computer Networks</p>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm border border-blue-100">
                  <p className="text-sm font-medium text-gray-700">AI & Deep Learning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}