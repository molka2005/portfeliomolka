import React from 'react';
import about from './about_nobg.png';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const About = ({ darkMode }) => {
  const theme = {
    textPrimary: darkMode ? 'text-white' : 'text-gray-900',
    textSecondary: darkMode ? 'text-gray-300' : 'text-gray-600',
    cardBg: darkMode ? 'bg-gray-800/60' : 'bg-white/70',
    cardBorder: darkMode ? 'border-gray-700' : 'border-gray-200',
  };

  return (
    <div className="w-full">
      <section
        id="about"
        className={`min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 relative ${
          darkMode ? 'bg-gray-900/0' : 'bg-gray-50/0'
        }`}
      >
        {/* Animated glowing orbs in the background */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mix-blend-screen filter blur-2xl opacity-40 animate-pulse -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse -z-10" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <figure
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-wrap justify-center gap-4 relative order-2 lg:order-1"
          >
            <div className="relative w-48 h-48 lg:w-80 lg:h-80">
              {/* Image background decoration */}
              <div
                className="absolute -inset-4 lg:-inset-12 bg-gradient-to-l from-[#f97316] via-[#fb923c] to-[#f59e0b] rotate-12 star-shape z-0 transition-transform duration-700 hover:rotate-45"
                data-aos="zoom-in"
                data-aos-delay="600"
              ></div>
              <img 
                src={about} 
                alt="About Image" 
                className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl" 
              />
            </div>
          </figure>
          
          <div className="relative order-1 lg:order-2 flex flex-col justify-center">
            <div className="text-left mb-5" data-aos="fade-up">
              <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 tracking-tight ${theme.textPrimary}`}>
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Me</span>
              </h2>
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-orange-500 rounded-full"></div>
                <div className="h-1 w-3 bg-amber-500 rounded-full"></div>
                <div className="h-1 w-1 bg-amber-400 rounded-full"></div>
              </div>
            </div>

            <div data-aos="fade-left">
              <h3 className={`text-2xl sm:text-3xl font-bold mb-5 ${theme.textPrimary}`}>
                I'm Molka Zghal
              </h3>
              <div className={`space-y-1.5 mb-4 leading-snug text-[13px] sm:text-sm ${theme.textSecondary}`}>
                <p>
                  Computer Science student specializing in Big Data, with a strong focus on Artificial Intelligence and data-driven systems.
                </p>
                <p>
                  Proficient in designing and developing scalable web and data solutions, leveraging technologies such as Python, React, and Node.js to deliver clean and efficient applications.
                </p>
                <p>
                  Demonstrates strong analytical thinking, adaptability, and a rigorous approach to problem-solving, with the ability to work effectively in both collaborative and independent environments.
                </p>
                <p>
                  Currently deepening expertise in DevOps practices, cloud infrastructure, and machine learning, with a clear objective of evolving into a Data & AI Engineer.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className={`p-3 rounded-xl border ${theme.cardBorder} ${theme.cardBg} backdrop-blur-sm group hover:border-orange-500/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300`}>
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className="relative flex items-center justify-center w-8 h-8 flex-shrink-0">
                      <div className="absolute inset-0 bg-orange-500 rounded-full blur animate-ping opacity-20"></div>
                      <div className="absolute inset-0 bg-orange-500/20 rounded-full animate-pulse"></div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="relative w-4 h-4 text-orange-500 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7" />
                      </svg>
                    </div>
                    <p className="text-orange-500 font-bold text-sm">Education</p>
                  </div>
                  <p className={`text-xs font-semibold ${theme.textPrimary}`}>Computer Science – Big Data</p>
                  <p className={`text-[11px] ${theme.textSecondary}`}>ISIM Sfax</p>
                </div>

                <div className={`p-3 rounded-xl border ${theme.cardBorder} ${theme.cardBg} backdrop-blur-sm group hover:border-orange-500/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300`}>
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className="relative flex items-center justify-center w-8 h-8 flex-shrink-0">
                      <div className="absolute inset-0 bg-amber-500 rounded-full blur animate-ping opacity-20" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute inset-0 bg-amber-500/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="relative w-4 h-4 text-orange-500 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-orange-500 font-bold text-sm">Interests</p>
                  </div>
                  <p className={`text-xs font-semibold ${theme.textPrimary}`}>AI, Data Science, Web Dev</p>
                  <p className={`text-[11px] ${theme.textSecondary}`}>Continuous Learning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-20 relative overflow-hidden">
        {/* Decorative blur */}
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-8 lg:px-14">
          {/* Section Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight ${theme.textPrimary}`}>
              Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Experience</span>
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="h-1 w-12 bg-orange-500 rounded-full"></div>
              <div className="h-1 w-3 bg-amber-500 rounded-full"></div>
              <div className="h-1 w-1 bg-amber-400 rounded-full"></div>
            </div>
          </div>

          <VerticalTimeline animate={true} lineColor={darkMode ? 'rgba(249,115,22,0.4)' : 'rgba(249,115,22,0.5)'}>

            {/* Experience 1 – Left */}
            <VerticalTimelineElement
              position="left"
              contentStyle={{
                background: darkMode ? 'rgba(17,24,39,0.85)' : 'rgba(255,255,255,0.85)',
                backdropFilter: 'blur(12px)',
                border: darkMode ? '1px solid rgba(249,115,22,0.2)' : '1px solid rgba(249,115,22,0.3)',
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(249,115,22,0.1)',
                color: darkMode ? '#fff' : '#111827',
              }}
              contentArrowStyle={{ borderRight: darkMode ? '7px solid rgba(249,115,22,0.3)' : '7px solid rgba(249,115,22,0.4)' }}
              date={
                <span className={`font-semibold text-sm ${darkMode ? 'text-orange-300' : 'text-orange-600'}`}>
                  Jun 2026 – Jul 2026 &nbsp;·&nbsp; 2 months
                </span>
              }
              iconStyle={{
                background: 'linear-gradient(135deg, #f97316, #f59e0b)',
                boxShadow: '0 0 0 4px rgba(249,115,22,0.3), 0 0 20px rgba(249,115,22,0.4)',
              }}
              icon={
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                  <svg viewBox="0 0 40 40" style={{ width: '55%', height: '55%' }} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="8" width="32" height="24" rx="4" fill="white" fillOpacity="0.25"/>
                    <rect x="4" y="8" width="32" height="24" rx="4" stroke="white" strokeWidth="2"/>
                    <path d="M12 28L20 12L28 28" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.5 23H25.5" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                </div>
              }
            >
              <div>
                <h3 className={`text-xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Full Stack & Data Engineer Intern
                </h3>
                <p className="text-orange-500 font-semibold text-sm mb-4">ADVINSING LTD &nbsp;·&nbsp; Social Media Analytics Platform</p>
                <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {[
                    'Designed and developed an intelligent web and mobile platform to centralize and analyze data from multiple social media networks.',
                    'Integrated secure APIs to collect user data, including posts, interactions, and engagement metrics, and structured it into a unified data system.',
                    'Implemented data processing and analysis pipelines using data science techniques to extract meaningful insights and user behavior patterns.',
                    'Applied machine learning models to detect trends, segment users, and predict engagement and content performance.',
                    'Built interactive dashboards with data visualizations to support decision-making and performance analysis.',
                    'Developed intelligent recommendation features to optimize content visibility and improve digital strategies.',
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {['React', 'Node.js', 'Python', 'Data Science', 'ML', 'APIs'].map((tag) => (
                    <span key={tag} className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20">{tag}</span>
                  ))}
                </div>
              </div>
            </VerticalTimelineElement>

            {/* Experience 2 – Right */}
            <VerticalTimelineElement
              position="right"
              contentStyle={{
                background: darkMode ? 'rgba(17,24,39,0.85)' : 'rgba(255,255,255,0.85)',
                backdropFilter: 'blur(12px)',
                border: darkMode ? '1px solid rgba(249,115,22,0.2)' : '1px solid rgba(249,115,22,0.3)',
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(249,115,22,0.1)',
                color: darkMode ? '#fff' : '#111827',
              }}
              contentArrowStyle={{ borderLeft: darkMode ? '7px solid rgba(249,115,22,0.3)' : '7px solid rgba(249,115,22,0.4)' }}
              date={
                <span className={`font-semibold text-sm ${darkMode ? 'text-orange-300' : 'text-orange-600'}`}>
                  Jun 2025 – Sep 2025 &nbsp;·&nbsp; 3 months
                </span>
              }
              iconStyle={{
                background: 'linear-gradient(135deg, #f59e0b, #f97316)',
                boxShadow: '0 0 0 4px rgba(245,158,11,0.3), 0 0 20px rgba(245,158,11,0.4)',
              }}
              icon={
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                  <svg viewBox="0 0 40 40" style={{ width: '55%', height: '55%' }} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="13" stroke="white" strokeWidth="2" fill="white" fillOpacity="0.15"/>
                    <path d="M20 9C14 9 10 14 10 20C10 26 14 31 20 31" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M20 9C26 9 30 14 30 20C30 26 26 31 20 31" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 2"/>
                    <circle cx="20" cy="20" r="3.5" fill="white"/>
                  </svg>
                </div>
              }
            >
              <div>
                <h3 className={`text-xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  AI Model Testing & Technical Support
                </h3>
                <p className="text-orange-500 font-semibold text-sm mb-4">Anavid &nbsp;·&nbsp; Freelance</p>
                <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {[
                    'Tested and evaluated the performance of AI models to ensure accuracy, reliability, and compliance with project requirements.',
                    'Participated in the optimization and enhancement of websites, collaborating on bug fixes and feature improvements.',
                    'Configured and maintained VPN connections and resolved technical issues to ensure a stable and secure working environment.',
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {['AI Testing', 'QA', 'Web Dev', 'VPN', 'Tech Support'].map((tag) => (
                    <span key={tag} className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20">{tag}</span>
                  ))}
                </div>
              </div>
            </VerticalTimelineElement>

          </VerticalTimeline>
        </div>
      </section>

      {/* Technical Training Section */}
      <section id="training" className="py-20 relative overflow-hidden">
        {/* Decorative blur */}
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-8 lg:px-14">
          {/* Section Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight ${theme.textPrimary}`}>
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Training</span>
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="h-1 w-12 bg-orange-500 rounded-full"></div>
              <div className="h-1 w-3 bg-amber-500 rounded-full"></div>
              <div className="h-1 w-1 bg-amber-400 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Training 1 */}
            <div 
              data-aos="fade-right"
              className={`p-6 sm:p-8 rounded-2xl border ${theme.cardBorder} ${theme.cardBg} backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative group overflow-hidden flex flex-col justify-between`}
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-orange-500 to-amber-500"></div>
              
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20">
                    Cloud & DevOps
                  </span>
                  <span className={`text-xs font-semibold ${theme.textSecondary}`}>TechWorld with Nana</span>
                </div>
                
                <h3 className={`text-2xl font-bold mb-4 ${theme.textPrimary}`}>
                  DevOps Bootcamp
                </h3>
                
                <p className={`text-sm leading-relaxed mb-6 ${theme.textSecondary}`}>
                  Intensive hands-on training in CI/CD automation using Jenkins for pipeline creation and build management, cloud infrastructure provisioning across AWS, DigitalOcean, and Linode for scalable deployments, and advanced version control workflows with Git including branching strategies, pull requests, and collaborative code integration.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-200/10 dark:border-gray-700/30">
                {['Jenkins', 'AWS', 'DigitalOcean', 'Linode', 'Git', 'CI/CD'].map((tag) => (
                  <span 
                    key={tag} 
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Training 2 */}
            <div 
              data-aos="fade-left"
              className={`p-6 sm:p-8 rounded-2xl border ${theme.cardBorder} ${theme.cardBg} backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative group overflow-hidden flex flex-col justify-between`}
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-amber-500 to-yellow-500"></div>
              
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20">
                    Data & AI
                  </span>
                  <span className={`text-xs font-semibold ${theme.textSecondary}`}>DataCamp</span>
                </div>
                
                <h3 className={`text-2xl font-bold mb-4 ${theme.textPrimary}`}>
                  Python for Data Analysis Bootcamp
                </h3>
                
                <p className={`text-sm leading-relaxed mb-6 ${theme.textSecondary}`}>
                  Completed an intensive DataCamp bootcamp in Python for data analysis, mastering Pandas, NumPy, and Matplotlib for data manipulation, statistical computing, and visualization, along with MySQL for efficient database querying and data extraction.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-200/10 dark:border-gray-700/30">
                {['Python', 'Pandas', 'NumPy', 'Matplotlib', 'MySQL', 'Data Analysis'].map((tag) => (
                  <span 
                    key={tag} 
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;