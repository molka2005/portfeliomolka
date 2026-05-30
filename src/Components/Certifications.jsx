import React from 'react';
// Adaptez les chemins vers vos images
import nvidiaBg from './nvidia.png';
import scrumBg from './scrum.png';

const Certifications = ({ darkMode }) => {
  const theme = {
    textPrimary: darkMode ? 'text-white' : 'text-gray-900',
    textSecondary: darkMode ? 'text-gray-300' : 'text-gray-600',
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
              className={`relative overflow-hidden rounded-2xl border-2 border-orange-500/70 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group z-10 flex flex-col justify-end min-h-[380px]`}
            >
              {/* Image de fond pleine largeur */}
              <img
                src={cert.background}
                alt={cert.title}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              {/* Voile orangé subtil */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent z-10" />
              {/* Gradient de lisibilité en bas */}
              <div
                className={`absolute inset-0 bg-gradient-to-t z-10 ${
                  darkMode
                    ? 'from-gray-950/60 via-gray-950/20 to-transparent'
                    : 'from-white/60 via-white/20 to-transparent'
                }`}
              />

              {/* Barre rectangulaire du bas – dégradé du titre, sans logo */}
              <div className="relative z-20 w-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-4 text-white">
                <h3 className="text-xl font-bold tracking-tight">
                  {cert.title}
                </h3>
                <p className="text-sm font-medium text-orange-100 mt-1">
                  {cert.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;