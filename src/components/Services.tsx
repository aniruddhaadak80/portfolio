import React, { useState, useEffect } from 'react'
import { Code, Server, Database, Cpu, ArrowRight, X, Play, Pause, RotateCcw } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
  {
    title: 'Web Development',
    description: 'Creating responsive and dynamic web applications using modern frameworks and technologies.',
    icon: Code,
    color: 'text-teal-400',
    bgColor: 'bg-teal-50',
    hoverColor: 'hover:bg-teal-100',
  },
  {
    title: 'Backend Development',
    description: 'Building robust and scalable server-side applications and APIs.',
    icon: Server,
    color: 'text-green-500',
    bgColor: 'bg-green-50',
    hoverColor: 'hover:bg-green-100',
  },
  {
    title: 'Database Design',
    description: 'Designing and optimizing database structures for efficient data management.',
    icon: Database,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50',
    hoverColor: 'hover:bg-yellow-100',
  },
  {
    title: 'AI Integration',
    description: 'Incorporating artificial intelligence and machine learning into applications for enhanced functionality.',
    icon: Cpu,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    hoverColor: 'hover:bg-purple-100',
  },
]

const ServiceCard: React.FC<{
  service: typeof services[0]
  index: number
}> = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [codeSnippet, setCodeSnippet] = useState('')
  const [isAnimating, setIsAnimating] = useState(false)
  const [apiResponse, setApiResponse] = useState('')
  const [databaseRecords, setDatabaseRecords] = useState([])
  const [aiPrediction, setAiPrediction] = useState(0)

  const handleLearnMore = () => {
    setIsModalOpen(true)
    switch (service.title) {
      case 'Web Development':
        setCodeSnippet(`
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const AnimatedCounter = () => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: [1, 1.2, 1],
      transition: { duration: 0.3 }
    });
  }, [count, controls]);

  return (
    <div className="text-center">
      <motion.div
        animate={controls}
        className="text-4xl font-bold mb-4"
      >
        {count}
      </motion.div>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-teal-500 text-white px-4 py-2 rounded"
      >
        Increment
      </button>
    </div>
  );
};

export default AnimatedCounter;
        `)
        break
      case 'Backend Development':
        setCodeSnippet(`
const express = require('express');
const app = express();
const port = 3000;

app.get('/api/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  res.json({ number: randomNumber });
});

app.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});
        `)
        break
      case 'Database Design':
        setCodeSnippet(`
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  stock INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO products (name, price, stock) VALUES
  ('Laptop', 999.99, 50),
  ('Smartphone', 599.99, 100),
  ('Headphones', 149.99, 200);

CREATE INDEX idx_product_name ON products(name);
        `)
        setDatabaseRecords([
          { id: 1, name: 'Laptop', price: 999.99, stock: 50 },
          { id: 2, name: 'Smartphone', price: 599.99, stock: 100 },
          { id: 3, name: 'Headphones', price: 149.99, stock: 200 },
        ])
        break
      case 'AI Integration':
        setCodeSnippet(`
import tensorflow as tf
from tensorflow import keras

# Create a simple neural network for binary classification
model = keras.Sequential([
    keras.layers.Dense(64, activation='relu', input_shape=(10,)),
    keras.layers.Dense(32, activation='relu'),
    keras.layers.Dense(1, activation='sigmoid')
])

model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

# Generate some random data for demonstration
import numpy as np
X_train = np.random.random((1000, 10))
y_train = np.random.randint(2, size=(1000, 1))

# Train the model
model.fit(X_train, y_train, epochs=10, batch_size=32, validation_split=0.2, verbose=0)

# Make predictions
X_test = np.random.random((10, 10))
predictions = model.predict(X_test)
        `)
        break
    }
  }

  const handleAnimateButton = () => {
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 3000)
  }

  const handleApiCall = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1
    setApiResponse(`API Response: { "number": ${randomNumber} }`)
  }

  const handleDatabaseQuery = () => {
    const randomIndex = Math.floor(Math.random() * databaseRecords.length)
    const record = databaseRecords[randomIndex]
    setApiResponse(`Query Result: ${JSON.stringify(record)}`)
  }

  const handleAiPredict = () => {
    const randomPrediction = Math.random()
    setAiPrediction(randomPrediction)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`${service.bgColor} ${service.hoverColor} p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl group relative overflow-hidden`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative z-10">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <service.icon size={48} className={`${service.color} mb-4`} />
          </motion.div>
          <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 mb-4">
            {service.description}
          </p>
          <motion.button
            className={`flex items-center ${service.color} font-semibold transition-colors duration-300`}
            initial={{ opacity: 1, x: 0 }}
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleLearnMore}
          >
            Learn More <ArrowRight className="ml-2" size={16} />
          </motion.button>
        </div>
        <div
          className={`absolute inset-0 ${service.bgColor} opacity-50 transition-transform duration-300 ease-in-out ${
            isHovered ? 'scale-95' : 'scale-0'
          }`}
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
          }}
        ></div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className={`${service.bgColor} p-6 rounded-xl shadow-2xl max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className={`text-2xl font-bold ${service.color}`}>{service.title} Demo</h3>
                <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                  <X size={24} />
                </button>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-300">{codeSnippet}</pre>
              </div>
              {service.title === 'Web Development' && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold mb-2">Live Demo:</h4>
                  <div className="text-center">
                    <motion.div
                      className="text-4xl font-bold mb-4"
                      animate={isAnimating ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      {isAnimating ? 'Animating!' : 'Click to Animate'}
                    </motion.div>
                    <button
                      onClick={handleAnimateButton}
                      className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition-colors duration-300"
                    >
                      {isAnimating ? 'Animating...' : 'Animate'}
                    </button>
                  </div>
                </div>
              )}
              {service.title === 'Backend Development' && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold mb-2">API Tester:</h4>
                  <button
                    onClick={handleApiCall}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300"
                  >
                    Generate Random Number
                  </button>
                  {apiResponse && (
                    <div className="mt-2 p-2 bg-white rounded">
                      <code>{apiResponse}</code>
                    </div>
                  )}
                </div>
              )}
              {service.title === 'Database Design' && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold mb-2">Database Query Simulator:</h4>
                  <button
                    onClick={handleDatabaseQuery}
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors duration-300"
                  >
                    Run Random Query
                  </button>
                  {apiResponse && (
                    <div className="mt-2 p-2 bg-white rounded">
                      <code>{apiResponse}</code>
                    </div>
                  )}
                  <div className="mt-4 bg-white p-4 rounded-lg shadow">
                    <h5 className="font-semibold mb-2">Sample Data:</h5>
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th className="text-left">ID</th>
                          <th className="text-left">Name</th>
                          <th className="text-left">Price</th>
                          <th className="text-left">Stock</th>
                        </tr>
                      </thead>
                      <tbody>
                        {databaseRecords.map((record) => (
                          <tr key={record.id}>
                            <td>{record.id}</td>
                            <td>{record.name}</td>
                            <td>${record.price.toFixed(2)}</td>
                            <td>{record.stock}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              {service.title === 'AI Integration' && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold mb-2">AI Model Simulator:</h4>
                  <button
                    onClick={handleAiPredict}
                    className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors duration-300"
                  >
                    Make Prediction
                  </button>
                  {aiPrediction !== 0 && (
                    <div className="mt-2 p-2 bg-white rounded">
                      <p>Prediction: {aiPrediction.toFixed(4)}</p>
                      <p>Class: {aiPrediction > 0.5 ? 'Positive' : 'Negative'}</p>
                    </div>
                  )}
                  <div className="mt-4 bg-white p-4 rounded-lg shadow">
                    <h5 className="font-semibold mb-2">Model Architecture:</h5>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mb-2">
                        Input (10)
                      </div>
                      <div className="w-1 h-4 bg-purple-400"></div>
                      <div className="w-20 h-20 bg-purple-300 rounded-lg flex items-center justify-center mb-2">
                        Dense (64)
                      </div>
                      <div className="w-1 h-4 bg-purple-400"></div>
                      <div className="w-20 h-20 bg-purple-300 rounded-lg flex items-center justify-center mb-2">
                        Dense (32)
                      </div>
                      <div className="w-1 h-4 bg-purple-400"></div>
                      <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center">
                        Output (1)
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold mb-12 text-center text-gray-800 relative inline-block"
        >
          Our Services
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 via-green-500 to-purple-500"></span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
