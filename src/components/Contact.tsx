import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold mb-12 text-center text-gray-800 animate-fade-in-down">Contact Me</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 text-lg">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-gray-800 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 shadow-inner"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text-lg">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-gray-800 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 shadow-inner"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 text-lg">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 text-gray-800 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 shadow-inner"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-3 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500">
              <h3 className="text-3xl font-bold mb-6 text-gray-800">Get in Touch</h3>
              <div className="flex items-center mb-6 group">
                <Mail className="text-blue-500 mr-4 group-hover:animate-pulse transition duration-300" />
                <a href="mailto:aniruddhaadak80@gmail.com" className="text-gray-700 text-lg hover:text-blue-500 transition-colors duration-300">aniruddhaadak80@gmail.com</a>
              </div>
              <div className="flex items-center mb-6 group">
                <Phone className="text-blue-500 mr-4 group-hover:animate-pulse transition duration-300" />
                <a href="tel:+917029155691" className="text-gray-700 text-lg hover:text-blue-500 transition-colors duration-300">+91 7029155691</a>
              </div>
              <div className="flex items-center group">
                <MapPin className="text-blue-500 mr-4 group-hover:animate-pulse transition duration-300" />
                <span className="text-gray-700 text-lg">West Bengal, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
