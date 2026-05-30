import React from 'react'
import { motion } from 'framer-motion'

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/molka2005',
      icon: (
        <svg viewBox="0 0 16 16" className="w-5 h-5" fill="currentColor">
          <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/molka-zghal',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.27h-3v-5.5c0-1.379-.028-3.156-1.923-3.156-1.923 0-2.218 1.5-2.218 3.053v5.603h-3v-10h2.881v1.367h.041c.401-.76 1.379-1.561 2.838-1.561 3.036 0 3.6 2 3.6 4.596v6.598z" />
        </svg>
      )
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/21625402042',
      icon: (
        <svg viewBox="0 0 16 16" className="w-5 h-5" fill="currentColor">
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
        </svg>
      )
    }
  ]

  return (
    <footer 
      className="border-t transition-all duration-300 py-12"
      style={{
        backgroundColor: darkMode ? '#0b1329' : '#fcf8f5',
        borderColor: darkMode ? '#1f2937' : '#e5e7eb'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 items-start">
          
          {/* Col 1: Bio */}
          <div className="space-y-4" data-aos="fade-up">
            <a href="/" className="inline-block">
              <span className={`text-2xl font-black tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Molka <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Zghal</span>
              </span>
            </a>
            <p className="text-sm font-medium leading-relaxed max-w-xs" style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}>
              DevOps Learner, Junior Developer &amp; Data/AI Enthusiast. Building modern, clean, and optimized web applications.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-sm font-extrabold uppercase tracking-wider" style={{ color: darkMode ? 'white' : '#1f2937' }}>
              Quick Navigation
            </h4>
            <div className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium hover:text-orange-500 transition-colors duration-200 w-fit"
                  style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Social & Contact */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-sm font-extrabold uppercase tracking-wider" style={{ color: darkMode ? 'white' : '#1f2937' }}>
              Let's Connect
            </h4>
            <p className="text-sm font-medium" style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}>
              Say hello or check out my work across these networks.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/10 hover:shadow-orange-500/25 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left" style={{ borderColor: darkMode ? '#1f2937' : '#e5e7eb' }}>
          <p className="text-xs font-semibold" style={{ color: darkMode ? '#6b7280' : '#9ca3af' }}>
            &copy; {currentYear} Molka Zghal. All rights reserved.
          </p>
          <p className="text-xs font-semibold" style={{ color: darkMode ? '#6b7280' : '#9ca3af' }}>
            Designed &amp; Built with <span className="text-red-500 animate-pulse">❤️</span> using React &amp; Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
