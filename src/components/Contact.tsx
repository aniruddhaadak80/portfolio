import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [currentColor, setCurrentColor] = useState<string>('#8a4af3');
  const [buttonColor, setButtonColor] = useState<string>('#8a4af3');
  const [iconColor, setIconColor] = useState<string>('#8a4af3');
  const [labelColor, setLabelColor] = useState<string>('#8a4af3');
  const [cursorEmoji, setCursorEmoji] = useState<string>('🔥');

  const [emailColor, setEmailColor] = useState<string>('#8a4af3');
  const [phoneColor, setPhoneColor] = useState<string>('#8a4af3');
  const [addressColor, setAddressColor] = useState<string>('#8a4af3');

  const colors = [
    '#8a4af3', '#fcd34d', '#34d399', '#ef4444', '#10b981', '#3b82f6',
    '#6366f1', '#e11d48', '#9333ea', '#14b8a6', '#ff4500', '#00bfff',
    '#ff6347', '#adff2f', '#7cfc00', '#1e90ff', '#ff1493', '#ff8c00',
    '#b22222', '#9acd32', '#ff76a2', '#20b2aa', '#ffd700', '#ba55d3',
    '#00ced1', '#ff00ff', '#ff8c00', '#e9967a', '#800080', '#00ff7f',
    '#ff1493', '#ff6347', '#ffff00', '#ff9e00', '#00ff00', '#b0e0e6',
    '#a52a2a', '#f0e68c', '#ff00ff', '#d2691e', '#ff6347', '#00fa9a',
    '#800000', '#ffb6c1', '#20b2aa', '#f0f8ff', '#adff2f', '#ff1493',
    '#ffd700', '#ff4500', '#ff6347', '#ff77ff', '#ff5c8d', '#f28500',
    '#ff33cc', '#9c00d4', '#6a5acd', '#ffcc00', '#ff3366', '#00bcd4',
    '#64ffda', '#f5b800', '#4caf50', '#ff2f92', '#ff9800', '#cc00ff',
    '#7c4dff', '#90a4ae'
  ];

  const contactEmojis = [
    "📱", "📲", "☎️", "📞", "🤳", "📶", "📳", "🤙", "💌", "✉️", "📧", 
    "📨", "📩", "📤", "📮", "📭", "📬", "📫", "📪", "📥", "🌐", "🌐"
  ];

  const getRandomColor = (excludeColor: string) => {
    let color;
    do {
      color = colors[Math.floor(Math.random() * colors.length)];
    } while (color === excludeColor);
    return color;
  };

  const getRandomCursor = () => contactEmojis[Math.floor(Math.random() * contactEmojis.length)];

  useEffect(() => {
    const interval = setInterval(() => {
      setLabelColor(getRandomColor(labelColor));
      setCurrentColor(getRandomColor(currentColor));
      setButtonColor(getRandomColor(buttonColor));
      setIconColor(getRandomColor(iconColor));
      setEmailColor(getRandomColor(emailColor));
      setPhoneColor(getRandomColor(phoneColor));
      setAddressColor(getRandomColor(addressColor));
      setCursorEmoji(getRandomCursor());
    }, 1000);

    return () => clearInterval(interval);
  }, [currentColor, labelColor, buttonColor, iconColor, emailColor, phoneColor, addressColor]);

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
        <motion.h2
          className="text-5xl font-extrabold mb-12 text-center text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ color: labelColor }}
        >
          Contact Me
        </motion.h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2 text-lg"
                >
                  Name <span>{cursorEmoji}</span>
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  aria-label="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-gray-800 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 shadow-inner bg-gradient-to-r from-pink-100 to-yellow-100 hover:scale-105"
                  required
                  whileFocus={{ scale: 1.05, transition: { duration: 0.2 } }}
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ delay: 0.3 }}
                  style={{ borderColor: currentColor }}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2 text-lg"
                >
                  Email <span>{cursorEmoji}</span>
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  aria-label="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-gray-800 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 shadow-inner bg-gradient-to-r from-green-100 to-teal-100 hover:scale-105"
                  required
                  whileFocus={{ scale: 1.05, transition: { duration: 0.2 } }}
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ delay: 0.4 }}
                  style={{ borderColor: currentColor }}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2 text-lg"
                >
                  Message <span>{cursorEmoji}</span>
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  aria-label="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 text-gray-800 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 shadow-inner bg-gradient-to-r from-indigo-100 to-purple-100 hover:scale-105"
                  required
                  whileFocus={{ scale: 1.05, transition: { duration: 0.2 } }}
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ delay: 0.5 }}
                  style={{ borderColor: currentColor }}
                />
              </div>
              
               <motion.button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-3 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.3 }}
                style={{ backgroundColor: buttonColor }}
              >
                <Send size={20} className="mr-2" />
                Send Message
              </motion.button>

            </motion.form>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <motion.div
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <Mail size={30} color={iconColor} className="mr-4" />
                <a
                  href="mailto:aniruddhaadak80@gmail.com"
                  className="text-gray-700"
                  style={{ color: emailColor }}
                >
                  aniruddhaadak80@gmail.com
                </a>
              </div>
              <div className="flex items-center mb-6">
                <Phone size={30} color={iconColor} className="mr-4" />
                <a
                  href="tel:+917029155691"
                  className="text-gray-700"
                  style={{ color: phoneColor }}
                >
                  +917029155691
                </a>
              </div>
              <div className="flex items-center">
                <MapPin size={30} color={iconColor} className="mr-4" />
                <p className="text-gray-700" style={{ color: addressColor }}>
                  Kolkata, West Bengal, India
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
