import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isDropdownPinned, setIsDropdownPinned] = useState(false)

  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Skills', link: '#skills' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contact', link: '#contact' }
  ]

  const handleNavClick = (name) => {
    setActiveSection(name)
    setIsMenuOpen(false)
    setIsDropdownOpen(false)
    setIsDropdownPinned(false)
  }

  return (
    <div className="w-full">
      <motion.nav
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 lg:px-8 py-5 backdrop-blur-md ${darkMode ? 'bg-transparent' : 'bg-gradient-to-r from-gray-200 via-orange-50/60 to-white'} shadow-lg shadow-[0_8px_30px_rgba(255,153,51,0.08)] w-full`}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <a href="/" className="flex items-center ml-3">
              <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Portfolio
              </span>
            </a>
          </div>

          <div className="flex items-center space-x-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.name.toLowerCase()
              return (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => handleNavClick(item.name.toLowerCase())}
                  className={`inline-flex items-center pb-1 border-b-2 transition duration-200 ease-out transform hover:scale-110 ${isActive ? (darkMode ? 'text-orange-300 border-orange-300' : 'text-orange-600 border-orange-600') : (darkMode ? 'text-gray-300 border-transparent hover:text-orange-300 hover:border-orange-300' : 'text-gray-800 border-transparent hover:text-orange-600 hover:border-orange-600')}`}
                >
                  {item.name}
                </a>
              )
            })}
          </div>

          <div className="flex items-center space-x-4 mr-3">
            <button
              onClick={toggleDarkMode}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md transition hover:scale-105"
            >
              {darkMode ? (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              )}
            </button>

            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => { if (!isDropdownPinned) setIsDropdownOpen(false) }}
            >
              <button
                onClick={() => {
                  setIsDropdownPinned((prev) => !prev)
                  setIsDropdownOpen((prev) => !prev)
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-white shadow-md transition hover:scale-105"
                aria-label={isDropdownOpen ? 'Close menu' : 'Open menu'}
              >
                {isDropdownOpen ? (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="6" y1="6" x2="18" y2="18" />
                    <line x1="6" y1="18" x2="18" y2="6" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                )}
              </button>

              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className={`absolute right-0 top-12 w-48 rounded-lg shadow-lg backdrop-blur-md ${darkMode ? 'bg-gray-800/95' : 'bg-white/95'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} p-3 z-50`}
                >
                  <div className="flex flex-col space-y-2">
                    {navItems.map((item) => {
                      const isActiveDropdown = activeSection === item.name.toLowerCase()
                      return (
                        <a
                          key={item.name}
                          href={item.link}
                          onClick={() => handleNavClick(item.name.toLowerCase())}
                          className={`px-4 py-3 rounded-md transition duration-200 ${isActiveDropdown ? (darkMode ? 'bg-gray-700 text-orange-300' : 'bg-gray-200 text-orange-600') : (darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-800 hover:bg-gray-100 hover:text-orange-600')}`}
                        >
                          {item.name}
                        </a>
                      )
                    })}
                    <div className="border-t border-gray-600 my-1"></div>
                    <a
                      href="#contact"
                      onClick={() => handleNavClick('hire')}
                      className="px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold text-center transition duration-200 hover:shadow-lg"
                    >
                      Hire Me
                    </a>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-2 w-full">
            <div className="flex flex-col items-center space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => handleNavClick(item.name.toLowerCase())}
                  className="block w-full text-center py-2 transition duration-200 ease-out transform hover:scale-105 hover:text-orange-500"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </motion.nav>
    </div>
  )
}

export default Navbar