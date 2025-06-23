import { motion } from 'framer-motion'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaFigma
} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiVite,
  SiJest
} from 'react-icons/si'

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-500' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-500' },
    { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-400' },
    { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-600' },
    { name: 'React', icon: <FaReact />, color: 'text-cyan-400' },
    { name: 'Redux', icon: <SiRedux />, color: 'text-purple-500' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-white dark:text-white' },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-cyan-300' },
    { name: 'Git', icon: <FaGitAlt />, color: 'text-orange-600' },
    { name: 'Figma', icon: <FaFigma />, color: 'text-purple-400' },
    { name: 'Vite', icon: <SiVite />, color: 'text-purple-300' },
    { name: 'Jest', icon: <SiJest />, color: 'text-red-600' }
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="section-heading">My Skills</h2>
          <div className="w-20 h-1 bg-indigo-500 dark:bg-violet-500 mx-auto"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the frontend development world.
            Here are the main tools and technologies I use to create web applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-100 dark:bg-[#1a2334] p-6 rounded-lg flex flex-col items-center justify-center shadow-md"
            >
              <div className={`text-5xl mb-3 ${skill.color}`}>{skill.icon}</div>
              <h3 className="text-center font-medium text-gray-800 dark:text-white">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">My Development Process</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Research',
                description: 'Understanding project requirements and researching best solutions.'
              },
              {
                step: '02',
                title: 'Design',
                description: 'Creating wireframes and planning the architecture of the application.'
              },
              {
                step: '03',
                title: 'Development',
                description: 'Writing clean, maintainable code with modern best practices.'
              },
              {
                step: '04',
                title: 'Testing & Deployment',
                description: 'Rigorous testing and smooth deployment to production.'
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-gray-100 dark:bg-[#1a2334] p-6 rounded-lg relative overflow-hidden shadow-md"
              >
                <div className="text-7xl font-bold text-indigo-200 dark:text-primary/10 absolute -top-2 -left-2">
                  {process.step}
                </div>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{process.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{process.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 