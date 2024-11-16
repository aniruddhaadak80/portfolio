import React, { useState } from 'react';
import { Code, Users, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const milestones = [
    { year: 2022, event: 'Started Computer Science Degree', color: 'from-blue-400 to-blue-600', baseColor: '#4F46E5' },
    { year: 2023, event: 'Learned 1st Programming Language (C)', color: 'from-green-400 to-green-600', baseColor: '#10B981' },
    { year: 2023, event: 'Learned Web Development after June 15th', color: 'from-yellow-400 to-yellow-600', baseColor: '#F59E0B' },
    { year: 2024, event: 'Learned GitHub, Cybersecurity before June', color: 'from-red-400 to-red-600', baseColor: '#EF4444' },
    { year: 2024, event: 'Learned Next.js, Astro.js, Qwik.js...', color: 'from-purple-400 to-purple-600', baseColor: '#8B5CF6' },
    { year: 2024, event: 'Skills upgrading...', color: 'from-pink-400 to-pink-600', baseColor: '#EC4899' },
  ];

  const [hoverColors, setHoverColors] = useState(milestones.map(milestone => milestone.baseColor));

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleMouseEnter = (index: number) => {
    const newColors = [...hoverColors];
    newColors[index] = getRandomColor();
    setHoverColors(newColors);
  };

  const handleMouseLeave = (index: number, baseColor: string) => {
    const newColors = [...hoverColors];
    newColors[index] = baseColor;
    setHoverColors(newColors);
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 animate-bounce hover:text-indigo-600 transition-colors duration-300">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center mb-16">
          {/* Profile Image */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://tinyurl.com/25l56ouh"
              alt="MyProfileImage"
              className="rounded-full w-64 h-64 object-cover mx-auto border-4 border-blue-500 shadow-lg transform hover:scale-105 transition-transform duration-300 animate-pulse"
            />
          </div>
          {/* Milestones */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 animate-zoom-in-right hover:text-indigo-600 transition-colors duration-300 transform hover:translate-x-2">
              My Journey
            </h3>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex items-center animate-zoom-in-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Year section with fixed color */}
                  <div className={`w-12 h-12 bg-gradient-to-r ${milestone.color} rounded-full flex items-center justify-center text-white font-bold shadow-md transform hover:scale-110 transition-transform duration-300`}>
                    {milestone.year}
                  </div>

                  {/* Event section with dynamic hover color */}
                  <div
                    className="ml-4 bg-white p-2 rounded-lg shadow-md flex-1 transition-colors duration-300 cursor-pointer group"
                    style={{
                      backgroundColor: hoverColors[index],
                    }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index, milestone.baseColor)}
                  >
                    <span className="transition-colors duration-300 animate-pulse">
                      {milestone.event}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl group">
            <Code size={48} className="mx-auto mb-4 text-blue-500 animate-bounce group-hover:text-blue-600" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300 transform group-hover:translate-y-1 animate-zoom-in">
              Clean Code
            </h3>
            <p className="text-gray-600 group-hover:text-blue-500 transition-colors duration-300 animate-pulse">
              I believe in writing clean, maintainable, and efficient code.
            </p>
          </div>

          <div className="text-center bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl group" style={{ animationDelay: '0.1s' }}>
            <Users size={48} className="mx-auto mb-4 text-purple-500 animate-bounce group-hover:text-purple-600" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-purple-600 transition-colors duration-300 transform group-hover:translate-y-1 animate-zoom-in">
              Collaboration
            </h3>
            <p className="text-gray-600 group-hover:text-purple-500 transition-colors duration-300 animate-pulse">
              I thrive in collaborative environments and enjoy teamwork.
            </p>
          </div>

          <div className="text-center bg-gradient-to-br from-pink-100 to-pink-200 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl group" style={{ animationDelay: '0.2s' }}>
            <Lightbulb size={48} className="mx-auto mb-4 text-yellow-500 animate-bounce group-hover:text-yellow-600" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-yellow-600 transition-colors duration-300 transform group-hover:translate-y-1 animate-zoom-in">
              Innovation
            </h3>
            <p className="text-gray-600 group-hover:text-yellow-500 transition-colors duration-300 animate-pulse">
              I'm always exploring new technologies and innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
