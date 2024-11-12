import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Settings, Folder, FileText, Mail, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check for saved dark mode preference in local storage
    return localStorage.getItem('darkMode') === 'true';
  });

  const [hoveredItem, setHoveredItem] = useState<number | null>(null); // Track which menu item is being hovered

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Toggle dark mode on document
    document.documentElement.classList.toggle('dark', isDarkMode);
    // Save dark mode preference in localStorage
    localStorage.setItem('darkMode', String(isDarkMode));
  }, [isDarkMode]);

  const menuItems = [
  { name: 'Home', icon: <Home size={18} />, color: 'text-red-500', hoverColor: 'hover:text-red-700' },
  { name: 'About', icon: <User size={18} />, color: 'text-yellow-500', hoverColor: 'hover:text-yellow-700' },
  { name: 'Skills', icon: <Settings size={18} />, color: 'text-green-500', hoverColor: 'hover:text-green-700' },
  { name: 'Projects', icon: <Folder size={18} />, color: 'text-blue-500', hoverColor: 'hover:text-blue-700' },
  { name: 'Blog', icon: <FileText size={18} />, color: 'text-indigo-500', hoverColor: 'hover:text-indigo-700' },
  { name: 'Contact', icon: <Mail size={18} />, color: 'text-purple-500', hoverColor: 'hover:text-purple-700' },
  { name: 'InteractiveResume', icon: <FileText size={18} />, color: 'text-gray-500', hoverColor: 'hover:text-gray-700' } // New item
];


  const getRandomRotation = () => {
    return Math.floor(Math.random() * (20 - (-20) + 1)) + (-20); // Random rotation between -20deg and 20deg
  };

  const handleMouseEnter = (index: number) => {
    setHoveredItem(index); // Set hovered item to update its rotation
  };

  const handleMouseLeave = () => {
    setHoveredItem(null); // Reset the hovered item state
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
              className={`flex items-center space-x-2 ${item.color} ${item.hoverColor} transition-colors duration-300`}
              whileHover={{
                scale: 1.1,
                rotate: hoveredItem === index ? getRandomRotation() : 0, // Rotate only when hovered
                transition: { type: 'spring', stiffness: 200 },
              }}
              onMouseEnter={() => handleMouseEnter(index)} // Set index on hover
              onMouseLeave={handleMouseLeave} // Reset on mouse leave
            >
              {item.icon}
              <span>{item.name}</span>
            </motion.a>
          ))}
        </motion.nav>
        <div className="flex items-center space-x-4">
          <motion.button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 transition-all hover:bg-gray-300 dark:hover:bg-gray-500"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {isDarkMode ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-800" />
            )}
          </motion.button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-white dark:bg-gray-800 transition-all duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <nav className="flex flex-col items-center py-4 space-y-2">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                className={`flex items-center space-x-2 ${item.color} ${item.hoverColor} transition-colors duration-300`}
                whileHover={{
                  scale: 1.1,
                  rotate: hoveredItem === index ? getRandomRotation() : 0, // Rotate only when hovered
                  transition: { type: 'spring', stiffness: 200 },
                }}
                onMouseEnter={() => handleMouseEnter(index)} // Set index on hover
                onMouseLeave={handleMouseLeave} // Reset on mouse leave
              >
                {item.icon}
                <span>{item.name}</span>
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
