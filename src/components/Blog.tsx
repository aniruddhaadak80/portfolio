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
  // Blog posts data goes here...
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
,
  // add dummy
  {
    id: 13,
    title: 'Understanding Artificial Intelligence in Web Development',
    excerpt: 'Explore how AI is revolutionizing web development and improving user experiences.',
    date: '2023-11-01',
    image: 'https://tinyurl.com/2bqqdjdw',
    tags: ['Databases']
  },
  {
    id: 14,
    title: 'AI Tools Every Web Developer Should Know About',
    excerpt: 'Learn about AI-powered tools that can make web development more efficient.',
    date: '2023-11-02',
    image: 'https://tinyurl.com/26vsn2f3',
    tags: ['Databases']
  },
  {
    id: 15,
    title: 'Understanding Artificial Intelligence in Web Development',
    excerpt: 'Explore how AI is revolutionizing web development and improving user experiences.',
    date: '2023-11-01',
    image: 'https://tinyurl.com/2bqqdjdw',
    tags: ['AI']
  },
  {
    id: 16,
    title: 'AI Tools Every Web Developer Should Know About',
    excerpt: 'Learn about AI-powered tools that can make web development more efficient.',
    date: '2023-11-02',
    image: 'https://tinyurl.com/26vsn2f3',
    tags: ['AI']
  },
  {
    id: 17,
    title: 'Understanding Artificial Intelligence in Web Development',
    excerpt: 'Explore how AI is revolutionizing web development and improving user experiences.',
    date: '2023-11-01',
    image: 'https://tinyurl.com/2bqqdjdw',
    tags: ['AI']
  },
  {
    id: 18,
    title: 'AI Tools Every Web Developer Should Know About',
    excerpt: 'Learn about AI-powered tools that can make web development more efficient.',
    date: '2023-11-02',
    image: 'https://tinyurl.com/26vsn2f3',
    tags: ['AI']
  },  {
    id: 19,
    title: 'Understanding Artificial Intelligence in Web Development',
    excerpt: 'Explore how AI is revolutionizing web development and improving user experiences.',
    date: '2023-11-01',
    image: 'https://tinyurl.com/2bqqdjdw',
    tags: ['Web Development']
  },
  {
    id: 20,
    title: 'AI Tools Every Web Developer Should Know About',
    excerpt: 'Learn about AI-powered tools that can make web development more efficient.',
    date: '2023-11-02',
    image: 'https://tinyurl.com/26vsn2f3',
    tags: ['Web Development']
  },  {
    id: 21,
    title: 'Understanding Artificial Intelligence in Web Development',
    excerpt: 'Explore how AI is revolutionizing web development and improving user experiences.',
    date: '2023-11-01',
    image: 'https://tinyurl.com/2bqqdjdw',
    tags: ['Web Development']
  },
  {
    id: 22,
    title: 'AI Tools Every Web Developer Should Know About',
    excerpt: 'Learn about AI-powered tools that can make web development more efficient.',
    date: '2023-11-02',
    image: 'https://tinyurl.com/26vsn2f3',
    tags: ['Web Development']
  },

];

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>(blogPosts);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [visiblePosts, setVisiblePosts] = useState<BlogPost[]>([]);
  const [colorIndex, setColorIndex] = useState(0);

  // Predefined color palette
  const colorPalette = [
  'text-blue-700',    // Blue
  'text-green-700',   // Green
  'text-red-700',     // Red
  'text-purple-700',  // Purple
  'text-yellow-700',  // Yellow
  'text-indigo-700',  // Indigo
  'text-amber-700',   // Amber
  'text-emerald-700', // Emerald
  'text-teal-700',    // Teal
  'text-rose-700',    // Rose
  'text-fuchsia-700', // Fuchsia
  'text-cyan-700',    // Cyan
];


  // Cycle through color palette every second
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colorPalette.length);
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Update visible posts when selected tag changes
  useEffect(() => {
    if (selectedTag) {
      const filteredPosts = blogPosts.filter((post) => post.tags.includes(selectedTag));
      setPosts(filteredPosts);
      setVisiblePosts(filteredPosts.slice(0, 3));
    } else {
      setPosts(blogPosts);
      setVisiblePosts(blogPosts.slice(0, 3));
    }
  }, [selectedTag]);

  const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)));

  const showMorePosts = () => {
    setVisiblePosts(posts.slice(0, visiblePosts.length + 3));
  };

  return (
    <section id="blog" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Blog</h2>

        {/* Tag Buttons */}
        <div className="flex flex-wrap justify-center mb-8">
          <motion.button
            onClick={() => setSelectedTag(null)}
            className={`m-2 px-4 py-2 rounded-full ${
              selectedTag === null
                ? 'bg-blue-500 text-white'
                : `bg-white ${colorPalette[colorIndex]} border-2 border-blue-500`
            }`}
          >
            All
          </motion.button>
          {allTags.map((tag, index) => (
            <motion.button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`m-2 px-4 py-2 rounded-full ${
                selectedTag === tag
                  ? 'bg-blue-500 text-white'
                  : `bg-white ${colorPalette[(colorIndex + index) % colorPalette.length]} border-2`
              }`}
            >
              {tag}
            </motion.button>
          ))}
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visiblePosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
              initial={{ opacity: 0, rotateY: -180 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 1, type: 'spring', stiffness: 100 }}
              whileHover={{ scale: 1.05, rotateX: 10, rotateY: 10, transition: { duration: 0.3 } }}
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 ${colorPalette[(colorIndex + index) % colorPalette.length]}`}>
                  {post.title}
                </h3>
                <p className={`${colorPalette[(colorIndex + index + 1) % colorPalette.length]} mb-4`}>
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <div className={`text-sm ${colorPalette[(colorIndex + index + 2) % colorPalette.length]}`}>{post.date}</div>
                  <div className={`text-sm font-medium ${colorPalette[(colorIndex + index + 3) % colorPalette.length]}`}>{post.tags.join(', ')}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

{/* "Show More" Button, only if there are more than 3 posts */}
{posts.length > 3 && visiblePosts.length < posts.length && (
  <div className="flex justify-center mt-8">
    <button
      onClick={showMorePosts}
      className={`px-6 py-3 rounded-full font-bold text-2xl ${colorPalette[(colorIndex + 4) % colorPalette.length]} bg-sky-300 hover:bg-sky-200  hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out`}
    >
      Show More ✨
    </button>
  </div>
)}


      </div>
    </section>
  );
};

export default Blog;
