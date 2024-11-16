import React, { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Star, ThumbsUp, Share2, Heart, Copy, Twitter, Facebook, Linkedin, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  image: string
  color: string
  socialLinks: {
    twitter: string
    facebook: string
    linkedin: string
  }
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
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'Startup Founder',
    company: 'InnovateTech',
    content: "This developer's expertise in both frontend and backend technologies was crucial in bringing our startup's vision to life. Their work exceeded our expectations.",
    rating: 4,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    color: '#FFA07A',
    socialLinks: {
      twitter: 'https://twitter.com/mikejohnson',
      facebook: 'https://facebook.com/mikejohnson',
      linkedin: 'https://linkedin.com/in/mikejohnson',
    },
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
    socialLinks: {
      twitter: 'https://twitter.com/emilychen',
      facebook: 'https://facebook.com/emilychen',
      linkedin: 'https://linkedin.com/in/emilychen',
    },
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
    socialLinks: {
      twitter: 'https://twitter.com/alexrodriguez',
      facebook: 'https://facebook.com/alexrodriguez',
      linkedin: 'https://linkedin.com/in/alexrodriguez',
    },
  },
  {
    id: 6,
    name: 'Sarah Thompson',
    role: 'Marketing Manager',
    company: 'Brand Builders Inc.',
    content: "The developer's innovative approach to our marketing campaigns resulted in a significant increase in user engagement and conversion rates. Their work was truly transformative for our brand.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    color: '#E74C3C',
    socialLinks: {
      twitter: 'https://twitter.com/sarahthompson',
      facebook: 'https://facebook.com/sarahthompson',
      linkedin: 'https://linkedin.com/in/sarahthompson',
    },
  },
  {
    id: 7,
    name: 'David Lee',
    role: 'IT Director',
    company: 'TechSolutions Corp.',
    content: "The developer's deep understanding of cybersecurity principles helped us create a robust and secure platform. Their work significantly enhanced our data protection measures.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    color: '#2ECC71',
    socialLinks: {
      twitter: 'https://twitter.com/davidlee',
      facebook: 'https://facebook.com/davidlee',
      linkedin: 'https://linkedin.com/in/davidlee',
    },
  },
  {
    id: 8,
    name: 'Olivia Martinez',
    role: 'Product Owner',
    company: 'Agile Innovations LLC',
    content: "Working with this developer was a game-changer for our project. Their ability to adapt to our agile methodology and deliver high-quality code sprints after sprints was remarkable.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    color: '#F39C12',
    socialLinks: {
      twitter: 'https://twitter.com/oliviamartinez',
      facebook: 'https://facebook.com/oliviamartinez',
      linkedin: 'https://linkedin.com/in/oliviamartinez',
    },
  },
  {
    id: 9,
    name: 'Chris Anderson',
    role: 'CEO',
    company: 'FutureTech Enterprises',
    content: "The developer's forward-thinking approach and expertise in emerging technologies helped position our company at the forefront of innovation. Their contributions were invaluable to our success.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    color: '#8E44AD',
    socialLinks: {
      twitter: 'https://twitter.com/chrisanderson',
      facebook: 'https://facebook.com/chrisanderson',
      linkedin: 'https://linkedin.com/in/chrisanderson',
    },
  },
  {
    id: 10,
    name: 'Linda Wang',
    role: 'UI/UX Lead',
    company: 'DesignMasters Co.',
    content: "The developer's ability to bring our design concepts to life with pixel-perfect precision was truly impressive. Their attention to detail and commitment to user experience excellence set a new standard for our projects.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    color: '#1ABC9C',
    socialLinks: {
      twitter: 'https://twitter.com/lindawang',
      facebook: 'https://facebook.com/lindawang',
      linkedin: 'https://linkedin.com/in/lindawang',
    },
  },
  {
    id: 11,
    name: 'Robert Taylor',
    role: 'CIO',
    company: 'DataDriven Solutions',
    content: "The developer's expertise in big data and analytics helped us unlock valuable insights from our vast datasets. Their work has been instrumental in driving our data-driven decision-making processes.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    color: '#27AE60',
    socialLinks: {
      twitter: 'https://twitter.com/roberttaylor',
      facebook: 'https://facebook.com/roberttaylor',
      linkedin: 'https://linkedin.com/in/roberttaylor',
    },
  },
  {
    id: 12,
    name: 'Sophie Brown',
    role: 'Head of Innovation',
    company: 'NextGen Innovations',
    content: "Working with this developer was like having a crystal ball for tech trends. Their insights and implementations in AR and VR have put us years ahead of our competition.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    color: '#F1C40F',
    socialLinks: {
      twitter: 'https://twitter.com/sophiebrown',
      facebook: 'https://facebook.com/sophiebrown',
      linkedin: 'https://linkedin.com/in/sophiebrown',
    },
  },
  {
    id: 13,
    name: 'Daniel Kim',
    role: 'Lead Developer',
    company: 'CodeCraft Systems',
    content: "As a fellow developer, I can attest to the exceptional quality of work delivered. Their code is clean, well-documented, and highly scalable. It's always a pleasure to collaborate on projects.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    color: '#16A085',
    socialLinks: {
      twitter: 'https://twitter.com/danielkim',
      facebook: 'https://facebook.com/danielkim',
      linkedin: 'https://linkedin.com/in/danielkim',
    },
  },
  {
    id: 14,
    name: 'Emma Wilson',
    role: 'Digital Transformation Manager',
    company: 'Global Enterprises Inc.',
    content: "The developer's ability to understand our complex business processes and translate them into efficient digital solutions was remarkable. They've been a key driver in our digital transformation journey.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    color: '#E67E22',
    socialLinks: {
      twitter: 'https://twitter.com/emmawilson',
      facebook: 'https://facebook.com/emmawilson',
      linkedin: 'https://linkedin.com/in/emmawilson',
    },
  },
  {
    id: 15,
    name: 'Thomas Garcia',
    role: 'Cybersecurity Specialist',
    company: 'SecureNet Solutions',
    content: "I was impressed by the developer's commitment to security best practices. They not only delivered a high-performing application but also ensured it was fortified against potential threats.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    color: '#2980B9',
    socialLinks: {
      twitter: 'https://twitter.com/thomasgarcia',
      facebook: 'https://facebook.com/thomasgarcia',
      linkedin: 'https://linkedin.com/in/thomasgarcia',
    },
  },
  {
    id: 16,
    name: 'Natalie Wong',
    role: 'UX Research Lead',
    company: 'UserFirst Design',
    content: "The developer's user-centric approach aligned perfectly with our UX research findings. They skillfully implemented our recommendations, resulting in a product that truly resonates with our target audience.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    color: '#8E44AD',
    socialLinks: {
      twitter: 'https://twitter.com/nataliewong',
      facebook: 'https://facebook.com/nataliewong',
      linkedin: 'https://linkedin.com/in/nataliewong',
    },
  },
  {
    id: 17,
    name: 'Marcus Johnson',
    role: 'VP of Engineering',
    company: 'TechGiant Corp',
    content: "In my 20 years in the industry, I've rarely come across a developer with such a comprehensive skill set. From system architecture to frontend polish, their work consistently exceeded our expectations.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    color: '#D35400',
    socialLinks: {
      twitter: 'https://twitter.com/marcusjohnson',
      facebook: 'https://facebook.com/marcusjohnson',
      linkedin: 'https://linkedin.com/in/marcusjohnson',
    },
  },
  {
    id: 18,
    name: 'Rachel Foster',
    role: 'Blockchain Strategist',
    company: 'CryptoFuture Innovations',
    content: "The developer's grasp of blockchain technology and its practical applications was outstanding. They helped us navigate the complexities of implementing a decentralized solution with ease.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    color: '#27AE60',
    socialLinks: {
      twitter: 'https://twitter.com/rachelfoster',
      facebook: 'https://facebook.com/rachelfoster',
      linkedin: 'https://linkedin.com/in/rachelfoster',
    },
  },
  {
    id: 19,
    name: 'Hassan Ali',
    role: 'AI Research Director',
    company: 'Cognitive Systems Ltd',
    content: "Collaborating with this developer on our AI projects was a game-changer. Their deep understanding of machine learning algorithms and ability to implement them efficiently gave us a significant competitive edge.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    color: '#3498DB',
    socialLinks: {
      twitter: 'https://twitter.com/hassanali',
      facebook: 'https://facebook.com/hassanali',
      linkedin: 'https://linkedin.com/in/hassanali',
    },
  },
  {
    id: 20,
    name: 'Samantha Lee',
    role: 'Chief Innovation Officer',
    company: 'FutureTech Dynamics',
    content: "This developer's innovative thinking and technical prowess have been instrumental in bringing our most ambitious projects to life. They consistently deliver solutions that are ahead of the curve.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    color: '#9B59B6',
    socialLinks: {
      twitter: 'https://twitter.com/samanthalee',
      facebook: 'https://facebook.com/samanthalee',
      linkedin: 'https://linkedin.com/in/samanthalee',
    },
  },
];


