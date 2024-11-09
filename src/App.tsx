import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Refs for sections
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  useEffect(() => {
    // GSAP animations for each section
    const sections = [
      heroRef.current,
      aboutRef.current,
      skillsRef.current,
      projectsRef.current,
      blogRef.current,
      testimonialsRef.current,
      servicesRef.current,
      contactRef.current,
    ];

    sections.forEach((section, index) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            delay: index * 0.2, // Adds a slight stagger effect
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
            },
          }
        );
      }
    });
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 text-gray-800">
      <Header />
      <main>
        <div ref={heroRef}>
          <Hero />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={blogRef}>
          <Blog />
        </div>
        <div ref={testimonialsRef}>
          <Testimonials />
        </div>
        <div ref={servicesRef}>
          <Services />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
