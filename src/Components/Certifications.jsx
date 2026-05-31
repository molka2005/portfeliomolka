import React from 'react';
// Adaptez les chemins vers vos images
import nvidiaBg from './nvidia.png';
import scrumBg from './scrum.png';

const Certifications = ({ darkMode }) => {
  const theme = {
    textPrimary: darkMode ? 'text-white' : 'text-gray-900',
    textSecondary: darkMode ? 'text-gray-300' : 'text-gray-600',
    cardBorder: darkMode ? 'border-gray-700' : 'border-gray-200',
  };

  const certifications = [
    {
      title: 'NVIDIA DLI Certificate',
      issuer: 'NVIDIA Deep Learning Institute',
      background: nvidiaBg,
    },
    {
      title: 'Professional Scrum Master™ I',
      issuer: 'Scrum.org',
      background: scrumBg,
    },
  ];

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      {/* Flous décoratifs */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-8 lg:px-14">
        {/* Titre de la section avec le même dégradé que "Featured Projects" */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight ${theme.textPrimary}`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              Certifications
            </span>
          </h2>
          <div className="h-1 w-20 bg-orange-500 mx-auto rounded-full" />
          <p className={`mt-6 text-lg max-w-2xl mx-auto ${theme.textSecondary}`}>
            Certifications that validate my technical expertise and professional commitment.
          </p>
        </div>

        {/* Cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`relative overflow-hidden rounded-2xl border ${theme.cardBorder} shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group flex flex-col bg-white dark:bg-gray-800`}
            >
              {/* Conteneur de l'image (Capture d'écran) */}
              <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-2">
                <img
                  src={cert.background}
                  alt={cert.title}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105 shadow-inner"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent pointer-events-none" />
              </div>

              {/* Cadre rectangulaire du bas contenant le nom et le logo */}
              <div className="relative w-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-5 text-white flex items-center justify-between">
                <div className="flex-1 pr-4">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-medium text-orange-100 mt-1">
                    {cert.issuer}
                  </p>
                </div>
                
                {/* Logo de certificat bien tracé */}
                <div className="bg-white/20 p-3 rounded-full backdrop-blur-md border border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.3)] shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg 
                    className="w-8 h-8 text-white drop-shadow-md" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="8" r="6"></circle>
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;