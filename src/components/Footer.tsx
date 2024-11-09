import React from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  const iconHoverColors = ["text-blue-400", "text-purple-400", "text-pink-400", "text-yellow-400"];
  const quickLinkHoverColors = ["text-blue-300", "text-purple-300", "text-pink-300", "text-yellow-300"];

  return (
    <motion.footer
      className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">

          {/* Name and Title */}
          <motion.div
            className="w-full md:w-1/3 mb-6 md:mb-0"
            variants={itemVariants}
          >
            <h3 className="text-3xl font-extrabold mb-2 hover:text-purple-400 transition-colors duration-300">
              ANIRUDDHA ADAK
            </h3>
            <p className="text-gray-300 hover:text-pink-300 transition-colors duration-300 text-lg">
              Full Stack Developer & AI Enthusiast
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="w-full md:w-1/3 mb-6 md:mb-0"
            variants={itemVariants}
          >
            <h4 className="text-xl font-semibold mb-4 text-gray-200 hover:text-blue-400 transition-colors duration-300">
              Quick Links
            </h4>
            <motion.ul className="space-y-3 text-lg" variants={containerVariants}>
              {['Home', 'About', 'Skills', 'Projects', 'Blog', 'Contact'].map((item, index) => (
                <motion.li
                  key={item}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className={`${quickLinkHoverColors[index % quickLinkHoverColors.length]} transition-colors duration-300`}
                >
                  <a href={`#${item.toLowerCase()}`}>
                    {item}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            className="w-full md:w-1/3"
            variants={itemVariants}
          >
            <h4 className="text-xl font-semibold mb-4 text-gray-200 hover:text-purple-300 transition-colors duration-300">
              Connect With Me
            </h4>
            <div className="flex space-x-6 mb-4">
              {[
                { href: 'https://github.com/aniruddhaadak80', icon: GithubIcon },
                { href: 'https://www.linkedin.com/in/aniruddha-adak/', icon: LinkedinIcon },
                { href: 'https://x.com/skillful_mind', icon: TwitterIcon },
                { href: 'https://www.instagram.com/skillful__mind/', icon: InstagramIcon },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className={`${iconHoverColors[index % iconHoverColors.length]} transition-transform duration-300`}
                >
                  <item.icon size={28} />
                </motion.a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-4 space-y-3">
              <motion.a
                href="mailto:aniruddhaadak80@gmail.com"
                className="flex items-center hover:text-yellow-400 transition-colors duration-300"
              >
                <Mail size={20} className="mr-2" />
                aniruddhaadak80@gmail.com
              </motion.a>
              <motion.a
                href="tel:+917029155691"
                className="flex items-center hover:text-green-400 transition-colors duration-300"
              >
                <Phone size={20} className="mr-2" />
                +91 7029155691
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-8 text-center text-gray-400 hover:text-pink-300 transition-colors duration-300"
          variants={itemVariants}
        >
          <p>
            &copy; {new Date().getFullYear()} ANIRUDDHA ADAK. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
