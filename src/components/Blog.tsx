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
  // AI-related posts
  {
    id: 1,
    title: 'Understanding Artificial Intelligence in Web Development',
    excerpt: 'Explore how AI is revolutionizing web development and improving user experiences.',
    date: '2023-11-01',
    image: 'https://images.unsplash.com/photo-1585326229820-d81cd21253d1?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8NXx8YWl8c2VhY2h8fDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['AI', 'Web Development'],
  },
  {
    id: 2,
    title: 'AI Tools Every Web Developer Should Know About',
    excerpt: 'Learn about AI-powered tools that can make web development more efficient.',
    date: '2023-11-02',
    image: 'https://images.unsplash.com/photo-1623794604486-b74fdf9c849e?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8Mnx8YWl8Z2VuZXJhbF9kZXZlbG9wbWVudHxlbnwwfDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['AI', 'Web Development'],
  },
  {
    id: 3,
    title: 'Using AI for Personalized Web Content',
    excerpt: 'How AI can dynamically change web content to better suit user preferences.',
    date: '2023-11-03',
    image: 'https://images.unsplash.com/photo-1556742404-3c3e0b9e1d2e?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8NXx8YWl8cGFybWlzdC1tYWdpY3Bvc3lzdGVtfDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['AI', 'Web Development'],
  },
  {
    id: 4,
    title: 'AI-Powered Tools for Optimizing API Performance',
    excerpt: 'Enhance API performance using AI techniques to automatically detect bottlenecks.',
    date: '2023-11-04',
    image: 'https://images.unsplash.com/photo-1573497491209-b1771a8c5307?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8NXx8YWl8YXBpX3BlcmZvc3hvc3xlbnwwfDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['AI', 'API'],
  },
  {
    id: 5,
    title: 'Building AI-Based Backend Systems with Python',
    excerpt: 'A guide to building backend systems using Python and AI libraries like TensorFlow.',
    date: '2023-11-05',
    image: 'https://images.unsplash.com/photo-1593539638930-9b9f02ec3d8a?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8MXx8YmFja2VuZGRkYXBwZW5kX2Fpc18wMHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['AI', 'Backend'],
  },
  {
    id: 6,
    title: 'AI-Powered Chatbots for Backend Systems',
    excerpt: 'How AI chatbots can be integrated into backend systems to enhance customer support.',
    date: '2023-11-06',
    image: 'https://images.unsplash.com/photo-1562094977-d456d5ac8be5?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8N3x8Y2hhdGJvdHNfYmFja2VuZGRhdGFuYWx8fDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['AI', 'Backend'],
  },
  {
    id: 7,
    title: 'Optimizing Cloud Computing with AI for Web Developers',
    excerpt: 'Explore how cloud computing and AI can work together to enhance web development workflows.',
    date: '2023-11-07',
    image: 'https://images.unsplash.com/photo-1580640534965-05834c620f9f?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8OXx8Y2xvdWQyN29wZW5hdGluZ3x8fDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['AI', 'Cloud Computing'],
  },
  {
    id: 8,
    title: 'Integrating AI with Databases for Smarter Query Optimization',
    excerpt: 'How AI can be used to optimize database queries for faster and more accurate results.',
    date: '2023-11-08',
    image: 'https://images.unsplash.com/photo-1562229382-b6e1a4b55d50?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8MXx8ZGF0YWJhc2V8fDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['AI', 'Databases'],
  },
  {
    id: 9,
    title: 'AI in Cloud Computing: Future Trends',
    excerpt: 'A deep dive into the future role of AI in cloud computing and its impact on developers.',
    date: '2023-11-09',
    image: 'https://images.unsplash.com/photo-1585202666952-d00052cb9b85?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8MHx8Y2xvdWRfY29tcHV0aW5nX3dhY2tmbG93X2FjY291bnR8fDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['AI', 'Cloud Computing'],
  },

  // Web Development-related posts
  {
    id: 10,
    title: 'Building Web Applications with Node.js and Express',
    excerpt: 'A comprehensive guide to building scalable web applications using Node.js and Express.',
    date: '2023-11-10',
    image: 'https://images.unsplash.com/photo-1602492366794-d6ec74f1f30f?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8OXx8bm9kZV9qcyZpbmZyYWRlcl9jYXNlX29uX3dlYl9hcHBsaWNhdGlvbnN8fDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['Web Development'],
  },
  {
    id: 11,
    title: 'Best Practices for Frontend and Backend Integration',
    excerpt: 'Learn best practices for smoothly integrating frontend and backend code in web applications.',
    date: '2023-11-11',
    image: 'https://images.unsplash.com/photo-1612764393297-68c393d8e59f?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8Nnx8ZnJvbnRlbmRfYmFja2VuZGR9fDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['Web Development'],
  },
  {
    id: 12,
    title: 'Exploring the Power of React for Web Development',
    excerpt: 'How React is transforming web development by simplifying the creation of interactive UIs.',
    date: '2023-11-12',
    image: 'https://images.unsplash.com/photo-1573466786-e3c21f1c6d56?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8MXx8cmVhY3Rfc2V0dHVwZXJfZm9yX3dlYl9hcHBsaWNhdGlvbnN8fDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['Web Development'],
  },
  {
    id: 13,
    title: 'How to Build a REST API with Node.js and Express',
    excerpt: 'A step-by-step guide on creating a REST API using Node.js and Express.',
    date: '2023-11-13',
    image: 'https://images.unsplash.com/photo-1585259051433-03fd67d0d840?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8NXx8YXBpX3Jlc3BvbnNlX3dlYl9kZXZlbG9wbWVudHx8fDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['API', 'Web Development'],
  },
  {
    id: 14,
    title: 'Building Web Applications with Vue.js',
    excerpt: 'An introduction to using Vue.js to create scalable, reactive web applications.',
    date: '2023-11-14',
    image: 'https://images.unsplash.com/photo-1597696763350-b2e6b2d5b007?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8Mnx8Y3JlYXRpbmdfdmlkZW9fY2xpZW50c3ViamVjdF9hX2V4cGVyaWVuY2V8fDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['Web Development'],
  },
  {
    id: 15,
    title: 'Effective Error Handling in Web Development',
    excerpt: 'How to properly handle errors in your web applications to improve user experience.',
    date: '2023-11-15',
    image: 'https://images.unsplash.com/photo-1582672354437-cf0d8a42fe42?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8Nnx8ZXJyb3JfZGF0YWJhc2VfY2xvbmV2ZXJzY29tcGxldGVkX3N5c3RlbXxoYXJ2ZXNlfDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['Web Development'],
  },

  {
    id: 16,
    title: 'Building Scalable APIs with Node.js and Express',
    excerpt: 'Learn how to create scalable and maintainable APIs using Node.js and Express.',
    date: '2023-11-16',
    image: 'https://images.unsplash.com/photo-1578975302681-2647d4c764e0?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8MXx8YXBpX3N0dWRpZV9sZXZlbHxlbnwwfDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['API'],
  },
  {
    id: 17,
    title: 'How to Secure Your API with JWT Authentication',
    excerpt: 'A guide on implementing JWT authentication to secure your API endpoints.',
    date: '2023-11-17',
    image: 'https://images.unsplash.com/photo-1560855954-ddecc6cf0806?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8OXx8YXBpX2JhdGNoX2F1dGhlbnRpY2F0aW9uX2RlbnR8fDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['API'],
  },
  {
    id: 18,
    title: 'Versioning APIs for Better Maintenance and Flexibility',
    excerpt: 'Best practices for API versioning to ensure backward compatibility and smooth upgrades.',
    date: '2023-11-18',
    image: 'https://images.unsplash.com/photo-1592710246712-9cc9f5ad4d83?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8NXx8YXBpX3ZlcnNpb25pbmd8fDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['API'],
  },
  {
    id: 19,
    title: 'Rate Limiting Your APIs with Redis',
    excerpt: 'Implementing rate limiting for your APIs using Redis to prevent abuse and ensure reliability.',
    date: '2023-11-19',
    image: 'https://images.unsplash.com/photo-1605935460927-b5de7d9efc23?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8Mnx8YXBpX3JhdGVfbGltaXRpbmd8fDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['API'],
  },
  {
    id: 20,
    title: 'API Gateway: Best Practices for Microservices Architecture',
    excerpt: 'How to leverage an API gateway to manage and route requests efficiently in a microservices architecture.',
    date: '2023-11-20',
    image: 'https://images.unsplash.com/photo-1552427460-4790cdb88544?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8MXx8YXBpX2dhdGV3YXlfaW50Z3JhdGV8fDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['API'],
  },
  {
    id: 21,
    title: 'GraphQL vs REST: Which API Approach Is Right for Your Project?',
    excerpt: 'An in-depth comparison of GraphQL and REST to help you decide which API approach suits your needs.',
    date: '2023-11-21',
    image: 'https://images.unsplash.com/photo-1557785487-d68a5b19c510?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8OXx8c3Vib3JkaW5hdGVfYXBpc3RlfDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['API'],
  },
  {
    id: 22,
    title: 'Optimizing API Performance with Caching',
    excerpt: 'Learn how caching can drastically improve the performance and speed of your API.',
    date: '2023-11-22',
    image: 'https://images.unsplash.com/photo-1611941162945-11b94f85a5ed?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8MHx8YXBpX2NhY2hpbmdfYW5kX2ZpbmRpbmdfY29tcGxleGVhdGVkX3ZhbHVlcyBmdW5jdGlvbnN8fDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['API'],
  },
  {
    id: 23,
    title: 'API Authentication: OAuth 2.0 vs. OpenID Connect',
    excerpt: 'Compare OAuth 2.0 and OpenID Connect to determine the best authentication solution for your API.',
    date: '2023-11-23',
    image: 'https://images.unsplash.com/photo-1571771723145-24c5c1b5a8b7?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8Nnx8YXBpX2F1dGhlbnRpY2F0aW9ufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['API'],
  },
  {
    id: 24,
    title: 'Scaling Your API Infrastructure with Kubernetes',
    excerpt: 'Learn how Kubernetes can help you manage and scale your API infrastructure efficiently.',
    date: '2023-11-24',
    image: 'https://images.unsplash.com/photo-1625488682022-5c2f016cd205?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8MHx8YXBpX2NvbXBsZXg0dGVzdF9sb2dpY19hcHBsaWNhdGlvbnN8fDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['API'],
  },

  // Backend-related posts
  {
    id: 25,
    title: 'Designing a Robust Backend Architecture with Microservices',
    excerpt: 'Learn how to design a robust and scalable backend architecture using microservices.',
    date: '2023-11-25',
    image: 'https://images.unsplash.com/photo-1566481458-d640f6b81a99?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8OXx8YmFja2VuZF9ibGFja3Bvc3l8fDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['Backend'],
  },
  {
    id: 26,
    title: 'Understanding Event-Driven Architecture in Backend Systems',
    excerpt: 'How to implement event-driven architecture in your backend systems for better scalability.',
    date: '2023-11-26',
    image: 'https://images.unsplash.com/photo-1625237970144-9e6ad7d0174d?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8Mnx8YmFja2VuZF9ldmVudF9kcnZlbl9hcmNoaXRlY3R1cmVzaWduZGxlc3x8fDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['Backend'],
  },
  {
    id: 27,
    title: 'Automating Backend Processes with Python Scripts',
    excerpt: 'Automate repetitive backend tasks using Python scripts to save time and effort.',
    date: '2023-11-27',
    image: 'https://images.unsplash.com/photo-1556175177-539a99b57351?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8Mnx8YmFja2VuZF9zY3JpcHRfc2VydmljZXN8fDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['Backend'],
  },
  {
    id: 28,
    title: 'Integrating Third-Party Services in Backend Development',
    excerpt: 'Learn how to integrate third-party APIs and services into your backend applications.',
    date: '2023-11-28',
    image: 'https://images.unsplash.com/photo-1586941531954-8f64ed5b0ff0?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8MHx8YmFja2VuZF9pbnRlZ3JhdGlvbl9zZXJ2aWNlX3N5c3RlbXxoYXJ2ZXN8fDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['Backend'],
  },
  {
    id: 29,
    title: 'Building a Backend API with Python Flask',
    excerpt: 'Step-by-step guide on building a backend API using Python Flask and SQLAlchemy.',
    date: '2023-11-29',
    image: 'https://images.unsplash.com/photo-1600490390313-9b6c7f3301b5?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8Mnx8YmFja2VuZF9jdWx0dXJhbF9sZXZlbHxlbnwwfDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['Backend'],
  },
  {
    id: 30,
    title: 'Creating an Authentication System in a Backend with JWT',
    excerpt: 'A comprehensive guide on implementing JWT authentication in your backend application.',
    date: '2023-11-30',
    image: 'https://images.unsplash.com/photo-1588502602427-e97f469f25a5?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8Nnx8YmFja2VuZF9hdXRob3JpemF0aW9uX2d1aWRlX2hpZ2hsaWdodGVyfDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['Backend'],
  },
  {
    id: 31,
    title: 'Performance Optimization in Backend Systems',
    excerpt: 'Techniques for optimizing performance in backend systems and improving response times.',
    date: '2023-12-01',
    image: 'https://images.unsplash.com/photo-1572469209175-15b619d6257a?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8MXx8YmFja2VuZF9wZXJmb3JtYW5jZXN8fDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['Backend'],
  },
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
