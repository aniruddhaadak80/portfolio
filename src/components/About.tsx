import React from 'react';
import { Code, Users, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const milestones = [
    { year: 2022, event: 'Started Computer Science Degree' },
    { year: 2023, event: 'Learned 1st programming language {C}' },
    { year: 2023, event: 'Learned Web Development after 15th june ' },
    { year: 2024, event: 'Learned Github , Cybersecurity before April' },
    { year: 2024, event: 'Learned Next.js , Astro js , Qwik js ...' },
    { year: 2024, event: 'Skills upgrading...' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://tinyurl.com/ymr3ua2n"
              alt="Profile"
              className="rounded-full w-64 h-64 object-cover mx-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {milestone.year}
                  </div>
                  <div className="ml-4">{milestone.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Code size={48} className="mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
            <p>I believe in writing clean, maintainable, and efficient code.</p>
          </div>
          <div className="text-center">
            <Users size={48} className="mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
            <p>I thrive in collaborative environments and enjoy teamwork.</p>
          </div>
          <div className="text-center">
            <Lightbulb size={48} className="mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p>
              I'm always exploring new technologies and innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
