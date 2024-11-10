import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import Typed from 'typed.js';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const [currentColor, setCurrentColor] = useState<string>('#8a4af3');
  const [arrowColor, setArrowColor] = useState<string>('#8a4af3');
  const [titleColor, setTitleColor] = useState<string>('#8a4af3');
  const [subtitleColor, setSubtitleColor] = useState<string>('#8a4af3');
  const [titleEmoji, setTitleEmoji] = useState<string>('👨🏼‍💻');
  const [subtitleEmoji, setSubtitleEmoji] = useState<string>('🚀');

  const colors = [
    '#8a4af3', '#fcd34d', '#34d399', '#ef4444', '#10b981', '#3b82f6',
    '#6366f1', '#e11d48', '#9333ea', '#14b8a6', '#ff4500', '#00bfff',
    '#ff6347', '#adff2f', '#7cfc00', '#1e90ff', '#ff1493', '#ff8c00',
    '#b22222', '#9acd32', '#ff76a2', '#20b2aa', '#ffd700', '#ba55d3',
    '#00ced1', '#ff00ff', '#ff8c00', '#e9967a', '#800080', '#00ff7f',
    '#ff1493', '#ff6347', '#ffff00', '#ff9e00', '#00ff00', '#b0e0e6',
    '#a52a2a', '#f0e68c', '#ff00ff', '#d2691e', '#ff6347', '#00fa9a',
    '#800000', '#ffb6c1', '#20b2aa', '#f0f8ff', '#adff2f', '#ff1493',
    '#ffd700', '#ff4500', '#ff6347', '#ff77ff', '#ff5c8d', '#f28500',
    '#ff33cc', '#9c00d4', '#6a5acd', '#ffcc00', '#ff3366', '#00bcd4',
    '#64ffda', '#f5b800', '#4caf50', '#ff2f92', '#ff9800', '#cc00ff',
    '#7c4dff', '#90a4ae'
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
    const titleTyped = new Typed(titleRef.current, {
      strings: ["ℹ️'m Aniruddha Adak"],
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
    const interval = setInterval(() => {
      setTitleColor(getRandomColor(titleColor));
      setSubtitleColor(getRandomColor(subtitleColor));
      setCurrentColor(getRandomColor(currentColor));
      setArrowColor(getRandomColor(arrowColor));

      setTitleEmoji(getRandomCursor(titleCursorIcons));
      setSubtitleEmoji(getRandomCursor(subtitleCursorIcons));
    }, 1000);

    return () => clearInterval(interval);
  }, [titleColor, subtitleColor, arrowColor, currentColor]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particles: { x: number; y: number; size: number; speedX: number; speedY: number; color: string }[] = [];
    const particleCount = 100;
    const colors = ['#4299E1', '#9F7AEA', '#ED64A6', '#48BB78', '#ECC94B'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 1,
        speedX: Math.random() * 3 - 1.5,
        speedY: Math.random() * 3 - 1.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="relative z-10 text-center">
        <h1
          className="text-5xl md:text-7xl font-bold mb-4 font-serif"
          style={{ color: titleColor }}
        >
          <span ref={titleRef} />
          <span>{titleEmoji}</span>
        </h1>
        <p
          className="text-xl md:text-2xl mb-8 font-sans"
          style={{ color: subtitleColor }}
        >
          <span ref={subtitleRef} />
          <span>{subtitleEmoji}</span>
        </p>

        <a
          href="#projects"
          className="bg-pink-500 text-lime-400 px-8 py-3 rounded-full text-lg font-verdana transition-all duration-300"
          style={{
            backgroundColor: currentColor,
            boxShadow: `0 0 15px ${currentColor}`,
          }}
        >
          View My Work
        </a>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        style={{ color: arrowColor }}
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
