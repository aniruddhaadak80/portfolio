import React, { useState } from 'react';
import { FaJs, FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiDjango, SiTensorflow, SiPytorch, SiMongodb, SiNextdotjs, SiQwiklabs, SiAstro } from 'react-icons/si';

const skills = [
  { name: 'JavaScript', category: 'Frontend', level: 95, icon: FaJs, color: '#F7DF1E', bgColor: '#FFF8D6' },
  { name: 'React', category: 'Frontend', level: 90, icon: FaReact, color: '#61DAFB', bgColor: '#E6F7FF' },
  { name: 'TypeScript', category: 'Frontend', level: 85, icon: SiTypescript, color: '#3178C6', bgColor: 'text-purple-700' },
  { name: 'Node.js', category: 'Backend', level: 88, icon: FaNodeJs, color: '#339933', bgColor: '#E6FFE6' },
  { name: 'Python', category: 'Backend', level: 80, icon: FaPython, color: '#FFD43B', bgColor: '#FFFBE6' },
  { name: 'Django', category: 'Backend', level: 75, icon: SiDjango, color: '#092E20', bgColor: '#E6FFF0' },
  { name: 'TensorFlow', category: 'AI/ML', level: 70, icon: SiTensorflow, color: '#FF6F00', bgColor: '#FFF0E6' },
  { name: 'PyTorch', category: 'AI/ML', level: 65, icon: SiPytorch, color: '#EE4C2C', bgColor: '#FFE6E6' },
  { name: 'SQL', category: 'Database', level: 85, icon: FaDatabase, color: '#00758F', bgColor: '#E6F7FF' },
  { name: 'MongoDB', category: 'Database', level: 80, icon: SiMongodb, color: '#4DB33D', bgColor: '#F0FFF0' },
  { name: 'Next.js', category: 'Frontend', level: 85, icon: SiNextdotjs, color: '#000000', bgColor: '#F0F7FF' },
  { name: 'Qwik.js', category: 'Frontend', level: 75, icon: SiQwiklabs, color: '#FF1E56', bgColor: '#FFE6EC' },
  { name: 'Astro.js', category: 'Frontend', level: 80, icon: SiAstro, color: '#FF5D01', bgColor: '#FFF0E6' },
];

const Skills: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(skills.map(skill => skill.category))];

  const filteredSkills = filter === 'All' ? skills : skills.filter(skill => skill.category === filter);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Frontend': return 'from-blue-500 to-cyan-500';
      case 'Backend': return 'from-green-500 to-teal-500';
      case 'AI/ML': return 'from-purple-500 to-pink-500';
      case 'Database': return 'from-yellow-500 to-orange-500';
      default: return 'from-gray-500 to-gray-700';
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 animate-fade-in-down">Skills</h2>
        <div className="flex justify-center mb-8 flex-wrap">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`m-2 px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                filter === category 
                ? `bg-gradient-to-r ${getCategoryColor(category)} text-white shadow-lg` 
                : 'bg-white text-gray-800 hover:bg-gray-100'
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up hover:shadow-2xl" 
              style={{
                animationDelay: `${index * 0.1}s`,
                backgroundColor: skill.bgColor,
              }}
            >
              <div className="flex items-center mb-4">
                <skill.icon size={32} color={skill.color} className="mr-4" />
                <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
              </div>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-gradient-to-r ${getCategoryColor(skill.category)}`}>
                      {skill.category}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-gray-600">
                      {skill.level}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div
                    style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center animate-expand-right"
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