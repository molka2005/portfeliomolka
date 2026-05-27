import React from 'react';

const Projects = ({ darkMode }) => {
  const theme = {
    textPrimary: darkMode ? 'text-white' : 'text-gray-900',
    textSecondary: darkMode ? 'text-gray-300' : 'text-gray-600',
    cardBg: darkMode ? 'bg-gray-800/80' : 'bg-white/80',
    cardBorder: darkMode ? 'border-gray-700' : 'border-gray-200',
  };

  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive personal portfolio built with React and Tailwind CSS. Features dynamic theming, smooth scrolling, and animated components.",
      tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      github: "https://github.com/molka2005",
      demo: "#",
      gradient: "from-orange-500 to-amber-500"
    },
    {
      title: "CI/CD DevOps Pipeline",
      description: "Automated deployment pipeline leveraging Docker, GitHub Actions, and Jenkins to streamline the build, test, and release process for web applications.",
      tags: ["Docker", "GitHub Actions", "Jenkins", "DevOps"],
      github: "https://github.com/molka2005",
      demo: "#",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Data Analysis Dashboard",
      description: "An interactive dashboard for visualizing complex datasets using Python, Pandas, and Streamlit, showcasing insights through various chart types.",
      tags: ["Python", "Pandas", "Streamlit", "Data Science"],
      github: "https://github.com/molka2005",
      demo: "#",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "E-Commerce API",
      description: "A robust backend RESTful API built with Node.js and Express, connected to a PostgreSQL database, featuring user authentication and product management.",
      tags: ["Node.js", "Express", "PostgreSQL", "Backend"],
      github: "https://github.com/molka2005",
      demo: "#",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-14">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight ${theme.textPrimary}`}>
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-orange-500 mx-auto rounded-full"></div>
          <p className={`mt-6 text-lg max-w-2xl mx-auto ${theme.textSecondary}`}>
            Here are some of the key projects I've worked on, demonstrating my skills across different domains of software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              className={`rounded-2xl p-6 sm:p-8 border ${theme.cardBorder} ${theme.cardBg} backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white shadow-lg`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${theme.textPrimary}`}>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${theme.textPrimary}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              <h3 className={`text-2xl font-bold mb-3 ${theme.textPrimary} group-hover:text-orange-500 transition-colors`}>
                {project.title}
              </h3>
              
              <p className={`mb-6 line-clamp-3 ${theme.textSecondary}`}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className={`text-xs font-semibold px-3 py-1 rounded-full border ${theme.cardBorder} ${darkMode ? 'bg-gray-700/50 text-orange-300' : 'bg-gray-100 text-orange-600'}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
