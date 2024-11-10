import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const [currentColor, setCurrentColor] = useState<string>('#8a4af3'); // Initial color for button
  const [arrowColor, setArrowColor] = useState<string>('#8a4af3'); // Initial color for arrow
  const [isHovering, setIsHovering] = useState(false); // Track hover state

  // 20 colors array for button and arrow
  const colors = [
    '#8a4af3', '#fcd34d', '#34d399', '#ef4444', '#10b981', '#3b82f6',
    '#6366f1', '#e11d48', '#9333ea', '#14b8a6', '#ff4500', '#00bfff',
    '#ff6347', '#adff2f', '#7cfc00', '#1e90ff', '#ff1493', '#ff8c00',
    '#b22222', '#9acd32'
  ];

  // Initialize Typed.js animations for title and subtitle
  useEffect(() => {
    const titleTyped = new Typed(titleRef.current, {
      strings: ['Aniruddha Adak'],
      typeSpeed: 50,
      backSpeed: 50,    // Adjusted backSpeed to make it smooth
      backDelay: 3000,  // Pause for 3 seconds after completing typing
      loop: false,  // Don't loop for the heading, it will repeat after the subtitle
      showCursor: false,
      onComplete: () => {
        // Start typing the subtitle after the title completes
        subtitleTyped.start();
      }
    });

    const subtitleTyped = new Typed(subtitleRef.current, {
      strings: ['A Full-Stack Developer | AI Enthusiast | Problem Solver'],
      startDelay: 500,  // Delay for the subtitle to start after heading
      typeSpeed: 40,   // Speed for typing subtitle
      backSpeed: 40,   // Adjusted backSpeed for subtitle to match the typing speed
      backDelay: 3000, // Pause for 3 seconds after completing typing
      loop: false,     // Don't loop for the subtitle
      showCursor: true,
      cursorChar: '|',
      onComplete: () => {
        // After subtitle completes, restart the heading
        setTimeout(() => {
          titleTyped.start();
        }, 3000);  // Pause for 3 seconds before restarting the heading
      }
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

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-purple-700 font-serif">
          <span ref={titleRef} />
        </h1>
        <p className="text-2xl md:text-2xl mb-8 text-emerald-300 font-sans">
          <span ref={subtitleRef} />
        </p>
      </div>

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
