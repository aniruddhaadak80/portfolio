import React, { useState, useCallback } from 'react';
import { Code, Users, Lightbulb } from 'lucide-react';

interface LearningJourney {
  year: number;
  event: string;
  technologies: string[];
  color: string;
  baseColor: string;
  descriptionColor?: string;
  emoji: string;
  description: string;
  achievements: string[];
  projectLink: string;
}

interface ImageInteraction {
  rotate: number;
  scale: number;
  filter: string;
}

interface ButtonHoverState {
  [key: number]: boolean;
}

const About: React.FC = () =>  {
  const learningJourneys: LearningJourney[] = [
  { 
    year: 2024, 
    event: 'AI & Machine Learning Foundations', 
    technologies: ['Python', 'Machine Learning', 'Neural Networks', 'TensorFlow', 'Data Science'],
    color: 'from-pink-400 to-pink-600', 
    baseColor: '#EC4899', 
    descriptionColor: '#818CF8',
    emoji: '🤖',
    description: 'Exploring artificial intelligence and machine learning fundamentals.',
    achievements: [
      'Completed machine learning courses',
      'Developed basic neural network models',
      'Analyzed complex datasets'
    ],
    projectLink: '#ai-ml-learning'
  },
  { 
    year: 2024, 
    event: 'Modern Frontend Frameworks', 
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'State Management'],
    color: 'from-purple-400 to-purple-600', 
    baseColor: '#8B5CF6', 
    emoji: '⚛️',
    description: 'Advanced web development with modern JavaScript frameworks and state management.',
    achievements: [
      'Built complex single-page applications',
      'Mastered React hooks and context',
      'Implemented server-side rendering'
    ],
    projectLink: '#frontend-frameworks'
  },
  { 
    year: 2024, 
    event: 'Cybersecurity & Network Fundamentals', 
    technologies: ['Network Security', 'Ethical Hacking', 'Cryptography', 'Linux', 'Wireshark'],
    color: 'from-red-400 to-red-600', 
    baseColor: '#EF4444', 
    emoji: '🔒',
    description: 'Explored cybersecurity principles, network protection, and ethical hacking techniques.',
    achievements: [
      'Completed cybersecurity certification',
      'Analyzed network vulnerabilities',
      'Implemented basic security protocols'
    ],
    projectLink: '#cybersecurity'
  },
  { 
    year: 2023, 
    event: 'Web Development Fundamentals', 
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Bootstrap'],
    color: 'from-yellow-400 to-yellow-600', 
    baseColor: '#F59E0B', 
    emoji: '🌐',
    description: 'Explored web development, creating interactive and responsive web applications.',
    achievements: [
      'Built multiple responsive web interfaces',
      'Learned modern JavaScript ES6+ features',
      'Created interactive frontend projects'
    ],
    projectLink: '#web-development'
  },
  { 
    year: 2023, 
    event: 'C Programming & Low-Level Mastery', 
    technologies: ['C Language', 'Pointers', 'Memory Management', 'Embedded Systems'],
    color: 'from-green-400 to-green-600', 
    baseColor: '#10B981', 
    emoji: '🧩',
    description: 'Deep dive into C programming, understanding low-level system interactions and memory management.',
    achievements: [
      'Developed complex data structures from scratch',
      'Created memory-efficient algorithms',
      'Built small embedded system projects'
    ],
    projectLink: '#c-programming'
  },
  { 
    year: 2022, 
    event: 'Computer Science Foundations', 
    technologies: ['Algorithms', 'Data Structures', 'Computer Architecture'],
    color: 'from-blue-400 to-blue-600', 
    baseColor: '#4F46E5', 
    descriptionColor: '#818CF8',
    emoji: '🖥️',
    description: 'Embarked on my academic journey, diving deep into fundamental computer science concepts and laying the groundwork for a tech career.',
    achievements: [
      'Completed introductory programming courses',
      'Mastered basic algorithmic thinking',
      'Developed problem-solving skills'
    ],
    projectLink: '#cs-foundations'
  }
];



  const [selectedJourney, setSelectedJourney] = useState<number | null>(null);
  const [hoverColors, setHoverColors] = useState<string[]>(learningJourneys.map(journey => journey.baseColor));
  const [imageInteraction, setImageInteraction] = useState<ImageInteraction>({
    rotate: 0,
    scale: 1,
    filter: 'brightness(100%)'
  });
  const [buttonHover, setButtonHover] = useState<ButtonHoverState>({});
  const [visibleCards, setVisibleCards] = useState<number>(2);

  const getRandomColor = useCallback((): string => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }, []);

  const handleMouseEnter = useCallback((index: number) => {
    const newColors = [...hoverColors];
    newColors[index] = getRandomColor();
    setHoverColors(newColors);
  }, [hoverColors, getRandomColor]);

  const handleMouseLeave = useCallback((index: number, baseColor: string) => {
    const newColors = [...hoverColors];
    newColors[index] = baseColor;
    setHoverColors(newColors);
  }, [hoverColors]);

  const handleImageInteraction = useCallback((type: string) => {
    switch(type) {
      case 'hover':
        setImageInteraction({
          rotate: Math.random() * 10 - 5,
          scale: 1.1,
          filter: 'brightness(110%)'
        });
        break;
      case 'click':
        setImageInteraction(prev => ({
          rotate: prev.rotate + (Math.random() * 20 - 10),
          scale: prev.scale === 1 ? 1.2 : 1,
          filter: prev.filter === 'brightness(100%)' ? 'grayscale(50%)' : 'brightness(100%)'
        }));
        break;
      default:
        setImageInteraction({
          rotate: 0,
          scale: 1,
          filter: 'brightness(100%)'
        });
    }
  }, []);

  const handleButtonHover = useCallback((index: number, isHovering: boolean) => {
    setButtonHover(prev => ({
      ...prev,
      [index]: isHovering
    }));
  }, []);

  const handleShowMore = () => {
    setVisibleCards(prev => Math.min(prev + 2, learningJourneys.length));
  };

  return (
    <section 
      id="about" 
      className="py-20 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Animated Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute animate-blob top-10 right-20 w-72 h-72 bg-blue-200 dark:bg-blue-700 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute animate-blob2 bottom-10 left-20 w-64 h-64 bg-purple-200 dark:bg-purple-700 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/3 mb-6 md:mb-0 md:mr-12">
            <div 
              className="relative group cursor-pointer overflow-hidden"
              onMouseEnter={() => handleImageInteraction('hover')}
              onMouseLeave={() => handleImageInteraction('reset')}
              onClick={() => handleImageInteraction('click')}
            >
              <img
                src="https://tinyurl.com/25l56ouh"
                alt="Profile"
                className="rounded-full w-64 h-64 object-cover mx-auto border-4 border-indigo-500 shadow-lg transform transition-all duration-500"
                style={{
                  transform: `rotate(${imageInteraction.rotate}deg) scale(${imageInteraction.scale})`,
                  filter: imageInteraction.filter
                }}
              />
              <div className="absolute inset-0 bg-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h2 className="text-4xl font-bold mb-4 text-center md:text-left bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent dark:from-indigo-400 dark:via-purple-300 dark:to-pink-400 animate-pulse p-4 rounded-lg transition-all duration-300 hover:bg-opacity-10 hover:bg-white dark:hover:bg-opacity-10 dark:hover:bg-gray-800">
              My Learning Journey 📚
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-center md:text-left mb-6 italic">
              A passionate learner continuously exploring the vast world of technology, 
              transforming curiosity into skills, one milestone at a time.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {learningJourneys.slice(0, visibleCards).map((journey, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl group relative overflow-hidden"
              style={{ 
                backgroundColor: hoverColors[index],
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index, journey.baseColor)}
              onClick={() => setSelectedJourney(selectedJourney === index ? null : index)}
            >
              {/* Gradient overlay */}
              <div 
                className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300" 
                style={{
                  background: `linear-gradient(to right, ${journey.baseColor}, ${getRandomColor()})`
                }}
              ></div>

              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center space-x-4">
                  <span className={`text-4xl bg-gradient-to-r ${journey.color} p-2 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-110`}>
                    {journey.emoji}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 hover:text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text transition-colors duration-300 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                      {journey.year} - {journey.event}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {journey.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 rounded-full text-xs hover:bg-blue-200 dark:hover:bg-blue-700 transition-all transform hover:scale-110 hover:shadow-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <span className="text-2xl text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                  {selectedJourney === index ? '▼' : '►'}
                </span>
              </div>

              {selectedJourney === index && (
                <div className="mt-4 animate-fade-in relative z-10">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 italic">{journey.description}</p>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                      Key Achievements:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                      {journey.achievements.map((achievement, achieveIndex) => (
                        <li 
                          key={achieveIndex} 
                          className="animate-zoom-in-left hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
                          style={{ animationDelay: `${achieveIndex * 0.1}s` }}
                        >
                          <span className="group-hover:ml-2 transition-all duration-300">➤</span> {achievement}
                        </li>
                      ))}
                    </ul>
                    {journey.projectLink && (
                      <div className="mt-4 flex items-center space-x-4">
                        <a 
                          href={journey.projectLink} 
                          className={`inline-block px-4 py-2 rounded-lg transition-all duration-300 transform ${
                            buttonHover[index] 
                              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-white scale-110 shadow-xl' 
                              : 'bg-indigo-500 text-white hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-500'
                          }`}
                          onMouseEnter={() => handleButtonHover(index, true)}
                          onMouseLeave={() => handleButtonHover(index, false)}
                        >
                          View Projects
                        </a>
                        <span className={`transition-opacity duration-300 ${
                          buttonHover[index] ? 'opacity-100' : 'opacity-0'
                        } text-gray-600 dark:text-gray-400`}>
                          Explore more details →
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          {/* Show More Button */}
          {visibleCards < learningJourneys.length && (
            <div className="flex justify-center mt-8">
              <button
                onClick={handleShowMore}
                className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              >
                Show More
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;


export async function server(request: Request) {
  return new Response(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Learning Journey</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://esm.town/v/std/catch"></script>
      <style>
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes zoomInLeft {
          from { opacity: 0; transform: scale(0.9) translateX(-20px); }
          to { opacity: 1; transform: scale(1) translateX(0); }
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-fade-in { animation: fadeIn 0.5s ease-out; }
        .animate-zoom-in-left { animation: zoomInLeft 0.5s ease-out; }
        .animate-blob { animation: blob 15s infinite; }
        .animate-blob2 { animation: blob 20s infinite; }
      </style>
    </head>
    <body>
      <div id="root"></div>
      <script type="module">
        import React from 'https://esm.sh/react';
        import { createRoot } from 'https://esm.sh/react-dom/client';
        import { About } from '${import.meta.url}';

        const rootElement = document.getElementById('root');
        const root = createRoot(rootElement);
        root.render(React.createElement(About));
      </script>
    </body>
    </html>
  `, {
    headers: { 'Content-Type': 'text/html' }
  });
}
