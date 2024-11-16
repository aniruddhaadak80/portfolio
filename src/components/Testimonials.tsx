'use client'

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Copy, Twitter, Facebook, Linkedin, ThumbsUp, ThumbsDown, MessageCircle } from 'lucide-react';
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
  animation: "float" | "shake" | "pulse";
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
    animation: "float"
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
    animation: "shake"
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
    animation: "pulse"
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
    animation: "float"
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
    animation: "shake"
  },
  {
    id: 6,
    name: 'Sophia Lee',
    role: 'Marketing Director',
    company: 'Innovative Brands Inc.',
    content: "The developer's ability to create engaging and interactive web experiences helped us achieve record-breaking engagement rates. Their work truly set us apart from our competitors.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    color: '#E74C3C',
    animation: "pulse"
  }
];

const cardVariants = {
  float: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  shake: {
    x: [0, -5, 5, -5, 5, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "reverse"
    }
  },
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [likes, setLikes] = useState<{ [key: number]: number }>({});
  const [dislikes, setDislikes] = useState<{ [key: number]: number }>({});
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isLiked, setIsLiked] = useState<{ [key: number]: boolean }>({});
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState('');
  const [comments, setComments] = useState<{ [key: number]: string[] }>({});
  const [newComment, setNewComment] = useState('');

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlay) {
      interval = setInterval(nextTestimonial, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, nextTestimonial]);

  const handleLike = useCallback((id: number) => {
    setLikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    setIsLiked((prev) => ({ ...prev, [id]: true }));
    
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  const handleDislike = useCallback((id: number) => {
    setDislikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  }, []);

  const handleShare = useCallback(() => {
    setShowShareOptions((prev) => !prev);
  }, []);

  const copyToClipboard = useCallback(() => {
    const text = `${testimonials[currentTestimonial].content} - ${testimonials[currentTestimonial].name}, ${testimonials[currentTestimonial].role} at ${testimonials[currentTestimonial].company}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopiedMessage('Copied to clipboard!');
      setTimeout(() => setCopiedMessage(''), 2000);
    });
  }, [currentTestimonial]);

  const shareOnSocialMedia = useCallback((platform: string) => {
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

    if (shareUrl) {
      window.open(shareUrl, '_blank');
    }
  }, [currentTestimonial]);

  const handleCommentSubmit = useCallback((id: number) => {
    if (newComment.trim()) {
      setComments((prev) => ({
        ...prev,
        [id]: [...(prev[id] || []), newComment.trim()]
      }));
      setNewComment('');
    }
  }, [newComment]);

  // Check if testimonials array is empty
  if (testimonials.length === 0) {
    return <div className="text-center text-white">No testimonials available.</div>;
  }

  // Ensure currentTestimonial is within bounds
  const safeCurrentTestimonial = currentTestimonial % testimonials.length;
  const testimonial = testimonials[safeCurrentTestimonial];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Client Testimonials
        </h2>
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={safeCurrentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg p-8 shadow-2xl relative overflow-hidden"
              variants={cardVariants}
              animate={testimonial.animation}
            >
              <div className="flex items-center mb-6">
                <motion.img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mr-4 object-cover border-4"
                  style={{ borderColor: testimonial.color }}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                />
                <div>
                  <h3 className="text-2xl font-semibold" style={{ color: testimonial.color }}>
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 text-lg italic">"{testimonial.content}"</p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={24}
                      className={index < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}
                      fill={index < testimonial.rating ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  <motion.button
                    onClick={() => handleLike(testimonial.id)}
                    className={`flex items-center space-x-1 ${
                      isLiked[testimonial.id] ? 'text-green-500' : 'text-gray-500'
                    } hover:text-green-600 transition-colors duration-300`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ThumbsUp size={20} />
                    <span>{likes[testimonial.id] || 0}</span>
                  </motion.button>
                  <motion.button
                    onClick={() => handleDislike(testimonial.id)}
                    className="flex items-center space-x-1 text-gray-500 hover:text-red-600 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ThumbsDown size={20} />
                    <span>{dislikes[testimonial.id] || 0}</span>
                  </motion.button>
                  <motion.button
                    onClick={handleShare}
                    className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Copy size={20} />
                  </motion.button>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-semibold mb-2">Comments</h4>
                <ul className="space-y-2 mb-4 max-h-40 overflow-y-auto">
                  {comments[testimonial.id]?.map((comment, index) => (
                    <li key={index} className="bg-gray-100 p-2 rounded">{comment}</li>
                  ))}
                </ul>
                <div className="flex">
                  <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                    className="flex-grow border rounded-l px-2 py-1"
                  />
                  <button
                    onClick={() => handleCommentSubmit(testimonial.id)}
                    className="bg-blue-500 text-white px-4 py-1 rounded-r hover:bg-blue-600 transition-colors duration-300"
                  >
                    <MessageCircle size={20} />
                  </button>
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
                    <Linkedin size={20} />
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
                style={{ background: `linear-gradient(45deg, ${testimonial.color}, transparent)` }}
              ></div>
            </motion.div>
          </AnimatePresence>
          <motion.button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors duration-300"
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors duration-300"
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
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
}
