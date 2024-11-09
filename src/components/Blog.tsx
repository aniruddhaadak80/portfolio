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
    image: 'https://images.unsplash.com/photo-1585326229820-d81cd21253d1?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8NXx8YWl8c2VhY2h8fDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['AI']
  },
  {
    id: 2,
    title: 'AI Tools Every Web Developer Should Know About',
    excerpt: 'Learn about AI-powered tools that can make web development more efficient.',
    date: '2023-11-02',
    image: 'https://images.unsplash.com/photo-1623794604486-b74fdf9c849e?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8Mnx8YWl8Z2VuZXJhbF9kZXZlbG9wbWVudHxlbnwwfDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['AI']
  },

  // Web Development-related Posts
  {
    id: 3,
    title: 'Building Web Applications with Node.js and Express',
    excerpt: 'A comprehensive guide to building scalable web applications using Node.js and Express.',
    date: '2023-11-10',
    image: 'https://images.unsplash.com/photo-1602492366794-d6ec74f1f30f?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8OXx8bm9kZV9qcyZpbmZyYWRlcl9jYXNlX29uX3dlYl9hcHBsaWNhdGlvbnN8fDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['Web Development']
  },
  {
    id: 4,
    title: 'Best Practices for Frontend and Backend Integration',
    excerpt: 'Learn best practices for smoothly integrating frontend and backend code in web applications.',
    date: '2023-11-11',
    image: 'https://images.unsplash.com/photo-1605732822084-9cf056c2f11e?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8MXx8ZnJvbnRlbmQyYmFja2VuZF9pbnRlZ3JhdGlvbnN8fDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['Web Development']
  },

  // API-related Posts
  {
    id: 5,
    title: 'API Rate Limiting: What You Need to Know',
    excerpt: 'A guide to implementing rate limiting in your API to prevent abuse and maintain performance.',
    date: '2023-11-15',
    image: 'https://images.unsplash.com/photo-1573562063771-c22987f7e73e?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8Mnx8YXBpX3JhdGVfbGltaXRpbmd8fDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['API']
  },
  {
    id: 6,
    title: 'Understanding RESTful API Design Principles',
    excerpt: 'Learn the core principles of designing RESTful APIs for scalability and ease of use.',
    date: '2023-11-16',
    image: 'https://images.unsplash.com/photo-1552208958-fcb498c6ccac?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8M3x8YXBpX3Jlc3RmdWwgdGVzdGluZ3xlbnwwfDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['API']
  },

  // Backend-related Posts
  {
    id: 7,
    title: 'Building a Secure Backend with Node.js and JWT',
    excerpt: 'A step-by-step guide to creating a secure backend API using Node.js and JSON Web Tokens.',
    date: '2023-11-20',
    image: 'https://images.unsplash.com/photo-1603894989916-b2b7737bfe66?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8MXx8YmFja2VuZF9oZWFsdGhfYXBpX3NlY3VyaXR5fDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['Backend']
  },
  {
    id: 8,
    title: 'Efficient Data Handling in Backend Systems',
    excerpt: 'Learn techniques for efficiently managing and processing data in your backend system.',
    date: '2023-11-21',
    image: 'https://images.unsplash.com/photo-1519662263121-95b570417c7a?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8OXx8YmFja2VuZF9kYXRhX2hvcmRpbmd8fDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['Backend']
  },

  // Cloud Computing-related Posts
  {
    id: 9,
    title: 'Intro to Cloud Computing and Its Benefits',
    excerpt: 'An introduction to cloud computing and how it is transforming modern businesses.',
    date: '2023-11-25',
    image: 'https://images.unsplash.com/photo-1531819991440-78c365afada6?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8MHx8Y2xvdWQxMjBsaWZlY3lvdXJtb3ZlbWVudHxlbnwwfDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['Cloud Computing']
  },
  {
    id: 10,
    title: 'Choosing the Right Cloud Service Provider',
    excerpt: 'How to evaluate and choose the best cloud service provider for your project needs.',
    date: '2023-11-26',
    image: 'https://images.unsplash.com/photo-1524740751175-5d2f4d8d02b0?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8Mnx8Y2xvdWQxc2VydmljZXN8fDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['Cloud Computing']
  },

  // Databases-related Posts
  {
    id: 11,
    title: 'NoSQL vs SQL Databases: Which One to Choose?',
    excerpt: 'Understand the difference between NoSQL and SQL databases, and when to use each.',
    date: '2023-11-30',
    image: 'https://images.unsplash.com/photo-1600246556616-9a6b7799ab78?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8NXx8ZGF0YWJhc2V8fDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['Databases']
  },
  {
    id: 12,
    title: 'Optimizing Database Performance for Large Applications',
    excerpt: 'Techniques for improving database performance in applications with high traffic.',
    date: '2023-12-01',
    image: 'https://images.unsplash.com/photo-1614085091608-9a15a83fda5c?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8NXx8cGFyYWJvbGxvY3lfZGF0YWJhc2VfY29tcGxleHNpdGVzfDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['Databases']
  }
];



const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>(blogPosts);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    if (selectedTag) {
      setPosts(blogPosts.filter(post => post.tags.includes(selectedTag)));
    } else {
      setPosts(blogPosts);
    }
  }, [selectedTag]);

  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

  return (
    <section id="blog" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Blog</h2>
        <div className="flex flex-wrap justify-center mb-8">
          {/* "All" button */}
          <motion.button
            onClick={() => setSelectedTag(null)}
            className={`m-2 px-4 py-2 rounded-full ${selectedTag === null ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border-2 border-blue-500'}`}
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
              className={`m-2 px-4 py-2 rounded-full ${selectedTag === tag ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border-2 border-blue-500'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {tag}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
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
                <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-blue-600 transition-colors duration-300">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">{post.date}</div>
                  <div className="flex flex-wrap">
                    {post.tags.map(tag => (
                      <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
