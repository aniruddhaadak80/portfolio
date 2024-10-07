import React from 'react';
import { Code, Server, Database, Cpu } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Creating responsive and dynamic web applications using modern frameworks and technologies.',
    icon: Code,
    color: 'text-teal-400',
    bgColor:'bg-sky-300',
  },
  {
    title: 'Backend Development',
    description: 'Building robust and scalable server-side applications and APIs.',
    icon: Server,
    color: 'text-green-500',
    bgColor: 'bg-green-100',
  },
  {
    title: 'Database Design',
    description: 'Designing and optimizing database structures for efficient data management.',
    icon: Database,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-100',
  },
  {
    title: 'AI Integration',
    description: 'Incorporating artificial intelligence and machine learning into applications for enhanced functionality.',
    icon: Cpu,
    color: 'text-purple-500',
    bgColor: 'bg-violet-500',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 animate-fade-in-down">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`${service.bgColor} p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 group`}
            >
              <service.icon size={48} className={`${service.color} mb-4 group-hover:animate-bounce`} />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;