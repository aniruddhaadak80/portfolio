"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, GithubIcon, X } from 'lucide-react'


const projects = [
  {
    id: 1,
    title: 'SkillSphere : A Daily Productivity APP',
    description: 'A unified platform with 10 apps for enhancing well-being and productivity.',
    image: 'https://tinyurl.com/23a53kr8',
    technologies: ['Typescript', 'React.js', 'TailwindCSS'],
    github: 'https://github.com/aniruddhaadak80/SkillSphere',
    live: 'https://skilsphere.vercel.app',
    details: 'SkillSphere is a comprehensive productivity suite designed to boost your daily efficiency. It includes task management, habit tracking, and goal setting features.'
  },
  {
    id: 2,
    title: 'MercatoLive : An E-commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management.',
    image: 'https://tinyurl.com/2dasz8gr',
    technologies: ['Next.js', 'Typescript', 'Javascript'],
    github: 'https://github.com/aniruddhaadak80/MercatoLive',
    live: 'https://mercato-live.vercel.app/',
    details: 'MercatoLive offers a seamless shopping experience with features like real-time inventory updates, user authentication, and secure payment processing.'
  },
  {
    id: 3,
    title: 'Real-Time Stock Data Visualizer',
    description: 'A real-time stock data visualization application built with React, WebSockets, and the TradingView Charting Library.',
    image: 'https://tinyurl.com/254oy64x',
    technologies: ['React.js', 'WebSockets', 'TradingView Chart', 'Typescript'],
    github: 'https://github.com/aniruddhaadak80/real-time-stock-visualizer',
    live: 'https://real-time-stock-visualizer.vercel.app',
    details: 'This application provides real-time stock market data visualization using WebSockets for live updates and the TradingView Charting Library for professional-grade charts.'
  },
]

const colors = [
  '#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#A633FF', 
  '#FFD633', '#33FFF5', '#FF8F33', '#B833FF', '#33FF8A',
  '#FF6F61', '#4B0082', '#32CD32', '#FF1493', '#00FFFF',
  '#FFD700', '#DC143C', '#8A2BE2', '#00FA9A', '#D2691E',
  '#FF4500', '#2E8B57', '#A52A2A', '#98FB98', '#20B2AA',
  '#FF6347', '#7FFF00', '#F08080', '#B0C4DE', '#7B68EE',
  '#6A5ACD', '#F0E68C', '#8B0000', '#40E0D0', '#9ACD32',
  '#FF99CC', '#9B30FF', '#FF8C00', '#4682B4', '#D3D3D3',
  '#8B4513', '#B22222', '#7F00FF', '#FF00FF', '#FFB6C1',
  '#E9967A', '#FFDAB9', '#F5DEB3', '#C71585', '#BDB76B',
  '#3CB371', '#DDA0DD', '#A9A9A9', '#DCB9F1', '#BCE0A1',
  '#DA70D6', '#20B2AA', '#A9D0F5', '#FFB3E6', '#80E0D0',
  '#F4A300', '#C7B1D2', '#A1C6E7', '#A97BC9', '#D9A5F4'
]

const fontFamilies = [
  'Arial, sans-serif', 'Courier New, monospace', 'Georgia, serif', 
  'Tahoma, sans-serif', 'Verdana, sans-serif', 'Times New Roman, serif'
]

export default function Projects() {
  const [colorIndex, setColorIndex] = useState(0)
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length)
    }, 1000) // Cycle every second

    return () => clearInterval(interval)
  }, [])

  const handleProjectClick = (project) => {
    setSelectedProject(project)
  }

  const handleCloseDetails = () => {
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-indigo-700">
          Projects
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {projects.map((project, projectIndex) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 hover:-translate-y-1 transition duration-300 ease-out cursor-pointer"
              style={{
                boxShadow: `0 4px 40px ${colors[(colorIndex + projectIndex) % colors.length]}`,
                borderRadius: '12px',
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 0 80px ${colors[(colorIndex + projectIndex) % colors.length]}`,
              }}
              onClick={() => handleProjectClick(project)}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-6">
                <motion.h3
                  className="text-2xl font-bold mb-3"
                  style={{ 
                    color: colors[(colorIndex + projectIndex) % colors.length],
                    fontFamily: 'Verdana, sans-serif',
                  }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="text-gray-700 mb-4 leading-relaxed"
                  style={{ 
                    color: colors[(colorIndex + projectIndex + 1) % colors.length],
                    fontFamily: 'Georgia, serif',
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.7 }}
                >
                  {project.description}
                </motion.p>
                <motion.div
                  className="flex flex-wrap gap-2 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="bg-indigo-100 text-xs font-semibold px-2.5 py-0.5 rounded shadow-sm"
                      style={{
                        color: colors[(colorIndex + techIndex) % colors.length],
                        fontFamily: fontFamilies[(techIndex + 2) % fontFamilies.length],
                      }}
                      whileHover={{ scale: 1.15, color: '#5A67D8' }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                <div className="flex justify-between">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700"
                    style={{
                      borderRadius: '50%',
                      boxShadow: `0 0 50px ${colors[(colorIndex + projectIndex) % colors.length]}`,
                      transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
                    }}
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      boxShadow: `0 0 100px ${colors[(colorIndex + projectIndex) % colors.length]}`,
                    }}
                  >
                    <GithubIcon size={24} />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-700"
                    style={{
                      borderRadius: '50%',
                      boxShadow: `0 0 50px ${colors[(colorIndex + projectIndex + 1) % colors.length]}`,
                      transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
                    }}
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      boxShadow: `0 0 100px ${colors[(colorIndex + projectIndex + 1) % colors.length]}`,
                    }}
                  >
                    <ExternalLink size={24} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-8 max-w-2xl w-full m-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 500 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold" style={{ color: colors[colorIndex] }}>
                      {selectedProject.title}
                    </h3>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleCloseDetails}
                      aria-label="Close details"
                    >
                      <X className="h-6 w-6" />
                    </Button>
                  </div>
                  <p className="text-gray-700 mb-4">{selectedProject.details}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={tech}
                        className="bg-indigo-100 text-xs font-semibold px-2.5 py-0.5 rounded"
                        style={{ color: colors[(colorIndex + index) % colors.length] }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <GithubIcon size={24} />
                    </a>
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:text-green-700"
                    >
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
