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
        {/* Spinner Container */}
        <div className="relative">
          {/* First Spinner with Bounce and Color Pulse */}
          <motion.div
            className="w-32 h-32 border-8 border-t-8 border-transparent rounded-full"
            style={{
              borderTopColor: '#FF7F50',
              borderRightColor: '#FFD700',
              borderBottomColor: '#32CD32',
              borderLeftColor: '#1E90FF',
            }}
            animate={{
              rotate: 360,
              y: ['0%', '-20%', '0%'],
              scale: [1, 1.3, 1],
              boxShadow: ['0px 0px 0px rgba(255, 255, 255, 0)', '0px 0px 15px rgba(255, 255, 255, 0.5)', '0px 0px 0px rgba(255, 255, 255, 0)'],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: 'easeInOut',
              times: [0, 0.5, 1],
            }}
          />
          {/* Second Spinner with Delayed Timing */}
          <motion.div
            className="w-24 h-24 border-8 border-t-8 border-transparent rounded-full absolute inset-0"
            style={{
              borderTopColor: '#FF6347',
              borderRightColor: '#ADFF2F',
              borderBottomColor: '#20B2AA',
              borderLeftColor: '#FF1493',
            }}
            animate={{
              rotate: -360,
              y: ['0%', '-30%', '0%'],
              scale: [1, 1.3, 1],
              boxShadow: ['0px 0px 0px rgba(255, 255, 255, 0)', '0px 0px 25px rgba(255, 255, 255, 0.7)', '0px 0px 0px rgba(255, 255, 255, 0)'],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              ease: 'easeInOut',
              times: [0, 0.5, 1],
            }}
          />
          
          {/* Loading Text with Gradient and Pulse Effect */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.8, 1, 0.8],
              background: ['linear-gradient(90deg, #ff007f, #ff9900)', 'linear-gradient(90deg, #ff9900, #ff007f)'],
            }}
            transition={{
              delay: 1.8,
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
