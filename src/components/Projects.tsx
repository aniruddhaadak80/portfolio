import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GithubIcon } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AI-Powered Task Manager',
    description: 'A task management application with AI-driven prioritization and scheduling.',
    image: 'https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['React', 'Node.js', 'TensorFlow.js'],
    github: 'https://github.com/yourusername/ai-task-manager',
    live: 'https://ai-task-manager.example.com',
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['Vue.js', 'Django', 'PostgreSQL'],
    github: 'https://github.com/yourusername/ecommerce-platform',
    live: 'https://ecommerce-platform.example.com',
  },
  {
    id: 3,
    title: 'Blockchain Voting System',
    description: 'A secure and transparent voting system built on blockchain technology.',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['Solidity', 'Web3.js', 'React'],
    github: 'https://github.com/yourusername/blockchain-voting',
    live: 'https://blockchain-voting.example.com',
  },
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 5 }}
          transition={{ duration: 2, type: 'spring', stiffness: 100 }}
        >
          {projects.map(project => (
            <motion.div
              key={project.id}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
              onClick={() => setSelectedProject(project.id)}
              whileHover={{
                x: ["0%", "-15%", "15%", "0%"],  // Increased shake range
                scale: 1.05,  // Slight scale up for emphasis
                transition: { 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 20, 
                  duration: 0.6,  // Smoother and longer shake
                  ease: "easeInOut"  // Smooth easing for better effect
                }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span key={tech} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                    <GithubIcon size={24} />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-2xl w-full">
            <h3 className="text-2xl font-bold mb-4">{projects[selectedProject - 1].title}</h3>
            <p className="mb-4">{projects[selectedProject - 1].description}</p>
            <div className="flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
