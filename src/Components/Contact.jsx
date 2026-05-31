import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form processing
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Construct mailto link
      const subject = `Portfolio Contact: ${formData.firstName} ${formData.lastName}`;
      const body = `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`;
      const mailtoLink = `mailto:molkazghal510@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      window.open(mailtoLink, '_self');
    }, 800)
  }

  // WhatsApp Icon
  const WhatsAppIcon = () => (
    <svg viewBox="0 0 16 16" className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
    </svg>
  )

  // Gmail Icon
  const GmailIcon = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )

  const contactInfo = [
    {
      title: 'WhatsApp',
      value: '+216 25402042',
      icon: <WhatsAppIcon />,
      link: 'https://wa.me/21625402042',
      badge: 'Active Now',
      badgeColor: 'bg-green-500/10 text-green-400 border border-green-500/20'
    },
    {
      title: 'Gmail',
      value: 'molkazghal510@gmail.com',
      icon: <GmailIcon />,
      link: 'mailto:molkazghal510@gmail.com',
      badge: 'Personal',
      badgeColor: 'bg-red-500/10 text-red-400 border border-red-500/20'
    },
    {
      title: 'Gmail Scolaire',
      value: 'molka.zghal@isimsf.u-sfax.tn',
      icon: <GmailIcon />,
      link: 'mailto:molka.zghal@isimsf.u-sfax.tn',
      badge: 'Academic',
      badgeColor: 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
    }
  ]

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden relative">
      {/* Decorative blurred circles for premium visual depth */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-orange-500/10 filter blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-amber-500/10 filter blur-3xl -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <div data-aos="fade-up">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 tracking-tight"
              style={{ color: darkMode ? 'white' : '#1f2937' }}
            >
              Get In{' '}
              <span
                className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent"
              >
                Touch
              </span>
            </h2>
            <p
              className="text-base sm:text-lg md:text-xl font-medium max-w-lg mx-auto"
              style={{ color: darkMode ? '#9ca3af' : '#4b5563' }}
            >
              Have a question or want to work together? Drop me a message!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Formulaire - Gauche */}
          <div 
            className="rounded-2xl p-6 sm:p-8 md:p-10 border shadow-xl flex flex-col justify-between transition-all duration-300 relative overflow-hidden group"
            style={{
              backgroundColor: darkMode ? 'rgba(17, 24, 39, 0.6)' : 'rgba(255, 255, 255, 0.7)',
              borderColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)',
              backdropFilter: 'blur(16px)',
            }}
            data-aos="fade-right"
          >
            {/* Corner ambient glow for form box */}
            <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-gradient-to-tr from-orange-500/10 to-amber-500/10 blur-2xl opacity-75 group-hover:scale-125 transition-transform duration-500 pointer-events-none"></div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 z-10"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label 
                        className="text-xs sm:text-sm font-semibold"
                        style={{ color: darkMode ? '#d1d5db' : '#4b5563' }}
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        style={{
                          backgroundColor: darkMode ? '#374151' : '#faede3',
                          borderColor: darkMode ? '#4b5563' : '#d1d5db',
                          color: darkMode ? 'white' : '#1f2937',
                        }}
                        className="w-full px-4 py-3 rounded-xl text-sm sm:text-base border focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all outline-none"
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label 
                        className="text-xs sm:text-sm font-semibold"
                        style={{ color: darkMode ? '#d1d5db' : '#4b5563' }}
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        style={{
                          backgroundColor: darkMode ? '#374151' : '#faede3',
                          borderColor: darkMode ? '#4b5563' : '#d1d5db',
                          color: darkMode ? 'white' : '#1f2937',
                        }}
                        className="w-full px-4 py-3 rounded-xl text-sm sm:text-base border focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label 
                        className="text-xs sm:text-sm font-semibold"
                        style={{ color: darkMode ? '#d1d5db' : '#4b5563' }}
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          backgroundColor: darkMode ? '#374151' : '#faede3',
                          borderColor: darkMode ? '#4b5563' : '#d1d5db',
                          color: darkMode ? 'white' : '#1f2937',
                        }}
                        className="w-full px-4 py-3 rounded-xl text-sm sm:text-base border focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all outline-none"
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label 
                        className="text-xs sm:text-sm font-semibold"
                        style={{ color: darkMode ? '#d1d5db' : '#4b5563' }}
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          backgroundColor: darkMode ? '#374151' : '#faede3',
                          borderColor: darkMode ? '#4b5563' : '#d1d5db',
                          color: darkMode ? 'white' : '#1f2937',
                        }}
                        className="w-full px-4 py-3 rounded-xl text-sm sm:text-base border focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label 
                      className="text-xs sm:text-sm font-semibold"
                      style={{ color: darkMode ? '#d1d5db' : '#4b5563' }}
                    >
                      Your Message
                    </label>
                    <textarea
                      rows="4"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        backgroundColor: darkMode ? '#374151' : '#faede3',
                        borderColor: darkMode ? '#4b5563' : '#d1d5db',
                        color: darkMode ? 'white' : '#1f2937',
                      }}
                      className="w-full px-4 py-3 rounded-xl text-sm sm:text-base border focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all outline-none resize-none"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 text-white font-semibold rounded-xl text-sm sm:text-base hover:shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="22" y1="2" x2="11" y2="13" />
                          <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, type: 'spring' }}
                  className="flex flex-col items-center justify-center text-center py-12 px-4 h-full z-10"
                >
                  <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6 border border-green-500/20 shadow-inner">
                    <svg className="w-10 h-10 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 
                    className="text-2xl font-bold mb-2"
                    style={{ color: darkMode ? 'white' : '#1f2937' }}
                  >
                    Thank You, {formData.firstName}!
                  </h3>
                  <p 
                    className="text-sm sm:text-base max-w-sm mb-8"
                    style={{ color: darkMode ? '#9ca3af' : '#4b5563' }}
                  >
                    Your message has been sent successfully. Molka will get back to you shortly at <span className="font-semibold text-orange-500">{formData.email}</span>.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl border font-semibold text-sm sm:text-base transition-all hover:scale-105 cursor-pointer"
                    style={{
                      borderColor: darkMode ? '#374151' : '#d1d5db',
                      color: darkMode ? '#d1d5db' : '#4b5563',
                      backgroundColor: darkMode ? '#374151/40' : '#faede3/40',
                    }}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Infos de Contact - Droite */}
          <div 
            className="rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl flex flex-col justify-between border transition-all duration-300 relative overflow-hidden group"
            style={{
              backgroundColor: darkMode ? 'rgba(17, 24, 39, 0.6)' : 'rgba(255, 255, 255, 0.7)',
              borderColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)',
              backdropFilter: 'blur(16px)',
            }}
            data-aos="fade-left"
          >
            {/* Corner ambient glow inside the card */}
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br from-orange-500/10 to-amber-500/10 blur-2xl opacity-75 group-hover:scale-125 transition-transform duration-500 pointer-events-none"></div>

            <div className="z-10">
              <div className="flex items-center gap-3 mb-2">
                <h3 
                  className="text-2xl sm:text-3xl font-extrabold"
                  style={{ color: darkMode ? 'white' : '#1f2937' }}
                >
                  Talk to me
                </h3>
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              </div>
              <p
                className="text-sm sm:text-base mb-8 font-medium"
                style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}
              >
                Reach out on any of these platforms, and let's build something awesome together!
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 shadow-sm border border-gray-200/50 dark:border-gray-800/50 hover:border-orange-500/40 dark:hover:border-orange-500/40 cursor-pointer group"
                    style={{
                      backgroundColor: darkMode ? 'rgba(31, 41, 55, 0.4)' : 'rgba(255, 255, 255, 0.6)',
                    }}
                  >
                    {/* Icon with same background color as Send Message button */}
                    <div className="flex-shrink-0 p-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/20 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-0.5">
                        <p
                          className="font-bold text-sm sm:text-base"
                          style={{ color: darkMode ? '#e5e7eb' : '#1f2937' }}
                        >
                          {info.title}
                        </p>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${info.badgeColor}`}>
                          {info.badge}
                        </span>
                      </div>
                      <p
                        className="text-xs sm:text-sm font-semibold truncate hover:underline"
                        style={{ color: darkMode ? '#d1d5db' : '#4b5563' }}
                      >
                        {info.value}
                      </p>
                    </div>
                    <div className="flex-shrink-0 text-orange-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* A small decorative bottom banner or statement inside the card */}
            <div className="mt-8 pt-6 border-t border-dashed z-10" style={{ borderColor: darkMode ? '#374151' : '#e5e7eb' }}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
                  MZ
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold" style={{ color: darkMode ? 'white' : '#1f2937' }}>
                    Molka Zghal
                  </h4>
                  <p className="text-[11px] font-medium" style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}>
                    Web & DevOps Enthusiast
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
