import React from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Name and Title */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-3xl font-extrabold mb-2 hover:text-blue-400 transition-colors duration-300 animate-pulse">
              ANIRUDDHA ADAK
            </h3>
            <p className="text-gray-300 hover:text-white transition-colors duration-300 text-lg">
              Full Stack Developer & AI Enthusiast
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-xl font-semibold mb-4 text-gray-200 hover:text-blue-400 transition-colors duration-300">
              Quick Links
            </h4>
            <ul className="space-y-3 text-lg">
              {['Home', 'About', 'Skills', 'Projects', 'Blog', 'Contact'].map((item, index) => (
                <li
                  key={item}
                  className="transform hover:translate-x-2 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="w-full md:w-1/3">
            <h4 className="text-xl font-semibold mb-4 text-gray-200 hover:text-blue-400 transition-colors duration-300">
              Connect With Me
            </h4>
            <div className="flex space-x-6 mb-4">
              <a
                href="https://github.com/aniruddhaadak80"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-transform transform hover:scale-125 duration-300"
              >
                <GithubIcon size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/aniruddha-adak/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-transform transform hover:scale-125 duration-300"
              >
                <LinkedinIcon size={28} />
              </a>
              <a
                href="https://x.com/skillful_mind"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-transform transform hover:scale-125 duration-300"
              >
                <TwitterIcon size={28} />
              </a>
              <a
                href="https://www.instagram.com/skillful__mind/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-transform transform hover:scale-125 duration-300"
              >
                <InstagramIcon size={28} />
              </a>
            </div>

            {/* Contact Info */}
            <div className="mt-4 space-y-3">
              <a
                href="mailto:aniruddhaadak80@gmail.com"
                className="flex items-center hover:text-blue-400 transition-colors duration-300 group"
              >
                <Mail size={20} className="mr-2 group-hover:animate-bounce" />
                aniruddhaadak80@gmail.com
              </a>
              <a
                href="tel:+917029155691"
                className="flex items-center hover:text-blue-400 transition-colors duration-300 group"
              >
                <Phone size={20} className="mr-2 group-hover:animate-bounce" />
                +91 7029155691
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-400 hover:text-white transition-colors duration-300">
          <p>
            &copy; {new Date().getFullYear()} ANIRUDDHA ADAK. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
