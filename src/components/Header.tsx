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

  const menuItems = [
    { name: 'Home', icon: <Home size={18} />, color: 'text-red-500', hoverColor: 'hover:text-red-700' },
    { name: 'About', icon: <User size={18} />, color: 'text-yellow-500', hoverColor: 'hover:text-yellow-700' },
    { name: 'Skills', icon: <Settings size={18} />, color: 'text-green-500', hoverColor: 'hover:text-green-700' },
    { name: 'Projects', icon: <Folder size={18} />, color: 'text-blue-500', hoverColor: 'hover:text-blue-700' },
    { name: 'Blog', icon: <FileText size={18} />, color: 'text-indigo-500', hoverColor: 'hover:text-indigo-700' },
    { name: 'Contact', icon: <Mail size={18} />, color: 'text-purple-500', hoverColor: 'hover:text-purple-700' },
  ];

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
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.name.toLowerCase()}`}
              className={`flex items-center space-x-2 ${item.color} ${item.hoverColor} transition-colors duration-300`}
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
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                className={`flex items-center space-x-2 ${item.color} ${item.hoverColor} transition-colors duration-300`}
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
