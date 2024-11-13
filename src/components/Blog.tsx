import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  // AI-related Posts
  {
    id: 1,
    title: 'Understanding Artificial Intelligence in Web Development',
    excerpt: 'Explore how AI is revolutionizing web development and improving user experiences.',
    date: '2023-11-01',
    image: 'https://tinyurl.com/2bqqdjdw',
    tags: ['AI']
  },
  {
    id: 2,
    title: 'AI Tools Every Web Developer Should Know About',
    excerpt: 'Learn about AI-powered tools that can make web development more efficient.',
    date: '2023-11-02',
    image: 'https://tinyurl.com/26vsn2f3',
    tags: ['AI']
  },

  // Web Development-related Posts
  {
    id: 3,
    title: 'Building Web Applications with Node.js and Express',
    excerpt: 'A comprehensive guide to building scalable web applications using Node.js and Express.',
    date: '2023-11-10',
    image: 'https://tinyurl.com/28jmqo27',
    tags: ['Web Development']
  },
  {
    id: 4,
    title: 'Best Practices for Frontend and Backend Integration',
    excerpt: 'Learn best practices for smoothly integrating frontend and backend code in web applications.',
    date: '2023-11-11',
    image: 'https://tinyurl.com/27flsgab',
    tags: ['Web Development']
  },

  // API-related Posts
  {
    id: 5,
    title: 'API Rate Limiting: What You Need to Know',
    excerpt: 'A guide to implementing rate limiting in your API to prevent abuse and maintain performance.',
    date: '2023-11-15',
    image: 'https://tinyurl.com/23h3uvrt',
    tags: ['API']
  },
  {
    id: 6,
    title: 'Understanding RESTful API Design Principles',
    excerpt: 'Learn the core principles of designing RESTful APIs for scalability and ease of use.',
    date: '2023-11-16',
    image: 'https://tinyurl.com/2auswzvn',
    tags: ['API']
  },

  // Backend-related Posts
  {
    id: 7,
    title: 'Building a Secure Backend with Node.js and JWT',
    excerpt: 'A step-by-step guide to creating a secure backend API using Node.js and JSON Web Tokens.',
    date: '2023-11-20',
    image: 'https://tinyurl.com/2ycpgm5r',
    tags: ['Backend']
  },
  {
    id: 8,
    title: 'Efficient Data Handling in Backend Systems',
    excerpt: 'Learn techniques for efficiently managing and processing data in your backend system.',
    date: '2023-11-21',
    image: 'https://tinyurl.com/22m4dbwo',
    tags: ['Backend']
  },

  // Cloud Computing-related Posts
  {
    id: 9,
    title: 'Intro to Cloud Computing and Its Benefits',
    excerpt: 'An introduction to cloud computing and how it is transforming modern businesses.',
    date: '2023-11-25',
    image: 'https://tinyurl.com/23ubv94k',
    tags: ['Cloud Computing']
  },
  {
    id: 10,
    title: 'Choosing the Right Cloud Service Provider',
    excerpt: 'How to evaluate and choose the best cloud service provider for your project needs.',
    date: '2023-11-26',
    image: 'https://tinyurl.com/24tlx6uz',
    tags: ['Cloud Computing']
  },

  // Databases-related Posts
  {
    id: 11,
    title: 'NoSQL vs SQL Databases: Which One to Choose?',
    excerpt: 'Understand the difference between NoSQL and SQL databases, and when to use each.',
    date: '2023-11-30',
    image: 'https://tinyurl.com/2do6o2ta',
    tags: ['Databases']
  },
  {
    id: 12,
    title: 'Optimizing Database Performance for Large Applications',
    excerpt: 'Techniques for improving database performance in applications with high traffic.',
    date: '2023-12-01',
    image: 'https://tinyurl.com/2b84fbbg',
    tags: ['Databases']
  }
];

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>(blogPosts);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [visiblePosts, setVisiblePosts] = useState<BlogPost[]>(blogPosts.slice(0, 3)); // Initially show first 3 posts
  const [color, setColor] = useState<number>(0);

  // Effect hook to filter posts based on the selected tag
  useEffect(() => {
    if (selectedTag) {
      const filteredPosts = blogPosts.filter(post => post.tags.includes(selectedTag));
      setPosts(filteredPosts);
    } else {
      setPosts(blogPosts);
    }
    setVisiblePosts(posts.slice(0, 3));
  }, [selectedTag, posts]);

  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

  // Show more posts when the button is clicked
  const showMorePosts = () => {
    setVisiblePosts(posts.slice(0, visiblePosts.length + 3));
  };

  // Handle color change every 2 seconds
  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColor(prev => (prev + 1) % 3); // Change between 3 colors for demonstration
    }, 2000);
    
    return () => clearInterval(colorInterval); // Clean up on unmount
  }, []);

  const buttonColors = ['bg-blue-500', 'bg-green-500', 'bg-red-500'];
  const textColor = ['text-blue-600', 'text-green-600', 'text-red-600'];

  return (
    <section id="blog" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Blog</h2>
        <div className="flex flex-wrap justify-center mb-8">
          {/* "All" button */}
          <motion.button
            onClick={() => setSelectedTag(null)}
            className={`m-2 px-4 py-2 rounded-full ${selectedTag === null ? buttonColors[color] : 'bg-white text-blue-500 border-2 border-blue-500'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            All
          </motion.button>
          {/* Buttons for each tag */}
          {allTags.map(tag => (
            <motion.button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`m-2 px-4 py-2 rounded-full ${selectedTag === tag ? 'bg-blue-500 text-white' : buttonColors[color]}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {tag}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visiblePosts.map(post => (
            <motion.div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
              initial={{ opacity: 0, rotateY: -180 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 1, type: 'spring', stiffness: 100 }}
              whileHover={{
                scale: 1.05,
                rotateX: 10,
                rotateY: 10,
                transition: { duration: 0.3 },
              }}
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 text-gray-800 hover:${textColor[color]} transition-colors duration-300 glow`}>
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <div className={`text-sm text-gray-500 ${textColor[color]}`}>{post.date}</div>
                  <div className={`text-sm font-medium ${textColor[color]}`}>{post.tags.join(', ')}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <button
          onClick={showMorePosts}
          className={`mt-8 px-6 py-3 rounded-full ${buttonColors[color]} text-white font-semibold`}
        >
          Show More
        </button>
      </div>
    </section>
  );
};

export default Blog;
