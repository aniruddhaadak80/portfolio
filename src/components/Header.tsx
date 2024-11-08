import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Settings, Folder, FileText, Mail } from 'lucide-react';

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

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-blue-600">MyPortfolio</a>
        <nav className="hidden md:flex space-x-6">
          {['Home', 'About', 'Skills', 'Projects', 'Blog', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-700 hover:text-blue-600 transition-colors duration-300">{item}</a>
          ))}
        </nav>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <nav className="flex flex-col items-center py-4">
            {['Home', 'About', 'Skills', 'Projects', 'Blog', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300">{item}</a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
