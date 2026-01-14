import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BackgroundAnimation from '../components/BackgroundAnimation';

const MissionPillars = () => {
  const [hoveredPillar, setHoveredPillar] = useState(null);

  const pillars = [
    {
      title: 'Confidence',
      subtitle: 'Self-belief, voice, professional identity',
      icon: '💪',
      color: 'from-orange-400 to-orange-600',
    },
    {
      title: 'Skill',
      subtitle: 'Tourism skills, communication, entrepreneurship, digital literacy',
      icon: '🎓',
      color: 'from-orange-500 to-orange-700',
    },
    {
      title: 'Income',
      subtitle: 'Sustainable livelihoods, employment, entrepreneurship',
      icon: '💰',
      color: 'from-orange-primary to-orange-secondary',
    },
    {
      title: 'Leadership',
      subtitle: 'Decision-makers, role models, governance participation',
      icon: '👑',
      color: 'from-orange-600 to-orange-primary',
    },
    {
      title: 'Community',
      subtitle: 'Networks, mentorship, collective growth',
      icon: '🤝',
      color: 'from-orange-secondary to-orange-400',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20 relative">
      <BackgroundAnimation />
      {/* Hero Section with Animation */}
      <motion.section 
        className="relative bg-gradient-orange text-white py-24 px-4 overflow-hidden" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Mission%20%26%205%20Pillars_result.webp"
            alt="Team collaboration"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-primary/20 to-orange-secondary/20"></div>
        </div>
        
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white opacity-10 rounded-full"
              style={{
                width: Math.random() * 60 + 30,
                height: Math.random() * 60 + 30,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            className="text-7xl mb-6"
          >
            🏛️
          </motion.div>
          <motion.h1 
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold drop-shadow-2xl"
          >
            Our Mission & The 5 Pillars
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 text-2xl md:text-3xl font-light drop-shadow-lg"
          >
            Empower 1,000 women through a structured and holistic framework
          </motion.p>
        </div>
      </motion.section>

      {/* Our Mission Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }} 
            className="mb-16 text-center"
          >
            <motion.h2 
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-4xl md:text-5xl font-bold text-gradient mb-6"
            >
              Our Mission
            </motion.h2>
            <div className="w-32 h-1 bg-gradient-orange mx-auto rounded-full mb-8"></div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            >
              To empower <motion.span 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block bg-gradient-orange text-white px-5 py-2 rounded-full font-bold shadow-lg"
              >
                1,000 women
              </motion.span> across tourism destinations through a structured, holistic framework focused on{' '}
              <span className="font-bold text-orange-primary">five interconnected pillars</span>.
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }} 
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-orange blur-2xl opacity-20 rounded-3xl"></div>
            <div className="relative bg-gradient-to-br from-orange-50 to-white p-10 md:p-14 rounded-3xl shadow-xl border-2 border-orange-100">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-6 right-6 text-5xl opacity-30"
              >
                ✨
              </motion.div>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center">
                Through <span className="font-bold text-orange-primary">mentorship, education, , strategic partnerships and advocacy</span>, 1000Women creates meaningful pathways for women to grow, lead and build sustainable livelihoods within the tourism sector and other connected industries...
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The 5 Pillars Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2 
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-4xl md:text-5xl font-bold text-gradient mb-6"
            >
              The 5 Pillars of Empowerment
            </motion.h2>
            <div className="w-32 h-1 bg-gradient-orange mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A holistic framework for transformative growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
                onHoverStart={() => setHoveredPillar(i)}
                onHoverEnd={() => setHoveredPillar(null)}
                className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                
                <div className="relative p-8">
                  {/* Icon with Animation */}
                  <motion.div
                    animate={hoveredPillar === i ? { rotate: [0, -10, 10, 0], scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.5 }}
                    className={`w-20 h-20 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center text-4xl shadow-lg mb-6`}
                  >
                    {pillar.icon}
                  </motion.div>

                  {/* Pillar Number */}
                  <div className="absolute top-6 right-6 text-6xl font-bold text-orange-primary opacity-10">
                    {i + 1}
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-orange-primary mb-4 group-hover:text-orange-secondary transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Subtitle/Description */}
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {pillar.subtitle}
                  </p>

                  {/* Hover Indicator */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={hoveredPillar === i ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    className="mt-6 flex items-center text-orange-primary font-semibold"
                  >
                    <span className="mr-2">Explore</span>
                    <span>→</span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interconnected Pillars Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-orange text-white p-10 md:p-14 rounded-3xl shadow-2xl max-w-4xl mx-auto relative overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute -top-20 -right-20 w-64 h-64 bg-white opacity-10 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-20 -left-20 w-64 h-64 bg-white opacity-10 rounded-full"
              />
              
              <div className="relative z-10">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-6xl mb-6"
                >
                  🔗
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Five Pillars, One Movement
                </h3>
                <p className="text-xl md:text-2xl leading-relaxed">
                  Each pillar reinforces the others, creating a comprehensive ecosystem where women can truly thrive in the tourism industry.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MissionPillars;
