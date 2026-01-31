export default function Projects() {
  const projects = [
    {
      title: "Digital Hospital Appointment System with Doctor Schedule Management",
      description: "Designed a hospital appointment system enabling patients to book, update, and cancel appointments while allowing doctors to manage their schedules.",
      technologies: ["C#", ".NET", "Windows Forms", "SQL Server"],
      githubUrl: "https://github.com/dipsarker50/C_Sharp",
      category: "Healthcare Management"
    },
    {
      title: "Real-Time Ambulance Booking and Tracking System",
      description: "Developed a health-sector app enabling real-time ambulance booking, live location tracking, and optimized emergency response following an Uber-like model.",
      technologies: ["Java", "Firebase", "Android", "Google Maps API"],
      githubUrl: "https://github.com/dipsarker50/Medilance-Driver-App",
      category: "Mobile Health"
    },
    {
      title: "IoT-Based Smart Dustbin System with Priority Collection and Solar Power",
      description: "Implemented a solar-powered IoT smart dustbin using sensors and priority algorithms to monitor fill levels, detect hazardous gases, and optimize waste collection.",
      technologies: ["IoT", "Arduino", "C++", "Solar Energy", "Sensors"],
      githubUrl: "https://github.com/dipsarker50/IOT_BASED_GREEN_Energy",
      category: "IoT & Sustainability"
    },
    {
      title: "Movie Ticket Booking and Management System",
      description: "Developed a Java-based movie ticket booking platform that enables users to browse schedules, select seats, purchase tickets, and manage bookings.",
      technologies: ["Java", "Swing", "MySQL", "GUI"],
      githubUrl: "https://github.com/dipsarker50/Java",
      category: "Entertainment"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Healthcare Management":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        );
      case "Mobile Health":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
      case "IoT & Sustainability":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case "Entertainment":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h3a1 1 0 011 1v2a1 1 0 01-1 1h-1v10a2 2 0 01-2 2H7a2 2 0 01-2-2V8H4a1 1 0 01-1-1V5a1 1 0 011-1h3z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Healthcare Management":
        return "bg-red-100 text-red-700 border-red-200";
      case "Mobile Health":
        return "bg-green-100 text-green-700 border-green-200";
      case "IoT & Sustainability":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Entertainment":
        return "bg-purple-100 text-purple-700 border-purple-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A collection of innovative software projects spanning healthcare, IoT, mobile applications, 
            and entertainment systems, showcasing practical solutions to real-world problems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              {/* Project Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className={`flex items-center px-3 py-1 rounded-full border ${getCategoryColor(project.category)}`}>
                    {getCategoryIcon(project.category)}
                    <span className="ml-2 text-sm font-medium">{project.category}</span>
                  </div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                    </svg>
                  </a>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              {/* Technologies */}
              <div className="p-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-700 rounded-full border border-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Project Actions */}
              <div className="px-6 pb-6">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center w-full justify-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
        

      </div>
    </section>
  );
}