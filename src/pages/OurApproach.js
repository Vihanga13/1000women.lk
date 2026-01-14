import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const OurApproach = () => {
  const [activePillar, setActivePillar] = useState(0);

  const approachItems = [
    'Capacity-building and training programs',
    'Mentorship and coaching',
    'Partnerships with tourism stakeholders',
    'Community-based tourism initiatives',
    'Advocacy for gender-inclusive tourism policies',
  ];

  const pillars = [
    {
      title: 'Confidence',
      icon: '💪',
      color: 'from-orange-400 to-orange-600',
      description: 'Self-belief, voice, professional identity',
      details: 'We work to strengthen women\'s self-belief, professional identity and voice—helping them recognize their value, claim space and participate confidently in the tourism ecosystem.',
    },
    {
      title: 'Skill',
      icon: '🎓',
      color: 'from-orange-500 to-orange-700',
      description: 'Tourism skills, communication, entrepreneurship, digital literacy',
      details: '1000Women provides access to tourism-relevant skills including service excellence, communication, entrepreneurship, digital literacy, leadership, and business management—equipping women to compete and grow in a dynamic industry.',
    },
    {
      title: 'Income',
      icon: '💰',
      color: 'from-orange-primary to-orange-secondary',
      description: 'Sustainable livelihoods, employment, entrepreneurship',
      details: 'We support women in developing sustainable income streams through employment, entrepreneurship, community tourism, and value-added tourism services—ensuring empowerment translates into financial stability.',
    },
    {
      title: 'Leadership',
      icon: '👑',
      color: 'from-orange-600 to-orange-primary',
      description: 'Decision-makers, role models, governance participation',
      details: '1000Women nurtures women as decision-makers, role models, and change agents—encouraging participation in leadership roles within businesses, communities, and tourism governance.',
    },
    {
      title: 'Community',
      icon: '🤝',
      color: 'from-orange-secondary to-orange-400',
      description: 'Networks, mentorship, collective growth',
      details: 'We foster supportive networks where women learn together, collaborate, mentor one another, and rise collectively—creating lasting impact beyond individuals.',
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Enhanced Header */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-orange text-white py-32 px-4 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Team collaboration"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-primary/20 to-orange-secondary/20"></div>
        </div>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white opacity-10 rounded-full"
              style={{
                width: Math.random() * 80 + 30,
                height: Math.random() * 80 + 30,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-50">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="text-8xl mb-6"
          >
            🎯
          </motion.div>
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold mb-6 drop-shadow-2xl"
          >
            Our Approach
          </motion.h1>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-3xl font-light drop-shadow-lg"
          >
            How We Work & Our Framework
          </motion.p>
        </div>
      </motion.section>

      {/* Our Mission Section - NEW */}
      <section className="py-20 px-4 bg-gradient-to-br from-white to-orange-50">
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
              className="text-5xl md:text-6xl font-bold text-gradient mb-6"
            >
              Our Mission
            </motion.h2>
            <div className="w-32 h-1 bg-gradient-orange mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-orange blur-2xl opacity-20 rounded-3xl"></div>
            <div className="relative bg-gradient-orange text-white p-12 md:p-16 rounded-3xl shadow-2xl">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 right-8 text-6xl"
              >
                ✨
              </motion.div>
              
              <div className="text-center">
                <p className="text-2xl md:text-3xl leading-relaxed mb-8">
                  Empower{' '}
                  <motion.span 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-block bg-white text-orange-primary px-6 py-2 rounded-full font-bold text-4xl shadow-lg mx-2"
                  >
                    1,000 women
                  </motion.span>{' '}
                  through a structured, holistic framework
                </p>
                
                <div className="my-12 flex items-center justify-center">
                  <div className="h-1 w-20 bg-white opacity-30"></div>
                  <span className="mx-4 text-xl">Focused on</span>
                  <div className="h-1 w-20 bg-white opacity-30"></div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl font-bold mb-8"
                >
                  The 5 Interconnected Pillars
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                  {pillars.map((pillar, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                      whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                      className="bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-2xl text-center cursor-pointer"
                    >
                      <div className="text-4xl mb-2">{pillar.icon}</div>
                      <div className="text-lg font-bold">{pillar.title}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The 5 Pillars of Empowerment - Interactive Section */}
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
              className="text-5xl md:text-6xl font-bold text-gradient mb-6"
            >
              The 5 Pillars of Empowerment
            </motion.h2>
            <div className="w-32 h-1 bg-gradient-orange mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Click on each pillar to explore our comprehensive framework
            </p>
          </motion.div>

          {/* Interactive Pillar Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {pillars.map((pillar, index) => (
              <motion.button
                key={index}
                onClick={() => setActivePillar(index)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                  activePillar === index
                    ? `bg-gradient-to-r ${pillar.color} text-white shadow-2xl`
                    : 'bg-white text-gray-700 border-2 border-orange-200 hover:border-orange-primary shadow-lg'
                }`}
              >
                <span className="text-2xl mr-2">{pillar.icon}</span>
                {pillar.title}
              </motion.button>
            ))}
          </div>

          {/* Active Pillar Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className={`bg-gradient-to-br ${pillars[activePillar].color} text-white p-12 md:p-16 rounded-3xl shadow-2xl mb-12 relative overflow-hidden`}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -top-20 -right-20 w-64 h-64 bg-white opacity-10 rounded-full"
              />
              
              <div className="relative z-50">
                <div className="flex items-center justify-center mb-8">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-8xl"
                  >
                    {pillars[activePillar].icon}
                  </motion.div>
                </div>
                <h3 className="text-5xl font-bold mb-6 text-center">
                  {pillars[activePillar].title}
                </h3>
                <p className="text-3xl font-semibold mb-8 text-center opacity-90">
                  {pillars[activePillar].description}
                </p>
                <p className="text-xl leading-relaxed text-center max-w-4xl mx-auto">
                  {pillars[activePillar].details}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* All Pillars Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                onClick={() => setActivePillar(index)}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-orange-primary"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  className={`bg-gradient-to-br ${pillar.color} text-white w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-6 shadow-lg`}
                >
                  {pillar.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-orange-primary mb-4">
                  {index + 1}. {pillar.title}
                </h3>
                <p className="text-lg font-semibold text-gray-700 mb-4">
                  {pillar.description}
                </p>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="mt-4 text-orange-primary font-semibold flex items-center"
                >
                  Explore this pillar
                  <span className="ml-2">→</span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              How We Work
            </h2>
            <div className="w-32 h-1 bg-gradient-orange mx-auto rounded-full mb-8"></div>
            <p className="text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              <span className="font-bold text-orange-primary">1000Women</span> follows a{' '}
              <span className="font-semibold text-orange-primary">
                "layered, long-term empowerment model"
              </span>
              , recognizing that real change takes time.
            </p>
          </motion.div>

          {/* Approach Items */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Our approach includes:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {approachItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-white border-l-4 border-orange-primary p-8 rounded-r-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-start">
                    <span className="bg-gradient-orange text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4 flex-shrink-0 shadow-lg">
                      {index + 1}
                    </span>
                    <p className="text-xl text-gray-700 font-medium pt-2">{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Collaborative Statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-orange blur-xl opacity-20 rounded-3xl"></div>
            <div className="relative bg-gradient-orange text-white p-10 md:p-12 rounded-3xl shadow-2xl text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-4 right-4 text-4xl opacity-30"
              >
                🤝
              </motion.div>
              <p className="text-2xl md:text-3xl leading-relaxed font-semibold">
                We work collaboratively—with women, men, institutions and communities to ensure inclusive progress.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 rounded-3xl overflow-hidden shadow-2xl relative group"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Collaboration and teamwork"
              className="w-full h-96 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-primary via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-white text-3xl font-bold drop-shadow-lg">
                Collaborative Empowerment
              </h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Men as Allies Section - Enhanced */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-12 text-center">
              Men as Allies | Shared Progress
            </h2>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl shadow-2xl p-10 md:p-12 border-2 border-orange-100">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-8"
              >
                <p className="text-3xl text-gray-800 leading-relaxed mb-6 font-bold">
                  Women do not rise in isolation.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-xl text-gray-700 leading-relaxed mb-6 text-center">
                  <span className="font-bold text-orange-primary">1000Women</span> actively recognizes and values the role of{' '}
                  <span className="font-semibold text-orange-primary text-2xl">"men as allies"</span>
                  —as partners, mentors, supporters, and advocates.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed font-semibold text-center">
                  Sustainable empowerment happens when women and men work together with mutual respect and shared responsibility.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Icons Grid - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { emoji: '🤝', label: 'Partners', description: 'Working together' },
              { emoji: '👨‍🏫', label: 'Mentors', description: 'Guiding growth' },
              { emoji: '💪', label: 'Supporters', description: 'Building strength' },
              { emoji: '📣', label: 'Advocates', description: 'Amplifying voices' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -10, rotate: [0, -5, 5, 0] }}
                className="bg-gradient-orange text-white p-8 rounded-2xl text-center shadow-xl cursor-pointer"
              >
                <div className="text-6xl mb-4">{item.emoji}</div>
                <p className="text-xl font-bold mb-2">{item.label}</p>
                <p className="text-sm opacity-90">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurApproach;
