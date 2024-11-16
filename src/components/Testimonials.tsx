import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, ThumbsUp, Share2, Heart, Copy, Twitter, Facebook, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

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
  const [isLiked, setIsLiked] = useState<{ [key: number]: boolean }>({});
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState('');

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
    setIsLiked((prev) => ({ ...prev, [id]: true }));
    
    // Trigger confetti effect
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleShare = () => {
    setShowShareOptions(!showShareOptions);
  };

  const copyToClipboard = () => {
    const text = `${testimonials[currentTestimonial].content} - ${testimonials[currentTestimonial].name}, ${testimonials[currentTestimonial].role} at ${testimonials[currentTestimonial].company}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopiedMessage('Copied to clipboard!');
      setTimeout(() => setCopiedMessage(''), 2000);
    });
  };

  const shareOnSocialMedia = (platform: string) => {
    const text = `Check out this amazing testimonial from ${testimonials[currentTestimonial].name}!`;
    const url = window.location.href;
    let shareUrl = '';

    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`;
        break;
    }

    window.open(shareUrl, '_blank');
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
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
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
                  <motion.button
                    onClick={() => handleLike(testimonials[currentTestimonial].id)}
                    className={`flex items-center space-x-1 ${
                      isLiked[testimonials[currentTestimonial].id] ? 'text-red-500' : 'text-gray-500'
                    } hover:text-red-600 transition-colors duration-300`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart size={20} fill={isLiked[testimonials[currentTestimonial].id] ? 'currentColor' : 'none'} />
                    <span>{likes[testimonials[currentTestimonial].id] || 0}</span>
                  </motion.button>
                  <motion.button
                    onClick={handleShare}
                    className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Share2 size={20} />
                  </motion.button>
                </div>
              </div>
              {showShareOptions && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute bottom-0 left-0 right-0 bg-white p-4 rounded-b-lg shadow-lg flex justify-around items-center"
                >
                  <motion.button
                    onClick={copyToClipboard}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    <Copy size={20} />
                  </motion.button>
                  <motion.button
                    onClick={() => shareOnSocialMedia('twitter')}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-blue-400 hover:text-blue-600"
                  >
                    <Twitter size={20} />
                  </motion.button>
                  <motion.button
                    onClick={() => shareOnSocialMedia('facebook')}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Facebook size={20} />
                  </motion.button>
                  <motion.button
                    onClick={() => shareOnSocialMedia('linkedin')}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-blue-700 hover:text-blue-900"
                  >
                    <LinkedIn size={20} />
                  </motion.button>
                </motion.div>
              )}
              {copiedMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute top-0 left-0 right-0 bg-green-500 text-white p-2 text-center"
                >
                  {copiedMessage}
                </motion.div>
              )}
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
