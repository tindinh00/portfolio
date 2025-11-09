import { motion, useAnimation } from 'framer-motion'
import { FaEnvelope, FaMouse, FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaDownload } from 'react-icons/fa'
import { SiGitlab } from 'react-icons/si'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

const TypewriterText = ({ texts, typingSpeed = 150, deletingSpeed = 75, pauseDuration = 1500 }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeout

    const type = () => {
      const currentText = texts[currentIndex]
      
      if (!isDeleting) {
        // Typing
        setDisplayText(currentText.substring(0, displayText.length + 1))
        
        if (displayText.length === currentText.length) {
          // Finished typing, pause before deleting
          timeout = setTimeout(() => {
            setIsDeleting(true)
          }, pauseDuration)
          return
        }
        
        timeout = setTimeout(type, typingSpeed)
      } else {
        // Deleting
        setDisplayText(currentText.substring(0, displayText.length - 1))
        
        if (displayText.length === 0) {
          // Finished deleting, move to next text
          setIsDeleting(false)
          setCurrentIndex((currentIndex + 1) % texts.length)
        }
        
        timeout = setTimeout(type, deletingSpeed)
      }
    }
    
    timeout = setTimeout(type, typingSpeed)
    
    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, texts, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span className="inline-block">
      {displayText}
      <span className="inline-block w-0.5 h-6 bg-indigo-600 dark:bg-violet-400 ml-1 animate-blink"></span>
    </span>
  )
}

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <motion.div 
            className="md:w-1/2 w-full flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-800 dark:text-white text-center md:text-left">
              <div className='text-indigo-600 dark:text-violet-400'>Doan</div>
              <div>Dinh Tinn</div>
            </h1>
            
            <div className="w-32 h-1 bg-indigo-500 dark:bg-violet-500 my-6 mx-auto md:mx-0"></div>
            
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-200 mb-6 text-center md:text-left">
              <TypewriterText 
                texts={["Frontend Developer", "React Developer", "Web Designer", "UI/UX Enthusiast"]} 
                typingSpeed={100}
                deletingSpeed={50}
                pauseDuration={2000}
              />
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg text-center md:text-left">
              I'm creative developer based in New York, and I'm very passionate and dedicated to my work.
            </p>
            
            <div className="flex items-center justify-center md:justify-start gap-6 flex-wrap w-full">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Button 
                  className="bg-indigo-600 hover:bg-indigo-700 dark:bg-violet-600 dark:hover:bg-violet-700 rounded-md px-8 py-6 text-base font-medium flex items-center gap-2 text-white"
                >
                  Download My CV <FaDownload className="ml-2" />
                </Button>
              </motion.div>
              
              <div className="flex items-center justify-center gap-4">
                <motion.a 
                  href="https://www.linkedin.com/in/dtcoder308" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-violet-400 text-2xl"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a 
                  href="https://github.com/tindinh00" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-violet-400 text-2xl"
                >
                  <FaGithub />
                </motion.a>
                <motion.a 
                  href="https://www.instagram.com/tindinhh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-violet-400 text-2xl"
                >
                  <FaInstagram />
                </motion.a>
                <motion.a 
                  href="https://www.facebook.com/ddt308" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-violet-400 text-2xl"
                >
                  <FaFacebook />
                </motion.a>
                <motion.a 
                  href="https://gitlab.com/SE173049_DinhTin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-violet-400 text-2xl"
                >
                  <SiGitlab />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full opacity-20 blur-xl animate-pulse" style={{ animationDuration: '6s' }}></div>
              
              <div className="organic-shape-wrapper">
                <div className="organic-shape">
                  {/* Replace with your profile image */}
                  <img 
                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-5 left-0 right-0 mx-auto flex flex-col items-center text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex flex-col items-center gap-1">
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="flex items-center gap-2"
            >
              <FaMouse className="text-indigo-500 dark:text-violet-400 text-lg" />
              <p className="text-sm font-medium">Scroll down</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              <svg className="w-5 h-5 mt-2 text-indigo-500 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 