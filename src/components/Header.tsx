import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Settings, Folder, FileText, Mail, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      
      const sections = ['home', 'about', 'skills', 'projects', 'blog', 'resume', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const menuItems = [
    { name: 'Home', icon: <Home size={18} />, color: 'text-red-500', hoverColor: 'hover:text-red-700' },
    { name: 'About', icon: <User size={18} />, color: 'text-yellow-500', hoverColor: 'hover:text-yellow-700' },
    { name: 'Skills', icon: <Settings size={18} />, color: 'text-green-500', hoverColor: 'hover:text-green-700' },
    { name: 'Projects', icon: <Folder size={18} />, color: 'text-blue-500', hoverColor: 'hover:text-blue-700' },
    { name: 'Blog', icon: <FileText size={18} />, color: 'text-indigo-500', hoverColor: 'hover:text-indigo-700' },
    { name: 'Resume', icon: <FileText size={18} />, color: 'text-rose-500', hoverColor: 'hover:text-rose-700' },
    { name: 'Contact', icon: <Mail size={18} />, color: 'text-purple-500', hoverColor: 'hover:text-purple-700' },
  ];

  const getRandomRotation = () => {
    return Math.floor(Math.random() * (20 - (-20) + 1)) + (-20);
  };

  const handleMouseEnter = (index: number) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white dark:bg-gray-800 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.a
          href="#"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          MyPortfolio
        </motion.a>
        <motion.nav
          className="hidden md:flex space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {menuItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={`#${item.name.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.name.toLowerCase());
              }}
              className={`flex items-center space-x-2 ${item.color} ${item.hoverColor} transition-colors duration-300 ${
                activeSection === item.name.toLowerCase() ? 'font-bold' : ''
              }`}
              whileHover={{
                scale: 1.1,
                rotate: hoveredItem === index ? getRandomRotation() : 0,
                transition: { type: 'spring', stiffness: 200 },
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {item.icon}
              <span>{item.name}</span>
            </motion.a>
          ))}
        </motion.nav>
        <div className="flex items-center space-x-4">
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 transition-all hover:bg-gray-300 dark:hover:bg-gray-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {isDarkMode ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-800" />
            )}
          </motion.button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-600 transition-all hover:bg-gray-300 dark:hover:bg-gray-500"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white dark:bg-gray-800 transition-all duration-300"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center py-4 space-y-2">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={`#${item.name.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.name.toLowerCase());
                  }}
                  className={`flex items-center space-x-2 ${item.color} ${item.hoverColor} transition-colors duration-300 ${
                    activeSection === item.name.toLowerCase() ? 'font-bold' : ''
                  }`}
                  whileHover={{
                    scale: 1.1,
                    rotate: hoveredItem === index ? getRandomRotation() : 0,
                    transition: { type: 'spring', stiffness: 200 },
                  }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
