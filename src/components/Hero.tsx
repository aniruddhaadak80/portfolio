import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const [currentColor, setCurrentColor] = useState<string>('#8a4af3'); // Initial color for button
  const [arrowColor, setArrowColor] = useState<string>('#8a4af3'); // Initial color for arrow
  const [titleColor, setTitleColor] = useState<string>('#8a4af3'); // Initial color for title
  const [subtitleColor, setSubtitleColor] = useState<string>('#8a4af3'); // Initial color for subtitle
  const [isHovering, setIsHovering] = useState(false); // Track hover state

  // 120 colors array for button, arrow, title, and subtitle
  const colors = [
    '#8a4af3', '#fcd34d', '#34d399', '#ef4444', '#10b981', '#3b82f6',
    '#6366f1', '#e11d48', '#9333ea', '#14b8a6', '#ff4500', '#00bfff',
    '#ff6347', '#adff2f', '#7cfc00', '#1e90ff', '#ff1493', '#ff8c00',
    '#b22222', '#9acd32', '#ff76a2', '#20b2aa', '#ffd700', '#ba55d3',
    '#00ced1', '#ff00ff', '#ff8c00', '#e9967a', '#800080', '#00ff7f',
    '#ff1493', '#ff6347', '#ffff00', '#ff9e00', '#00ff00', '#b0e0e6',
    '#a52a2a', '#f0e68c', '#ff00ff', '#d2691e', '#ff6347', '#00fa9a',
    '#800000', '#ffb6c1', '#20b2aa', '#f0f8ff', '#adff2f', '#ff1493',
    '#ffd700', '#ff4500', '#ff8c00', '#90ee90', '#ffb6c1', '#ff7f50',
    '#9932cc', '#ff1493', '#da70d6', '#00ff7f', '#ff69b4', '#9370db',
    '#ff6347', '#7fff00', '#98fb98', '#ba55d3', '#32cd32', '#ff7f50',
    '#dda0dd', '#b22222', '#ffa07a', '#ff6347', '#c71585', '#ff6347',
    '#1e90ff', '#add8e6', '#3cb371', '#e0ffff', '#ff4500', '#ff6347',
    '#ff77ff', '#ff5c8d', '#f28500', '#ff33cc', '#9c00d4', '#6a5acd',
    '#ffcc00', '#ff3366', '#00bcd4', '#64ffda', '#f5b800', '#4caf50',
    '#ff2f92', '#ff9800', '#cc00ff', '#7c4dff', '#90a4ae'
  ];
  

  // Initialize Typed.js animations for title and subtitle
  useEffect(() => {
    const titleTyped = new Typed(titleRef.current, {
      strings: ['Aniruddha Adak'],
      typeSpeed: 90,
      backSpeed: 60,
      backDelay: 6000,  // Pause for 6 seconds after completing typing
      loop: true,
      loopDelay: 10000,
      showCursor: true,
      cursorChar: '👨‍💻',
    });

    const subtitleTyped = new Typed(subtitleRef.current, {
      strings: ['A Full-Stack Developer | AI Enthusiast | Problem Solver'],
      startDelay: 2000,
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 3000,  // Pause for 3 seconds after completing typing
      loop: true,
      loopDelay: 10000,
      showCursor: true,
      cursorChar: '|',
    });

    return () => {
      titleTyped.destroy();
      subtitleTyped.destroy();
    };
  }, []);

  // Function to get random color that is not the same as the last one
  const getRandomColor = (excludeColor: string) => {
    let color;
    do {
      color = colors[Math.floor(Math.random() * colors.length)];
    } while (color === excludeColor); // Ensure no same color in consecutive calls
    return color;
  };

  // Randomly change button, arrow, title, and subtitle color every 1 second
  useEffect(() => {
    if (!isHovering) {
      const colorInterval = setInterval(() => {
        const newButtonColor = getRandomColor(currentColor); // New color for button
        const newArrowColor = getRandomColor(arrowColor); // New color for arrow
        const newTitleColor = getRandomColor(titleColor); // New color for title
        const newSubtitleColor = getRandomColor(subtitleColor); // New color for subtitle

        setCurrentColor(newButtonColor); // Set new color for button
        setArrowColor(newArrowColor); // Set new color for arrow
        setTitleColor(newTitleColor); // Set new color for title
        setSubtitleColor(newSubtitleColor); // Set new color for subtitle
      }, 1000); // Change color every 1 second

      return () => clearInterval(colorInterval); // Cleanup interval on component unmount
    }
  }, [isHovering, currentColor, arrowColor, titleColor, subtitleColor]); // Dependencies for color change

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 font-serif" style={{ color: titleColor }}>
          <span ref={titleRef} />
        </h1>
        <p className="text-2xl md:text-2xl mb-8 font-sans" style={{ color: subtitleColor }}>
          <span ref={subtitleRef} />
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

      {/* Bouncing Arrow with Random Color Change */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        style={{ color: arrowColor }} // Apply the random color to the arrow
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4v16m8-8l-8 8-8-8" stroke="currentColor" strokeWidth="2" />
        </svg>
      </a>
    </section>
  );
};

export default Hero;
