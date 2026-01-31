export default function Publications() {
  const publications = [
    {
      title: "Facial Behavior-Based Depression Detection with Bi-LSTM and Evaluation via Universal and Hybrid Methods",
      journal: "7th International Conference on Activity and Behavior Computing (Accepted)",
      year: "2025",
      doi: "https://doi.org/10.1109/ABC64332.2025.11118568",
      status: "published",
      award: "Best Paper Award"
    },
    {
      title: "An Efficient Integrated Negative Fractional Counting Sort Algorithm",
      journal: "IEEE International Conference on Computing, Applications and Systems (COMPAS)",
      year: "2024",
      doi: "https://doi.org/10.1109/COMPAS60761.2024.10796657",
      status: "published"
    },
    {
      title: "Extracting Eye Models from MRI Scans Using U-Net-Based Deep Learning Framework",
      journal: "Journal of Computer and Communications",
      year: "2024",
      doi: "https://doi.org/10.4236/jcc.2024.1211007",
      status: "published"
    },
    {
      title: "Developing a Negative Fractional Counting Sort Algorithm for Fast Real Number Sorting",
      journal: "AJSE",
      year: "2024",
      status: "accepted"
    },
    {
      title: "A Sustainable IoT-Enabled Priority-Based Smart Dustbin System with Priority Algorithms Powered by Green Energy",
      journal: "Under Review",
      year: "2025",
      status: "submitted"
    },
    {
      title: "Forecasting Crime Trends in Bangladesh Through a Pre and Post 2024 Political Shift Analysis Using Machine Learning",
      journal: "Under Review",
      year: "2025",
      doi: "https://doi.org/10.1109/ABC64332.2025.11118568",
      status: "submitted"
    },
    {
      title: "Securing Patient Privacy and Data Protection by Federated Learning in AI-Driven Healthcare",
      journal: "Book Chapter",
      year: "2025",
      status: "ongoing"
    }
  ];

  const getStatusBadge = (status: string, award?: string) => {
    const baseClasses = "text-xs font-semibold px-2.5 py-0.5 rounded-full";
    
    if (award) {
      return (
        <div className="flex space-x-2">
          <span className={`${baseClasses} bg-yellow-100 text-yellow-800`}>
           {award}
          </span>
          <span className={`${baseClasses} bg-green-100 text-green-800`}>
            Published
          </span>
        </div>
      );
    }
    
    switch (status) {
      case "published":
        return <span className={`${baseClasses} bg-green-100 text-green-800`}>Published</span>;
      case "accepted":
        return <span className={`${baseClasses} bg-blue-100 text-blue-800`}>Accepted</span>;
      case "submitted":
        return <span className={`${baseClasses} bg-orange-100 text-orange-800`}>Under Review</span>;
      case "ongoing":
        return <span className={`${baseClasses} bg-purple-100 text-purple-800`}>Ongoing</span>;
      default:
        return null;
    }
  };

  return (
    <section id="publications" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Research Publications
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Advancing the frontiers of Machine Learning, Deep Learning, and AI-driven healthcare 
            through innovative research and practical applications.
          </p>
        </div>
        
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1 mb-4 lg:mb-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {pub.doi ? (
                      <a 
                        href={pub.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors"
                      >
                        {pub.title}
                        <svg className="inline w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      pub.title
                    )}
                  </h3>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600 mb-3">
                    <p className="font-medium text-blue-700">
                      {pub.journal}
                    </p>
                    <p className="text-sm">
                      {pub.year}
                    </p>
                  </div>
                </div>
                
                <div className="flex-shrink-0">
                  {getStatusBadge(pub.status, pub.award)}
                </div>
              </div>
              
              {pub.doi && (
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  <span className="font-mono text-xs break-all">DOI: {pub.doi.replace('https://doi.org/', '')}</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}