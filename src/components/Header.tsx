import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Tool, Folder, FileText, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home', icon: <Home size={20} className="mr-2" /> },
    { name: 'About', href: '#about', icon: <User size={20} className="mr-2" /> },
    { name: 'Skills', href: '#skills', icon: <Tool size={20} className="mr-2" /> },
    { name: 'Projects', href: '#projects', icon: <Folder size={20} className="mr-2" /> },
    { name: 'Blog', href: '#blog', icon: <FileText size={20} className="mr-2" /> },
    { name: 'Contact', href: '#contact', icon: <Mail size={20} className="mr-2" /> },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md animate-slide-down' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-blue-600 hover:text-indigo-700 transition-colors duration-300">
          MyPortfolio
        </a>
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300 hover:scale-105"
            >
              {item.icon}
              {item.name}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700 hover:text-blue-600 transition-colors duration-300"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white animate-fade-in">
          <nav className="flex flex-col items-center py-4 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
