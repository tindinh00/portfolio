import { motion } from 'framer-motion'
import { FaCode, FaLaptopCode, FaMobileAlt } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-[#121a29]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="section-heading">About Me</h2>
          <div className="w-20 h-1 bg-indigo-500 dark:bg-violet-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm a passionate frontend developer with a strong focus on creating
              intuitive and performant user interfaces. With a background in
              design and development, I bring a unique perspective to every project.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              My journey began when I discovered my passion for web development
              during college. Since then, I've been continuously learning and
              improving my skills to stay updated with the latest trends and
              technologies in the frontend world.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              I believe in writing clean, maintainable code and creating
              accessible user interfaces that provide excellent user experiences
              across all devices and platforms.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            <div className="bg-white dark:bg-[#1a2334] p-6 rounded-lg border-l-4 border-indigo-500 dark:border-violet-500 shadow-md">
              <div className="flex items-center mb-3">
                <FaCode className="text-indigo-500 dark:text-violet-500 text-2xl mr-3" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Web Development</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Building responsive websites with modern frameworks
                like React, focusing on performance and accessibility.
              </p>
            </div>

            <div className="bg-white dark:bg-[#1a2334] p-6 rounded-lg border-l-4 border-indigo-500 dark:border-violet-500 shadow-md">
              <div className="flex items-center mb-3">
                <FaLaptopCode className="text-indigo-500 dark:text-violet-500 text-2xl mr-3" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">UI/UX Design</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Creating intuitive user interfaces with clean design
                principles and attention to user experience.
              </p>
            </div>

            <div className="bg-white dark:bg-[#1a2334] p-6 rounded-lg border-l-4 border-indigo-500 dark:border-violet-500 shadow-md">
              <div className="flex items-center mb-3">
                <FaMobileAlt className="text-indigo-500 dark:text-violet-500 text-2xl mr-3" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Responsive Design</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Ensuring applications work flawlessly across all devices
                from desktop to mobile with a mobile-first approach.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 