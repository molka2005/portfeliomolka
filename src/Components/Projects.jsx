import React, { useState } from 'react';
import portfelio from './portfelio.png';
import velvet from './velvet.png';
import climdata from './climdata.png';
import main1 from './main1.png';

const filters = ['All', 'Web', 'Mobile'];

const Projects = ({ darkMode }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animating, setAnimating] = useState(false);

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
      github: "https://github.com/molka2005/portfeliomolka",
      demo: "https://molka2005.github.io/portfeliomolka/",
      gradient: "from-orange-500 to-amber-500",
      image: portfelio,
      type: "Web"
    },
    {
      title: "DevOps E-commerce Platform",
      description: "A responsive e-commerce interface built with HTML5, CSS3, and vanilla JavaScript. Features smooth multi-page navigation, Docker-based containerization for consistent deployments, and automated service monitoring with self-recovery using Bash scripts.",
      tags: ["HTML5", "CSS3", "JavaScript", "Docker", "Bash"],
      github: "https://github.com/molka2005/velvet",
      demo: "https://molka2005.github.io/velvet/",
      gradient: "from-blue-500 to-cyan-500",
      image: velvet,
      type: "Web"
    },
    {
      title: "DataClima – Climate Data Analysis Web Platform",
      description: "A collaborative climate data analysis platform built with React (Vite) and Node.js/Express. Features CSV and Excel data import, interactive visualizations, dynamic maps, and PDF export, along with secure JWT-based authentication using MongoDB. Led Agile development as Scrum Master, ensuring effective sprint planning, task prioritization, and team collaboration.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Recharts", "Leaflet", "JWT", "Scrum"],
      github: "https://github.com/molka2005/ClimaData",
      demo: "https://clima-data.vercel.app/",
      gradient: "from-green-500 to-emerald-500",
      image: climdata,
      type: "Web"
    },
    {
      title: "HealthMate – Connected Mobile Health Application",
      description: "Developed an Android app for chronic disease management featuring nutritional tracking, online consultations, and a community chat space using Java, XML, and Android Studio. Integrated an intelligent health chatbot for personalized guidance. Collaborated via Git/GitHub for branch management, code reviews, and documentation.",
      tags: ["Android", "Java", "XML", "Git/GitHub"],
      github: "https://github.com/molka2005/HealthMate",
      demo: "#",
      gradient: "from-purple-500 to-pink-500",
      image: main1,
      type: "Mobile"
    }
  ];

  const handleFilter = (filter) => {
    if (filter === activeFilter) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveFilter(filter);
      setAnimating(false);
    }, 220);
  };

  const visible = projects.filter(p => activeFilter === 'All' || p.type === activeFilter);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(18px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)   scale(1);    }
        }
        .proj-card-enter {
          animation: fadeSlideIn 0.35s cubic-bezier(0.22,1,0.36,1) both;
        }
        .proj-cards-exit { opacity: 0; transform: scale(0.97); transition: opacity 0.2s, transform 0.2s; }

        .filter-btn {
          position: relative;
          padding: 7px 22px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.04em;
          cursor: pointer;
          border: 1.5px solid transparent;
          transition: color 0.22s, background 0.22s, border-color 0.22s, box-shadow 0.22s, transform 0.15s;
          outline: none;
          background: transparent;
        }
        .filter-btn:hover { transform: translateY(-1px); }
        .filter-btn:active { transform: scale(0.96); }
        .filter-btn.active {
          background: linear-gradient(135deg, #f97316, #f59e0b);
          color: #fff;
          border-color: transparent;
          box-shadow: 0 4px 18px rgba(249,115,22,0.35);
        }
        .filter-btn.inactive-dark {
          color: #d1d5db;
          border-color: rgba(249,115,22,0.25);
        }
        .filter-btn.inactive-dark:hover {
          border-color: rgba(249,115,22,0.6);
          color: #fb923c;
          background: rgba(249,115,22,0.08);
        }
        .filter-btn.inactive-light {
          color: #6b7280;
          border-color: rgba(249,115,22,0.3);
        }
        .filter-btn.inactive-light:hover {
          border-color: rgba(249,115,22,0.7);
          color: #ea580c;
          background: rgba(249,115,22,0.06);
        }
        .filter-pill-indicator {
          position: absolute;
          inset: 0;
          border-radius: 999px;
          background: linear-gradient(135deg, #f97316, #f59e0b);
          z-index: -1;
          transition: opacity 0.22s;
        }
      `}</style>

      {/* Decorative blurs */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-14">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight ${theme.textPrimary}`}>
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-orange-500 mx-auto rounded-full"></div>
          <p className={`mt-6 text-lg max-w-2xl mx-auto ${theme.textSecondary}`}>
            Here are some of the key projects I've worked on, demonstrating my skills across different domains of software engineering.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-10" data-aos="fade-up" data-aos-delay="80">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => handleFilter(f)}
              className={`filter-btn ${
                activeFilter === f
                  ? 'active'
                  : darkMode ? 'inactive-dark' : 'inactive-light'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto transition-all duration-200 ${animating ? 'proj-cards-exit' : ''}`}
        >
          {visible.map((project, index) => (
            <div
              key={project.title}
              className={`proj-card-enter relative overflow-hidden rounded-2xl p-5 sm:p-6 border ${theme.cardBorder} shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group z-10 flex flex-col justify-between min-h-[280px]`}
              style={{ animationDelay: `${index * 70}ms` }}
            >
              {/* Background Layer */}
              <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className={`absolute inset-0 ${darkMode ? 'bg-gray-950' : 'bg-slate-100'}`}></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 opacity-65 group-hover:opacity-85 filter group-hover:brightness-105"
                />
                <div className={`absolute inset-0 transition-opacity duration-300 ${
                  darkMode
                    ? 'bg-gradient-to-t from-gray-950 via-gray-950/70 to-transparent'
                    : 'bg-gradient-to-t from-white via-white/80 to-transparent'
                }`}></div>
              </div>

              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white shadow-lg`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div className="flex gap-3 z-20">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={`p-2 rounded-full hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors ${theme.textPrimary}`}>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className={`p-2 rounded-full hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors ${theme.textPrimary}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>

                <h3 className={`text-lg font-bold mb-1.5 ${theme.textPrimary} group-hover:text-orange-500 transition-colors`}>
                  {project.title}
                </h3>

                <p className={`mb-3 line-clamp-2 text-xs leading-relaxed ${theme.textSecondary}`}>
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`text-xs font-semibold px-3 py-1 rounded-full border ${theme.cardBorder} ${darkMode ? 'bg-gray-800/40 text-orange-300' : 'bg-gray-50/50 text-orange-600'}`}
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
