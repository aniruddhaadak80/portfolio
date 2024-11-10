import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import anime from 'animejs/lib/anime.es.js'; // Import anime.js

const Hero: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Track theme state
  const titleRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null); // Reference to button

  useEffect(() => {
    // Check system theme preference and apply
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDarkMode);

    // Typed.js for Title and Subtitle
    const titleTyped = new Typed(titleRef.current, {
      strings: ['Aniruddha Adak'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 3000,  // Pause for 3 seconds after completing typing
      loop: true,
      loopDelay: 10000,
      showCursor: false,
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

    // Glowing and Sparkling animation for the button
    const animateButton = () => {
      anime({
        targets: buttonRef.current,
        scale: [1, 1.1, 1],  // Scaling effect (pulsing)
        duration: 2000,
        easing: 'easeInOutSine',
        loop: true,
        direction: 'alternate',
        opacity: [1, 0.7, 1], // Fade effect
        loopDelay: 2000,
        delay: 500,
      });

      // Glowing effect with a soft pulsating glow using box-shadow
      anime({
        targets: buttonRef.current,
        boxShadow: [
          { value: isDarkMode ? '0 0 15px rgba(255, 255, 255, 0.5)' : '0 0 15px rgba(0, 0, 0, 0.5)', duration: 1000 },
          { value: isDarkMode ? '0 0 30px rgba(0, 255, 255, 0.8)' : '0 0 30px rgba(255, 105, 180, 0.8)', duration: 1000 },
        ],
        easing: 'easeInOutQuad',
        loop: true,
        direction: 'alternate',
      });

      // Sparkling effect with circles around the button
      anime({
        targets: buttonRef.current,
        borderColor: isDarkMode ? ['#ff1493', '#ff6347', '#ff4500'] : ['#ff6347', '#ff1493', '#ff4500'], // Adjust border colors
        duration: 1500,
        loop: true,
        easing: 'linear',
        delay: 1000,
      });
    };

    animateButton(); // Trigger animation when component mounts

    return () => {
      titleTyped.destroy();
      subtitleTyped.destroy();
    };
  }, [isDarkMode]);

  return (
    <section id="home" className={`relative h-screen flex items-center justify-center overflow-hidden ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-purple-700 font-serif">
          <span ref={titleRef} />
        </h1>
        <p className="text-2xl md:text-2xl mb-8 text-emerald-300 font-sans">
          <span ref={subtitleRef} />
        </p>

        {/* View My Work Button with glowing and sparkling effect */}
        <a
          ref={buttonRef} // Attach the ref
          href="#projects"
          className={`bg-pink-500 from-blue-500 to-purple-600 text-lime-400 px-8 py-3 rounded-full text-lg font-semibold ${isDarkMode ? 'hover:from-blue-600 hover:to-purple-700' : 'hover:from-yellow-400 hover:to-yellow-600'}`}
        >
          View My Work
        </a>
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
