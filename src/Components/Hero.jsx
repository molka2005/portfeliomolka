import React, { useState, useEffect } from 'react'
import hero from './molka.png'
import hi from './hi.png'

// Import hi icon from public or from local folder if you have one
// Example: import hi from './hi.png'

const Hero = ({ darkMode }) => {
  // Typing animation state
  const roles = ['Junior Developer', 'DevOps Learner', 'Data & AI Enthusiast']
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout

    if (!isDeleting && charIndex <= currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, charIndex))
        setCharIndex(charIndex + 1)
      }, 100)
    } else if (!isDeleting && charIndex > currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1500)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, 50)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, roleIndex])

  // DownloadIcon SVG component
  const DownloadIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )

  // CV file path served statically from public folder
  const CV = './cv.pdf'

  const socialIcons = [
    {
      icon: (
        <svg viewBox="0 0 16 16" className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
      ),
      alt: 'GitHub',
      link: 'https://github.com/molka2005'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.27h-3v-5.5c0-1.379-.028-3.156-1.923-3.156-1.923 0-2.218 1.5-2.218 3.053v5.603h-3v-10h2.881v1.367h.041c.401-.76 1.379-1.561 2.838-1.561 3.036 0 3.6 2 3.6 4.596v6.598z" />
        </svg>
      ),
      alt: 'LinkedIn',
      link: 'https://www.linkedin.com/in/molka-zghal'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      alt: 'Mail',
      link: 'mailto:molkazghal510@gmail.com'
    }
  ]

  const theme = {
    textPrimary: 'text-gray-900 dark:text-white',
    textSecondary: 'text-gray-600 dark:text-gray-300',
    buttonSecondary: 'bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-transparent active:bg-transparent focus:bg-transparent',
    border: 'border-gray-300 dark:border-gray-600',
    decorativeCircle: darkMode ? 'bg-orange-500' : 'bg-orange-300'
  }

  return (
    <div className='relative overflow-hidden min-h-screen flex flex-col'>
      <section id='home' data-aos='fade-up' data-aos-delay='250' className='body-font z-10'>
        <div className='container mx-auto flex px-4 sm:px-8 lg:px-14 py-6 lg:py-16 flex-col lg:flex-row items-center justify-between lg:mt-0 mt-14'>

          <div className='lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0'>

            {/* Social Icons */}
            <div className='flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full'>
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.link || '#'}
                  target='_blank'
                  rel='noopener noreferrer'
                  data-aos='fade-up'
                  data-aos-delay={400 + index * 100}
                  className='transform hover:scale-110 transition-transform duration-300'
                >
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${index === 0 ? 'bg-black text-white' : index === 1 ? 'bg-blue-600 text-white' : 'bg-red-500 text-white'}`}>
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>

            {/* Title */}
            <h1
              className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold ${theme.textPrimary}`}
              data-aos='fade-up'
              data-aos-delay='500'
            >
              Hi, I'm <span className='text-orange-500'>{displayText}</span>
              <span className='animate-pulse text-orange-500'>|</span>
            </h1>

            {/* Description */}
            <p
              className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg ${theme.textSecondary}`}
              data-aos='fade-up'
              data-aos-delay='600'
            >
              Driven by curiosity and a passion for technology, I focus on building clean and meaningful digital solutions while continuously learning and growing. I enjoy turning ideas into real projects and exploring new ways to improve my skills through practice and creativity.
            </p>

            {/* Buttons */}
            <div className='w-full pt-4 sm:pt-6'>
              <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4' data-aos='fade-up' data-aos-delay='700'>

                {/* Download CV Button */}
                <a href={CV} download="CV_Molka_Zghal.pdf" className='w-full sm:w-auto'>
                  <button className='w-full sm:w-auto inline-flex items-center justify-center text-white bg-gradient-to-r from-orange-500 to-amber-500 border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105'>
                    <DownloadIcon className='w-4 h-4 sm:h-5 sm:w-5 mr-2' />
                    Download CV
                  </button>
                </a>

                {/* Contact Button */}
                <a href="#contact" className='w-full sm:w-auto'>
                  <button className={`w-full sm:w-auto inline-flex items-center justify-center text-orange-500 border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 active:bg-transparent focus:bg-transparent focus:outline-none ${theme.buttonSecondary}`}>
                    Contact Me
                  </button>
                </a>

              </div>
            </div>

          </div>

          {/* Right side image/illustration */}
          <div className='lg:w-1/2 w-full flex justify-center lg:justify-center relative' data-aos='fade-left' data-aos-delay='400'>

            {/* Image Container */}
            <div className="relative w-1/2 sm:w-1/2 lg:w-3/5 mt-10 sm:mt-14 lg:mt-16">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={hero}
                  alt="Hero Image"
                  className="w-full max-h-[500px] object-cover transform hover:scale-105 transition-transform duration-500 rounded-2xl"
                />
              </div>

              {/* Floating Hi Icon */}
              <img
                src={hi}
                alt="Hi icon"
                className="absolute -top-4 sm:-top-6 left-6 sm:left-10 w-14 h-14 sm:w-20 sm:h-20 object-contain animate-bounce opacity-90 z-10"
              />
            </div>

            {/* Decorative Background Circle */}
            <div className={`absolute -top-20 -left-20 w-40 h-40 sm:w-64 sm:h-64 ${theme.decorativeCircle} rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000 hidden sm:block`}>
            </div>

          </div>

        </div>
      </section>
    </div>
  )
}

export default Hero
