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
import InteractiveResume from './components/InteractiveResume';


const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        {/* Full-screen Circle Spinner with Glowing Effect */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Outer Circle */}
          <motion.div
            className="absolute w-[80vw] h-[80vw] border-8 border-t-8 border-transparent rounded-full"
            style={{
              borderTopColor: '#FF7F50',
              borderRightColor: '#FFD700',
              borderBottomColor: '#32CD32',
              borderLeftColor: '#1E90FF',
              boxShadow: '0 0 20px #FF7F50, 0 0 30px #FFD700, 0 0 40px #32CD32, 0 0 50px #1E90FF',
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
            className="absolute w-[70vw] h-[70vw] border-8 border-t-8 border-transparent rounded-full"
            style={{
              borderTopColor: '#FF6347',
              borderRightColor: '#ADFF2F',
              borderBottomColor: '#20B2AA',
              borderLeftColor: '#FF1493',
              boxShadow: '0 0 15px #FF6347, 0 0 25px #ADFF2F, 0 0 35px #20B2AA, 0 0 45px #FF1493',
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
            className="absolute w-[60vw] h-[60vw] border-8 border-t-8 border-transparent rounded-full"
            style={{
              borderTopColor: '#FF4500',
              borderRightColor: '#800080',
              borderBottomColor: '#9ACD32',
              borderLeftColor: '#4682B4',
              boxShadow: '0 0 10px #FF4500, 0 0 20px #800080, 0 0 30px #9ACD32, 0 0 40px #4682B4',
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

          {/* Extra Inner Circle */}
          <motion.div
            className="absolute w-[50vw] h-[50vw] border-8 border-t-8 border-transparent rounded-full"
            style={{
              borderTopColor: '#32CD32',
              borderRightColor: '#00FFFF',
              borderBottomColor: '#8A2BE2',
              borderLeftColor: '#FF69B4',
              boxShadow: '0 0 5px #32CD32, 0 0 15px #00FFFF, 0 0 25px #8A2BE2, 0 0 35px #FF69B4',
            }}
            animate={{
              rotate: -360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.2,
              ease: 'easeInOut',
            }}
          />

          {/* Additional Circle */}
          <motion.div
            className="absolute w-[40vw] h-[40vw] border-8 border-t-8 border-transparent rounded-full"
            style={{
              borderTopColor: '#8A2BE2',
              borderRightColor: '#00BFFF',
              borderBottomColor: '#FF6347',
              borderLeftColor: '#FFD700',
              boxShadow: '0 0 10px #8A2BE2, 0 0 20px #00BFFF, 0 0 30px #FF6347, 0 0 40px #FFD700',
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.15, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.7,
              ease: 'easeInOut',
            }}
          />

          {/* Smaller Circle */}
          <motion.div
            className="absolute w-[30vw] h-[30vw] border-8 border-t-8 border-transparent rounded-full"
            style={{
              borderTopColor: '#FF69B4',
              borderRightColor: '#FFD700',
              borderBottomColor: '#8A2BE2',
              borderLeftColor: '#32CD32',
              boxShadow: '0 0 5px #FF69B4, 0 0 15px #FFD700, 0 0 25px #8A2BE2, 0 0 35px #32CD32',
            }}
            animate={{
              rotate: -360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.8,
              ease: 'easeInOut',
            }}
          />

          {/* Even Smaller Circle */}
          <motion.div
            className="absolute w-[20vw] h-[20vw] border-8 border-t-8 border-transparent rounded-full"
            style={{
              borderTopColor: '#00FFFF',
              borderRightColor: '#FF7F50',
              borderBottomColor: '#20B2AA',
              borderLeftColor: '#1E90FF',
              boxShadow: '0 0 10px #00FFFF, 0 0 20px #FF7F50, 0 0 30px #20B2AA, 0 0 40px #1E90FF',
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.05, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: 'easeInOut',
            }}
          />

          {/* New Circle 1 */}
          <motion.div
            className="absolute w-[10vw] h-[10vw] border-8 border-t-8 border-transparent rounded-full"
            style={{
              borderTopColor: '#8A2BE2',
              borderRightColor: '#FF6347',
              borderBottomColor: '#20B2AA',
              borderLeftColor: '#FFD700',
              boxShadow: '0 0 15px #8A2BE2, 0 0 25px #FF6347, 0 0 35px #20B2AA, 0 0 45px #FFD700',
            }}
            animate={{
              rotate: -360,
              scale: [1, 1.05, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 3.3,
              ease: 'easeInOut',
            }}
          />

          {/* New Circle 2 */}
          <motion.div
            className="absolute w-[12vw] h-[12vw] border-8 border-t-8 border-transparent rounded-full"
            style={{
              borderTopColor: '#FF7F50',
              borderRightColor: '#FF6347',
              borderBottomColor: '#ADFF2F',
              borderLeftColor: '#FFD700',
              boxShadow: '0 0 10px #FF7F50, 0 0 20px #FF6347, 0 0 30px #ADFF2F, 0 0 40px #FFD700',
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 3.5,
              ease: 'easeInOut',
            }}
          />

          {/* New Circle 3 */}
          <motion.div
            className="absolute w-[15vw] h-[15vw] border-8 border-t-8 border-transparent rounded-full"
            style={{
              borderTopColor: '#32CD32',
              borderRightColor: '#20B2AA',
              borderBottomColor: '#FF69B4',
              borderLeftColor: '#1E90FF',
              boxShadow: '0 0 5px #32CD32, 0 0 10px #20B2AA, 0 0 15px #FF69B4, 0 0 20px #1E90FF',
            }}
            animate={{
              rotate: -360,
              scale: [1, 1.05, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 3.8,
              ease: 'easeInOut',
            }}
          />
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
        <InteractiveResume/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
