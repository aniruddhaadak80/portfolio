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

export const About: React.FC = () => {
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
    // ... (rest of the learning journeys)
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
      className="py-20 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 relative overflow-hidden"
    >
      {/* Animated Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute animate-blob top-10 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute animate-blob2 bottom-10 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl"></div>
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
            <h2 className="text-4xl font-bold mb-4 text-center md:text-left bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse hover:text-gray-800 transition-all duration-300">
              My Learning Journey 📚
            </h2>
            <p className="text-gray-600 text-center md:text-left mb-6 italic">
              A passionate learner continuously exploring the vast world of technology, 
              transforming curiosity into skills, one milestone at a time.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {learningJourneys.map((journey, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl group relative overflow-hidden"
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
                  <span className={`text-4xl bg-gradient-to-r ${journey.color} bg-clip-text text-transparent`}>
                    {journey.emoji}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 hover:text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text transition-colors duration-300 group-hover:text-gray-800">
                      {journey.year} - {journey.event}
                    </h3>
                    <div className="flex space-x-2 mt-2">
                      {journey.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs hover:bg-blue-200 transition-all transform hover:scale-110 hover:shadow-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <span className="text-2xl text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                  <Code />
                </span>
              </div>

              {/* Journey Details (when clicked) */}
              {selectedJourney === index && (
                <div className="mt-4 space-y-2">
                  <p className="text-gray-700">{journey.description}</p>
                  <ul className="list-disc list-inside text-gray-600">
                    {journey.achievements.map((achieve, achieveIndex) => (
                      <li key={achieveIndex}>{achieve}</li>
                    ))}
                  </ul>
                  <a 
                    href={journey.projectLink} 
                    className="text-blue-600 underline hover:text-blue-800 transition-colors duration-300"
                  >
                    Explore more projects
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<About />);
