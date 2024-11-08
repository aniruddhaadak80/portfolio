import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Settings, Folder, FileText, Mail, Sun, Moon } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white dark:bg-gray-800 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          MyPortfolio
        </a>
        <nav className="hidden md:flex space-x-6">
          {[
            { name: 'Home', icon: <Home size={18} /> },
            { name: 'About', icon: <User size={18} /> },
            { name: 'Skills', icon: <Settings size={18} /> },
            { name: 'Projects', icon: <Folder size={18} /> },
            { name: 'Blog', icon: <FileText size={18} /> },
            { name: 'Contact', icon: <Mail size={18} /> },
          ].map((item) => (
            <a
              key={item.name}
              href={`#${item.name.toLowerCase()}`}
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              {item.icon}
              <span>{item.name}</span>
            </a>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 transition-all hover:bg-gray-300 dark:hover:bg-gray-500"
          >
            {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-800" />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 transition-all duration-300">
          <nav className="flex flex-col items-center py-4 space-y-2">
            {[
              { name: 'Home', icon: <Home size={18} /> },
              { name: 'About', icon: <User size={18} /> },
              { name: 'Skills', icon: <Settings size={18} /> },
              { name: 'Projects', icon: <Folder size={18} /> },
              { name: 'Blog', icon: <FileText size={18} /> },
              { name: 'Contact', icon: <Mail size={18} /> },
            ].map((item) => (
              <a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
