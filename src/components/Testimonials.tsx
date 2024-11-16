import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, ThumbsUp, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
  color: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CTO',
    company: 'Tech Innovators Inc.',
    content: "Working with this developer was an absolute pleasure. Their expertise in full-stack development and AI integration brought our project to the next level.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    color: '#FF6B6B',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Product Manager',
    company: 'Digital Solutions Ltd.',
    content: "The attention to detail and problem-solving skills demonstrated by this developer were impressive. They delivered a high-quality product on time and within budget.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    color: '#4ECDC4',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'Startup Founder',
    company: 'InnovateTech',
    content: "This developer's expertise in both frontend and backend technologies was crucial in bringing our startup's vision to life. Their work exceeded our expectations.",
    rating: 4,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    color: '#FFA07A',
  },
  {
    id: 4,
    name: 'Emily Chen',
    role: 'UX Designer',
    company: 'Creative Minds Co.',
    content: "I was impressed by the developer's ability to translate our design concepts into a fully functional and visually appealing website. Their attention to detail in implementing responsive designs was outstanding.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    color: '#9B59B6',
  },
  {
    id: 5,
    name: 'Alex Rodriguez',
    role: 'E-commerce Director',
    company: 'Global Retail Solutions',
    content: "The developer's expertise in e-commerce platforms and payment integrations was invaluable. They helped us create a seamless online shopping experience that significantly boosted our sales.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    color: '#3498DB',
  },
];

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [likes, setLikes] = useState<{ [key: number]: number }>({});
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlay) {
      interval = setInterval(() => {
        nextTestimonial();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, currentTestimonial]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleLike = (id: number) => {
    setLikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleShare = () => {
    const text = `Check out this amazing testimonial from ${testimonials[currentTestimonial].name}!`;
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({ title: 'Testimonial', text, url });
    } else {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Client Testimonials
        </h2>
        <motion.div
          className="relative max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg p-8 shadow-2xl relative overflow-hidden"
            >
              <div className="flex items-center mb-6">
                <motion.img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full mr-4 object-cover border-4"
                  style={{ borderColor: testimonials[currentTestimonial].color }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div>
                  <h3 className="text-2xl font-semibold" style={{ color: testimonials[currentTestimonial].color }}>
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-gray-600">
                    {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 text-lg italic">"{testimonials[currentTestimonial].content}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={24}
                      className={index < testimonials[currentTestimonial].rating ? 'text-yellow-400' : 'text-gray-300'}
                      fill={index < testimonials[currentTestimonial].rating ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleLike(testimonials[currentTestimonial].id)}
                    className="flex items-center space-x-1 text-blue-500 hover:text-blue-600"
                  >
                    <ThumbsUp size={20} />
                    <span>{likes[testimonials[currentTestimonial].id] || 0}</span>
                  </button>
                  <button
                    onClick={handleShare}
                    className="text-green-500 hover:text-green-600"
                  >
                    <Share2 size={20} />
                  </button>
                </div>
              </div>
              <div
                className="absolute inset-0 bg-gradient-to-r opacity-10"
                style={{ background: `linear-gradient(45deg, ${testimonials[currentTestimonial].color}, transparent)` }}
              ></div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors duration-300"
          >
            <ChevronRight size={24} />
          </button>
        </motion.div>
        <div className="mt-8 text-center">
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={`px-4 py-2 rounded-full ${
              isAutoPlay ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'
            } text-white transition-colors duration-300`}
          >
            {isAutoPlay ? 'Pause Autoplay' : 'Resume Autoplay'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
