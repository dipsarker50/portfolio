export default function Awards() {
  const awards = [
    {
      title: "Best Paper Award",
      organization: "7th ABC Challenge International Conference (2025)",
      description: "Recognition for outstanding research contribution in 'Facial Behavior-Based Depression Detection with Bi-LSTM and Evaluation via Universal and Hybrid Methods'",
      year: "2025",
      type: "Research Excellence",
      link: "https://tinyurl.com/abc-bestpaper"
    }
  ];

  const certifications = [
    {
      title: "IEEE Conference on Computing Applications and Systems (COMPAS 2024)",
      organization: "IEEE Computer Society Bangladesh Chapter",
      year: "2024",
      type: "Conference Participation",
      link: "https://tinyurl.com/compas-certificate"
    },
    {
      title: "Machine Learning with Python Developer Certification",
      organization: "freeCodeCamp.org",
      year: "2024",
      type: "Technical Certification",
      link: "https://tinyurl.com/freecodecamp-certificate"
    },
    {
      title: "IT Essentials: PC Hardware and Software Certification",
      organization: "Cisco Networking Academy",
      year: "2023",
      type: "Technical Certification",
      link: "https://tinyurl.com/cisco-certificate"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Research Excellence":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Conference Participation":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Technical Certification":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Research Excellence":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      case "Conference Participation":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case "Technical Certification":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="awards" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Honors & Awards
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Recognition for academic excellence, research contributions, and professional development 
            in computer science and artificial intelligence.
          </p>
        </div>

        {/* Awards Section */}
        {awards.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Research Awards
            </h3>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <div key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-lg border-2 border-yellow-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <div className="mb-4">
                        <div>
                          <h4 className="text-2xl font-bold text-gray-900 mb-2">
                            {award.link ? (
                              <a 
                                href={award.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-600 transition-colors"
                              >
                                {award.title}
                                <svg className="inline w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </a>
                            ) : (
                              award.title
                            )}
                          </h4>
                          <p className="text-lg font-semibold text-yellow-700 mb-2">
                            {award.organization}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {award.description}
                      </p>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <span className="text-lg font-bold text-gray-900">{award.year}</span>
                      <div className={`flex items-center px-3 py-1 rounded-full border ${getTypeColor(award.type)}`}>
                        {getTypeIcon(award.type)}
                        <span className="ml-2 text-sm font-medium">{award.type}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full border ${getTypeColor(cert.type)} mb-4`}>
                    {getTypeIcon(cert.type)}
                    <span className="ml-2 text-xs font-medium">{cert.type}</span>
                  </div>
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-3 text-center leading-tight">
                  {cert.link ? (
                    <a 
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 transition-colors"
                    >
                      {cert.title}
                      <svg className="inline w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    cert.title
                  )}
                </h4>
                
                <p className="text-blue-600 font-semibold text-center mb-2">
                  {cert.organization}
                </p>
                <p className="text-gray-500 text-center text-sm">
                  {cert.year}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Summary */}
      </div>
    </section>
  );
}