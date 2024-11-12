'use client'

import { motion, useAnimation } from 'framer-motion'
import { useState, useEffect } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const floatingAnimation = {
  y: ['-10%', '10%'],
  transition: {
    y: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut'
    }
  }
}

const hoveringAnimation = {
  scale: [1, 1.05, 1],
  rotate: [0, 5, -5, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    repeatType: 'loop',
    ease: 'easeInOut'
  }
}

const lightenColor = (color: string) => {
  const lighterShades = {
    'bg-blue-500': 'bg-blue-400',
    'bg-yellow-500': 'bg-yellow-400',
    'bg-red-500': 'bg-red-400'
  };
  return lighterShades[color] || color;
};

export default function Resume() {
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      backgroundColor: ["#4a148c", "#1a237e", "#004d40", "#b71c1c"],
      transition: { duration: 20, repeat: Infinity, ease: "linear" }
    })
  }, [controls])

  const skills = [
    { name: 'Next.js', color: 'bg-blue-500' },
    { name: 'React', color: 'bg-cyan-500' },
    { name: 'Tailwind CSS', color: 'bg-teal-500' },
    { name: 'JavaScript', color: 'bg-yellow-500' },
    { name: 'TypeScript', color: 'bg-blue-600' },
    { name: 'Node.js', color: 'bg-green-500' }
  ]

  const education = [
    { degree: 'Master of Computer Science', institution: 'Tech University', year: '2020-2022', color: 'bg-purple-500' },
    { degree: 'Bachelor of Software Engineering', institution: 'Code College', year: '2016-2020', color: 'bg-indigo-500' }
  ]

  const projects = [
    { title: 'E-commerce Platform', description: 'Built with Next.js and Stripe', link: 'https://github.com/yourusername/ecommerce' },
    { title: 'Task Management App', description: 'React and Firebase real-time database', link: 'https://github.com/yourusername/taskmanager' }
  ]

  const achievements = [
    { title: 'Best Developer Award', description: 'Recognized for outstanding contributions', icon: '🏆' },
    { title: 'Hackathon Winner', description: 'First place in national coding competition', icon: '🥇' }
  ]

  const languages = [
    { name: 'English', proficiency: 95, color: 'bg-blue-500' },
    { name: 'Spanish', proficiency: 80, color: 'bg-yellow-500' },
    { name: 'French', proficiency: 60, color: 'bg-red-500' }
  ]

  return (
        <section id="resume" className="py-20 bg-white">
    <motion.div 
      className="min-h-screen p-8 text-white overflow-hidden"
      animate={controls}
    >
      <motion.div
        initial="initial"
        animate="animate"
        variants={stagger}
        className="max-w-4xl mx-auto space-y-12"
      >
        {/* Header/Profile Overview */}
        <motion.header variants={fadeInUp} className="text-center">
          <motion.div
            className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg"
            style={{ boxShadow: '0 0 25px rgba(255,255,255,0.5)' }}
            animate={floatingAnimation}
          >
            <img src="https://tinyurl.com/2xj2ahws" alt="MyProfileImage" width={160} height={160} className="object-cover" />
          </motion.div>
          <motion.h1
            className="text-4xl font-bold mb-2"
            animate={{
              color: ['#ffffff', '#ffd700', '#ff69b4', '#ffffff'],
              transition: { duration: 5, repeat: Infinity }
            }}
          >
            Aniruddha Adak
          </motion.h1>
          <motion.h2
            className="text-2xl mb-4"
            animate={{
              color: ['#4ade80', '#22d3ee', '#818cf8', '#4ade80'],
              transition: { duration: 5, repeat: Infinity }
            }}
          >
           A Passionate Full Stack Developer
          </motion.h2>
          <motion.p
            className="text-lg max-w-2xl mx-auto"
            animate={{ opacity: [0.7, 1, 0.7], transition: { duration: 3, repeat: Infinity } }}
          >
            Passionate about creating seamless user experiences and robust backend systems. Specializing in modern web technologies and always eager to learn more.
          </motion.p>
        </motion.header>

        {/* Skills */}
        <motion.section variants={fadeInUp}>
          <h2 className="text-3xl font-semibold mb-4 text-center">Skills</h2>
          <motion.div className="flex flex-wrap justify-center gap-4" variants={stagger}>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className={`px-4 py-2 rounded-full text-white font-semibold ${skill.color}`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                animate={floatingAnimation}
              >
                {skill.name}
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Education */}
        <motion.section variants={fadeInUp}>
          <h2 className="text-3xl font-semibold mb-4 text-center">Education</h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className={`p-4 rounded-lg ${edu.color}`}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={hoveringAnimation}
                animate={floatingAnimation}
              >
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p>{edu.institution}</p>
                <p className="text-sm">{edu.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section variants={fadeInUp}>
          <h2 className="text-3xl font-semibold mb-4 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-10 p-4 rounded-lg"
                whileHover={hoveringAnimation}
                animate={floatingAnimation}
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <motion.a
                  href={project.link}
                  className="inline-block bg-teal-500 text-white px-4 py-2 rounded"
                  whileHover={{ scale: 1.1, boxShadow: '0 0 8px rgba(0,255,255,0.5)' }}
                  animate={{
                    backgroundColor: ['#14b8a6', '#06b6d4', '#3b82f6', '#14b8a6'],
                    transition: { duration: 5, repeat: Infinity }
                  }}
                >
                  View Project
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Achievements */}
        <motion.section variants={fadeInUp}>
          <h2 className="text-3xl font-semibold mb-4 text-center">Achievements</h2>
          <motion.div className="grid md:grid-cols-2 gap-4" variants={stagger}>
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={hoveringAnimation}
                animate={floatingAnimation}
              >
                <span className="text-4xl mb-2">{achievement.icon}</span>
                <h3 className="text-xl font-semibold">{achievement.title}</h3>
                <p>{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Language Proficiency */}
        <motion.section variants={fadeInUp}>
          <h2 className="text-3xl font-semibold mb-4 text-center">Language Proficiency</h2>
          <div className="space-y-4">
            {languages.map((language, index) => (
              <motion.div key={index} className="relative pt-1" whileHover={hoveringAnimation}>
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-teal-500">
                      {language.name}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-white">
                      {language.proficiency}%
                    </span>
                  </div>
                </div>
                <motion.div
                  className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-teal-200"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                >
                  <motion.div
                    style={{ width: `${language.proficiency}%` }}
                    className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${language.color}`}
                    animate={{
                      backgroundColor: [language.color, lightenColor(language.color), language.color],
                      transition: { duration: 5, repeat: Infinity }
                    }}
                  ></motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Information */}
        <motion.section variants={fadeInUp}>
          <h2 className="text-3xl font-semibold mb-4 text-center">Contact Information</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: '📧', text: 'Email', href: 'mailto:john.doe@example.com' },
              { icon: '📞', text: 'Phone', href: 'tel:+1234567890' },
              { icon: '💼', text: 'LinkedIn', href: 'https://linkedin.com/in/johndoe' },
              { icon: '🐙', text: 'GitHub', href: 'https://github.com/johndoe' }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-full"
                whileHover={hoveringAnimation}
                animate={floatingAnimation}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.text}</span>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer variants={fadeInUp} className="text-center">
          <motion.a
            href="/john-doe-resume.pdf"
            download
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-3 rounded-full text-lg font-semibold"
            whileHover={hoveringAnimation}
            animate={floatingAnimation}
          >
            <span className="mr-2">📄</span>
            <span>Download Resume</span>
          </motion.a>
        </motion.footer>
      </motion.div>
    </motion.div>
 </section>
  )
}
