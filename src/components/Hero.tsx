import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import mojs from '@mojs/core';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const titleTyped = new Typed(titleRef.current, {
      strings: ['Aniruddha Adak'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      loopDelay: 10000,
      showCursor: false,
    });

    const subtitleTyped = new Typed(subtitleRef.current, {
      strings: ['A Full-Stack Developer | AI Enthusiast | Problem Solver'],
      startDelay: 2000,
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 2000,
      loop: true,
      loopDelay: 10000,
      showCursor: true,
      cursorChar: '|',
    });

    // Define Mo.js burst animation
    const burst = new mojs.Burst({
      parent: buttonRef.current,
      radius: { 0: 100 },
      count: 10,
      children: {
        shape: 'circle',
        radius: { 10: 0 },
        fill: { '#FD7924': '#7C4DFF' },
        duration: 800,
        easing: 'cubic.out',
      },
    });

    // Trigger burst animation on button click
    const handleClick = () => {
      burst.replay();
    };

    // Attach click event listener
    const button = buttonRef.current;
    if (button) {
      button.addEventListener('click', handleClick);
    }

    // Clean up Typed.js instances and event listener
    return () => {
      titleTyped.destroy();
      subtitleTyped.destroy();
      if (button) {
        button.removeEventListener('click', handleClick);
      }
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
        <button
          ref={buttonRef}
          className="bg-pink-500 from-blue-500 to-purple-600 text-lime-400 px-8 py-3 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 animate-pulse"
        >
          View My Work
        </button>
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
