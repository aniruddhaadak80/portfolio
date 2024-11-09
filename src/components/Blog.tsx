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
    title: 'Optimizing Database Performance for Web Applications',
    excerpt: 'Learn how to optimize your database performance for better speed and scalability.',
    date: '2023-12-01',
    image: 'https://images.unsplash.com/photo-1570895484692-b04234c14049?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8MXx8ZGF0YWJhc2VfY2xvYWRpbmd8fDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['Databases']
  }
];

const getTagColor = (tag: string) => {
  const tagColors: { [key: string]: string } = {
    AI: '#D32F2F',
    'Web Development': '#1976D2',
    API: '#388E3C',
    Backend: '#FBC02D',
    'Cloud Computing': '#8E24AA',
    Databases: '#0288D1'
  };
  return tagColors[tag] || '#000'; // Default color for untagged items
};

const BlogPostList: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredBlogPosts = selectedTag
    ? blogPosts.filter((post) => post.tags.includes(selectedTag))
    : blogPosts;

  return (
    <div className="blog-post-list">
      <div className="tag-filters">
        {['AI', 'Web Development', 'API', 'Backend', 'Cloud Computing', 'Databases'].map((tag) => (
          <motion.button
            key={tag}
            style={{ backgroundColor: getTagColor(tag) }}
            onClick={() => setSelectedTag(tag)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="tag-filter"
          >
            {tag}
          </motion.button>
        ))}
        <motion.button
          onClick={() => setSelectedTag(null)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="tag-filter"
        >
          All
        </motion.button>
      </div>
      <div className="blog-post-cards">
        {filteredBlogPosts.map((post) => (
          <motion.div
            key={post.id}
            className="blog-post-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img src={post.image} alt={post.title} />
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <span>{post.date}</span>
            <div className="tags">
              {post.tags.map((tag) => (
                <motion.span
                  key={tag}
                  style={{ backgroundColor: getTagColor(tag) }}
                  whileHover={{ scale: 1.1 }}
                  className="tag"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogPostList;
