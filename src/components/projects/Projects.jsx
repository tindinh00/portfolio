import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description: 'A fully responsive e-commerce website with product filtering, cart functionality, and user authentication.',
      image: 'https://via.placeholder.com/600x400?text=E-Commerce+Website',
      tags: ['react', 'frontend'],
      github: '#',
      demo: '#',
      technologies: ['React', 'Redux', 'Tailwind CSS', 'Firebase']
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A task management application with drag-and-drop functionality, filters, and user settings.',
      image: 'https://via.placeholder.com/600x400?text=Task+Management+App',
      tags: ['react', 'frontend'],
      github: '#',
      demo: '#',
      technologies: ['React', 'TypeScript', 'Context API', 'Styled Components']
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A modern and responsive portfolio website for creative professionals and developers.',
      image: 'https://via.placeholder.com/600x400?text=Portfolio+Website',
      tags: ['frontend', 'ui'],
      github: '#',
      demo: '#',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS']
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Real-time weather dashboard with search functionality, forecasts, and interactive maps.',
      image: 'https://via.placeholder.com/600x400?text=Weather+Dashboard',
      tags: ['frontend', 'api'],
      github: '#',
      demo: '#',
      technologies: ['JavaScript', 'Weather API', 'Chart.js', 'CSS3']
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'A responsive dashboard that displays analytics and statistics for social media platforms.',
      image: 'https://via.placeholder.com/600x400?text=Social+Media+Dashboard',
      tags: ['ui', 'frontend'],
      github: '#',
      demo: '#',
      technologies: ['React', 'Redux', 'Chart.js', 'Tailwind CSS']
    },
    {
      id: 6,
      title: 'Recipe Finder App',
      description: 'An application that helps users find recipes based on ingredients they have at home.',
      image: 'https://via.placeholder.com/600x400?text=Recipe+Finder+App',
      tags: ['api', 'frontend'],
      github: '#',
      demo: '#',
      technologies: ['React', 'Food API', 'CSS3', 'JavaScript']
    }
  ]

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Frontend', value: 'frontend' },
    { name: 'UI/UX', value: 'ui' },
    { name: 'API', value: 'api' }
  ]
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter))

  return (
    <section id="projects" className="py-20 bg-[#121a29]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="section-heading">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project solves specific problems
            and demonstrates different skills and technologies.
          </p>
        </motion.div>

        <div className="flex justify-center flex-wrap gap-4 mb-10">
          {filters.map(filter => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-md transition-all ${
                activeFilter === filter.value
                  ? 'bg-primary text-white'
                  : 'bg-[#1a2334] text-gray-300 hover:bg-[#2a344a]'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-[#1a2334] rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="text-xs bg-[#0f1624] text-gray-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:underline"
                  >
                    <FaGithub className="mr-1" /> Code
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:underline"
                  >
                    <FaExternalLinkAlt className="mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center text-gray-400 mt-10">
            No projects found with the selected filter.
          </div>
        )}
        
        <div className="text-center mt-12">
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="mr-2" /> See More on GitHub
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default Projects 