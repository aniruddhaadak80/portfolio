/** @jsxImportSource https://esm.sh/react */
import React, { useState, useCallback } from 'https://esm.sh/react';
import { createRoot } from 'https://esm.sh/react-dom/client';

// Define types for clarity
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
      description:
        'Embarked on my academic journey, diving deep into fundamental computer science concepts and laying the groundwork for a tech career.',
      achievements: [
        'Completed introductory programming courses',
        'Mastered basic algorithmic thinking',
        'Developed problem-solving skills',
      ],
      projectLink: '#cs-foundations',
    },
    {
      year: 2023,
      event: 'C Programming & Low-Level Mastery',
      technologies: ['C Language', 'Pointers', 'Memory Management', 'Embedded Systems'],
      color: 'from-green-400 to-green-600',
      baseColor: '#10B981',
      emoji: '🧩',
      description:
        'Deep dive into C programming, understanding low-level system interactions and memory management.',
      achievements: [
        'Developed complex data structures from scratch',
        'Created memory-efficient algorithms',
        'Built small embedded system projects',
      ],
      projectLink: '#c-programming',
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
        'Analyzed complex datasets',
      ],
      projectLink: '#ai-ml-learning',
    },
  ];

  const [selectedJourney, setSelectedJourney] = useState<number | null>(null);
  const [hoverColors, setHoverColors] = useState<string[]>(learningJourneys.map((journey) => journey.baseColor));
  const [imageInteraction, setImageInteraction] = useState<ImageInteraction>({
    rotate: 0,
    scale: 1,
    filter: 'brightness(100%)',
  });
  const [buttonHover, setButtonHover] = useState<ButtonHoverState>({});

  const getRandomColor = useCallback((): string => {
    const letters = '0123456789ABCDEF';
    return `#${Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * 16)]).join('')}`;
  }, []);

  const handleMouseEnter = useCallback(
    (index: number) => {
      const newColors = [...hoverColors];
      newColors[index] = getRandomColor();
      setHoverColors(newColors);
    },
    [hoverColors, getRandomColor],
  );

  const handleMouseLeave = useCallback(
    (index: number, baseColor: string) => {
      const newColors = [...hoverColors];
      newColors[index] = baseColor;
      setHoverColors(newColors);
    },
    [hoverColors],
  );

  const handleImageInteraction = useCallback((type: string) => {
    const actions = {
      hover: () =>
        setImageInteraction({
          rotate: Math.random() * 10 - 5,
          scale: 1.1,
          filter: 'brightness(110%)',
        }),
      click: () =>
        setImageInteraction((prev) => ({
          rotate: prev.rotate + (Math.random() * 20 - 10),
          scale: prev.scale === 1 ? 1.2 : 1,
          filter: prev.filter === 'brightness(100%)' ? 'grayscale(50%)' : 'brightness(100%)',
        })),
      reset: () =>
        setImageInteraction({
          rotate: 0,
          scale: 1,
          filter: 'brightness(100%)',
        }),
    };
    actions[type]?.();
  }, []);

  const handleButtonHover = useCallback((index: number, isHovering: boolean) => {
    setButtonHover((prev) => ({
      ...prev,
      [index]: isHovering,
    }));
  }, []);

  return (
    <section id="learning-journey" className="py-20 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text text-center">
          My Learning Journey 📚
        </h2>
        <div className="space-y-6">
          {learningJourneys.map((journey, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transform transition hover:scale-105"
              style={{ backgroundColor: hoverColors[index] }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index, journey.baseColor)}
              onClick={() => setSelectedJourney(selectedJourney === index ? null : index)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className={`text-4xl bg-gradient-to-r ${journey.color} text-transparent bg-clip-text`}>
                    {journey.emoji}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{journey.year} - {journey.event}</h3>
                    <div className="flex space-x-2 mt-2">
                      {journey.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {selectedJourney === index && (
                <div className="mt-4">
                  <p>{journey.description}</p>
                  <ul className="list-disc ml-4">
                    {journey.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default async function server() {
  return new Response(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Learning Journey</title>
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body>
      <div id="root"></div>
      <script type="module">
        import React from 'https://esm.sh/react';
        import { createRoot } from 'https://esm.sh/react-dom/client';
        import { About } from './app.js';

        const rootElement = document.getElementById('root');
        createRoot(rootElement).render(React.createElement(About));
      </script>
    </body>
    </html>
  `, {
    headers: { 'Content-Type': 'text/html' },
  });
}
