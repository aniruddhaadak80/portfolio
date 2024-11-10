import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [currentColor, setCurrentColor] = useState<string>('#8a4af3'); // Initial color (dark mode default color)
  const [isHovering, setIsHovering] = useState(false); // Track hover state

  // Automatically change color every 2 seconds
  useEffect(() => {
    if (!isHovering) {
      const colors = ['#8a4af3', '#fcd34d', '#34d399', '#ef4444']; // Array of colors
      let index = 0;

      const colorInterval = setInterval(() => {
        setCurrentColor(colors[index]);
        index = (index + 1) % colors.length; // Cycle through colors
      }, 2000);

      return () => clearInterval(colorInterval); // Cleanup interval on component unmount
    }
  }, [isHovering]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-purple-700 font-serif">
          Aniruddha Adak
        </h1>
        <p className="text-2xl md:text-2xl mb-8 text-emerald-300 font-sans">
          A Full-Stack Developer | AI Enthusiast | Problem Solver
        </p>

        {/* View My Work Button with Continuous Color Change, Hover Effects, and Glowing Animation */}
        <motion.a
          href="#projects"
          className="px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
          style={{
            backgroundColor: currentColor,
            boxShadow: `0 0 15px ${currentColor}`, // Glowing effect based on the current color
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { type: 'spring', stiffness: 300, damping: 30, duration: 1 },
          }}
          whileHover={{
            scale: 1.1, // Scale up slightly on hover
            opacity: 0.8,
            transition: { duration: 0.3 },
            boxShadow: `0 0 25px ${currentColor}`, // Glowing effect on hover
            backgroundColor: currentColor, // Keep the same color on hover
          }}
          onMouseEnter={() => setIsHovering(true)} // Stop the automatic color change on hover
          onMouseLeave={() => setIsHovering(false)} // Resume color change after hover
        >
          View My Work
        </motion.a>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4v16m8-8l-8 8-8-8" stroke="currentColor" strokeWidth="2" />
        </svg>
      </a>
    </section>
  );
};

export default Hero;
