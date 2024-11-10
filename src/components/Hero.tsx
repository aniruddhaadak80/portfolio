import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import anime from 'animejs/lib/anime.es.js';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

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

    // Motion Path animation for "View My Work" Button
    const motionPathAnimation = anime({
      targets: buttonRef.current,
      translateX: [0, 300], // Move horizontally along the X-axis
      translateY: [0, 150], // Move vertically along the Y-axis
      duration: 2000,
      easing: 'easeInOutQuad',
      autoplay: false,
      loop: true,
      direction: 'alternate', // Move back and forth
    });

    // Hover animation to trigger motion path
    if (buttonRef.current) {
      buttonRef.current.addEventListener('mouseenter', () => {
        motionPathAnimation.play(); // Start moving along the path
      });
      buttonRef.current.addEventListener('mouseleave', () => {
        motionPathAnimation.reverse(); // Reverse back to the start
      });
    }

    // Button Click Animation (reset back to origin after path animation)
    const clickAnimation = anime({
      targets: buttonRef.current,
      translateX: [0, 300], // Path motion on click
      translateY: [0, 150], // Path motion on click
      scale: [1, 0.9], // Shrink the button
      duration: 500,
      easing: 'easeOutQuad',
      autoplay: false,
      complete: function () {
        // Reset to the original position after animation
        anime({
          targets: buttonRef.current,
          translateX: 0,
          translateY: 0,
          scale: 1,
          duration: 200,
          easing: 'easeInOutQuad',
        });
      },
    });

    if (buttonRef.current) {
      buttonRef.current.addEventListener('click', () => {
        clickAnimation.play(); // Play the click animation
      });
    }

    return () => {
      // Cleanup event listeners
      if (buttonRef.current) {
        buttonRef.current.removeEventListener('mouseenter', () => motionPathAnimation.play());
        buttonRef.current.removeEventListener('mouseleave', () => motionPathAnimation.reverse());
        buttonRef.current.removeEventListener('click', () => clickAnimation.play());
      }

      // Destroy Typed instances
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
        <a
          ref={buttonRef}
          href="#projects"
          className="bg-pink-500 from-blue-500 to-purple-600 text-lime-400 px-8 py-3 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
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
