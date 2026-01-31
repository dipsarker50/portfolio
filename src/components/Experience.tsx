export default function Experience() {
  const experiences = [
    {
      title: "Product & Innovation Officer",
      company: "Virtually Staff",
      period: "Jul 2023 -- Present",
      location: "Dhaka, Bangladesh",
      responsibilities: [
        "Product Strategy",
        "R&D Leadership",
        "Cross-Department Integration",
        "Growth and IP Development"
      ],
      current: true
    },
    {
      title: "Research and Development Manager",
      company: "Crisis Entertainment (Remote)",
      period: "Dec 2020 -- Jul 2023",
      location: "Sydney, Australia",
      responsibilities: [
        "Product Vision & Roadmap",
        "R&D Coordination",
        "Go-to-Market Execution",
        "Raised $300K Investment"
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="hidden md:block absolute left-1/2 top-24 w-px h-32 bg-blue-200 transform -translate-x-px"></div>
              )}
              
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                index % 2 === 0 ? '' : 'md:grid-flow-col-dense'
              }`}>
                {/* Content */}
                <div className={`${index % 2 === 0 ? '' : 'md:col-start-2'} space-y-4`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold text-blue-600 mb-1">
                          {exp.company}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V7a2 2 0 012-2h4a2 2 0 012 2v0M8 7v13a2 2 0 002 2h4a2 2 0 002-2V7M8 7H6a2 2 0 00-2 2v11a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2" />
                            </svg>
                            {exp.period}
                          </span>
                          <span className="flex items-center mt-1 sm:mt-0">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      {exp.current && (
                        <div className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                          Current
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-gray-900">Key Responsibilities:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Timeline indicator */}
                <div className={`${index % 2 === 0 ? '' : 'md:col-start-1'} flex justify-center`}>
                  <div className="relative">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6M8 8v6a2 2 0 002 2h4a2 2 0 002-2V8M8 8V6a2 2 0 012-2h4a2 2 0 012 2v2" />
                      </svg>
                    </div>
                    <div className="absolute -inset-4 bg-blue-100 rounded-full -z-10 opacity-20"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}