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
  {
    id: 1,
    title: 'The Future of AI in Web Development',
    excerpt: 'Exploring how artificial intelligence is shaping the future of web development and user experiences.',
    date: '2023-05-15',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['AI', 'Web Development', 'Future Tech'],
  },
  {
    id: 2,
    title: 'Optimizing React Performance',
    excerpt: 'Learn advanced techniques to boost the performance of your React applications.',
    date: '2023-04-22',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['React', 'Performance', 'JavaScript'],
  },
  {
    id: 3,
    title: 'Introduction to GraphQL',
    excerpt: 'Discover the benefits of GraphQL and how it can improve your API design.',
    date: '2023-03-10',
    image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['GraphQL', 'API', 'Backend'],
  },
  {
    id: 4,
    title: 'Understanding TypeScript Basics',
    excerpt: 'A beginner’s guide to mastering TypeScript for modern JavaScript development.',
    date: '2023-06-02',
    image: 'https://images.unsplash.com/photo-1565570673-8e9c380a8c29?ixid=MnwzNjUyOXwwfDF8c2VhY2h8MXx8Y29tcHV0ZXJ8ZW58MHx8fHwxNjgwODc0OTk4&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
    tags: ['TypeScript', 'JavaScript', 'Development'],
  },
  {
    id: 5,
    title: 'Building Real-Time Applications with WebSockets',
    excerpt: 'Learn how to implement real-time communication in your apps using WebSockets.',
    date: '2023-07-15',
    image: 'https://images.unsplash.com/photo-1604904742086-cf23de257758?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8Mnx8d2Vic3Vja2V0fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['WebSockets', 'Real-Time', 'Web Development'],
  },
  {
    id: 6,
    title: 'Mastering CSS Grid for Layouts',
    excerpt: 'Unlock the full potential of CSS Grid and create beautiful, responsive layouts.',
    date: '2023-08-18',
    image: 'https://images.unsplash.com/photo-1516434705271-3a47d8b13bfa?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8MXx8Y3NzJTIwZ3JpZHwzODU2fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['CSS', 'Grid', 'Web Design'],
  },
  {
    id: 7,
    title: 'Exploring Serverless Architecture',
    excerpt: 'How serverless computing is changing the way we build applications.',
    date: '2023-09-12',
    image: 'https://images.unsplash.com/photo-1564504141-d0e9fcb22f17?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8Mnx8c2VydmVybGVzc3xlbnwwfDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['Serverless', 'Architecture', 'Cloud'],
  },
  {
    id: 8,
    title: 'Building Scalable Microservices',
    excerpt: 'A guide to designing and deploying scalable microservices for modern applications.',
    date: '2023-10-04',
    image: 'https://images.unsplash.com/photo-1562563157-0bb77a7a5d5b?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8OHx8Y3JpcHtoZWFkfGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['Microservices', 'Scalability', 'Architecture'],
  },
  {
    id: 9,
    title: 'Introduction to Cloud-Native Development',
    excerpt: 'Learn the fundamentals of cloud-native development and how to build cloud-first applications.',
    date: '2023-10-20',
    image: 'https://images.unsplash.com/photo-1593020292389-d12b27ebc24e?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8OXx8Y2xvdWQtbmF0aXZlJTIwZGV2fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['Cloud Native', 'Development', 'Cloud Computing'],
  },
  {
    id: 10,
    title: 'Exploring the JAMstack Architecture',
    excerpt: 'How JAMstack architecture is transforming web development with its focus on performance and security.',
    date: '2023-11-05',
    image: 'https://images.unsplash.com/photo-1581549395760-4e712564ce99?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8Mnx8amFtc3RhY2t8ZW58MHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['JAMstack', 'Web Development', 'Architecture'],
  },
  {
    id: 11,
    title: 'Automating DevOps Pipelines with GitHub Actions',
    excerpt: 'Learn how to set up and manage automated CI/CD pipelines using GitHub Actions.',
    date: '2023-11-07',
    image: 'https://images.unsplash.com/photo-1618380853053-e2357b00456b?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8Mnx8Y2lkJTIwYXBwbGljYXRpb258ZW58MHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['DevOps', 'GitHub Actions', 'CI/CD'],
  },
  {
    id: 12,
    title: 'Understanding Cloud Databases: SQL vs. NoSQL',
    excerpt: 'A comparison between SQL and NoSQL databases in the context of cloud applications.',
    date: '2023-11-09',
    image: 'https://images.unsplash.com/photo-1553744537-e9b9f94a25d5?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1NzF8MHx8c2VhY2h8Mnx8Y2xvdWQtZGF0YWJhc2VzfGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    tags: ['Databases', 'Cloud', 'SQL', 'NoSQL'],
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
