import React, { useState } from 'react';
import { motion } from 'framer-motion';

const JoinContact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '', role: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    alert('Thank you for joining the movement! We will be in touch soon.'); 
    setForm({ name: '', email: '', message: '', role: '' }); 
  };

  const audienceTypes = [
    {
      title: 'Women Seeking for Empowerment as Beneficiaries',
      icon: '/images/Join the Movement.svg',
      description: 'Join training programs, mentorship, and pathways to leadership in tourism',
      color: 'from-orange-400 to-orange-600',
    },
    {
      title: 'Government and Non-Government Institutions',
      icon: '/images/Join the Movement (2).svg',
      description: 'Partner with us to create policies and programs that empower women in tourism',
      color: 'from-orange-500 to-orange-700',
    },
    {
      title: 'International Organizations',
      icon: '/images/Join the Movement (3).svg',
      description: 'Collaborate globally to scale impact and share best practices',
      color: 'from-orange-primary to-orange-secondary',
    },
    {
      title: 'Tourism Industry Stakeholders',
      icon: '/images/Join the Movement (4).svg',
      description: 'Create inclusive opportunities and sustainable growth in tourism sector',
      color: 'from-orange-400 to-orange-600',
    },
    {
      title: 'Other Industry Partners',
      icon: '/images/Join the Movement (5).svg',
      description: 'Bring your expertise and resources to support women empowerment',
      color: 'from-orange-500 to-orange-700',
    },
    {
      title: 'Universities',
      icon: '/images/Join the Movement (6).svg',
      description: 'Research, educate, and develop future leaders in sustainable tourism',
      color: 'from-orange-primary to-orange-secondary',
    },
    {
      title: 'Volunteers',
      icon: '/images/Join the Movement (7).svg',
      description: 'Contribute your time and skills to make a meaningful difference',
      color: 'from-orange-400 to-orange-600',
    },
    {
      title: 'Well Wishers',
      icon: '/images/Join the Movement (8).svg',
      description: 'Support our mission and help us reach more women across communities',
      color: 'from-orange-500 to-orange-700',
    },
  ];

  const logoElements = [
    {
      element: '1000 Dots',
      meaning: 'Each Representing 01 Empowered Woman',
      icon: '•••',
    },
    {
      element: 'Ten Rings',
      meaning: 'Collective Growing Strength & Unity',
      icon: '⭕',
    },
    {
      element: '05 Ring Colours',
      meaning: 'Project Objectives',
      icon: '🎨',
    },
    {
      element: 'W',
      meaning: 'Rising Women as the Heart of Everything',
      icon: 'W',
    },
    {
      element: 'Middle Dot',
      meaning: 'The Founder',
      icon: '●',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <motion.section 
        className="relative bg-gradient-orange text-white py-24 px-4 overflow-hidden" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Join%20the%20Movement%20_%20Contact_result.webp"
            alt="Diverse women together"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-primary/20 to-orange-secondary/20"></div>
        </div>
        
        {/* Animated Background */}
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

        <div className="max-w-6xl mx-auto text-center relative z-30">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            className="text-7xl mb-6"
          >
            ✨
          </motion.div>
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold drop-shadow-2xl"
          >
            Join the Movement
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 text-2xl md:text-3xl font-light drop-shadow-lg"
          >
            Get involved, partner, mentor or connect with us
          </motion.p>
        </div>
      </motion.section>

      {/* Join the Movement Section */}
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
              Join the Movement
            </motion.h2>
            <div className="w-32 h-1 bg-gradient-orange mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We Invite Female Beneficiaries, Allies, Government Institutions, National & International Associations, National & International Universities, Non-Government Organizations, Social & Welfare Associations, Tourism Industry Stakeholders as Partners, Resource Personals, Private Companies, Volunteers and Well-wishers.....
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {audienceTypes.map((audience, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-orange blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl"></div>
                <div className={`relative bg-gradient-to-br ${audience.color} text-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300`}>
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                    className="mb-6 flex justify-center"
                  >
                    <img src={audience.icon} alt={audience.title} className="w-24 h-24 md:w-28 md:h-28 object-contain" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4">{audience.title}</h3>
                  <p className="text-lg leading-relaxed opacity-95">{audience.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Meaning Section */}
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
              The 1000Women Logo Meaning
            </motion.h2>
            <div className="w-32 h-1 bg-gradient-orange mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {logoElements.map((element, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ scale: 1.08, rotate: [0, -3, 3, 0] }}
                className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-orange-100 hover:border-orange-primary text-center"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="text-5xl font-bold text-orange-primary mb-4"
                >
                  {element.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-orange-primary mb-3">{element.element}</h3>
                <p className="text-gray-700 leading-relaxed">{element.meaning}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-orange text-white p-10 rounded-3xl shadow-2xl max-w-3xl mx-auto relative overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -top-20 -right-20 w-64 h-64 bg-white opacity-10 rounded-full"
              />
              <div className="relative z-10">
                <div className="text-6xl mb-6">🔄</div>
                <p className="text-2xl leading-relaxed font-semibold">
                  Every element of our logo tells the Story of Unity, Empowerment and Sustainable Growth in Tourism for a Thriving Future...
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder's Message Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 via-white to-gray-50">
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
              Founder's Message
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
            <div className="absolute inset-0 bg-gradient-orange blur-3xl opacity-20 rounded-3xl"></div>
            <div className="relative bg-white p-10 md:p-16 rounded-3xl shadow-2xl border-2 border-orange-100">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 right-8 text-6xl opacity-20"
              >
                💬
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    className="w-40 h-40 bg-gradient-orange rounded-full mx-auto mb-6 flex items-center justify-center text-6xl shadow-2xl"
                  >
                    👤
                  </motion.div>
                  <h3 className="text-2xl font-bold text-orange-primary mb-2">Lashika Vithanage</h3>
                  <p className="text-gray-600 font-medium">Founder | 1000Women</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="md:col-span-2"
                >
                  <div className="relative">
                    <div className="absolute -left-4 -top-4 text-6xl text-orange-primary opacity-30">"</div>
                    <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed italic pl-8 pr-8 mb-6">
                      When women are empowered with confidence, skills, income, leadership and community, tourism doesn't just grow it thrives with purpose.
                    </blockquote>
                    <div className="absolute -right-4 -bottom-4 text-6xl text-orange-primary opacity-30">"</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact & Connect Section */}
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
              Contact & Connect
            </motion.h2>
            <div className="w-32 h-1 bg-gradient-orange mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-orange-50 to-white p-8 md:p-10 rounded-3xl shadow-xl border-2 border-orange-100">
                <h3 className="text-3xl font-bold text-gradient mb-8">Get in Touch</h3>
                
                <div className="space-y-6">
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-start"
                  >
                    <div className="w-12 h-12 bg-gradient-orange text-white rounded-xl flex items-center justify-center text-2xl mr-4 flex-shrink-0 shadow-lg">
                      📞
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-semibold mb-1">Phone</p>
                      <p className="text-xl font-bold text-gray-800">+94 777 725 339</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-start"
                  >
                    <div className="w-12 h-12 bg-gradient-orange text-white rounded-xl flex items-center justify-center text-2xl mr-4 flex-shrink-0 shadow-lg">
                      📧
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-semibold mb-1">Email</p>
                      <p className="text-xl font-bold text-gray-800">hello@1000women.lk</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-start"
                  >
                    <div className="w-12 h-12 bg-gradient-orange text-white rounded-xl flex items-center justify-center text-2xl mr-4 flex-shrink-0 shadow-lg">
                      🌐
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-semibold mb-1">Website</p>
                      <p className="text-xl font-bold text-gray-800">www.1000women.lk</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-start"
                  >
                    <div className="w-12 h-12 bg-gradient-orange text-white rounded-xl flex items-center justify-center text-2xl mr-4 flex-shrink-0 shadow-lg">
                      📱
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-semibold mb-1">Social Media</p>
                      <p className="text-xl font-bold text-gray-800">@1000Women</p>
                      <div className="flex gap-3 mt-3">
                        {['Facebook', 'Instagram', 'LinkedIn'].map((platform, idx) => (
                          <motion.button
                            key={idx}
                            whileHover={{ scale: 1.1, y: -3 }}
                            className="bg-gradient-orange text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md"
                          >
                            {platform}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border-2 border-orange-100"
            >
              <h3 className="text-3xl font-bold text-gradient mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input 
                    name="name" 
                    value={form.name} 
                    onChange={handleChange} 
                    placeholder="Your name" 
                    required 
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-primary focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input 
                    name="email" 
                    value={form.email} 
                    onChange={handleChange} 
                    placeholder="your@email.com" 
                    type="email" 
                    required 
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">I am a...</label>
                  <select 
                    name="role" 
                    value={form.role} 
                    onChange={handleChange} 
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-primary focus:outline-none transition-colors"
                  >
                    <option value="">Select your role</option>
                    <option value="woman">Woman seeking opportunities</option>
                    <option value="partner">Industry partner</option>
                    <option value="mentor">Mentor/Ally</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea 
                    name="message" 
                    value={form.message} 
                    onChange={handleChange} 
                    placeholder="Tell us how you'd like to get involved..." 
                    rows="5" 
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-primary focus:outline-none transition-colors resize-none"
                  />
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.03 }} 
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-gradient-orange text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transition-all" 
                  type="submit"
                >
                  Join the Movement ✨
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinContact;
