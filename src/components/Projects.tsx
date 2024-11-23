import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, GithubIcon, Search, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'SkillSphere : A Daily Productivity APP',
    description: 'A unified platform with 10 apps for enhancing well-being and productivity.',
    image: 'https://tinyurl.com/23a53kr8',
    technologies: ['Typescript', 'React.js', 'TailwindCSS'],
    github: 'https://github.com/aniruddhaadak80/SkillSphere',
    live: 'https://skilsphere.vercel.app',
    level: 'Intermediate',
  },
  {
    id: 2,
    title: 'MercatoLive : An E-commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management.',
    image: 'https://tinyurl.com/2dasz8gr',
    technologies: ['Next.js', 'Typescript', 'Javascript'],
    github: 'https://github.com/aniruddhaadak80/MercatoLive',
    live: 'https://mercato-live.vercel.app/',
    level: 'Advanced',
  },
  {
    id: 3,
    title: 'Real-Time Stock Data Visualizer',
    description: 'A real-time stock data visualization application built with React, WebSockets, and the TradingView Charting Library.',
    image: 'https://tinyurl.com/254oy64x',
    technologies: ['React.js', 'WebSockets', 'TradingView Chart', 'Typescript'],
    github: 'https://github.com/aniruddhaadak80/real-time-stock-visualizer',
    live: 'https://real-time-stock-visualizer.vercel.app',
    level: 'Advanced',
  },
  {
    id: 4,
    title: '🚀 Folio-Motion: A Developer Portfolio Template',
    description: 'A stunning, interactive, and animation-rich developer portfolio built with the latest technologies , designed to showcase your skills, projects, and experience .',
    image: 'https://tinyurl.com/28bukjvl',
    technologies: ['Next.js', 'Framer Motion','ShadCN UI', 'Tailwind CSS', 'Typescript'],
    github: 'https://github.com/aniruddhaadak80/Folio-Motion',
    live: 'https://folio-motion.vercel.app',
    level: 'Intermediate',
  },
   {
    id: 5,
    title: 'VocalScribe : Where Your Voice Becomes Words',
    description: 'VocalScribe is a modern web application that provides real-time audio transcription with a beautiful and interactive user interface.',
    image: 'https://tinyurl.com/2d6pttx6',
    technologies: ['React.js', 'Assembly AI', 'Tailwind CSS', 'Typescript','Api'],
    github: 'https://github.com/AniruddhaAdak/VocalScribe',
    live: 'https://vocalscribe.vercel.app',
    level: 'Intermediate',
  },
   {
    id: 6,
    title: '🎤 VoiceMath ➕: Learn math through voice-based exercises',
    description: 'Using voice recognition, real-time speech-to-text, and speech synthesis, users can answer math questions',
    image: 'https://tinyurl.com/2d6pttx6',
    technologies: ['Next.js', 'Assembly AI', 'Typescript','Api','Gemini', 'OpenAi'],
    github: 'https://github.com/aniruddhaadak9/VoiceMath',
    live: 'https://voicemath.vercel.app',
    level: 'Advanced',
  },
];

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
];

const fontFamilies = [
  'Arial, sans-serif', 'Courier New, monospace', 'Georgia, serif', 
  'Tahoma, sans-serif', 'Verdana, sans-serif', 'Times New Roman, serif'
];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const LevelFilter = ({ levels, selectedLevel, onSelectLevel }) => {
  return (
    <motion.div 
      className="mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-bold mb-4 text-indigo-700">Filter by Level:</h3>
      <div className="flex flex-wrap gap-2">
        {levels.map((level, index) => (
          <motion.button
            key={level}
            className={`px-4 py-2 rounded-full ${
              selectedLevel === level
                ? 'text-white'
                : 'text-indigo-700 hover:bg-opacity-80'
            } transition-colors duration-200`}
            style={{
              backgroundColor: selectedLevel === level ? getRandomColor() : 'rgba(199, 210, 254, 0.5)',
            }}
            onClick={() => onSelectLevel(level)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {level}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

const SearchBar = ({ onSearch, onClear, searchTerm }) => {
  const [iconColor, setIconColor] = useState(getRandomColor());

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(e.target.value);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIconColor(getRandomColor());
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.form 
      onSubmit={(e) => e.preventDefault()}
      className="mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative">
        <input
          type="text"
          placeholder="Search by skills (e.g., React.js, TypeScript)"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full px-4 py-2 pr-20 rounded-full border-2 border-indigo-300 focus:outline-none focus:border-indigo-500 transition-colors duration-200"
        />
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center">
          {searchTerm && (
            <motion.button
              type="button"
              onClick={onClear}
              className="p-1 rounded-full mr-2 bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={16} />
            </motion.button>
          )}
          <motion.span
            className="p-1 rounded-full transition-colors duration-200"
            style={{ color: iconColor }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Search size={20} />
          </motion.span>
        </div>
      </div>
    </motion.form>
  );
};

const Projects = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000); // Cycle every second

    return () => clearInterval(interval);
  }, []);

  const normalizeSearchTerm = (term) => {
    return term.toLowerCase().replace(/[^a-z0-9]/g, '');
  };

  const filteredProjects = useMemo(() => {
    const normalizedSearchTerm = normalizeSearchTerm(searchTerm);
    return projects.filter(project => {
      const levelMatch = selectedLevel === 'All' || project.level === selectedLevel;
      const searchMatch = normalizedSearchTerm === '' || project.technologies.some(tech => 
        normalizeSearchTerm(tech).includes(normalizedSearchTerm)
      );
      return levelMatch && searchMatch;
    });
  }, [selectedLevel, searchTerm]);

  const levels = ['All', ...new Set(projects.map(project => project.level))];

  const handleClear = () => {
    setSearchTerm('');
    setSelectedLevel('All');
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-extrabold mb-12 text-center text-indigo-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <SearchBar onSearch={setSearchTerm} onClear={handleClear} searchTerm={searchTerm} />
        <LevelFilter
          levels={levels}
          selectedLevel={selectedLevel}
          onSelectLevel={setSelectedLevel}
        />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <AnimatePresence>
            {filteredProjects.slice(0, visibleProjects).map((project, projectIndex) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 hover:-translate-y-1 transition duration-300 ease-out"
                style={{
                  boxShadow: `0 4px 40px ${colors[(colorIndex + projectIndex) % colors.length]}`,
                  borderRadius: '12px',
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 0 80px ${colors[(colorIndex + projectIndex) % colors.length]}`,
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: projectIndex * 0.1 }}
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
                        className="text-xs font-semibold px-2.5 py-0.5 rounded shadow-sm"
                        style={{
                          backgroundColor: colors[(colorIndex + techIndex) % colors.length],
                          color: 'white',
                          fontFamily: fontFamilies[(techIndex + 2) % fontFamilies.length],
                        }}
                        whileHover={{ scale: 1.15 }}
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
          </AnimatePresence>
        </motion.div>
        {filteredProjects.length > visibleProjects && (
          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors duration-200"
              onClick={() => setVisibleProjects(prevVisible => prevVisible + 3)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See More
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
