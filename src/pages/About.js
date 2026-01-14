import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BackgroundAnimation from '../components/BackgroundAnimation';

const About = () => {
  

  const pillars = [
    {
      title: 'Confidence',
      icon: <img src="/images/Our%20Mission.svg" alt="Confidence" className="mx-auto w-16 h-16 object-contain" />,
      color: 'from-orange-400 to-orange-600',
      description: 'Confidence is the foundation of transformation.',
      details: 'We work to strengthen women\'s self-belief, professional identity and voice—helping them recognize their value, claim space and participate confidently in the tourism ecosystem.',
    },
    {
      title: 'Skill',
      icon: <img src="/images/Our%20Mission%20%282%29.svg" alt="Skill" className="mx-auto w-16 h-16 object-contain" />,
      color: 'from-orange-500 to-orange-700',
      description: 'Skills open doors.',
      details: '1000Women provides access to tourism-relevant skills including service excellence, communication, entrepreneurship, digital literacy, leadership, and business management—equipping women to compete and grow in a dynamic industry.',
    },
    {
      title: 'Income',
      icon: <img src="/images/Our%20Mission%20%283%29.svg" alt="Income" className="mx-auto w-16 h-16 object-contain" />,
      color: 'from-orange-primary to-orange-secondary',
      description: 'Economic independence creates choice.',
      details: 'We support women in developing sustainable income streams through employment, entrepreneurship, community tourism, and value-added tourism services—ensuring empowerment translates into financial stability.',
    },
    {
      title: 'Leadership',
      icon: <img src="/images/Our%20Mission%20%284%29.svg" alt="Leadership" className="mx-auto w-16 h-16 object-contain" />,
      color: 'from-orange-600 to-orange-primary',
      description: 'Leadership changes systems.',
      details: '1000Women nurtures women as decision-makers, role models, and change agents—encouraging participation in leadership roles within businesses, communities, and tourism governance.',
    },
    {
      title: 'Community',
      icon: <img src="/images/Our%20Mission%20%285%29.svg" alt="Community" className="mx-auto w-16 h-16 object-contain" />,
      color: 'from-orange-secondary to-orange-400',
      description: 'Empowerment grows stronger when shared.',
      details: 'We foster supportive networks where women learn together, collaborate, mentor one another, and rise collectively—creating lasting impact beyond individuals.',
    },
  ];

  const timeline = [
    { year: '2+ Decades', title: 'Founder\'s Experience', description: 'In tourism industry' },
    { year: 'Today', title: 'Launch', description: '1000Women Initiative' },
    { year: 'Goal', title: 'Empower', description: '1,000 Women' },
    { year: 'Vision', title: 'Transform', description: 'Tourism Industry' },
  ];

  const ctaIcons = [
    '/images/Mentorship.svg',
    '/images/Mentorship (2).svg',
    '/images/Mentorship (3).svg',
    '/images/Mentorship (4).svg',
  ];

  return (
    <div className="min-h-screen bg-white pt-20 relative overflow-x-hidden">
      <BackgroundAnimation />
      {/* Enhanced Header with Particles */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-orange text-white py-32 px-4 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/About%20Us_result.webp"
            alt="Women leadership"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-primary/20 to-orange-secondary/20"></div>
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
                x: [0, Math.random() * 20 - 10, 0],
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

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="inline-block mb-6"
          >
            <div className="text-8xl mb-4">✨</div>
          </motion.div>
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold mb-6 drop-shadow-2xl"
          >
            About 1000Women
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl md:text-3xl font-light drop-shadow-lg"
          >
            Our Story, Vision, and Mission
          </motion.p>
        </div>
      </motion.section>

      {/* Our Story - Enhanced with Interactive Cards */}
      <section className="py-20 px-4">
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
              Our Story
            </motion.h2>
            <div className="w-32 h-1 bg-gradient-orange mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Story Content */}
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
                <p className="text-2xl text-gray-800 leading-relaxed">
                  <span className="font-bold text-orange-primary text-3xl">1000Women</span> was born from <span className="font-bold">lived experience.</span>
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ x: 10 }}
                className="bg-white p-8 rounded-2xl shadow-xl border-2 border-orange-100"
              >
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  Our Founder brings over <span className="font-bold text-orange-primary text-2xl">20+ years</span> of experience in the tourism industry, working closely with destinations, communities, tour operators, hospitality professionals, Government and Non-Government institutions, National & International Associations and global partners.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  Alongside tourism, her work has extended into community development, women-led livelihood initiatives, leadership training, capacity building, and social impact projects across diverse sectors. As a mentor to many individuals and emerging leaders, she has guided journeys of growth, resilience, and self-belief particularly among women striving to build sustainable livelihoods and purposeful careers.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mt-6">
                  Across all these fields, one truth remains clear: women are the backbone of Local Economies and specially in Tourism Industry, yet they face significant gaps in:
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-orange-100 to-orange-50 p-8 rounded-2xl shadow-lg"
              >
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                  {['Inspiration', 'Knowledge', 'Skills', 'Training', 'Leadership', 'Financial Support'].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                      className="bg-gradient-orange text-white p-6 rounded-xl shadow-lg text-center font-bold text-xl"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Image with Overlay Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-3xl overflow-hidden shadow-2xl relative group"
              >
                <img
                  src="/images/about%20gr_result.webp"
                  alt="Women in tourism leadership"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-primary via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-white text-3xl font-bold mb-4 drop-shadow-lg">
                    Empowering Women Leaders
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-xl text-center"
                    >
                      <div className="text-4xl font-bold text-white">20+</div>
                      <div className="text-white text-sm">Years Experience</div>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-xl text-center"
                    >
                      <div className="text-4xl font-bold text-white">1000</div>
                      <div className="text-white text-sm">Women Goal</div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20"
          >
            <h3 className="text-3xl font-bold text-center text-gradient mb-12">Our Journey</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                  className="relative bg-gradient-orange text-white p-6 rounded-2xl shadow-xl text-center"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-2 right-2 text-2xl opacity-30"
                  >
                    ⭐
                  </motion.div>
                  <div className="text-3xl font-bold mb-2">{item.year}</div>
                  <div className="text-xl font-semibold mb-1">{item.title}</div>
                  <div className="text-sm opacity-90">{item.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-white">
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
              className="text-5xl md:text-6xl font-bold text-gradient mb-6"
            >
              Why We Exist
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
            <div className="relative bg-gradient-orange text-white p-12 md:p-16 rounded-3xl shadow-2xl text-center">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-6xl mb-6"
              >
                <img src="/images/Why%20We%20Exist.svg" alt="Why We Exist" className="mx-auto w-16 h-16 object-cover" />
              </motion.div>
              <p className="text-3xl md:text-4xl font-bold mb-8">
                This is <span className="underline">not charity</span>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {['Empowerment', 'Dignity', 'Opportunity'].map((word, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    whileHover={{ scale: 1.15, rotate: [0, -3, 3, 0] }}
                    className="bg-white text-orange-primary p-6 rounded-2xl shadow-xl font-bold text-2xl"
                  >
                    {word}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision - Interactive Design */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-orange-50 relative overflow-hidden">
        {/* Background decoration */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-orange opacity-10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-orange opacity-10 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto relative z-10">
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
              Our Vision
            </motion.h2>
            <div className="w-32 h-1 bg-gradient-orange mx-auto rounded-full mb-8"></div>
            <p className="text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              A future where women are:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { text: 'Confident women', icon: <img src="/images/Our%20Vision.svg" alt="Confident women" className="mx-auto w-20 h-20 object-contain" />, color: 'from-orange-400 to-orange-600' },
              { text: 'Skilled & professional', icon: <img src="/images/Our%20Vision%20%282%29.svg" alt="Skilled & professional" className="mx-auto w-20 h-20 object-contain" />, color: 'from-orange-500 to-orange-700' },
              { text: 'Financially independent', icon: <img src="/images/Our%20Vision%20%283%29.svg" alt="Financially independent" className="mx-auto w-20 h-20 object-contain" />, color: 'from-orange-primary to-orange-secondary' },
              { text: 'Represented in leadership', icon: <img src="/images/Our%20Vision%20%284%29.svg" alt="Represented in leadership" className="mx-auto w-20 h-20 object-contain" />, color: 'from-orange-600 to-orange-primary' },
              { text: 'Supported by communities', icon: <img src="/images/Our%20Vision%20%285%29.svg" alt="Supported by communities" className="mx-auto w-20 h-20 object-contain" />, color: 'from-orange-secondary to-orange-400' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }}
                className={`bg-gradient-to-br ${item.color} text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all cursor-pointer`}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <div className="flex items-start">
                  <span className="bg-white text-orange-primary w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-bold">
                    ✓
                  </span>
                  <p className="text-xl font-semibold leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-gradient-orange text-white px-12 py-8 rounded-3xl shadow-2xl"
            >
              <p className="text-2xl md:text-3xl font-bold leading-relaxed">
                Tourism thrives because women are central to its growth 🌟
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission - Enhanced Interactive */}
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
              Our Mission
            </motion.h2>
            <div className="w-32 h-1 bg-gradient-orange mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-orange-50 to-white p-12 rounded-3xl shadow-xl mb-12 border-2 border-orange-100"
          >
            <p className="text-2xl text-gray-700 leading-relaxed mb-8 text-center">
              To empower <motion.span 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block bg-gradient-orange text-white px-6 py-2 rounded-full font-bold text-3xl shadow-lg"
              >
                1,000 women
              </motion.span> across tourism destinations through a structured, holistic framework focused on{' '}
              <span className="font-bold text-orange-primary">"five interconnected pillars"</span>:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                  className={`bg-gradient-to-br ${pillar.color} text-white p-6 rounded-2xl text-center font-bold shadow-xl cursor-pointer`}
                >
                  <div className="text-4xl mb-2">{pillar.icon}</div>
                  <div className="text-lg">{pillar.title}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-orange text-white p-10 rounded-3xl shadow-2xl text-center"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {['Mentorship', 'Knowledge & Skills', 'Partnerships', 'Empowerment'].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-xl"
                >
                  <div className="mb-2">
                    <img src={ctaIcons[idx]} alt={item} className="mx-auto w-10 h-10 md:w-12 md:h-12 object-contain" />
                  </div>
                  <div className="font-semibold">{item}</div>
                </motion.div>
              ))}
            </div>
            <p className="text-2xl leading-relaxed font-medium">
              1000Women creates pathways for women to grow, lead, and sustain livelihoods within tourism.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-orange-50">
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
              Meet the Founder
            </motion.h2>
            <div className="w-32 h-1 bg-gradient-orange mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <div className="bg-gradient-orange p-12 md:p-16 text-white text-center">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-40 h-40 bg-white bg-opacity-20 rounded-full mx-auto mb-8 flex items-center justify-center text-7xl backdrop-blur-sm"
                  >
                    👤
                  </motion.div>
                  <h3 className="text-4xl font-bold mb-3">Lashika Vithanage</h3>
                  <p className="text-xl opacity-90 mb-6">Founder & Visionary Leader</p>
                  <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full text-lg font-semibold">
                    20+ Years in Tourism Industry
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                whileHover={{ x: 10 }}
                className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-orange-primary"
              >
                <h4 className="text-2xl font-bold text-orange-primary mb-4">Background & Experience</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                 With over two decades of experience working across destinations, communities, tour operators, hospitality professionals, Government and Non-Government institutions, National & International Associations and global partners, Lashika has witnessed firsthand the transformative power of women in community, speciallin in tourism and the barriers they face.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-orange-secondary"
              >
                <h4 className="text-2xl font-bold text-orange-primary mb-4">The Vision</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Driven by lived experience and a deep understanding of the industry's dynamics, Lashika founded 1000Women to create systematic pathways for women to not just participate, but to lead and thrive in tourism.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-xl"
              >
                <h4 className="text-2xl font-bold text-orange-primary mb-4">Core Belief</h4>
                <p className="text-xl text-gray-800 leading-relaxed font-medium italic">
                  "Empowerment is not charity it's about creating dignified opportunities, building confidence, and ensuring that every woman has the tools to succeed on her own terms."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We're Different Section */}
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
              How We're Different
            </motion.h2>
            <div className="w-32 h-1 bg-gradient-orange mx-auto rounded-full mb-8"></div>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
              A holistic, sustainable approach to women's empowerment from other industries into tourism
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Industry-Focused',
                icon: <img src="/images/How%20We%27re%20Different.svg" alt="Industry-Focused" className="mx-auto w-16 h-16 object-contain" />,
                description: 'Specifically designed for the tourism sector, addressing its unique opportunities and challenges, while drawing insights from both tourism and other industries.',
                color: 'from-orange-400 to-orange-600'
              },
              {
                title: 'Partnership-Driven',
                icon: <img src="/images/How%20We%27re%20Different%20%282%29.svg" alt="Holistic Framework" className="mx-auto w-16 h-16 object-contain" />,
                description: 'Collaborating with communities, partners, sponsors, volunteers, and allies to create meaningful opportunities and clear pathways.',
                color: 'from-orange-500 to-orange-700'
              },
              {
                title: 'Grassroots to Professional',
                icon: <img src="/images/How%20We%27re%20Different%20%283%29.svg" alt="Grassroots to Professional" className="mx-auto w-16 h-16 object-contain" />,
                description: 'Supporting women at every level from community-based tourism to corporate leadership roles',
                color: 'from-orange-primary to-orange-secondary'
              },
              {
                title: 'Long-term Sustainability',
                icon: <img src="/images/How%20We%27re%20Different%20%284%29.svg" alt="Long-term Sustainability" className="mx-auto w-16 h-16 object-contain" />,
                description: 'Building lasting networks, mentorship pipelines, and advocacy for systemic change not one-time interventions',
                color: 'from-orange-600 to-orange-primary'
              },
              {
                title: 'Partnership-Driven',
                icon: <img src="/images/How%20We%27re%20Different%20%285%29.svg" alt="Partnership-Driven" className="mx-auto w-16 h-16 object-contain" />,
                description: 'Collaborating with industry stakeholders, communities, and allies to create real opportunities and pathways',
                color: 'from-orange-secondary to-orange-400'
              },
              {
                title: 'Measurable Impact',
                icon: <img src="/images/How%20We%27re%20Different%20%286%29.svg" alt="Measurable Impact" className="mx-auto w-16 h-16 object-contain" />,
                description: 'Clear goal of empowering 1,000 women with trackable outcomes in confidence, skills, income, and leadership',
                color: 'from-orange-400 to-orange-500'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-orange blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl"></div>
                <div className={`relative bg-gradient-to-br ${item.color} text-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300`}>
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                    className="text-6xl mb-4"
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-lg leading-relaxed opacity-95">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Endorsements Section */}
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
              Endorsements & Support
            </motion.h2>
            <div className="w-32 h-1 bg-gradient-orange mx-auto rounded-full mb-8"></div>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
              Voices of support from partners, beneficiaries, and allies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Industry Partner',
                role: 'Tourism Stakeholder',
                quote: '1000Women is filling a critical gap in the tourism industry by focusing on women\'s holistic empowerment.',
                avatar: '/images/Endorsements & Support.svg'
              },
              {
                name: 'Beneficiary',
                role: 'Women in Tourism',
                quote: 'This initiative gave me the confidence and skills to pursue leadership roles I never thought possible.',
                avatar: '/images/Endorsements & Support (2).svg'
              },
              {
                name: 'International Organization',
                role: 'Global Partner',
                quote: 'A model that can be scaled globally—addressing both economic empowerment and sustainable tourism.',
                avatar: '/images/Endorsements & Support (3).svg'
              },
            ].map((endorsement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-orange-100"
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="mb-6 flex justify-center"
                  >
                    <img src={endorsement.avatar} alt={endorsement.name} className="w-20 h-20 object-contain" />
                  </motion.div>
                  <div className="mb-6">
                    <div className="text-orange-primary text-4xl mb-4">"“"</div>
                    <p className="text-lg text-gray-700 leading-relaxed italic mb-4">
                      {endorsement.quote}
                    </p>
                    <div className="text-orange-primary text-4xl rotate-180">"“"</div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-1">{endorsement.name}</h4>
                  <p className="text-orange-primary font-semibold">{endorsement.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <Link to="/join-contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-orange text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all text-lg"
              >
                Add Your Voice →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-orange blur-3xl opacity-20 rounded-3xl"></div>
            <div className="relative bg-gradient-orange text-white p-12 md:p-16 rounded-3xl shadow-2xl text-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-7xl mb-6"
              >
                <img src="/images/Be%20Part%20of%20the%20Change.svg" alt="Be Part of the Change" className="mx-auto w-24 h-24 md:w-32 md:h-32 object-contain" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Be Part of the Change
              </h2>
              <p className="text-2xl md:text-3xl leading-relaxed mb-12 max-w-3xl mx-auto">
                Whether you are a female beneficiary, ally, government institution, national or international association, university, non-government or social welfare organization, tourism industry stakeholder, resource person, private company, volunteer, or well-wisher there is a place for you in the 1000Women movement.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="/join-contact"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-white text-orange-primary px-10 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transform transition-all duration-300 shadow-2xl"
                >
                  Join the Movement →
                </motion.a>
                <motion.a
                  href="/mission-pillars"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-white bg-opacity-20 backdrop-blur-sm border-4 border-white text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-white hover:text-orange-primary transform transition-all duration-300"
                >
                  Explore Our Pillars
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
