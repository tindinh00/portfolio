import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaRegCalendarAlt } from 'react-icons/fa'

const Qualification = () => {
  const [activeTab, setActiveTab] = useState('education')

  const education = [
    {
      title: 'Web Design',
      institute: 'Spain - Institute',
      period: '2021 - Present'
    },
    {
      title: 'Art Director',
      institute: 'Spain - Institute',
      period: '2020 - 2021'
    },
    {
      title: 'Web Development',
      institute: 'Spain - Institute',
      period: '2018 - 2020'
    },
    {
      title: 'UX Expert',
      institute: 'Spain - Institute',
      period: '2017 - 2018'
    }
  ]

  const experience = [
    {
      title: 'Product Designer',
      company: 'Microsoft - Spain',
      period: '2021 - Present'
    },
    {
      title: 'UX Designer',
      company: 'Apple Inc - Spain',
      period: '2020 - 2021'
    },
    {
      title: 'Web Developer',
      company: 'Figma - Spain',
      period: '2018 - 2020'
    },
    {
      title: 'UI Designer',
      company: 'Adobe - Spain',
      period: '2017 - 2018'
    }
  ]

  return (
    <section id="qualification" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="section-heading">Qualification</h2>
          <div className="w-20 h-1 bg-indigo-500 dark:bg-violet-500 mx-auto"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My personal journey
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 text-lg font-medium transition-colors ${
                activeTab === 'education'
                  ? 'text-indigo-600 dark:text-violet-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-violet-400'
              }`}
            >
              <FaGraduationCap className="text-xl" /> Education
            </button>

            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 text-lg font-medium transition-colors ${
                activeTab === 'experience'
                  ? 'text-indigo-600 dark:text-violet-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-violet-400'
              }`}
            >
              <FaBriefcase className="text-xl" /> Experience
            </button>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-indigo-200 dark:bg-gray-700"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {activeTab === 'education'
                ? education.map((item, index) => (
                    <motion.div
                      key={`education-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`relative flex ${
                        index % 2 === 0 ? 'justify-start' : 'justify-end'
                      }`}
                    >
                      <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-1">
                          {item.institute}
                        </p>
                        <div className="flex items-center text-gray-500 dark:text-gray-500 text-sm gap-1">
                          <FaRegCalendarAlt />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Circle dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-500 dark:bg-violet-500 z-10"></div>
                    </motion.div>
                  ))
                : experience.map((item, index) => (
                    <motion.div
                      key={`experience-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`relative flex ${
                        index % 2 === 0 ? 'justify-start' : 'justify-end'
                      }`}
                    >
                      <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-1">
                          {item.company}
                        </p>
                        <div className="flex items-center text-gray-500 dark:text-gray-500 text-sm gap-1">
                          <FaRegCalendarAlt />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Circle dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-500 dark:bg-violet-500 z-10"></div>
                    </motion.div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification 