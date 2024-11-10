import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const [currentColor, setCurrentColor] = useState<string>('#8a4af3');
  const [arrowColor, setArrowColor] = useState<string>('#8a4af3');
  const [titleColor, setTitleColor] = useState<string>('#8a4af3');
  const [subtitleColor, setSubtitleColor] = useState<string>('#8a4af3');
  const [isHovering, setIsHovering] = useState(false);

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

  const titleCursorIcons = ["👨🏼‍💻", "🧑🏻‍💻", "🧑‍💻", "🧑🏼‍💻", "👨🏻‍💻", "👨‍💻"];
  const subtitleCursorIcons = ["🔥", "🚀", "💻", "🖥️", "⚛️", "📂", "📝", "🌐", "🤖", "🦾", "👾", "🦿"];

  const getRandomCursor = (emojiSet: string[]) => emojiSet[Math.floor(Math.random() * emojiSet.length)];

  const getRandomColor = (excludeColor: string) => {
    let color;
    do {
      color = colors[Math.floor(Math.random() * colors.length)];
    } while (color === excludeColor);
    return color;
  };

  useEffect(() => {
    setTitleColor(getRandomColor('#8a4af3'));
    setSubtitleColor(getRandomColor('#8a4af3'));
    setCurrentColor(getRandomColor('#8a4af3'));
    setArrowColor(getRandomColor('#8a4af3'));

    const titleTyped = new Typed(titleRef.current, {
      strings: ['Aniruddha Adak'],
      typeSpeed: 90,
      backSpeed: 60,
      backDelay: 6000,
      loop: true,
      loopDelay: 10000,
      showCursor: false,
    });

    const subtitleTyped = new Typed(subtitleRef.current, {
      strings: ['🅰️ Full-Stack Developer |🤖 AI Enthusiast | 🅿️roblem Solver'],
      startDelay: 2000,
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 3000,
      loop: true,
      loopDelay: 10000,
      showCursor: false,
    });

    return () => {
      titleTyped.destroy();
      subtitleTyped.destroy();
    };
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      const titleCursorElement = document.querySelector('.title-cursor');
      const subtitleCursorElement = document.querySelector('.subtitle-cursor');

      const randomTitleCursor = getRandomCursor(titleCursorIcons);
      const randomSubtitleCursor = getRandomCursor(subtitleCursorIcons);

      if (titleCursorElement) {
        titleCursorElement.classList.add('fade-out');
        setTimeout(() => {
          titleCursorElement.innerHTML = randomTitleCursor;
          titleCursorElement.classList.remove('fade-out');
        }, 500);
      }

      if (subtitleCursorElement) {
        subtitleCursorElement.classList.add('fade-out');
        setTimeout(() => {
          subtitleCursorElement.innerHTML = randomSubtitleCursor;
          subtitleCursorElement.classList.remove('fade-out');
        }, 500);
      }

      setTitleColor(getRandomColor(titleColor));
      setSubtitleColor(getRandomColor(subtitleColor));
      setCurrentColor(getRandomColor(currentColor));
      setArrowColor(getRandomColor(arrowColor));
    }, 1000);

    return () => clearInterval(cursorInterval);
  }, [titleColor, subtitleColor, currentColor, arrowColor]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradientBG">
      <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: 'url("/path/to/your/image.jpg")' }}></div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 font-serif" style={{ color: titleColor }}>
          <span ref={titleRef} />
          <span className="title-cursor" />
        </h1>
        <p className="text-2xl md:text-2xl mb-8 font-sans" style={{ color: subtitleColor }}>
          <span ref={subtitleRef} />
          <span className="subtitle-cursor" />
        </p>

        <motion.a
          href="#projects"
          className="px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
          style={{
            backgroundColor: currentColor,
            boxShadow: `0 0 15px ${currentColor}`,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { type: 'spring', stiffness: 300, damping: 30, duration: 1 },
          }}
          whileHover={{
            scale: 1.1,
            opacity: 0.8,
            transition: { duration: 0.3 },
            boxShadow: `0 0 25px ${currentColor}`,
            backgroundColor: currentColor,
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          View My Work
        </motion.a>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        style={{ color: arrowColor }}
      >
        <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 8v20m0 0l8-8m-8 8l-8-8"
            stroke={arrowColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </section>
  );
};

export default Hero;

// CSS (Add the following styles to your global CSS file or use inline styles)
<style>
  .fade-out {
    opacity: 0;
    transition: opacity 0.5s ease-out;
  }
  .animate-gradientBG {
    animation: gradientBG 15s ease infinite;
  }
  @keyframes gradientBG {
    0% { background: linear-gradient(to right, #8a4af3, #fcd34d, #34d399); }
    50% { background: linear-gradient(to right, #ef4444, #10b981, #3b82f6); }
    100% { background: linear-gradient(to right, #6366f1, #e11d48, #9333ea); }
  }
</style>
