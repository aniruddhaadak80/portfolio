/** @jsxImportSource https://esm.sh/react */
import React, { useState, useCallback } from 'react';
import { Code, Users, Lightbulb } from 'lucide-react'; // Importing icons
import { createRoot } from 'react-dom/client'; // React DOM

// Define types for type safety
interface LearningJourney {
  year: number;
  event: string;
  technologies: string[];
  color: string;
  baseColor: string;
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

const About: React.FC = () => {
  const learningJourneys: LearningJourney[] = [
    { 
      year: 2022, 
      event: 'Computer Science Foundations', 
      technologies: ['Algorithms', 'Data Structures', 'Computer Architecture'],
      color: 'from-blue-400 to-blue-600', 
      baseColor: '#4F46E5', 
      emoji: '🖥️',
      description: 'Embarked on my academic journey, diving deep into fundamental computer science concepts and laying the groundwork for a tech career.',
      achievements: [
        'Completed introductory programming courses',
        'Mastered basic algorithmic thinking',
        'Developed problem-solving skills'
      ],
      projectLink: '#cs-foundations'
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
      event: 'AI & Machine Learning Foundations', 
      technologies: ['Python', 'Machine Learning', 'Neural Networks', 'TensorFlow', 'Data Science'],
      color: 'from-pink-400 to-pink-600', 
      baseColor: '#EC4899', 
      emoji: '🤖',
      description: 'Exploring artificial intelligence and machine learning fundamentals.',
      achievements: [
        'Completed machine learning courses',
        'Developed basic neural network models',
        'Analyzed complex datasets'
      ],
      projectLink: '#ai-ml-learning'
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

  return (
    <section 
      id="learning-journey" 
      className="py-20 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:bg-gradient-to-r dark:from-blue-800 dark:via-purple-800 dark:to-pink-800 relative overflow-hidden"
    >
      {/* Animated Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute animate-blob top-10 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl dark:bg-blue-600"></div>
        <div className="absolute animate-blob2 bottom-10 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl dark:bg-purple-600"></div>
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

          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-300 mb-6">My Learning Journey</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Here's a snapshot of my continuous learning path, filled with passion for technology and problem-solving.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {learningJourneys.map((journey, index) => (
            <div 
              key={journey.year}
              className="flex flex-col md:flex-row items-center mb-6 p-6 bg-gradient-to-r rounded-lg shadow-lg dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-700 dark:to-gray-600"
            >
              <div className="md:w-1/4 text-center md:text-left mb-4 md:mb-0">
                <div
                  className={`inline-block px-4 py-2 rounded-full text-white text-4xl font-semibold shadow-lg bg-gradient-to-r ${journey.color} transform transition-all duration-300`}
                  style={{
                    transition: 'background-color 0.3s ease',
                    backgroundColor: hoverColors[index]
                  }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index, journey.baseColor)}
                >
                  {journey.emoji}
                </div>
              </div>

              <div className="md:w-3/4 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-300 mb-2">{journey.event}</h3>
                <p className="text-gray-700 dark:text-gray-200 mb-4">{journey.description}</p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc pl-6 mb-4">
                  {journey.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
                <a 
                  href={journey.projectLink} 
                  className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-300 dark:hover:text-indigo-500 transition-all duration-300"
                  onMouseEnter={() => handleButtonHover(index, true)}
                  onMouseLeave={() => handleButtonHover(index, false)}
                >
                  <div className={`inline-block px-4 py-2 rounded-full font-semibold border ${buttonHover[index] ? 'bg-indigo-600 text-white' : 'border-indigo-600 text-indigo-600'} transition-all duration-300`}>
                    Explore Project
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
