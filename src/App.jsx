import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Certifications from "./Components/Certifications";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { useState, useEffect } from "react";

const App = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
    document.documentElement.classList.add("dark");
  }, []);
  useEffect(() => {
    AOS.refresh();
  }, [darkMode]);

  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={
        darkMode
          ? 'bg-gradient-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen'
          : 'bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen'
      }
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Certifications darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;