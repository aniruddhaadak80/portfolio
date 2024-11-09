import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => setIsLoading(false), 3000); // Increase time for better viewing of animation
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        {/* Container for spinner and text */}
        <div className="relative">
          {/* Bouncing Framer Motion Spinner */}
          <motion.div
            className="w-32 h-32 border-8 border-t-8 border-transparent rounded-full"
            style={{
              borderTopColor: '#FF7F50',
              borderRightColor: '#FFD700',
              borderBottomColor: '#32CD32',
              borderLeftColor: '#1E90FF',
            }}
            animate={{
              rotate: 360, // Continuous spinning
              y: ['0%', '-20%', '0%'], // Bouncing effect
              scale: [1, 1.2, 1], // Scaling effect
              boxShadow: ['0px 0px 0px rgba(255, 255, 255, 0)', '0px 0px 15px rgba(255, 255, 255, 0.5)', '0px 0px 0px rgba(255, 255, 255, 0)'], // Subtle shadow
            }}
            transition={{
              repeat: Infinity, // Repeats indefinitely
              duration: 2, // Complete spin duration
              ease: 'easeInOut', // Smooth ease-in and ease-out for bounce and scale
              times: [0, 0.5, 1], // Bounce timing
            }}
          />
          
          {/* Text Overlay */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0], // Fade in, then out
              scale: [0.8, 1, 0.8], // Pulse effect for text
            }}
            transition={{
              delay: 1.8,
              duration: 1.2,
              repeat: Infinity,
              repeatDelay: 0.4,
              ease: 'easeInOut',
            }}
          >
            <span>Loading...</span>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 text-gray-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blog />
        <Testimonials />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
