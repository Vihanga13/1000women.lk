import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InclusiveGrowth = () => {
  const [activeCard, setActiveCard] = useState(null);

  const benefits = [
    {
      icon: '/images/Inclusive Growth.svg',
      title: "Equitable Communities",
      description: "Creating opportunities that reach every corner of society",
      color: "from-orange-400 to-orange-600"
    },
    {
      icon: '/images/Inclusive Growth (2).svg',
      title: "Shared Success",
      description: "When one rises, we all thrive together",
      color: "from-orange-500 to-orange-700"
    },
    {
      icon: '/images/Inclusive Growth (3).svg',
      title: "Resilient Systems",
      description: "Building tourism that withstands challenges",
      color: "from-orange-600 to-orange-800"
    }
  ];

  const impactAreas = [
    { label: "Rural Women", value: "40%", icon: "🏘️" },
    { label: "Women with Disabilities", value: "15%", icon: "♿" },
    { label: "Youth Leaders", value: "25%", icon: "👥" },
    { label: "Economic Growth", value: "30%", icon: "📈" }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section with Animated Background */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-orange-100 via-orange-50 to-white py-24 px-4 overflow-hidden"
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Inclusive%20Growth%20hero_result.webp"
            alt="Inclusive Growth hero"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-primary/20 to-orange-secondary/20"></div>
        </div>

        {/* Animated background circles */}
        <div className="absolute inset-0 z-10 opacity-20">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-orange"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
                x: [0, Math.random() * 50 - 25, 0],
                y: [0, Math.random() * 50 - 25, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-20">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="text-6xl mb-4">🌱</div>
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold text-gradient mb-6"
          >
            Inclusive Growth
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Growth that benefits everyone, leaving no one behind
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Core Message Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-orange-50 to-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16 relative overflow-hidden"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-orange opacity-10 rounded-full"
            />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                How Inclusive Growth Relates to 1000Women
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                By empowering women with <span className="font-bold text-orange-primary">skills</span>, <span className="font-bold text-orange-primary">leadership</span> and <span className="font-bold text-orange-primary">opportunities</span>, 1000Women ensures tourism and local economies grow in ways that benefit everyone.
              </p>
            </div>
          </motion.div>

          {/* Interactive Benefit Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.05, y: -10 }}
                onHoverStart={() => setActiveCard(index)}
                onHoverEnd={() => setActiveCard(null)}
                className={`relative p-8 rounded-2xl shadow-lg cursor-pointer transition-all duration-300 ${
                  activeCard === index
                    ? 'bg-gradient-to-br ' + benefit.color + ' text-white'
                    : 'bg-white text-gray-800'
                }`}
              >
                <motion.div
                  animate={activeCard === index ? { rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.5 }}
                  className="mb-4 flex justify-center"
                >
                  <img src={benefit.icon} alt={benefit.title} className="w-20 h-20 md:w-24 md:h-24 object-contain" />
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                <p className={`text-lg ${activeCard === index ? 'text-white' : 'text-gray-600'}`}>
                  {benefit.description}
                </p>

                {activeCard === index && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute bottom-4 right-4"
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Impact Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 mb-16 relative overflow-hidden"
          >
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"
            />
            
            <h3 className="text-3xl font-bold text-white text-center mb-12 relative z-10">
              Our Inclusive Impact
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
              {impactAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-center"
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    className="text-5xl mb-4"
                  >
                    {area.icon}
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="text-4xl font-bold text-orange-400 mb-2"
                  >
                    {area.value}
                  </motion.div>
                  <div className="text-white font-semibold">{area.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Detailed Sections with Hover Effects */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-orange-50 to-white rounded-2xl p-8 shadow-lg cursor-pointer border-l-4 border-orange-primary"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="text-4xl"
                >
                  🎯
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Reaching Marginalized Women</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Marginalized women, including those from <span className="font-semibold text-orange-primary">rural areas</span> or with <span className="font-semibold text-orange-primary">disabilities</span>, gain access to income and leadership roles, creating more equitable communities.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-white to-orange-50 rounded-2xl p-8 shadow-lg cursor-pointer border-r-4 border-orange-primary"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-4xl"
                >
                  🌟
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Shared, Resilient Growth</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    It is growth that <span className="font-semibold text-orange-primary">does not leave anyone behind</span>, where success is shared, and the system itself becomes <span className="font-semibold text-orange-primary">stronger and more resilient</span>.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(249, 115, 22, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-gradient-orange text-white font-bold rounded-full text-xl shadow-2xl relative overflow-hidden"
            >
              <span className="relative z-10">Join Our Inclusive Movement ✨</span>
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InclusiveGrowth;
