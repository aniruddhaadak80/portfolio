import React, { useState, useEffect } from 'react';

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
          <button
            onClick={() => setSelectedTag(null)}
            className={`m-2 px-4 py-2 rounded-full ${
              selectedTag === null ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
            }`}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`m-2 px-4 py-2 rounded-full ${
                selectedTag === tag ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">{post.date}</div>
                  <div className="flex flex-wrap">
                    {post.tags.map(tag => (
                      <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;