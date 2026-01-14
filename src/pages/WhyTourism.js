import React from 'react';
import { motion } from 'framer-motion';

const WhyTourism = () => {
  const benefits = [
    'Local economies strengthen',
    'Cultural heritage is preserved',
    'Communities become resilient',
    'Visitor experiences become authentic and meaningful',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-orange text-white py-20 px-4 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Tourism landscape"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-primary/20 to-orange-secondary/20"></div>
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold"
          >
            Why Tourism?
          </motion.h1>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl mt-4"
          >
            The Power of the Industry
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="text-2xl text-gray-700 leading-relaxed mb-8 font-semibold text-center">
              Tourism is one of the most inclusive industries in the world, offering opportunities at grassroots and professional levels.
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-2xl mb-16"
          >
            <img
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Tourism and travel"
              className="w-full h-96 object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gradient mb-8 text-center">
              When women are empowered in tourism:
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="bg-gradient-orange text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-start">
                    <span className="bg-white text-orange-primary w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-4 flex-shrink-0">
                      {index + 1}
                    </span>
                    <p className="text-xl font-semibold leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call Out Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 rounded-3xl p-12 text-center"
          >
            <p className="text-2xl text-gray-700 leading-relaxed font-semibold">
              Investing in women is investing in{' '}
              <span className="text-gradient font-bold">
                "sustainable tourism development"
              </span>
              .
            </p>
          </motion.div>

          {/* Additional Context */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center p-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-gradient-orange text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4"
              >
                🌍
              </motion.div>
              <h3 className="text-xl font-bold text-orange-primary mb-2">
                Global Impact
              </h3>
              <p className="text-gray-600">
                Tourism connects cultures and creates opportunities worldwide
              </p>
            </div>

            <div className="text-center p-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-gradient-orange text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4"
              >
                👥
              </motion.div>
              <h3 className="text-xl font-bold text-orange-primary mb-2">
                Community Growth
              </h3>
              <p className="text-gray-600">
                Empowered women strengthen families and communities
              </p>
            </div>

            <div className="text-center p-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-gradient-orange text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4"
              >
                ♻️
              </motion.div>
              <h3 className="text-xl font-bold text-orange-primary mb-2">
                Sustainability
              </h3>
              <p className="text-gray-600">
                Women lead the way in sustainable tourism practices
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhyTourism;