const commentColors = [
  'bg-red-100', 'bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-purple-100',
  'bg-pink-100', 'bg-indigo-100', 'bg-teal-100', 'bg-orange-100', 'bg-cyan-100'
]

export default function Testimonial() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [likes, setLikes] = useState<{ [key: number]: number }>({})
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [isLiked, setIsLiked] = useState<{ [key: number]: boolean }>({})
  const [showShareOptions, setShowShareOptions] = useState(false)
  const [copiedMessage, setCopiedMessage] = useState('')
  const [comments, setComments] = useState<{ [key: number]: string[] }>({})
  const [newComment, setNewComment] = useState('')

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prevTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isAutoPlay) {
      interval = setInterval(nextTestimonial, 5000)
    }
    return () => clearInterval(interval)
  }, [isAutoPlay, nextTestimonial])

  const handleLike = useCallback((id: number) => {
    setLikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }))
    setIsLiked((prev) => ({ ...prev, [id]: true }))
    
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }, [])

  const handleShare = useCallback(() => {
    setShowShareOptions((prev) => !prev)
  }, [])

  const copyToClipboard = useCallback(() => {
    const currentTestimonialData = testimonials[currentTestimonial]
    if (currentTestimonialData) {
      const text = `${currentTestimonialData.content} - ${currentTestimonialData.name}, ${currentTestimonialData.role} at ${currentTestimonialData.company}`
      navigator.clipboard.writeText(text).then(() => {
        setCopiedMessage('Copied to clipboard!')
        setTimeout(() => setCopiedMessage(''), 2000)
      })
    }
  }, [currentTestimonial])

  const shareOnSocialMedia = useCallback((platform: string) => {
    const currentTestimonialData = testimonials[currentTestimonial]
    if (currentTestimonialData) {
      const text = `Check out this amazing testimonial from ${currentTestimonialData.name}!`
      const url = window.location.href
      let shareUrl = ''

      switch (platform) {
        case 'twitter':
          shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
          break
        case 'facebook':
          shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
          break
        case 'linkedin':
          shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`
          break
      }

      if (shareUrl) {
        window.open(shareUrl, '_blank')
      }
    }
  }, [currentTestimonial])

  const handleCommentSubmit = useCallback((id: number) => {
    if (newComment.trim()) {
      setComments((prev) => ({
        ...prev,
        [id]: [...(prev[id] || []), newComment.trim()]
      }))
      setNewComment('')
    }
  }, [newComment])

  if (testimonials.length === 0) {
    return <div className="text-center text-2xl text-gray-600">No testimonials available</div>
  }

  const currentTestimonialData = testimonials[currentTestimonial]

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
              className="rounded-lg p-8 shadow-2xl relative overflow-hidden"
              style={{ backgroundColor: currentTestimonialData.color }}
            >
              <div className="flex items-center mb-6">
                <motion.img
                  src={currentTestimonialData.image}
                  alt={currentTestimonialData.name}
                  className="w-20 h-20 rounded-full mr-4 object-cover border-4 border-white"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                />
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {currentTestimonialData.name}
                  </h3>
                  <p className="text-white opacity-75">
                    {currentTestimonialData.role} at {currentTestimonialData.company}
                  </p>
                  <div className="flex mt-2 space-x-2">
                    <a href={currentTestimonialData.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors duration-300">
                      <Twitter size={16} />
                    </a>
                    <a href={currentTestimonialData.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors duration-300">
                      <Facebook size={16} />
                    </a>
                    <a href={currentTestimonialData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors duration-300">
                      <Linkedin size={16} />
                    </a>
                  </div>
                </div>
              </div>
              <p className="text-white mb-6 text-lg italic">"{currentTestimonialData.content}"</p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={24}
                      className={index < currentTestimonialData.rating ? 'text-yellow-400' : 'text-gray-300'}
                      fill={index < currentTestimonialData.rating ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  <motion.button
                    onClick={() => handleLike(currentTestimonialData.id)}
                    className={`flex items-center space-x-1 ${
                      isLiked[currentTestimonialData.id] ? 'text-red-500' : 'text-white'
                    } hover:text-red-300 transition-colors duration-300`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart size={20} fill={isLiked[currentTestimonialData.id] ? 'currentColor' : 'none'} />
                    <span>{likes[currentTestimonialData.id] || 0}</span>
                  </motion.button>
                  <motion.button
                    onClick={handleShare}
                    className="text-white hover:text-blue-200 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Share2 size={20} />
                  </motion.button>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-semibold mb-2 text-white">Comments</h4>
                <div className="flex mb-4">
                  <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                    className="flex-grow border rounded-l px-2 py-1 text-gray-800 bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  />
                  <button
                    onClick={() => handleCommentSubmit(currentTestimonialData.id)}
                    className="bg-blue-500 text-white px-4 py-1 rounded-r hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-700"
                  >
                    <MessageCircle size={20} />
                  </button>
                </div>
                <ul className="space-y-2 max-h-40 overflow-y-auto">
                  {comments[currentTestimonialData.id]?.map((comment, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`${commentColors[index % commentColors.length]} p-2 rounded text-gray-800`}
                    >
                      {comment}
                    </motion.li>
                  ))}
                </ul>
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
                    className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
                  >
                    <Copy size={20} />
                  </motion.button>
                  <motion.button
                    onClick={() => shareOnSocialMedia('twitter')}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-blue-400 hover:text-blue-600 transition-colors duration-300"
                  >
                    <Twitter size={20} />
                  </motion.button>
                  <motion.button
                    onClick={() => shareOnSocialMedia('facebook')}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    <Facebook size={20} />
                  </motion.button>
                  <motion.button
                    onClick={() => shareOnSocialMedia('linkedin')}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-blue-700 hover:text-blue-900 transition-colors duration-300"
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
            </motion.div>
          </AnimatePresence>
          <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center pointer-events-none">
            <motion.button
              onClick={prevTestimonial}
              className="bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors duration-300 pointer-events-auto"
              whileHover={{ scale: 1.1, x: -5, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={24} className="text-blue-500" />
            </motion.button>
            <motion.button
              onClick={nextTestimonial}
              className="bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors duration-300 pointer-events-auto"
              whileHover={{ scale: 1.1, x: 5, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={24} className="text-blue-500" />
            </motion.button>
          </div>
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
  )
}
