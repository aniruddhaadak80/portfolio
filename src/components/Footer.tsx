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

  // Different bounce directions for each icon
  const directionalBounce = {
    github: {
      animate: {
        y: [0, -5, 0],
        transition: { repeat: Infinity, repeatType: "mirror", duration: 1.2 },
      },
      hover: { y: -12 },
    },
    linkedin: {
      animate: {
        y: [0, 5, 0],
        transition: { repeat: Infinity, repeatType: "mirror", duration: 1.2 },
      },
      hover: { y: 12 },
    },
    twitter: {
      animate: {
        x: [0, -5, 0],
        transition: { repeat: Infinity, repeatType: "mirror", duration: 1.2 },
      },
      hover: { x: -12 },
    },
    instagram: {
      animate: {
        x: [0, 5, 0],
        transition: { repeat: Infinity, repeatType: "mirror", duration: 1.2 },
      },
      hover: { x: 12 },
    },
  };

  const iconStyles = [
    { static: "text-blue-500", hover: "hover:text-blue-300" },
    { static: "text-purple-500", hover: "hover:text-purple-300" },
    { static: "text-pink-500", hover: "hover:text-pink-300" },
    { static: "text-yellow-500", hover: "hover:text-yellow-300" },
  ];

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
            <h3 className="text-3xl font-extrabold mb-2 text-blue-500 hover:text-purple-400 transition-colors duration-300">
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
            <h4 className="text-xl font-semibold mb-4 text-purple-400 hover:text-blue-400 transition-colors duration-300">
              Quick Links
            </h4>
            <motion.ul className="space-y-3 text-lg" variants={containerVariants}>
              {['Home', 'About', 'Skills', 'Projects', 'Blog', 'Contact'].map((item, index) => (
                <motion.li
                  key={item}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className={`text-${['blue', 'purple', 'pink', 'yellow'][index % 4]}-500 transition-colors duration-300 hover:text-${['blue', 'purple', 'pink', 'yellow'][index % 4]}-300`}
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
            <h4 className="text-xl font-semibold mb-4 text-pink-400 hover:text-purple-300 transition-colors duration-300">
              Connect With Me
            </h4>
            <div className="flex space-x-6 mb-4">
              <motion.a
                href="https://github.com/aniruddhaadak80"
                target="_blank"
                rel="noopener noreferrer"
                {...directionalBounce.github}
                className={`transition-transform duration-300 ${iconStyles[0].static} ${iconStyles[0].hover}`}
                whileHover={directionalBounce.github.hover}
              >
                <GithubIcon size={28} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/aniruddha-adak/"
                target="_blank"
                rel="noopener noreferrer"
                {...directionalBounce.linkedin}
                className={`transition-transform duration-300 ${iconStyles[1].static} ${iconStyles[1].hover}`}
                whileHover={directionalBounce.linkedin.hover}
              >
                <LinkedinIcon size={28} />
              </motion.a>
              <motion.a
                href="https://x.com/skillful_mind"
                target="_blank"
                rel="noopener noreferrer"
                {...directionalBounce.twitter}
                className={`transition-transform duration-300 ${iconStyles[2].static} ${iconStyles[2].hover}`}
                whileHover={directionalBounce.twitter.hover}
              >
                <TwitterIcon size={28} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/skillful__mind/"
                target="_blank"
                rel="noopener noreferrer"
                {...directionalBounce.instagram}
                className={`transition-transform duration-300 ${iconStyles[3].static} ${iconStyles[3].hover}`}
                whileHover={directionalBounce.instagram.hover}
              >
                <InstagramIcon size={28} />
              </motion.a>
            </div>

            {/* Contact Info */}
            <div className="mt-4 space-y-3">
              <motion.a
                href="mailto:aniruddhaadak80@gmail.com"
                {...directionalBounce.github}
                className="flex items-center text-yellow-500 hover:text-yellow-300 transition-colors duration-300"
                whileHover={{ y: -12 }}
              >
                <Mail size={20} className="mr-2" />
                aniruddhaadak80@gmail.com
              </motion.a>
              <motion.a
                href="tel:+917029155691"
                {...directionalBounce.linkedin}
                className="flex items-center text-green-500 hover:text-green-300 transition-colors duration-300"
                whileHover={{ y: 12 }}
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
