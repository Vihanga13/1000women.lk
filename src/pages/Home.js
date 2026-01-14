import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BackgroundAnimation from '../components/BackgroundAnimation';

const Home = () => {
  return (
    <div className="min-h-screen pt-20 relative overflow-x-hidden">
      <BackgroundAnimation />
      {/* Hero Section with Background */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-gradient-orange text-white py-40 px-4 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Home_result.webp"
            alt="Women empowerment"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-primary/20 to-orange-secondary/20"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white opacity-10 rounded-full"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
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

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6 drop-shadow-2xl"
          >
            1000Women
          </motion.h1>
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl md:text-5xl font-semibold mb-16 drop-shadow-lg"
          >
            Where Women Rise; Tourism Thrives
          </motion.h2>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link
              to="/join-contact"
              className="inline-block bg-white text-orange-primary px-12 py-5 rounded-full text-2xl font-bold hover:bg-gray-100 transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-white/50"
            >
              Join the Movement
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* The Heart of 1000Women Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-4">
                The Heart of 1000Women
              </h2>
            </motion.div>
            <div className="w-32 h-1 bg-gradient-orange mx-auto rounded-full"></div>
          </motion.div>

          {/* Content Cards with Enhanced Design */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                whileHover={{ x: 10 }}
                className="bg-gradient-to-r from-orange-50 to-white p-8 rounded-2xl border-l-4 border-orange-primary shadow-lg"
              >
                <p className="text-2xl text-gray-800 leading-relaxed font-medium">
                  Tourism is built on <span className="text-orange-primary font-bold">people, culture and connection.</span>
                </p>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="bg-white p-8 rounded-2xl border-l-4 border-orange-secondary shadow-lg"
              >
                <p className="text-xl text-gray-700 leading-relaxed">
                  At the heart of this global industry stand <span className="font-bold text-orange-primary">women</span>welcoming, nurturing, leading and sustaining destinations. Yet, despite their contribution, many women remain <span className="font-semibold underline decoration-orange-primary">underrepresented, underpaid and unheard.</span>
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-orange text-white p-8 rounded-2xl shadow-2xl"
              >
                <p className="text-2xl leading-relaxed font-bold">
                  1000Women is a transformative initiative created to change this reality.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="sticky top-24">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="rounded-3xl overflow-hidden shadow-2xl relative"
                >
                  <img
                    src="/images/home%20gr_result.webp"
                    alt="Empowered women in tourism"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0  flex items-end p-8">
                    <p className="text-white text-2xl font-bold drop-shadow-lg">
                      Empowering Women in Tourism
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Mission Statement - Eye-catching Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative my-20"
          >
            <div className="absolute inset-0 bg-gradient-orange blur-2xl opacity-30 rounded-3xl"></div>
            <div className="relative bg-gradient-orange text-white p-12 md:p-16 rounded-3xl shadow-2xl">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 right-8 text-6xl"
              >
                ✨
              </motion.div>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 text-center">Our Mission</h3>
              <div className="space-y-6 text-center">
                <p className="text-2xl md:text-3xl leading-relaxed font-semibold">
                  Our mission is to uplift, include and empower <span className="bg-white text-orange-primary px-4 py-1 rounded-full">1,000 women</span> into the tourism industry, enabling them to:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
                  {['Rise with confidence', 'Build skills', 'Earn sustainable incomes', 'Lead with purpose', 'Grow within strong communities'].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 2 }}
                      className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-xl text-lg font-medium"
                    >
                      ✓ {item}
                    </motion.div>
                  ))}
                </div>
                <motion.p
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-2xl md:text-3xl leading-relaxed font-bold mt-8 bg-white text-orange-primary p-6 rounded-2xl"
                >
                  Because when women are empowered, tourism becomes more inclusive, resilient and meaningful.
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 my-20"
          >
            {[
              { number: '1000', label: 'Women to Empower', icon: <img src="/images/Women%20to%20Empower_result.webp" alt="Women to Empower" className="mx-auto w-20 h-20 object-cover rounded-full" /> },
              { number: '5', label: 'Pillars of Growth', icon: <img src="/images/Pillars%20of%20Growth_result.webp" alt="Pillars of Growth" className="mx-auto w-20 h-20 object-cover rounded-full" /> },
              { number: '∞', label: 'Impact Created', icon: <img src="/images/Impact%20Created_result.webp" alt="Impact Created" className="mx-auto w-20 h-20 object-cover rounded-full" /> },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                className="bg-white p-8 rounded-3xl shadow-xl text-center border-2 border-orange-primary"
              >
                <div className="text-6xl mb-4">{stat.icon}</div>
                <div className="text-5xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-xl text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-orange-50 p-16 rounded-3xl shadow-2xl"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-orange opacity-10 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-orange opacity-10 rounded-full"
            />
            
            <div className="relative z-10 text-center">
              <motion.h3
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl md:text-5xl font-bold text-gradient mb-6"
              >
                Ready to Make a Difference?
              </motion.h3>
              <p className="text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
                Join us in empowering women and transforming the tourism industry for a more inclusive future.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link
                      to="/about"
                      className="inline-block bg-gradient-orange text-white px-10 py-5 rounded-full text-xl font-bold hover:shadow-2xl transform transition-all duration-300"
                    >
                      Learn More →
                    </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/join-contact"
                    className="inline-block bg-white text-orange-primary border-4 border-orange-primary px-10 py-5 rounded-full text-xl font-bold hover:bg-orange-primary hover:text-white transform transition-all duration-300 shadow-lg"
                  >
                    Get Involved ✨
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
