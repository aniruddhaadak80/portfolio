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
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        {/* Full-screen Circle Spinner */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Outer Circle */}
          <motion.div
            className="absolute w-[50vw] h-[50vw] border-8 border-t-8 border-transparent rounded-full"
            style={{
              borderTopColor: '#FF7F50',
              borderRightColor: '#FFD700',
              borderBottomColor: '#32CD32',
              borderLeftColor: '#1E90FF',
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.5, 1], // Expanding and contracting effect
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: 'easeInOut',
            }}
          />

          {/* Middle Circle */}
          <motion.div
            className="absolute w-[35vw] h-[35vw] border-8 border-t-8 border-transparent rounded-full"
            style={{
              borderTopColor: '#FF6347',
              borderRightColor: '#ADFF2F',
              borderBottomColor: '#20B2AA',
              borderLeftColor: '#FF1493',
            }}
            animate={{
              rotate: -360,
              scale: [1, 1.3, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              ease: 'easeInOut',
            }}
          />

          {/* Inner Circle */}
          <motion.div
            className="absolute w-[20vw] h-[20vw] border-8 border-t-8 border-transparent rounded-full"
            style={{
              borderTopColor: '#FF4500',
              borderRightColor: '#800080',
              borderBottomColor: '#9ACD32',
              borderLeftColor: '#4682B4',
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: 'easeInOut',
            }}
          />

          {/* Loading Text with Pulse and Gradient Animation */}
          <motion.div
            className="absolute text-white text-xl font-bold animate-pulse"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.8, 1, 0.8],
              background: ['linear-gradient(90deg, #ff007f, #ff9900)', 'linear-gradient(90deg, #ff9900, #ff007f)'],
            }}
            transition={{
              delay: 2,
              duration: 1.2,
              repeat: Infinity,
              repeatDelay: 0.4,
              ease: 'easeInOut',
            }}
          >
            <span className="text-transparent bg-clip-text">Loading...</span>
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
