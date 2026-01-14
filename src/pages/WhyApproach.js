import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BackgroundAnimation from '../components/BackgroundAnimation';

const WhyApproach = () => {
  const [activeTab, setActiveTab] = useState('why');

  const impactAreas = [
    {
      title: 'Stronger local economies',
      icon: '/images/Impact of Empowering Women in Tourism.svg',
      description: 'Women-led tourism creates sustainable income streams for families and communities',
      color: 'from-orange-400 to-orange-600',
    },
    {
      title: 'Preserved cultural heritage',
      icon: '/images/Impact of Empowering Women in Tourism (2).svg',
      description: 'Women are guardians of traditions, crafts, and cultural knowledge',
      color: 'from-orange-500 to-orange-700',
    },
    {
      title: 'Resilient communities',
      icon: '/images/Impact of Empowering Women in Tourism (3).svg',
      description: 'Empowered women strengthen social fabric and community wellbeing',
      color: 'from-orange-primary to-orange-secondary',
    },
    {
      title: 'Authentic visitor experiences',
      icon: '/images/Impact of Empowering Women in Tourism (4).svg',
      description: 'Women bring warmth, authenticity, and genuine cultural connections',
      color: 'from-orange-600 to-orange-primary',
    },
  ];

  const howWeWork = [
    {
      title: 'Capacity-building & training',
      icon: '/images/Our Approach.svg',
      details: 'Equipping women with practical skills for tourism careers',
    },
    {
      title: 'Mentorship & coaching',
      icon: '/images/Our Approach (2).svg',
      details: 'One-on-one guidance from industry leaders and successful women',
    },
    {
      title: 'Industry partnerships',
      icon: '/images/Our Approach (3).svg',
      details: 'Collaborating with tourism businesses for opportunities and pathways',
    },
    {
      title: 'Community-based tourism',
      icon: '/images/Our Approach (4).svg',
      details: 'Empowering women from local communities, including those shifting from other industries, to lead and grow sustainable tourism initiatives.',
    },
    {
      title: 'Gender-inclusive advocacy',
      icon: '/images/Our Approach (5).svg',
      details: 'Championing policies that support women in tourism leadership',
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
            src="/images/Why%20Tourism%20%26%20Our%20Approach_result.webp"
            alt="Tourism industry"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-primary/20 to-orange-secondary/20"></div>
        </div>
        
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white opacity-10 rounded-full"
              style={{
                width: Math.random() * 80 + 40,
                height: Math.random() * 80 + 40,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, Math.random() * 30 - 15, 0],
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

        <div className="max-w-6xl mx-auto text-center relative z-30">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            className="text-7xl mb-6"
          >
            🌟
          </motion.div>
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold drop-shadow-2xl"
          >
            Why Tourism & Our Approach
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 text-2xl md:text-3xl font-light drop-shadow-lg"
          >
            The power of the industry and how we work
          </motion.p>
        </div>
      </motion.section>

      {/* Why Tourism Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
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
              Why Tourism?
            </motion.h2>
            <div className="w-32 h-1 bg-gradient-orange mx-auto rounded-full mb-8"></div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            >
              Tourism is one of the most <span className="font-bold text-orange-primary">inclusive industries</span>  creating opportunities from grassroots to professional levels and supporting{' '}
              <span className="font-bold text-orange-primary">numerous interconnected industries  across the economy to sustain.</span>.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-orange-100">
                <div className="mb-4 flex justify-center">
                  <img src="/images/Why Tourism.svg" alt="Grassroots Opportunities" className="mx-auto w-12 h-12 md:w-16 md:h-16 object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-orange-primary mb-4">Grassroots Opportunities</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Women in rural and urban communities can engage in tourism through homestays, handicrafts, guiding services, catering, cultural experiences, and other community-based enterprises.                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-orange-100">
                <div className="mb-4 flex justify-center">
                  <img src="/images/Why Tourism (2).svg" alt="Professional Pathways" className="mx-auto w-12 h-12 md:w-16 md:h-16 object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-orange-primary mb-4">Professional Pathways</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Careers in hotel management, travel operations, marketing, entrepreneurship, and leadership roles within the industry.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact of Empowering Women Section */}
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
              Impact of Empowering Women in Tourism
            </motion.h2>
            <div className="w-32 h-1 bg-gradient-orange mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impactAreas.map((impact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-orange blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl"></div>
                <div className={`relative bg-gradient-to-br ${impact.color} text-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300`}>
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                    className="mb-6 flex justify-center"
                  >
                    <img src={impact.icon} alt={impact.title} className="w-20 h-20 md:w-24 md:h-24 object-contain" />
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{impact.title}</h3>
                  <p className="text-lg leading-relaxed opacity-95">{impact.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 via-white to-gray-50">
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
              Our Approach
            </motion.h2>
            <div className="w-32 h-1 bg-gradient-orange mx-auto rounded-full mb-8"></div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            >
              A <span className="font-bold text-orange-primary">layered, long-term empowerment model</span> that creates sustainable change
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="bg-gradient-orange text-white p-10 md:p-14 rounded-3xl shadow-2xl text-center relative overflow-hidden">
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
                  🎯
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">How We Work</h3>
                <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
                  We combine strategic interventions with community engagement to create lasting transformation
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {howWeWork.map((method, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-orange-100 hover:border-orange-primary cursor-pointer group"
              >
                <motion.div
                  whileHover={{ rotate: [0, -15, 15, 0], scale: 1.2 }}
                  className="w-16 h-16 bg-gradient-orange rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:shadow-xl transition-shadow"
                >
                  <img src={method.icon} alt={method.title} className="w-8 h-8 md:w-10 md:h-10 object-contain" />
                </motion.div>
                <div className="absolute top-6 right-6 text-5xl font-bold text-orange-primary opacity-10">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-orange-primary mb-4 group-hover:text-orange-secondary transition-colors">
                  {method.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{method.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Men as Allies Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.h2
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-4xl md:text-5xl font-bold text-gradient mb-6"
            >
              Men as Allies
            </motion.h2>
            <div className="w-32 h-1 bg-gradient-orange mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-orange blur-2xl opacity-20 rounded-3xl"></div>
            <div className="relative bg-gradient-to-br from-orange-50 to-white p-10 md:p-14 rounded-3xl shadow-xl border-2 border-orange-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-8xl mb-6"
                  >
                    🤝
                  </motion.div>
                  <h3 className="text-3xl font-bold text-orange-primary mb-6">
                    The Importance of Shared Responsibility
                  </h3>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Gender equality is not solely a women's issue it requires the active participation of men as{' '}
                    <span className="font-bold text-orange-primary">partners, mentors, and advocates</span>.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  {['Partners in Progress', 'Mentors & Coaches', 'Advocates for Change'].map((role, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 }}
                      whileHover={{ scale: 1.05, x: 10 }}
                      className="bg-gradient-orange text-white p-6 rounded-2xl shadow-lg cursor-pointer"
                    >
                      <div className="flex items-center">
                        <div className="text-3xl mr-4">✓</div>
                        <div className="text-xl font-bold">{role}</div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-12 text-center"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-orange-primary">
                  <p className="text-xl text-gray-700 leading-relaxed italic">
                    We invite men to stand alongside women not behind or ahead as allies in creating a tourism industry, and interconnected industries, where everyone thrives.                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhyApproach;
