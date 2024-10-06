import React from 'react';
import { Code, Server, Database, Cpu } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Creating responsive and dynamic web applications using modern frameworks and technologies.',
    icon: Code,
  },
  {
    title: 'Backend Development',
    description: 'Building robust and scalable server-side applications and APIs.',
    icon: Server,
  },
  {
    title: 'Database Design',
    description: 'Designing and optimizing database structures for efficient data management.',
    icon: Database,
  },
  {
    title: 'AI Integration',
    description: 'Incorporating artificial intelligence and machine learning into applications for enhanced functionality.',
    icon: Cpu,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <service.icon size={48} className="text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;