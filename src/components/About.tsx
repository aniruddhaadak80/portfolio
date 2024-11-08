import React from 'react';
import { Code, Users, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const milestones = [
    { year: 2022, event: 'Started Computer Science Degree', color: 'from-blue-400 to-blue-600' },
    { year: 2023, event: 'Learned 1st programming language (C)', color: 'from-green-400 to-green-600' },
    { year: 2023, event: 'Learned Web Development after 15th June', color: 'from-yellow-400 to-yellow-600' },
    { year: 2024, event: 'Learned GitHub, Cybersecurity before June', color: 'from-red-400 to-red-600' },
    { year: 2024, event: 'Learned Next.js, Astro.js, Qwik.js...', color: 'from-purple-400 to-purple-600' },
    { year: 2024, event: 'Skills upgrading...', color: 'from-pink-400 to-pink-600' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 animate-fade-in-down hover:text-indigo-600 transition-colors duration-300">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center mb-16">
          {/* Profile Image */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://tinyurl.com/ymr3ua2n"
              alt="Profile"
              className="rounded-full w-64 h-64 object-cover mx-auto border-4 border-blue-500 shadow-lg transform hover:scale-105 transition-transform duration-300 animate-pulse"
            />
          </div>
          {/* Milestones */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 animate-fade-in-right hover:text-indigo-600 transition-colors duration-300 transform hover:translate-x-2">
              My Journey
            </h3>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex items-center animate-fade-in-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${milestone.color} rounded-full flex items-center justify-center text-white font-bold shadow-md transform hover:scale-110 transition-transform duration-300`}
                  >
                    {milestone.year}
                  </div>
                  <div className="ml-4 bg-white p-2 rounded-lg shadow-md flex-1 hover:bg-gray-50 transition-all duration-300 cursor-pointer group">
                    <span className="group-hover:text-indigo-600 transition-colors duration-300 animate-pulse">
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
          <div className="text-center bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up hover:shadow-xl group">
            <Code size={48} className="mx-auto mb-4 text-blue-500 animate-bounce group-hover:text-blue-600" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-indigo-600 transition-colors duration-300 transform group-hover:translate-y-1 animate-fade-in-up">
              Clean Code
            </h3>
            <p className="text-gray-600 group-hover:text-blue-500 transition-colors duration-300 animate-pulse">
              I believe in writing clean, maintainable, and efficient code.
            </p>
          </div>

          <div className="text-center bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up hover:shadow-xl group" style={{ animationDelay: '0.1s' }}>
            <Users size={48} className="mx-auto mb-4 text-purple-500 animate-bounce group-hover:text-purple-600" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-indigo-600 transition-colors duration-300 transform group-hover:translate-y-1 animate-fade-in-up">
              Collaboration
            </h3>
            <p className="text-gray-600 group-hover:text-purple-500 transition-colors duration-300 animate-pulse">
              I thrive in collaborative environments and enjoy teamwork.
            </p>
          </div>

          <div className="text-center bg-gradient-to-br from-pink-100 to-pink-200 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up hover:shadow-xl group" style={{ animationDelay: '0.2s' }}>
            <Lightbulb size={48} className="mx-auto mb-4 text-yellow-500 animate-bounce group-hover:text-yellow-600" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-indigo-600 transition-colors duration-300 transform group-hover:translate-y-1 animate-fade-in-up">
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
