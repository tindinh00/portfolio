import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa'

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-gray-800 dark:text-white">DDT.</a>
        
        {/* Mobile menu button - only visible on mobile */}
        <div className="md:hidden">
          <button 
            className="text-gray-800 dark:text-white text-2xl"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a onClick={() => scrollToSection('home')} className="nav-link text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-violet-400 transition-colors cursor-pointer relative py-1 group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a onClick={() => scrollToSection('about')} className="nav-link text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-violet-400 transition-colors cursor-pointer relative py-1 group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a onClick={() => scrollToSection('skills')} className="nav-link text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-violet-400 transition-colors cursor-pointer relative py-1 group">
            Skills
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a onClick={() => scrollToSection('qualification')} className="nav-link text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-violet-400 transition-colors cursor-pointer relative py-1 group">
            Qualification
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a onClick={() => scrollToSection('projects')} className="nav-link text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-violet-400 transition-colors cursor-pointer relative py-1 group">
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a onClick={() => scrollToSection('contact')} className="nav-link text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-violet-400 transition-colors cursor-pointer relative py-1 group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          
          {/* Dark mode toggle - positioned at the end */}
          <button
            onClick={toggleDarkMode}
            className="bg-gray-200 dark:bg-gray-700 text-indigo-600 dark:text-violet-400 hover:text-indigo-800 dark:hover:text-violet-300 transition-colors p-2 rounded-full ml-2"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-white dark:bg-gray-900 z-40 flex flex-col items-center pt-10 gap-6">
            <a onClick={() => scrollToSection('home')} className="text-xl text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-violet-400 transition-colors cursor-pointer relative py-1 group">
              Home
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-indigo-600 dark:bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a onClick={() => scrollToSection('about')} className="text-xl text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-violet-400 transition-colors cursor-pointer relative py-1 group">
              About
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-indigo-600 dark:bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a onClick={() => scrollToSection('skills')} className="text-xl text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-violet-400 transition-colors cursor-pointer relative py-1 group">
              Skills
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-indigo-600 dark:bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a onClick={() => scrollToSection('qualification')} className="text-xl text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-violet-400 transition-colors cursor-pointer relative py-1 group">
              Qualification
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-indigo-600 dark:bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a onClick={() => scrollToSection('projects')} className="text-xl text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-violet-400 transition-colors cursor-pointer relative py-1 group">
              Projects
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-indigo-600 dark:bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a onClick={() => scrollToSection('contact')} className="text-xl text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-violet-400 transition-colors cursor-pointer relative py-1 group">
              Contact
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-indigo-600 dark:bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            
            {/* Dark mode toggle in mobile menu */}
            <button
              onClick={toggleDarkMode}
              className="bg-gray-200 dark:bg-gray-700 text-indigo-600 dark:text-violet-400 hover:text-indigo-800 dark:hover:text-violet-300 transition-colors p-2 rounded-full mt-4"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
            </button>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
