import React from 'react'

const Socials = () => {
  const links = [
    { name: 'GitHub', href: 'https://github.com/molka2005', svg: (
      <svg viewBox="0 0 16 16" className="h-5 w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z"/>
      </svg>
    )},
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/molka-zghal', svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.3 8h4.4V24H.3zM8.9 8h4.22v2.16h.06c.59-1.12 2.04-2.3 4.2-2.3C23.16 7.86 24 10.16 24 13.34V24h-4.4v-9.02c0-2.15-.04-4.9-2.98-4.9-2.99 0-3.45 2.34-3.45 4.76V24H8.9V8z"/>
      </svg>
    )},
    { name: 'Mail', href: 'mailto:molkazghal510@gmail.com', svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 13.065L.5 4.5V19a2 2 0 002 2h19a2 2 0 002-2V4.5L12 13.065zM12 10L23.5 1H.5L12 10z"/>
      </svg>
    )}
  ]

  return (
    <div id="home" className="min-h-screen">
      {/* Fixed vertical social icons on the left */}
      <div className="hidden md:flex flex-col fixed left-4 top-1/2 transform -translate-y-1/2 z-40">
        {links.map((l) => (
          <a key={l.name} href={l.href} target="_blank" rel="noreferrer" className="mb-4 p-2 rounded-md bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-white shadow hover:translate-x-1 transition-transform">
            <span className="sr-only">{l.name}</span>
            <div className="h-5 w-5">{l.svg}</div>
          </a>
        ))}
      </div>

      {/* For small screens, show a bottom-left horizontal group */}
      <div className="md:hidden fixed left-4 bottom-6 flex space-x-3 z-40">
        {links.map((l) => (
          <a key={l.name} href={l.href} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-white shadow">
            <span className="sr-only">{l.name}</span>
            <div className="h-5 w-5">{l.svg}</div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Socials
