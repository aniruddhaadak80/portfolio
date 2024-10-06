import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CTO',
    company: 'Tech Innovators Inc.',
    content: "Working with this developer was an absolute pleasure. Their expertise in full-stack development and AI integration brought our project to the next level.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Product Manager',
    company: 'Digital Solutions Ltd.',
    content: "The attention to detail and problem-solving skills demonstrated by this developer were impressive. They delivered a high-quality product on time and within budget.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'Startup Founder',
    company: 'InnovateTech',
    content: "This developer's expertise in both frontend and backend technologies was crucial in bringing our startup's vision to life. Their work exceeded our expectations.",
    rating: 4,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
];

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Testimonials</h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-gray-100 rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full mr-4 object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold">{testimonials[currentTestimonial].name}</h3>
                <p className="text-gray-600">
                  {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                </p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">{testimonials[currentTestimonial].content}</p>
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={20}
                  className={index < testimonials[currentTestimonial].rating ? 'text-yellow-400' : 'text-gray-300'}
                  fill={index < testimonials[currentTestimonial].rating ? 'currentColor' : 'none'}
                />
              ))}
            </div>
          </div>
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full bg-white rounded-full p-2 shadow-md"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full bg-white rounded-full p-2 shadow-md"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;