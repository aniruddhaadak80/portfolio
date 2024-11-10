import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Vivus from 'vivus';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
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

    // Vivus "oneByOne" animation for animating the SVG path on button
    new Vivus(buttonRef.current, {
      type: 'oneByOne', // Animation type "oneByOne" draws each path segment one after the other
      duration: 150, // Animation duration (in frames)
      animTimingFunction: Vivus.EASE_IN_OUT, // Timing function for the animation
      start: 'inViewport', // Start animation when SVG comes into viewport
    });

    return () => {
      // Cleanup Typed.js instances
      titleTyped.destroy();
      subtitleTyped.destroy();
    };
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-purple-700 font-serif">
          <span ref={titleRef} />
        </h1>
        <p className="text-2xl md:text-2xl mb-8 text-emerald-300 font-sans">
          <span ref={subtitleRef} />
        </p>

        {/* View My Work Button with Vivus SVG animation */}
        <a href="#projects" className="relative inline-block group">
          <svg
            ref={buttonRef}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 50"
            className="w-64 h-16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M10,25 Q50,5 100,25 T190,25"
              stroke="#ffffff"
              fill="transparent"
              strokeDasharray="500" // Set this to match the length of the path for a smooth animation
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-lime-400">
            View My Work
          </span>
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

      {/* CSS Styles */}
      <style jsx>{`
        .group {
          position: relative;
          display: inline-block;
          text-decoration: none;
          overflow: hidden;
        }

        .group svg {
          transition: all 0.3s ease;
        }

        .group span {
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default Hero;
