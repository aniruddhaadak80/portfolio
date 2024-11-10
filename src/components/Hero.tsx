import React, { useEffect, useRef } from 'react';
import Vivus from 'vivus';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const arrowRef = useRef<SVGSVGElement>(null);
  const titleRef = useRef<SVGSVGElement>(null);
  const subtitleRef = useRef<SVGSVGElement>(null);

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

  useEffect(() => {
    if (arrowRef.current) {
      new Vivus(arrowRef.current, {
        type: 'oneByOne',
        duration: 100,
        animTimingFunction: Vivus.EASE,
      });
    }
    if (titleRef.current) {
      new Vivus(titleRef.current, {
        type: 'oneByOne',
        duration: 200,
        animTimingFunction: Vivus.EASE,
      });
    }
    if (subtitleRef.current) {
      new Vivus(subtitleRef.current, {
        type: 'oneByOne',
        duration: 150,
        animTimingFunction: Vivus.EASE,
      });
    }
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="relative z-10 text-center">
        <svg
          ref={titleRef}
          width="400"
          height="100"
          viewBox="0 0 400 100"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto mb-4"
        >
          <path
            d="M10,40 L390,40" // Replace with your actual SVG path for "Aniruddha Adak"
            stroke="#9F7AEA"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <svg
          ref={subtitleRef}
          width="400"
          height="50"
          viewBox="0 0 400 50"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto mb-8"
        >
          <path
            d="M10,20 L390,20" // Replace with actual SVG path for "Full-Stack Developer | AI Enthusiast | Problem Solver"
            stroke="#48BB78"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <a
          href="#projects"
          className="bg-pink-500 from-blue-500 to-purple-600 text-lime-400 px-8 py-3 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 animate-pulse"
        >
          View My Work
        </a>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <svg
          ref={arrowRef}
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path d="M12 4v16m8-8l-8 8-8-8" stroke="currentColor" strokeWidth="2" />
        </svg>
      </a>
    </section>
  );
};

export default Hero;
