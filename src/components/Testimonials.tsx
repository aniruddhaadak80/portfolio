import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, ThumbsUp, Share2, Heart, Copy, Twitter, Facebook, Linkedin, MessageCircle } from 'lucide-react';
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
  socialLinks: {
    twitter: string;
    facebook: string;
    linkedin: string;
  };
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
    socialLinks: {
      twitter: 'https://twitter.com/johndoe',
      facebook: 'https://facebook.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
    },
  },
  // Additional testimonials with varied colors
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Product Manager',
    company: 'Digital Solutions Ltd.',
    content: "The attention to detail and problem-solving skills demonstrated by this developer were impressive. They delivered a high-quality product on time and within budget.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    color: '#4ECDC4',
    socialLinks: {
      twitter: 'https://twitter.com/janesmith',
      facebook: 'https://facebook.com/janesmith',
      linkedin: 'https://linkedin.com/in/janesmith',
    },
  },
  // More testimonials with unique background colors
];

const commentColors = [
  '#FF6B6B', '#4ECDC4', '#FFA07A', '#FFD700', '#ADFF2F',
  '#20B2AA', '#9370DB', '#FF4500', '#00CED1', '#DA70D6',
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [likes, setLikes] = useState<{ [key: number]: number }>({});
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
      origin: { y: 0.6 },
    });
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
        [id]: [...(prev[id] || []), newComment.trim()],
      }));
      setNewComment('');
    }
  }, [newComment]);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex items-center justify-center">
      {/* Navigation Buttons */}
      <button
        onClick={prevTestimonial}
        className="absolute left-10 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-all duration-300"
      >
        <ChevronLeft size={24} className="text-blue-500" />
      </button>
      <button
        onClick={nextTestimonial}
        className="absolute right-10 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-all duration-300"
      >
        <ChevronRight size={24} className="text-blue-500" />
      </button>

      <div className="container mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg p-8 shadow-2xl overflow-hidden"
          >
            <div className="flex items-center mb-6">
              <motion.img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-20 h-20 rounded-full object-cover border-4"
                style={{ borderColor: testimonials[currentTestimonial].color }}
              />
              <div className="ml-4">
                <h3 className="text-2xl font-bold">{testimonials[currentTestimonial].name}</h3>
                <p>{testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}</p>
                <div className="flex space-x-2 mt-2">
                  {/* Social Media Links */}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
