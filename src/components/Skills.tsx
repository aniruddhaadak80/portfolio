import React, { useState } from 'react';

const skills = [
  { name: 'JavaScript', category: 'Frontend', level: 90 },
  { name: 'React', category: 'Frontend', level: 85 },
  { name: 'TypeScript', category: 'Frontend', level: 80 },
  { name: 'Node.js', category: 'Backend', level: 85 },
  { name: 'Python', category: 'Backend', level: 80 },
  { name: 'Django', category: 'Backend', level: 75 },
  { name: 'TensorFlow', category: 'AI/ML', level: 70 },
  { name: 'PyTorch', category: 'AI/ML', level: 65 },
  { name: 'SQL', category: 'Database', level: 85 },
  { name: 'MongoDB', category: 'Database', level: 80 },
];

const Skills: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(skills.map(skill => skill.category))];

  const filteredSkills = filter === 'All' ? skills : skills.filter(skill => skill.category === filter);

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="flex justify-center mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`mx-2 px-4 py-2 rounded-full ${
                filter === category ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map(skill => (
            <div key={skill.name} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                      {skill.category}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-blue-600">
                      {skill.level}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                  <div
                    style={{ width: `${skill.level}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;