export default function Contact() {
  const contactInfo = {
    email: "dipsarker277@gmail.com",
    phone: "+8801714416504",
    location: "Netrokona, Bangladesh",
    github: "https://github.com/dipsarker50",
    linkedin: "https://www.linkedin.com/in/dipsarker05",
    researchgate: "https://www.researchgate.net/profile/Dip-Sarker-4"
  };

  

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm always open to discussing research opportunities, collaborations, 
            and innovative projects in AI, machine learning, and software development.
          </p>
        </div>



        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Let's Collaborate</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Whether you're interested in research collaboration, have a project idea, 
              or just want to discuss the latest developments in AI and machine learning, 
              I'd love to hear from you.
            </p>
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Me an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}