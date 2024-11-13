import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GithubIcon } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'SkillSphere : A Daily Productivity APP',
    description: 'A unified platform with 10 apps for enhancing well-being and productivity.',
    image: 'https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['Typescript', 'React.js', 'TailwindCSS'],
    github: 'https://github.com/aniruddhaadak80/SkillSphere',
    live: 'https://skilsphere.vercel.app',
  },
  {
    id: 2,
    title: 'MercatoLive : A E-commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['Next.js', 'Typescript', 'Javascript'],
    github: 'https://github.com/aniruddhaadak80/MercatoLive',
    live: 'https://mercato-live.vercel.app/',
  },
  {
    id: 3,
    title: 'Real-Time Stock Data Visualizer',
    description: 'A real-time stock data visualization application built with React, WebSockets, and the TradingView Charting Library.',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['React.js', 'WebSockets', 'TradingView Chart', 'Typescript'],
    github: 'https://github.com/aniruddhaadak80/real-time-stock-visualizer',
    live: 'https://real-time-stock-visualizer.vercel.app',
  },
];

const colors = [
  '#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#A633FF', 
  '#FFD633', '#33FFF5', '#FF8F33', '#B833FF', '#33FF8A'
];

const fontFamilies = [
  'Arial, sans-serif', 'Courier New, monospace', 'Georgia, serif', 
  'Tahoma, sans-serif', 'Verdana, sans-serif', 'Times New Roman, serif'
];

const getRandomColor = () => {
  const colorIndex = Math.floor(Math.random() * colors.length);
  return colors[colorIndex];
};

const Projects = () => {
  const [glowColors, setGlowColors] = useState<string[]>([]);

  useEffect(() => {
    // Generate random glow colors for each card
    const randomGlowColors = projects.map(() => getRandomColor());
    setGlowColors(randomGlowColors);
  }, []);

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
              className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 ease-out"
              style={{
                boxShadow: `0 4px 20px ${glowColors[projectIndex]}`, // Random default glow
                borderRadius: '12px',
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 0 30px ${glowColors[projectIndex]}`, // Increased glow intensity on hover
              }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-6">
                <motion.h3
                  className="text-2xl font-bold mb-3"
                  style={{ 
                    color: glowColors[projectIndex],
                    fontFamily: fontFamilies[projectIndex % fontFamilies.length]
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
                    color: glowColors[(projectIndex + 1) % glowColors.length],
                    fontFamily: fontFamilies[(projectIndex + 1) % fontFamilies.length]
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
                        color: glowColors[(projectIndex + techIndex) % glowColors.length],
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
                    whileHover={{
                      scale: 1.2,
                      rotate: 10,
                      color: '#4299E1',
                      transition: { type: 'spring', stiffness: 250 },
                    }}
                  >
                    <GithubIcon size={24} />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700"
                    whileHover={{
                      scale: 1.2,
                      rotate: -10,
                      color: '#4299E1',
                      transition: { type: 'spring', stiffness: 250 },
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
    </section>
  );
};

export default Projects;
