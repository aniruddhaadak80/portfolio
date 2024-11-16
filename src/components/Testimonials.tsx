'use client'

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Copy, Twitter, Facebook, Linkedin, ThumbsUp, ThumbsDown, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

// ... (keep the Testimonial interface and testimonials array as they were)

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

  // ... (keep all the handler functions as they were)

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Client Testimonials
        </h2>
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg p-8 shadow-2xl relative overflow-hidden"
              variants={cardVariants}
              animate={testimonials[currentTestimonial].animation}
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
              <div className="flex items-center justify-between mb-4">
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
                      isLiked[testimonials[currentTestimonial].id] ? 'text-green-500' : 'text-gray-500'
                    } hover:text-green-600 transition-colors duration-300`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ThumbsUp size={20} />
                    <span>{likes[testimonials[currentTestimonial].id] || 0}</span>
                  </motion.button>
                  <motion.button
                    onClick={() => handleDislike(testimonials[currentTestimonial].id)}
                    className="flex items-center space-x-1 text-gray-500 hover:text-red-600 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ThumbsDown size={20} />
                    <span>{dislikes[testimonials[currentTestimonial].id] || 0}</span>
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
                  {comments[testimonials[currentTestimonial].id]?.map((comment, index) => (
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
                    onClick={() => handleCommentSubmit(testimonials[currentTestimonial].id)}
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
                style={{ background: `linear-gradient(45deg, ${testimonials[currentTestimonial].color}, transparent)` }}
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
